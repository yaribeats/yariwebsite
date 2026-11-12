import type { Metadata } from "next";
import { pageMeta } from "../../lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeatDeck } from "../../components/beat-deck";
import { BookingPanel } from "../../components/booking-panel";
import { BuyLink } from "../../components/buy-link";
import { CatalogList, catalogSchema } from "../../components/catalog-list";
import { FaqList } from "../../components/faq-list";
import { LaneGrid } from "../../components/lane-grid";
import { SvgIcon } from "../../components/svg-icon";
import { buyingFaq, catalog, contentUpdated, lanes, leasePriceFrom, shopUrl, siteUrl, tracks } from "../../site-data";

export function generateStaticParams() {
  return lanes.map((lane) => ({ slug: lane.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lane = lanes.find((item) => item.slug === slug);
  if (!lane) return {};
  return pageMeta({
    path: `/type-beats/${lane.slug}`,
    title: lane.metaTitle,
    description: lane.metaDescription,
    absoluteTitle: true,
  });
}

export default async function LanePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lane = lanes.find((item) => item.slug === slug);
  if (!lane) notFound();

  const url = `${siteUrl}/type-beats/${lane.slug}`;
  const matched = catalog.filter((beat) => beat.lanes?.includes(lane.slug));
  const rest = catalog.filter((beat) => !beat.lanes?.includes(lane.slug));
  const faq = [...lane.faq, buyingFaq[0], buyingFaq[2]];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: lane.metaTitle,
        description: lane.metaDescription,
        dateModified: contentUpdated,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@type": "Thing", name: lane.title },
        author: { "@id": `${siteUrl}/#yari` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Type Beats", item: `${siteUrl}/type-beats` },
          { "@type": "ListItem", position: 3, name: lane.title, item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {matched.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema(matched, url, shopUrl)) }}
        />
      ) : null}

      <article className="lane-page shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/type-beats">Type Beats</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{lane.title}</span>
        </nav>

        <header className="lane-hero">
          <p className="page-marker">{lane.bpm} / prod. Yari</p>
          <h1>{lane.title}</h1>
          <p className="lane-answer">{lane.answer}</p>
          <div className="hero-actions">
            <BuyLink placement={`lane_${lane.slug}_hero`} beat={lane.title} className="button button-buy button-xl">
              Buy {lane.artist} type beats · ${leasePriceFrom} <SvgIcon name="arrow-up-right" />
            </BuyLink>
            <Link className="text-link" href="/start">
              Want one custom? <SvgIcon name="arrow-right" />
            </Link>
          </div>
        </header>

        <section className="lane-traits-block" aria-labelledby="sound-title">
          <h2 id="sound-title">What makes a beat sound like {lane.artist}?</h2>
          <ul>
            {lane.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
          <dl className="lane-facts">
            <div>
              <dt>Tempo</dt>
              <dd>{lane.bpm}</dd>
            </div>
            <div>
              <dt>Write over it with</dt>
              <dd>{lane.writeOver}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>Leases from ${leasePriceFrom} on Traktrain, exclusives available</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="listen-title">
          <h2 id="listen-title">Listen now</h2>
          <BeatDeck items={tracks} compact />
        </section>

        <section aria-labelledby="buy-title">
          <h2 id="buy-title">
            {matched.length ? `${lane.title} in the store` : "Beats in the store right now"}
          </h2>
          <CatalogList items={matched.length ? [...matched, ...rest] : catalog} placement={`lane_${lane.slug}`} />
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <h2 id="faq-title">{lane.title}: questions</h2>
          <FaqList items={faq} />
        </section>

        <section aria-labelledby="related-title">
          <h2 id="related-title">Similar lanes</h2>
          <LaneGrid only={lane.related} />
        </section>

        <p className="lane-note">
          &ldquo;Type beat&rdquo; describes a sound. Yari is not affiliated with {lane.artist === "Detroit" || lane.artist === "Underground" ? "any artist named here" : lane.artist}. Updated{" "}
          <time dateTime={contentUpdated}>November 11, 2026</time>.
        </p>
      </article>

      <BookingPanel headline="Want one built around your voice?" />
    </main>
  );
}
