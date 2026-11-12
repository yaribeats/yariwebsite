export const siteUrl = "https://yari.wtf";
export const bookingUrl = "https://calendly.com/yaribeats/production-call";
export const shopUrl = "https://traktrain.com/yariwtf";
export const metaPixelId = "1144600818156435";
export const leasePriceFrom = 15;
export const contentUpdated = "2026-11-11";

/** Traktrain link tagged with where the click came from, so sales can be traced back to the site. */
export function shopLink(placement: string) {
  return `${shopUrl}?utm_source=yari.wtf&utm_medium=website&utm_campaign=buy_beats&utm_content=${encodeURIComponent(placement)}`;
}

export const navItems = [
  { href: "/beats", label: "Beats" },
  { href: "/type-beats", label: "Type Beats" },
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
  {
    platform: "Traktrain",
    href: shopUrl,
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
  price: number;
  freeMp3?: boolean;
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
    price: 40,
    freeMp3: true,
  },
  {
    id: "shes-home",
    title: "SHE’S HOME",
    key: "G minor",
    bpm: 144,
    duration: 124.526,
    src: "/audio/shes-home.mp3",
    note: "Late-night motion with enough room for the story.",
    price: 15,
    freeMp3: true,
  },
  {
    id: "red",
    title: "RED",
    key: "A minor",
    bpm: 148,
    duration: 129.855,
    src: "/audio/red.mp3",
    note: "Fast pulse, bruised color, no wasted space.",
    price: 15,
    freeMp3: true,
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

/* ------------------------------------------------------------------ */
/* Traktrain catalog (mirrors traktrain.com/yariwtf, checked 2026-11-11) */
/* ------------------------------------------------------------------ */

export type CatalogBeat = {
  title: string;
  bpm?: number;
  key?: string;
  price: number;
  freeMp3?: boolean;
  lanes?: string[];
};

export const catalog: CatalogBeat[] = [
  { title: "LIVIN'", bpm: 168, price: 15, lanes: ["osamason", "underground"] },
  { title: "NO QUESTION", bpm: 149, price: 15 },
  { title: "GET UP", price: 15 },
  { title: "OSAMASON TYPE BEAT", price: 15, lanes: ["osamason", "underground", "che"] },
  { title: "ENERGY", price: 15 },
  { title: "FLINT", bpm: 195, price: 15, lanes: ["detroit", "rio-da-yung-og", "babyface-ray"] },
  { title: "MONEY GETTER", price: 15 },
  { title: "STAR CAR", bpm: 162, key: "B minor", price: 15 },
  { title: "ON ME", bpm: 155, key: "E minor", price: 15 },
  { title: "STOMPED OUT", bpm: 137, key: "D major", price: 15 },
  { title: "LIST", bpm: 161, key: "E minor", price: 15 },
  { title: "HYBRID", bpm: 130, key: "B minor", price: 40, freeMp3: true },
  { title: "SHE'S HOME", bpm: 144, key: "G minor", price: 15, freeMp3: true },
  { title: "RED", bpm: 148, key: "A minor", price: 15, freeMp3: true },
];

export const licenseTiers = [
  { name: "MP3 Lease", bestFor: "Demos, SoundCloud drops, testing a song before you commit." },
  { name: "WAV Lease", bestFor: "Clean streaming releases on Spotify and Apple Music." },
  { name: "Premium Lease", bestFor: "Tracked-out stems for your engineer and a bigger release." },
  { name: "Unlimited", bestFor: "No stream caps. For songs you plan to push hard." },
  { name: "Exclusive", bestFor: "The beat comes down from the store. It is yours alone." },
] as const;

/* ------------------------------------------------------------------ */
/* Type-beat lanes: one landing page per sound people search for       */
/* ------------------------------------------------------------------ */

export type Lane = {
  slug: string;
  artist: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  traits: string[];
  bpm: string;
  writeOver: string;
  faq: { question: string; answer: string }[];
  related: string[];
};

export const lanes: Lane[] = [
  {
    slug: "playboi-carti",
    artist: "Playboi Carti",
    title: "Playboi Carti type beats",
    metaTitle: "Playboi Carti Type Beats: Rage & Vamp Beats | YARI",
    metaDescription:
      "Rage and vamp Playboi Carti type beats by Yari, an Atlanta producer. Preview free, lease from $15 on Traktrain, or book a call for a custom beat.",
    answer:
      "A Playboi Carti type beat is built for energy, not lyrics on paper: loud, distorted synths, punchy 808s, and a loop simple enough to bounce a whole crowd. Yari makes them in the rage and vamp lane, around 140 to 170 BPM, with space left for ad-libs and repeated hooks.",
    traits: [
      "Big, distorted synth chords or arps",
      "Short, punchy 808s that hit with the kick",
      "Fast, minimal hi-hats that stay out of the way",
      "Dark vamp textures or bright rage leads",
    ],
    bpm: "140 to 170 BPM",
    writeOver: "Ad-lib heavy hooks, chants, and voice switches.",
    faq: [
      {
        question: "What BPM is a Playboi Carti type beat?",
        answer:
          "Rage-era Carti beats usually sit between 140 and 170 BPM. Faster ones work best with a half-time flow over the 808.",
      },
      {
        question: "What is the difference between rage and vamp beats?",
        answer:
          "Rage beats lean on bright, loud synth leads. Vamp beats are darker and grimier, with heavier distortion and a more menacing loop.",
      },
    ],
    related: ["ken-carson", "destroy-lonely", "osamason"],
  },
  {
    slug: "ken-carson",
    artist: "Ken Carson",
    title: "Ken Carson type beats",
    metaTitle: "Ken Carson Type Beats: Hard Rage Beats from $15 | YARI",
    metaDescription:
      "Hard, distorted Ken Carson type beats by Yari. Preview, lease from $15 on Traktrain, or book a production call for a custom rage beat.",
    answer:
      "A Ken Carson type beat is rage at full volume: crushed, fast drums, 808s pushed into distortion, and synths that sound like an alarm going off. Yari keeps the low end huge and the arrangement short so the energy never drops.",
    traits: [
      "Fast, crushed drums with stuttered hats",
      "808s pushed hard into distortion",
      "Harsh, buzzing synth leads",
      "Short sections and sudden drops",
    ],
    bpm: "150 to 170 BPM",
    writeOver: "Short, aggressive bars and chant-style hooks.",
    faq: [
      {
        question: "What makes a beat sound like Ken Carson?",
        answer:
          "Speed and distortion. Fast hats, heavy clipped 808s, and a harsh synth lead with very little space between hits.",
      },
      {
        question: "Can I buy a Ken Carson type beat exclusively?",
        answer:
          "Yes. Pick the Exclusive license on Traktrain and the beat comes off the store for good.",
      },
    ],
    related: ["playboi-carti", "destroy-lonely", "che"],
  },
  {
    slug: "destroy-lonely",
    artist: "Destroy Lonely",
    title: "Destroy Lonely type beats",
    metaTitle: "Destroy Lonely Type Beats: Dark Melodic Rage | YARI",
    metaDescription:
      "Dark, melodic Destroy Lonely type beats by Yari. Preview, lease from $15 on Traktrain, or book a call for a custom beat built around your voice.",
    answer:
      "A Destroy Lonely type beat is rage with a moodier, more melodic side: hazy synth pads, a darker chord loop, and 808s that glide instead of just slamming. Yari keeps it spacious so a laid-back, melodic delivery floats on top.",
    traits: [
      "Dark, hazy synth pads and chords",
      "Gliding 808s with long tails",
      "Steady drums with fewer rolls",
      "Moody, atmospheric mix",
    ],
    bpm: "140 to 160 BPM",
    writeOver: "Melodic, laid-back verses and hooks that repeat.",
    faq: [
      {
        question: "How is a Destroy Lonely beat different from a Ken Carson beat?",
        answer:
          "Both come from the same rage world. Destroy Lonely beats are moodier and more melodic. Ken Carson beats are faster and harsher.",
      },
      {
        question: "Can Yari make a custom Destroy Lonely-style beat?",
        answer:
          "Yes. Book a production call and bring a reference. Yari builds the beat around your voice and tempo.",
      },
    ],
    related: ["ken-carson", "playboi-carti", "nettspend"],
  },
  {
    slug: "rio-da-yung-og",
    artist: "Rio Da Yung OG",
    title: "Rio Da Yung OG type beats",
    metaTitle: "Rio Da Yung OG Type Beats: Flint Beats from $15 | YARI",
    metaDescription:
      "Bouncy, off-beat Flint beats in the Rio Da Yung OG lane by Yari. Hear FLINT at 195 BPM, lease from $15 on Traktrain, or book a call.",
    answer:
      "A Rio Da Yung OG type beat is Flint, Michigan bounce: an off-beat bass line, a simple piano or synth riff, and sparse drums that leave room for a fast, wordy flow. Yari's FLINT runs at 195 BPM, the double-time pocket this sound lives in.",
    traits: [
      "Off-beat, bouncy bass line",
      "Simple, catchy piano or synth riff",
      "Sparse drums with lots of space",
      "Fast tempos for rapid, wordy flows",
    ],
    bpm: "90 to 100 or 180 to 200 BPM",
    writeOver: "Fast, packed verses and punchlines that ride the off-beat.",
    faq: [
      {
        question: "Which Yari beat fits the Rio Da Yung OG lane?",
        answer: "Start with FLINT at 195 BPM. It is tagged in the same Flint and Detroit lane on Traktrain.",
      },
      {
        question: "Is a Flint beat the same as a Detroit beat?",
        answer:
          "They are close cousins. Both use off-beat bass and sparse drums. Flint beats often feel a little faster and more chaotic.",
      },
    ],
    related: ["detroit", "babyface-ray", "ytb-fatt"],
  },
  {
    slug: "tezzus",
    artist: "Tezzus",
    title: "Tezzus type beats",
    metaTitle: "Tezzus Type Beats: Underground Beats from $15 | YARI",
    metaDescription:
      "Underground Tezzus type beats by Yari. Preview the current beats, lease from $15 on Traktrain, or book a production call for a custom version.",
    answer:
      "Tezzus type beats come from the same underground wave as OSAMASON and Nettspend: raw, distorted 808s, glitchy melodies, and loops that sound unfinished on purpose. Yari builds them loud and simple so the voice is the main texture.",
    traits: [
      "Raw, distorted 808s",
      "Glitchy or detuned melody loops",
      "Skippy, unpredictable hi-hats",
      "Lo-fi grit left in the mix",
    ],
    bpm: "140 to 170 BPM",
    writeOver: "Melodic or shouted hooks, ad-libs, and short verses.",
    faq: [
      {
        question: "What do Tezzus type beats sound like?",
        answer:
          "Underground and gritty: distorted 808s, glitchy melodies, and loose drums, close to the OSAMASON and Nettspend lanes.",
      },
      {
        question: "Can I get a custom Tezzus-style beat?",
        answer: "Yes. Answer four quick questions on the Start page and book a production call with Yari.",
      },
    ],
    related: ["diamond", "osamason", "nettspend"],
  },
  {
    slug: "diamond",
    artist: "Diamond",
    title: "Diamond type beats",
    metaTitle: "Diamond Type Beats: Underground Rage Beats | YARI",
    metaDescription:
      "Underground Diamond type beats by Yari. Preview the current beats, lease from $15 on Traktrain, or book a production call for a custom version.",
    answer:
      "Diamond type beats sit in the same underground lane as Tezzus, OSAMASON, and Nettspend: hard 808s, bright or eerie synth loops, and drums that bounce more than they groove. Yari keeps the loop short and loud so the vocal sets the mood.",
    traits: [
      "Hard, upfront 808s",
      "Bright or eerie synth loop",
      "Bouncy, skippy drum patterns",
      "Short arrangement with sudden drops",
    ],
    bpm: "140 to 170 BPM",
    writeOver: "Catchy repeated hooks, ad-libs, and short verses.",
    faq: [
      {
        question: "What do Diamond type beats sound like?",
        answer:
          "Underground and bouncy: hard 808s, a short synth loop, and skippy drums, close to the Tezzus and OSAMASON lanes.",
      },
      {
        question: "Can I get a custom Diamond-style beat?",
        answer: "Yes. Answer four quick questions on the Start page and book a production call with Yari.",
      },
    ],
    related: ["tezzus", "osamason", "nettspend"],
  },
  {
    slug: "osamason",
    artist: "OSAMASON",
    title: "OSAMASON type beats",
    metaTitle: "OSAMASON Type Beats: Buy Rage Beats from $15 | YARI",
    metaDescription:
      "Distorted, fast OSAMASON type beats by Yari. Preview free, lease from $15 on Traktrain, or book a call for a custom rage beat built around your voice.",
    answer:
      "An OSAMASON type beat is fast, loud, and blown out on purpose: clipped 808s, bright synth leads that sound like they're about to break, and hi-hats that never sit still. Yari makes them between roughly 150 and 170 BPM, leaves the low end loud, and keeps the melody short so the flow can take over.",
    traits: [
      "Distorted 808s that clip on purpose",
      "Bright, detuned synth lead on a 2 or 4 bar loop",
      "Rapid hats with stutters and rolls",
      "Hard drops where everything cuts but the 808",
    ],
    bpm: "150 to 170 BPM",
    writeOver: "Short, repeated punchlines and ad-lib heavy hooks. Leave space for the drop.",
    faq: [
      {
        question: "What BPM is an OSAMASON type beat?",
        answer:
          "Most sit between 150 and 170 BPM. Yari's LIVIN' runs at 168 BPM. At that speed you can rap double time or ride half time over the 808.",
      },
      {
        question: "Can I use a free OSAMASON type beat for a release?",
        answer:
          "The free MP3 on Traktrain is tagged and meant for writing and demos. Buy a lease (from $15) before you upload a song to streaming platforms.",
      },
    ],
    related: ["che", "nettspend", "underground"],
  },
  {
    slug: "nettspend",
    artist: "Nettspend",
    title: "Nettspend type beats",
    metaTitle: "Nettspend Type Beats: Dreamy Underground Beats | YARI",
    metaDescription:
      "Airy, glitchy Nettspend type beats by Yari. Preview the current beats, lease from $15 on Traktrain, or book a production call for a custom version.",
    answer:
      "A Nettspend type beat floats more than it hits: washed-out pads, glassy plucks, bouncy 808s, and drums that feel half-finished on purpose. Yari keeps the mix soft on top and heavy on the bottom so a melodic, mumbled delivery sits right in the middle.",
    traits: [
      "Hazy pads and bell or pluck melodies",
      "Bouncy 808 patterns with short slides",
      "Sparse, skippy drums that leave holes",
      "Lo-fi texture without losing low end",
    ],
    bpm: "140 to 160 BPM",
    writeOver: "Melodic flows, repeated hooks, and half-sung verses.",
    faq: [
      {
        question: "What makes a beat sound like Nettspend?",
        answer:
          "Soft, dreamy melodies over 808s that still bounce. The drums are sparse and the texture is a little blurry, so the vocal carries the energy.",
      },
      {
        question: "Can Yari make a custom Nettspend-style beat?",
        answer:
          "Yes. Book a production call, bring a reference or a demo, and Yari builds the beat around your voice instead of a generic loop.",
      },
    ],
    related: ["osamason", "underground", "lucki"],
  },
  {
    slug: "ytb-fatt",
    artist: "YTB Fatt",
    title: "YTB Fatt type beats",
    metaTitle: "YTB Fatt Type Beats: Hard Street Beats from $15 | YARI",
    metaDescription:
      "Dark, piano-heavy YTB Fatt type beats by Yari. Preview and lease from $15 on Traktrain, or book a call for a custom street beat.",
    answer:
      "A YTB Fatt type beat is built for storytelling with pressure behind it: dark piano or keys, gliding 808s, tight snares, and a melody that feels like a warning. Yari keeps the arrangement simple so every bar of the verse can be heard.",
    traits: [
      "Dark piano or bell melodies",
      "Long, sliding 808s",
      "Tight claps and snares on the 3",
      "Room in the arrangement for long verses",
    ],
    bpm: "140 to 160 BPM (often felt in half time)",
    writeOver: "Long verses, street storytelling, and punchy one-line hooks.",
    faq: [
      {
        question: "What BPM is a YTB Fatt type beat?",
        answer:
          "Usually around 140 to 160 BPM, felt in half time. That keeps the bounce while leaving room for a fast, talkative flow.",
      },
      {
        question: "Do I need a lease to use the beat?",
        answer:
          "Yes for anything you release. Leases start at $15 on Traktrain. An exclusive takes the beat off the store for good.",
      },
    ],
    related: ["lil-baby", "detroit", "babyface-ray"],
  },
  {
    slug: "lil-baby",
    artist: "Lil Baby",
    title: "Lil Baby type beats",
    metaTitle: "Lil Baby Type Beats: Melodic Atlanta Trap | YARI",
    metaDescription:
      "Melodic Atlanta trap beats in the Lil Baby lane, made by Yari. Preview, lease from $15 on Traktrain, or book a production call.",
    answer:
      "A Lil Baby type beat is melodic Atlanta trap: an emotional piano or guitar loop, rolling hi-hats, a knocking 808, and a pocket you can rap fast in. Yari keeps the melody simple and memorable so the hook lands on the first listen.",
    traits: [
      "Emotional piano, guitar, or string loop",
      "Rolling triplet hi-hats",
      "Clean 808 that knocks under the kick",
      "Clear hook and verse sections",
    ],
    bpm: "140 to 155 BPM",
    writeOver: "Fast melodic flows, motivational or pain-driven hooks.",
    faq: [
      {
        question: "What BPM are Lil Baby type beats?",
        answer:
          "Most sit between 140 and 155 BPM. Yari's SHE'S HOME runs at 144 BPM in G minor, which sits in the same pocket.",
      },
      {
        question: "Is Yari based in Atlanta?",
        answer:
          "Yes. Yari is an Atlanta producer and works with artists remotely anywhere.",
      },
    ],
    related: ["ytb-fatt", "detroit", "babyface-ray"],
  },
  {
    slug: "babyface-ray",
    artist: "Babyface Ray",
    title: "Babyface Ray type beats",
    metaTitle: "Babyface Ray Type Beats: Smooth Detroit Beats | YARI",
    metaDescription:
      "Laid-back Detroit beats in the Babyface Ray lane by Yari. Preview, lease from $15 on Traktrain, or book a call for a custom beat.",
    answer:
      "A Babyface Ray type beat is Detroit with the edges smoothed out: soulful keys or vocal chops, a relaxed groove, and bass that rolls instead of punches. It is built for a calm, confident flow that never sounds rushed.",
    traits: [
      "Soulful keys, vocal chops, or warm samples",
      "Relaxed, swung drum groove",
      "Rolling bass under a light kick",
      "Space for laid-back, conversational bars",
    ],
    bpm: "90 to 100 or 180 to 200 BPM",
    writeOver: "Smooth, confident bars and quotable lines.",
    faq: [
      {
        question: "What is the difference between a Babyface Ray beat and a Detroit beat?",
        answer:
          "Both come from Detroit. Classic Detroit beats are bouncy and off-kilter. Babyface Ray beats are smoother and more soulful, with a relaxed groove.",
      },
      {
        question: "Which Yari beat fits this lane?",
        answer:
          "Start with FLINT at 195 BPM, then book a call if you want a custom version with your own reference.",
      },
    ],
    related: ["detroit", "ytb-fatt", "lil-baby"],
  },
  {
    slug: "detroit",
    artist: "Detroit",
    title: "Detroit type beats",
    metaTitle: "Detroit Type Beats: Bouncy Detroit Beats from $15 | YARI",
    metaDescription:
      "Bouncy, off-beat Detroit type beats by Yari. Preview FLINT and more, lease from $15 on Traktrain, or book a production call.",
    answer:
      "A Detroit type beat bounces where you don't expect it: off-beat bass, a sparse piano or synth line, and drums that leave gaps for a choppy, conversational flow. Yari's FLINT runs at 195 BPM, a common double-time Detroit tempo.",
    traits: [
      "Off-beat, bouncy bass line",
      "Minimal piano or eerie synth melody",
      "Sparse drums with lots of space",
      "Tempos around 90 to 100 BPM or doubled near 180 to 200",
    ],
    bpm: "90 to 100 or 180 to 200 BPM",
    writeOver: "Choppy, talkative flows that play with the off-beat.",
    faq: [
      {
        question: "What BPM is a Detroit type beat?",
        answer:
          "Most are written around 90 to 100 BPM or doubled near 180 to 200 BPM. FLINT by Yari runs at 195 BPM.",
      },
      {
        question: "How much is a Detroit type beat lease?",
        answer:
          "Leases start at $15 on Yari's Traktrain store. Higher tiers add WAV files, stems, and unlimited streams.",
      },
    ],
    related: ["babyface-ray", "ytb-fatt", "underground"],
  },
  {
    slug: "underground",
    artist: "Underground",
    title: "Underground type beats",
    metaTitle: "Underground Type Beats: Rage, Plugg & Hazy Beats | YARI",
    metaDescription:
      "Underground type beats by Yari: rage, plugg, and hazy beats in the OSAMASON, Che, and Lucki lanes. Lease from $15 on Traktrain.",
    answer:
      "Underground type beats are the beats that don't sound like the radio: distorted rage, hazy plugg, and off-kilter loops in the lanes of OSAMASON, Che, Lucki, and the artists around them. Yari makes them raw on purpose and leaves the space for a voice that doesn't fit anywhere else.",
    traits: [
      "Rage: blown-out 808s, bright synths, 150+ BPM",
      "Plugg and hazy: soft pads, slow pockets, bounce",
      "Off-kilter arrangements that skip the usual 8-bar rules",
      "Mixes that keep the grit instead of polishing it out",
    ],
    bpm: "130 to 170 BPM depending on the lane",
    writeOver: "Anything that doesn't fit a mainstream template.",
    faq: [
      {
        question: "Where can I buy underground type beats?",
        answer:
          "Preview Yari's current beats on this site and lease them on Traktrain from $15. Every purchase delivers the files instantly.",
      },
      {
        question: "Does Yari make custom underground beats?",
        answer:
          "Yes. Book a production call with a reference track or demo and Yari builds a beat around your voice.",
      },
    ],
    related: ["osamason", "che", "lucki"],
  },
  {
    slug: "lucki",
    artist: "LUCKI",
    title: "LUCKI type beats",
    metaTitle: "LUCKI Type Beats: Hazy, Spaced-Out Beats | YARI",
    metaDescription:
      "Hazy, spaced-out LUCKI type beats by Yari. Preview, lease from $15 on Traktrain, or book a call for a custom beat.",
    answer:
      "A LUCKI type beat sounds like it's underwater: ambient samples, slowed textures, low and steady 808s, and drums that stay out of the way. Yari keeps the loop hypnotic so a low-energy, introspective flow can carry the whole song.",
    traits: [
      "Ambient, washed-out samples",
      "Steady 808 with little movement",
      "Minimal drums, often no busy hats",
      "Hypnotic loop that repeats without getting old",
    ],
    bpm: "130 to 150 BPM, felt slow",
    writeOver: "Introspective, low-key verses and repeated mantra hooks.",
    faq: [
      {
        question: "What makes a beat sound like LUCKI?",
        answer:
          "Hazy, ambient samples, slow-feeling drums, and a steady 808. The loop is hypnotic and stays out of the vocal's way.",
      },
      {
        question: "Can I get a custom LUCKI-style beat?",
        answer:
          "Yes. Book a production call and bring a reference. Yari can build the texture around your voice and tempo.",
      },
    ],
    related: ["underground", "nettspend", "che"],
  },
  {
    slug: "che",
    artist: "Che",
    title: "Che type beats",
    metaTitle: "Che Type Beats: Chaotic Rage Beats from $15 | YARI",
    metaDescription:
      "Chaotic, distorted Che type beats by Yari. Preview, lease from $15 on Traktrain, or book a production call for a custom rage beat.",
    answer:
      "A Che type beat is rage turned up past comfortable: crushed drums, screeching synths, and 808s pushed into distortion. Yari leaves the chaos in, then carves one clear lane in the middle so the vocal still cuts through.",
    traits: [
      "Crushed, over-driven drums",
      "Screeching or glitched synth leads",
      "808s pushed into heavy distortion",
      "Sudden switches and drops",
    ],
    bpm: "150 to 170 BPM",
    writeOver: "Aggressive, shouted hooks and short, punchy bars.",
    faq: [
      {
        question: "What is the difference between a Che and an OSAMASON type beat?",
        answer:
          "Both are rage. Che beats tend to be more chaotic and crushed. OSAMASON beats keep a brighter, catchier synth lead.",
      },
      {
        question: "How do I buy a Che type beat from Yari?",
        answer:
          "Open the Traktrain store, pick a lease from $15, and the files download right after checkout.",
      },
    ],
    related: ["osamason", "underground", "nettspend"],
  },
];

export const buyingFaq = [
  {
    question: "How do I buy a beat from Yari?",
    answer:
      "Tap any Buy button. It opens Yari's Traktrain store, where you pick a license, check out, and download the files right away.",
  },
  {
    question: "How much do Yari's beats cost?",
    answer:
      "Leases start at $15 on Traktrain. Higher tiers add WAV files, stems, or unlimited streams. An exclusive takes the beat off the store for good.",
  },
  {
    question: "Can I download a free beat first?",
    answer:
      "Yes. HYBRID, SHE'S HOME, and RED have free tagged MP3s on Traktrain for writing. Buy a lease before you release the song.",
  },
  {
    question: "Can Yari make a custom beat or produce my song?",
    answer:
      "Yes. Answer four quick questions on the Start page and book a production call. Yari works in Atlanta and remotely anywhere.",
  },
  {
    question: "What type beats does Yari make?",
    answer:
      "Underground, rage, Detroit, and melodic trap: Playboi Carti, Ken Carson, Destroy Lonely, OSAMASON, Nettspend, Tezzus, Diamond, Che, LUCKI, Rio Da Yung OG, Babyface Ray, YTB Fatt, and Lil Baby type beats.",
  },
] as const;
