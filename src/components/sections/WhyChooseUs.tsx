'use client';

import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import { Cpu, Gauge, Lock, Layers, Rocket, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      num: '[ 01 ]',
      icon: Gauge,
      title: 'Lighthouse 95+ Core Web Vitals Guarantee',
      description: 'We build with sub-second page load times, optimized server components, and zero cumulative layout shift (CLS).',
      color: 'text-[#C9A74D] bg-[#C9A74D]/15 border-[#C9A74D]/30',
    },
    {
      num: '[ 02 ]',
      icon: Cpu,
      title: 'GSAP Smooth Motion & Physics UI',
      description: 'Engage visitors with spring physics, magnetic button interactions, and GSAP scroll timelines built for ultra-high conversion.',
      color: 'text-[#8069BF] bg-[#8069BF]/15 border-[#8069BF]/30',
    },
    {
      num: '[ 03 ]',
      icon: Layers,
      title: 'Next.js 15 & AI Agent Backend',
      description: 'Built with React 19, TypeScript, vector indexes, and custom AI agents that automate customer workflows 24/7.',
      color: 'text-[#8069BF] bg-[#8069BF]/15 border-[#8069BF]/30',
    },
    {
      num: '[ 04 ]',
      icon: Lock,
      title: '100% IP Ownership & Bank-Grade Security',
      description: 'Complete source code ownership upon release, backed by strict security policies and SOC2 compliance readiness.',
      color: 'text-[#C9A74D] bg-[#C9A74D]/15 border-[#C9A74D]/30',
    },
    {
      num: '[ 05 ]',
      icon: Rocket,
      title: 'Technical SEO Rank Supremacy',
      description: 'Semantically engineered HTML5 code structure with full JSON-LD schema markup to dominate search queries.',
      color: 'text-[#8069BF] bg-[#8069BF]/15 border-[#8069BF]/30',
    },
    {
      num: '[ 06 ]',
      icon: ShieldCheck,
      title: '24/7 Dedicated Developer SLAs',
      description: 'Never worry about technical debt. Our engineering team provides continuous updates, backups, and 15-min uptime SLAs.',
      color: 'text-[#7C7296] bg-[#7C7296]/15 border-[#7C7296]/30',
    },
  ];

  return (
    <section className="py-28 bg-[#121118] text-white border-t border-[#8069BF]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8069BF] font-bold">[ WHY PARTNER WITH VOX ]</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Engineering Precision Meets <span className="text-gradient-gold">Creative Motion</span>
          </h2>
          <p className="text-[#7C7296] text-sm sm:text-base font-light">
            We don’t use generic templates or bloated page builders. Every platform engineered by VOX Digital is built from the ground up to outperform competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => {
            const IconComponent = p.icon;
            return (
              <GlassCard key={i} className="flex flex-col justify-between p-8 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl">
                <div className="space-y-6">
                  {/* Top Row: Number Tag & Icon Badge */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#8069BF]/20">
                    <span className="font-mono text-xs font-bold text-[#D8CEF6]">{p.num}</span>
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${p.color} shadow-glow-vox`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Heading & Description with Ample Spacing */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-2xl font-heading font-extrabold text-white leading-tight tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {p.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
