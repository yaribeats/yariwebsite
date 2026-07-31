import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingPanel } from "../../components/booking-panel";
import { blogPosts } from "../../site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-07-30",
    author: { "@type": "Person", name: "Yari" },
    publisher: { "@type": "Organization", name: "YARI.WTF", url: "https://yari.wtf" },
    mainEntityOfPage: `https://yari.wtf/blog/${post.slug}`,
  };

  const faqSchema = post.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}
      <article className="article-page shell">
        <header className="article-header">
          <Link className="text-link" href="/blog">← All notes</Link>
          <p className="page-marker">{post.category} / {post.readTime}</p>
          <h1>{post.title}</h1>
          <p className="article-intro">{post.intro}</p>
          <p className="article-date">Published {post.date}</p>
        </header>
        <div className="article-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <aside className="article-reference">
            <strong>Keep learning</strong>
            <p>Image-Line’s official <a href="https://www.image-line.com/fl-studio-learning/" target="_blank" rel="noreferrer">FL Studio Learning hub</a> is the best place to check current product documentation and official tutorials.</p>
          </aside>
          {post.faq?.length ? (
            <section className="article-faq">
              <h2>FAQ</h2>
              {post.faq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
            </section>
          ) : null}
          <div className="article-next-links">
            <Link className="button button-pink" href="/beats">Listen to the beats <span aria-hidden="true">→</span></Link>
            <Link className="text-link" href="/videos">Watch the process <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </article>
      <BookingPanel headline="Bring the idea. We’ll build the record." />
    </main>
  );
}
