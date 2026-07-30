'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRICING_TIERS } from '@/data/pricingData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import ContactCTASection from '@/components/sections/ContactCTASection';
import FaqAccordionSection from '@/components/sections/FaqAccordionSection';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      {/* Header Banner */}
      <div className="py-12 sm:py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <Breadcrumbs items={[{ label: 'Pricing Plans' }]} />
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight break-words">
            Transparent <span className="text-gradient-vox">Enterprise Pricing</span>
          </h1>
          <p className="text-[#7C7296] text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed font-light px-2">
            Predictable retainer tiers and scoped engagements with zero hidden fees. Save 20% on annual commitments.
          </p>

          {/* Billing Cycle Switcher - Fully Mobile Responsive */}
          <div className="pt-4 sm:pt-6">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-3 p-1.5 bg-[#121118] border border-[#8069BF]/30 rounded-2xl max-w-full">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 sm:px-5 py-2 rounded-xl text-[11px] sm:text-xs font-mono font-semibold whitespace-nowrap transition-all ${
                  billingCycle === 'monthly' ? 'bg-[#8069BF] text-white shadow-glow-vox' : 'text-[#7C7296] hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-3 sm:px-5 py-2 rounded-xl text-[11px] sm:text-xs font-mono font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  billingCycle === 'yearly' ? 'bg-[#8069BF] text-white shadow-glow-vox' : 'text-[#7C7296] hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 sm:px-2 py-0.5 bg-[#C9A74D] text-[#121118] text-[9px] sm:text-[10px] rounded-full font-bold whitespace-nowrap">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === 'yearly' ? tier.priceYearly : tier.priceMonthly;
            const isCustom = tier.id === 'custom';

            return (
              <GlassCard
                key={tier.id}
                hoverGlow={tier.popular}
                className={`flex flex-col justify-between p-7 sm:p-9 relative transition-all ${
                  tier.popular
                    ? 'border-[#8069BF] shadow-glow-vox bg-[#231F36]'
                    : 'border-[#8069BF]/35 bg-[#1E1B2E]'
                }`}
              >
                <div className="space-y-6">
                  <div>
                    {tier.popular && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8069BF]/30 border border-[#8069BF]/60 text-[#D8CEF6] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider rounded-md mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A74D]" />
                        <span>MOST POPULAR SOLUTION</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight leading-snug">{tier.name}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">{tier.description}</p>
                  </div>

                  {/* Price Header */}
                  <div className="pt-4 border-t border-[#8069BF]/20">
                    {isCustom ? (
                      <div className="text-3xl font-heading font-extrabold text-[#C9A74D]">Custom Scope</div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-heading font-extrabold text-white">${price.toLocaleString()}</span>
                        <span className="text-xs text-slate-400 font-mono">/ month</span>
                      </div>
                    )}
                    <span className="text-[10px] text-[#7C7296] block mt-1.5 font-mono">Best for: {tier.idealFor}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-4 border-t border-[#8069BF]/20 space-y-3">
                    <span className="text-xs font-mono font-bold text-[#D8CEF6] uppercase tracking-wider block">What’s Included:</span>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#8069BF] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/contact">
                    <MagneticButton
                      variant={tier.popular ? 'primary' : 'glass'}
                      size="md"
                      className="w-full font-mono text-xs font-bold"
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <FaqAccordionSection />
      <ContactCTASection />
    </div>
  );
}
