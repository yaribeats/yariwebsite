import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import { BookingPanel } from "../components/booking-panel";
import { MotionIn } from "../components/motion-in";
import { VideoArchive } from "../components/video-archive";
import { videos } from "../site-data";

export const metadata: Metadata = pageMeta({
  path: "/videos",
  title: "Beat Making Videos: Watch Yari Cook Up",
  description:
    "Watch Yari make beats in FL Studio: studio clips, rough arrangements, and the decisions behind underground and trap beats you can buy.",
});

export default function VideosPage() {
  return (
    <main>
      <section className="page-hero video-page-hero">
        <div className="shell">
          <MotionIn className="video-hero-copy">
            <p className="page-marker">Camera roll / studio floor</p>
            <h1>Watch how the ideas take shape.</h1>
            <p>
              Studio clips, rough arrangements, and the decisions behind the
              finished beat.
            </p>
          </MotionIn>
        </div>
      </section>

      <section className="video-page shell">
        <VideoArchive items={videos} />
      </section>

      <BookingPanel headline="Bring the voice. We’ll find the direction." />
    </main>
  );
}
