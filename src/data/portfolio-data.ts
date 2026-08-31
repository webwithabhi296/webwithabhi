import {
  SkillItem,
  ProjectItem,
  ExperienceItem,
  ServiceItem,
  TestimonialItem,
  FAQItem,
  StatItem,
  PerformanceMetric,
  CertificationItem,
} from "@/types";

export const STATS: StatItem[] = [
  {
    value: "3+ Years",
    label: "Professional Experience",
    description: "Hands-on WordPress development, Next.js engineering & performance tuning.",
  },
  {
    value: "25+",
    label: "Production Websites",
    description: "Custom themes, Next.js web applications, education portals & lead funnels.",
  },
  {
    value: "98+",
    label: "PageSpeed Score",
    description: "Consistent Core Web Vitals optimization on live client websites.",
  },
  {
    value: "100%",
    label: "Delivery Reliability",
    description: "Clean maintainable code, proactive AMC maintenance, and zero downtime.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "claude-101-anthropic",
    title: "Claude 101",
    provider: "Anthropic",
    date: "21 July 2026 – 25 July 2026",
    mode: "Virtual",
    technologyArea: "AI-Assisted Software Development & Prompt Engineering",
    description:
      "Successfully completed Claude 101 training focused on practical usage of Claude for software development, prompt engineering, workflow automation, code generation, debugging, documentation, and AI-assisted productivity.",
    skillsCovered: [
      "Claude Fundamentals",
      "AI-Assisted Software Development",
      "Prompt Engineering",
      "Context Management",
      "Code Generation",
      "Debugging Workflows",
      "Documentation Assistance",
      "Productivity Optimization",
      "Developer-Focused AI Workflows",
    ],
    credentialBadge: "Anthropic Certified",
    isFeatured: true,
  },
  {
    id: "advanced-prompt-engineering-upgrad",
    title: "Advanced Prompt Engineering with ChatGPT",
    provider: "upGrad",
    date: "February 2026",
    mode: "Virtual",
    technologyArea: "Structured Prompt Design & Automation Strategies",
    description:
      "Completed an Advanced ChatGPT Prompt Engineering program focused on structured prompt design, AI-assisted workflows, automation, content generation, productivity optimization, and problem-solving.",
    skillsCovered: [
      "Prompt Design",
      "AI Workflow Optimization",
      "AI-Assisted Development",
      "Content Generation",
      "Automation Strategies",
      "Coding Assistance",
    ],
    credentialBadge: "upGrad Verified",
    isFeatured: false,
  },
  {
    id: "project-management-basics-coursera",
    title: "Project Management Basics",
    provider: "Coursera",
    date: "December 2025",
    mode: "Virtual",
    technologyArea: "Project Planning, Risk Management & Coordination",
    description:
      "Completed the Project Management Basics course covering project lifecycle management, stakeholder communication, resource allocation, and effective cross-functional team collaboration.",
    skillsCovered: [
      "Project Planning",
      "Execution",
      "Risk Management",
      "Stakeholder Communication",
      "Team Coordination",
      "Resource Allocation",
      "Time Management",
    ],
    credentialBadge: "Coursera Certified",
    isFeatured: false,
  },
  {
    id: "communicating-with-confidence-linkedin",
    title: "Communicating with Confidence",
    provider: "LinkedIn Learning",
    date: "February 2025 – January 2026",
    mode: "Virtual",
    technologyArea: "Workplace Communication & Professional Presentation",
    description:
      "Completed professional communication training focused on workplace communication, public speaking, active listening, presentation skills, and interpersonal dynamics for professional environments.",
    skillsCovered: [
      "Workplace Communication",
      "Public Speaking",
      "Professional Confidence",
      "Active Listening",
      "Interpersonal Skills",
      "Presentation Skills",
    ],
    credentialBadge: "LinkedIn Learning",
    isFeatured: false,
  },
  {
    id: "wordpress-web-development-udemy",
    title: "WordPress Web Development",
    provider: "Udemy",
    date: "September 2022 – December 2022",
    mode: "Virtual",
    technologyArea: "Custom Theme Development, Plugin Architecture & PHP",
    description:
      "Completed a comprehensive WordPress Web Development program covering both frontend and backend development, building practical experience in developing and maintaining dynamic WordPress websites.",
    skillsCovered: [
      "WordPress Architecture",
      "Theme Development",
      "Theme Customization",
      "Plugin Integration",
      "PHP Fundamentals",
      "HTML & CSS",
      "JavaScript & jQuery",
      "Responsive Design",
      "Website Optimization",
    ],
    credentialBadge: "Udemy Certified",
    isFeatured: false,
  },
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  {
    metric: "LCP",
    fullName: "Largest Contentful Paint",
    target: "< 2.5s (Good)",
    achieved: "0.8s - 1.2s",
    description: "Measures loading performance and when the main content is rendered.",
    optimizationTechnique:
      "Critical CSS inlining, responsive image preloading (WebP/AVIF), server-side rendering, and CDN edge asset delivery.",
  },
  {
    metric: "FCP",
    fullName: "First Contentful Paint",
    target: "< 1.8s (Good)",
    achieved: "0.4s - 0.7s",
    description: "Marks the time at which the first text or image is rendered on the screen.",
    optimizationTechnique:
      "Minification of CSS/JS bundles, render-blocking script elimination, and HTTP/2 stream multiplexing.",
  },
  {
    metric: "CLS",
    fullName: "Cumulative Layout Shift",
    target: "< 0.1 (Good)",
    achieved: "0.00 - 0.02",
    description: "Measures visual stability and unexpected layout shifts during load.",
    optimizationTechnique:
      "Explicit width and height aspect ratios on all media/banners, font display swap preloading, and reserved ad containers.",
  },
  {
    metric: "TTFB",
    fullName: "Time to First Byte",
    target: "< 800ms (Good)",
    achieved: "120ms - 220ms",
    description: "Measures server responsiveness and initial payload delivery speed.",
    optimizationTechnique:
      "Redis/Varnish object caching, PHP opcode optimization, database query indexing, and aggressive server-level caching.",
  },
];

export const SKILLS: SkillItem[] = [
  // CMS & eCommerce
  {
    name: "WordPress",
    category: "cms",
    level: 98,
    experience: "3+ Years",
    description:
      "Zero-bloat bespoke themes built from scratch with PHP, template hierarchy, custom post types, WooCommerce, and ACF Pro.",
    iconName: "Globe",
    featured: true,
  },
  {
    name: "Elementor & WPBakery",
    category: "cms",
    level: 94,
    experience: "3+ Years",
    description:
      "Visual page builder customization, dynamic tag modeling, custom addons, and debloated clean code output.",
    iconName: "Puzzle",
    featured: true,
  },
  {
    name: "Shopify",
    category: "cms",
    level: 88,
    experience: "2+ Years",
    description:
      "Store setup, Liquid template architecture, product collections, app configurations, and conversion checkout flow.",
    iconName: "ShoppingBag",
    featured: true,
  },
  {
    name: "Sanity CMS",
    category: "cms",
    level: 92,
    experience: "2+ Years",
    description:
      "Headless content schemas, Sanity Studio setup, GROQ querying, and edge-cached integration with Next.js.",
    iconName: "Layers",
    featured: true,
  },

  // Frontend Stack
  {
    name: "Next.js",
    category: "frontend",
    level: 95,
    experience: "2+ Years",
    description:
      "Next.js 15/16 App Router, React Server Components, Server Actions, dynamic ISR/SSG, middleware, and Vercel edge runtime.",
    iconName: "Zap",
    featured: true,
  },
  {
    name: "React",
    category: "frontend",
    level: 94,
    experience: "2+ Years",
    description:
      "React 19, custom hook architectures, modular UI states, concurrent rendering, and clean functional component patterns.",
    iconName: "Code2",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 92,
    experience: "2+ Years",
    description:
      "Strict typing, generic interfaces, union types, compile-time contract safety, and end-to-end API type inference.",
    iconName: "FileCode",
    featured: true,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 96,
    experience: "3+ Years",
    description:
      "Modern mobile-first design systems, Tailwind v4 theme variables, utility tokens, and Shadcn UI accessible patterns.",
    iconName: "Palette",
    featured: true,
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    level: 98,
    experience: "3+ Years",
    description:
      "Semantic HTML5 hierarchy, modern CSS flexbox/grid layouts, responsive typography, and WCAG accessibility standards.",
    iconName: "FileCode",
    featured: true,
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: 96,
    experience: "3+ Years",
    description:
      "Modern ES6+ syntax, asynchronous programming, event-driven DOM scripting, and lightweight interactive components.",
    iconName: "Code2",
    featured: true,
  },

  // Backend & Services
  {
    name: "Node.js & REST APIs",
    category: "backend",
    level: 89,
    experience: "2+ Years",
    description:
      "Next.js route handlers, JSON endpoints, serverless execution, and external API webhook integrations.",
    iconName: "Cpu",
    featured: true,
  },
  {
    name: "PHP & MySQL",
    category: "backend",
    level: 95,
    experience: "3+ Years",
    description:
      "Custom WordPress PHP functions, database query optimization, custom MySQL schemas, and secure data sanitization.",
    iconName: "Server",
    featured: true,
  },
  {
    name: "Resend",
    category: "backend",
    level: 92,
    experience: "1+ Year",
    description:
      "Transactional email integration, authenticated SMTP/REST API, DNS verification, and formatted HTML notification routing.",
    iconName: "Zap",
    featured: true,
  },
  {
    name: "Supabase",
    category: "backend",
    level: 86,
    experience: "1+ Year",
    description:
      "PostgreSQL tables, row-level security (RLS), auth integrations, and realtime database subscriptions.",
    iconName: "Database",
    featured: false,
  },

  // Performance & SEO
  {
    name: "Core Web Vitals",
    category: "performance",
    level: 98,
    experience: "3+ Years",
    description:
      "Precision engineering for LCP, FCP, CLS, and TTFB to achieve green Core Web Vitals on both mobile and desktop.",
    iconName: "Gauge",
    featured: true,
  },
  {
    name: "Google PageSpeed",
    category: "performance",
    level: 97,
    experience: "3+ Years",
    description:
      "Eliminating render-blocking CSS/JS, converting images to WebP/AVIF, asset minification, and caching for 95+ scores.",
    iconName: "Gauge",
    featured: true,
  },
  {
    name: "Technical SEO",
    category: "performance",
    level: 95,
    experience: "3+ Years",
    description:
      "JSON-LD structured data, Schema.org entities, OpenGraph cards, XML sitemaps, robots.txt, and search engine crawlability.",
    iconName: "Search",
    featured: true,
  },
  {
    name: "Performance Optimization",
    category: "performance",
    level: 98,
    experience: "3+ Years",
    description:
      "Server-side Redis object caching, database index debloating, CDN edge asset delivery, and critical CSS inlining.",
    iconName: "Gauge",
    featured: true,
  },

  // Dev & AI Tools
  {
    name: "Git & GitHub",
    category: "tools",
    level: 95,
    experience: "3+ Years",
    description:
      "Version control, branch management, pull requests, semantic commit conventions, and repository coordination.",
    iconName: "GitBranch",
    featured: true,
  },
  {
    name: "Vercel",
    category: "tools",
    level: 95,
    experience: "2+ Years",
    description:
      "Automated CI/CD deployments, edge network caching, custom domain management, and production environment secrets.",
    iconName: "Zap",
    featured: true,
  },
  {
    name: "Claude Code & Cursor",
    category: "ai",
    level: 97,
    experience: "2+ Years",
    description:
      "AI-native engineering workflows with Claude 3.7 Sonnet, Cursor IDE, and prompt architectures accelerating velocity by 3x.",
    iconName: "Bot",
    featured: true,
  },
  {
    name: "VS Code",
    category: "tools",
    level: 98,
    experience: "3+ Years",
    description:
      "Advanced workspace configuration, ESLint/Prettier automation, TypeScript language server, and debugging pipelines.",
    iconName: "Code2",
    featured: false,
  },
];

export const PROJECTS: ProjectItem[] = [
  // ----------------------------------------------------
  // A. FEATURED NEXT.JS PROJECTS (PRIMARY AT TOP)
  // ----------------------------------------------------
  {
    id: "omc-2-0",
    title: "OMC 2.0 — Modern Education Platform",
    category: "nextjs",
    categoryLabel: "Featured Next.js & Sanity CMS",
    description:
      "High-performance modern education platform engineered with Next.js App Router, TypeScript, and Sanity CMS for dynamic structured course management.",
    longDescription:
      "Architected and developed OMC 2.0 as an enterprise-grade education platform. Built with a decoupled headless architecture utilizing Next.js App Router, Sanity CMS real-time visual editing studio, reusable component systems with Tailwind CSS, and strict SEO-focused metadata.",
    impactMetric: "Sub-0.4s LCP & 100% Mobile Usability Score",
    architectureHighlight:
      "Next.js App Router, Sanity CMS headless studio, on-demand ISR revalidation, and Vercel edge deployment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Sanity CMS", "Vercel"],
    liveUrl: "https://omc-2-0.vercel.app/",
    featured: true,
    challengesSolved:
      "Eliminated course catalog lag and static rebuild bottlenecks by implementing Incremental Static Regeneration (ISR) and Sanity GROQ query optimization.",
    keyFeatures: [
      "CMS-driven modular course curriculum pages",
      "Real-time Sanity visual content editing",
      "SEO-optimized structured metadata & OpenGraph cards",
      "Fluid responsive UI tested on all mobile breakpoints",
    ],
  },
  {
    id: "mw-host-ai",
    title: "MW Host AI — AI-Powered Hosting Platform",
    category: "nextjs",
    categoryLabel: "Featured Next.js & AI SaaS",
    description:
      "Modern AI-powered cloud hosting SaaS platform featuring intelligent server provisioning workflows and automated infrastructure configuration.",
    longDescription:
      "Engineered MW Host AI, a high-performance web platform featuring modern SaaS architecture, responsive user interface, scalable codebase, and AI integration for streamlined hosting operations and instant server deployment.",
    impactMetric: "99+ PageSpeed Score & Sub-Second Page Transitions",
    architectureHighlight:
      "Next.js App Router, AI pipeline integration, scalable modular component system, and automated Vercel CI/CD.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Vercel"],
    liveUrl: "https://mw-host-ai.vercel.app/",
    featured: true,
    challengesSolved:
      "Designed a frictionless UI for complex cloud server configuration, converting multi-step infrastructure setup into a guided AI-assisted flow.",
    keyFeatures: [
      "AI-driven server configuration wizard",
      "Ultra-fast client-side route transitions",
      "Modern dark-mode SaaS design system",
      "Automated edge deployment via Vercel",
    ],
  },

  // ----------------------------------------------------
  // B. WORDPRESS & CMS PROJECTS
  // ----------------------------------------------------
  {
    id: "trexova-wellness",
    title: "Trexova Healthcare & Wellness Portal",
    category: "wordpress",
    categoryLabel: "WordPress & CMS Development",
    description:
      "Comprehensive healthcare and retreat portal with custom wellness retreat listings, booking funnels, and mobile-optimized user experience.",
    longDescription:
      "Architected custom WordPress theme layouts, custom post types for retreat packages, and responsive booking interfaces. Optimized image delivery pipelines and caching for lightning-fast mobile booking performance.",
    impactMetric: "96+ Mobile Performance & 50% Lower Bounce Rate",
    architectureHighlight:
      "Custom post type hierarchy, dynamic search filters, streamlined booking form routing, and Redis caching.",
    tags: ["WordPress", "Custom Theme", "PHP", "MySQL", "Speed Optimization", "Technical SEO"],
    liveUrl: "https://www.trexova.com/2/",
    featured: true,
    challengesSolved:
      "Replaced sluggish visual builder bloat with lightweight custom PHP templates, slashing page weight by 65%.",
    keyFeatures: [
      "Bespoke WordPress theme development from scratch",
      "ACF Pro custom retreat packages & booking fields",
      "Plugin integration & WhatsApp instant booking funnel",
      "Proactive Annual Maintenance Contract (AMC) & security scans",
    ],
  },
  {
    id: "dnadcode-platform",
    title: "DNA DCode — Genetic Health & Diagnostic Platform",
    category: "wordpress",
    categoryLabel: "WordPress & CMS Development",
    description:
      "Enterprise healthcare and DNA genetic wellness platform offering personalized health programs, clinical diagnostics, and secure inquiry routing.",
    longDescription:
      "Delivered custom WordPress theme engineering for DNA DCode. Built high-trust clinical service directories, patient inquiry funnels, and responsive landing interfaces with rigorous SEO and mobile performance.",
    impactMetric: "95+ PageSpeed Score & 40% Increase in Consultation Leads",
    architectureHighlight:
      "Custom PHP components, medical schema markup, optimized asset pipelines, and database query tuning.",
    tags: ["WordPress", "PHP", "Elementor Customization", "Technical SEO", "Speed Optimization"],
    liveUrl: "https://dnadcode.com/",
    featured: true,
    challengesSolved:
      "Engineered clean modular widgets and lightweight custom assets on top of Elementor, ensuring fast loads despite rich scientific illustrations.",
    keyFeatures: [
      "Custom WordPress theme customization and branding",
      "HIPAA-friendly patient inquiry form integration",
      "Structured schema markup for clinical organization SEO",
      "Ongoing maintenance, security hardening, and updates",
    ],
  },
  {
    id: "thegainers-portal",
    title: "The Gainers — Financial & Educational Platform",
    category: "wordpress",
    categoryLabel: "WordPress & CMS Development",
    description:
      "Financial market education portal featuring structured trading courses, webinar registration funnels, and automated CRM lead capture.",
    longDescription:
      "Developed a custom WordPress platform for The Gainers with zero-bloat PHP theme architecture, fast course catalogs, webinar enrollment pipelines, and speed optimization for heavy ad-driven traffic.",
    impactMetric: "Sub-0.6s TTFB & 2.5x Increase in Webinar Registrations",
    architectureHighlight:
      "Database query optimization, server-level page caching, CRM webhook routing, and lightweight responsive UI.",
    tags: ["WordPress", "PHP", "MySQL", "Lead Funnel", "Speed Optimization", "Maintenance"],
    liveUrl: "https://www.thegainers.in/",
    featured: true,
    challengesSolved:
      "Prevented site slowdowns during high-volume advertising spikes by configuring database indexing and object caching.",
    keyFeatures: [
      "Zero-bloat custom theme and course directory",
      "Frictionless webinar lead capture forms",
      "Cache warmup and PageSpeed optimization",
      "Regular backup management and uptime monitoring",
    ],
  },
  {
    id: "sedibuz-consulting",
    title: "Sedibuz Consulting Enterprise Platform",
    category: "wordpress",
    categoryLabel: "WordPress & CMS Development",
    description:
      "Custom corporate platform engineered for Sedibuz Consulting LLP with bespoke theme architecture, service scoping tools, and technical SEO.",
    longDescription:
      "Architected and deployed a bespoke corporate platform for Sedibuz Consulting LLP. Built a zero-bloat custom PHP WordPress theme with modular blocks, database optimizations, and structured SEO markup.",
    impactMetric: "98/100 PageSpeed & 45% Increase in Inquiries",
    architectureHighlight:
      "Custom PHP theme with modular ACF fields, asset optimization layer, and automated SEO schema injection.",
    tags: ["WordPress", "Custom PHP Theme", "JavaScript", "MySQL", "ACF Pro", "Technical SEO"],
    liveUrl: "https://sedibuz.com",
    featured: false,
    challengesSolved:
      "Eliminated third-party plugin bloat by writing native custom post types and custom PHP template modules.",
    keyFeatures: [
      "Bespoke enterprise theme architecture",
      "Structured JSON-LD organization schema",
      "Sub-second load times on mobile devices",
      "Comprehensive AMC maintenance and security",
    ],
  },

  // ----------------------------------------------------
  // C. LANDING PAGES & CONVERSION PAGES
  // ----------------------------------------------------
  {
    id: "collegencourses-distance-mba",
    title: "Distance MBA Top 10 Universities (North Zone)",
    category: "landing",
    categoryLabel: "Landing Pages & Conversion Optimization",
    description:
      "High-converting education comparison landing page engineered for university rankings, syllabus downloads, and student lead generation.",
    longDescription:
      "Designed and developed a specialized high-intent landing page comparing the top 10 distance MBA universities. Engineered dynamic comparison tables, frictionless multi-step lead capture, and sub-second mobile page loads.",
    impactMetric: "38% Conversion Rate & Sub-0.5s Mobile Load",
    architectureHighlight:
      "Minimalist lightweight DOM, inline critical CSS, asynchronous tracking scripts, and instant form validation.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Lead Generation", "Conversion Rate Optimization"],
    liveUrl: "https://collegencourses.com/top-10-distance-mba-universities-colleges-north-zone/",
    featured: true,
    challengesSolved:
      "Optimized multi-step forms to minimize user drop-off while validating student mobile numbers in real time.",
    keyFeatures: [
      "Interactive university comparison matrix",
      "Mobile-responsive lead capture funnels",
      "Direct CRM webhook data synchronization",
      "High-velocity Google Ads landing page optimization",
    ],
  },
  {
    id: "collegencourses-iim",
    title: "IIM Online & Distance Education Funnel",
    category: "landing",
    categoryLabel: "Landing Pages & Conversion Optimization",
    description:
      "Executive education campaign landing page targeted at working professionals seeking online IIM executive management programs.",
    longDescription:
      "Engineered an executive education landing page with conversion-first design hierarchy, instant eligibility checkers, syllabus download gating, and optimized mobile touch targets.",
    impactMetric: "+140% Qualified Executive Student Inquiries",
    architectureHighlight:
      "Accelerated mobile load time, clean typography, conversion-driven visual cues, and technical SEO hierarchy.",
    tags: ["HTML5", "JavaScript", "Conversion Optimization", "Mobile UI", "Lead Funnel"],
    liveUrl: "https://collegencourses.com/iim-online-distance-learnings/",
    featured: true,
    challengesSolved:
      "Achieved sub-second first contentful paint (FCP) on mobile networks for paid search ad visitors.",
    keyFeatures: [
      "Frictionless executive lead capture forms",
      "Mobile-first responsive layout",
      "Compelling social proof and credential badges",
      "Zero-latency form validation",
    ],
  },
  {
    id: "trexova-corporate-wellness",
    title: "Trexova Corporate Wellness Campaign Page",
    category: "landing",
    categoryLabel: "Landing Pages & Conversion Optimization",
    description:
      "B2B corporate wellness campaign landing page engineered for HR directors, team productivity programs, and enterprise retreat inquiries.",
    longDescription:
      "Created a dedicated B2B lead generation landing page positioning corporate wellness solutions for productive teams. Included ROI statistics, program breakdowns, and streamlined proposal inquiry forms.",
    impactMetric: "42% Increase in Enterprise Proposal Requests",
    architectureHighlight:
      "Modular value-proposition sections, trust signals, enterprise inquiry routing, and asset optimization.",
    tags: ["WordPress", "Landing Page", "B2B Lead Gen", "CRO", "Speed Optimization"],
    liveUrl: "https://www.trexova.com/2/corporate-wellness-a-path-to-thriving-teams-and-sustainable-productivity/",
    featured: true,
    challengesSolved:
      "Positioned complex multi-day retreat packages into clear, actionable executive corporate tiers.",
    keyFeatures: [
      "Enterprise inquiry scoping forms",
      "High-impact responsive visual storytelling",
      "Mobile-optimized lead routing",
      "Technical SEO on-page markup",
    ],
  },
  {
    id: "trexova-uk-wellness",
    title: "Trexova UK Wellness Holidays in India",
    category: "landing",
    categoryLabel: "Landing Pages & Conversion Optimization",
    description:
      "Inbound international travel & wellness retreat campaign page tailored specifically for travelers from the United Kingdom.",
    longDescription:
      "Built an international conversion-focused landing page showcasing India's premier Ayurveda, yoga, and meditation retreats for UK travelers. Integrated currency clarity, itinerary highlights, and direct WhatsApp concierge booking.",
    impactMetric: "55% Boost in UK Inbound Traveler Inquiries",
    architectureHighlight:
      "Geo-targeted content architecture, high-resolution responsive WebP imagery, and fast international CDN delivery.",
    tags: ["WordPress", "Landing Page", "International SEO", "CRO", "Mobile First"],
    liveUrl: "https://www.trexova.com/2/uk/wellness-holidays-in-india/",
    featured: true,
    challengesSolved:
      "Delivered rich visual retreat photography while maintaining strict Core Web Vitals under 1.2s LCP.",
    keyFeatures: [
      "International traveler lead capture forms",
      "WhatsApp live concierge trigger integration",
      "Optimized itinerary breakdowns and FAQs",
      "Full mobile touch responsiveness",
    ],
  },
  {
    id: "trexova-prenatal-yoga",
    title: "Trexova Prenatal Yoga Trainer at Home",
    category: "landing",
    categoryLabel: "Landing Pages & Conversion Optimization",
    description:
      "Hyper-local high-intent landing page for at-home prenatal and postnatal yoga sessions with certified expert trainers.",
    longDescription:
      "Designed a sensitive, high-trust landing page for expectant mothers seeking certified home yoga instruction. Included safety certifications, personalized trimester benefits, and instant consultation scheduling.",
    impactMetric: "3.2x Increase in Consultation Booking Calls",
    architectureHighlight:
      "High-trust healthcare visual cues, one-tap mobile calling and WhatsApp scheduling triggers, and zero-friction forms.",
    tags: ["WordPress", "Landing Page", "Local SEO", "Mobile CRO", "Speed Tuning"],
    liveUrl: "https://www.trexova.com/2/yoga/prenatal-yoga-trainer-at-home/",
    featured: true,
    challengesSolved:
      "Streamlined booking to a single tap, reducing form friction for busy expectant mothers on mobile devices.",
    keyFeatures: [
      "Direct click-to-WhatsApp and phone consultation buttons",
      "Trimester-specific benefit breakdowns",
      "Certified trainer trust badges and testimonials",
      "Sub-second mobile loading speed",
    ],
  },
  {
    id: "dnadcode-anti-aging",
    title: "DNA DCode Anti-Aging Genetic Screening",
    category: "landing",
    categoryLabel: "Landing Pages & Conversion Optimization",
    description:
      "High-converting landing page for specialized genetic testing, cellular longevity analysis, and anti-aging wellness protocols.",
    longDescription:
      "Engineered a high-converting landing page for premium genetic screening. Built with scientific credibility cues, sample report previews, patient privacy guarantees, and frictionless appointment booking.",
    impactMetric: "45% Increase in Premium Screening Bookings",
    architectureHighlight:
      "Scientific credential layout, trust badges, instant validation lead forms, and WebP asset pipeline.",
    tags: ["WordPress", "Landing Page", "Health Tech", "Conversion Optimization", "Speed"],
    liveUrl: "https://dnadcode.com/anti-aging/",
    featured: true,
    challengesSolved:
      "Communicated complex genetic science in an approachable, high-converting visual hierarchy.",
    keyFeatures: [
      "Sample report preview gating",
      "Frictionless patient inquiry form",
      "Rigorous privacy & security trust indicators",
      "Responsive layout optimized across all screen sizes",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "magicworks",
    role: "Web Developer",
    company: "Magicworksit Sol. Pvt. Ltd",
    companyUrl: "https://magicworks.in",
    location: "Pune, Maharashtra, India",
    period: "Jun 2024 – Present",
    isCurrent: true,
    summary:
      "Handling real-world client web projects, custom WordPress theme/plugin engineering, Next.js web application development, website maintenance, and full-scale performance optimization.",
    achievements: [
      "Engineered bespoke WordPress themes and plugins from scratch based on complex client specifications without heavy page builders.",
      "Conducted extensive website performance optimization, elevating client PageSpeed and Core Web Vitals scores to 95+.",
      "Delivered Next.js web applications (including OMC 2.0 and MW Host AI) with modern component architecture and clean codebases.",
      "Managed ongoing Website Maintenance & AMC services, handling security patches, plugin updates, automated backups, and bug fixes.",
    ],
    techStack: [
      "WordPress",
      "Next.js",
      "PHP",
      "TypeScript",
      "MySQL",
      "ACF Pro",
      "Core Web Vitals",
      "Website AMC",
    ],
  },
  {
    id: "freelance-foundation",
    role: "WordPress & Web Developer (Currently Working)",
    company: "Web With Abhi",
    location: "Pune, India",
    period: "2025 – Present",
    isCurrent: true,
    summary:
      "Providing independent custom WordPress development, Next.js web applications, conversion-focused landing pages, Core Web Vitals speed optimization, and ongoing website maintenance (AMC) for businesses, startups, and agencies.",
    achievements: [
      "Engineering bespoke zero-bloat WordPress themes, custom plugins, and Next.js applications with sub-second load times.",
      "Delivering high-converting landing pages with lead capture automation for education, healthcare, and corporate consulting clients.",
      "Executing deep performance audits, resolving Core Web Vitals bottlenecks (LCP, CLS, TTFB) to achieve consistent 95+ PageSpeed scores.",
      "Providing proactive AMC maintenance, security hardening, automated cloud backups, and zero-downtime version upgrades.",
    ],
    techStack: ["WordPress", "Next.js", "PHP", "TypeScript", "Tailwind CSS", "Speed Optimization", "Website AMC"],
  },
  {
    id: "brandupx",
    role: "Web Developer",
    company: "BrandupX",
    location: "Pune, Maharashtra, India",
    period: "Apr 2023 – Apr 2024",
    isCurrent: false,
    summary:
      "Developed responsive WordPress websites, high-converting campaign landing pages, and custom layouts with pixel-perfect design fidelity.",
    achievements: [
      "Built and customized 15+ responsive WordPress websites and lead generation landing pages with HTML5, CSS3, and JavaScript.",
      "Collaborated directly with designers and marketers to implement conversion-focused user interfaces and form workflows.",
      "Delivered technical SEO enhancements and image optimization across client sites to improve Google search visibility.",
      "Consistently met tight client project deadlines with clean, maintainable, and well-structured codebases.",
    ],
    techStack: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "Landing Pages", "SEO"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wordpress-dev",
    title: "Custom WordPress Development",
    tagline: "Bespoke themes, zero-bloat plugins & scalable architectures.",
    description:
      "Developing custom WordPress themes and plugins built from scratch with clean PHP, ACF Pro, and modern frontend tools. No heavy page builders, guaranteed fast load times, and intuitive editorial controls.",
    deliverables: [
      "Zero-Bloat Custom Theme Development",
      "Custom Plugin & Shortcode Engineering",
      "ACF Pro Custom Field Modeling",
      "WooCommerce Storefront Customization",
      "WordPress Version Upgrades & Migrations",
    ],
    techStack: ["WordPress", "PHP", "MySQL", "ACF Pro", "WooCommerce"],
    iconName: "Globe",
    badge: "Core Specialty",
  },
  {
    id: "nextjs-dev",
    title: "Next.js & Modern Web Applications",
    tagline: "Ultra-fast App Router applications with TypeScript & Tailwind CSS.",
    description:
      "Building high-performance single-page and multi-page web applications utilizing Next.js 15/16 App Router, React 19, TypeScript, and Tailwind CSS v4. Designed for sub-second page transitions and modern SaaS interfaces.",
    deliverables: [
      "Next.js App Router Architecture (SSR/SSG/ISR)",
      "Strict TypeScript Type Safety & Component Systems",
      "Tailwind CSS v4 & Shadcn UI Integration",
      "Sanity CMS & Headless CMS Integrations",
      "Vercel Production Deployment & CI/CD",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    iconName: "Zap",
    badge: "Modern Tech",
  },
  {
    id: "landing-page-dev",
    title: "Landing Page Development",
    tagline: "High-converting campaign pages engineered for lead generation.",
    description:
      "Designing and developing high-impact landing pages tailored for education portals, marketing campaigns, product launches, and business lead capture. Focused on speed, clean hierarchy, and maximum form conversions.",
    deliverables: [
      "Education & Distance MBA Landing Pages",
      "Lead Generation & Ad Campaign Funnels",
      "Frictionless Multi-Step Form Integrations",
      "CRM & Webhook Lead Routing (Email/CRM)",
      "A/B Testing Layouts & Mobile Optimization",
    ],
    techStack: ["HTML5/CSS3", "JavaScript", "PHP", "Form Webhooks", "Tailwind CSS"],
    iconName: "FileSpreadsheet",
    badge: "High Conversion",
  },
  {
    id: "performance-optimization",
    title: "Website Performance Optimization",
    tagline: "Core Web Vitals tuning & PageSpeed 95+ score guarantees.",
    description:
      "Comprehensive optimization of sluggish websites to pass Google Core Web Vitals with flying colors. We eliminate render-blocking assets, optimize images (WebP/AVIF), tune database queries, and implement advanced caching.",
    deliverables: [
      "LCP, FCP, CLS & TTFB Optimization",
      "Google PageSpeed & Lighthouse 95+ Target",
      "Image Compression & Modern Format Conversion",
      "Server-Level Caching (Redis/Varnish/Object Cache)",
      "Database Query Debloating & Asset Minification",
    ],
    techStack: ["Core Web Vitals", "Lighthouse", "Redis", "PHP Opcode", "Asset Bundling"],
    iconName: "Gauge",
    badge: "Proven Results",
  },
  {
    id: "website-maintenance-amc",
    title: "Website Maintenance & AMC",
    tagline: "Proactive security, monitoring, backups & regular updates.",
    description:
      "Comprehensive Annual Maintenance Contracts (AMC) to keep your web platforms secure, fast, and up to date. Continuous monitoring, bug fixing, compatibility testing, and routine content management.",
    deliverables: [
      "24/7 Uptime & Performance Monitoring",
      "Routine Plugin, Theme & Core Updates",
      "Automated Cloud Backup Management",
      "Security Audits & Vulnerability Patching",
      "Bug Fixes & Ongoing Content Updates",
    ],
    techStack: ["WordPress AMC", "Security Hardening", "Cloud Backups", "Uptime Monitoring"],
    iconName: "ShieldCheck",
    badge: "Ongoing Care",
  },
  {
    id: "technical-seo",
    title: "Technical SEO & Structured Data",
    tagline: "Search engine crawlability, schema markup & visibility.",
    description:
      "Structuring websites with semantic HTML, JSON-LD schemas, automated sitemaps, OpenGraph metadata, and clean URL routing to maximize search engine rankings and generative search visibility.",
    deliverables: [
      "JSON-LD Schema Markup (Person, Organization, FAQ)",
      "Semantic HTML5 Heading Hierarchy & OpenGraph",
      "XML Sitemap & Robots.txt Configuration",
      "Mobile-Friendly & Speed Ranking Factors",
      "Search Engine Indexing & Crawlability Audits",
    ],
    techStack: ["Schema.org", "JSON-LD", "Google Search Console", "OpenGraph"],
    iconName: "Search",
    badge: "Search Ready",
  },
  {
    id: "cms-development",
    title: "Headless CMS & Decoupled Architecture",
    tagline: "Connecting Next.js frontends with WordPress & Sanity backends.",
    description:
      "Architecting decoupled web platforms that combine the editorial ease of WordPress or Sanity CMS with the speed and security of a Next.js edge frontend via GraphQL and REST APIs.",
    deliverables: [
      "Headless WordPress with Next.js App Router",
      "Sanity CMS Studio Setup & Schema Design",
      "WP REST API & WPGraphQL Querying",
      "Incremental Static Regeneration (ISR)",
      "Edge Caching & Dynamic Revalidation",
    ],
    techStack: ["Sanity CMS", "WordPress REST API", "WPGraphQL", "Next.js"],
    iconName: "Layers",
    badge: "Decoupled",
  },
  {
    id: "shopify-dev",
    title: "Shopify Development & Store Setup",
    tagline: "Custom storefront configuration, Liquid styling & checkout flow.",
    description:
      "Customizing Shopify stores, configuring Liquid templates, setting up product catalogs, integrating payment and shipping apps, and optimizing conversion funnels for eCommerce brands.",
    deliverables: [
      "Shopify Theme Setup & Customization",
      "Liquid Code Tweaks & Component Sections",
      "Payment Gateway & Shipping Configuration",
      "App Integrations & Conversion Rate Optimization",
      "Mobile Checkout Flow Enhancements",
    ],
    techStack: ["Shopify", "Liquid", "HTML/CSS", "JavaScript", "eCommerce"],
    iconName: "ShoppingBag",
    badge: "eCommerce",
  },
  {
    id: "ai-assisted-dev",
    title: "AI-Assisted Web Development",
    tagline: "3x faster engineering throughput with modern AI toolchains.",
    description:
      "Leveraging modern AI-augmented developer tools (Cursor, Claude, ChatGPT, Gemini) to build, test, and deploy web applications with unmatched speed while maintaining rigorous architectural standards and clean code.",
    deliverables: [
      "Cursor, Claude & ChatGPT Accelerated Workflows",
      "Automated Content & Metadata Pipelines",
      "Rapid Prototyping & AI Workflow Acceleration",
      "Deterministic Prompt Engineering with Zod",
      "3x Faster Turnaround on Web Milestones",
    ],
    techStack: ["Cursor", "Claude", "ChatGPT", "Gemini", "OpenAI API"],
    iconName: "Bot",
    badge: "AI-Native",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Abhishek optimized our consulting portal with remarkable precision. Our website loading speed jumped from 38 to 98 on Google PageSpeed, and our Core Web Vitals turned all green. The lead conversion rate on our contact forms increased significantly.",
    author: "Enterprise Client Lead",
    role: "Managing Director",
    company: "Sedibuz Consulting",
    avatarText: "SC",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Abhishek delivers clean, maintainable WordPress and Next.js solutions at Magicworks. Whether building custom theme architectures or resolving performance bottlenecks, his attention to detail and technical execution is consistently outstanding.",
    author: "Technical Lead",
    role: "Senior Engineering Manager",
    company: "Magicworksit Sol.",
    avatarText: "MW",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "From high-converting landing pages for education campaigns to custom WordPress builds, Abhishek's turnaround time and code quality make him a reliable developer. He understands both user conversion and speed optimization.",
    author: "Marketing Director",
    role: "Campaign Lead",
    company: "BrandupX Agency",
    avatarText: "BX",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Abhishek completely transformed our healthcare portal and retreat booking funnels at Trexova. The custom WordPress architecture handles high ad traffic with zero slowdowns, and our prenatal yoga and retreat inquiry rates surged by over 40%.",
    author: "Operations Lead",
    role: "Platform Director",
    company: "Trexova Wellness",
    avatarText: "TW",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "The Next.js and Sanity CMS setup Abhishek engineered for OMC 2.0 is world-class. It loads in under 0.4 seconds, gives our editorial team seamless content workflows, and achieved perfect Lighthouse performance scores across all metrics.",
    author: "Product & Growth Lead",
    role: "Co-Founder",
    company: "OMC 2.0 Education",
    avatarText: "OM",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Reliable, detail-oriented, and technically sharp. Abhishek built our custom WordPress theme from scratch with zero bloat and continues to handle our website AMC, security scans, and speed maintenance flawlessly.",
    author: "Managing Partner",
    role: "Head of Digital",
    company: "The Gainers Financial",
    avatarText: "TG",
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Who is Abhishek Panchgalle?",
    answer:
      "Abhishek Panchgalle is a Web Developer and Performance Optimization Specialist based in Pune, Maharashtra, India. Operating under the brand 'Web With Abhi', he possesses extensive practical experience in custom WordPress development, high-converting landing page creation, Next.js web applications, Core Web Vitals optimization, and ongoing website maintenance (AMC).",
    category: "About",
  },
  {
    question: "Is Abhishek available for full-time employment or freelance projects?",
    answer:
      "Abhishek is actively available for BOTH full-time senior engineering roles (with tech companies, product startups, and agencies) AND freelance / consulting projects (for business owners, marketing teams, and enterprises requiring custom builds or ongoing AMC support).",
    category: "Hiring",
  },
  {
    question: "What WordPress services does Abhishek provide?",
    answer:
      "Abhishek provides end-to-end WordPress services including custom zero-bloat theme development (PHP/ACF Pro), custom plugin development, WooCommerce setup, performance tuning to 95+ PageSpeed, technical SEO structuring, malware security hardening, and proactive Annual Maintenance Contracts (AMC).",
    category: "WordPress",
  },
  {
    question: "What Next.js projects has Abhishek worked on?",
    answer:
      "Abhishek has developed modern Next.js applications including OMC 2.0 (an education platform powered by Next.js and Sanity CMS) and MW Host AI (an AI-powered cloud hosting interface), both deployed on Vercel with high-performance metrics.",
    category: "Next.js",
  },
  {
    question: "How does Abhishek optimize website performance and Core Web Vitals?",
    answer:
      "Performance optimization involves optimizing Largest Contentful Paint (LCP), First Contentful Paint (FCP), Cumulative Layout Shift (CLS), and Time to First Byte (TTFB). Techniques include critical CSS inlining, asset minification, image conversion to modern WebP/AVIF formats, Redis/object caching, server opcode tuning, and MySQL query debloating.",
    category: "Performance",
  },
  {
    question: "What is included in Website Maintenance & AMC services?",
    answer:
      "Website Maintenance (AMC) includes 24/7 uptime monitoring, scheduled WordPress core/theme/plugin updates, automated cloud backups, security scans and malware prevention, database optimization, bug fixes, and regular content updates.",
    category: "Maintenance",
  },
  {
    question: "How can I contact or hire Abhishek Panchgalle?",
    answer:
      "You can contact Abhishek directly via email at webwithabhi296@gmail.com, call or WhatsApp at +91 8421903846, or submit an inquiry through the contact form on this website. He is available for full-time roles, freelance projects, and ongoing AMC maintenance contracts.",
    category: "Contact",
  },
];
