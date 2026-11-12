"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { leasePriceFrom } from "../site-data";
import { BuyLink } from "./buy-link";

/** Thumb-reach bar pinned to the bottom of phones: buy first, talk second. */
export function ActionDock() {
  const pathname = usePathname();
  if (pathname === "/start") return null;

  return (
    <div className="action-dock" role="region" aria-label="Quick actions">
      <BuyLink placement="mobile_dock" className="dock-buy">
        <span className="dock-dot" aria-hidden="true" />
        Buy beats · ${leasePriceFrom}
      </BuyLink>
      <Link href="/start" className="dock-talk">
        Talk to Yari
      </Link>
    </div>
  );
}
