import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTASection from '@/components/sections/ContactCTASection';

export const metadata: Metadata = {
  title: 'Our Process | Engineering & Delivery Workflow | VOX Digital',
  description: 'Learn about VOX Digital Agency 6-step engineering methodology: discovery, Figma UX design, Next.js code, QA, edge launch, and scale.',
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Our Process' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Engineering & <span className="text-gradient-vox">Delivery Methodology</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            How we transform complex project specifications into reliable, enterprise-grade digital systems.
          </p>
        </div>
      </div>

      <ProcessTimeline />
      <ContactCTASection />
    </div>
  );
}
