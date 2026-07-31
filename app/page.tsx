/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { BeatDeck } from "./components/beat-deck";
import { BookingPanel } from "./components/booking-panel";
import { MotionIn } from "./components/motion-in";
import { bookingUrl, tracks, videos } from "./site-data";

export const metadata: Metadata = {
  title: "YARI.WTF — Beats and production",
  description:
    "Hear YARI.WTF beats, watch the process, and book production for your next record.",
};

export default function Home() {
  return (
    <main>
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
            Open the full beat page <span aria-hidden="true">→</span>
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
        <p className="photo-note">Built around your voice.</p>
      </section>

      <section className="video-tease shell">
        <div className="video-tease-heading">
          <h2>See the process in motion.</h2>
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

      <section className="blog-tease shell">
        <div className="blog-tease-heading">
          <div>
            <p className="page-marker">Notes from the session</p>
            <h2>Useful FL Studio lessons.</h2>
          </div>
          <p>Short, practical guides for getting better ideas out of the tools you already use.</p>
        </div>
        <div className="blog-preview-grid">
          <Link href="/blog/fl-studio-drum-programming" className="blog-preview-card">
            <span>01</span>
            <h3>Drum programming that leaves room for the vocal</h3>
            <span className="text-link">Read the guide →</span>
          </Link>
          <Link href="/blog/fl-studio-mixing-headroom" className="blog-preview-card">
            <span>02</span>
            <h3>How to keep an FL Studio beat from getting crowded</h3>
            <span className="text-link">Read the guide →</span>
          </Link>
          <Link href="/blog/fl-studio-arrangement-workflow" className="blog-preview-card">
            <span>03</span>
            <h3>A practical arrangement workflow for finishing ideas</h3>
            <span className="text-link">Read the guide →</span>
          </Link>
        </div>
      </section>

      <BookingPanel />
    </main>
  );
}
