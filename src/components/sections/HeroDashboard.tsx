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
      className="relative w-full max-w-xl mx-auto px-1 sm:px-0"
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
        
        {/* Window Top Bar Chrome - Fully Responsive */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A1823] border-b border-[#8069BF]/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
          </div>

          {/* Interactive URL Search Bar */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121118] border border-[#8069BF]/20 text-[10px] sm:text-[11px] font-mono text-slate-300 transition-all duration-500 max-w-[200px] sm:max-w-none truncate">
            <Globe className={`w-3 h-3 flex-shrink-0 transition-colors ${isLifted ? 'text-[#C9A74D] animate-spin-slow' : 'text-slate-500'}`} />
            <span className="font-semibold truncate">
              {isLifted ? 'voxdigital.agency' : 'slow-legacy.com'}
            </span>
          </div>

          {/* Interactive Toggle Control Buttons */}
          <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px]">
            <button
              onClick={() => setIsLifted(false)}
              className={`px-2 py-1 rounded-full transition-all ${
                !isLifted
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40 font-bold'
                  : 'text-slate-400 hover:text-white bg-slate-800/40'
              }`}
            >
              Legacy
            </button>
            <button
              onClick={() => setIsLifted(true)}
              className={`px-2 py-1 rounded-full transition-all flex items-center gap-1 ${
                isLifted
                  ? 'bg-[#8069BF]/30 text-[#C9A74D] border border-[#C9A74D]/50 font-bold shadow-glow-gold'
                  : 'text-slate-400 hover:text-white bg-slate-800/40'
              }`}
            >
              <Sparkles className="w-2.5 h-2.5 text-[#C9A74D]" />
              VOX Lift
            </button>
          </div>
        </div>

        {/* Live Transformation Canvas Area */}
        <div className="relative p-4 sm:p-6 min-h-[320px] flex flex-col justify-between overflow-hidden">
          
          {/* Animated Background Mesh */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              isLifted
                ? 'bg-radial-glow opacity-60'
                : 'bg-none opacity-0'
            }`}
          />

          {/* Status Header Line - Mobile Wrapped */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5 font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 flex-wrap">
              {isLifted ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
                  <span className="text-emerald-400 font-bold text-[10px] sm:text-xs">VOX LIFT ACTIVE</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-slate-300 text-[10px] sm:text-xs hidden sm:inline">Next.js 15 Engine</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-bounce flex-shrink-0" />
                  <span className="text-amber-400 font-bold text-[10px] sm:text-xs">DATED SITE</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-slate-400 text-[10px] sm:text-xs hidden sm:inline">High Friction</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[9px] sm:text-[10px] text-slate-400">Speed:</span>
              <span className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold ${isLifted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {isLifted ? '100/100' : '38/100'}
              </span>
            </div>
          </div>

          {/* Morphing Interactive Layout Canvas */}
          <div className="relative z-10 py-3 my-auto space-y-3">
            
            {/* Top Row Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              
              {/* Main Headline Preview Block */}
              <div
                className={`sm:col-span-7 p-3.5 rounded-xl transition-all duration-700 transform ${
                  isLifted
                    ? 'translate-x-0 rotate-0 bg-gradient-to-r from-[#8069BF]/25 to-[#1A1823] border border-[#8069BF]/40 shadow-lg scale-100'
                    : '-translate-x-1.5 -rotate-1 bg-[#1C1A24]/70 border border-slate-700/50 opacity-60 scale-95'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-2.5 rounded-full transition-all duration-700 ${isLifted ? 'w-20 bg-[#C9A74D]' : 'w-14 bg-slate-600'}`} />
                  <div className={`h-2.5 rounded-full transition-all duration-700 ${isLifted ? 'w-10 bg-[#8069BF]' : 'w-8 bg-slate-700'}`} />
                </div>
                <div className={`h-2 rounded-full transition-all duration-700 max-w-full ${isLifted ? 'w-36 bg-slate-300' : 'w-28 bg-slate-700'}`} />
                <div className={`h-2 rounded-full mt-1.5 transition-all duration-700 max-w-full ${isLifted ? 'w-28 bg-slate-400' : 'w-20 bg-slate-800'}`} />
              </div>

              {/* Speed & Metric Gauge Card */}
              <div
                className={`sm:col-span-5 p-3 rounded-xl transition-all duration-700 transform ${
                  isLifted
                    ? 'translate-y-0 rotate-0 bg-[#1A1823]/90 border border-[#C9A74D]/40 text-[#C9A74D] shadow-glow-gold scale-100'
                    : 'translate-y-1 rotate-1 bg-[#181620]/60 border border-slate-700/40 text-slate-500 opacity-60 scale-95'
                }`}
              >
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {isLifted ? 'Conversion' : 'Bounce Rate'}
                </div>
                <div className="text-lg sm:text-2xl font-bold font-heading mt-0.5 flex items-baseline justify-between">
                  <span>{isLifted ? '+184%' : '68%'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-700 ${isLifted ? 'text-emerald-400 translate-x-0.5 -translate-y-0.5' : 'text-red-400 rotate-90'}`} />
                </div>
                <div className="w-full bg-[#121118] h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isLifted ? 'w-full bg-[#C9A74D]' : 'w-[30%] bg-red-400'
                    }`}
                  />
                </div>
              </div>

            </div>

            {/* Bottom Row Interactive Graph & Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              
              {/* Interactive Graph Box */}
              <div
                className={`sm:col-span-7 p-3 rounded-xl transition-all duration-700 transform ${
                  isLifted
                    ? 'translate-y-0 rotate-0 bg-[#1A1823]/90 border border-[#8069BF]/30 scale-100'
                    : 'translate-y-1 -rotate-1 bg-[#181620]/60 border border-slate-800 opacity-50 scale-95'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 text-[10px] sm:text-[11px] font-mono">
                  <span className={isLifted ? 'text-slate-200 font-bold truncate' : 'text-slate-500 truncate'}>
                    {isLifted ? 'Revenue Scalability' : 'Unstable Traffic'}
                  </span>
                  <span className={`text-[9px] sm:text-[10px] flex-shrink-0 ml-1 ${isLifted ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isLifted ? '42ms SLA' : '4.8s Load'}
                  </span>
                </div>

                {/* Animated Chart SVG */}
                <div className="h-14 w-full relative">
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

              {/* 2 Feature Pills Stack */}
              <div className="sm:col-span-5 space-y-2">
                <div
                  className={`p-2 rounded-lg font-mono text-[10px] sm:text-[11px] flex items-center justify-between transition-all duration-700 ${
                    isLifted
                      ? 'bg-[#8069BF]/20 border border-[#8069BF]/40 text-white translate-x-0'
                      : 'bg-[#181620]/50 border border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className={`w-3 h-3 flex-shrink-0 ${isLifted ? 'text-[#C9A74D]' : 'text-slate-600'}`} />
                    Next.js App Router
                  </span>
                </div>

                <div
                  className={`p-2 rounded-lg font-mono text-[10px] sm:text-[11px] flex items-center justify-between transition-all duration-700 ${
                    isLifted
                      ? 'bg-[#C9A74D]/15 border border-[#C9A74D]/40 text-white translate-x-0'
                      : 'bg-[#181620]/50 border border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Zap className={`w-3 h-3 flex-shrink-0 ${isLifted ? 'text-emerald-400' : 'text-slate-600'}`} />
                    GSAP Scroll Motion
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Footer Callout - Mobile Optimized */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-2.5 border-t border-white/10 text-[10px] sm:text-xs font-mono text-center sm:text-left">
            <span className="text-slate-400 truncate max-w-full">
              {isLifted ? 'Click toggle above to inspect lift' : 'Legacy sites lose 68% of visitors'}
            </span>

            <button
              onClick={() => setIsLifted((prev) => !prev)}
              className="flex items-center gap-1 text-[#C9A74D] hover:underline cursor-pointer flex-shrink-0"
            >
              <RefreshCw className="w-3 h-3 animate-spin-slow" />
              <span>Toggle Preview</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
