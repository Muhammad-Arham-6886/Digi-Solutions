export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Engineering' | 'AI & Automation' | 'SEO Strategy' | 'UI/UX Design' | 'Growth';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: '1',
    slug: 'nextjs-15-app-router-performance-guide',
    title: 'Mastering Next.js 15 App Router: The Ultimate Performance Blueprint',
    excerpt: 'Discover how to leverage Server Components, Edge Middleware, and partial prerendering to achieve flawless sub-second loading speeds.',
    content: `
      <h2>The Shift Towards Edge Rendering</h2>
      <p>Modern web engineering requires a fundamental shift in how we think about rendering pipelines. By combining Next.js 15 Server Components with Vercel Edge Middleware, developers can deliver pre-computed markup directly from the nearest regional point of presence (PoP).</p>
      
      <h3>Key Optimization Strategies:</h3>
      <ul>
        <li><strong>Server Components by Default:</strong> Keep client-side JavaScript bundles minimal by shifting static rendering and heavy computation to the server.</li>
        <li><strong>Optimized Image Pipelines:</strong> Utilize modern AVIF/WebP image formats with explicit width and height aspect ratios to guarantee zero Cumulative Layout Shift (CLS).</li>
        <li><strong>Granular Suspense Boundaries:</strong> Wrap slow asynchronous data fetches inside React Suspense boundaries so critical UI renders instantly.</li>
      </ul>

      <h2>Measuring Core Web Vitals in 2026</h2>
      <p>Google’s Core Web Vitals place strict emphasis on Interaction to Next Paint (INP) alongside LCP and CLS. Eliminating heavy main-thread JavaScript execution is no longer optional—it is essential for ranking in top search placements.</p>
    `,
    category: 'Engineering',
    author: {
      name: 'Alexandre Sterling',
      role: 'Head of Web Architecture',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-07-15',
    readTime: '6 min read',
    tags: ['Next.js', 'React', 'Performance', 'Web Vitals'],
    featured: true,
  },
  {
    id: '2',
    slug: 'building-autonomous-ai-agents-with-rag',
    title: 'Architecting Autonomous AI Agents for Enterprise Workflows',
    excerpt: 'How vector embeddings, pinecone databases, and LLM reasoning pipelines are automating complex enterprise customer operations.',
    content: `
      <h2>The Evolution Beyond Simple Chatbots</h2>
      <p>First-generation chatbots relied on rigid rule trees. Today’s autonomous AI agents use Large Language Models (LLMs) combined with Vector Search (RAG) to dynamically understand context, query internal databases, and execute multi-step API actions autonomously.</p>

      <h3>Core Components of an Enterprise AI Agent:</h3>
      <ol>
        <li><strong>Vector Knowledge Base:</strong> Indexing company documentation, support tickets, and API schemas in vector databases like Pinecone.</li>
        <li><strong>Tool Execution Engine:</strong> Granting agents permissioned access to trigger REST APIs, update CRM records, or query SQL databases.</li>
        <li><strong>Guardrails & Safety Triggers:</strong> Implementing deterministic check steps to ensure 100% data accuracy and prevent hallucinated outputs.</li>
      </ol>
    `,
    category: 'AI & Automation',
    author: {
      name: 'Elena Rostova',
      role: 'Principal AI Engineer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-07-02',
    readTime: '8 min read',
    tags: ['AI', 'Python', 'LangChain', 'Automation'],
    featured: true,
  },
  {
    id: '3',
    slug: 'future-of-ui-ux-design-micro-interactions',
    title: 'The Psychology of Micro-Interactions in Premium Web Design',
    excerpt: 'Explore how magnetic buttons, liquid hover states, and smooth spring physics transform simple websites into unforgettable digital experiences.',
    content: `
      <h2>Why Details Define Modern Brand Authority</h2>
      <p>When a user lands on a digital agency website, their subconscious evaluates credibility within 50 milliseconds. Fluid micro-interactions signal craftsmanship, care, and technological superiority.</p>

      <h3>Best Practices for Motion Design:</h3>
      <ul>
        <li><strong>Spring Physics Over Linear Easing:</strong> Use natural physics-based spring transitions (stiffness: 300, damping: 20) for smooth responsiveness.</li>
        <li><strong>Subtle Cursor Feedback:</strong> Provide immediate visual confirmation when hovering clickable CTAs using subtle scale or glow changes.</li>
        <li><strong>Respect Reduced Motion:</strong> Always query user accessibility settings to honor <code>prefers-reduced-motion</code>.</li>
      </ul>
    `,
    category: 'UI/UX Design',
    author: {
      name: 'Julian Vance',
      role: 'Design Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-06-20',
    readTime: '5 min read',
    tags: ['UI/UX', 'Framer Motion', 'Figma', 'Design Systems'],
  }
];
