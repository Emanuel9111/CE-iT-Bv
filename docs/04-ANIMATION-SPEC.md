# CE-iT — Interaction & Animation Specification

> Doel: een interactieve website die professioneel aanvoelt en complexe netwerkconcepten eenvoudig uitlegt.

## 1. Hoofdprincipe

Animatie is functioneel.

Elke beweging moet één van deze drie dingen doen:

1. uitleggen
2. hiërarchie geven
3. feedback geven

Geen beweging om beweging.

---

# 2. Hero — Network Building Sequence

## Startstatus

De gebruiker ziet:

- een licht, clean gebouw
- subtiele doorsnede of architecturale visual
- geen volledige technische overlay

## Sequence

### Stap 1 — Internet

Een dunne teal-lijn komt het gebouw binnen vanaf de buitenzijde.

Label:

`Internet / Fiber`

Duur:

600–900 ms

### Stap 2 — Gateway

Gateway / firewall licht subtiel op.

Geen neon glow.

Gebruik:

- opacity
- kleine scale 0.98 → 1
- status dot

### Stap 3 — Backbone / bekabeling

Een verticale backbone-lijn tekent zichzelf door het gebouw.

Daarna takken lijnen af naar verdiepingen.

Techniek:

- SVG path animation
- stroke-dasharray / stroke-dashoffset

### Stap 4 — Access Points

AP's verschijnen één voor één per verdieping.

Animatie:

- opacity 0 → 1
- translateY 6px → 0
- 120–180 ms stagger

### Stap 5 — Coverage

Rond elk AP verschijnt één zachte ring.

Geen continue pulse.

Ring:

- opacity 0 → 0.18 → 0.08
- scale 0.7 → 1

### Stap 6 — Monitoring

Een dashboard / laptop komt subtiel in beeld.

Label:

`Beheerd door CE-iT`

Einde van de sequence.

---

# 3. Hero interaction

Desktop:

- sequence start zodra hero in viewport is
- daarna mag gebruiker hoveren over labels rechts
- hover op `Bekabeling` highlight alleen kabelroutes
- hover op `Access Points` highlight AP's
- hover op `Beheer` highlight dashboard / monitoring

Mobiel:

- geen hover states
- sequence speelt één keer automatisch
- labels verschijnen onder visual

Reduced motion:

- alle onderdelen staan direct zichtbaar
- geen drawing animation

---

# 4. Audience cards

## Studentenhuisvesting

Hover:

- image scale 1 → 1.025
- subtiele overlay
- enkele AP-markers mogen zichtbaar worden

## KMO's & bedrijven

Hover:

- image scale 1 → 1.025
- subtiele network nodes / verbindingen mogen zichtbaar worden

Duur:

250–350 ms

Geen grote lift.

---

# 5. Process section — 5 stappen

Flow:

`Analyse → Bekabeling → Apparatuur → Wifi → Beheer`

Tijdens scroll:

- stap wordt actief wanneer centrum van viewport bereikt wordt
- connector-lijn vult progressief met teal
- actieve stap krijgt sterkere titel en icoon
- vorige stappen blijven zichtbaar maar rustiger

Desktop:

horizontale flow

Mobiel:

verticale timeline

---

# 6. UniFi technology section

Dark section.

Flow:

`Gateway → Switch → Access Point → Users`

Wanneer sectie binnenkomt:

1. gateway verschijnt
2. connector activeert
3. switch verschijnt
4. connector activeert
5. AP verschijnt
6. eindpunten verschijnen

Timing:

600–1000 ms totaal

Interactie:

hover / focus op component toont korte beschrijving.

Voorbeeld:

`Switches — verbinden access points, uplinks en bekabelde apparaten.`

---

# 7. Project cards

Hover:

- image zoom 1.02
- categorie / projecttype wordt sterker zichtbaar
- CTA arrow schuift 3–4px

Optioneel:

hover op gebouwfoto toont kleine AP-markers of netwerk-overlay.

Geen overlay op elk project verplicht.

---

# 8. Header

Bij top:

- hoogte ± 78px
- clean white / translucent

Na scroll:

- hoogte ± 64px
- background: rgba(255,255,255,0.88)
- backdrop-filter: blur(14px)
- subtiele bottom border

Transition:

200–250 ms

---

# 9. Buttons

Primair:

- teal background
- hover iets donkerder
- arrow translateX 3px

Secundair:

- border
- hover lichte teal tint

Focus:

- duidelijke outline
- niet alleen kleurverandering

---

# 10. Scroll reveal

Gebruik slechts één standaard reveal:

- opacity 0 → 1
- translateY 14px → 0
- duration 450–650 ms

Stagger alleen voor logische groepen.

Maximale stagger:

80–120 ms

---

# 11. Video

Optionele signature video:

- 8–15 sec
- kabel in switch
- rack detail
- AP installatie
- dashboard monitoring

Regels:

- muted
- autoplay alleen indien toegestaan en performant
- `playsinline`
- poster image
- lazy load waar mogelijk

Geen audio nodig.

---

# 12. Performance

- animeer alleen `transform` en `opacity` waar mogelijk
- SVG path animations beperkt houden
- geen grote canvas/WebGL tenzij later expliciet gekozen
- hero visual mag client-side zijn
- rest van de pagina zoveel mogelijk statisch

---

# 13. Toegankelijkheid

Voor `prefers-reduced-motion: reduce`:

- alle animaties uitschakelen of sterk verkorten
- content direct zichtbaar
- geen essentiële informatie verbergen achter beweging

Interactieve elementen:

- keyboard bereikbaar
- focus visible
- aria labels waar nodig

---

# 14. Eindgevoel

De bezoeker moet denken:

> Ik zie letterlijk hoe CE-iT mijn gebouw aansluit, bekabelt, van wifi voorziet en daarna beheert.

Dat is het doel van de animatie.
