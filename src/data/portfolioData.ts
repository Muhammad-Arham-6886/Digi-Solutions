export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Web Application' | 'E-commerce' | 'AI & Automation' | 'Brand Identity' | 'SEO Strategy';
  summary: string;
  image: string;
  stats: { label: string; value: string }[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  liveUrl?: string;
  year: string;
}

export const PORTFOLIO_DATA: Project[] = [
  {
    id: '1',
    slug: 'nexus-fintech-dashboard',
    title: 'Nexus Enterprise Fintech Engine',
    client: 'Nexus Global Financial',
    category: 'Web Application',
    summary: 'A high-concurrency real-time asset trading dashboard handling $1.2B in weekly transactional volume.',
    image: '/images/portfolio/nexus-fintech-dashboard.jpg',
    stats: [
      { label: 'Transaction Speed', value: '45ms' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'User Retention', value: '+142%' }
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'Redis', 'Tailwind CSS', 'Framer Motion'],
    challenge: 'Nexus was struggling with severe latency on their legacy dashboard, causing transaction drop-offs during high volatility market events.',
    solution: 'We re-architected their entire frontend to Next.js App Router with Server-Sent Events (SSE) and built an optimized Node.js WebSocket caching layer.',
    results: [
      'Reduced average trading API latency from 850ms down to 45ms',
      'Boosted daily active trader retention by 142%',
      'Eliminated interface crashes during peak market volatility'
    ],
    liveUrl: 'https://nexusfintech.demo',
    year: '2025'
  },
  {
    id: '2',
    slug: 'aura-luxury-storefront',
    title: 'Aura Headless Luxury Commerce',
    client: 'Aura Haute Couture',
    category: 'E-commerce',
    summary: 'An ultra-premium headless Shopify Storefront delivering 3D product previews and instant 1-click global checkout.',
    image: '/images/portfolio/aura-luxury-storefront.jpg',
    stats: [
      { label: 'Conversion Rate', value: '+3.8%' },
      { label: 'Average Order Value', value: '$1,450' },
      { label: 'Mobile LCP', value: '0.6s' }
    ],
    technologies: ['Shopify Plus', 'Next.js', 'GraphQL', 'Three.js', 'Tailwind CSS'],
    challenge: 'Aura required a boutique luxury aesthetic without sacrificing e-commerce performance or mobile loading speed.',
    solution: 'Engineered a bespoke Next.js headless storefront powered by the Shopify Storefront API with interactive WebGL 3D model previews.',
    results: [
      'Increased mobile conversion rate by 3.8 percentage points',
      'Lowered Largest Contentful Paint (LCP) from 3.2s down to 0.6s',
      'Generated $4.8M in revenue in the first 90 days post-launch'
    ],
    liveUrl: 'https://aurahautecouture.demo',
    year: '2025'
  },
  {
    id: '3',
    slug: 'pulse-ai-customer-agent',
    title: 'Pulse Autonomous AI Support System',
    client: 'Pulse Logistics & Freight',
    category: 'AI & Automation',
    summary: 'An autonomous multi-lingual AI support pipeline resolving 78% of logistics tracking inquiries without human intervention.',
    image: '/images/portfolio/pulse-ai-customer-agent.jpg',
    stats: [
      { label: 'Automated Resolution', value: '78%' },
      { label: 'Response Time', value: '< 2s' },
      { label: 'Support Cost Cut', value: '-65%' }
    ],
    technologies: ['Python', 'OpenAI GPT-4o', 'LangChain', 'Pinecone Vector DB', 'Node.js'],
    challenge: 'Pulse Logistics was inundated with over 15,000 daily shipment status requests, causing support backlogs of over 18 hours.',
    solution: 'Built a custom RAG (Retrieval-Augmented Generation) AI agent connected directly to their real-time freight tracking database API.',
    results: [
      'Successfully resolved 78% of incoming inquiries instantly',
      'Reduced average support resolution time from 18 hours to 2 seconds',
      'Saved $320,000 annually in support overhead costs'
    ],
    liveUrl: 'https://pulselogistics.demo',
    year: '2024'
  },
  {
    id: '4',
    slug: 'verve-saas-rebrand',
    title: 'Verve Enterprise SaaS Brand Identity',
    client: 'Verve Technologies',
    category: 'Brand Identity',
    summary: 'A complete visual rebranding, motion design framework, and design token library for a Series B SaaS platform.',
    image: '/images/portfolio/verve-saas-rebrand.jpg',
    stats: [
      { label: 'Brand Value Uplift', value: '3x' },
      { label: 'Enterprise Leads', value: '+210%' },
      { label: 'Series B Raised', value: '$24M' }
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Framer', 'Design Tokens'],
    challenge: 'Verve looked like a generic startup despite serving Fortune 500 clients, hurting their sales conversations with enterprise buyers.',
    solution: 'Delivered an ultra-sleek visual identity, futuristic logo mark, comprehensive design system, and responsive web redesign.',
    results: [
      'Elevated sales demo conversion rates by 210% with enterprise accounts',
      'Successfully closed a $24M Series B funding round shortly after rebrand',
      'Established unified brand consistency across web, mobile, and ad assets'
    ],
    liveUrl: 'https://vervesaas.demo',
    year: '2024'
  }
];
