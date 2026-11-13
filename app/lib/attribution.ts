const KEY = "yari_ad_attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"] as const;

type Attribution = Partial<Record<(typeof PARAMS)[number], string>>;

/**
 * Remember the ad tags a visitor landed with (first touch in this tab), so a
 * Buy click later in the visit still tells Traktrain which ad sent them.
 */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const query = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const p of PARAMS) {
      const v = query.get(p);
      if (v) found[p] = v.slice(0, 200);
    }
    if (Object.keys(found).length) sessionStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    /* storage blocked: fall back to the site's own tags */
  }
}

/**
 * Swap the site's default UTM tags on a Traktrain link for the ad's tags when
 * the visitor came from an ad. The on-site button placement moves to utm_term.
 */
export function withAttribution(href: string, placement: string) {
  try {
    const saved: Attribution = JSON.parse(sessionStorage.getItem(KEY) ?? "{}");
    if (!saved.utm_source && !saved.fbclid) return href;
    const url = new URL(href);
    url.searchParams.set("utm_source", saved.utm_source ?? "facebook");
    url.searchParams.set("utm_medium", saved.utm_medium ?? "paid_social");
    url.searchParams.set("utm_campaign", saved.utm_campaign ?? "meta_ads");
    if (saved.utm_content) url.searchParams.set("utm_content", saved.utm_content);
    url.searchParams.set("utm_term", placement);
    return url.toString();
  } catch {
    return href;
  }
}
