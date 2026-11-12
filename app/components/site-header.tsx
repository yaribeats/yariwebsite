"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { leasePriceFrom, navItems } from "../site-data";
import { BuyLink } from "./buy-link";
import { SocialIcons } from "./social-icons";

function NoteIcon() {
  return (
    <span className="button-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19 2.5v13.6a3.5 3.5 0 1 1-1.5-2.8V7.7l-7 1.9v9.6a3.5 3.5 0 1 1-1.5-2.8V4.3l10-2.7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="YARI.WTF home">
          YARI<span>.WTF</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <BuyLink placement="header" className="button button-buy header-action-button" ariaLabel="Buy beats on Traktrain">
            <NoteIcon />
            Buy Beats
          </BuyLink>
          <Link className="button button-outline header-action-button" href="/start">
            Talk to Yari
          </Link>
        </div>

        <BuyLink placement="header_mobile" className="header-mobile-buy" ariaLabel="Buy beats on Traktrain">
          Buy · ${leasePriceFrom}
        </BuyLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} inert={!open}>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-actions">
          <BuyLink placement="mobile_menu" className="button button-buy">
            Buy Beats · from ${leasePriceFrom}
          </BuyLink>
          <Link className="button button-outline" href="/start" onClick={() => setOpen(false)}>
            Talk to Yari
          </Link>
        </div>
        <SocialIcons />
      </div>
    </header>
  );
}
