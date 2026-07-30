export interface PricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  idealFor: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 1499,
    priceYearly: 1199,
    description: 'Perfect for startups & SMBs establishing a dominant digital presence with essential web infrastructure.',
    features: [
      'Custom 5-Page Next.js / React Website',
      'Mobile Responsive & Fast Load Times',
      'Basic On-Page SEO & Schema Setup',
      'Contact Form & Lead Capture',
      'CMS Admin Panel Integration',
      'Standard 30-Day Support SLA'
    ],
    ctaText: 'Launch Starter Project',
    idealFor: 'Early-stage startups & local businesses'
  },
  {
    id: 'business',
    name: 'Business',
    priceMonthly: 3499,
    priceYearly: 2899,
    description: 'Designed for scaling companies requiring custom CMS capabilities, full SEO setups, and high-conversion UX.',
    features: [
      'Up to 12 Custom Responsive Pages',
      'Advanced On-Page & Technical SEO',
      'Figma Custom UI/UX Design System',
      'Dynamic Blog & Content Management Engine',
      'Speed Optimization (95+ Lighthouse Guarantee)',
      'HubSpot / Mailchimp API Integration',
      '90-Day Post-Launch Warranty'
    ],
    ctaText: 'Scale Business Platform',
    idealFor: 'Growing SMBs & B2B service firms'
  },
  {
    id: 'professional',
    name: 'Professional',
    priceMonthly: 6999,
    priceYearly: 5799,
    popular: true,
    description: 'Our most popular plan for high-growth brands needing custom web apps, e-commerce, and automation.',
    features: [
      'Full Custom Web App / E-commerce Platform',
      'Unlimited Dynamic Page Sub-Systems',
      'Custom AI Chat Agent or Automation Workflow',
      'Comprehensive Technical SEO & Schema Suite',
      'Custom Micro-Animations & Motion Design',
      'CRM, Payment Gateway & ERP Integrations',
      'Priority 24/7 Dedicated Developer Support'
    ],
    ctaText: 'Build Professional Solution',
    idealFor: 'Scaleups & active e-commerce brands'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 12999,
    priceYearly: 10499,
    description: 'Enterprise architecture for global brands requiring multi-region deployment, SSO security, and strict SLAs.',
    features: [
      'Headless Multi-Region Platform (i18n)',
      'Custom Microservices & REST/GraphQL API Engine',
      'Autonomous Enterprise AI & RAG Agents',
      'Dedicated Cloud Server Architecture (AWS/Vercel)',
      'SOC2 / GDPR / CCPA Security Compliance Audits',
      '15-Minute Uptime SLA Guarantee',
      'Dedicated Account Director & Lead Engineer'
    ],
    ctaText: 'Engage Enterprise Team',
    idealFor: 'Global enterprises & mid-market firms'
  },
  {
    id: 'custom',
    name: 'Custom Solution',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Tailored scoped engagements, specialized software development, legacy system migrations, and dedicated teams.',
    features: [
      'Fully Scoped Custom Milestone Architecture',
      'Dedicated Full-Stack Engineering Squad',
      'Custom AI & Machine Learning Pipeline',
      'Legacy Database & Infrastructure Migration',
      'Flexible Monthly Retainer or Fixed-Bid'
    ],
    ctaText: 'Request Custom Quote',
    idealFor: 'Unique software products & complex migrations'
  }
];
