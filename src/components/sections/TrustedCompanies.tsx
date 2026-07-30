'use client';

import React from 'react';

export default function TrustedCompanies() {
  const partners = [
    'APEX GLOBAL',
    'NEXUS HEALTH',
    'AURA REALTY',
    'FINTECH CORE',
    'CYBERDYN LABS',
    'VELOCITY CAPITAL',
  ];

  return (
    <section className="py-12 bg-[#05060A] border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-8 font-semibold">
          Engineered Digital Architecture for Forward-Thinking Enterprises
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {partners.map((p, i) => (
            <span
              key={i}
              className="text-lg sm:text-xl font-heading font-extrabold tracking-widest text-slate-400 hover:text-cyan-300 transition-colors cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
