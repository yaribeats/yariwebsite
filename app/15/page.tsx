import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "../lib/seo";
import { BeatDeck } from "../components/beat-deck";
import { BuyLink } from "../components/buy-link";
import { CatalogList } from "../components/catalog-list";
import { FaqList } from "../components/faq-list";
import { SvgIcon } from "../components/svg-icon";
import { buyingFaq, catalog, leasePriceFrom, tracks } from "../site-data";

const base = pageMeta({
  path: "/15",
  title: `Beats for $${leasePriceFrom}: Rage, Detroit & Underground`,
  description: `Rage, Detroit, and underground type beats by Yari for $${leasePriceFrom}. Preview here, buy on Traktrain, download instantly.`,
});

/** Landing page for Meta ads. Says exactly what the ad says, then gets out of the way. Kept out of search so it never competes with /beats. */
export const metadata: Metadata = { ...base, robots: { index: false, follow: true } };

export default function DealPage() {
  return (
    <main>
      <section className="deal-hero shell" aria-labelledby="deal-title">
        <p className="page-marker">Prod. Yari / Atlanta</p>
        <h1 id="deal-title">
          Beats for <span>${leasePriceFrom}.</span>
        </h1>
        <p className="deal-sub">
          Rage, Detroit, and underground. Press play below, tap Buy, and the files download the second you check out.
        </p>
        <BuyLink placement="deal_hero" className="button button-buy button-xl deal-cta">
          <span className="buy-pulse" aria-hidden="true" />
          Get a beat for ${leasePriceFrom}
          <SvgIcon name="arrow-up-right" />
        </BuyLink>
        <ul className="trust-chips" aria-label="What you get">
          <li>Instant download</li>
          <li>{catalog.length} beats live</li>
          <li>Free MP3s to write to</li>
        </ul>
      </section>

      <section className="beats-list shell" aria-labelledby="deal-preview">
        <div className="beats-list-heading">
          <h2 id="deal-preview">Press play.</h2>
          <p>Play / buy / download</p>
        </div>
        <BeatDeck items={tracks} />
      </section>

      <section className="catalog-section shell" aria-labelledby="deal-catalog">
        <div className="beats-list-heading">
          <h2 id="deal-catalog">Every beat. ${leasePriceFrom} and up.</h2>
          <p>Tap a price to buy on Traktrain</p>
        </div>
        <CatalogList items={catalog} placement="deal_catalog" />
      </section>

      <section className="faq-section shell" aria-labelledby="deal-faq">
        <h2 id="deal-faq">Quick answers.</h2>
        <FaqList items={buyingFaq.slice(0, 3)} />
        <div className="beats-afterword">
          <p>Want one made from scratch around your voice?</p>
          <Link className="text-link" href="/start">
            Talk to Yari <SvgIcon name="arrow-right" />
          </Link>
        </div>
      </section>
    </main>
  );
}
