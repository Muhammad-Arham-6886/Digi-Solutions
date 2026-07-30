'use client';

import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import { Search, Figma, Code, ShieldCheck, Rocket, RefreshCw } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: '[ 01 ]',
      title: 'Discovery & Architecture Scoping',
      desc: 'We map business objectives, user journeys, technical constraints, and schema data models before writing a single line of code.',
      icon: Search,
    },
    {
      num: '[ 02 ]',
      title: 'Figma UI/UX & GSAP Motion Specs',
      desc: 'Interactive high-fidelity prototypes, design system tokens, and spring physics spec sheets built for seamless developer handoff.',
      icon: Figma,
    },
    {
      num: '[ 03 ]',
      title: 'Next.js & AI Backend Engineering',
      desc: 'Clean, type-safe Next.js App Router code, custom REST/GraphQL APIs, vector search indexes, and server components.',
      icon: Code,
    },
    {
      num: '[ 04 ]',
      title: 'QA, Security & Speed Tuning',
      desc: 'Rigorous cross-browser testing, penetration security checks, and sub-second asset performance tuning for 95+ Lighthouse scores.',
      icon: ShieldCheck,
    },
    {
      num: '[ 05 ]',
      title: 'Staging Approval & Edge Launch',
      desc: 'Zero-downtime deployment pipelines pushing to Vercel/AWS Edge CDN with automated DNS routing and SSL encryption.',
      icon: Rocket,
    },
    {
      num: '[ 06 ]',
      title: 'Scale, SLA Maintenance & Optimization',
      desc: 'Ongoing monthly feature iterations, automated daily backups, 24/7 uptime monitoring, and proactive rank growth.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-28 bg-[#121118] text-white border-t border-[#8069BF]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8069BF] font-bold">[ ENGINEERING WORKFLOW ]</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            VOX 6-Step <span className="text-gradient-vox">Delivery Timeline</span>
          </h2>
          <p className="text-[#7C7296] text-sm sm:text-base font-light">
            From initial strategy scoping to global edge deployment and ongoing scale, our agile engineering process guarantees predictable milestone execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <GlassCard key={idx} className="relative p-8 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-[#8069BF]/20">
                  <span className="text-xl font-heading font-extrabold text-[#8069BF] font-mono">
                    {step.num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#2C273F] border border-[#8069BF]/30 text-[#C9A74D] flex items-center justify-center shadow-glow-vox">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                </div>
                <div className="space-y-2.5 pt-2">
                  <h3 className="text-xl font-heading font-extrabold text-white leading-tight">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
