export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: 'Engineering' | 'Design' | 'AI & Data' | 'Product & Growth';
  location: 'Remote (Global)' | 'Hybrid (San Francisco, CA)' | 'Hybrid (London, UK)';
  type: 'Full-Time' | 'Contract';
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const CAREERS_DATA: JobPosting[] = [
  {
    id: '1',
    slug: 'senior-full-stack-nextjs-engineer',
    title: 'Senior Full-Stack Next.js Engineer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experience: '5+ Years',
    summary: 'Lead the architecture of enterprise web applications built with Next.js 15, React 19, TypeScript, Node.js, and MongoDB.',
    responsibilities: [
      'Architect resilient App Router microservices and frontend platforms',
      'Optimize Web Vitals, server components, and edge rendering pipelines',
      'Collaborate with UI/UX designers to translate Figma tokens into clean code',
      'Mentor junior engineers and maintain high code quality standards'
    ],
    requirements: [
      '5+ years professional experience with React, TypeScript, and Node.js',
      'Deep mastery of Next.js App Router, SSR, SSG, and Vercel edge runtime',
      'Strong experience with Tailwind CSS, Framer Motion, and state management',
      'Familiarity with MongoDB, PostgreSQL, and GraphQL APIs'
    ],
    benefits: [
      'Competitive Salary + Equity Stock Options',
      '100% Remote Work Flexibility with Home Office Setup Stipend',
      'Unlimited Paid Time Off (PTO) & Health Insurance',
      'Annual Learning & Conference Budget'
    ]
  },
  {
    id: '2',
    slug: 'principal-ai-automation-engineer',
    title: 'Principal AI & Automation Engineer',
    department: 'AI & Data',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Design autonomous AI agents, retrieval-augmented generation (RAG) pipelines, and enterprise automation integrations.',
    responsibilities: [
      'Build custom LLM workflows using Python, LangChain, and OpenAI / Anthropic APIs',
      'Integrate vector databases (Pinecone, Weaviate) for enterprise RAG knowledge bases',
      'Connect AI pipelines to client CRMs, databases, and REST API gateways',
      'Conduct evaluations to ensure 99.9% accuracy and zero hallucinated outputs'
    ],
    requirements: [
      '4+ years experience building AI applications or machine learning pipelines',
      'Proficiency in Python, Node.js, vector databases, and prompt engineering',
      'Experience with n8n, Make, or custom workflow automation scripts'
    ],
    benefits: [
      'Top 5% Global Tech Compensation Package',
      'Full Equipment Stipend (M3 Max MacBook Pro + 4K Display)',
      'Flexible Hours & Global Team Retreats'
    ]
  },
  {
    id: '3',
    slug: 'lead-ui-ux-motion-designer',
    title: 'Lead UI/UX & Motion Designer',
    department: 'Design',
    location: 'Hybrid (San Francisco, CA)',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Craft high-converting digital product interfaces, micro-interaction motion specs, and design system libraries in Figma.',
    responsibilities: [
      'Design futuristic, high-converting web and mobile user interfaces in Figma',
      'Create motion design specs and spring physics prototypes in Rive / Framer',
      'Develop scalable design systems and token libraries for engineering handoff'
    ],
    requirements: [
      '4+ years experience designing web applications, SaaS dashboards, or digital agency work',
      'Mastery of Figma (auto-layouts, variants, tokens) and Framer Motion prototyping',
      'Strong understanding of HTML/CSS constraints and responsive grid layouts'
    ],
    benefits: [
      'San Francisco Competitive Salary + Equity',
      'Premium Health, Vision & Dental Coverage',
      'Wellness & Gym Membership Stipend'
    ]
  }
];
