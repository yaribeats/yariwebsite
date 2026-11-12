import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import { BookingPanel } from "../components/booking-panel";
import { BuyLink } from "../components/buy-link";
import { LaneGrid } from "../components/lane-grid";
import { MotionIn } from "../components/motion-in";
import { SvgIcon } from "../components/svg-icon";
import { lanes, leasePriceFrom, siteUrl } from "../site-data";

export const metadata: Metadata = pageMeta({
  path: "/type-beats",
  title: "Type Beats: OSAMASON, Nettspend & Detroit",
  description:
    "Type beats by Yari: Playboi Carti, Ken Carson, Destroy Lonely, OSAMASON, Nettspend, Tezzus, Rio Da Yung OG, Detroit, and Lil Baby. Leases from $15.",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/type-beats`,
      url: `${siteUrl}/type-beats`,
      name: "Type beats by Yari",
      isPartOf: { "@id": `${siteUrl}/#website` },
      hasPart: lanes.map((lane) => ({ "@type": "WebPage", name: lane.title, url: `${siteUrl}/type-beats/${lane.slug}` })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Type Beats", item: `${siteUrl}/type-beats` },
      ],
    },
  ],
};

export default function TypeBeatsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="shell">
          <MotionIn className="blog-hero-copy">
            <p className="page-marker">Type beats by sound</p>
            <h1>Type beats for the underground.</h1>
            <p>
              A type beat is an instrumental made in the style of a known artist so you can find your sound fast.
              Yari makes them in {lanes.length} lanes, from rage and plugg to Detroit and melodic street trap. Leases
              start at ${leasePriceFrom}.
            </p>
            <div className="hero-actions">
              <BuyLink placement="type_beats_hub" className="button button-buy button-xl">
                Buy beats · from ${leasePriceFrom} <SvgIcon name="arrow-up-right" />
              </BuyLink>
            </div>
          </MotionIn>
        </div>
      </section>
      <section className="lanes-section shell" aria-labelledby="lanes-title">
        <h2 id="lanes-title" className="sr-only">
          All type beat lanes
        </h2>
        <LaneGrid />
      </section>
      <BookingPanel headline="Can't find your lane? Yari will build it." />
    </main>
  );
}
