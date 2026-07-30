'use client';

import React from 'react';
import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowUpRight, Calendar, Mail, MessageSquare } from 'lucide-react';

export default function ContactCTASection() {
  return (
    <section className="py-28 bg-[#121118] text-white border-t border-[#8069BF]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
          <span className="w-2 h-2 rounded-full bg-[#C9A74D] animate-ping" />
          <span>[ INITIATE COLLABORATION ]</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight max-w-4xl mx-auto">
          Let&apos;s Build Something <span className="text-gradient-vox">Exceptional Together</span>
        </h2>

        <p className="text-[#7C7296] text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Ready to transform your digital platform? Speak directly with VOX Digital senior engineers to discuss your architecture, timeline, and growth goals.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/book-consultation">
            <MagneticButton variant="primary" size="lg" className="w-full sm:w-auto shadow-glow-vox text-base font-bold px-8 py-4">
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Strategy Call</span>
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton variant="glass" size="lg" className="w-full sm:w-auto px-8 py-4">
              <MessageSquare className="w-5 h-5 text-[#C9A74D]" />
              <span>Send Project Inquiry</span>
              <ArrowUpRight className="w-5 h-5" />
            </MagneticButton>
          </Link>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#7C7296]">
          <a href="mailto:info@voxdigitalagency.com" className="hover:text-[#8069BF] transition-colors flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#C9A74D]" />
            <span>EMAIL: info@voxdigitalagency.com</span>
          </a>
          <span>•</span>
          <span>ESTIMATED AUDIT RESPONSE: &lt; 2 HOURS</span>
        </div>
      </div>
    </section>
  );
}
