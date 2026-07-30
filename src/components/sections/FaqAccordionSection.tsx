'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data/faqData';
import GlassCard from '@/components/ui/GlassCard';
import { ChevronDown, HelpCircle } from 'lucide-react';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

export default function FaqAccordionSection() {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#121118] border-t border-[#8069BF]/20 relative">
      <JsonLdSchema type="FAQPage" data={{ faqs: FAQ_DATA }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A74D]" />
            <span>[ FREQUENTLY ASKED QUESTIONS ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Got Questions? We Have <span className="text-gradient-vox">Answers</span>
          </h2>
          <p className="text-[#7C7296] text-sm sm:text-base font-light">
            Everything you need to know about VOX Digital engineering methodology, IP ownership, pricing, and SLAs.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <GlassCard
                key={faq.id}
                hoverGlow={false}
                onClick={() => toggleFaq(faq.id)}
                className="p-6 cursor-pointer border-[#8069BF]/35 bg-[#1E1B2E] transition-all hover:border-[#8069BF] hover:bg-[#231F36] shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-extrabold text-white text-base sm:text-lg tracking-tight">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A74D] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#8069BF]' : ''
                    }`}
                  />
                </div>

                {isOpen && (
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-[#8069BF]/20 font-normal">
                    {faq.answer}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
