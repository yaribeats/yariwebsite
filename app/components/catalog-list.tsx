import type { CatalogBeat } from "../site-data";
import { BuyLink } from "./buy-link";

export function CatalogList({ items, placement }: { items: CatalogBeat[]; placement: string }) {
  return (
    <ol className="catalog-list">
      {items.map((beat, i) => (
        <li key={beat.title} className="catalog-row">
          <span className="catalog-index" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="catalog-copy">
            <h3>{beat.title}</h3>
            <p>
              {[beat.bpm ? `${beat.bpm} BPM` : null, beat.key, beat.freeMp3 ? "Free MP3" : null]
                .filter(Boolean)
                .join(" · ") || "Prod. Yari"}
            </p>
          </div>
          <BuyLink
            placement={`${placement}_${i + 1}`}
            beat={beat.title}
            price={beat.price}
            className="catalog-buy"
            ariaLabel={`Buy ${beat.title} on Traktrain, $${beat.price}`}
          >
            ${beat.price}
            <span>Buy</span>
          </BuyLink>
        </li>
      ))}
    </ol>
  );
}

export function catalogSchema(items: CatalogBeat[], pageUrl: string, shopUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: pageUrl,
    numberOfItems: items.length,
    itemListElement: items.map((beat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${beat.title} (prod. Yari)`,
        category: "Beat lease",
        image: "https://yari.wtf/og.png",
        brand: { "@type": "Brand", name: "YARI.WTF" },
        description: [beat.bpm ? `${beat.bpm} BPM` : null, beat.key, "instrumental beat by Yari"]
          .filter(Boolean)
          .join(", "),
        offers: {
          "@type": "Offer",
          price: beat.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: shopUrl,
        },
      },
    })),
  };
}
