/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { BookingPanel } from "../components/booking-panel";
import { MotionIn } from "../components/motion-in";
import { SvgIcon } from "../components/svg-icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Yari: a producer interested in personality, movement, and records that refuse the obvious answer.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero shell">
        <MotionIn className="about-heading">
          <p className="page-marker">Yari, in his own lane</p>
          <h1>I make beats that leave fingerprints.</h1>
        </MotionIn>
        <MotionIn className="about-portrait" delay={0.1}>
          <img
            src="/images/yari-close.jpg"
            alt="Portrait of Yari wearing a black and orange knit hat"
          />
        </MotionIn>
        <div className="about-intro">
          <p className="about-lede">
            Yari is a producer who follows the feeling past the obvious answer.
          </p>
          <p>
            The work can move from trap to house in the same session because
            genre is a tool, not a fence. What matters is the moment an artist
            hears enough of themselves in the production to take a real risk.
          </p>
        </div>
      </section>

      <section className="about-process">
        <div className="shell process-grid">
          <div className="process-image">
            <img
              src="/images/yari-crossing.jpg"
              alt="Yari crossing a street with headphones and a shoulder bag"
              loading="lazy"
            />
          </div>
          <div className="process-copy">
            <h2>How a session should feel.</h2>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Talk before touching the session.</h3>
                  <p>Find the image, pressure, and reason behind the record.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Build around the artist.</h3>
                  <p>Leave space where the voice needs power. Push where it needs friction.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Keep the accident that makes it yours.</h3>
                  <p>Perfect is useful. Personality is the point.</p>
                </div>
              </li>
            </ol>
            <Link className="text-link" href="/beats">
              Hear the current beats <SvgIcon name="arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <BookingPanel headline="If your idea has teeth, let’s give it a body." />
    </main>
  );
}
