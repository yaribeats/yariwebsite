"use client";

import { useEffect, useRef } from "react";
import type { VideoItem } from "../site-data";

export function VideoArchive({ items }: { items: VideoItem[] }) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const nodes = Object.values(videoRefs.current).filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.65) {
            video.muted = true;
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.65, 1] },
    );

    nodes.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-archive">
      {items.map((video, index) => (
        <article className="video-entry" key={video.id}>
          <div className="video-frame">
            <video
              ref={(node) => {
                videoRefs.current[video.id] = node;
              }}
              src={video.src}
              poster={video.poster}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label={`${video.title}. ${video.caption}`}
            />
          </div>
          <div className="video-caption">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{video.title}</h2>
              <p>{video.caption}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
