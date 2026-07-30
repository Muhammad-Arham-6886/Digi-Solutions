'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowUpRight, Sparkles, Code2, ShieldCheck, Zap, LineChart, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import GlassCard from '@/components/ui/GlassCard';
import HeroDashboard from './HeroDashboard';
import LightDotsCanvas from './LightDotsCanvas';

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
          '.hero-visual-card',
          { opacity: 0, scale: 0.92, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          '-=0.8'
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
      {/* Floating Ambient Light Dots Canvas */}
      <LightDotsCanvas />

      {/* Sleek Ambient Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8069BF]/15 rounded-full blur-[170px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#C9A74D]/12 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left">
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

            {/* Display Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.08] uppercase"
            >
              Engineering <br className="hidden sm:block" />
              <span className="text-gradient-vox">High-Performance</span> <br className="hidden sm:block" />
              <span className="text-gradient-gold">Digital Platforms.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtext mt-6 text-base sm:text-lg text-[#7C7296] max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              VOX Digital engineers enterprise Next.js App Router applications, custom GSAP scroll motion, autonomous AI agents, and technical SEO rank dominance for visionary brands.
            </p>

            {/* CTA Action Buttons */}
            <div className="hero-ctas mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
          </div>

          {/* Right Column: Continuously Animated Live Agency Dashboard */}
          <div className="lg:col-span-6 hero-visual-card">
            <HeroDashboard />
          </div>

        </div>

        {/* Metric Cards Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
