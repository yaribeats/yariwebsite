/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { BeatDeck } from "../components/beat-deck";
import { BookingPanel } from "../components/booking-panel";
import { MotionIn } from "../components/motion-in";
import { tracks } from "../site-data";

export const metadata: Metadata = {
  title: "Beats",
  description:
    "Preview three current YARI.WTF productions: Hybrid, She’s Home, and Red.",
};

export default function BeatsPage() {
  return (
    <main>
      <section className="page-hero beats-hero">
        <div className="shell page-hero-grid">
          <MotionIn className="page-hero-copy">
            <p className="page-marker">Current rotation</p>
            <h1>Pick the feeling. Bring the story.</h1>
            <p>
              These are starting points, not boxes. If one opens a door, the
              production call is where we build the room behind it.
            </p>
          </MotionIn>
          <MotionIn className="page-hero-image" delay={0.1}>
            <img
              src="/images/yari-storefront.jpg"
              alt="Yari outside a storefront wearing orange, navy, and headphones"
            />
            <span aria-hidden="true">VOL. 001</span>
          </MotionIn>
        </div>
      </section>

      <section className="beats-list shell">
        <div className="beats-list-heading">
          <p>Preview only</p>
          <p>Headphones encouraged</p>
        </div>
        <BeatDeck items={tracks} />
        <div className="beats-afterword">
          <p>
            Need a different tempo, a custom direction, or production around
            your voice?
          </p>
          <span>That’s the point of the call.</span>
        </div>
      </section>

      <BookingPanel headline="Don’t shop for a beat. Build the record." />
    </main>
  );
}
