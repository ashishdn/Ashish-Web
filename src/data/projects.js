/**
 * Real & production-grade demo project showcase data for Ashish Kumar Debnath
 * Extracted from ashishweb.com/project-showcase/ and production case studies.
 * Formatted cleanly with MongoDB Atlas / REST API compliant JSON schema.
 */

export const projects = [
  {
    id: "dragon-sourcing",
    title: "Dragon Sourcing",
    subtitle: "Global Procurement & Emerging Markets Intelligence Platform",
    client: "Dragon Sourcing International",
    category: "WordPress & Enterprise Architecture",
    tags: ["WordPress", "Elementor Pro", "Custom Post Types", "Multi-Region", "Speed Optimization"],
    year: "2024",
    link: "https://www.dragonsourcing.com/",
    liveUrl: "https://www.dragonsourcing.com/",
    featured: true,
    accentColor: "#ccff00",
    overview: "Comprehensive digital transformation for Dragon Sourcing, a leading provider of procurement outsourcing recognized by Everest Group and Avasant. Engineered an enterprise corporate platform serving international procurement offices across global emerging markets with instant multi-language search and dynamic intelligence filtering.",
    challenge: "The legacy website struggled with slow page rendering, cluttered navigation across 20+ service verticals, and inconsistent mobile presentation across worldwide corporate networks.",
    solution: "Designed a clean, authoritative architecture using WordPress with custom-tailored Elementor Pro modules, modular dynamic CPTs for procurement case studies, and advanced asset minimization delivering sub-second load times.",
    metrics: [
      { label: "PageSpeed Index", value: "96/100" },
      { label: "Global Reach", value: "Emerging Markets" },
      { label: "Bounce Rate Reduction", value: "-34%" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "retoucho",
    title: "Retoucho Studio",
    subtitle: "High-End Commercial Image Retouching & Post-Production Platform",
    client: "Retoucho Creative Agency",
    category: "Creative Agency & Dynamic WordPress",
    tags: ["WordPress", "Elementor Pro", "JetEngine", "Interactive Portfolio", "Before/After Sliders"],
    year: "2024",
    link: "https://retoucho.com/",
    liveUrl: "https://retoucho.com/",
    featured: true,
    accentColor: "#38bdf8",
    overview: "A sleek, dark-mode portfolio and client acquisition platform for Retoucho, a studio specializing in commercial e-commerce, high-fashion, and luxury product retouching. Features custom interactive before-and-after comparison viewports and streamlined quote inquiry workflows.",
    challenge: "Showcasing high-resolution 4K imagery without causing sluggish scroll stutter or compromising mobile data efficiency.",
    solution: "Developed an asynchronous asset pipeline with progressive image hydration, custom JetEngine taxonomies for photographic categories, and fluid interactive comparisons that load instantly.",
    metrics: [
      { label: "Client Inquiries", value: "+58%" },
      { label: "Mobile Performance", value: "98/100" },
      { label: "Fidelity", value: "Lossless 4K" }
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "doctor-digitals",
    title: "Doctor Digitals",
    subtitle: "Healthcare Marketing & Medical Practice Growth Ecosystem",
    client: "Doctor Digitals",
    category: "WordPress & Healthcare Conversion",
    tags: ["WordPress", "Elementor Pro", "HIPAA-Friendly Forms", "Custom Landing Pages", "SEO Tuning"],
    year: "2023",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: true,
    accentColor: "#a855f7",
    overview: "High-converting healthcare marketing agency website providing automated consultation booking, interactive service tier calculators, and patient trust signaling for clinics and physicians across the US.",
    challenge: "Medical clients required strict credibility indicators, rapid mobile intake, and effortless content updates for non-technical clinic staff.",
    solution: "Built a customized Elementor Pro design system with reusable block presets, integrated compliant booking funnels, and optimized Core Web Vitals to maximize organic local search ranking.",
    metrics: [
      { label: "Conversion Lift", value: "+42%" },
      { label: "Core Web Vitals", value: "All Green" },
      { label: "Client Onboarding", value: "Self-Serve" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "nova-luxe-commerce",
    title: "Nova Luxe Living",
    subtitle: "Custom WooCommerce Architecture for Curated Scandinavian Interior Design",
    client: "Nova Luxe Living",
    category: "WooCommerce & Custom UX",
    tags: ["WooCommerce", "JetEngine", "Custom Checkout", "Elementor Pro", "AJAX Filtering"],
    year: "2024",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#f59e0b",
    overview: "High-end Scandinavian furniture store featuring a bespoke 2-step checkout flow, dynamic JetEngine product matrix with custom swatch selectors, and synchronized inventory across brick-and-mortar showrooms.",
    challenge: "Stock WooCommerce layouts were too clunky and caused cart abandonment among luxury buyers expecting an Apple-like buying journey.",
    solution: "Constructed a custom AJAX mini-cart drawer, custom JetEngine listing grids with instant faceted attribute filtering, and frictionless 1-click checkout.",
    metrics: [
      { label: "Checkout Dropoff", value: "-27%" },
      { label: "Average Order Value", value: "+19%" },
      { label: "Inventory Sync", value: "Real-time" }
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "nexus-headless-cms",
    title: "Nexus Kinetic Brand",
    subtitle: "Headless WordPress & Next.js Creative Portfolio",
    client: "Nexus Creative Lab",
    category: "Headless & React/Next.js",
    tags: ["Next.js", "WordPress REST API", "Tailwind CSS", "GSAP ScrollTrigger", "GraphQL"],
    year: "2024",
    link: "https://ashishweb.com/",
    liveUrl: "https://ashishweb.com/",
    featured: true,
    accentColor: "#10b981",
    overview: "Decoupled web architecture pairing WordPress as a secure, familiar headless backend for editorial writers with a lightning-fast Next.js frontend driven by GSAP animations and smooth inertial scrolling.",
    challenge: "Bridging the comfort of WordPress WYSIWYG editing with modern JavaScript headless performance without breaking editorial previews.",
    solution: "Built a custom REST & GraphQL bridge with on-demand incremental static regeneration (ISR) and smooth page transitions.",
    metrics: [
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Editorial Workflow", value: "Native WP" },
      { label: "Security Profile", value: "Headless Isolation" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "velocity-saas",
    title: "Velocity Cloud Systems",
    subtitle: "B2B SaaS Growth Engine & Custom Elementor Design System",
    client: "Velocity Cloud Inc.",
    category: "WordPress & Elementor Pro",
    tags: ["Elementor Pro", "Custom CSS/JS", "HubSpot CRM Sync", "Interactive Pricing", "A/B Testing"],
    year: "2023",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#ec4899",
    overview: "Marketing website overhaul for an enterprise cloud monitoring SaaS. Implemented modular design components, interactive tiered pricing calculators, and direct CRM lead routing.",
    challenge: "Marketing team needed the ability to publish landing pages within 2 hours without breaking design system tokens.",
    solution: "Engineered a strict Elementor Pro Global Design System with tokenized typography, preset container structures, and form tracking scripts.",
    metrics: [
      { label: "Demo Bookings", value: "+63%" },
      { label: "Publish Time", value: "1.5 hrs" },
      { label: "Lighthouse Performance", value: "97/100" }
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
  },
  // Projects 7 to 12: Load More Items
  {
    id: "apex-performance-fitness",
    title: "Apex Athletics Club",
    subtitle: "Dynamic Gym Membership Booking & JetEngine Schedule Engine",
    client: "Apex Athletics UK",
    category: "JetEngine & Dynamic CPTs",
    tags: ["WordPress", "JetEngine", "Elementor Pro", "Dynamic Taxonomies", "Stripe Gateway"],
    year: "2024",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#ccff00",
    overview: "Full booking and trainer reservation ecosystem for a high-performance training facility in London. Includes automated trainer rosters, real-time class slot reservations, and recurring Stripe subscriptions.",
    challenge: "Managing 30+ trainers with overlapping weekly class schedules without double bookings.",
    solution: "Engineered custom JetEngine custom query builders and dynamic calendar listings integrated with WooCommerce Subscriptions.",
    metrics: [
      { label: "Bookings Handled", value: "1,200+/mo" },
      { label: "Sync Latency", value: "Real-Time" },
      { label: "Mobile Conversions", value: "+38%" }
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "luminar-creative-lab",
    title: "Luminar Architecture & Design",
    subtitle: "Minimalist Architectural Portfolio with Smooth Page Transitions",
    client: "Luminar Studio Melbourne",
    category: "WordPress & Elementor Pro",
    tags: ["Elementor Pro", "Custom CSS", "GSAP Motion", "Lazy Hydration", "Figma Design"],
    year: "2023",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#f59e0b",
    overview: "Award-nominated architecture portfolio highlighting residential skyscrapers and luxury interiors across Australia. Clean monochrome palette with smooth image hover reveal interactions.",
    challenge: "Preserving raw architectural photography detail while ensuring swift first load times on mobile 4G networks.",
    solution: "Implemented NextGen WebP image conversion, fine border grid architecture, and smooth GSAP entrance sequences.",
    metrics: [
      { label: "Award Honors", value: "CSSDA Feature" },
      { label: "Load Time", value: "0.85s" },
      { label: "Design Fidelity", value: "100%" }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "horizon-realty-directory",
    title: "Horizon Prime Properties",
    subtitle: "Advanced Multi-City Real Estate Directory with Faceted JetEngine Filters",
    client: "Horizon Realty Group",
    category: "JetEngine & Dynamic CPTs",
    tags: ["WordPress", "JetEngine", "JetSmartFilters", "Map Markers", "Custom Taxonomies"],
    year: "2024",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#38bdf8",
    overview: "Enterprise property directory showcasing luxury residential and commercial developments with instant AJAX radius filtering, floor plan modals, and automated lead capture.",
    challenge: "Slow search response on traditional directory plugins when filtering across price ranges, bedrooms, and amenities.",
    solution: "Leveraged JetSmartFilters with indexer caching to deliver instant, zero-reload search results across 400+ active listings.",
    metrics: [
      { label: "Search Speed", value: "0.12s AJAX" },
      { label: "Lead Inquiries", value: "+53%" },
      { label: "SEO Indexing", value: "100% CPTs" }
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "aurora-biotech-corp",
    title: "Aurora Therapeutics",
    subtitle: "Biopharmaceutical Research Platform & Clinical Trial Portal",
    client: "Aurora BioSystems",
    category: "WordPress & Enterprise Architecture",
    tags: ["WordPress", "Elementor Pro", "Clinical CPTs", "Accessibility WCAG 2.1", "Speed Optimization"],
    year: "2023",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#10b981",
    overview: "Corporate biotechnology site communicating groundbreaking oncology research, investor relations documentation, and pipeline milestone tracking.",
    challenge: "Complex regulatory compliance and strict accessibility requirements (WCAG 2.1 AA) for medical institutional audiences.",
    solution: "Designed high-contrast, fully keyboard-navigable templates with automated PDF whitepaper download gating.",
    metrics: [
      { label: "Accessibility Score", value: "100/100" },
      { label: "Investor Downloads", value: "4,500+" },
      { label: "Security Audit", value: "Passed Zero-Vuln" }
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "kensho-sustainable-apparel",
    title: "Kensho Organic Goods",
    subtitle: "Direct-to-Consumer Sustainable Fashion Store on Custom WooCommerce",
    client: "Kensho Studio Tokyo",
    category: "WooCommerce & Custom UX",
    tags: ["WooCommerce", "Elementor Pro", "Custom Swatches", "AJAX Cart", "Shopify Migration"],
    year: "2024",
    link: "https://ashishweb.com/project-showcase/",
    liveUrl: "https://ashishweb.com/project-showcase/",
    featured: false,
    accentColor: "#a855f7",
    overview: "Direct-to-consumer sustainable apparel brand featuring custom organic fabric swatches, smart bundle upsells, and lightning-fast checkout.",
    challenge: "Migrating from expensive Shopify app subscriptions to a self-hosted, scalable WooCommerce stack without losing cart conversion.",
    solution: "Developed custom swatch logic, sticky mobile purchase bars, and optimized Stripe Apple Pay/Google Pay flows.",
    metrics: [
      { label: "Monthly App Savings", value: "$320/mo" },
      { label: "Mobile Checkout", value: "+29%" },
      { label: "Order Value", value: "+18%" }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "zenith-fintech-hub",
    title: "Zenith Global Capital",
    subtitle: "Headless Next.js & REST API Cross-Border Investment Portal",
    client: "Zenith Capital Singapore",
    category: "Headless & React/Next.js",
    tags: ["Next.js", "React", "WordPress Headless", "Tailwind CSS", "TypeScript API"],
    year: "2024",
    link: "https://ashishweb.com/",
    liveUrl: "https://ashishweb.com/",
    featured: false,
    accentColor: "#38bdf8",
    overview: "High-security cross-border investment portal utilizing WordPress as a headless content management layer and Next.js for sub-second page delivery across Asian financial hubs.",
    challenge: "Handling volatile financial market commentary updates with instantaneous CDN cache purging.",
    solution: "Wired WordPress webhook triggers with Next.js On-Demand Revalidation for instant global updates.",
    metrics: [
      { label: "Page Hydration", value: "0.28s" },
      { label: "Cache Hit Rate", value: "99.4%" },
      { label: "Uptime Standard", value: "99.99%" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
  }
];

export const projectCategories = [
  "All Projects",
  "WordPress & Elementor",
  "JetEngine & Dynamic CPTs",
  "Headless & React",
  "WooCommerce"
];
