# Gegenereerde map — niet met de hand bewerken

Alles hier wordt gemaakt door `npm run images` uit de originelen in
[`assets/originals/`](../../assets/originals/README.md). Bewerk je een
bestand hier, dan is die wijziging weg bij de volgende run.

De uitvoer staat wél in git: de CI-build (`withastro/action`) kopieert deze
map alleen maar, zodat de build snel blijft en geen sharp nodig heeft.

Formaten: `.webp` voor foto's en renders, palette-`.png` voor de logo's
(daar is PNG kleiner dan WebP), `.jpg` voor `og-image` omdat social
crawlers niet betrouwbaar met WebP omgaan.

Controleren of de map bij de originelen past:

```sh
npm run images -- --check
```
