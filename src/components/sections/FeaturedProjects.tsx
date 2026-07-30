'use client';

import React from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowUpRight, Cpu, Layers, Zap, Sparkles, Rocket } from 'lucide-react';

export default function FeaturedProjects() {
  const blueprints = [
    {
      id: 'nextjs-enterprise-hub',
      title: 'Enterprise Next.js 15 Platform Hub',
      category: 'FLAGSHIP ARCHITECTURE',
      tag: 'PRODUCTION BLUEPRINT',
      description:
        'High-velocity App Router infrastructure featuring SSG/ISR caching, Tailwind design tokens, server action pipelines, and sub-100ms Core Web Vitals performance.',
      specs: [
        { label: 'Lighthouse Target', value: '98/100' },
        { label: 'Edge Latency', value: '< 45ms' },
        { label: 'SEO Architecture', value: '100% Schema' },
      ],
      icon: Cpu,
    },
    {
      id: 'ai-agent-automation-stack',
      title: 'Autonomous AI Workstream Engine',
      category: 'AI ENGINEERING',
      tag: 'PRODUCTION BLUEPRINT',
      description:
        'Custom RAG vector search knowledge bases (Pinecone), automated CRM lead routing, and autonomous customer support agents built with LangChain & OpenAI.',
      specs: [
        { label: 'Task Automation', value: '85%' },
        { label: 'RAG Retrieval', value: '12ms' },
        { label: 'API Uptime SLA', value: '99.99%' },
      ],
      icon: Zap,
    },
    {
      id: 'gsap-[#8069BF]-motion-system',
      title: 'High-Impact GSAP Motion System',
      category: 'CREATIVE DIRECTION',
      tag: 'PRODUCTION BLUEPRINT',
      description:
        'Silky-smooth spring physics, magnetic button interactions, parallax hero canvas, and custom WebGL background graphics tailored for ultra-high conversion.',
      specs: [
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Physics Engine', value: 'GSAP 3' },
        { label: 'User Retention', value: '+340%' },
      ],
      icon: Layers,
    },
  ];

  return (
    <section className="py-28 bg-[#121118] text-white border-t border-[#8069BF]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A74D]" />
              <span>[ FLAGSHIP BLUEPRINTS & SYSTEMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
              Enterprise Solution <span className="text-gradient-gold">Blueprints</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Explore the architectural standards and production blueprints engineered into every platform built by VOX Digital.
            </p>
          </div>

          <Link href="/book-consultation">
            <MagneticButton variant="primary" size="sm" className="bg-[#8069BF] font-bold shadow-glow-vox">
              <Rocket className="w-4 h-4 text-white" />
              <span>Reserve Project Slot</span>
            </MagneticButton>
          </Link>
        </div>

        {/* 3-Column Architecture Blueprints */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blueprints.map((bp) => {
            const IconComp = bp.icon;
            return (
              <GlassCard key={bp.id} className="h-full flex flex-col justify-between border-[#8069BF]/35 bg-[#1E1B2E] p-8 shadow-xl">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#F3EEFF] uppercase px-3 py-1 bg-[#8069BF]/30 border border-[#8069BF]/60 rounded-md">
                      {bp.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#C9A74D] px-2.5 py-0.5 bg-[#C9A74D]/20 border border-[#C9A74D]/40 rounded">
                      {bp.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2C273F] border border-[#8069BF]/40 text-[#C9A74D] flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-white">
                      {bp.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {bp.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#8069BF]/25 grid grid-cols-3 gap-2 text-center font-mono">
                  {bp.specs.map((s, idx) => (
                    <div key={idx} className="bg-[#262136] p-2.5 rounded-lg border border-[#8069BF]/20">
                      <div className="text-sm font-heading font-extrabold text-[#C9A74D]">{s.value}</div>
                      <div className="text-[9px] text-slate-400 truncate mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Launch Partner Invitation Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#1E1B2E] via-[#28223D] to-[#1E1B2E] border border-[#8069BF]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-vox">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#C9A74D] font-bold uppercase tracking-wider">[ LAUNCH PARTNER OPPORTUNITY ]</span>
            <h4 className="text-2xl font-heading font-extrabold text-white">Be Our Next Featured Case Study</h4>
            <p className="text-sm text-slate-300 max-w-xl font-light">
              We are currently accepting 2 visionary enterprise clients for Q3. Get dedicated senior engineer access and preferential launch timeline SLA.
            </p>
          </div>

          <Link href="/contact" className="flex-shrink-0">
            <MagneticButton variant="primary" size="md" className="px-7 py-3.5 font-bold shadow-glow-vox">
              <span>Apply for Launch Partner Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
