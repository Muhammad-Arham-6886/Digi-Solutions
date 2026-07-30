'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Rocket, Send, Sparkles, Home } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 bg-slate-900/60 border border-slate-800 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center animate-bounce">
          <Rocket className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-brand-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Innovation Platform</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">Something Big is Coming Soon</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            We are engineering our next autonomous AI benchmarking and digital architecture platform. Be the first to get exclusive beta access.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold">
            ✔ You’re on the priority early-access list!
          </div>
        ) : (
          <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
            />
            <MagneticButton type="submit" variant="primary" size="md" className="whitespace-nowrap">
              <span>Notify Me</span>
              <Send className="w-3.5 h-3.5" />
            </MagneticButton>
          </form>
        )}

        <div className="pt-4">
          <Link href="/">
            <button className="text-xs text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
              <Home className="w-3.5 h-3.5" />
              <span>Back to Vertical Forge Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
