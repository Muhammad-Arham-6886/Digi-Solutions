import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ContactCTASection from '@/components/sections/ContactCTASection';

export const metadata: Metadata = {
  title: 'Specialized Digital Engineering Capabilities | VOX Digital',
  description: 'Explore specialized digital engineering capabilities offered by VOX Digital: Custom Web Apps, Autonomous AI Agents, SEO Optimization, Shopify E-commerce, and GSAP Motion Design.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Capabilities' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Specialized Digital <span className="text-gradient-vox">Capabilities</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            Tailored digital solutions engineered for sub-second performance, bank-grade security, and measurable ROI. Select any capability to explore detailed features and technology stacks.
          </p>
        </div>
      </div>

      <ServicesOverview />
      <ContactCTASection />
    </div>
  );
}
