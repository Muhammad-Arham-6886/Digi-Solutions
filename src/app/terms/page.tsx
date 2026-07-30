import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | VOX Digital',
  description: 'VOX Digital Terms and Conditions for software engineering and agency retainers.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-white uppercase tracking-tight">Terms of Service</h1>
          <p className="text-xs text-[#7C7296] font-mono">Last Updated: July 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
        <section className="space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white tracking-tight">1. Scope of Agreement</h2>
          <p>
            These terms govern digital software development, UI design, AI automation, and technical SEO retainer services provided by VOX Digital Agency.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white tracking-tight">2. Milestone Execution & Deliverables</h2>
          <p>
            Project milestones, acceptance criteria, and technical specifications are explicitly defined in each client Statement of Work (SOW). Source code ownership transfers upon completion of milestone payments.
          </p>
        </section>
      </div>
    </div>
  );
}
