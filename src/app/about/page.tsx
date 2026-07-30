import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactCTASection from '@/components/sections/ContactCTASection';
import { ShieldCheck, Zap, Target, Cpu, Sparkles, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | VOX Digital Engineering Agency',
  description: 'Learn about VOX Digital Agency, our engineering standards, Next.js architecture, and AI workstream vision.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Engineering Excellence',
      desc: 'Zero shortcuts. We build bespoke Next.js and AI solutions optimized for sub-second speeds and 95+ Core Web Vitals.',
      icon: Zap,
    },
    {
      title: 'Data-Driven Transparency',
      desc: 'Predictable milestones, full source code IP ownership, and real ROI metrics delivered on every launch.',
      icon: Target,
    },
    {
      title: 'Client-Centric SLA',
      desc: 'Dedicated senior engineering support, 24/7 uptime SLA monitoring, and proactive rank growth retainers.',
      icon: ShieldCheck,
    },
    {
      title: 'Relentless Innovation',
      desc: 'Integrating cutting-edge RAG vector databases, GSAP motion physics, and modern tech stacks into your workflows.',
      icon: Cpu,
    },
  ];

  const stats = [
    { value: '150+', label: 'Global Projects Launched', color: 'text-[#8069BF]' },
    { value: '99.8%', label: 'On-Time SLA Delivery', color: 'text-[#C9A74D]' },
    { value: '$1.2B+', label: 'Client Volume Processed', color: 'text-[#8069BF]' },
    { value: '95+', label: 'Avg Lighthouse Score', color: 'text-[#C9A74D]' },
  ];

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      {/* Header Banner */}
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
            About <span className="text-gradient-vox">VOX Digital</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            We are an elite digital engineering agency blending software architecture, autonomous artificial intelligence, technical SEO, and conversion-focused UI design.
          </p>
        </div>
      </div>

      {/* Main Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A74D]" />
              <span>[ OUR PHILOSOPHY ]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Forging Enterprise Digital Assets for <span className="text-gradient-gold">Global Brands</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              Founded on the belief that modern businesses deserve better than fragile WordPress templates and slow agency handoffs, VOX Digital engineers custom-built digital systems that scale effortlessly.
            </p>

            <p className="text-[#7C7296] text-sm leading-relaxed font-light">
              From Series A scaleups to global enterprise leaders, we build digital infrastructure that accelerates revenue growth, automates complex operational workflows, and establishes market dominance.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#8069BF]/40 shadow-glow-vox bg-slate-900">
              <img src="/images/about/agency-team.jpg" alt="VOX Digital Engineering Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121118] via-transparent to-transparent opacity-60" />
            </div>

            <GlassCard hoverGlow={false} className="p-8 space-y-6 border-[#8069BF]/30 bg-[#1A1823]/90 shadow-glow-vox">
              <div className="grid grid-cols-2 gap-6 text-center">
                {stats.map((s, idx) => (
                  <div key={idx} className="p-5 bg-[#23202E] rounded-xl border border-[#8069BF]/20">
                    <div className={`text-3xl sm:text-4xl font-heading font-extrabold ${s.color}`}>{s.value}</div>
                    <div className="text-xs text-[#7C7296] mt-1 font-mono uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Core Values / Principles */}
        <div className="mt-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8069BF] font-bold">[ CORE PRINCIPLES ]</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">How We Operate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <GlassCard key={i} className="p-8 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#2C273F] border border-[#8069BF]/30 text-[#C9A74D] flex items-center justify-center shadow-glow-vox mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-heading font-extrabold text-white leading-snug">{v.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">{v.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>

      <ContactCTASection />
    </div>
  );
}
