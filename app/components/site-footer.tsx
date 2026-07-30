import Link from "next/link";
import { bookingUrl, navItems } from "../site-data";
import { SocialIcons } from "./social-icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href="/" className="footer-wordmark">
          YARI.WTF
        </Link>
        <p>
          Beats with fingerprints on them.
          <br />
          Built for artists, not algorithms.
        </p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          Book a call ↗
        </a>
      </div>
      <div className="footer-bottom">
        <SocialIcons />
        <span>© {new Date().getFullYear()} YARI.WTF</span>
      </div>
    </footer>
  );
}
