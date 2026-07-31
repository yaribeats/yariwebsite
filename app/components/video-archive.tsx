"use client";

import { useRef } from "react";
import type { VideoItem } from "../site-data";

export function VideoArchive({ items }: { items: VideoItem[] }) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handlePlay = (activeId: string) => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video && id !== activeId && !video.paused) {
        video.pause();
      }
    });
  };

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
              onPlay={() => handlePlay(video.id)}
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
