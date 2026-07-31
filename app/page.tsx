/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { BeatDeck } from "./components/beat-deck";
import { BookingPanel } from "./components/booking-panel";
import { MotionIn } from "./components/motion-in";
import { SvgIcon } from "./components/svg-icon";
import { VideoArchive } from "./components/video-archive";
import { bookingUrl, tracks, videos } from "./site-data";

export const metadata: Metadata = {
  title: "Atlanta Music Producer, Beats & FL Studio Lessons",
  description:
    "YARI.WTF is an Atlanta-based music producer, beat maker, and FL Studio teacher offering beat licensing, custom production, and remote sessions for artists.",
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://yari.wtf/#yari",
      name: "Yari",
      url: "https://yari.wtf",
      jobTitle: "Music Producer and Beat Maker",
      description:
        "Atlanta-based music producer, beat maker, and FL Studio teacher helping artists develop distinctive records.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      knowsAbout: ["Music production", "Beat making", "FL Studio", "Arrangement", "Mixing"],
      sameAs: [
        "https://www.instagram.com/yaribeats/",
        "https://www.tiktok.com/@yaribeats",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://yari.wtf/#services",
      name: "YARI.WTF Music Production",
      url: "https://yari.wtf",
      provider: { "@id": "https://yari.wtf/#yari" },
      areaServed: ["Atlanta, Georgia", "Remote"],
      serviceType: [
        "Beat licensing",
        "Custom music production",
        "FL Studio lessons",
        "Remote production sessions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://yari.wtf/#website",
      url: "https://yari.wtf",
      name: "YARI.WTF",
      description: "Atlanta music production, beats, videos, and FL Studio articles.",
      publisher: { "@id": "https://yari.wtf/#yari" },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <section className="home-hero">
        <div className="hero-grid shell">
          <MotionIn className="hero-copy">
            <p className="hero-stamp">Producer / Atlanta / Remote</p>
            <h1>
              Make the song
              <br />
              they can’t <span>file away.</span>
            </h1>
            <p className="hero-intro">
              Beats and production for artists who want a clear direction and a
              record that still sounds like them.
            </p>
            <div className="hero-actions">
              <a
                className="button button-orange"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a production call <SvgIcon name="arrow-up-right" />
              </a>
              <Link className="text-link" href="/beats">
                Hear the beats <SvgIcon name="arrow-right" />
              </Link>
            </div>
          </MotionIn>

          <MotionIn className="hero-media" delay={0.1}>
            <div className="hero-image-primary">
              <img
                src="/images/yari-city.jpg"
                alt="Yari in black streetwear and sunglasses by city lights"
              />
            </div>
            <div className="hero-image-secondary">
              <img
                src="/images/yari-close.jpg"
                alt="Close portrait of Yari wearing a hand-knit black and orange hat"
              />
            </div>
            <div className="hero-label" aria-hidden="true">
              <span>YARI</span>
              <span>WTF?</span>
            </div>
          </MotionIn>
        </div>
      </section>

      <section className="featured-beat">
        <div className="shell">
          <div className="section-split">
            <h2>Start with the music.</h2>
            <p>
              Three current ideas. Listen through, save what fits, and bring the
              strongest starting point to the conversation.
            </p>
          </div>
          <BeatDeck items={tracks} compact />
          <Link className="text-link dark-link" href="/beats">
            Open the full beat page <SvgIcon name="arrow-right" />
          </Link>
        </div>
      </section>

      <section className="photo-story shell">
        <div className="photo-story-copy">
          <h2>The room is part of the process.</h2>
          <p>
            Yari builds from what is actually happening in the room: the tempo,
            the voice, and the details that make the record specific.
          </p>
        </div>
        <div className="photo-crossing">
          <img
            src="/images/yari-crossing.jpg"
            alt="Yari crossing a city street in warm afternoon light"
            loading="lazy"
          />
        </div>
        <div className="photo-storefront">
          <img
            src="/images/yari-storefront.jpg"
            alt="Yari in orange and navy standing outside a neighborhood storefront"
            loading="lazy"
          />
        </div>
        <p className="photo-sticker">Built around your voice.</p>
      </section>

      <section className="video-tease shell">
        <div className="video-tease-heading">
          <h2>See the process in motion.</h2>
          <Link href="/videos" className="text-link">
            Watch the archive <SvgIcon name="arrow-right" />
          </Link>
        </div>
        <div className="home-video-archive">
          <VideoArchive items={videos.slice(0, 2)} />
        </div>
      </section>

      <section className="service-signal shell" aria-labelledby="service-signal-title">
        <div className="service-signal-heading">
          <p className="page-marker">Atlanta producer / remote production</p>
          <h2 id="service-signal-title">Make a record that sounds like you.</h2>
        </div>
        <p className="service-signal-lede">
          YARI.WTF is an Atlanta-based producer and beat maker for artists who
          want a clear point of view, from the first loop to the finished record.
          Work remotely or book a production call from anywhere.
        </p>
        <div className="service-signal-grid">
          <div>
            <h3>For artists</h3>
            <p>License a beat, develop a custom direction, or build a full production around your voice.</p>
          </div>
          <div>
            <h3>For producers</h3>
            <p>Learn practical FL Studio workflows for drums, arrangement, mixing, and finishing ideas.</p>
          </div>
          <div>
            <h3>From Atlanta to anywhere</h3>
            <p>Start with the current beats or bring an unfinished idea to a remote session.</p>
          </div>
        </div>
      </section>

      <section className="blog-tease shell">
        <div className="blog-tease-heading">
          <div>
            <p className="page-marker">Articles from the session</p>
            <h2>Useful FL Studio lessons.</h2>
          </div>
          <p>Short, practical guides for getting better ideas out of the tools you already use.</p>
        </div>
        <div className="blog-preview-grid">
          <Link href="/blog/fl-studio-drum-programming" className="blog-preview-card">
            <span>01</span>
            <h3>Drum programming that leaves room for the vocal</h3>
            <span className="text-link">Read the guide <SvgIcon name="arrow-right" /></span>
          </Link>
          <Link href="/blog/fl-studio-mixing-headroom" className="blog-preview-card">
            <span>02</span>
            <h3>How to keep an FL Studio beat from getting crowded</h3>
            <span className="text-link">Read the guide <SvgIcon name="arrow-right" /></span>
          </Link>
          <Link href="/blog/fl-studio-arrangement-workflow" className="blog-preview-card">
            <span>03</span>
            <h3>A practical arrangement workflow for finishing ideas</h3>
            <span className="text-link">Read the guide <SvgIcon name="arrow-right" /></span>
          </Link>
        </div>
      </section>

      <BookingPanel />
    </main>
  );
}
