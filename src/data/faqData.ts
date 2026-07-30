export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Technical' | 'Pricing' | 'Support';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'What sets VOX Digital apart from conventional web agencies?',
    answer: 'We operate as an engineering powerhouse combined with a boutique design studio. We build custom Next.js, React, and AI-driven platforms with zero reliance on clunky pre-made page builders, ensuring lightning performance, bespoke UI craftsmanship, and top-tier SEO.',
    category: 'General'
  },
  {
    id: '2',
    question: 'How long does a typical digital project take to complete?',
    answer: 'Timeline depends on project scope: custom marketing websites typically take 4-6 weeks, complex custom web apps take 8-12 weeks, and enterprise digital transformations take 12-16 weeks.',
    category: 'Process'
  },
  {
    id: '3',
    question: 'Do you provide full source code ownership upon project completion?',
    answer: 'Yes! Upon final sign-off and milestone release, 100% of intellectual property, design assets, and clean source code belong entirely to your company.',
    category: 'General'
  },
  {
    id: '4',
    question: 'Will our website score 95+ on Google Lighthouse?',
    answer: 'Yes! Performance is fundamental to our engineering process. We optimize asset sizes, code splitting, edge caching, and server components to guarantee 95+ Core Web Vitals performance.',
    category: 'Technical'
  },
  {
    id: '5',
    question: 'Do you offer monthly maintenance and post-launch support?',
    answer: 'Yes, we offer ongoing managed SLA retainers covering 24/7 security monitoring, software updates, automated daily backups, feature iterations, and performance tuning.',
    category: 'Support'
  },
  {
    id: '6',
    question: 'Can you integrate our website with custom CRMs or AI models?',
    answer: 'Absolutely. We specialize in custom REST/GraphQL APIs, webhook pipelines, LLM agent integrations, and bi-directional CRM syncing (HubSpot, Salesforce, Zoho).',
    category: 'Technical'
  }
];
