# Originelen — bron voor alle beelden op de site

Deze map bevat de **volle resolutie** en wordt **niet gepubliceerd**.
`npm run images` maakt hieruit de webversies in `public/images/`
(verkleind + WebP). Publiceer dus nooit rechtstreeks uit deze map.

Nieuwe of vervangende foto:

1. origineel hier neerzetten, met de bestandsnaam uit de tabel hieronder;
2. `npm run images`;
3. `git add assets/originals public/images` en committen.

Zonder plan-regel in `scripts/optimize-images.mjs` krijgt een nieuw bestand
de standaard 1000px WebP. Dat is voor elke plek op de site ruim genoeg —
een eigen breedte instellen is alleen nodig als je scherper of kleiner wil.

GEEN stockfoto's (zie docs/01-DESIGN-BRIEF.md §8). Verwachte bestanden (v2):

| Bestand | Wat | Gebruikt in |
|---|---|---|
| `hero-building.png` | gebouwrender (AI-concept of eigen visual) | Hero |
| `studentenhuisvesting-hero.jpg` | studentenkot / studentenresidentie | Voor wie |
| `kmo-hero.jpg` | professioneel kantoor / bedrijfspand | Voor wie |
| `project-studenten-01.jpg` | studentengebouw | Projecten |
| `project-bekabeling-01.jpg` | nette bekabeling | Projecten |
| `project-kmo-01.jpg` | kantoorproject | Projecten |
| `project-rack-01.jpg` | patchkast / rack | Projecten |
| `emanuel-terrein.jpg` | Emanuel op locatie (staand formaat) | Over CE-iT |
| `unifi-gateway.png` | UniFi gateway (eigen foto of officieel beeld met licentie) | UniFi-sectie |
| `unifi-switch.png` | UniFi switch | UniFi-sectie |
| `unifi-ap.png` | UniFi access point | UniFi-sectie |
| `service-netwerk-wifi.jpg` | TIJDELIJK neutraal servicebeeld (geen CE-iT-project) — vervangen door eigen foto | Wat we doen |
| `service-bekabeling.jpg` | TIJDELIJK neutraal servicebeeld (geen CE-iT-project) — vervangen door eigen foto | Wat we doen |
| `service-beheer.jpg` | TIJDELIJK neutraal servicebeeld (geen CE-iT-project) — vervangen door eigen foto | Wat we doen |
| `step-analyse.png` | gebouw/plan/inspectie | Werkwijze stap 01 |
| `step-bekabeling.png` | gestructureerde bekabeling | Werkwijze stap 02 |
| `step-apparatuur.png` | gateway/switch/rack | Werkwijze stap 03 |
| `step-wifi.png` | AP aan plafond | Werkwijze stap 04 |
| `step-beheer.png` | dashboard/monitoring | Werkwijze stap 05 |
| `logo/ce-it-logo-full.png` | origineel logo met tagline (uit CE-it-logo.pdf) | Footer |
| `logo/ce-it-logo-wordmark.png` | logo zonder tagline | Header |

Video (map `/public/video/`):

| Bestand | Wat |
|---|---|
| `network-build-sequence.mp4` | 8–15s: kabel in switch / rack detail / AP-installatie — stabiel, goed belicht |

Kwaliteitseisen: goed licht, opgeruimd kader, geordende kabels.
Een slechte echte foto wekt mínder vertrouwen dan een placeholder.
