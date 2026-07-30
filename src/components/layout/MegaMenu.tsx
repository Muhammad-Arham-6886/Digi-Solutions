'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { ArrowRight, Code, Cpu, Globe, Search, ShieldCheck, ShoppingBag } from 'lucide-react';

interface MegaMenuProps {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  const categories = [
    { name: 'Web Development', icon: Globe, items: SERVICES_DATA.filter((s) => s.category === 'Web Development') },
    { name: 'E-commerce Solutions', icon: ShoppingBag, items: SERVICES_DATA.filter((s) => s.category === 'E-commerce') },
    { name: 'AI & Automation', icon: Cpu, items: SERVICES_DATA.filter((s) => s.category === 'AI & Automation') },
    { name: 'SEO & Performance', icon: Search, items: SERVICES_DATA.filter((s) => s.category === 'SEO & Performance') },
    { name: 'Design & Branding', icon: Code, items: SERVICES_DATA.filter((s) => s.category === 'Design & Branding') },
    { name: 'Infrastructure & APIs', icon: ShieldCheck, items: SERVICES_DATA.filter((s) => s.category === 'Infrastructure & API') },
  ];

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl bg-[#1A1823]/95 backdrop-blur-3xl border border-[#8069BF]/30 rounded-2xl shadow-glow-vox p-8 z-50 text-slate-200 animate-fadeIn">
      {/* 6 Category Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 text-[#8069BF] font-heading font-bold text-sm sm:text-base border-b border-[#8069BF]/20 pb-2">
                <IconComp className="w-4 h-4 text-[#C9A74D] flex-shrink-0" />
                <span className="truncate">{cat.name}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                {cat.items.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="block text-slate-300 hover:text-[#8069BF] hover:translate-x-1 transition-all py-0.5 rounded leading-snug font-medium"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="mt-8 pt-4 border-t border-[#8069BF]/20 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-2">
        <span className="text-[#7C7296]">Need specialized engineering or custom digital architecture from VOX?</span>
        <Link
          href="/services"
          onClick={onClose}
          className="text-[#C9A74D] hover:text-white font-bold inline-flex items-center gap-1.5 group transition-colors"
        >
          <span>Explore All Capabilities</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
