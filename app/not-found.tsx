import type { Metadata } from "next";
import Link from "next/link";
import { BuyLink } from "./components/buy-link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="page-hero">
      <div className="shell blog-hero-copy">
        <p className="page-marker">404</p>
        <h1>That beat got pulled.</h1>
        <p>The page moved or never existed. The store is still open.</p>
        <div className="hero-actions">
          <BuyLink placement="404" className="button button-buy button-xl">
            Buy beats
          </BuyLink>
          <Link className="text-link" href="/beats">
            Preview beats →
          </Link>
        </div>
      </div>
    </main>
  );
}
