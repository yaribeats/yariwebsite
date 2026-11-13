# Meta ads plan: "I got beats for $15"

## Creatives

| File | Size | Use in Meta |
|---|---|---|
| `yari-beats-15-1080x1350.png` | 4:5 | Facebook + Instagram Feed, Explore |
| `yari-beats-15-1080x1920.png` | 9:16 | Reels + Stories (text sits in the safe zone, clear of the caption and button) |

Upload **both in the same ad** ("Add media → select both"). Meta then shows the right one for each placement.

To change the wording or price later: edit `ads/render.mjs`, run `node ads/render.mjs`.

## Landing page

**`https://yari.wtf/15`** — its headline says "Beats for $15" just like the ad, with the buy button above the fold on phones, the players, and the full catalog. It's hidden from Google so it doesn't compete with `/beats`.

Paste this into **URL parameters** on the ad (under Tracking):

```
utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

The site now carries these tags onto the Traktrain link when someone taps Buy, so Traktrain's stats show which ad made the sale.

## Campaign setup

1. **Objective:** Sales
2. **Conversion location:** Website. Dataset/pixel `1144600818156435`
3. **Conversion event:** `InitiateCheckout` (fires on every Buy tap). The real purchase happens on Traktrain, which our site's pixel can't see. If Traktrain's settings have a Facebook/Meta Pixel field, paste the same ID there. Once Purchase events start coming in, switch the optimization event to Purchase.
4. **Budget:** $10–$20/day, one ad set. Don't touch it for the first 3–4 days, while Meta is still learning who to show it to.
5. **Audience:** Advantage+ audience. Location US (add CA/UK later if you want), ages 16–34. Audience suggestions: FL Studio, BandLab, SoundCloud, Playboi Carti, Ken Carson, Hip hop music.
6. **Placements:** Advantage+ placements.

## Ad copy

**Primary text (test 2–3; Meta rotates them):**
- I got beats for $15. Rage, Detroit, underground. Press play, tap buy, download instantly.
- Need a beat tonight? $15. Instant download. Prod. Yari 🔊
- Rage + underground type beats. $15 leases. Free MP3s to write to.

**Headline:** Beats for $15
**Description:** Instant download
**Call to action:** Shop now

## Reels: the biggest upgrade

A still image works, but **people on Reels hear things.** Turn on Meta's "Add music" option for the image if it's offered, or better: record a 6–10 second clip of the 9:16 image (or you nodding to the beat) with your hardest 8 bars playing, and use the PNG as the cover. Sound sells beats, so a video with audio will almost always get cheaper Buy taps than a silent image.

## How to judge it (after about $40–60 spent)

| Check | Good | Fix |
|---|---|---|
| Cost per landing page view | under $0.50 | Above $1: try the other copy or a video |
| Landing page views → Buy taps (InitiateCheckout) | 5%+ | Low: the page or price isn't landing. Test featuring one beat |
| Traktrain sales tagged `utm_source=facebook` | Any in week 1 | None after ~$75: stop and change the creative before spending more |

Once it sells, duplicate the ad set at a higher budget instead of editing the one that works. Later, add a retargeting ad set: people who visited `/15` in the last 14 days but didn't tap Buy, with the line "Still need that beat? $15."
