"use client";

import type { ReactNode } from "react";
import { track } from "../lib/track";
import { shopLink } from "../site-data";

/**
 * Every "Buy" button on the site. Opens Yari's Traktrain store and tells Meta
 * this visitor started checkout, so ads can optimize for buyers instead of clicks.
 */
export function BuyLink({
  placement,
  beat,
  price,
  className = "button button-buy",
  children,
  ariaLabel,
}: {
  placement: string;
  beat?: string;
  price?: number;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      className={className}
      href={shopLink(placement)}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      data-placement={placement}
      onClick={() =>
        track("InitiateCheckout", {
          content_name: beat ?? "Beat store",
          content_category: "beats",
          content_type: "product",
          currency: "USD",
          value: price ?? 15,
          placement,
        })
      }
    >
      {children}
    </a>
  );
}
