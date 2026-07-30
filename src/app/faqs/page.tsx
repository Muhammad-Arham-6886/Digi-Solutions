import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FaqAccordionSection from '@/components/sections/FaqAccordionSection';
import ContactCTASection from '@/components/sections/ContactCTASection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs)',
  description: 'Find answers to common questions regarding Vertical Forge services, pricing, IP ownership, and technical SLAs.',
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="py-12 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'FAQs' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
            Knowledge Base & <span className="text-gradient-blue">FAQs</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-lg max-w-3xl leading-relaxed">
            Everything you need to know about our engineering standards, source code ownership, and SLAs.
          </p>
        </div>
      </div>

      <FaqAccordionSection />
      <ContactCTASection />
    </div>
  );
}
