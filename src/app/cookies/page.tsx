import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cookies Policy | VOX Digital',
  description: 'VOX Digital Cookies Policy explaining telemetry and performance cookies.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Cookies Policy' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-white uppercase tracking-tight">Cookies Policy</h1>
          <p className="text-xs text-[#7C7296] font-mono">Last Updated: July 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
        <section className="space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white tracking-tight">1. How We Use Cookies</h2>
          <p>
            VOX Digital uses essential session cookies to remember theme preferences and secure form telemetry. We do not use intrusive cross-site tracking scripts.
          </p>
        </section>
      </div>
    </div>
  );
}
