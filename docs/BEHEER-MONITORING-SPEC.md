# CE-iT — Beheer & monitoring visual replacement

## Objective
Replace the current **Beheer & monitoring** image because it reads as overly AI/futuristic. Use the supplied, more believable technical monitoring visual and integrate a subtle premium animation.

This is a **visual/service illustration**, not proof of a real CE-iT project. Do not caption it as a case study or claim the dashboard is a literal production screenshot.

## Supplied files
Copy/merge these into the current project:

- `public/images/service-beheer-monitoring.jpg` — canonical image
- `public/images/service-beheer.jpg` — compatibility alias for the current services section
- `public/images/step-05-beheer.jpg` — compatibility alias for the step 05 / process section
- `docs/BEHEER-MONITORING-REFERENCE.png` — visual reference board only; do NOT use this board as a website image

## First: inspect current code before editing
Find the actual current component(s) and asset references for:

1. the service card **Beheer & monitoring** / **Beheer**
2. step 05 in **Zo bouwen wij uw netwerk**

Do not redesign the approved homepage structure. Replace only the relevant image(s) and add the animation treatment below.

## Asset mapping
Preferred canonical asset:

```text
/public/images/service-beheer-monitoring.jpg
```

If the current component expects `service-beheer.jpg` or `step-05-beheer.jpg`, the aliases are already supplied. Prefer consolidating to the canonical filename if that can be done without breaking existing data structures.

Use the existing Astro base-path helper for all public assets. Do not hardcode a root-relative path that breaks under `/CE-iT-Bv/`.

## Visual treatment
Keep the current card dimensions, radius, typography, spacing and shadow. Do **not** make the section taller.

Image behavior:

- `object-fit: cover`
- preserve the laptop as focal point
- keep the rack visible as technical context
- no extra neon overlays
- no fake phone mockup
- no heavy blur filters
- no permanent glow

Suggested object position:

```css
object-position: 58% 50%;
```

Adjust only if needed after visual QA.

## Animation — desktop/tablet
Trigger once when the card enters the viewport as part of the existing 5-step process sequence.

### 1. Image reveal
- fade from `opacity: 0` to `1`
- translateY from `8px` to `0`
- duration: `600ms`
- easing: `cubic-bezier(0.22, 1, 0.36, 1)`

### 2. Dashboard sweep
Create a pseudo-element or lightweight overlay inside the **image wrapper**, not over the text.

- soft white/brand-blue translucent sweep across the laptop screen area
- left to right
- duration: `800ms`
- opacity: about `0.10–0.18`
- run once
- no looping

The sweep should suggest the monitoring interface becoming active, not look like a sci-fi laser.

### 3. Online status
After the sweep:

- reveal a small status indicator in the card image area or immediately below it
- text: `Netwerk online · Beheerd door CE-iT`
- use one small green status dot/check only for online state
- fade + slight slide-up over `450–550ms`

Do not add extra marketing copy above/below the card.

### 4. Data micro-motion
Optional and subtle:

- animate one small line/chart path from left to right once
- duration: `900–1100ms`
- use CSS/SVG stroke-dasharray if the current component already supports SVG overlays

If this requires a large dependency or complex canvas code, skip it. Performance > decoration.

## Timing inside the existing 5-step sequence
This is step 05. It should activate after steps 01–04.

Recommended sequence for this card:

```text
0ms     step 05 becomes active
0–600   image reveal
250–1050 dashboard sweep
850–1400 status badge appears
```

Do not create a second independent animation timeline that fights the current process controller. Integrate with the existing `IntersectionObserver` / sequence state already used by the section.

## Mobile
On mobile:

- image reveal only
- one light screen sweep
- status appears
- skip chart animation
- no continuous effects

Keep mobile motion short and low-cost.

## Reduced motion
For `prefers-reduced-motion: reduce`:

- render image and final status immediately
- disable sweep, motion and chart drawing

## Color rules
Use the current CE-iT brand system:

- primary brand blue: `#4E98C6`
- stronger blue: `#367DAA`
- green only for the final online status
- dark navy/neutral grey for text and structure

Do not introduce teal again if the current production site has already migrated to the CE-iT brand blue.

## Important QA requirements
After implementation, visually verify all of the following:

### Desktop
- image looks believable at actual card size
- laptop is clearly visible
- rack remains visible in background
- animation is noticeable but subtle
- the final online status is readable
- no layout shift

### Mobile
- no horizontal overflow
- image does not crop away the laptop
- animation does not delay scrolling

### Production
Run the production build and verify the deployed/base-path asset URL resolves correctly under the site's configured base/domain.

No console errors. No 404s.

## Do not do
- do not redesign the section
- do not enlarge the card
- do not add looping neon pulses
- do not use the reference board as the website image
- do not describe this visual as a real CE-iT client project
- do not claim the illustrated interface is an exact production dashboard screenshot

## Definition of done
The current overly-AI-looking **Beheer & monitoring** visual is replaced, the new asset loads in production, step 05 gets a premium one-time activation sequence, and the homepage structure remains unchanged.
