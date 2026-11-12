/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import Link from "next/link";
import { BeatDeck } from "../components/beat-deck";
import { BookingPanel } from "../components/booking-panel";
import { BuyLink } from "../components/buy-link";
import { CatalogList, catalogSchema } from "../components/catalog-list";
import { FaqList } from "../components/faq-list";
import { LaneGrid } from "../components/lane-grid";
import { MotionIn } from "../components/motion-in";
import { SvgIcon } from "../components/svg-icon";
import { buyingFaq, catalog, leasePriceFrom, shopUrl, siteUrl, tracks } from "../site-data";

export const metadata: Metadata = pageMeta({
  path: "/beats",
  title: "Buy Beats Online: Rap & Trap Beats from $15",
  description:
    "Preview and buy rap, trap, rage, and Detroit beats by Yari. 14 beats live on Traktrain, leases from $15 with instant download. Free MP3s to write to.",
});

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Beats", item: `${siteUrl}/beats` },
  ],
};

export default function BeatsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema(catalog, `${siteUrl}/beats`, shopUrl)) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="page-hero beats-hero">
        <div className="shell page-hero-grid">
          <MotionIn className="page-hero-copy">
            <p className="page-marker">The beat store / {catalog.length} beats live</p>
            <h1>Buy beats from Yari.</h1>
            <p>
              Rage, Detroit, underground, and melodic trap. Every beat leases from ${leasePriceFrom} on Traktrain
              and downloads the second you check out.
            </p>
            <div className="hero-actions">
              <BuyLink placement="beats_hero" className="button button-buy button-xl">
                Open the beat store <SvgIcon name="arrow-up-right" />
              </BuyLink>
            </div>
          </MotionIn>
          <MotionIn className="page-hero-image" delay={0.1}>
            <img
              src="/images/yari-storefront.jpg"
              alt="Yari outside a storefront wearing orange, navy, and headphones"
              width={900}
              height={1200}
              fetchPriority="high"
            />
            <span aria-hidden="true">VOL. 001</span>
          </MotionIn>
        </div>
      </section>

      <section className="beats-list shell" aria-labelledby="preview-title">
        <div className="beats-list-heading">
          <h2 id="preview-title">Preview</h2>
          <p>Play / buy / download</p>
        </div>
        <BeatDeck items={tracks} />
      </section>

      <section className="catalog-section shell" aria-labelledby="catalog-title">
        <div className="beats-list-heading">
          <h2 id="catalog-title">Every beat in the store</h2>
          <p>Tap a price to buy on Traktrain</p>
        </div>
        <CatalogList items={catalog} placement="catalog" />
      </section>

      <section className="lanes-section shell" aria-labelledby="lanes-title">
        <div className="lanes-heading">
          <h2 id="lanes-title">Shop by sound.</h2>
        </div>
        <LaneGrid />
        <div className="beats-afterword">
          <p>Need a different tempo, a custom beat, or a whole song produced?</p>
          <Link className="text-link" href="/start">
            Talk to Yari <SvgIcon name="arrow-right" />
          </Link>
        </div>
      </section>

      <section className="faq-section shell" aria-labelledby="faq-title">
        <h2 id="faq-title">Buying questions.</h2>
        <FaqList items={buyingFaq.slice(0, 3)} />
      </section>

      <BookingPanel headline="Found the one? Lock it in." />
    </main>
  );
}
