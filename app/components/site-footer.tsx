import Link from "next/link";
import { bookingUrl, navItems } from "../site-data";
import { SocialIcons } from "./social-icons";
import { SvgIcon } from "./svg-icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href="/" className="footer-wordmark">
          YARI.WTF
        </Link>
        <p>
          Beats with a point of view.
          <br />
          Built around the artist.
        </p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          Book a call <SvgIcon name="arrow-up-right" />
        </a>
      </div>
      <div className="footer-bottom">
        <SocialIcons />
        <span>© {new Date().getFullYear()} YARI.WTF</span>
      </div>
    </footer>
  );
}
