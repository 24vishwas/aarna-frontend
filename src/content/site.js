/**
 * Single source of truth for the studio's static content.
 * Replace the placeholder contact details, project and journal records
 * (in the Projects / Journal data) with real ones when available.
 */

export const company = {
    name: "Aarna Infrastructures",
    wordmark: "AARNA",
    descriptor: "Architecture · Construction · Interiors",
    city: "Bangalore, Karnataka, India",
    // Placeholder details — replace with the confirmed company contact information.
    phone: "+91 99886 60545",
    phoneHref: "tel:+919988660545",
    whatsapp: "https://wa.me/919988660545",
    email: "hello@aarnainfrastructures.com",
    isPlaceholderContact: true,
  };
  
  export const nav = [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/#services" },
    { label: "Our Approach", href: "/#approach" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/#contact" },
  ];
  
  export const hero = {
    headline: "Spaces That Shape The Way We Live.",
    support: "Thoughtfully designed. Precisely built. Made to last.",
    primaryCta: { label: "Explore Our Work", href: "#projects" },
    secondaryCta: { label: "Start Your Project", href: "#contact" },
  };
  
  export const philosophy = {
    headline:
      "A home is more than a structure. It is a feeling, shaped by every detail.",
    intro:
      "We work across three disciplines — architecture, construction and interiors — on a single drawing board. That means the drawing you approve is the drawing that gets built, and the details you notice five years in were decided on day one.",
    paragraphs: [
      "Every project begins with the site: its light, its slope, its breeze, the way you want to move through a morning. The plan follows the life, not the other way around.",
      "From there we hold one line of accountability — from the first survey to the day you turn the key — with one team answering for the cost, the schedule and the finish.",
    ],
  };

  export const projects_content = [
  {
    id: "proj-01",
    title: "The Terra Villa",
    slug: "terra-villa-sadashivnagar",
    category: "Residential Architecture",
    location: "Sadashivnagar, Bengaluru",
    year: "2024",
    area: "6,500 sq. ft.",
    scope: [
      "Master Architectural Planning",
      "Structural Engineering",
      "Interior Architecture",
      "Biophilic Landscape Integration"
    ],
    summary:
      "A biophilic private residence featuring exposed earth block construction, courtyard microclimates, and floor-to-ceiling glass integration.",
    description:
      "Nestled in the quiet, tree-lined avenues of Sadashivnagar, The Terra Villa redefines urban tropical living by weaving nature directly into the architectural fabric.\n\nThe residence centers around a double-height internal courtyard that acts as a natural thermal chimney, drawing cool air across living spaces while bathing interiors in soft, filtered daylight. Materials were chosen for their raw tactility and local provenance, featuring stabilized mud blocks, locally quarried granite flooring, and unfinished Burmese teak.\n\nSustainability is embedded at every level, from concealed rainwater harvesting aquifers beneath the driveway to passive cooling masonry walls that drastically reduce mechanical HVAC dependency during Bengaluru's warmer months.",
    cover_image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
    ],
    is_demonstration: false,
  },
  {
    id: "proj-02",
    title: "Nexus Tech Tower",
    slug: "nexus-tech-tower-whitefield",
    category: "Commercial Infrastructure",
    location: "Whitefield, Bengaluru",
    year: "2023",
    area: "180,000 sq. ft.",
    scope: [
      "Commercial Architecture",
      "Facade Engineering",
      "HVAC & MEP Design",
      "LEED Certification Consulting"
    ],
    summary:
      "A high-density 14-story corporate office hub constructed with pre-stressed concrete, kinetic solar facades, and LEED Gold certification standards.",
    description:
      "Situated in the bustling tech corridor of Whitefield, Nexus Tech Tower stands as a benchmark for contemporary corporate architecture in Bengaluru.\n\nThe building features an engineered kinetic louvered facade that dynamically rotates to deflect harsh afternoon solar glare while maintaining panoramic views of the city skyline. Floor plates are engineered with post-tensioned slabs to allow completely column-free modular office layouts for modern tech enterprises.\n\nEnergy efficiency drives the core operations, incorporating a 500kW rooftop solar array, smart greywater recycling plants, and destination-control high-speed elevators.",
    cover_image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
    ],
    is_demonstration: false,
  },
  {
    id: "proj-03",
    title: "The Courtyard Residence",
    slug: "courtyard-residence-indiranagar",
    category: "Luxury Interior & Build",
    location: "Indiranagar, Bengaluru",
    year: "2024",
    area: "4,200 sq. ft.",
    scope: [
      "Adaptive Reuse",
      "Interior Architecture",
      "Custom Millwork & Joinery",
      "Lighting Design"
    ],
    summary:
      "Adaptive reuse of a heritage plot into an open-plan contemporary living space accented with Teak wood, polished Sadarahalli granite, and brass finishes.",
    description:
      "This project involved the sensitive gut-renovation of a 1980s urban townhouse in Indiranagar, converting a compartmentalized structure into an expansive, light-filled sanctuary.\n\nBy stripping back interior partitions, we introduced a central double-height volume wrapped in slatted timber screens. The material palette highlights regional craftsmanship, utilizing honed Sadarahalli granite countertops, handcrafted terracotta wall tiles, and brushed antique brass fixtures.\n\nThe transition between indoor zones and the manicured rear garden is dissolved completely through frameless sliding glass pocket doors.",
    cover_image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
    ],
    is_demonstration: false,
  },
  {
    id: "proj-04",
    title: "Verdant Heights Apartments",
    slug: "verdant-heights-bellandur",
    category: "Multi-Family Housing",
    location: "Bellandur, Bengaluru",
    year: "2023",
    area: "45,000 sq. ft.",
    scope: [
      "Master Planning",
      "Multi-Unit Architecture",
      "Landscape Architecture",
      "Sustainable Infrastructure"
    ],
    summary:
      "A 40-unit boutique luxury apartment complex integrating vertical gardens, rainwater harvest systems, and low-carbon building materials.",
    description:
      "Verdant Heights reimagines community living close to Bengaluru's primary IT hub in Bellandur, prioritizing urban greenery and communal well-being.\n\nEach apartment is designed with through-ventilation layouts and cantilevered private balconies draped in indigenous trailing flora. Terraced shared gardens provide community spaces at multiple levels, fostering social connection among residents.\n\nThe development operates entirely on optimized solar power for common areas and features an advanced tertiary sewage treatment plant for garden irrigation.",
    cover_image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
    ],
    is_demonstration: true,
  },
  {
    id: "proj-05",
    title: "Aura Boutique Pavilion",
    slug: "aura-boutique-lavelle-road",
    category: "Retail & Hospitality",
    location: "Lavelle Road, Bengaluru",
    year: "2022",
    area: "3,100 sq. ft.",
    scope: [
      "Retail Interior Architecture",
      "Bespoke Display Fixtures",
      "Acoustic Engineering",
      "Lighting Direction"
    ],
    summary:
      "Minimalist steel frame structure with bespoke acoustic paneling and custom brutalist concrete counters designed for a premium flagship store.",
    description:
      "Located on prestigious Lavelle Road, the Aura Boutique Pavilion serves as an experiential retail destination that merges stark brutalist concrete with delicate textural fabrics.\n\nThe floor plan is organized around sculptural poured-concrete display islands that anchor the open expanse. Perforated blackened steel panels line the perimeter walls, providing versatile hanging systems while concealing architectural lighting and acoustic baffling.\n\nA moody, restrained material palette allows exhibited products to command absolute visual focus.",
    cover_image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
    ],
    is_demonstration: false,
  },
  {
    id: "proj-06",
    title: "The Canopy Estate",
    slug: "canopy-estate-nandi-hills",
    category: "Custom Villa Development",
    location: "Nandi Hills Outskirts, Bengaluru",
    year: "2024",
    area: "7,800 sq. ft.",
    scope: [
      "Hillside Structural Engineering",
      "Off-Grid Energy Planning",
      "Landscape Design",
      "Interior Architecture"
    ],
    summary:
      "Off-grid hillside getaway boasting cantilevered concrete decks, solar power integration, and natural local stone walling.",
    description:
      "Perched dramatically on the rugged slopes near Nandi Hills, The Canopy Estate is designed to frame sweeping valley vistas while respecting fragile topography.\n\nThe structure anchors into the contour lines using local dry-stone masonry, supporting sweeping cantilevered reinforced concrete decks that float above the tree canopy. Expansive double-glazed structural glass walls eliminate barriers between the interior and the shifting moods of the mist-laden hills.\n\nCompletely off-grid, the estate relies on high-capacity solar battery banks, deep borewell filtration, and passive geothermal cooling channels.",
    cover_image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
    ],
    is_demonstration: true,
  },
];
  
  export const services = [
    {
      number: "01",
      title: "Architecture and Planning",
      summary:
        "Site studies, drawings, models and approvals — so the constraints of a plot are legible before anything is built.",
      detail:
        "We survey the site, study orientation and setbacks, and test options in plan and model until the layout earns its place. Drawings are prepared for sanction and then detailed for the people building them.",
      deliverables: ["Site and feasibility study", "Concept and layout options", "Sanction drawing set", "Detail drawings for execution"],
      image: "serviceArchitecture",
    },
    {
      number: "02",
      title: "Home Construction",
      summary:
        "End-to-end execution by one accountable team, with the specification fixed before work begins.",
      detail:
        "Structure, masonry, services and finishes are sequenced by a single programme. Material specification is agreed up front, so the quality you were promised is the quality that arrives on site.",
      deliverables: ["Sequenced build programme", "Agreed material specification", "Site supervision", "Stage-wise quality checks"],
      image: "serviceConstruction",
    },
    {
      number: "03",
      title: "Interior Design",
      summary:
        "Palettes, joinery and lighting resolved to the last reveal — designed alongside the building, not after it.",
      detail:
        "Because interiors are drawn with the architecture, ceiling heights, openings and services are already coordinated. We resolve finishes, joinery, lighting and furniture layouts into a set that can be built.",
      deliverables: ["Material and finish palette", "Joinery and furniture layouts", "Lighting and services coordination", "On-site finishing support"],
      image: "serviceInterior",
    },
    {
      number: "04",
      title: "Renovation and Remodeling",
      summary:
        "Reworking existing homes and buildings with the same rigour we bring to new ones.",
      detail:
        "We begin with what is actually there — structure, services, waterproofing — and plan the rework around it, so new finishes are not laid over old problems.",
      deliverables: ["Existing-condition survey", "Structural and services review", "Rework plan and phasing", "Finish and joinery upgrade"],
      image: "serviceRenovation",
    },
    {
      number: "05",
      title: "Turnkey Home Solutions",
      summary:
        "One contract, one schedule, one point of contact — from the first survey to key handover.",
      detail:
        "For clients who would rather not coordinate multiple agencies, we take the whole scope: design, approvals, construction, interiors and handover documentation.",
      deliverables: ["Single scope and contract", "Consolidated programme", "Fixed stage-wise reporting", "Handover documentation"],
      image: "serviceTurnkey",
    },
    {
      number: "06",
      title: "Structural and Technical Planning",
      summary:
        "Structural systems, service coordination and buildable detailing for the conditions on site.",
      detail:
        "Column grids, spans, waterproofing and service routes are resolved early, because the decisions that are hardest to change later are the ones made first.",
      deliverables: ["Structural design coordination", "Services and drainage routing", "Waterproofing strategy", "Construction detailing"],
      image: "serviceStructural",
    },
  ];
  
  export const buildStages = [
    {
      index: "01",
      title: "Blueprint",
      caption: "The plan is drawn, dimensioned and tested before site work begins.",
      image: "stageBlueprint",
    },
    {
      index: "02",
      title: "Structure",
      caption: "Frame, slabs and columns rise to a fixed, inspected sequence.",
      image: "stageStructure",
    },
    {
      index: "03",
      title: "Facade",
      caption: "Stone, concrete and timber wrap the frame as one considered skin.",
      image: "stageFacade",
    },
    {
      index: "04",
      title: "Glazing & Landscape",
      caption: "Openings, light and planting are set to the site's orientation.",
      image: "stageGlazing",
    },
    {
      index: "05",
      title: "Interiors",
      caption: "Joinery, lighting and furniture arrive as drawn, to the millimetre.",
      image: "stageInterior",
    },
    {
      index: "06",
      title: "Completion",
      caption: "Inspected, snag-listed and handed over ready to live in.",
      image: "stageComplete",
    },
  ];
  
  export const process = [
    {
      number: "01",
      title: "Discover",
      body: "We meet on site or online, understand how you want to live, and review the plot, budget band and timeline honestly.",
    },
    {
      number: "02",
      title: "Plan",
      body: "A feasibility study and site analysis set the constraints — setbacks, orientation, access, services — before design begins.",
    },
    {
      number: "03",
      title: "Design",
      body: "Concept options are developed in plan and model, then detailed into the drawing set and material palette you approve.",
    },
    {
      number: "04",
      title: "Prepare",
      body: "Approvals, structural drawings, specifications, quantities and the construction programme are finalised and signed off.",
    },
    {
      number: "05",
      title: "Build",
      body: "A single supervised programme runs on site, with stage-wise reporting so you always know where your home stands.",
    },
    {
      number: "06",
      title: "Handover",
      body: "Finishing, snag-listing and inspection happen before handover, together with the drawings and documents for your home.",
    },
  ];
  
  export const materials = [
    {
      name: "Stone",
      line: "Selected for grain, density and how it wears underfoot over decades.",
      image: "materialStone",
    },
    {
      name: "Timber",
      line: "Seasoned, re-claimed where possible, and finished to read as timber — not as a print of it.",
      image: "materialTimber",
    },
    {
      name: "Glass",
      line: "Sized to the light a room actually receives, and shaded where it would glare.",
      image: "materialGlass",
    },
    {
      name: "Concrete",
      line: "Board-formed by hand, so every surface carries the record of its making.",
      image: "materialConcrete",
    },
    {
      name: "Light",
      line: "Daylight is planned first; a lighting layer follows the way rooms are used after dark.",
      image: "materialLight",
    },
    {
      name: "Detail",
      line: "Reveals, junctions and edges resolved on paper, where they cost nothing to get right.",
      image: "materialDetail",
    },
  ];
  
  export const principles = [
    {
      number: "01",
      title: "Design-led thinking",
      body: "Every technical decision is measured against the design intent, so the finished home still looks like the one you approved.",
    },
    {
      number: "02",
      title: "Transparent communication",
      body: "Scope, specification and cost are written down before work starts. Changes are discussed, priced and approved in writing.",
    },
    {
      number: "03",
      title: "Practical planning",
      body: "Programmes are built around real material lead times and site conditions — not optimistic dates that quietly slip.",
    },
    {
      number: "04",
      title: "Quality workmanship",
      body: "Specification-led materials and supervised trades, checked at each stage rather than only at the end.",
    },
    {
      number: "05",
      title: "Attention to detail",
      body: "The last five per cent — reveals, junctions, edges, alignment — is the part you notice every single day.",
    },
  ];
  export const journalPosts = [
    {
      id: "post-01",
      title: "Designing for Bengaluru's Climate: Passive Cooling & Courtyards",
      slug: "designing-for-bengalurus-climate-passive-cooling",
      category: "Architecture",
      published_date: "2024-03-15",
      read_time: "5 min read",
      excerpt:
        "How traditional vernacular architecture principles are being reimagined for modern tropical residences in Karnataka.",
      body:
        "Bengaluru has long enjoyed a temperate climate, but rapid urban densification and shifting weather patterns demand a more resilient approach to modern residential design.\n\nAt our studio, we are increasingly looking back at traditional courtyard planning. By introducing a central double-height void, warm air naturally rises and exhausts through clerestory windows, drawing refreshing cross-breezes across the living spaces. This passive stack effect significantly reduces the need for mechanical air conditioning.\n\nFurthermore, pairing open internal courtyards with high-thermal-mass materials like stabilized mud blocks and locally sourced Sadarahalli granite helps absorb ambient heat during peak afternoon hours and release it slowly as temperatures drop at night.",
      cover_image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      is_sample: false,
    },
    {
      id: "post-02",
      title: "The Rise of Biophilic Concrete: Merging Brutalism with Nature",
      slug: "rise-of-biophilic-concrete-brutalism-nature",
      category: "Materials & Craft",
      published_date: "2024-02-10",
      read_time: "4 min read",
      excerpt:
        "Exploring the delicate contrast between raw architectural concrete and lush indigenous tropical greenery.",
      body:
        "Brutalist architecture often carries a connotation of sterile gray austerity. However, when juxtaposed with living plant ecosystems, raw concrete reveals a surprisingly organic warmth.\n\nIn our recent urban projects across Indiranagar and Sadashivnagar, we have experimented with board-formed concrete walls left exposed and untreated. Over time, these textured surfaces weather gracefully, capturing moisture and encouraging natural moss and trailing flora adhesion.\n\nThe secret lies in restraint. By allowing structural elements to act as quiet backdrops for cascading creepers and canopy trees, the building feels less like an imposition on the land and more like an extension of it.",
      cover_image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      is_sample: false,
    },
    {
      id: "post-03",
      title: "Navigating BBMP Regulations and Urban Zoning in Bengaluru",
      slug: "navigating-bbmp-regulations-urban-zoning-bengaluru",
      category: "Practice",
      published_date: "2024-01-18",
      read_time: "6 min read",
      excerpt:
        "A pragmatic guide for homeowners and developers looking to build legally compliant, future-proof structures in the city.",
      body:
        "Embarking on a custom home build or commercial construction project in Bengaluru requires navigating a complex labyrinth of municipal bylaws, setbacks, and floor area ratio (FAR) guidelines governed by the BBMP and BDA.\n\nUnderstanding these parameters early in the schematic design phase saves months of project delays. Setbacks are not merely arbitrary legal restrictions; when thoughtfully integrated, they create valuable perimeter pocket gardens and ensure adequate light and ventilation between adjacent urban properties.\n\nAdditionally, mandated rainwater harvesting systems and organic waste converter provisions should be treated as core architectural features rather than afterthought add-ons.",
      cover_image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
      is_sample: true,
    },
    {
      id: "post-04",
      title: "Sourcing Local: Why Regional Materials Define Timeless Interiors",
      slug: "sourcing-local-regional-materials-timeless-interiors",
      category: "Interior Design",
      published_date: "2023-12-05",
      read_time: "4 min read",
      excerpt:
        "From Karnataka granite to seasoned Burma teak, why the best building elements are often found right in your backyard.",
      body:
        "In an era of globalized supply chains and standardized imported finishes, true luxury in architecture increasingly points toward local authenticity.\n\nKarnataka is blessed with an extraordinary geological and craft palette. Sadarahalli granite offers a subdued, chalky gray aesthetic that ages magnificently underfoot, while seasoned teak and rosewood sourced from sustainable regional plantations bring incomparable tactile richness to custom joinery.\n\nBy prioritizing local artisans and materials, not only do we drastically reduce the carbon footprint associated with long-distance freight, but we also weave a distinct regional narrative into every physical corner of the home.",
      cover_image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
      is_sample: false,
    },
  ];
  
  
  export const testimonials = [
    {
      quote:
        "Sample feedback placeholder — the team walked us through every drawing before work started, and we always knew what was happening on site.",
      attribution: "Sample client feedback",
      meta: "Residence, Bangalore",
    },
    {
      quote:
        "Sample feedback placeholder — the cost was explained stage by stage, and there were no surprises at handover.",
      attribution: "Sample client feedback",
      meta: "Renovation, Bangalore",
    },
    {
      quote:
        "Sample feedback placeholder — the detail in the joinery is what visitors notice first.",
      attribution: "Sample client feedback",
      meta: "Interiors, Bangalore",
    },
  ];
  
  export const projectTypes = [
    "New home construction",
    "Architecture and planning",
    "Interior design",
    "Renovation or remodeling",
    "Turnkey home",
    "Structural / technical planning",
    "Other",
  ];
  
  export const budgetBands = [
    "Prefer not to say",
    "Under ₹30 lakh",
    "₹30–60 lakh",
    "₹60 lakh – ₹1 crore",
    "Above ₹1 crore",
  ];
  
  export const footerLinks = {
    explore: [
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/#services" },
      { label: "Our Approach", href: "/#approach" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/#contact" },
    ],
    services: [
      { label: "Architecture and Planning", href: "/#services" },
      { label: "Home Construction", href: "/#services" },
      { label: "Interior Design", href: "/#services" },
      { label: "Renovation and Remodeling", href: "/#services" },
      { label: "Turnkey Home Solutions", href: "/#services" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  };
  
  export const social = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "WhatsApp", href: "https://wa.me/919988660545" },
  ];