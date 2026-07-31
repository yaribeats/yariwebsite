import type { ReactNode } from "react";

type SvgIconName = "arrow-left" | "arrow-right" | "arrow-up-right";

const paths: Record<SvgIconName, ReactNode> = {
  "arrow-left": (
    <>
      <path d="M19 12H5" />
      <path d="M11 5l-7 7 7 7" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
};

export function SvgIcon({
  name,
  className = "button-icon",
}: {
  name: SvgIconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
