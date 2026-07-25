# CE-iT Netwerkbeheer — website

Statische marketingsite (Astro + Tailwind). Eén pagina, lange scroll.

## Documentatie (bron van waarheid)

- [docs/01-DESIGN-BRIEF.md](docs/01-DESIGN-BRIEF.md) — kleuren, typografie, regels
- [docs/02-CONTENT-NL.md](docs/02-CONTENT-NL.md) — alle teksten
- [docs/03-KICKOFF-CLAUDE-CODE.md](docs/03-KICKOFF-CLAUDE-CODE.md) — bouwplan + checklist

## Ontwikkelen

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # productie-build naar dist/
```

## Afbeeldingen

Originelen staan in `assets/originals/` (volle resolutie, niet gepubliceerd).
De webversies in `public/images/` worden daaruit gegenereerd:

```sh
npm run images            # (her)bouwt public/images/
npm run images -- --check # faalt als public/images achterloopt
```

Nieuwe foto: origineel in `assets/originals/`, `npm run images`, committen.
Details en de bestandsnamenlijst: [assets/originals/README.md](assets/originals/README.md).

## Deploy

Push naar `main` → GitHub Actions bouwt en publiceert naar GitHub Pages
(zie `.github/workflows/deploy.yml`).

## Nog aan te leveren (Emanuel)

Zie checklist in docs/03-KICKOFF en `public/images/README.md`:
echte foto's + video, telefoon/e-mail/LinkedIn (in `src/data/site.ts`),
jaren ervaring + regio, keuze contactformulier-service.
