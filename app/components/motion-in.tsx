import type { CSSProperties, ReactNode } from "react";

/**
 * Entrance animation in pure CSS. Content is visible in the server HTML (good for
 * crawlers and Largest Contentful Paint) and needs no JavaScript to appear.
 */
export function MotionIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`motion-in ${className}`.trim()} style={{ "--motion-delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
