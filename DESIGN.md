# Design System

## Theme

Midnight corner-store flyer meets a personal camera roll: near-black surfaces, electric pink interruptions, sun-hot orange details, candid photography, hard crop lines, and oversized condensed type. The mood is streetwear-led rather than magazine-editorial.

## Color

```css
--ink: oklch(0.97 0.01 330);
--muted: oklch(0.73 0.02 330);
--black: oklch(0.08 0 0);
--surface: oklch(0.13 0.015 330);
--pink: oklch(0.66 0.23 352);
--pink-dark: oklch(0.48 0.18 352);
--orange: oklch(0.74 0.18 55);
--olive: oklch(0.65 0.10 110);
```

The palette is committed: near-black is architectural, pink carries the identity, orange appears in calls to action and media details, and olive is a rare counterpoint pulled from the brand seed.

## Typography

- Display: Anton, self-hosted through `@fontsource/anton`, used for the wordmark and poster-scale headlines.
- Body: Karla, self-hosted through `@fontsource/karla`, used for navigation, metadata, controls, and prose.
- Display headings use balanced wrapping, a maximum size of 96px, and letter spacing no tighter than `-0.025em`.

## Layout

- Content width: `min(100% - 32px, 1240px)`.
- Photography uses hard crops, uneven scale, and offset compositions.
- Track listings are horizontal editorial rows, not cards.
- Page rhythm alternates dense media clusters with large areas of near-black space.
- Mobile layouts preserve image impact while collapsing controls into readable vertical groups.

## Components

- Header: sticky black navigation, wordmark, route links, and persistent booking action.
- Beat deck: custom accessible transport controls around native audio elements.
- Video archive: vertical clips with posters, controls, muted in-view previews, and offscreen pause.
- Booking panel: saturated pink statement area with one high-contrast orange action.
- Footer: compact wordmark, route links, and clickable social SVG icons.

## Motion

- One short entrance sequence per page.
- Media hover effects use small scale or crop shifts.
- Audio progress and active state transitions are immediate and functional.
- Reduced-motion users receive crossfades or no automated playback.
