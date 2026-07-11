# KICKOFF — CE-iT Netwerkbeheer website v2

> Gebruik dit bestand samen met `01-DESIGN-BRIEF.md`, `02-CONTENT-NL.md` en `04-ANIMATION-SPEC.md`.

## Doel

Bouw een snelle, professionele en visueel sterke website voor CE-iT Netwerkbeheer.

De bezoeker moet binnen twee seconden begrijpen:

**CE-iT ontwerpt, bekabelt, installeert en beheert professionele netwerken.**

De twee hoofdgroepen zijn:

1. studentenhuisvesting / residentiële gebouwen
2. KMO's en bedrijven

De website is overwegend light, met één of twee sterke dark secties.

---

## Stack

Gebruik:

- Astro
- Tailwind CSS
- TypeScript
- lichte animatiebibliotheek alleen indien nodig

Voorkeur voor animaties:

1. CSS / Web Animations API
2. SVG + IntersectionObserver
3. Motion / GSAP alleen als complexe scroll-timing dat echt vereist

Gebruik geen zware dependency voor simpele fades.

---

## Belangrijkste wijziging tegenover vorige versie

De vorige designrichting was te donker en te abstract.

De nieuwe richting is:

- 80% light
- 20% dark
- groot hero-beeld / netwerkvisualisatie
- directe uitleg van wat CE-iT doet
- studentenhuisvesting + KMO's direct zichtbaar
- interactieve gebouwvisualisatie
- technische flow die via animatie wordt uitgelegd

De oude slogan:

`Uw studenten merken de wifi niet. Dat is het punt.`

MAG NIET meer als hero gebruikt worden.

---

# Paginastructuur

Bouw de homepage in deze volgorde:

1. Sticky header
2. Hero met interactieve gebouwvisualisatie
3. Voor wie werken we? — Studentenhuisvesting / KMO's
4. Zo bouwen wij uw netwerk — 5 stappen
5. Oplossingen — 3 hoofdservices
6. UniFi technologie — dark section
7. Projecten / echte infrastructuur
8. Nieuwbouw & renovatie
9. Over CE-iT
10. Contact CTA
11. Footer

---

# Hero — hoogste prioriteit

De hero bepaalt de kwaliteit van de volledige site.

Links:

- eyebrow
- H1
- korte bodytekst
- 2 CTA's
- 3 of 4 trust items

Rechts:

Een interactieve visual van een gebouw / gebouwdoorsnede.

De animatie moet conceptueel tonen:

1. internet komt binnen
2. gateway / firewall wordt actief
3. backbone / bekabeling verschijnt
4. switches / patchkast worden actief
5. AP's verschijnen per verdieping
6. coverage-ringen komen zacht op
7. monitoring dashboard verschijnt

De animatie moet technisch logisch zijn.

Geen cartoonstijl.

Gebruik placeholders zolang de definitieve assets ontbreken.

---

# Assetstrategie

## Echte CE-iT assets

Maak `/public/images/` en `/public/video/` met duidelijke bestandsnamen:

```text
/public/images/studentenhuisvesting-hero.jpg
/public/images/kmo-hero.jpg
/public/images/project-rack-01.jpg
/public/images/project-bekabeling-01.jpg
/public/images/project-ap-01.jpg
/public/images/emanuel-terrein.jpg
/public/images/unifi-gateway.png
/public/images/unifi-switch.png
/public/images/unifi-ap.png
/public/video/network-build-sequence.mp4
```

Tot echte beelden beschikbaar zijn:

- gebruik duidelijke placeholders
- gebruik geen stockfoto's als technische installatie
- gebruik geen neppe AI-netwerkapparatuur

Voor officiële UniFi-productbeelden moet de structuur makkelijk vervangbaar zijn.

---

# Componenten

Maak herbruikbare componenten:

- `Header.astro`
- `Hero.astro`
- `NetworkBuildingVisual.astro`
- `AudienceCard.astro`
- `ProcessStep.astro`
- `ServiceFeature.astro`
- `TechnologyFlow.astro`
- `ProjectCard.astro`
- `SectionEyebrow.astro`
- `Button.astro`
- `Footer.astro`

Interactiecomponenten mogen client-side islands zijn wanneer nodig.

Hou de rest statisch.

---

# Bouwvolgorde

## Fase 1 — Foundation

1. Astro + Tailwind setup
2. kleuren en fonts
3. global spacing
4. container widths
5. buttons
6. focus states
7. section primitives

## Fase 2 — Header

Bouw de nieuwe sticky header.

Gedrag:

- wit / transparant aan top
- blur + subtiele border na scroll
- compacter na scroll
- mobiel menu clean en snel

## Fase 3 — Hero

Bouw eerst een statische versie.

Daarna pas animatie toevoegen.

Reviewpunten:

- begrijpt bezoeker binnen 2 seconden wat CE-iT doet?
- is de H1 sterk genoeg?
- is de gebouwvisual duidelijk?
- zijn de CTA's zichtbaar?

## Fase 4 — Audience section

Twee grote kaarten:

- Studentenhuisvesting
- KMO's & bedrijven

Gebruik grote beelden en weinig tekst.

## Fase 5 — Network process

Bouw de 5 stappen.

Activeer progressief tijdens scroll.

## Fase 6 — Services

Drie grote serviceblokken.

## Fase 7 — UniFi dark section

Gebruik dark background.

Toon visuele flow:

Gateway → Switch → AP → Users

## Fase 8 — Projecten

Echte foto's en duidelijke categorieën.

## Fase 9 — Contact & footer

Eenvoudig, premium en compact.

## Fase 10 — Responsive & quality

- mobiel
- tablet
- desktop
- toetsenbordnavigatie
- reduced motion
- performance
- SEO

---

# Motion rules

Volg `04-ANIMATION-SPEC.md`.

Kernregel:

**Animatie moet uitleg geven, niet alleen decoreren.**

Gebruik maximaal één grote georkestreerde animatie per viewport-sectie.

---

# Belangrijke verboden

Niet doen:

- volledig dark design
- generieke blauwe SaaS-gradient
- 12 identieke kaarten
- neppe AI-hardware
- overdreven glow
- grote ronde pill-buttons overal
- te veel micro-animaties
- lange marketingteksten
- scroll hijacking

---

# Checklist voor Emanuel

Nog aan te leveren:

- [ ] logo in hoge kwaliteit / SVG
- [ ] echte foto's van patchkasten
- [ ] echte foto's van bekabeling
- [ ] echte foto's van AP-installaties
- [ ] foto's van studentengebouwen / projecten
- [ ] foto van KMO / kantoorproject
- [ ] foto van Emanuel op locatie
- [ ] telefoon
- [ ] e-mail
- [ ] regio
- [ ] aantal jaren ervaring
- [ ] definitieve contactformulier-service

---

# Definition of done

De homepage is pas klaar wanneer:

1. een eigenaar binnen 2 seconden begrijpt wat CE-iT doet
2. studentenhuisvesting en KMO's direct herkenbaar zijn
3. bekabeling zichtbaar onderdeel is van het verhaal
4. de gebouwanimatie het netwerkproces logisch uitlegt
5. de site overwegend licht blijft
6. UniFi als technologie zichtbaar is zonder dat CE-iT een kopie van ui.com wordt
7. mobiel even sterk werkt als desktop
