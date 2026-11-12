"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { track } from "../lib/track";

/** The base code fires PageView on first load. This fires it again on client-side route changes. */
export function PixelRouteTracker() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    track("PageView");
    if (pathname === "/beats" || pathname.startsWith("/type-beats")) {
      track("ViewContent", { content_type: "product_group", content_category: "beats", content_name: pathname });
    }
  }, [pathname]);

  return null;
}
