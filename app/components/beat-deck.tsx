"use client";

import { useRef, useState } from "react";
import type { Track } from "../site-data";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function BeatDeck({
  items,
  compact = false,
}: {
  items: Track[];
  compact?: boolean;
}) {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [times, setTimes] = useState<Record<string, number>>({});
  const [durations, setDurations] = useState<Record<string, number>>({});

  const toggleTrack = async (track: Track) => {
    const selected = audioRefs.current[track.id];
    if (!selected) return;

    if (!selected.paused) {
      selected.pause();
      setPlayingId(null);
      return;
    }

    Object.entries(audioRefs.current).forEach(([id, audio]) => {
      if (id !== track.id && audio) audio.pause();
    });

    try {
      await selected.play();
      setPlayingId(track.id);
    } catch {
      setPlayingId(null);
    }
  };

  return (
    <div className={`beat-deck ${compact ? "is-compact" : ""}`}>
      {items.map((track, index) => {
        const isPlaying = playingId === track.id;
        const duration = durations[track.id] ?? track.duration;
        const currentTime = times[track.id] ?? 0;

        return (
          <article
            className={`track-row ${isPlaying ? "is-playing" : ""}`}
            key={track.id}
          >
            <button
              className="play-button"
              type="button"
              onClick={() => toggleTrack(track)}
              aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
            >
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
            </button>

            <div className="track-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="track-copy">
              <h2>{track.title}</h2>
              <p>{track.note}</p>
            </div>

            <div className="track-meta">
              <span>{track.bpm} BPM</span>
              <span>{track.key}</span>
            </div>

            <div className="track-progress">
              <label className="sr-only" htmlFor={`seek-${track.id}`}>
                Seek through {track.title}
              </label>
              <input
                id={`seek-${track.id}`}
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={Math.min(currentTime, duration || 0)}
                disabled={!duration}
                onChange={(event) => {
                  const nextTime = Number(event.target.value);
                  const audio = audioRefs.current[track.id];
                  if (audio) audio.currentTime = nextTime;
                  setTimes((current) => ({ ...current, [track.id]: nextTime }));
                }}
                style={
                  {
                    "--progress": duration
                      ? `${(currentTime / duration) * 100}%`
                      : "0%",
                  } as React.CSSProperties
                }
              />
              <span aria-label={`${formatTime(currentTime)} elapsed`}>
                {formatTime(currentTime)}
              </span>
              <span aria-label={`${formatTime(duration)} total`}>
                {formatTime(duration)}
              </span>
            </div>

            <audio
              ref={(node) => {
                audioRefs.current[track.id] = node;
              }}
              src={track.src}
              preload="metadata"
              onLoadedMetadata={(event) => {
                const duration = event.currentTarget.duration;
                setDurations((current) => ({
                  ...current,
                  [track.id]: duration,
                }));
              }}
              onDurationChange={(event) => {
                const duration = event.currentTarget.duration;
                setDurations((current) => ({
                  ...current,
                  [track.id]: duration,
                }));
              }}
              onTimeUpdate={(event) => {
                const currentTime = event.currentTarget.currentTime;
                setTimes((current) => ({
                  ...current,
                  [track.id]: currentTime,
                }));
              }}
              onPause={() =>
                setPlayingId((current) =>
                  current === track.id ? null : current,
                )
              }
              onEnded={() => {
                setPlayingId(null);
                setTimes((current) => ({ ...current, [track.id]: 0 }));
              }}
            />
          </article>
        );
      })}
    </div>
  );
}
