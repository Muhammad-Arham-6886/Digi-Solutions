export interface Industry {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  summary: string;
  description: string;
  keySolutions: string[];
  caseStudyHighlight: string;
}

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: '1',
    slug: 'fintech-financial-services',
    name: 'Fintech & Financial Services',
    iconName: 'DollarSign',
    summary: 'High-security financial dashboards, micro-transaction processing, and trading platform architectures.',
    description: 'We build ultra-secure, ultra-fast fintech applications equipped with bank-grade encryption, real-time WebSocket data feeds, sub-50ms trading execution, and regulatory compliance features.',
    keySolutions: [
      'Real-Time Trading & Portfolio Dashboards',
      'Bank-Grade Auth (OAuth2, SAML, Biometrics)',
      'High-Concurrency Microservices',
      'Automated Financial Reporting APIs'
    ],
    caseStudyHighlight: 'Nexus Financial - Reduced latency by 95% and handled $1.2B in volume.'
  },
  {
    id: '2',
    slug: 'ecommerce-retail',
    name: 'E-commerce & Luxury Retail',
    iconName: 'ShoppingBag',
    summary: 'Headless storefronts, custom 3D configurators, and 1-click global payment checkout engines.',
    description: 'Empower retail brands to deliver bespoke shopping experiences. We engineer headless storefronts that load instantly, boost Average Order Value (AOV), and scale effortlessly during Black Friday peak spikes.',
    keySolutions: [
      'Headless Shopify Plus & WooCommerce Builds',
      'Interactive 3D Product Configurators',
      'Global Multi-Currency Checkout Systems',
      'AI Product Recommendation Engines'
    ],
    caseStudyHighlight: 'Aura Luxury - Increased mobile conversion by +3.8% and generated $4.8M.'
  },
  {
    id: '3',
    slug: 'healthcare-biotech',
    name: 'Healthcare & Life Sciences',
    iconName: 'Activity',
    summary: 'HIPAA-compliant web portals, patient booking platforms, and clinical data management tools.',
    description: 'Deliver patient-first digital experiences while adhering to strict HIPAA and data security standards. We design accessible, intuitive healthcare applications and telemetry portals.',
    keySolutions: [
      'HIPAA-Compliant Web Applications',
      'Telehealth & Patient Appointment Schedulers',
      'Medical EHR API Data Integrations',
      'Accessible WCAG AAA Interface Designs'
    ],
    caseStudyHighlight: 'MediCare Portal - Streamlined 45,000 monthly patient appointments seamlessly.'
  },
  {
    id: '4',
    slug: 'saas-software',
    name: 'SaaS & Enterprise Technology',
    iconName: 'Cloud',
    summary: 'Multi-tenant SaaS architectures, customer portals, billing integrations, and analytics dashboards.',
    description: 'From seed-stage startups to Series C scaleups, we design and engineer full-stack SaaS platforms with role-based access controls, Stripe subscription billing, and interactive data visualization.',
    keySolutions: [
      'Multi-Tenant SaaS Web Applications',
      'Stripe & Chargebee Billing Engine Integrations',
      'Interactive Analytics & Charting Dashboards',
      'High-Converting Marketing & Landing Systems'
    ],
    caseStudyHighlight: 'Verve Technologies - Rebranded SaaS identity and drove a $24M Series B round.'
  }
];
