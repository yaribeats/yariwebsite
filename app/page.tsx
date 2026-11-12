/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { pageMeta } from "./lib/seo";
import Link from "next/link";
import { BeatDeck } from "./components/beat-deck";
import { BookingPanel } from "./components/booking-panel";
import { BuyLink } from "./components/buy-link";
import { FaqList } from "./components/faq-list";
import { LaneGrid } from "./components/lane-grid";
import { MotionIn } from "./components/motion-in";
import { SvgIcon } from "./components/svg-icon";
import { VideoArchive } from "./components/video-archive";
import { blogPosts, buyingFaq, catalog, leasePriceFrom, licenseTiers, siteUrl, tracks, videos } from "./site-data";

export const metadata: Metadata = pageMeta({
  path: "/",
  title: "Type Beats by Yari: Underground, Rage & Detroit Beats",
  description:
    "Buy underground, rage, and Detroit type beats by Yari, an Atlanta producer. Playboi Carti, Ken Carson, OSAMASON, and Rio Da Yung OG type beats. Leases from $15.",
  absoluteTitle: true,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyingFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/#production`,
  name: "Custom beats and music production by Yari",
  provider: { "@id": `${siteUrl}/#yari` },
  areaServed: [{ "@type": "City", name: "Atlanta" }, "Worldwide (remote)"],
  serviceType: ["Beat leasing", "Exclusive beats", "Custom beat production", "Song production"],
  url: `${siteUrl}/start`,
};

const steps = [
  { n: "01", title: "Press play", body: "Preview the beat right here. No account, no pop-ups." },
  { n: "02", title: "Pick a license", body: `Tap Buy. Traktrain opens with leases from $${leasePriceFrom}.` },
  { n: "03", title: "Record tonight", body: "Files download the second checkout clears." },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="home-hero">
        <div className="hero-grid shell">
          <MotionIn className="hero-copy">
            <p className="hero-stamp">Type beats by Yari / Atlanta</p>
            <h1>
              Beats that hit
              <br />
              like the <span>underground.</span>
            </h1>
            <p className="hero-intro">
              Rage, Detroit, and melodic trap beats in the Playboi Carti, Ken Carson, OSAMASON, Rio Da Yung OG, and Lil Baby lanes.
              Preview here. Lease from ${leasePriceFrom}. Download instantly.
            </p>
            <div className="hero-actions">
              <BuyLink placement="hero" className="button button-buy button-xl">
                <span className="buy-pulse" aria-hidden="true" />
                Buy beats · from ${leasePriceFrom}
                <SvgIcon name="arrow-up-right" />
              </BuyLink>
              <Link className="text-link" href="/start">
                Want a custom beat? Talk to Yari <SvgIcon name="arrow-right" />
              </Link>
            </div>
            <ul className="trust-chips" aria-label="Why buy here">
              <li>Instant download</li>
              <li>Leases from ${leasePriceFrom}</li>
              <li>Free MP3s to write to</li>
              <li>Exclusives available</li>
            </ul>
          </MotionIn>

          <MotionIn className="hero-media" delay={0.1}>
            <div className="hero-image-primary">
              <img
                src="/images/yari-city.jpg"
                alt="Yari, Atlanta type beat producer, in black streetwear and sunglasses by city lights"
                width={900}
                height={1200}
                fetchPriority="high"
              />
            </div>
            <div className="hero-image-secondary">
              <img
                src="/images/yari-close.jpg"
                alt="Close portrait of producer Yari wearing a black and orange knit hat"
                width={600}
                height={750}
              />
            </div>
            <div className="hero-label" aria-hidden="true">
              <span>YARI</span>
              <span>WTF?</span>
            </div>
          </MotionIn>
        </div>
      </section>

      <section className="featured-beat" aria-labelledby="press-play">
        <div className="shell">
          <div className="section-split">
            <h2 id="press-play">Press play. Tap buy.</h2>
            <p>
              Three beats from the current rotation. Every one is live on Traktrain with instant download. HYBRID,
              SHE&apos;S HOME, and RED also have free tagged MP3s to write to.
            </p>
          </div>
          <BeatDeck items={tracks} compact />
          <div className="featured-beat-links">
            <Link className="text-link dark-link" href="/beats">
              See all {catalog.length} beats <SvgIcon name="arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="lanes-section shell" aria-labelledby="lanes-title">
        <div className="lanes-heading">
          <p className="page-marker">Type beats by sound</p>
          <h2 id="lanes-title">Pick your lane.</h2>
          <p>Every lane has its own page: the sound, the tempo, and the beats that fit.</p>
        </div>
        <LaneGrid />
      </section>

      <section className="how-buy shell" aria-labelledby="how-buy-title">
        <h2 id="how-buy-title">How buying a beat works.</h2>
        <ol className="how-steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="tier-table" role="table" aria-label="Beat license options on Traktrain">
          <div role="row" className="tier-row tier-head">
            <span role="columnheader">License</span>
            <span role="columnheader">Best for</span>
          </div>
          {licenseTiers.map((tier) => (
            <div role="row" className="tier-row" key={tier.name}>
              <span role="cell">{tier.name}</span>
              <span role="cell">{tier.bestFor}</span>
            </div>
          ))}
        </div>
        <BuyLink placement="how_it_works" className="button button-buy button-xl">
          Pick a beat and license <SvgIcon name="arrow-up-right" />
        </BuyLink>
      </section>

      <section className="photo-story shell" aria-labelledby="custom-title">
        <div className="photo-story-copy">
          <p className="page-marker">Custom beats & production</p>
          <h2 id="custom-title">Want it built around your voice?</h2>
          <p>
            Bring a demo or a reference. Yari builds the beat, the arrangement, and the direction around how you
            actually sound, in Atlanta or remote from anywhere.
          </p>
          <Link className="button button-orange" href="/start">
            Book a production call <SvgIcon name="arrow-right" />
          </Link>
        </div>
        <div className="photo-crossing">
          <img
            src="/images/yari-crossing.jpg"
            alt="Yari crossing a city street in warm afternoon light"
            loading="lazy"
            width={900}
            height={1200}
          />
        </div>
        <div className="photo-storefront">
          <img
            src="/images/yari-storefront.jpg"
            alt="Yari in orange and navy standing outside a neighborhood storefront"
            loading="lazy"
            width={900}
            height={1200}
          />
        </div>
        <p className="photo-sticker">Built around your voice.</p>
      </section>

      <section className="video-tease shell" aria-labelledby="video-title">
        <div className="video-tease-heading">
          <h2 id="video-title">Watch the beats get made.</h2>
          <Link href="/videos" className="text-link">
            Watch the archive <SvgIcon name="arrow-right" />
          </Link>
        </div>
        <div className="home-video-archive">
          <VideoArchive items={videos.slice(0, 2)} />
        </div>
      </section>

      <section className="faq-section shell" aria-labelledby="faq-title">
        <h2 id="faq-title">Questions before you buy.</h2>
        <FaqList items={buyingFaq} />
      </section>

      <section className="blog-tease shell" aria-labelledby="blog-title">
        <div className="blog-tease-heading">
          <div>
            <p className="page-marker">Articles from the session</p>
            <h2 id="blog-title">Free FL Studio lessons.</h2>
          </div>
          <p>Short, practical guides for getting better ideas out of the tools you already use.</p>
        </div>
        <div className="blog-preview-grid">
          {blogPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} className="blog-preview-card" key={post.slug}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{post.title}</h3>
              <span className="text-link">
                Read the guide <SvgIcon name="arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <BookingPanel />
    </main>
  );
}
