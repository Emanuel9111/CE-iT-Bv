/**
 * Bouwt de webversies van alle afbeeldingen.
 *
 *   bron  : assets/originals/   (volle resolutie, wordt NIET gepubliceerd)
 *   doel  : public/images/      (geoptimaliseerd, wordt wel gepubliceerd)
 *
 * Gebruik:  npm run images        (of: npm run images -- --check)
 *
 * Waarom een los script en geen astro:assets? De site zet zijn afbeeldingen
 * bewust in public/ (plaatshouder-systeem in SmartImage rekent daarop) en de
 * CI-build gebruikt withastro/action. Door hier vooraf te optimaliseren blijft
 * de build snel en heeft CI geen sharp nodig — de uitvoer staat in git.
 *
 * Nieuwe foto toevoegen: origineel in assets/originals/, breedte hieronder
 * bijzetten als de standaard niet past, dan `npm run images`.
 */
import sharp from 'sharp';
import { mkdirSync, readdirSync, statSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const SRC = path.join(process.cwd(), 'assets', 'originals');
const OUT = path.join(process.cwd(), 'public', 'images');
const check = process.argv.includes('--check');

/**
 * Breedtes = ~2x de breedte waarop de afbeelding op de site getoond wordt
 * (gemeten op de live site), zodat retina-schermen scherp blijven zonder
 * dat iemand pixels downloadt die nooit gebruikt worden.
 *
 * format: 'webp'   → foto's en renders (veel kleuren, gradiënten)
 *         'png'    → logo's en vlakke illustraties; palette-PNG is daar
 *                    kleiner dan WebP en blijft breed ondersteund
 *         'jpeg'   → og-image: social crawlers (LinkedIn, WhatsApp) gaan
 *                    niet betrouwbaar om met WebP
 */
const PLAN = {
  // Hero-render. Breedte 1200 = origineel; de SVG-overlay eroverheen deelt
  // de viewBox 1200x1400, dus de verhouding 6:7 moet exact blijven.
  'hero-building.png': { width: 1200, format: 'webp' },

  // Werkwijze-stappen (weergave ~214px breed)
  'step-analyse.png': { width: 600, format: 'webp' },
  'step-bekabeling.png': { width: 600, format: 'webp' },
  'step-apparatuur.png': { width: 600, format: 'webp' },
  'step-wifi.png': { width: 600, format: 'webp' },

  // UniFi-productfoto's (weergave ~352px breed, origineel tot 3000x3000)
  'unifi-gateway.png': { width: 800, format: 'webp' },
  'unifi-switch.png': { width: 800, format: 'webp' },
  'unifi-ap.png': { width: 800, format: 'webp' },

  // Servicefoto's (weergave ~352px breed)
  'service-netwerk-wifi.jpg': { width: 800, format: 'webp' },
  'service-bekabeling.jpg': { width: 800, format: 'webp' },
  'service-beheer.jpg': { width: 800, format: 'webp' },

  // Doelgroep-banners (weergave ~536px breed)
  'studentenhuisvesting-hero.jpg': { width: 1100, format: 'webp' },
  'kmo-hero.jpg': { width: 1100, format: 'webp' },

  // Projectfoto's (sectie staat nu uit, maar blijft klaar)
  'project-studenten-01.jpg': { width: 800, format: 'webp' },
  'project-rack-01.jpg': { width: 800, format: 'webp' },
  'project-kmo-01.jpg': { width: 800, format: 'webp' },
  'project-bekabeling-01.jpg': { width: 800, format: 'webp' },

  // Deelvoorbeeld voor social. Blijft 1200x630 en wordt JPEG op wit:
  // alpha heeft hier geen functie en crawlers slikken JPEG altijd.
  'og-image.png': { width: 1200, format: 'jpeg', flatten: true },

  // Logo's: vlakke merkkleuren → palette-PNG (kleiner dan WebP).
  // De volledige variant is ook het logo in de Organization-structured-data.
  'logo/ce-it-logo-full.png': { width: 400, format: 'png' },
  'logo/ce-it-logo-wordmark.png': { width: 400, format: 'png' },
};

const EXT = { webp: '.webp', png: '.png', jpeg: '.jpg' };
const kb = (n) => Math.round(n / 1024);

function sources(dir, prefix = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    if (e.isDirectory()) return sources(path.join(dir, e.name), rel);
    return /\.(png|jpe?g)$/i.test(e.name) ? [rel] : [];
  });
}

// Staat een bestand niet in PLAN, dan geldt deze veilige standaard: 1000px
// WebP. Ruim genoeg voor elke plek op de site, nooit megabytes groot.
const DEFAULT = { width: 1000, format: 'webp' };

const files = sources(SRC).sort();
const unplanned = files.filter((f) => !PLAN[f]);
if (unplanned.length) {
  console.log(
    `Nieuw, met standaard ${DEFAULT.width}px ${DEFAULT.format}:\n` +
      unplanned.map((f) => `  - ${f}`).join('\n') +
      `\nAndere breedte nodig? Zet het bestand in PLAN in dit script.\n`
  );
}

let totalIn = 0;
let totalOut = 0;
let stale = 0;
const rows = [];

for (const file of files) {
  const { width, format, flatten } = PLAN[file] ?? DEFAULT;
  const inPath = path.join(SRC, file);
  const outRel = file.replace(/\.(png|jpe?g)$/i, EXT[format]);
  const outPath = path.join(OUT, outRel);

  const meta = await sharp(inPath).metadata();
  let pipe = sharp(inPath).resize({ width, withoutEnlargement: true });
  if (flatten) pipe = pipe.flatten({ background: '#ffffff' });

  if (format === 'webp') pipe = pipe.webp({ quality: 82, effort: 6 });
  else if (format === 'png') pipe = pipe.png({ compressionLevel: 9, palette: true });
  else pipe = pipe.jpeg({ quality: 88, mozjpeg: true });

  const buf = await pipe.toBuffer();
  const inSize = statSync(inPath).size;
  const current = existsSync(outPath) ? statSync(outPath).size : null;

  if (check) {
    if (current !== buf.length) stale++;
  } else {
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, buf);
  }

  totalIn += inSize;
  totalOut += buf.length;
  rows.push({
    bestand: outRel,
    van: `${meta.width}x${meta.height}`,
    naar: `${Math.min(width, meta.width)}px`,
    'KB voor': kb(inSize),
    'KB na': kb(buf.length),
  });
}

console.table(rows);
const pct = Math.round((1 - totalOut / totalIn) * 100);
console.log(`${files.length} afbeeldingen · ${kb(totalIn)} KB → ${kb(totalOut)} KB (${pct}% kleiner)`);

if (check) {
  if (stale) {
    console.error(`\n${stale} bestand(en) in public/images wijken af. Run: npm run images\n`);
    process.exit(1);
  }
  console.log('public/images is up-to-date.');
}
