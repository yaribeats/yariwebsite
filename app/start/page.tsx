import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import { StartQuiz } from "../components/start-quiz";

export const metadata: Metadata = pageMeta({
  path: "/start",
  title: "Work With Yari: Custom Beats & Production",
  description:
    "Answer 3 or 4 quick questions to buy the right beat license or book a production call with Yari, an Atlanta producer working with artists everywhere.",
});

export default function StartPage() {
  return (
    <main className="start-page">
      <section className="shell start-grid">
        <div className="start-copy">
          <p className="page-marker">30 seconds / no email needed</p>
          <h1>Tell Yari what you need.</h1>
          <p>
            Buying a beat today or building a whole song, a few taps put you in the right place: the right license
            on Traktrain or a call on Yari&apos;s calendar.
          </p>
        </div>
        <StartQuiz />
      </section>
    </main>
  );
}
