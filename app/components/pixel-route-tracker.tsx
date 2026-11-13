"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { captureAttribution } from "../lib/attribution";
import { track } from "../lib/track";

/** The base code fires PageView on first load. This fires it again on client-side route changes. */
export function PixelRouteTracker() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    captureAttribution();
    // The base code already sent PageView for the landing page; only resend it on in-app navigation.
    if (first.current) first.current = false;
    else track("PageView");
    // Ad landings on a shop page count as a product view right away, not only after a play.
    if (pathname === "/beats" || pathname === "/15" || pathname.startsWith("/type-beats")) {
      track("ViewContent", { content_type: "product_group", content_category: "beats", content_name: pathname });
    }
  }, [pathname]);

  return null;
}
