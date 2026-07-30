import type { Metadata } from "next";
import { BookingPanel } from "../components/booking-panel";
import { MotionIn } from "../components/motion-in";
import { VideoArchive } from "../components/video-archive";
import { videos } from "../site-data";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "A vertical archive of Yari building beats, testing ideas, and letting the room react.",
};

export default function VideosPage() {
  return (
    <main>
      <section className="page-hero video-page-hero">
        <div className="shell">
          <MotionIn className="video-hero-copy">
            <p className="page-marker">Camera roll / studio floor</p>
            <h1>The beat isn’t finished until the room moves.</h1>
            <p>
              Process clips, happy accidents, and the exact second an idea
              stops being polite.
            </p>
          </MotionIn>
        </div>
      </section>

      <section className="video-page shell">
        <VideoArchive items={videos} />
      </section>

      <BookingPanel headline="Bring the voice. We’ll find the pressure point." />
    </main>
  );
}
