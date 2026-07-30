export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  project: string;
  metrics: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Nexus Global Financial',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Vertical Forge completely transformed our web platform. Our API latency dropped from 850ms to 45ms, and our users were blown away by the new high-speed interface. Their technical execution is truly enterprise-grade.',
    project: 'Fintech Dashboard Re-engineering',
    metrics: '45ms API Latency | +142% Retention'
  },
  {
    id: '2',
    name: 'Sophia Laurent',
    role: 'Head of Global E-commerce',
    company: 'Aura Haute Couture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The headless Shopify storefront built by Vertical Forge delivered a 3.8% bump in mobile conversion within weeks. Their attention to luxury design micro-interactions while maintaining sub-second speeds is unmatched.',
    project: 'Headless Shopify 2.0 Storefront',
    metrics: '+3.8% Conversion | 0.6s LCP'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'VP of Operations',
    company: 'Pulse Freight Logistics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The AI support agent built by Vertical Forge now handles over 78% of our daily tracking inquiries automatically. Our operational support overhead was slashed by 65% in the first quarter alone.',
    project: 'Autonomous AI Support System',
    metrics: '78% Auto-Resolution | -65% Support Overhead'
  }
];
