# CE-iT — Implementare premium animation pentru „Zo bouwen wij uw netwerk”

## Obiectiv
Păstrează structura actuală a homepage-ului și înlocuiește DOAR implementarea vizuală/animată a secțiunii **„Zo bouwen wij uw netwerk”** cu o versiune premium care explică procesul în 5 pași.

Nu redesena restul site-ului. Nu mări înălțimea paginii. Nu crea pinned-scroll lung.

## Fișiere incluse
Copiază aceste fișiere în proiect, păstrând exact numele:

- `public/images/step-analyse.png`
- `public/images/step-bekabeling.png`
- `public/images/step-apparatuur.png`
- `public/images/step-wifi.png`
- `public/images/step-beheer.png`
- `public/images/process-animation-preview.png` — referință vizuală, NU se afișează pe site
- `src/components/ProcessTimelinePremium.astro` — implementare de referință gata de integrat

## Ce trebuie să faci

1. Verifică secțiunea actuală și păstrează copy-ul real deja aprobat.
2. Integrează logica și animațiile din `ProcessTimelinePremium.astro` în componenta existentă sau înlocuiește componenta actuală dacă este mai curat.
3. Folosește helper-ul actual pentru asset paths / `BASE_URL`; nu introduce regresii pe GitHub Pages sau `ce-it.be`.
4. Păstrează accentul CE-iT albastru:
   - principal `#4E98C6`
   - hover/strong `#367DAA`
5. Rulează animația o singură dată la intrarea secțiunii în viewport.
6. Durata totală: aproximativ 4–6 secunde.
7. Pe mobil: fără linie orizontală lungă; transformă în timeline vertical și simplifică efectele.
8. Respectă `prefers-reduced-motion`.

## Animația exactă pe imagini

### 01 Analyse
- imaginea devine activă
- o linie de scanare trece o singură dată peste clădire
- apar 1–2 puncte de focus/target
- status final: `Analyse uitgevoerd`

### 02 Bekabeling
- progresul ajunge la pasul 02
- peste fotografie se desenează o linie de cablu albastră cu casing alb discret
- linia trebuie să fie clar vizibilă peste cablurile deja prezente în imagine
- status final: `Bekabeling geoptimaliseerd`

### 03 Apparatuur
- switch-ul intră din blur/fade foarte subtil
- LED-urile pornesc secvențial o singură dată
- fără puls continuu
- status final: `Apparatuur actief`

### 04 Wifi
- AP-ul primește 2–3 unde de coverage/ripple
- undele sunt finite, nu loop infinit
- status final: `Dekking geactiveerd`

### 05 Beheer
- dashboard-ul primește un sweep foarte fin
- apare indicatorul online
- status final: `Netwerk online · Beheerd door CE-iT`

## Timeline / connector
- linia dintre pași se desenează progresiv 01 → 05
- după completare, un singur data-pulse trece de la stânga la dreapta
- badge-ul activ devine albastru plin
- pașii neactivați rămân mai soft, dar complet lizibili

## Final message
La finalul secvenței afișează subtil:

`Van eerste analyse tot dagelijks beheer. Eén partner voor het volledige netwerk.`

## QA obligatoriu
Nu valida doar din consolă.

Verifică vizual:
- desktop 1440×900
- laptop 1280×800
- mobile 375×812
- production build
- zero overflow horizontal
- zero 404 asset-uri
- animația trebuie să fie VIZIBILĂ peste poze, nu doar „tehnic prezentă”
- nu adăuga bounce, elastic, glow neon sau efecte flashy

## Prioritate
Aceasta trebuie să fie a doua animație signature a site-ului după hero.
Hero explică **ce construiește CE-iT**.
Această secțiune explică **cum lucrează CE-iT**.
