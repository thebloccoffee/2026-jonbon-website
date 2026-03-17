/**
 * BLOG POSTS DATA
 * ─────────────────────────────────────────────────────
 * To add a new post:
 *   1. Copy an existing entry below
 *   2. Give it a unique key (e.g. "tokyo")
 *   3. Fill in the fields
 *   4. Add a card for it in travel.html
 *
 * Body block types:
 *   { type: "h2",         text: "Section Title" }
 *   { type: "p",          text: "Paragraph text here." }
 *   { type: "blockquote", text: "Quote text.", author: "— Attribution" }
 *   { type: "video",      id: "YOUTUBE_VIDEO_ID" }
 *   { type: "gallery",    images: [{ src: "path/to/img.jpg", alt: "description" }] }
 * ─────────────────────────────────────────────────────
 */

const POSTS = {

  quebec: {
    title: "Quebec City in Winter",
    location: "Quebec City, Canada",
    date: "March 2026",
    hero: "Website%20Assets/PHOTOS/Still%202026-03-05%20234021_1.2948.1.jpg",
    intro: "Walking the cobblestone streets of Old Quebec under a moody winter sky. Historic fortifications, charming boutiques, and a city that feels frozen beautifully in time.",
    body: [
      { type: "h2", text: "First Impressions" },
      { type: "p",  text: "Old Quebec in winter is unlike anywhere I've filmed. The stone walls of the fortifications are dusted with snow, the narrow streets quiet and cinematic. It's one of the few places where the cold actually adds to the beauty rather than taking away from it." },
      { type: "p",  text: "I arrived just before golden hour and the light on those wet cobblestones was something I won't forget. Everything had a blue-gray cast that felt like shooting on film." },
      { type: "video", id: "cB6dvHjjV-0" },
      { type: "h2", text: "What to Film" },
      { type: "p",  text: "Rue Saint-Jean, the Château Frontenac at night, and the Plains of Abraham in the snow are must-shoots. Bring a gimbal — the streets are uneven but worth it." },
      { type: "blockquote", text: "Some cities are beautiful in spite of the cold. Quebec City is beautiful because of it.", author: "— Jon Bon" },
      { type: "h2", text: "Practical Notes" },
      { type: "p",  text: "Battery life drops fast in the cold — bring spares and keep them in an inside pocket. The best light is just after sunrise when the streets are still empty." },
      { type: "gallery", images: [
        { src: "Website%20Assets/PHOTOS/Still%202026-03-05%20234021_1.2946.1.jpg", alt: "Old Quebec street in winter", caption: "The cobblestone streets of Old Quebec, dusted with snow and completely empty at dawn." },
        { src: "Website%20Assets/PHOTOS/Still%202026-03-05%20234021_1.2947.1.jpg", alt: "Pedestrians in Old Quebec", caption: "Locals moving through the narrow streets under a heavy winter sky." },
        { src: "Website%20Assets/PHOTOS/Still%202026-03-05%20234021_1.2948.1.jpg", alt: "Saint-Jean Gate fortress", caption: "The Saint-Jean Gate — one of the last remaining fortification gates in North America." },
        { src: "Website%20Assets/PHOTOS/Still%202026-03-05%20234021_1.3065.1.jpg", alt: "Historic stone house with red door", caption: "A classic Old Quebec facade. The red door against grey stone is a recurring visual motif in the city." },
      ]},
      { type: "p",  text: "If you're a filmmaker or content creator, Quebec City in winter deserves a spot on your list. Safe travels — see you in the next story." },
    ],
  },

  baguio: {
    title: "Baguio City Diaries",
    location: "Baguio City, Philippines",
    date: "March 2026",
    hero: null, // TODO: add your Baguio hero photo path
    intro: "Stepping into Baguio City felt like stepping into another world. After months of filming in bustling metropolis cities, the cool mountain air and misty peaks offered a different kind of beauty — subtle, contemplative, and deeply cinematic.",
    body: [
      { type: "h2", text: "Finding Solace in the Mountains" },
      { type: "p",  text: "The first thing you notice about Baguio is the temperature. At 5,000 feet above sea level, the city's climate is refreshingly cool — unusual for the Philippines. The light filtering through the fog created the kind of atmospheric scenes cinematographers dream about." },
      { type: "p",  text: "I arrived in the early morning, when the mist still clung to the pine-covered mountains. Everything felt dreamlike, almost ethereal." },
      { type: "video", id: null }, // TODO: add your Baguio YouTube video ID
      { type: "h2", text: "Wandering Through the Streets" },
      { type: "p",  text: "Baguio's downtown area is a charming mix of colonial architecture, local markets, and modern establishments. I spent hours walking through Session Road, observing how locals go about their daily lives." },
      { type: "blockquote", text: "The cure for anything is salt water: sweat, tears, or the sea. But sometimes, what you really need is the cool embrace of mountains and the kindness of strangers.", author: "— Jon Bon" },
      { type: "h2", text: "Where to Eat & Explore" },
      { type: "p",  text: "Baguio is famous for its local delicacies — fresh strawberries from local farms, steaming bowls of lomi, and the iconic piaya. Mines View Park, Camp John Hay, and the Public Market are essential stops." },
      { type: "gallery", images: [] }, // TODO: add your Baguio photos
      { type: "p",  text: "If you're a filmmaker looking for a destination with natural beauty and atmospheric cinematography potential, I couldn't recommend Baguio more highly. Safe travels." },
    ],
  },

  chongqing: {
    title: "Chongqing Lights",
    location: "Chongqing, China",
    date: "February 2026",
    hero: null, // TODO: add your Chongqing hero photo path
    intro: "Neon-lit megacity energy along the Yangtze River where ancient and modern collide. Chongqing is unlike any city I've ever filmed.",
    body: [
      { type: "h2", text: "China's Most Vertical City" },
      { type: "p",  text: "Chongqing sprawls across mountains and river valleys, making it one of the most visually complex cities on earth. There's no such thing as a flat street here — everything is stairs, bridges, and elevated walkways." },
      { type: "video", id: null }, // TODO: add your Chongqing YouTube video ID
      { type: "h2", text: "Filming at Night" },
      { type: "p",  text: "The city comes alive after dark. The neon reflections on the Yangtze, the cable cars crossing overhead, the ancient Hongya Cave lit up against the skyline — it's the most cinematic city I've visited in Asia." },
      { type: "gallery", images: [] }, // TODO: add your Chongqing photos
      { type: "p",  text: "Chongqing changed the way I think about urban filmmaking. Safe travels — see you in the next story." },
    ],
  },

  newyork: {
    title: "New York Streets",
    location: "New York, USA",
    date: "January 2026",
    hero: null, // TODO: add your New York hero photo path
    intro: "From Times Square chaos to quiet Brooklyn moments — a filmmaker's honest take on the city that never sleeps.",
    body: [
      { type: "h2", text: "The City as a Character" },
      { type: "p",  text: "New York doesn't need an introduction. What surprised me as a filmmaker was how the city almost directs itself — you point the camera anywhere and something interesting is happening." },
      { type: "video", id: null }, // TODO: add your New York YouTube video ID
      { type: "h2", text: "Where to Film" },
      { type: "p",  text: "Beyond the obvious landmarks, the real gold is in the outer boroughs. Bushwick for street art, Flushing for culture, the Rockaways for something completely unexpected." },
      { type: "gallery", images: [] }, // TODO: add your New York photos
      { type: "p",  text: "New York is humbling and inspiring in equal measure. Safe travels." },
    ],
  },

  danang: {
    title: "Da Nang — Beach, Marble Mountains & Culture",
    location: "Da Nang, Vietnam",
    date: "December 2025",
    hero: null, // TODO: add your Da Nang hero photo path
    intro: "Golden hour over the South China Sea. Da Nang in its full cinematic glory — beaches, mountains, and a city that moves at exactly the right pace.",
    body: [
      { type: "h2", text: "A Photographer's Paradise" },
      { type: "p",  text: "Da Nang sits between two of Vietnam's most compelling landscapes — the ocean to the east and the Marble Mountains to the south. The light here is extraordinary, especially in the early morning and late afternoon." },
      { type: "video", id: null }, // TODO: add your Da Nang YouTube video ID
      { type: "h2", text: "The Marble Mountains" },
      { type: "p",  text: "Five marble and limestone hills rising from the coastal plain, each named after a natural element. Inside are caves, temples, and viewpoints that most tourists skip. Don't skip them." },
      { type: "gallery", images: [] }, // TODO: add your Da Nang photos
      { type: "p",  text: "Da Nang was a beautiful surprise. Safe travels — see you in the next story." },
    ],
  },

  vancouver: {
    title: "Vancouver — Mountains, Ocean & Urban Wild",
    location: "Vancouver, Canada",
    date: "November 2025",
    hero: null, // TODO: add your Vancouver hero photo path
    intro: "Where the Rockies drop straight into a cosmopolitan city with the best food in Canada.",
    body: [
      { type: "h2", text: "The Most Scenic City in North America" },
      { type: "p",  text: "Vancouver is absurdly photogenic. Mountains behind the skyline, ocean in front, Stanley Park on the edge of downtown — it's the kind of place that makes you want to keep the camera rolling constantly." },
      { type: "video", id: null }, // TODO: add your Vancouver YouTube video ID
      { type: "gallery", images: [] }, // TODO: add your Vancouver photos
      { type: "p",  text: "Vancouver is a city I'll be coming back to. Safe travels." },
    ],
  },

  victoria: {
    title: "Victoria — Charm & History",
    location: "Victoria, Canada",
    date: "October 2025",
    hero: null, // TODO: add your Victoria hero photo path
    intro: "The capital of British Columbia offers charming streets, historic architecture, and peaceful waterfront views.",
    body: [
      { type: "h2", text: "A Quieter Kind of Beautiful" },
      { type: "p",  text: "Victoria moves slower than Vancouver, and that's exactly why I loved filming there. The Inner Harbour, Chinatown, and the Fairmont Empress are all worth your time and your lens." },
      { type: "video", id: null }, // TODO: add your Victoria YouTube video ID
      { type: "gallery", images: [] }, // TODO: add your Victoria photos
      { type: "p",  text: "Victoria is the kind of place that rewards patience. Safe travels." },
    ],
  },

};
