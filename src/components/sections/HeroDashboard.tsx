'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Zap, ArrowUpRight, CheckCircle2, AlertTriangle, TrendingUp, Sparkles, RefreshCw } from 'lucide-react';

export default function HeroDashboard() {
  const [isLifted, setIsLifted] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto morph back and forth unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIsLifted((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative w-full max-w-xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow Backdrop */}
      <div
        className={`absolute -inset-1 rounded-2xl blur-xl transition-all duration-700 pointer-events-none ${
          isLifted
            ? 'bg-gradient-to-r from-[#8069BF]/50 via-[#C9A74D]/35 to-[#8069BF]/50 opacity-90 animate-pulse-glow'
            : 'bg-red-500/10 opacity-30'
        }`}
      />

      {/* Main Dashboard Window Container */}
      <div className="relative rounded-2xl bg-[#121118]/95 border border-[#8069BF]/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
        
        {/* Window Top Bar Chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1A1823] border-b border-[#8069BF]/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
          </div>

          {/* Interactive URL Search Bar */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#121118] border border-[#8069BF]/20 text-[11px] font-mono text-slate-300 transition-all duration-500">
            <Globe className={`w-3.5 h-3.5 transition-colors ${isLifted ? 'text-[#C9A74D] animate-spin-slow' : 'text-slate-500'}`} />
            <span className="font-semibold">
              {isLifted ? 'voxdigital.agency/high-performance' : 'legacy-slow-website.com'}
            </span>
          </div>

          {/* Interactive Toggle Control Buttons */}
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <button
              onClick={() => setIsLifted(false)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                !isLifted
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40 font-bold'
                  : 'text-slate-400 hover:text-white bg-slate-800/40'
              }`}
            >
              Legacy
            </button>
            <button
              onClick={() => setIsLifted(true)}
              className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                isLifted
                  ? 'bg-[#8069BF]/30 text-[#C9A74D] border border-[#C9A74D]/50 font-bold shadow-glow-gold'
                  : 'text-slate-400 hover:text-white bg-slate-800/40'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#C9A74D]" />
              VOX Lift
            </button>
          </div>
        </div>

        {/* Live Transformation Canvas Area */}
        <div className="relative p-6 min-h-[340px] flex flex-col justify-between overflow-hidden">
          
          {/* Animated Background Mesh */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              isLifted
                ? 'bg-radial-glow opacity-60'
                : 'bg-none opacity-0'
            }`}
          />

          {/* Status Header Line */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              {isLifted ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-bold">VOX LIFT ACTIVE</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300">Next.js 15 Engine</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                  <span className="text-amber-400 font-bold">UNCONVERTING DATED SITE</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">High Friction</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-400">Status:</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isLifted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {isLifted ? '100/100 Speed' : '38/100 Slow'}
              </span>
            </div>
          </div>

          {/* Morphing Interactive Layout Canvas */}
          <div className="relative z-10 py-4 my-auto space-y-4">
            
            {/* Top Row Blocks */}
            <div className="grid grid-cols-12 gap-3 items-center">
              
              {/* Main Headline Preview Block */}
              <div
                className={`col-span-8 p-4 rounded-xl transition-all duration-700 transform ${
                  isLifted
                    ? 'translate-x-0 rotate-0 bg-gradient-to-r from-[#8069BF]/25 to-[#1A1823] border border-[#8069BF]/40 shadow-lg scale-100'
                    : '-translate-x-3 -rotate-2 bg-[#1C1A24]/70 border border-slate-700/50 opacity-60 scale-95'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-2.5 rounded-full transition-all duration-700 ${isLifted ? 'w-24 bg-[#C9A74D]' : 'w-16 bg-slate-600'}`} />
                  <div className={`h-2.5 rounded-full transition-all duration-700 ${isLifted ? 'w-12 bg-[#8069BF]' : 'w-10 bg-slate-700'}`} />
                </div>
                <div className={`h-2 rounded-full transition-all duration-700 ${isLifted ? 'w-48 bg-slate-300' : 'w-32 bg-slate-700'}`} />
                <div className={`h-2 rounded-full mt-1.5 transition-all duration-700 ${isLifted ? 'w-36 bg-slate-400' : 'w-24 bg-slate-800'}`} />
              </div>

              {/* Speed & Metric Gauge Card */}
              <div
                className={`col-span-4 p-3 rounded-xl transition-all duration-700 transform ${
                  isLifted
                    ? 'translate-y-0 rotate-0 bg-[#1A1823]/90 border border-[#C9A74D]/40 text-[#C9A74D] shadow-glow-gold scale-100'
                    : 'translate-y-2 rotate-3 bg-[#181620]/60 border border-slate-700/40 text-slate-500 opacity-60 scale-95'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {isLifted ? 'Conversion' : 'Bounce Rate'}
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading mt-1 flex items-baseline gap-1">
                  <span>{isLifted ? '+184%' : '68%'}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-700 ${isLifted ? 'text-emerald-400 translate-x-0.5 -translate-y-0.5' : 'text-red-400 rotate-90'}`} />
                </div>
                <div className="w-full bg-[#121118] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isLifted ? 'w-full bg-[#C9A74D]' : 'w-[30%] bg-red-400'
                    }`}
                  />
                </div>
              </div>

            </div>

            {/* Bottom Row Interactive Graph & Feature Cards */}
            <div className="grid grid-cols-12 gap-3 items-center">
              
              {/* Interactive Graph Box */}
              <div
                className={`col-span-7 p-3.5 rounded-xl transition-all duration-700 transform ${
                  isLifted
                    ? 'translate-y-0 rotate-0 bg-[#1A1823]/90 border border-[#8069BF]/30 scale-100'
                    : 'translate-y-3 -rotate-1 bg-[#181620]/60 border border-slate-800 opacity-50 scale-95'
                }`}
              >
                <div className="flex items-center justify-between mb-2 text-[11px] font-mono">
                  <span className={isLifted ? 'text-slate-200 font-bold' : 'text-slate-500'}>
                    {isLifted ? 'Revenue Scalability' : 'Unstable Traffic'}
                  </span>
                  <span className={`text-[10px] ${isLifted ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isLifted ? '42ms SLA' : '4,800ms Load'}
                  </span>
                </div>

                {/* Animated Chart SVG */}
                <div className="h-16 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                    <path
                      d={
                        isLifted
                          ? 'M 0,55 Q 50,10 100,45 T 200,15 T 300,5'
                          : 'M 0,20 Q 50,55 100,25 T 200,60 T 300,55'
                      }
                      fill="none"
                      stroke={isLifted ? '#C9A74D' : '#64748B'}
                      strokeWidth="2.5"
                      className="transition-all duration-700"
                    />
                    {isLifted && (
                      <circle cx="300" cy="5" r="4" fill="#34D399" className="animate-ping" />
                    )}
                  </svg>
                </div>
              </div>

              {/* 3 Feature Pills Stack */}
              <div className="col-span-5 space-y-2">
                <div
                  className={`p-2.5 rounded-lg font-mono text-[11px] flex items-center justify-between transition-all duration-700 ${
                    isLifted
                      ? 'bg-[#8069BF]/20 border border-[#8069BF]/40 text-white translate-x-0'
                      : 'bg-[#181620]/50 border border-slate-800 text-slate-500 translate-x-2'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isLifted ? 'text-[#C9A74D]' : 'text-slate-600'}`} />
                    Next.js App Router
                  </span>
                </div>

                <div
                  className={`p-2.5 rounded-lg font-mono text-[11px] flex items-center justify-between transition-all duration-700 ${
                    isLifted
                      ? 'bg-[#C9A74D]/15 border border-[#C9A74D]/40 text-white translate-x-0'
                      : 'bg-[#181620]/50 border border-slate-800 text-slate-500 translate-x-2'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className={`w-3.5 h-3.5 ${isLifted ? 'text-emerald-400' : 'text-slate-600'}`} />
                    GSAP Scroll Motion
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Footer Callout */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
            <span className="text-slate-400">
              {isLifted ? 'Click toggle above or hover to inspect transformation' : 'Legacy websites lose 68% of visitors in 3 seconds'}
            </span>

            <button
              onClick={() => setIsLifted((prev) => !prev)}
              className="flex items-center gap-1.5 text-[#C9A74D] hover:underline cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Toggle Preview</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
