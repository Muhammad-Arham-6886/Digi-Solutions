'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Activity, Zap, TrendingUp, ShieldCheck, Cpu, Code2, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'code' | 'ai'>('analytics');
  const [metricValue, setMetricValue] = useState(99.8);
  const [termLine, setTermLine] = useState(0);

  const codeSnippets = [
    'const app = createNextApp({ router: "app", turbopack: true });',
    'await gsap.timeline().to(".hero", { duration: 1.2, opacity: 1 });',
    'const aiAgent = new VoxAutonomousAgent({ model: "gemini-2.5" });',
    'return <Platform seoScore={100} speed="42ms" status="Optimal" />;',
  ];

  // Continuous typing effect for the code preview
  useEffect(() => {
    const interval = setInterval(() => {
      setTermLine((prev) => (prev + 1) % codeSnippets.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  // Subtle fluctuation for live metric
  useEffect(() => {
    const interval = setInterval(() => {
      setMetricValue(Number((99.7 + Math.random() * 0.25).toFixed(1)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8069BF]/40 via-[#C9A74D]/30 to-[#8069BF]/40 rounded-2xl blur-xl opacity-75 animate-pulse-glow" />

      {/* Main Dashboard Window Container */}
      <div className="relative rounded-2xl bg-[#121118]/95 border border-[#8069BF]/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
        
        {/* Window Top Bar Chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1A1823] border-b border-[#8069BF]/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
          </div>

          {/* URL Search Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#121118] border border-[#8069BF]/20 text-[11px] font-mono text-slate-300">
            <Globe className="w-3 h-3 text-[#C9A74D] animate-spin-slow" />
            <span>voxdigital.agency/live-engine</span>
          </div>

          {/* Live Status Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Tab Controls Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-[#8069BF]/15 font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-[#8069BF]/25 text-white border border-[#8069BF]/40'
                  : 'text-[#7C7296] hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-[#C9A74D]" />
              <span>Engine Metrics</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'code'
                  ? 'bg-[#8069BF]/25 text-white border border-[#8069BF]/40'
                  : 'text-[#7C7296] hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-[#8069BF]" />
              <span>Next.js 15 Stream</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#C9A74D] bg-[#C9A74D]/10 px-2.5 py-1 rounded-md border border-[#C9A74D]/20">
            <Zap className="w-3 h-3" />
            <span>42ms SLA</span>
          </div>
        </div>

        {/* Dashboard Content Body */}
        <div className="p-5 space-y-4 min-h-[310px] flex flex-col justify-between">
          
          {activeTab === 'analytics' ? (
            <>
              {/* Top Stats Cards Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#1A1823]/80 border border-[#8069BF]/20">
                  <div className="text-[10px] font-mono text-[#7C7296] uppercase tracking-wider">PageSpeed</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-emerald-400 mt-1 flex items-baseline gap-1">
                    <span>100</span>
                    <span className="text-[10px] text-slate-400 font-normal">/100</span>
                  </div>
                  <div className="w-full bg-[#121118] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-400 h-full w-full rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1A1823]/80 border border-[#8069BF]/20">
                  <div className="text-[10px] font-mono text-[#7C7296] uppercase tracking-wider">Conversion</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-[#C9A74D] mt-1 flex items-baseline gap-1">
                    <span>+184%</span>
                  </div>
                  <div className="w-full bg-[#121118] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#C9A74D] h-full w-[85%] rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1A1823]/80 border border-[#8069BF]/20">
                  <div className="text-[10px] font-mono text-[#7C7296] uppercase tracking-wider">SEO Rank</div>
                  <div className="text-xl sm:text-2xl font-bold font-heading text-[#8069BF] mt-1">
                    #1 Top
                  </div>
                  <div className="w-full bg-[#121118] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#8069BF] h-full w-[95%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Continuously Animated SVG Chart */}
              <div className="relative p-4 rounded-xl bg-[#1A1823]/60 border border-[#8069BF]/20">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono text-slate-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Real-time Traffic & Revenue Scalability
                  </span>
                  <span className="font-mono text-[10px] text-[#C9A74D] font-bold">
                    {metricValue}% Uptime
                  </span>
                </div>

                {/* Animated Wave SVG */}
                <div className="h-28 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8069BF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8069BF" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8069BF" />
                        <stop offset="50%" stopColor="#C9A74D" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                    </defs>

                    {/* Background Fill */}
                    <path
                      d="M 0,80 Q 70,20 140,60 T 280,30 T 400,10 L 400,100 L 0,100 Z"
                      fill="url(#chartGrad)"
                    />

                    {/* Pulsing Animated Line */}
                    <path
                      d="M 0,80 Q 70,20 140,60 T 280,30 T 400,10"
                      fill="none"
                      stroke="url(#strokeGrad)"
                      strokeWidth="3"
                      className="animate-pulse"
                    />

                    {/* Live Moving Data Pulse Point */}
                    <circle cx="280" cy="30" r="5" fill="#C9A74D" className="animate-ping" />
                    <circle cx="280" cy="30" r="4" fill="#C9A74D" />
                    <circle cx="400" cy="10" r="4" fill="#34D399" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            /* Code Terminal Tab */
            <div className="p-4 rounded-xl bg-[#0B0A0F] border border-[#8069BF]/25 font-mono text-xs text-slate-300 min-h-[220px] flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#7C7296] border-b border-white/5 pb-2 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-[#8069BF]" />
                  <span>VOX Enterprise Compiler v15.2</span>
                </div>
                <div className="text-emerald-400 text-[11px]">$ npx vox-build --optimize --ai-agents</div>
                <div className="text-slate-400 leading-relaxed font-mono">
                  {codeSnippets.map((snippet, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-500 py-0.5 ${
                        idx === termLine ? 'text-[#C9A74D] font-bold pl-2 border-l-2 border-[#C9A74D]' : 'text-slate-500 opacity-60'
                      }`}
                    >
                      {snippet}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono pt-2 border-t border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Layout Shift • Hydration Optimized in 0.4s</span>
              </div>
            </div>
          )}

          {/* Bottom Live Bar Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#7C7296] pt-1">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#8069BF]" />
              <span>GSAP ScrollTrigger Enabled</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A74D]" />
              <span>Enterprise Grade Security</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Animated Glass Stat Pill Badge #1 (Top Right) */}
      <div className="absolute -top-5 -right-6 z-20 animate-bounce-gentle">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121118]/90 border border-[#C9A74D]/40 backdrop-blur-md shadow-xl text-white font-mono text-xs">
          <Sparkles className="w-4 h-4 text-[#C9A74D] animate-spin-slow" />
          <div>
            <div className="font-bold text-[#C9A74D]">+184% Revenue</div>
            <div className="text-[9px] text-[#7C7296] uppercase">Client Growth</div>
          </div>
        </div>
      </div>

      {/* Floating Animated Glass Stat Pill Badge #2 (Bottom Left) */}
      <div className="absolute -bottom-6 -left-6 z-20 animate-float">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#121118]/90 border border-[#8069BF]/40 backdrop-blur-md shadow-xl text-white font-mono text-xs">
          <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
          <div>
            <div className="font-bold text-white">99.8% PageSpeed</div>
            <div className="text-[9px] text-emerald-400 uppercase">Core Web Vitals</div>
          </div>
        </div>
      </div>

    </div>
  );
}
