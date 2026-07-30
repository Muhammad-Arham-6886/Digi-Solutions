'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowUpRight, Sparkles, Code2, ShieldCheck, Zap, LineChart, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import GlassCard from '@/components/ui/GlassCard';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40, skewY: 1.5 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtext',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-stat-card',
          { opacity: 0, y: 35, stagger: 0.1 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '99.8%', label: 'Delivery Rate', color: 'text-[#8069BF]' },
    { value: '95+', label: 'Lighthouse Score', color: 'text-[#C9A74D]' },
    { value: '$1.2B+', label: 'Client Vol. Scaled', color: 'text-[#8069BF]' },
    { value: '24/7', label: 'Cloud SLA Uptime', color: 'text-[#C9A74D]' },
  ];

  return (
    <section ref={heroRef} className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-28 overflow-hidden bg-[#121118] text-white">
      {/* Sleek Enterprise Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#8069BF]/15 via-[#C9A74D]/10 to-transparent rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[#8069BF]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Architectural Grid Lines Pattern */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0 opacity-40" />

      {/* Floating Enterprise HUD Card 1 (Left Top) */}
      <div className="hidden xl:flex absolute top-32 left-8 p-4 rounded-2xl bg-[#1A1823]/80 border border-[#8069BF]/30 backdrop-blur-xl shadow-2xl items-center gap-3.5 animate-float pointer-events-none z-20">
        <div className="w-10 h-10 rounded-xl bg-[#8069BF]/20 border border-[#8069BF]/30 flex items-center justify-center text-[#8069BF]">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="text-left font-mono">
          <div className="text-xs text-white font-bold tracking-wide">Autonomous AI Agents</div>
          <div className="text-[10px] text-[#7C7296] flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            99.98% Latency SLA
          </div>
        </div>
      </div>

      {/* Floating Enterprise HUD Card 2 (Right Top) */}
      <div className="hidden xl:flex absolute top-36 right-8 p-4 rounded-2xl bg-[#1A1823]/80 border border-[#C9A74D]/30 backdrop-blur-xl shadow-2xl items-center gap-3.5 animate-float [animation-delay:1.5s] pointer-events-none z-20">
        <div className="w-10 h-10 rounded-xl bg-[#C9A74D]/20 border border-[#C9A74D]/30 flex items-center justify-center text-[#C9A74D]">
          <Zap className="w-5 h-5" />
        </div>
        <div className="text-left font-mono">
          <div className="text-xs text-white font-bold tracking-wide">Lighthouse 100/100</div>
          <div className="text-[10px] text-[#C9A74D] font-semibold mt-0.5">Ultra Speed Engine</div>
        </div>
      </div>

      {/* Floating Enterprise HUD Card 3 (Right Bottom) */}
      <div className="hidden xl:flex absolute bottom-32 right-12 p-3.5 rounded-2xl bg-[#1A1823]/80 border border-[#8069BF]/30 backdrop-blur-xl shadow-2xl items-center gap-3 animate-float [animation-delay:2.5s] pointer-events-none z-20">
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-mono text-slate-200 font-semibold tracking-wide">Next.js 15 App Router</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Tagline Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1823] border border-[#8069BF]/30 backdrop-blur-md mb-8 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A74D] animate-ping" />
          <span className="text-[#C9A74D]">[ VOX DIGITAL AGENCY ]</span>
          <span className="text-[#79767D]">•</span>
          <span className="text-slate-300">ENTERPRISE NEXT.JS & AI ENGINEERING</span>
        </div>

        {/* Space Grotesk Display Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-[1.05] max-w-6xl mx-auto uppercase"
        >
          Engineering <br className="hidden sm:block" />
          <span className="text-gradient-vox">High-Performance</span> <br className="hidden sm:block" />
          <span className="text-gradient-gold">Digital Platforms.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtext mt-8 text-base sm:text-xl text-[#7C7296] max-w-3xl mx-auto leading-relaxed font-light">
          VOX Digital engineers enterprise Next.js App Router applications, custom GSAP scroll motion, autonomous AI agents, and technical SEO rank dominance for visionary brands.
        </p>

        {/* CTA Action Buttons */}
        <div className="hero-ctas mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/contact">
            <MagneticButton variant="primary" size="lg" className="w-full sm:w-auto text-base font-bold px-8 py-4 shadow-glow-vox">
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </Link>
          <Link href="/services">
            <MagneticButton variant="glass" size="lg" className="w-full sm:w-auto px-8 py-4">
              <Code2 className="w-5 h-5 text-[#C9A74D]" />
              <span>Explore Capabilities</span>
            </MagneticButton>
          </Link>
        </div>

        {/* Metric Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <GlassCard key={idx} hoverGlow={true} className="hero-stat-card py-6 px-4 text-center border-[#8069BF]/20 bg-[#1A1823]/80">
              <div className={`text-3xl sm:text-4xl font-heading font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-[#7C7296] mt-1 font-mono uppercase tracking-wider">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
