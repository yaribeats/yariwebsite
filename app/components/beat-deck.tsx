"use client";

import { useRef, useState } from "react";
import { track as trackEvent } from "../lib/track";
import type { Track } from "../site-data";
import { BuyLink } from "./buy-link";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function PlayGlyph({ playing }: { playing: boolean }) {
  return playing ? (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function BeatDeck({
  items,
  compact = false,
  headingLevel = 3,
}: {
  items: Track[];
  compact?: boolean;
  headingLevel?: 2 | 3;
}) {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const previewed = useRef<Set<string>>(new Set());
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [times, setTimes] = useState<Record<string, number>>({});
  const [durations, setDurations] = useState<Record<string, number>>({});
  const Heading = headingLevel === 2 ? "h2" : "h3";

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
      if (!previewed.current.has(track.id)) {
        previewed.current.add(track.id);
        trackEvent("ViewContent", {
          content_name: track.title,
          content_type: "product",
          content_category: "beats",
          currency: "USD",
          value: track.price,
        });
      }
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
          <article className={`track-row ${isPlaying ? "is-playing" : ""}`} key={track.id}>
            <div className="track-header">
              <div className="track-control-group">
                <button
                  className="play-button"
                  type="button"
                  onClick={() => toggleTrack(track)}
                  aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                  aria-pressed={isPlaying}
                >
                  <PlayGlyph playing={isPlaying} />
                </button>
                <div className="track-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="track-copy">
                <Heading>{track.title}</Heading>
                <p>{track.note}</p>
              </div>

              <div className="track-meta">
                <span>{track.bpm} BPM</span>
                <span>{track.key}</span>
              </div>
            </div>

            <div className="track-footer">
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
                      "--progress": duration ? `${(currentTime / duration) * 100}%` : "0%",
                    } as React.CSSProperties
                  }
                />
                <span aria-label={`${formatTime(currentTime)} elapsed`}>{formatTime(currentTime)}</span>
                <span aria-label={`${formatTime(duration)} total`}>{formatTime(duration)}</span>
              </div>

              <div className="track-actions">
                <BuyLink
                  placement={`beat_${track.id}`}
                  beat={track.title}
                  price={track.price}
                  className="button button-buy track-buy-button"
                  ariaLabel={`Buy ${track.title} on Traktrain from $${track.price}`}
                >
                  Buy · ${track.price}
                </BuyLink>
                {track.freeMp3 ? <span className="track-free">Free MP3 on Traktrain</span> : null}
              </div>
            </div>

            <audio
              ref={(node) => {
                audioRefs.current[track.id] = node;
              }}
              src={track.src}
              preload="none"
              onLoadedMetadata={(event) => {
                const value = event.currentTarget.duration;
                setDurations((current) => ({ ...current, [track.id]: value }));
              }}
              onTimeUpdate={(event) => {
                const value = event.currentTarget.currentTime;
                setTimes((current) => ({ ...current, [track.id]: value }));
              }}
              onPause={() => setPlayingId((current) => (current === track.id ? null : current))}
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
