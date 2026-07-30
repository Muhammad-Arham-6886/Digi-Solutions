'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA } from '@/data/testimonialsData';
import GlassCard from '@/components/ui/GlassCard';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-28 bg-[#121118] text-white border-t border-[#8069BF]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8069BF] font-bold">[ CLIENT ENDORSEMENTS ]</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Trusted by Visionary <span className="text-gradient-gold">Founders</span>
          </h2>
          <p className="text-[#7C7296] text-sm sm:text-base font-light">
            Read how VOX Digital engineering, Next.js architecture, and AI workstreams transformed enterprise operations.
          </p>
        </div>

        <GlassCard className="max-w-4xl mx-auto border-[#8069BF]/30 bg-[#1A1823]/90 p-8 sm:p-12 shadow-glow-vox relative">
          <Quote className="w-12 h-12 text-[#8069BF]/15 absolute top-6 right-6" />

          <div className="space-y-6">
            <div className="flex items-center gap-1 text-[#C9A74D]">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A74D]" />
              ))}
            </div>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light italic">
              &quot;{item.content}&quot;
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[#8069BF]/20">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-[#8069BF]/40 shadow-glow-vox">
                  <Image
                    src={item.avatar}
                    alt={item.name || 'Client Testimonial Avatar'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#7C7296]">
                    {item.role} • <span className="text-[#C9A74D] font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-[#121118] border border-[#8069BF]/30 text-slate-300 hover:text-white hover:border-[#8069BF] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-[#121118] border border-[#8069BF]/30 text-slate-300 hover:text-white hover:border-[#8069BF] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
