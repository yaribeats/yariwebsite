import type { MetadataRoute } from "next";
import { blogPosts, contentUpdated, lanes, siteUrl } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(contentUpdated);
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "weekly") => ({
    url: `${siteUrl}${path}`,
    lastModified: updated,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1),
    page("/beats", 0.95),
    page("/type-beats", 0.9),
    ...lanes.map((lane) => page(`/type-beats/${lane.slug}`, 0.85)),
    page("/start", 0.7, "monthly"),
    page("/videos", 0.6),
    page("/about", 0.6, "monthly"),
    page("/blog", 0.5, "monthly"),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
