import type { Metadata } from "next";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "YARI.WTF type beats: underground, rage, and Detroit beats by Yari",
};

/**
 * Per-page metadata: title, description, self-canonical, and a matching
 * Open Graph / Twitter card, so shared links (Meta ads, IG, iMessage) show this
 * page's title instead of the homepage's.
 */
export function pageMeta({
  path,
  title,
  description,
  absoluteTitle = false,
  type = "website",
}: {
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | YARI.WTF`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: "YARI.WTF",
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}
