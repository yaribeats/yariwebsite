export const bookingUrl = "https://calendly.com/yaribeats/production-call";
export const shopUrl = "https://traktrain.com/yariwtf";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/beats", label: "Beats" },
  { href: "/videos", label: "Videos" },
  { href: "/blog", label: "Articles" },
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
] as const;

export type Track = {
  id: string;
  title: string;
  key: string;
  bpm: number;
  duration: number;
  src: string;
  note: string;
  buyUrl?: string;
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
    buyUrl: shopUrl,
  },
  {
    id: "shes-home",
    title: "SHE’S HOME",
    key: "G minor",
    bpm: 144,
    duration: 124.526,
    src: "/audio/shes-home.mp3",
    note: "Late-night motion with enough room for the story.",
    buyUrl: shopUrl,
  },
  {
    id: "red",
    title: "RED",
    key: "A minor",
    bpm: 148,
    duration: 129.855,
    src: "/audio/red.mp3",
    note: "Fast pulse, bruised color, no wasted space.",
    buyUrl: shopUrl,
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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq?: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fl-studio-drum-programming",
    title: "Drum programming that leaves room for the vocal",
    excerpt: "A practical FL Studio approach to groove, velocity, and negative space so the beat supports the record instead of filling every gap.",
    date: "July 30, 2026",
    readTime: "7 min read",
    category: "Drums",
    intro: "A good drum pattern does not need to prove how many sounds you own. It needs to make the artist feel where to enter, where to push, and where to leave a line alone.",
    sections: [
      { heading: "Start with the pocket, not the pattern", body: ["In FL Studio, put the kick and snare down before opening the hat menu. Pick the smallest loop that gives the song a pulse, then listen for the places where a vocal could breathe. If the rhythm already feels complete without a voice, it may be doing too much.", "A useful first pass is one kick idea, one snare or clap, and a hat with a little variation. Keep the main hits close to the grid, then move only the notes that need a human push. The goal is controlled movement, not random looseness."] },
      { heading: "Use velocity as arrangement", body: ["The Piano roll is more than a note-placement tool. Velocity can separate the hits that carry the groove from the hits that simply keep time. Lower the repeated hat notes, then bring up one or two accents at the end of a phrase.", "For a vocal-led record, leave the strongest accents where the singer is not competing with them. A quieter hat under a verse and a more open accent before the hook can create lift without adding another percussion layer."] },
      { heading: "Make one change at the section line", body: ["Duplicate the first four or eight bars, then change one thing when the section turns: remove the kick before the hook, open the hat for two beats, or let the snare hit alone. Small changes are easier to hear than a new drum kit every eight bars."] },
    ],
    faq: [{ question: "Should FL Studio drums be perfectly on the grid?", answer: "Use the grid as the starting point. Keep the main kick and snare reliable, then move a small number of supporting notes for feel. If every hit is moved, the groove becomes hard to control; if none are moved, it can feel lifeless." }],
  },
  {
    slug: "fl-studio-mixing-headroom",
    title: "How to keep an FL Studio beat from getting crowded",
    excerpt: "A simple headroom and masking workflow for beats that sound exciting in the loop but collapse when the vocal arrives.",
    date: "July 30, 2026",
    readTime: "8 min read",
    category: "Mixing",
    intro: "Most crowded beats do not need more plugins. They need fewer competing decisions. The fastest mix improvement is often deciding which sound owns each part of the spectrum and the arrangement.",
    sections: [
      { heading: "Leave level before you chase tone", body: ["Pull the master down and give the mix room before you start stacking processing. In FL Studio, a beat that peaks below the ceiling is easier to judge than one that is already clipped by a long chain of loud plugins.", "Use a rough balance first: kick and bass together, snare and percussion, then music. If the melody disappears when the low end arrives, fix the balance or arrangement before reaching for saturation."] },
      { heading: "Give the vocal a clear lane", body: ["A vocal usually needs more than a frequency notch. It needs fewer competing notes during the words that matter. Automate a pad, counter melody, or texture down for a phrase, then bring it back when the line ends.", "High-pass sounds that do not need low information, but do not use filters as a substitute for arrangement. The cleanest mix is often the version where the part is silent for a beat."] },
      { heading: "Check the hook at low volume", body: ["Turn the speakers down until the beat is almost background music. The hook should still have a recognizable center. If only the cymbals and upper melody survive, the balance is telling you what is too loud, not what needs another effect."] },
    ],
    faq: [{ question: "How much headroom should an FL Studio beat have?", answer: "There is no single magic number, but leaving several dB of peak headroom while you build gives you room to make decisions. Focus on a clean balance and avoid clipping; the final loudness can be handled later in the release process." }],
  },
  {
    slug: "fl-studio-arrangement-workflow",
    title: "A practical arrangement workflow for finishing ideas",
    excerpt: "Turn an eight-bar FL Studio loop into a complete song map without losing the part that made you press save.",
    date: "July 30, 2026",
    readTime: "6 min read",
    category: "Workflow",
    intro: "Finishing an idea is not about making every section more impressive. It is about giving the best idea enough contrast that the listener notices when it returns.",
    sections: [
      { heading: "Mark the strongest eight bars", body: ["Before arranging, identify the loop that made you stop scrolling. Name it the hook, even if you do not know the song structure yet. Every other section should either prepare that loop, answer it, or give the listener a break from it."] },
      { heading: "Build the map with subtraction", body: ["Duplicate the loop into a rough timeline, then remove parts to create the intro and verse. Keep the kick out, thin the melody, or use a filtered texture. Subtraction creates a destination without requiring a brand-new musical idea for every section.", "A simple first map is intro, verse, hook, verse, hook, bridge, final hook. The exact order can change; the important part is hearing a difference between arrival and setup."] },
      { heading: "Commit to a bounce and listen away", body: ["Export a rough version and play it away from the DAW. A phone speaker, a walk, or a car ride reveals whether the arrangement has shape beyond the loop. Write down timestamps instead of reopening the project every thirty seconds."] },
    ],
    faq: [{ question: "How long should an FL Studio beat arrangement be?", answer: "Let the song decide. A concise beat can work in two minutes, while a vocal record may need more room. Start with clear contrast between sections, then remove any repeated section that does not add a new reason to keep listening." }],
  },
];
