"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookingUrl, navItems, shopUrl } from "../site-data";
import { SocialIcons } from "./social-icons";

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

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="YARI.WTF home">
          YARI<span>.WTF</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="button button-orange header-action-button"
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Shop beats on Traktrain"
          >
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
            Buy Beats
          </a>
          <a
            className="button button-outline header-action-button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Work with YARI
          </a>
        </div>

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

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-actions">
          <a
            className="button button-orange"
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
          >
            Buy Beats
          </a>
          <a
            className="button button-outline"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Work with YARI
          </a>
        </div>
        <SocialIcons />
      </div>
    </header>
  );
}
