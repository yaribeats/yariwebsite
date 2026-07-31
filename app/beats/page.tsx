/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { BeatDeck } from "../components/beat-deck";
import { BookingPanel } from "../components/booking-panel";
import { MotionIn } from "../components/motion-in";
import { tracks } from "../site-data";

export const metadata: Metadata = {
  title: "Beats",
  description:
    "Preview current YARI.WTF productions and save a starting point for your next record.",
};

export default function BeatsPage() {
  return (
    <main>
      <section className="page-hero beats-hero">
        <div className="shell page-hero-grid">
          <MotionIn className="page-hero-copy">
            <p className="page-marker">Current rotation</p>
            <h1>Find a strong starting point.</h1>
            <p>
              Preview the current beats, save the ones that fit, and use the
              production call to shape the record around your voice.
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
          <p>Current beats</p>
          <p>Preview / save / license</p>
        </div>
        <BeatDeck items={tracks} />
        <div className="beats-afterword">
          <p>
            Need a different tempo, a custom direction, or production around
            your voice?
          </p>
          <span>Bring it to the call.</span>
        </div>
      </section>

      <BookingPanel headline="Let’s build the record around you." />
    </main>
  );
}
