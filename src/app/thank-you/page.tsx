import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Home, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 relative overflow-hidden py-24">
      <div className="max-w-xl w-full text-center space-y-8 bg-slate-900/60 border border-slate-800 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">Submission Received</span>
          <h1 className="text-4xl font-heading font-extrabold text-white">Thank You for Reaching Out!</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your project details have been assigned to our Lead Technical Architect. We will review your requirements and reach out within 24 hours with a comprehensive proposal roadmap.
          </p>
        </div>

        <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-left text-xs space-y-2 text-slate-400 font-mono">
          <div className="text-brand-cyan font-bold">NEXT STEPS:</div>
          <div>1. Technical Scope Review (2 - 4 hours)</div>
          <div>2. Initial Proposal & Architecture Options (24 hours)</div>
          <div>3. Discovery Strategy Call Scheduling</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <MagneticButton variant="primary" size="md">
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </MagneticButton>
          </Link>
          <Link href="/services">
            <MagneticButton variant="glass" size="md">
              <span>Explore All 24 Services</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
