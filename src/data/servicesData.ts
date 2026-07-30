export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: 'Web Development' | 'E-commerce' | 'AI & Automation' | 'SEO & Performance' | 'Design & Branding' | 'Infrastructure & API';
  shortDesc: string;
  longDesc: string;
  iconName: string;
  image?: string;
  popular?: boolean;
  features: string[];
  techStack: string[];
  benefits: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: '1',
    slug: 'website-development',
    title: 'Website Development',
    category: 'Web Development',
    shortDesc: 'Bespoke, high-performance websites engineered for maximum engagement and lightning-fast load times.',
    longDesc: 'We craft high-impact bespoke websites tailored to your brand identity and business objectives. Utilizing modern frontend architectures, responsive design principles, and seamless content workflows, our websites serve as powerful digital assets that build authority and drive predictable conversions.',
    iconName: 'Globe',
    image: '/images/services/website-development.jpg',
    popular: true,
    features: [
      'Custom Responsive UI/UX Architecture',
      'Headless & Jamstack Compatibility',
      'SEO-First Code Structure & Schema',
      'Ultra-Fast Asset & Image Optimization',
      'WCAG AA Accessibility Compliance',
      'Cross-Browser & Mobile Fluid Layouts'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    benefits: [
      'Boost search engine rankings with semantic HTML5',
      'Eliminate bounce rates with sub-second page loads',
      'Provide an unmatched user experience across all device viewports'
    ],
    deliverables: ['Custom Source Code', 'Content Management System', 'SEO Setup Document', '30-Day Launch Warranty'],
    faqs: [
      { question: 'How long does custom website development take?', answer: 'Typical custom website projects take between 4 to 8 weeks depending on scope, custom design requirements, and feature integrations.' },
      { question: 'Will my website be mobile-friendly?', answer: 'Yes, 100% of our builds follow mobile-first responsive architecture designed to look breathtaking on mobile, tablet, laptop, and 4K displays.' }
    ]
  },
  {
    id: '2',
    slug: 'wordpress-development',
    title: 'WordPress Development',
    category: 'Web Development',
    shortDesc: 'Enterprise WordPress and headless CMS solutions built for security, scalability, and ease of content management.',
    longDesc: 'Transform WordPress into an enterprise-grade web engine. We move past bloated off-the-shelf themes to deliver custom Gutenberg block systems, headless REST/GraphQL setups, and hardened security frameworks tailored for growing teams.',
    iconName: 'Code',
    image: '/images/services/wordpress-development.jpg',
    features: [
      'Custom Gutenberg Block Development',
      'Headless WordPress with Next.js Frontend',
      'Custom Plugin & Extension Engineering',
      'Speed Optimization & Caching Layers',
      'Enterprise Database & Security Hardening'
    ],
    techStack: ['WordPress', 'PHP 8+', 'GraphQL', 'MySQL', 'Next.js'],
    benefits: [
      'Full control over content without code knowledge',
      'Blazing fast speeds without plugin bloat',
      'Bank-grade security against vulnerability exploits'
    ],
    deliverables: ['Custom WordPress Theme', 'Custom Gutenberg Blocks', 'Admin Training Session', 'Staging & Production Deployment'],
    faqs: [
      { question: 'Can you convert our existing site to custom WordPress?', answer: 'Yes! We specialize in migrating legacy WordPress or proprietary CMS sites to clean, custom Gutenberg architectures without losing SEO rankings.' }
    ]
  },
  {
    id: '3',
    slug: 'shopify-development',
    title: 'Shopify Development',
    category: 'E-commerce',
    shortDesc: 'High-converting custom Shopify 2.0 themes, headless storefronts, and tailored e-commerce experiences.',
    longDesc: 'Scale your e-commerce operations with Shopify and Shopify Plus. We design conversion-focused custom themes, build bespoke Liquid & React apps, and optimize your checkout flow to turn visitors into loyal customer accounts.',
    iconName: 'ShoppingBag',
    image: '/images/services/shopify-development.jpg',
    popular: true,
    features: [
      'Shopify Online Store 2.0 Custom Themes',
      'Headless Shopify Storefronts with Storefront API',
      'Custom Liquid & React App Integration',
      'High-Conversion Checkout Customization',
      'ERP & CRM Inventory Sync Automation'
    ],
    techStack: ['Shopify Plus', 'Liquid', 'Storefront API', 'React', 'GraphQL'],
    benefits: [
      'Increase Average Order Value (AOV)',
      'Deliver frictionless mobile checkout',
      'Seamless multi-currency and global localization'
    ],
    deliverables: ['Custom Shopify 2.0 Storefront', 'App Setup & Configurations', 'Payment Gateway Integration', 'Staff Training'],
    faqs: [
      { question: 'Do you offer Shopify Plus custom development?', answer: 'Yes, we specialize in enterprise Shopify Plus store architecture, custom checkout scripts, and multi-region localization.' }
    ]
  },
  {
    id: '4',
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    category: 'E-commerce',
    shortDesc: 'Flexible, scalable WooCommerce web stores with customized product builders, subscriptions, and gateways.',
    longDesc: 'Unlock complete ownership of your e-commerce platform. We build robust WooCommerce environments equipped with automated subscriptions, custom pricing tiers, high-performance checkout flows, and custom gateway integrations.',
    iconName: 'ShoppingCart',
    image: '/images/services/woocommerce-development.jpg',
    features: [
      'Custom WooCommerce Theme Engineering',
      'Subscription & Recurring Billing Systems',
      'Custom Product Builders & Configurators',
      'Payment Gateway Integration (Stripe, PayPal, Klarna)',
      'Inventory & ERP Data Automation'
    ],
    techStack: ['WooCommerce', 'WordPress', 'PHP', 'Stripe API', 'MySQL'],
    benefits: [
      'Zero monthly platform commission fees',
      'Complete control over store functionality',
      'Optimized performance for thousands of SKU listings'
    ],
    deliverables: ['WooCommerce Store Build', 'Custom Checkout Flow', 'Payment Sync', 'Performance Optimization Report'],
    faqs: [
      { question: 'Can WooCommerce handle thousands of products?', answer: 'Absolutely. With our custom database indexing, Redis caching, and optimized queries, your store will load in under a second even with 50,000+ items.' }
    ]
  },
  {
    id: '8',
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    category: 'Web Development',
    shortDesc: 'Bespoke web applications, Next.js 15 App Router, React 19 UI, Node.js microservices, and API integrations.',
    longDesc: 'Turn complex requirements into high-performance digital platforms. We engineer full-stack web software, SaaS platforms, custom Next.js 15 App Router frontends, React 19 interactive state engines, Node.js microservices, and secure REST/GraphQL API gateways.',
    iconName: 'Layers',
    image: '/images/services/custom-web-applications.jpg',
    popular: true,
    features: [
      'Next.js 15 App Router & Server Action Pipelines',
      'React 19 Interactive State & UI Component Systems',
      'Node.js Microservices & Asynchronous Event Pipelines',
      'RESTful & GraphQL API Architecture & Gateway Security',
      'Full-Stack Multi-Tenant SaaS & Internal Enterprise Portals',
      'Role-Based Access Control (RBAC) & Database ORM Schemas'
    ],
    techStack: ['Next.js 15', 'React 19', 'Node.js', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
    benefits: [
      'Automate redundant business workflows with sub-second response times',
      'Combine server-side SEO discoverability with smooth client transitions',
      'Retain 100% intellectual property of your scalable web software'
    ],
    deliverables: ['Full-Stack Next.js & Node.js Application', 'REST/GraphQL API Documentation', 'Database Schemas & ORM', 'User & Admin Guides'],
    faqs: [
      { question: 'What technologies are included in Custom Web Applications?', answer: 'We build custom web platforms using Next.js 15 App Router, React 19, Node.js microservices, TypeScript, and RESTful/GraphQL API infrastructure.' },
      { question: 'Can you build custom SaaS platforms from scratch?', answer: 'Yes! We handle the complete lifecycle: product scoping, database architecture, UI design, billing integration, and cloud launch.' }
    ]
  },
  {
    id: '9',
    slug: 'ai-agents-business-automation',
    title: 'AI Agents & Business Automation',
    category: 'AI & Automation',
    shortDesc: 'Autonomous AI agents, LLM integrations, retrieval augmented generation (RAG), and process workflows.',
    longDesc: 'Supercharge operational efficiency with artificial intelligence. We engineer custom AI agents, deploy vector search knowledge bases (RAG), and build automated workflows that execute complex multi-step business tasks 24/7.',
    iconName: 'Cpu',
    image: '/images/services/ai-agents-business-automation.jpg',
    popular: true,
    features: [
      'Custom LLM Integration (OpenAI, Anthropic, Gemini)',
      'Retrieval-Augmented Generation (RAG) Systems',
      'Autonomous Task & Customer Service Agents',
      'Workflow Automation (n8n, Make, LangChain)',
      'Document Parsing & Automated Data Extraction'
    ],
    techStack: ['Python', 'Node.js', 'LangChain', 'Pinecone', 'OpenAI API', 'n8n'],
    benefits: [
      'Reduce customer response times from hours to milliseconds',
      'Automate repetitive data processing and lead scoring',
      'Empower teams with internal knowledge AI search assistants'
    ],
    deliverables: ['AI Agent Pipelines', 'Vector Database Setup', 'Workflow Orchestration Script', 'API Connectors'],
    faqs: [
      { question: 'Will AI agents integrate with our current CRM and tools?', answer: 'Yes, we connect AI agents directly to tools like HubSpot, Salesforce, Slack, Notion, and custom databases via REST APIs.' }
    ]
  },
  {
    id: '10',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    category: 'SEO & Performance',
    shortDesc: 'Comprehensive organic search strategy, Technical SEO audits, Local SEO map rankings, and Core Web Vitals speed tuning.',
    longDesc: 'Drive predictable, high-intent organic traffic to your digital platforms. Our full-spectrum SEO optimization framework encompasses Technical SEO schema auditing, Local SEO Google Business Profile dominance, Core Web Vitals speed remediation, and high-authority link building.',
    iconName: 'TrendingUp',
    image: '/images/services/seo-optimization.jpg',
    popular: true,
    features: [
      'Technical SEO Audits & JSON-LD Schema Architecture',
      'Local SEO & Google Business Profile 3-Pack Dominance',
      'Core Web Vitals Remediation & Sub-Second Page Speed Tuning',
      'In-Depth Keyword Intent Mapping & Content Silo Structuring',
      'Authority Backlink Profile Building & Rank Analytics'
    ],
    techStack: ['JSON-LD Schema', 'PageSpeed Insights', 'Google Search Console', 'Ahrefs', 'BrightLocal', 'Screaming Frog'],
    benefits: [
      'Capture qualified inbound buyers actively searching for your service',
      'Lower Customer Acquisition Costs (CAC) vs paid ads',
      'Dominate technical search audits, Google Maps, and organic rankings'
    ],
    deliverables: ['SEO Keyword Strategy', 'Technical & Local SEO Audit', 'Core Web Vitals Optimization', 'Monthly Rank & Traffic Report'],
    faqs: [
      { question: 'Does your SEO service include Technical and Local SEO?', answer: 'Yes! Our main SEO Optimization service combines deep Technical SEO schema auditing, Local Google Maps pack optimization, and Core Web Vitals speed tuning.' },
      { question: 'How quickly can we expect SEO results?', answer: 'Significant SEO rankings and traffic gains typically materialize within 3 to 6 months of consistent strategy execution.' }
    ]
  },
  {
    id: '14',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design & Branding',
    shortDesc: 'User-centric product design, interactive Figma prototypes, wireframes, and design system libraries.',
    longDesc: 'Great design is more than aesthetics—it drives user action. We craft pixel-perfect user interfaces and intuitive interaction flows based on deep user research, user journey mapping, and conversion rate optimization (CRO).',
    iconName: 'Figma',
    image: '/images/services/ui-ux-design.jpg',
    popular: true,
    features: [
      'Comprehensive UI/UX Audits & Heatmap Analysis',
      'User Journey Mapping & Wireframing',
      'Figma High-Fidelity Interactive Prototypes',
      'Design System & Component Library Creation',
      'Usability Testing & Micro-Interaction Design'
    ],
    techStack: ['Figma', 'Framer', 'Adobe CC', 'Principle', 'Rive'],
    benefits: [
      'Deliver frictionless user journeys that boost conversions',
      'Accelerate development times with pre-built Figma tokens',
      'Differentiate your brand with sleek digital aesthetics'
    ],
    deliverables: ['Interactive Figma File', 'Design Tokens & UI Kit', 'User Research Summary', 'Clickable Prototype'],
    faqs: [
      { question: 'Do you deliver developer-ready Figma files?', answer: 'Yes! All Figma files include structured auto-layouts, variants, typography tokens, color styles, and developer handoff notes.' }
    ]
  },
  {
    id: '15',
    slug: 'logo-design',
    title: 'Logo Design',
    category: 'Design & Branding',
    shortDesc: 'Memorable, timeless visual identity marks and logo assets engineered for digital and physical media.',
    longDesc: 'Your logo is the visual cornerstone of your enterprise. We design versatile visual logos that encapsulate your core brand message, standing out cleanly across favicons, app screens, billboards, and corporate collateral.',
    iconName: 'Sparkles',
    image: '/images/services/logo-design.jpg',
    features: [
      'Strategic Brand Discovery & Concept Sketches',
      'Vector Mark & Typography Logo Engineering',
      'Versatile Color Schemes & Monochrome Variations',
      'Favicon & App Icon Adaptations',
      'Full Vector Source File Package (SVG, EPS, AI, PNG)'
    ],
    techStack: ['Adobe Illustrator', 'Figma', 'Vector Engine'],
    benefits: [
      'Establish immediate professional credibility',
      'Ensure clear recognition at any icon scale',
      'Future-proof visual brand recognition'
    ],
    deliverables: ['Primary & Secondary Logos', 'Favicons & Social Badges', 'Vector Master Files (AI, SVG, EPS)', 'Usage Guidelines'],
    faqs: [
      { question: 'How many logo concepts will we review?', answer: 'We present 3 distinct design directions during initial review, refining your selected direction until 100% perfection.' }
    ]
  },
  {
    id: '16',
    slug: 'brand-identity',
    title: 'Brand Identity',
    category: 'Design & Branding',
    shortDesc: 'Complete corporate visual systems, typography rules, color palettes, tone of voice, and brand guidelines.',
    longDesc: 'Build a cohesive enterprise brand image across every touchpoint. We craft comprehensive brand identity systems—from visual asset guidelines and typography rules to tone-of-voice frameworks and brand collateral.',
    iconName: 'Palette',
    image: '/images/services/brand-identity.jpg',
    features: [
      'Visual Identity System & Style Guide',
      'Curated Color Systems & HSL Palette Tokens',
      'Typography Selection & Hierarchy Rules',
      'Brand Tone of Voice & Copywriting Manual',
      'Corporate Collateral (Business Cards, Decks, Social Templates)'
    ],
    techStack: ['Adobe InDesign', 'Figma', 'Adobe Illustrator'],
    benefits: [
      'Maintain visual consistency across all marketing channels',
      'Strengthen brand equity and customer recall',
      'Streamline onboarding for internal design and content teams'
    ],
    deliverables: ['Brand Guidelines PDF (50+ pages)', 'Design Token Package', 'Social Media Asset Templates', 'Pitch Deck Template'],
    faqs: [
      { question: 'What is included in the brand guideline manual?', answer: 'Logo usage rules, clear space metrics, color palettes, typography hierarchy, imagery rules, icon styles, and social template usage.' }
    ]
  },
  {
    id: '17',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Design & Branding',
    shortDesc: 'Data-driven social media growth, custom content creation, channel strategy, and audience engagement.',
    longDesc: 'Turn social media into a reliable customer acquisition channel. We craft scroll-stopping visual content, manage high-growth social channels (LinkedIn, X, Instagram, YouTube), and execute strategic social marketing campaigns.',
    iconName: 'Share2',
    image: '/images/services/social-media-marketing.jpg',
    features: [
      'Social Channel Strategy & Content Calendar',
      'Custom Motion & Graphic Post Creation',
      'Copywriting Tailored for Platform Algorithms',
      'Audience Engagement & Community Management',
      'Paid Social Campaign Strategy & Ad Setup'
    ],
    techStack: ['Figma', 'After Effects', 'Buffer', 'Hootsuite', 'Meta Ads Manager'],
    benefits: [
      'Build an active, loyal community around your brand',
      'Generate high-quality social inbound leads',
      'Position company leaders as industry thought leaders'
    ],
    deliverables: ['Monthly Content Calendar', 'Custom Visual & Video Posts', 'Community Management', 'Monthly Growth Analytics'],
    faqs: [
      { question: 'Which platforms do you specialize in?', answer: 'We focus heavily on B2B LinkedIn, X (Twitter), Instagram, and YouTube content systems.' }
    ]
  },
  {
    id: '18',
    slug: 'business-websites',
    title: 'Business Websites',
    category: 'Web Development',
    shortDesc: 'Clean, modern marketing websites crafted for SMBs and fast-scaling digital service companies.',
    longDesc: 'Establish a dominant online presence with a tailored business website. Designed specifically for service providers and small-to-midsize businesses, our builds emphasize clear messaging, trust signals, and lead conversion.',
    iconName: 'Briefcase',
    image: '/images/services/business-websites.jpg',
    features: [
      'Strategic Service Page Layouts',
      'Lead Generation & Contact Form Integration',
      'Client Reviews & Social Proof Placement',
      'Fast Loading & Mobile Responsive Design',
      'Easy-to-Manage Content Admin Panel'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'WordPress / Sanity', 'Vercel'],
    benefits: [
      'Turn online traffic into phone calls and contact inquiries',
      'Build immediate trust with prospective clients',
      'Easily update services, blog posts, and team members'
    ],
    deliverables: ['Custom Business Site', 'CMS Backoffice', 'Contact Form Integration', 'SEO Setup'],
    faqs: [
      { question: 'Can we update website text ourselves?', answer: 'Yes! We integrate user-friendly CMS editors so your team can effortlessly edit text, add images, and create new pages.' }
    ]
  },
  {
    id: '19',
    slug: 'corporate-websites',
    title: 'Corporate Websites',
    category: 'Web Development',
    shortDesc: 'Enterprise web portals featuring multi-language capabilities, investor relations, and security compliance.',
    longDesc: 'Designed for global enterprises and large organizations requiring sophisticated brand presence, security compliance, multi-region localization, and integration with enterprise IT ecosystems.',
    iconName: 'Building2',
    image: '/images/services/corporate-websites.jpg',
    features: [
      'Multi-Language & i18n Internationalization',
      'Enterprise Investor & Press Release Portals',
      'SSO & SAML Security Authentication',
      'Compliance with GDPR, CCPA & WCAG standards',
      'Dedicated Cloud Staging & Production Deployment'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'GraphQL', 'AWS / Vercel Enterprise'],
    benefits: [
      'Reflect enterprise market leader status',
      'Manage global multi-region websites seamlessly',
      'Maintain strict data privacy and security compliance'
    ],
    deliverables: ['Corporate Web Portal', 'i18n Localization Engine', 'Compliance Reports', 'Enterprise Support SLA'],
    faqs: [
      { question: 'Do you offer ongoing corporate support SLAs?', answer: 'Yes, we provide 24/7 priority support SLAs with uptime guarantees and security monitoring.' }
    ]
  },
  {
    id: '20',
    slug: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    category: 'E-commerce',
    shortDesc: 'Full-scale custom digital storefronts engineered for high transaction volume, global payments, and retention.',
    longDesc: 'Transform your e-commerce operations with end-to-end storefront solutions. From product strategy and UI checkout UX to payment gateways, inventory sync, and customer retention tools, we build store systems optimized for maximum GMV.',
    iconName: 'CreditCard',
    image: '/images/services/e-commerce-solutions.jpg',
    popular: true,
    features: [
      'Custom Multi-Vendor & Storefront Development',
      'Global Payment Gateways (Stripe, PayPal, Apple Pay, BNPL)',
      'Automated Order Processing & Shipping API Integration',
      'Customer Loyalty & Referral Program Integrations',
      'Real-Time Sales Analytics & Conversion Funnels'
    ],
    techStack: ['Shopify', 'WooCommerce', 'Next.js Commerce', 'Stripe', 'Node.js'],
    benefits: [
      'Scale sales globally with multi-currency support',
      'Minimize cart abandonment with 1-click checkout flows',
      'Manage inventory seamlessly across sales channels'
    ],
    deliverables: ['E-commerce Platform Build', 'Payment & Shipping Integration', 'Product Data Import', 'Launch Checklist'],
    faqs: [
      { question: 'Which e-commerce engine do you recommend?', answer: 'We recommend Shopify for rapid scale and ease of operation, or Headless Next.js Commerce for ultimate custom UI flexibility.' }
    ]
  },
  {
    id: '21',
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    category: 'Infrastructure & API',
    shortDesc: 'Proactive 24/7 website upkeep, security monitoring, plugin updates, backups, and performance tweaks.',
    longDesc: 'Protect your digital investment. Our ongoing website maintenance packages ensure your web platforms remain secure, up-to-date, fast, and protected against vulnerabilities or unexpected downtime.',
    iconName: 'ShieldCheck',
    image: '/images/services/website-maintenance.svg',
    features: [
      'Weekly Core, Theme & Plugin Software Updates',
      'Real-Time Malware Scanning & Web Firewall Monitoring',
      'Daily Automated Offsite Database & File Backups',
      'Uptime Monitoring & 15-Minute Incident Response',
      'Monthly Content Updates & Performance Tweak Credits'
    ],
    techStack: ['Cloudflare WAF', 'UptimeRobot', 'GitLab CI', 'AWS S3'],
    benefits: [
      'Eliminate website downtime and security breaches',
      'Keep your platform running at peak speed 365 days a year',
      'Outsource technical hassles so you can focus on growing your business'
    ],
    deliverables: ['Monthly Health & Uptime Report', 'Offsite Backups', 'Security Audit', 'Priority Technical Support'],
    faqs: [
      { question: 'What happens if our site goes down?', answer: 'Our 24/7 automated monitoring triggers an instant alert, and our engineering team begins resolution within 15 minutes.' }
    ]
  },
  {
    id: '22',
    slug: 'hosting-server-management',
    title: 'Hosting & Server Management',
    category: 'Infrastructure & API',
    shortDesc: 'Cloud server infrastructure setup, Docker containerization, Vercel/AWS deployments, and load balancing.',
    longDesc: 'Ensure enterprise-grade reliability and lightning performance with custom cloud architecture. We deploy and manage dedicated cloud servers, Kubernetes clusters, Docker instances, and edge CDN deployments.',
    iconName: 'HardDrive',
    image: '/images/services/hosting-server-management.svg',
    features: [
      'AWS / GCP / Vercel Cloud Server Infrastructure Architecture',
      'Docker Containerization & Kubernetes Setup',
      'Nginx / Caddy Reverse Proxy & Load Balancer Tuning',
      'Automated SSL Certificate & DNS Routing Management',
      'CI/CD Deployment Pipeline Configuration'
    ],
    techStack: ['Docker', 'AWS', 'Vercel', 'Nginx', 'GitHub Actions', 'Terraform'],
    benefits: [
      'Achieve 99.99% infrastructure uptime availability',
      'Automatically scale compute resources during traffic spikes',
      'Lower cloud hosting bills with optimized server sizing'
    ],
    deliverables: ['Cloud Server Architecture', 'Docker Setup', 'CI/CD Pipelines', 'Server Runbook'],
    faqs: [
      { question: 'Do you manage AWS infrastructure for client web apps?', answer: 'Yes, we design, deploy, and manage secure AWS, Google Cloud, DigitalOcean, and Vercel cloud environments.' }
    ]
  },
  {
    id: '24',
    slug: 'crm-integrations',
    title: 'CRM Integrations',
    category: 'Infrastructure & API',
    shortDesc: 'Bi-directional synchronization between web platforms and CRMs (HubSpot, Salesforce, Zoho).',
    longDesc: 'Never lose a qualified lead again. We build seamless real-time data integrations between your website, web apps, and enterprise CRM systems like HubSpot, Salesforce, Zoho, and Pipedrive.',
    iconName: 'Database',
    image: '/images/services/crm-integrations.svg',
    features: [
      'HubSpot, Salesforce & Zoho API Integrations',
      'Real-Time Lead Scoring & Contact Data Sync',
      'Custom Webhook Processors & Middleware',
      'Automated Email & Pipeline Trigger Sequences',
      'Data Deduplication & Error Logging Systems'
    ],
    techStack: ['HubSpot API', 'Salesforce REST API', 'Node.js', 'n8n', 'Zapier Platform'],
    benefits: [
      'Eliminate manual lead data entry across systems',
      'Trigger instant sales outreach when a high-value lead submits a form',
      'Maintain unified contact records across marketing and sales'
    ],
    deliverables: ['CRM Middleware Integration', 'Lead Routing Rules', 'Sync Monitor Dashboard', 'Integration Docs'],
    faqs: [
      { question: 'Which CRMs do you integrate with?', answer: 'We support all major platforms: Salesforce, HubSpot, Zoho, Pipedrive, ActiveCampaign, and custom database backends.' }
    ]
  }
];
