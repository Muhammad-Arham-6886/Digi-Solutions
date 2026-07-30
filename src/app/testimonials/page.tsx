import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';
import ContactCTASection from '@/components/sections/ContactCTASection';

export const metadata: Metadata = {
  title: 'Client Endorsements & Success Stories | VOX Digital',
  description: 'Read reviews and verified performance metrics from enterprise leaders who engineered platforms with VOX Digital.',
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Testimonials' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Client <span className="text-gradient-vox">Success Stories</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            Verified feedback and concrete metric improvements from CTOs, product managers, and e-commerce leaders.
          </p>
        </div>
      </div>

      <TestimonialsSlider />
      <ContactCTASection />
    </div>
  );
}
