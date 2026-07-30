import React from 'react';
import { Metadata } from 'next';
import { INDUSTRIES_DATA } from '@/data/industriesData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactCTASection from '@/components/sections/ContactCTASection';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve | Enterprise Solutions',
  description: 'Specialized digital solutions for Fintech, E-commerce, Healthcare, and SaaS platforms.',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Industries We Serve' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Industries We <span className="text-gradient-vox">Transform</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            Deep domain expertise tailored to regulatory, security, and performance standards across high-growth verticals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <GlassCard key={ind.id} hoverGlow={false} className="p-8 flex flex-col justify-between border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl">
              <div className="space-y-4">
                {/* Top Category Badge & Title */}
                <div>
                  <span className="text-xs font-mono text-[#D8CEF6] uppercase tracking-widest px-3 py-1 bg-[#8069BF]/30 border border-[#8069BF]/50 rounded-md inline-block mb-3">
                    {ind.name}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-snug">
                    {ind.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {ind.description}
                </p>

                {/* Divider Line & Key Solutions */}
                <div className="pt-3 border-t border-[#8069BF]/20 space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#D8CEF6] uppercase tracking-wider">Key Solutions:</h4>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {ind.keySolutions.map((sol, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#8069BF] flex-shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Case Study Highlight */}
              <div className="mt-6 pt-4 border-t border-[#8069BF]/20 text-xs text-[#C9A74D] font-mono font-bold">
                Highlight: {ind.caseStudyHighlight}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <ContactCTASection />
    </div>
  );
}
