'use client';

import React from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { Gauge, TrendingUp, Search, ArrowRight } from 'lucide-react';

export default function SeoPerformanceSection() {
  const lighthouseScores = [
    { label: 'Performance', score: '99', color: 'text-emerald-400' },
    { label: 'Accessibility', score: '100', color: 'text-emerald-400' },
    { label: 'Best Practices', score: '100', color: 'text-emerald-400' },
    { label: 'SEO', score: '100', color: 'text-emerald-400' },
  ];

  return (
    <section className="py-28 bg-[#050508] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Performance Card */}
          <GlassCard hoverGlow={false} className="border-white/10 bg-[#0A0C14] p-8 space-y-6 shadow-glass-eux">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-emerald-400" />
                <span className="font-heading font-bold text-white text-lg">Google PageSpeed Insights</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30 font-bold uppercase">
                PASSED CORE WEB VITALS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
              {lighthouseScores.map((s, i) => (
                <div key={i} className="p-4 bg-[#050508] rounded-xl border border-white/10 space-y-1">
                  <div className={`text-3xl font-heading font-extrabold ${s.color}`}>{s.score}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
              <div className="flex justify-between">
                <span>First Contentful Paint (FCP):</span>
                <span className="text-emerald-400 font-bold">0.3s</span>
              </div>
              <div className="flex justify-between">
                <span>Largest Contentful Paint (LCP):</span>
                <span className="text-emerald-400 font-bold">0.6s</span>
              </div>
              <div className="flex justify-between">
                <span>Cumulative Layout Shift (CLS):</span>
                <span className="text-emerald-400 font-bold">0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Interaction to Next Paint (INP):</span>
                <span className="text-emerald-400 font-bold">12ms</span>
              </div>
            </div>
          </GlassCard>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E111D] border border-white/10 text-xs font-mono font-semibold text-emerald-300">
              <span>[ ORGANIC SEARCH DOMINANCE ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight">
              Speed & Technical <span className="text-gradient-indigo">SEO Supremacy</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Google ranks websites based on user experience and technical precision. VOX Digital builds clean semantic code architectures infused with JSON-LD schema tags to place your brand at the top of search queries.
            </p>

            <div className="space-y-4 pt-2 font-mono text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#0E111D] border border-white/10 rounded-lg text-cyan-400 mt-0.5">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Full JSON-LD Schema Architecture</h4>
                  <p className="text-slate-400 font-light pt-0.5">Organization, Service, FAQ, Breadcrumb, and Article schemas for rich snippet results.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#0E111D] border border-white/10 rounded-lg text-indigo-400 mt-0.5">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Sub-Second Page Speed Engineering</h4>
                  <p className="text-slate-400 font-light pt-0.5">Dynamic image compression, edge caching, and server components to eliminate bounce rates.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/services/seo-optimization">
                <MagneticButton variant="glass" size="md" className="border-white/10 font-bold">
                  <span>Explore Technical SEO</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
