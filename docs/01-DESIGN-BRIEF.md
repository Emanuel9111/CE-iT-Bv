# CE-iT Netwerkbeheer — Design Brief v2

> Dit document is de bron van waarheid voor het design. Elke visuele keuze, spacing, kleur, typografie en interactie moet hieruit volgen. Gebruik dit samen met `02-CONTENT-NL.md`, `03-KICKOFF-CLAUDE-CODE.md` en `04-ANIMATION-SPEC.md`.

## 1. De opdracht in één zin

Bouw een lichte, premium en intuïtieve B2B-website waarop een eigenaar of beheerder binnen **twee seconden** begrijpt wat CE-iT doet:

**netwerk + wifi + bekabeling + installatie + beheer.**

De website moet technisch geloofwaardig zijn, maar niet technisch moeilijk aanvoelen.

---

## 2. Doelgroep

CE-iT richt zich primair op twee duidelijke groepen:

1. **Studentenhuisvesting / residentiële gebouwen**
   - studentenkoten
   - studentenresidenties
   - appartementsgebouwen
   - eigenaars en property managers

2. **KMO's en bedrijven**
   - kantoren
   - kleine en middelgrote bedrijven
   - commerciële panden
   - gebouwen met nood aan professioneel wifi- en netwerkbeheer

De bezoeker moet zichzelf direct herkennen in één van deze twee groepen.

---

## 3. Positionering

CE-iT verkoopt geen losse routers en geen 'snelle wifi' als marketingbelofte.

CE-iT verkoopt een volledig werkend netwerk:

**Analyse → Bekabeling → Netwerkapparatuur → Access Points → Monitoring & beheer**

De belangrijkste belofte:

> Eén partner voor het volledige netwerk, van de eerste kabel tot dagelijks beheer.

Alternatieve kernzin voor visuele secties:

> Van lege ruimte naar een volledig beheerd netwerk.

---

## 4. Visuele richting

### Kerngevoel

- licht
- professioneel
- modern
- rustig
- technisch geloofwaardig
- premium, maar niet luxe om luxe te zijn
- intuïtief
- menselijk

### Verhouding

- **80% light**
- **20% dark**

De website mag dus niet volledig donker zijn.

Gebruik dark vooral voor:

- één sterke UniFi-technologiesectie
- eventueel een project / video-sectie
- footer-bottom of een CTA-band

De rest van de website blijft licht en ruim.

---

## 5. Design tokens

### Light surfaces

```css
--white:       #ffffff;
--paper-25:    #fbfcfc;
--paper-50:    #f5f8f8;
--paper-100:   #edf2f2;
--line:        #dfe7e7;
```

### Ink / text

```css
--ink-950:     #0a1620;
--ink-900:     #0f1922;
--ink-800:     #1a2730;
--ink-600:     #52616b;
--ink-500:     #6f7e87;
```

### Accent

```css
--teal-500:    #168c84;
--teal-600:    #0f746e;
--teal-100:    #dff3f1;
--teal-50:     #f1fbfa;
```

### Dark section

```css
--dark-950:    #08141d;
--dark-900:    #0d1d27;
--dark-line:   #20323c;
```

Regel:

**Teal is de enige accentkleur.**

Geen paars, blauw neon, gradients in vijf kleuren, glow-effects of generieke AI-startup-esthetiek.

---

## 6. Typografie

### Koppen

**Space Grotesk**

- weight 500–600
- grote, duidelijke hiërarchie
- korte regels

### Body

**Inter** of **IBM Plex Sans**

- weight 400–500
- line-height 1.55–1.7

### Technische labels

**IBM Plex Mono**

Voor:

- technische stappen
- componentnamen
- kleine specs
- network flow labels

### Schaal

- Hero desktop: 52–68px
- Hero tablet: 44–54px
- Hero mobiel: 34–42px
- H2: 34–44px
- H3: 22–28px
- Body: 16–18px
- Caption: 13–14px

---

## 7. Homepage-structuur

### A. Header

Doel: eenvoudig, helder en modern.

Layout:

- links: CE-iT logo
- midden: Oplossingen · Voor wie · Werkwijze · Projecten · Over CE-iT · Contact
- rechts: CTA `Plan een gesprek`

Gedrag:

- sticky
- transparant / wit bij top
- lichte blur + subtiele border na scroll
- wordt iets compacter na scroll
- geen drukke topbar tenzij contactinfo later echt noodzakelijk blijkt

---

### B. Hero

De bezoeker moet onmiddellijk begrijpen wat CE-iT doet.

Hoofdtitel:

> **Netwerk, wifi en bekabeling. Van installatie tot volledig beheer.**

Subtekst:

> CE-iT ontwerpt, installeert en beheert professionele netwerken voor studentenhuisvesting en KMO's. Betrouwbaar, veilig en schaalbaar — vandaag en morgen.

CTA's:

- primair: `Bekijk oplossingen`
- secundair: `Plan een gesprek`

Visueel rechts:

Een gebouw / gebouwdoorsnede die als geanimeerde netwerkvisualisatie werkt.

De bezoeker moet zien:

1. internet / glasvezel komt binnen
2. gateway / firewall
3. switch / patchkast
4. bekabeling door het gebouw
5. access points op verdiepingen
6. wifi coverage
7. monitoring via CE-iT

Geen generieke illustratie. De visual moet technisch geloofwaardig en visueel rustig zijn.

---

### C. Voor wie werken we?

Twee grote visuele keuzeblokken:

#### Studentenhuisvesting

- foto van studentenkot / studentenresidentie
- duidelijke titel
- korte benefit
- CTA

#### KMO's & bedrijven

- foto van professioneel kantoor / bedrijfspand
- duidelijke titel
- korte benefit
- CTA

Interactie:

- subtiele image zoom
- lichte network overlay bij hover
- geen overdreven kaart-animatie

---

### D. Zo bouwen wij uw netwerk

Dit is de belangrijkste uitlegsectie.

Horizontale of scroll-gestuurde flow:

1. Analyse
2. Bekabeling
3. Apparatuur
4. Wifi
5. Beheer

Elke stap heeft:

- korte titel
- één zin uitleg
- een echt of productgericht visueel element

De lijn tussen de stappen mag geanimeerd 'activeren' tijdens scroll.

---

### E. Services

Niet tien kleine kaarten.

Drie hoofdservices:

1. **Netwerk & wifi**
2. **Bekabeling & installatie**
3. **Beheer & monitoring**

Elke service krijgt:

- grote afbeelding
- korte uitleg
- duidelijke CTA

---

### F. UniFi-technologie — dark section

Dit is de belangrijkste dark sectie.

Titel:

> **Gebouwd op professionele UniFi-technologie.**

Visueel:

Gateway → Switch → Access Points → Devices / Users

Gebruik officiële productbeelden waar licentie / marketinggebruik dat toelaat, of eigen foto's van de werkelijk gebruikte apparatuur.

De sectie moet technisch premium aanvoelen, maar niet als een productcatalogus.

---

### G. Projecten / echte infrastructuur

Titel:

> **Zo ziet een netwerk van CE-iT eruit.**

Gebruik echte foto's van:

- gebouwen
- patchkasten
- switches
- bekabeling
- AP's
- installaties

Geen stockfoto's van techniek.

Mogelijke interactie:

- hover op gebouw toont subtiel AP-locaties
- projectkaart opent detail of lightbox

---

### H. CTA voor contact

Grote, eenvoudige band:

> **Een sterk netwerk begint met een goed gesprek.**

Subtekst:

> Vertel ons over uw gebouw. Wij zorgen voor de rest.

CTA:

`Plan een vrijblijvend gesprek`

---

### I. Footer

Footer moet eenvoudiger en moderner dan een klassieke drukke B2B-footer.

Structuur:

- logo + korte positionering
- Oplossingen
- Voor wie
- Over CE-iT
- Contact

Onderste lijn:

- privacy
- cookies
- algemene voorwaarden
- copyright

Footer vooral light; onderrand mag dark zijn.

---

## 8. Beelden

### Prioriteit 1: echte CE-iT beelden

- patchkast
- rack
- nette bekabeling
- switch
- AP gemonteerd
- gebouw buitenkant
- Emanuel / technieker op locatie

### Prioriteit 2: officiële productbeelden

Voor UniFi-producten mag de implementatie voorbereid worden op officiële marketingbeelden of productrenders, mits het uiteindelijke gebruik juridisch correct is.

### Niet gebruiken

- stockfoto's van lachende mensen met laptops
- generieke AI-racks
- neppe apparatuur
- overdreven futuristische cyberbeelden

---

## 9. Motion principles

De site mag interactief zijn, maar nooit druk.

Gebruik animatie om iets uit te leggen.

Wel:

- sticky header transitie
- scroll reveal
- netwerk-flow die actief wordt
- kabel-lijn die door gebouw loopt
- AP's die één voor één verschijnen
- coverage-ringen die zacht opkomen
- content fade / slide
- subtiele hover-lift
- video of interactieve hero

Niet:

- constant pulserende elementen
- grote parallax overal
- random floating objects
- zware glow-effects
- scroll hijacking

Respecteer altijd:

`prefers-reduced-motion`.

---

## 10. Kwaliteitsvloer

Niet onderhandelbaar:

- volledig responsive
- mobile first controle
- goede Core Web Vitals
- toegankelijke focus states
- alt-teksten
- semantische HTML
- reduced motion
- lazy loading
- geoptimaliseerde afbeeldingen
- geen onnodige JS
- animaties performant, bij voorkeur CSS / SVG / Motion met lichte footprint

---

## 11. Design thesis

De website moet voelen alsof CE-iT:

- weet wat het doet
- technisch sterk is
- modern werkt
- niet verkoopt met marketingtrucs
- verantwoordelijkheid neemt voor het volledige netwerk

De bezoeker hoeft niet eerst te begrijpen wat UniFi, VLAN of PoE betekent.

Hij moet eerst begrijpen:

> **CE-iT bouwt mijn netwerk en blijft het daarna beheren.**
