import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ContactCTASection from '@/components/sections/ContactCTASection';

export const metadata: Metadata = {
  title: 'Flagship Blueprints & Architecture | VOX Digital Agency',
  description: 'Explore VOX Digital production blueprints: Next.js App Router platforms, AI automation stacks, and high-impact GSAP motion systems.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-12 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Flagship Blueprints' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
            Enterprise Solution <span className="text-gradient-gold">Blueprints</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed">
            Discover the production standards, performance SLAs, and AI workstream architectures engineered into every platform built by VOX Digital.
          </p>
        </div>
      </div>

      <FeaturedProjects />
      <ContactCTASection />
    </div>
  );
}
