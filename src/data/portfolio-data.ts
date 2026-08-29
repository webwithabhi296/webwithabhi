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
  // CMS & eCommerce (Strong Foundation)
  {
    name: "Custom WordPress Themes",
    category: "cms",
    level: 98,
    experience: "3+ Years",
    description:
      "Zero-bloat bespoke themes built from scratch with PHP, template hierarchy, custom post types, and ACF Pro.",
    iconName: "Globe",
    featured: true,
  },
  {
    name: "WordPress Plugins & WooCommerce",
    category: "cms",
    level: 94,
    experience: "3+ Years",
    description:
      "Plugin configuration, custom shortcodes, WooCommerce setup, payment gateways, and third-party webhook integrations.",
    iconName: "Puzzle",
    featured: true,
  },
  {
    name: "Shopify Store Configuration",
    category: "cms",
    level: 88,
    experience: "2+ Years",
    description:
      "Store setup, Liquid theme tweaks, product architecture, app integrations, and conversion checkout optimization.",
    iconName: "ShoppingBag",
    featured: false,
  },
  {
    name: "Sanity CMS & Headless Content",
    category: "cms",
    level: 90,
    experience: "2+ Years",
    description:
      "Structured content schemas, Sanity Studio setup, GROQ querying, and headless integration with Next.js.",
    iconName: "Layers",
    featured: true,
  },

  // Frontend Stack
  {
    name: "Next.js 15/16 (App Router)",
    category: "frontend",
    level: 93,
    experience: "2+ Years",
    description:
      "Server Components, Server Actions, dynamic ISR/SSG, middleware, and route handlers on Vercel.",
    iconName: "Zap",
    featured: true,
  },
  {
    name: "React 19 & TypeScript",
    category: "frontend",
    level: 94,
    experience: "2+ Years",
    description:
      "Custom hook architecture, strict typing, generic interfaces, reusable components, and state management.",
    iconName: "Code2",
    featured: true,
  },
  {
    name: "JavaScript (ES6+) & HTML5/CSS3",
    category: "frontend",
    level: 98,
    experience: "3+ Years",
    description:
      "DOM manipulation, semantic markup, asynchronous programming, modern flex/grid layouts, and accessibility.",
    iconName: "FileCode",
    featured: true,
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    level: 96,
    experience: "3+ Years",
    description:
      "Modern mobile-first design systems, CSS variables, utility tokens, and accessible UI with Shadcn.",
    iconName: "Palette",
    featured: true,
  },

  // Backend & Services
  {
    name: "PHP & MySQL Architecture",
    category: "backend",
    level: 94,
    experience: "3+ Years",
    description:
      "Object-oriented PHP, relational schema design, query optimization, REST endpoints, and secure database transactions.",
    iconName: "Server",
    featured: true,
  },
  {
    name: "Node.js & REST APIs",
    category: "backend",
    level: 88,
    experience: "2+ Years",
    description:
      "API handlers, middleware routing, JSON payload consumption, webhooks, and third-party integrations.",
    iconName: "Cpu",
    featured: false,
  },
  {
    name: "Supabase & Database Services",
    category: "backend",
    level: 86,
    experience: "1+ Year",
    description:
      "PostgreSQL tables, row-level security (RLS), authentication integration, and realtime database subscriptions.",
    iconName: "Database",
    featured: false,
  },

  // Performance & SEO
  {
    name: "Core Web Vitals & PageSpeed",
    category: "performance",
    level: 97,
    experience: "3+ Years",
    description:
      "Comprehensive optimization of LCP, FCP, CLS, TTFB, and server-side caching to achieve 95+ Lighthouse scores.",
    iconName: "Gauge",
    featured: true,
  },
  {
    name: "Technical SEO & Schema.org",
    category: "performance",
    level: 95,
    experience: "3+ Years",
    description:
      "JSON-LD structured data, OpenGraph, XML sitemaps, semantic hierarchy, and search engine crawlability.",
    iconName: "Search",
    featured: true,
  },

  // Dev & AI Tools
  {
    name: "Git, GitHub & Vercel",
    category: "tools",
    level: 94,
    experience: "3+ Years",
    description:
      "Branching workflows, pull requests, automated Vercel CI/CD pipelines, and domain configuration.",
    iconName: "GitBranch",
    featured: false,
  },
  {
    name: "Cursor, Claude, ChatGPT & Gemini",
    category: "ai",
    level: 96,
    experience: "2+ Years",
    description:
      "Leveraging AI developer toolchains (Claude, Cursor, ChatGPT, Gemini) to accelerate engineering velocity by 3x.",
    iconName: "Bot",
    featured: true,
  },
];

export const PROJECTS: ProjectItem[] = [
  // Next.js Projects
  {
    id: "omc-2-0",
    title: "OMC 2.0 — Modern Education Platform",
    category: "nextjs",
    categoryLabel: "Next.js & Sanity CMS",
    description:
      "Modern education portal built with Next.js App Router, TypeScript, and Sanity CMS for flexible structured content management.",
    longDescription:
      "Engineered the modern education platform OMC 2.0. Built a CMS-driven architecture with Sanity CMS, reusable component structure with Shadcn UI and Tailwind CSS, and strict SEO-focused metadata.",
    impactMetric: "Sub-0.4s LCP & 100% Mobile-Friendly Score",
    architectureHighlight:
      "Next.js App Router, Sanity CMS real-time visual editing, Vercel edge deployment, and responsive UI components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Sanity CMS", "Vercel"],
    liveUrl: "https://omc-2-0.vercel.app/",
    featured: true,
  },
  {
    id: "mw-host-ai",
    title: "MW Host AI — AI-Powered Hosting Platform",
    category: "nextjs",
    categoryLabel: "Next.js & AI SaaS",
    description:
      "Modern cloud hosting platform interface with AI-assisted server configuration and intelligent management workflows.",
    longDescription:
      "Developed MW Host AI, a high-performance web platform featuring modern SaaS architecture, responsive user interface, scalable codebase, and AI integration for streamlined hosting operations.",
    impactMetric: "99+ Performance Score & Sub-Second Transitions",
    architectureHighlight:
      "Next.js App Router, AI integration pipeline, scalable modular components, and automated Vercel CI/CD.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Vercel"],
    liveUrl: "https://mw-host-ai.vercel.app/",
    featured: true,
  },

  // WordPress Projects
  {
    id: "sedibuz-consulting",
    title: "Sedibuz Consulting Enterprise Platform",
    category: "wordpress",
    categoryLabel: "Custom WordPress & Business",
    description:
      "Custom corporate platform engineered for Sedibuz Consulting LLP with bespoke theme architecture and performance tuning.",
    longDescription:
      "Architected and deployed a bespoke corporate platform for Sedibuz Consulting LLP. Built a zero-bloat custom PHP WordPress theme with modular blocks, database optimizations, and structured SEO markup.",
    impactMetric: "98/100 PageSpeed & 45% Increase in Inquiries",
    architectureHighlight:
      "Custom PHP theme with modular ACF fields, asset optimization layer, and automated SEO schema injection.",
    tags: ["WordPress", "Custom PHP Theme", "JavaScript", "MySQL", "ACF Pro", "Technical SEO"],
    liveUrl: "https://sedibuz.com",
    featured: true,
  },
  {
    id: "trexova-wellness",
    title: "Trexova Healthcare & Wellness Portal",
    category: "wordpress",
    categoryLabel: "Healthcare & Booking Platform",
    description:
      "Custom WordPress portal with tailored retreat listings, booking funnels, and mobile-optimized user experience.",
    longDescription:
      "Developed custom WordPress theme layouts, custom post types for retreat packages, and responsive booking interfaces. Optimized image delivery and caching for lightning-fast mobile performance.",
    impactMetric: "96+ Mobile Performance & 50% Lower Bounce Rate",
    architectureHighlight:
      "Custom post type hierarchy, dynamic search filters, streamlined booking form routing, and Redis caching.",
    tags: ["WordPress", "Custom Theme", "PHP", "MySQL", "Speed Optimization", "Technical SEO"],
    featured: true,
  },
  {
    id: "distance-mba-education-portals",
    title: "Distance MBA & Higher Education Portals",
    category: "wordpress",
    categoryLabel: "Education & Lead Generation",
    description:
      "High-traffic education portals designed for university course comparisons, syllabus downloads, and student lead capture.",
    longDescription:
      "Engineered specialized education portals for Distance MBA programs. Built dynamic course comparison matrices, university profile pages, and multi-step lead capture forms integrated with CRM webhooks.",
    impactMetric: "+120% Qualified Student Lead Inquiries",
    architectureHighlight:
      "Modular course catalog architecture, optimized lead capture routing, and sub-second page delivery under heavy ad traffic.",
    tags: ["WordPress", "PHP", "ACF Pro", "Lead Automation", "Form Routing", "Speed Tuning"],
    featured: true,
  },

  // Landing Page Projects
  {
    id: "lead-gen-campaigns",
    title: "High-Converting Campaign Landing Pages",
    category: "landing",
    categoryLabel: "Landing Page Development",
    description:
      "Performance-tuned landing pages engineered for paid advertising campaigns, webinars, and education enrollments.",
    longDescription:
      "Designed and developed over a dozen conversion-focused landing pages. Emphasized clear visual hierarchy, frictionless multi-step form integrations, and sub-0.5s load times to maximize conversion rates.",
    impactMetric: "35%+ Form Completion Rate & Sub-0.5s Load Time",
    architectureHighlight:
      "Minimalist lightweight DOM structure, inline critical CSS, asynchronous tracking scripts, and instant form validation.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Form Integrations", "A/B Testing"],
    featured: false,
  },

  // Performance Optimization Project
  {
    id: "performance-remediation",
    title: "Enterprise PageSpeed & Core Web Vitals Remediation",
    category: "performance",
    categoryLabel: "Performance & Speed Tuning",
    description:
      "Comprehensive performance audit and optimization project eliminating render-blocking resources and slashing TTFB.",
    longDescription:
      "Conducted extensive performance engineering on sluggish production sites. Rebuilt asset loading pipelines, implemented Redis object caching, optimized MySQL queries, and compressed media to WebP/AVIF.",
    impactMetric: "PageSpeed Score jumped from 38/100 to 98/100",
    architectureHighlight:
      "Server-level Redis caching, critical CSS extraction, database query debloating, and asset minification.",
    tags: ["Core Web Vitals", "LCP / TTFB", "Redis Caching", "Asset Minification", "Lighthouse 98+"],
    featured: false,
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
  {
    id: "freelance-foundation",
    role: "WordPress & Web Developer (Independent / Consultant)",
    company: "Web With Abhi",
    location: "Pune, India",
    period: "2022 – 2023",
    isCurrent: false,
    summary:
      "Provided freelance custom WordPress development, landing page creation, speed optimization audits, and ongoing website maintenance for local and regional businesses.",
    achievements: [
      "Developed custom websites and landing pages for education, healthcare, and corporate consulting clients.",
      "Executed performance audits, resolving Core Web Vitals bottlenecks (LCP, CLS, TTFB) on sluggish WordPress sites.",
      "Provided AMC support, performing regular malware scans, plugin compatibility checks, and database cleanup.",
    ],
    techStack: ["WordPress", "PHP", "Next.js", "MySQL", "Speed Optimization", "Technical SEO"],
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
