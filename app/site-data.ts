export const bookingUrl = "https://calendly.com/yaribeats/production-call";

export const navItems = [
  { href: "/beats", label: "Beats" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
] as const;

export const socialLinks = [
  {
    platform: "Instagram",
    href: "https://www.instagram.com/yaribeats/",
  },
  {
    platform: "TikTok",
    href: "https://www.tiktok.com/@yaribeats",
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/@yaribeats",
  },
] as const;

export type Track = {
  id: string;
  title: string;
  key: string;
  bpm: number;
  duration: number;
  src: string;
  note: string;
};

export const tracks: Track[] = [
  {
    id: "hybrid",
    title: "HYBRID",
    key: "B minor",
    bpm: 130,
    duration: 133.433,
    src: "/audio/hybrid.mp3",
    note: "Chrome drums, open air, and a melody built to bend.",
  },
  {
    id: "shes-home",
    title: "SHE’S HOME",
    key: "G minor",
    bpm: 144,
    duration: 124.526,
    src: "/audio/shes-home.mp3",
    note: "Late-night motion with enough room for the story.",
  },
  {
    id: "red",
    title: "RED",
    key: "A minor",
    bpm: 148,
    duration: 129.855,
    src: "/audio/red.mp3",
    note: "Fast pulse, bruised color, no wasted space.",
  },
];

export type VideoItem = {
  id: string;
  title: string;
  caption: string;
  src: string;
  poster: string;
};

export const videos: VideoItem[] = [
  {
    id: "prada",
    title: "Send this one to PradaBagsShawty",
    caption: "A beat catches in real time.",
    src: "/video/prada.mp4",
    poster: "/images/poster-prada.jpg",
  },
  {
    id: "viral",
    title: "Speakers hitting too hard",
    caption: "The room always tells the truth.",
    src: "/video/viral.mp4",
    poster: "/images/poster-viral.jpg",
  },
  {
    id: "house-piano",
    title: "House drums on a trap idea",
    caption: "Process over genre rules.",
    src: "/video/house-piano.mp4",
    poster: "/images/poster-house.jpg",
  },
];
