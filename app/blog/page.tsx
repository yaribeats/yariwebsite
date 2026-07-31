import type { Metadata } from "next";
import Link from "next/link";
import { BookingPanel } from "../components/booking-panel";
import { MotionIn } from "../components/motion-in";
import { blogPosts } from "../site-data";

export const metadata: Metadata = {
  title: "FL Studio Notes",
  description: "Practical FL Studio beat-making lessons from YARI.WTF for artists and producers.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero blog-hero">
        <div className="shell">
          <MotionIn className="blog-hero-copy">
            <p className="page-marker">FL Studio / process notes</p>
            <h1>Make better decisions inside the loop.</h1>
            <p>Short, practical lessons on drums, arrangement, and mixing for artists building their own records.</p>
          </MotionIn>
        </div>
      </section>
      <section className="blog-index shell">
        <div className="blog-index-heading">
          <h2>Read the notes</h2>
          <p>Built from the same questions that come up when a good idea needs to become a finished song.</p>
        </div>
        <div className="blog-index-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-index-card" key={post.slug}>
              <div className="blog-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{post.category} / {post.readTime}</span></div>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <Link className="text-link" href={`/blog/${post.slug}`}>Read the guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
        <p className="blog-source-note">For official product documentation and tutorials, visit <a href="https://www.image-line.com/fl-studio-learning/" target="_blank" rel="noreferrer">Image-Line’s FL Studio Learning hub</a>.</p>
      </section>
      <BookingPanel headline="Bring the idea. We’ll build the record." />
    </main>
  );
}
