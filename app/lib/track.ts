type FbqParams = Record<string, string | number | string[] | undefined>;

declare global {
  interface Window {
    fbq?: (command: "track" | "trackCustom", event: string, params?: FbqParams) => void;
  }
}

/** Fire a Meta Pixel event. Silently does nothing if the pixel is blocked or not loaded yet. */
export function track(event: string, params?: FbqParams, custom = false) {
  try {
    window.fbq?.(custom ? "trackCustom" : "track", event, params);
  } catch {
    /* ad blockers can throw; never break the click */
  }
}
