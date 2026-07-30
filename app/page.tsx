/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { BeatDeck } from "./components/beat-deck";
import { BookingPanel } from "./components/booking-panel";
import { MotionIn } from "./components/motion-in";
import { bookingUrl, tracks, videos } from "./site-data";

export const metadata: Metadata = {
  title: "YARI.WTF — Beats with fingerprints on them",
  description:
    "Original production, candid process, and a direct line to build your next record with Yari.",
};

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-grid shell">
          <MotionIn className="hero-copy">
            <p className="hero-stamp">Producer / Atlanta / Anywhere the song goes</p>
            <h1>
              Make the song
              <br />
              they can’t <span>file away.</span>
            </h1>
            <p className="hero-intro">
              Production with movement, color, and enough room for your voice to
              become the center of gravity.
            </p>
            <div className="hero-actions">
              <a
                className="button button-pink"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a production call <span aria-hidden="true">↗</span>
              </a>
              <Link className="text-link" href="/beats">
                Hear the beats <span aria-hidden="true">→</span>
              </Link>
            </div>
          </MotionIn>

          <MotionIn className="hero-media" delay={0.1}>
            <div className="hero-image-primary">
              <img
                src="/images/yari-city.jpg"
                alt="Yari in a black sweatshirt and vivid pink pants beside tall city windows"
              />
            </div>
            <div className="hero-image-secondary">
              <img
                src="/images/yari-close.jpg"
                alt="Close portrait of Yari wearing a hand-knit black and pink hat"
              />
            </div>
            <div className="hero-label" aria-hidden="true">
              <span>YARI</span>
              <span>WTF?</span>
            </div>
          </MotionIn>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>
            ORIGINAL PRODUCTION ★ SHARP DRUMS ★ STRANGE COLORS ★ ORIGINAL
            PRODUCTION ★ SHARP DRUMS ★ STRANGE COLORS ★
          </div>
        </div>
      </section>

      <section className="featured-beat">
        <div className="shell">
          <div className="section-split">
            <h2>Press play before you read another word.</h2>
            <p>
              Three current ideas. No tags talking over the feeling. Preview the
              work, then bring your own world to the call.
            </p>
          </div>
          <BeatDeck items={tracks} compact />
          <Link className="text-link dark-link" href="/beats">
            Open the full beat page <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="photo-story shell">
        <div className="photo-story-copy">
          <h2>Outside feeds the studio.</h2>
          <p>
            The city, the clothes, the joke that only works at full volume—none
            of it is separate from the sound.
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
        <p className="photo-note">I’ll be your everything.</p>
      </section>

      <section className="video-tease shell">
        <div className="video-tease-heading">
          <h2>The process is allowed to have a pulse.</h2>
          <Link href="/videos" className="text-link">
            Watch the archive <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="video-poster-row">
          {videos.slice(0, 2).map((video, index) => (
            <Link href="/videos" className="video-poster" key={video.id}>
              <img
                src={video.poster}
                alt={`Video preview: ${video.title}`}
                loading="lazy"
              />
              <span>{index === 0 ? "A beat catches" : "The room reacts"}</span>
            </Link>
          ))}
        </div>
      </section>

      <BookingPanel />
    </main>
  );
}
