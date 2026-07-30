import React from 'react';
import Link from 'next/link';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-cyan shadow-glow-cyan animate-float">
          <Compass className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-sm font-mono text-brand-cyan uppercase tracking-widest">Error 404</span>
          <h1 className="text-4xl font-heading font-extrabold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The specialized solution or resource you are looking for has been relocated or does not exist.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <MagneticButton variant="primary" size="md">
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </MagneticButton>
          </Link>
          <Link href="/services">
            <MagneticButton variant="glass" size="md">
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Services</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
