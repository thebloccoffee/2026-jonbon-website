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
    category: "travel",
    tags: ["Travel", "Canada", "Winter", "Filmmaking", "Street Photography"],
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
    category: "travel",
    tags: ["Travel", "Philippines", "Mountains", "Filmmaking"],
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
    category: "travel",
    tags: ["Travel", "China", "Night Photography", "Urban", "Filmmaking"],
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
    category: "travel",
    tags: ["Travel", "USA", "Street Photography", "Urban"],
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
    category: "travel",
    tags: ["Travel", "Vietnam", "Beach", "Photography"],
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
    category: "travel",
    tags: ["Travel", "Canada", "Nature", "Urban", "Filmmaking"],
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
    category: "travel",
    tags: ["Travel", "Canada", "Architecture", "History"],
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

  telesingrip: {
    title: "Telesin Fun Shot Magnetic Grip — iPhone Filmmaking Upgrade",
    location: "Gear Review",
    date: "October 2025",
    category: "gear",
    tags: ["Gear", "iPhone", "Mobile Filmmaking", "Review", "Affiliate"],
    hero: null, // TODO: add hero photo — clean product shot or you holding it
    intro: "I've been looking for a way to get more cinematic shots from my iPhone without lugging extra gear. The Telesin Fun Shot Magnetic Grip changed how I film on the go — here's my honest take after using it on real trips.",
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
    title: "How to Make Your Videos Look Cinematic Using DaVinci Resolve",
    location: "Tutorial",
    date: "March 2026",
    category: "tutorial",
    tags: ["Tutorial", "DaVinci Resolve", "Color Grading", "Film Emulation", "Cinematic", "PowerGrade"],
    hero: null, // TODO: add hero — before/after frame showing the cinematic grade applied
    intro: "Most footage straight out of a camera looks flat, digital, and forgettable. The difference between that and the warm, textured, film-like look you see on professional travel films comes down to one thing: color grading. In this tutorial I'll show you exactly how I use DaVinci Resolve to get a cinematic film emulation look, whether you want to spend money on PowerGrades like Cineprint35 or JP2499, or build something close for free with built-in nodes.",
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

};
