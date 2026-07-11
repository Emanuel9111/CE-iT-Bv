# DROP-IN ASSET IMPLEMENTATION NOTE

Use the exact filenames in `public/images/`. Do not keep text placeholders when an asset exists.

## Hero animation
Layer `/images/hero-network-overlay.svg` absolutely over `/images/hero-building.png`. Animate `#backbone`, then each floor path by `stroke-dasharray: 100; stroke-dashoffset: 100 -> 0`. Stagger AP node opacity/scale, then pulse `#rack-glow`. Synchronize states 01-05 in the right-hand list. Respect `prefers-reduced-motion`.

## Workflow
Replace simple empty icon boxes with:
- Analyse: `/images/step-analyse.png`
- Bekabeling: `/images/step-bekabeling.png`
- Apparatuur: `/images/step-apparatuur.png`
- Wifi: `/images/step-wifi.png`
- Beheer: `/images/step-beheer.png`
Use `/images/workflow-connector.svg` behind the cards on desktop and animate the path from left to right as the section enters view.

## Logo
Use `/images/ce-it-logo-original.png` in header and footer. Do not redraw it.
