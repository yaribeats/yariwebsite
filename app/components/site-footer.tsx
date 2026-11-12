import Link from "next/link";
import { lanes, navItems } from "../site-data";
import { BuyLink } from "./buy-link";
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
          Underground, rage, and Detroit type beats
          <br />
          by Yari, an Atlanta producer.
        </p>
      </div>
      <nav className="footer-links" aria-label="Footer">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/start">Talk to Yari</Link>
        <BuyLink placement="footer" className="footer-buy">
          Buy beats <SvgIcon name="arrow-up-right" />
        </BuyLink>
      </nav>
      <nav className="footer-lanes" aria-label="Type beats">
        {lanes.map((lane) => (
          <Link key={lane.slug} href={`/type-beats/${lane.slug}`}>
            {lane.title}
          </Link>
        ))}
      </nav>
      <div className="footer-bottom">
        <SocialIcons />
        <span>© {new Date().getFullYear()} YARI.WTF</span>
      </div>
    </footer>
  );
}
