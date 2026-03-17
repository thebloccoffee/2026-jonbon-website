/**
 * BLOG POSTS DATA  ── Single source of truth for all blog content
 * ─────────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW POST:
 *   1. Copy an existing entry below and give it a unique key (e.g. "tokyo")
 *   2. Fill in all fields — at minimum: title, location, date, category, intro, emoji, excerpt
 *   3. Set  featuredHero: true  on whichever post should be the big hero card
 *      (only one post at a time; remove it from the previous hero post)
 *   4. Set  featured: false  to hide a post from the home page (it still shows on travel.html)
 *   5. That's it — both travel.html and index.html update automatically
 *
 * CMS FIELD REFERENCE:
 *   emoji        {string}  — emoji icon for cards without a hero photo
 *   excerpt      {string}  — 1–2 sentence card description shown on listing pages
 *   featuredHero {boolean} — true = this post is the large hero card (one at a time)
 *   featured     {boolean} — false = hide from home page blog section (default: true)
 *   hero         {string|null} — path to hero image, or null if not yet available
 *   category     {string}  — "travel" | "gear" | "tutorial"
 *   tags         {Array}   — keyword tags
 *
 * BODY BLOCK TYPES:
 *   { type: "h2",         text: "Section Title" }
 *   { type: "p",          text: "Paragraph text here." }
 *   { type: "blockquote", text: "Quote text.", author: "— Attribution" }
 *   { type: "video",      id: "YOUTUBE_VIDEO_ID" }
 *   { type: "gallery",    images: [{ src: "path.jpg", alt: "description", caption: "..." }] }
 *   { type: "specs",      title: "...", highlights: [...], items: [...] }
 * ─────────────────────────────────────────────────────────────────
 */

const POSTS = {

  quebec: {
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:       "❄️",
    excerpt:     "Walking the cobblestone streets of Old Quebec under a moody winter sky. Historic fortifications and a city that feels frozen beautifully in time.",
    featuredHero: true,
    featured:    true,
    // ────────────────────────────────────────────────────────────
    title:    "Quebec City in Winter",
    location: "Quebec City, Canada",
    date:     "March 2026",
    category: "travel",
    tags:     ["Travel", "Canada", "Winter", "Filmmaking", "Street Photography"],
    hero:     "posts/quebec/Still%202026-03-05%20234021_1.2948.1.jpg",
    intro:    "Walking the cobblestone streets of Old Quebec under a moody winter sky. Historic fortifications, charming boutiques, and a city that feels frozen beautifully in time.",
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
        { src: "posts/quebec/Still%202026-03-05%20234021_1.2946.1.jpg", alt: "Old Quebec street in winter", caption: "The cobblestone streets of Old Quebec, dusted with snow and completely empty at dawn." },
        { src: "posts/quebec/Still%202026-03-05%20234021_1.2947.1.jpg", alt: "Pedestrians in Old Quebec", caption: "Locals moving through the narrow streets under a heavy winter sky." },
        { src: "posts/quebec/Still%202026-03-05%20234021_1.2948.1.jpg", alt: "Saint-Jean Gate fortress", caption: "The Saint-Jean Gate — one of the last remaining fortification gates in North America." },
        { src: "posts/quebec/Still%202026-03-05%20234021_1.3065.1.jpg", alt: "Historic stone house with red door", caption: "A classic Old Quebec facade. The red door against grey stone is a recurring visual motif in the city." },
      ]},
      { type: "p",  text: "If you're a filmmaker or content creator, Quebec City in winter deserves a spot on your list. Safe travels — see you in the next story." },
    ],
  },

  baguio: {
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "🌿",
    excerpt:  "Exploring the misty mountains and cool climate of Baguio City. A hidden gem for filmmakers seeking solace away from the tropical heat.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "Baguio City Diaries",
    location: "Baguio City, Philippines",
    date:     "March 2026",
    category: "travel",
    tags:     ["Travel", "Philippines", "Mountains", "Filmmaking"],
    hero:     null, // TODO: add your Baguio hero photo path
    intro:    "Stepping into Baguio City felt like stepping into another world. After months of filming in bustling metropolis cities, the cool mountain air and misty peaks offered a different kind of beauty — subtle, contemplative, and deeply cinematic.",
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
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "🏙️",
    excerpt:  "Neon-lit megacity energy along the Yangtze River where ancient and modern collide. China's most vertical city at night.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "Chongqing Lights",
    location: "Chongqing, China",
    date:     "February 2026",
    category: "travel",
    tags:     ["Travel", "China", "Night Photography", "Urban", "Filmmaking"],
    hero:     null, // TODO: add your Chongqing hero photo path
    intro:    "Neon-lit megacity energy along the Yangtze River where ancient and modern collide. Chongqing is unlike any city I've ever filmed.",
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
      "emoji": "🗽",
      "excerpt": "",
      "featured": true,
      "title": "New York Streets",
      "location": "New York, USA",
      "date": "January 2026",
      "category": "travel",
      "tags": [
          "Travel",
          "USA",
          "Street Photography",
          "Urban"
      ],
      "hero": null,
      "intro": "From Times Square chaos to quiet Brooklyn moments — a filmmaker's honest take on the city that never sleeps.",
      "body": [
          {
              "type": "h2",
              "text": "The City as a Character"
          },
          {
              "type": "p",
              "text": "New York doesn't need an introduction. What surprised me as a filmmaker was how the city almost directs itself — you point the camera anywhere and something interesting is happening."
          },
          {
              "type": "video",
              "id": null
          },
          {
              "type": "h2",
              "text": "Where to Film"
          },
          {
              "type": "p",
              "text": "Beyond the obvious landmarks, the real gold is in the outer boroughs. Bushwick for street art, Flushing for culture, the Rockaways for something completely unexpected."
          },
          {
              "type": "gallery",
              "images": []
          },
          {
              "type": "p",
              "text": "New York is humbling and inspiring in equal measure. Safe travels."
          }
      ],
      "hidden": false
  },

  danang: {
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "🏖️",
    excerpt:  "Nestled between mountains and pristine beaches, Da Nang is a photographer's paradise. Golden hour light over the South China Sea.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "Da Nang — Beach, Marble Mountains & Culture",
    location: "Da Nang, Vietnam",
    date:     "December 2025",
    category: "travel",
    tags:     ["Travel", "Vietnam", "Beach", "Photography"],
    hero:     null, // TODO: add your Da Nang hero photo path
    intro:    "Golden hour over the South China Sea. Da Nang in its full cinematic glory — beaches, mountains, and a city that moves at exactly the right pace.",
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
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "🏔️",
    excerpt:  "A perfect blend of urban sophistication and natural wilderness. Mountains, ocean, forests, and the best food in Canada.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "Vancouver — Mountains, Ocean & Urban Wild",
    location: "Vancouver, Canada",
    date:     "November 2025",
    category: "travel",
    tags:     ["Travel", "Canada", "Nature", "Urban", "Filmmaking"],
    hero:     null, // TODO: add your Vancouver hero photo path
    intro:    "Where the Rockies drop straight into a cosmopolitan city with the best food in Canada.",
    body: [
      { type: "h2", text: "The Most Scenic City in North America" },
      { type: "p",  text: "Vancouver is absurdly photogenic. Mountains behind the skyline, ocean in front, Stanley Park on the edge of downtown — it's the kind of place that makes you want to keep the camera rolling constantly." },
      { type: "video", id: null }, // TODO: add your Vancouver YouTube video ID
      { type: "gallery", images: [] }, // TODO: add your Vancouver photos
      { type: "p",  text: "Vancouver is a city I'll be coming back to. Safe travels." },
    ],
  },

  victoria: {
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "🌸",
    excerpt:  "The capital of British Columbia — charming streets, historic architecture, and peaceful waterfront views.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "Victoria — Charm & History",
    location: "Victoria, Canada",
    date:     "October 2025",
    category: "travel",
    tags:     ["Travel", "Canada", "Architecture", "History"],
    hero:     null, // TODO: add your Victoria hero photo path
    intro:    "The capital of British Columbia offers charming streets, historic architecture, and peaceful waterfront views.",
    body: [
      { type: "h2", text: "A Quieter Kind of Beautiful" },
      { type: "p",  text: "Victoria moves slower than Vancouver, and that's exactly why I loved filming there. The Inner Harbour, Chinatown, and the Fairmont Empress are all worth your time and your lens." },
      { type: "video", id: null }, // TODO: add your Victoria YouTube video ID
      { type: "gallery", images: [] }, // TODO: add your Victoria photos
      { type: "p",  text: "Victoria is the kind of place that rewards patience. Safe travels." },
    ],
  },

  telesingrip: {
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "📱",
    excerpt:  "The iPhone filmmaking grip that changed how I shoot on the go. Honest review after real-world use.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "Telesin Fun Shot Magnetic Grip — iPhone Filmmaking Upgrade",
    location: "Gear Review",
    date:     "October 2025",
    category: "gear",
    tags:     ["Gear", "iPhone", "Mobile Filmmaking", "Review", "Affiliate"],
    hero:     null, // TODO: add hero photo — clean product shot or you holding it
    intro:    "I've been looking for a way to get more cinematic shots from my iPhone without lugging extra gear. The Telesin Fun Shot Magnetic Grip changed how I film on the go — here's my honest take after using it on real trips.",
    body: [
      { type: "h2", text: "Why I Picked This Up" },
      { type: "p",  text: "I was skeptical of phone grips. Most of them feel like plastic toys that you use once and throw in a drawer. But the Telesin Fun Shot kept coming up in my research for lightweight travel filmmaking — specifically because of the magnetic lens mount system. That got my attention." },
      { type: "p",  text: "I wanted something I could slip into a jacket pocket and still get shots that didn't look like they came from a phone. That's the bar I tested this against." },
      { type: "h2", text: "The Specs That Actually Matter" },
      { type: "specs", title: "Telesin Fun Shot — Key Specs", highlights: [
        { value: "MagSafe", label: "Mount Type" },
        { value: "52mm",    label: "Lens Ring" },
        { value: "~85g",    label: "Weight" },
        { value: "iPhone 12+", label: "Compatible" },
      ], items: [
        { label: "Attachment",      value: "MagSafe magnetic" },
        { label: "Lens mount",      value: "52mm screw-on filter ring" },
        { label: "Top mount",       value: "Universal cold shoe" },
        { label: "Tripod thread",   value: "1/4\"-20 on base" },
        { label: "Grip material",   value: "Rubber-coated ABS" },
        { label: "Compatibility",   value: "iPhone 12 and later" },
        { label: "In the box",      value: "Grip, wrist strap, lens cloth" },
      ]},
      { type: "p",  text: "The magnetic lens mount is the standout feature. Swap lenses in seconds without unscrewing anything. For run-and-gun travel filming, that's not a convenience — it's a game changer." },
      { type: "h2", text: "In the Field" },
      { type: "p",  text: "I used this across multiple shoots — handheld street filming, golden hour wide shots, tight interior scenes. The grip gives you a real handle on your phone, which sounds simple but completely changes how steady your footage is. Your wrist has something to anchor against." },
      { type: "p",  text: "The cold shoe on top let me mount a small microphone for sit-down pieces. Paired with an anamorphic lens on the magnetic ring, I was pulling shots I would've needed a full camera rig to get before." }, // TODO: add specific location/trip details where you used it
      { type: "video", id: "zmtcBjIQPqw" },
      { type: "h2", text: "What I Love" },
      { type: "p",  text: "The magnetic lens swap is instant and secure — never had a lens fall off mid-shot. The grip itself is comfortable for extended handheld use. Cold shoe + tripod thread means it plays well with the rest of your kit. Fits in any pocket. Genuinely improves footage quality." },
      { type: "h2", text: "What Could Be Better" },
      { type: "p",  text: "The magnetic mount, while convenient, means you're locked into Telesin's lens ecosystem unless you buy adapters. The grip also doesn't have a built-in battery or charging pass-through, which would've been a nice addition for longer shoots." }, // TODO: add any other real drawbacks you noticed
      { type: "blockquote", text: "If you film travel content on an iPhone and you're not using a grip like this, you're leaving quality on the table — and not just because of stability.", author: "— Jon Bon" },
      { type: "h2", text: "Where to Get It" },
      { type: "p",  text: "You can pick it up on Amazon or directly from Telesin. Affiliate link below — I earn a small commission at no cost to you, which helps keep this blog running. I only recommend gear I actually use." }, // TODO: add your actual affiliate link here
      { type: "gallery", images: [] }, // TODO: add sample shots taken with this grip
      { type: "p",  text: "Mobile filmmaking has come a long way, and tools like this close the gap between phone and camera footage fast. What iPhone accessories are you currently using on your travels? Drop them in the comments — I'm always looking for what other creators are running with." },
    ],
  },

  cinematicresolve: {
    // ── CMS FIELDS ──────────────────────────────────────────────
    emoji:    "🎬",
    excerpt:  "Film emulation in DaVinci Resolve using Cineprint35, JP2499 DRT, or free built-in nodes. Correct first, emulate second, grain last.",
    featured: true,
    // ────────────────────────────────────────────────────────────
    title:    "How to Make Your Videos Look Cinematic Using DaVinci Resolve",
    location: "Tutorial",
    date:     "March 2026",
    category: "tutorial",
    tags:     ["Tutorial", "DaVinci Resolve", "Color Grading", "Film Emulation", "Cinematic", "PowerGrade"],
    hero:     null, // TODO: add hero — before/after frame showing the cinematic grade applied
    intro:    "Most footage straight out of a camera looks flat, digital, and forgettable. The difference between that and the warm, textured, film-like look you see on professional travel films comes down to one thing: color grading. In this tutorial I'll show you exactly how I use DaVinci Resolve to get a cinematic film emulation look, whether you want to spend money on PowerGrades like Cineprint35 or JP2499, or build something close for free with built-in nodes.",
    body: [
      { type: "h2", text: "What We're Building" },
      { type: "p",  text: "By the end of this, your footage will have the organic grain, lifted shadows, color shifts, and tonal roll-off that make videos feel like they were shot on film. We're talking Cineprint35-style halation, JP2499 DRT contrast curves, and the kind of look that makes people ask what camera you used when you just graded it well." },
      { type: "p",  text: "I'll cover three paths: using Cineprint35 (paid), using JP2499 DRT (paid), and building a free version using DaVinci's native nodes that gets you 80% of the way there without spending a cent." },
      { type: "video", id: null }, // TODO: add YouTube video ID
      { type: "h2", text: "Before You Start" },
      { type: "p",  text: "You need DaVinci Resolve 18 or later (the free version works for the built-in node workflow). For Cineprint35, you'll need to purchase and install it from Cullen Kelly's site. For JP2499 DRT, grab it from Juan Pablo's Gumroad. All three workflows assume your footage is either flat/log (S-Log, C-Log, V-Log) or at least shot with a neutral picture profile. If you're shooting heavily saturated JPEGs straight out of camera, flatten your picture profile first." },
      { type: "h2", text: "The Approach" },
      { type: "p",  text: "Film emulation is not just adding a LUT. Real film has specific characteristics: lifted blacks (shadows never go fully to zero), subtle color crossovers between highlights and shadows, halation (a red glow bleeding around bright edges), and organic grain that's tied to exposure. When you slap a LUT on top of a badly exposed shot, none of that translates. The grade has to work with the image, not just over it." },
      { type: "p",  text: "The approach here is layered: first, correct your exposure and white balance properly. Then apply your film emulation layer, whether that's a PowerGrade or a custom node tree. Then add grain last. This order matters. Grain on top of a corrected, emulated image looks natural. Grain underneath everything else looks like a filter." },
      { type: "h2", text: "Step-by-Step" },
      { type: "p",  text: "Step 1 — Set up your node tree. In the Color page, right-click your first node and label it 'Exposure Fix.' This is where you bring your log footage into a usable range. If you're on S-Log3, apply Sony's official creative LUT here to get to a Rec.709 baseline, or use DaVinci's built-in color space transform (CST) node. Don't skip this. Everything after it depends on starting from a properly transformed image." },
      { type: "p",  text: "Step 2 — Apply your film emulation. If you're using Cineprint35, import it as a PowerGrade from the Gallery and drop it after your exposure node. It handles halation, contrast, and color science in one go. If you're using JP2499 DRT, apply it through the DaVinci Color Managed workflow by setting it as your output color space. For the free path: add a new serial node, open the Curves panel, and pull the black point of each channel up slightly (R: 0.04, G: 0.03, B: 0.02). This lifts and splits your shadows the way film does." },
      { type: "p",  text: "Step 3 — Shape your contrast with a custom curve. Add another node after emulation. In the Custom Curves panel, create an S-curve but keep it subtle. The key is protecting the highlights from blowing out while adding depth in the midtones. Film compresses highlights softly rather than clipping hard. Pull the top of your curve slightly left instead of pushing it up." },
      { type: "p",  text: "Step 4 — Add halation (free method). Add a new parallel node, not serial. In that node, use the Qualifier to isolate the bright highlights. Then go to Blur and add 40-60 pixels of radius. Set the node's blend mode to Screen or drop opacity to around 30. Switch the node's gain to push into the reds slightly. This simulates the red glow that bleeds around bright edges on film. It's subtle but it reads as cinematic immediately." },
      { type: "p",  text: "Step 5 — Add grain last. Use DaVinci's built-in grain tool under Effects. Size: 3-5, Roughness: 0.4-0.6, Softness: 0.3. Set it to Luma only. Keep it light. The goal is texture you feel more than see. Crank it up and it looks like a preset. Keep it subtle and it looks like film." },
      { type: "blockquote", text: "The grade is done when you stop noticing it. If you can still see your color work, you went too far.", author: "— Jon Bon" },
      { type: "h2", text: "Common Mistakes" },
      { type: "p",  text: "The biggest one: applying film emulation to uncorrected footage. Cineprint35 is not a fix-it tool. If your whites are blown or your blacks are crushed before you apply it, the grade will look wrong. Correct first, emulate second, always. The second mistake is over-graining. Most people apply grain at 3x the level that actually looks good. When in doubt, cut it in half. Third: skipping the node order. If you add grain as a parallel node instead of the last serial node, it composites differently and looks unnatural." },
      { type: "h2", text: "Take It Further" },
      { type: "p",  text: "Once you have the base workflow locked, try saving it as your own PowerGrade in the Gallery so you can apply it to any project in one click. You can also explore pairing Cineprint35 with a shot-specific secondary grade that pushes skin tones warmer or cools down skies, keeping the film base but adding your own signature. If you want to go deeper on the free path, look into Resolve's Film Look Creator plugin that shipped in version 18.5 — it handles grain, halation, and bloom in a single dedicated panel." },
      { type: "gallery", images: [] }, // TODO: add before/after screenshots and screen recordings of the node tree
      { type: "p",  text: "That's the whole workflow. Whether you go with Cineprint, JP2499, or the free node method, the fundamentals are the same: correct first, emulate second, grain last. What color grading workflow are you currently using? Drop it in the comments." },
    ],
  },

  tofino: {
      "emoji": "🌍",
      "excerpt": "We flew into Tofino on a seaplane from Vancouver and spent two days watching blue hours, sunsets, and surfers at Cox Bay. Here is what it was like.",
      "featured": true,
      "title": "Tofino ",
      "location": "",
      "date": "February 19, 2026",
      "category": "travel",
      "tags": [
          "tofino",
          "vancouver",
          "vancouver island",
          "vancouver bc",
          "bc travel"
      ],
      "hero": "posts/tofino/4404a5051885.png",
      "intro": "Tofino hits different when you arrive by seaplane. The moment you lift off from Vancouver Harbour and the city disappears behind you, something shifts. By the time you are flying low over the coast and the Pacific comes into view, you already feel like you are somewhere else entirely.",
      "body": [
          {
              "type": "h2",
              "text": "The Seaplane Ride In"
          },
          {
              "type": "p",
              "text": "The flight from Vancouver to Tofino takes about an hour by seaplane. I have taken a lot of scenic flights over the years but this one stood out. You cross the Strait of Georgia, fly over the mountains of Vancouver Island, and then the west coast opens up below you. Dense forest meeting the Pacific. It is the kind of view that makes you put the camera down and just look."
          },
          {
              "type": "h2",
              "text": "Tin Wis and McKenzie Beach"
          },
          {
              "type": "p",
              "text": "We stayed at the Best Western Tin Wis, which sits right on McKenzie Beach, the former name for that stretch of shoreline. The location is hard to beat. You walk out the door and you are already on the sand. No long walks, no parking lots. Just the beach."
          },
          {
              "type": "p",
              "text": "We caught the blue hour from right there in front of the hotel. The light went from golden to deep blue in about twenty minutes and the whole beach had this calm, almost still quality to it. No wind. Just the sound of the water."
          },
          {
              "type": "blockquote",
              "text": "Some places earn their reputation. Tofino is one of them.",
              "author": "— Jon Bon"
          },
          {
              "type": "h2",
              "text": "Cox Bay at Sunset"
          },
          {
              "type": "p",
              "text": "Cox Bay is a short drive from Tin Wis and it is where the surfers are. We got there as the sun was going down and there were still people out in the water, riding the last waves of the day. Watching surfers against a Tofino sunset is exactly as good as it sounds. It is one of those things that is hard to film well because the real version is better than anything you will capture."
          },
          {
              "type": "gallery",
              "images": [
                  {
                      "src": "posts/tofino/d419112ab734.png",
                      "alt": "Aerial view flying into Tofino",
                      "caption": "Flying into Tofino over the Pacific coastline by seaplane."
                  },
                  {
                      "src": "posts/tofino/25d273648829.png",
                      "alt": "Blue hour at McKenzie Beach",
                      "caption": "Blue hour right outside Tin Wis at McKenzie Beach."
                  },
                  {
                      "src": "posts/tofino/3c104b5d40c9.png",
                      "alt": "Tofino beach at low tide",
                      "caption": "The beach at low tide, quiet and wide open."
                  },
                  {
                      "src": "posts/tofino/a48db4ce38c8.png",
                      "alt": "Cox Bay during sunset",
                      "caption": "Cox Bay as the sun goes down."
                  },
                  {
                      "src": "posts/tofino/4404a5051885.png",
                      "alt": "Surfers at Cox Bay during sunset",
                      "caption": "Surfers catching the last waves of the day."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "Worth the Trip"
          },
          {
              "type": "p",
              "text": "Two days in Tofino is not enough, but it is enough to understand why people keep coming back. The seaplane ride in, the beach right outside your door, the surfers at Cox Bay as the sky turns orange. It all adds up. If you get the chance to go, take it. And if you can, take the seaplane."
          }
      ]
  },

  "lunar-new-year-parade-in-vancouver-chinatown": {
      "emoji": "🌍",
      "excerpt": "Every year, Vancouver Chinatown comes alive for Lunar New Year. I showed up with my camera to document it and ended up staying longer than I planned.",
      "featured": true,
      "title": "Lunar New Year Parade in Vancouver Chinatown",
      "location": "",
      "date": "March 2026",
      "category": "travel",
      "tags": [],
      "hero": "posts/lunar-new-year-parade-in-vancouver-chinatown/846eaa4c76f1.png",
      "intro": "There is a specific kind of energy that happens when a whole community decides to celebrate together in the street. I felt it the moment I turned onto Pender Street in Vancouver Chinatown on Lunar New Year. The sidewalks were already packed. Red lanterns hung across the road. Somewhere ahead of me, a drum was going. I had my camera with me and no real plan, which is usually when I get the best footage.",
      "body": [
          {
              "type": "h2",
              "text": "Showing Up"
          },
          {
              "type": "p",
              "text": "I got there early, before the parade started. That is usually the best time to shoot. People are still moving around, finding their spots, talking to each other. The light was flat and grey, which is pretty normal for Vancouver in February, but the red and gold everywhere made up for it. Vendors were setting up. Kids were already in their spots along the curb."
          },
          {
              "type": "p",
              "text": "Vancouver Chinatown is one of the oldest in North America and you can feel that history when you walk through it. The buildings have that old character. The signs are layered in a way that takes years to build up. During Lunar New Year it all gets lit up and decorated and it feels like the neighborhood is at its best version of itself."
          },
          {
              "type": "h2",
              "text": "The Parade"
          },
          {
              "type": "p",
              "text": "When the parade started, the sound hit first. Drums and cymbals and firecrackers going off in quick bursts. The lion dancers came through and the crowd pushed forward. Everyone had their phones up. I was trying to hold my position and keep the camera steady at the same time, which is harder than it sounds when the person next to you is really excited and also very tall."
          },
          {
              "type": "p",
              "text": "The lions moved in a way that felt almost alive. The dancers inside them were working hard, you could see it in how the costumes moved. They stopped at different storefronts along the route to do the blessing ceremony, and each time they did, people gathered around and watched quietly for a moment before the drums picked back up."
          },
          {
              "type": "p",
              "text": "Community groups marched through too. Older folks in traditional dress, kids from local schools, dragon teams moving in long waves down the street. It went on for a while and I did not mind at all."
          },
          {
              "type": "h2",
              "text": "Filming in a Crowd"
          },
          {
              "type": "p",
              "text": "Shooting in a packed street parade is always a challenge. You cannot set up a tripod. You are moving with the crowd or against it. The light changes every few seconds as clouds pass. I spent most of the time just reacting, trying to stay close enough to the action without getting in anyone's way."
          },
          {
              "type": "p",
              "text": "What I kept coming back to was the faces. The kids watching the lion dancers with their mouths open. The older people who have probably seen this parade every year for decades but are still locked in on it. Those are the shots I wanted. The parade itself is spectacular but the people watching it tell the real story."
          },
          {
              "type": "blockquote",
              "text": "The parade is worth filming. The people watching it are worth filming more.",
              "author": "— Jon Bon"
          },
          {
              "type": "h2",
              "text": "The Sounds and the Food"
          },
          {
              "type": "p",
              "text": "Firecrackers are loud. I knew this going in but I was still not fully prepared for how loud they were in an enclosed street with buildings on both sides. Every time a string went off I flinched. By the end of the day I had gotten used to it, which felt like a small personal achievement."
          },
          {
              "type": "p",
              "text": "After the parade wound down I walked around and ate. That part needs no documentation, just participation. Chinatown has good food and Lunar New Year is a good excuse to try more of it than you normally would."
          },
          {
              "type": "gallery",
              "images": [
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/f3ee6c6b40e9.jpg",
                      "alt": "Lion dance performers in the parade",
                      "caption": "The lion dancers working their way down the route."
                  },
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/6dff68ee0844.jpg",
                      "alt": "Crowd watching the Lunar New Year parade",
                      "caption": "Everyone lined up along the curb waiting for the parade to pass."
                  },
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/4a94920609e6.jpg",
                      "alt": "Dragon team marching through Chinatown",
                      "caption": "A dragon team moving through the street."
                  },
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/443aafff1075.jpg",
                      "alt": "Red lanterns hanging over the street",
                      "caption": "Red lanterns across Pender Street."
                  },
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/73542118bdbf.jpg",
                      "alt": "Firecrackers going off during the celebration",
                      "caption": "Firecrackers. Loud ones."
                  },
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/efc379d2727c.jpg",
                      "alt": "Community groups in the Lunar New Year parade",
                      "caption": "Community groups representing the neighborhood."
                  },
                  {
                      "src": "posts/lunar-new-year-parade-in-vancouver-chinatown/731b18cbd24f.jpg",
                      "alt": "Vancouver Chinatown during Spring Festival",
                      "caption": "Chinatown at its best."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "Worth Showing Up For"
          },
          {
              "type": "p",
              "text": "Lunar New Year in Vancouver Chinatown is one of those events that is easy to say you will go to and then skip when the day comes and it is cold and raining. Do not skip it. The energy is real and the parade is genuinely good. Bring a camera if you have one. If not, just be there. Some things are better experienced than filmed anyway."
          },
          {
              "type": "p",
              "text": "Happy New Year to everyone who celebrates. See you at the next one."
          }
      ]
  },

};
