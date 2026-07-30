'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight, Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ['All', 'Web Development', 'E-commerce', 'AI & Automation', 'SEO & Performance', 'Design & Branding', 'Infrastructure & API'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCat = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Limit display to 6 cards unless showAll is true or user is actively searching
  const displayedServices = showAll || searchQuery ? filteredServices : filteredServices.slice(0, 6);

  return (
    <section className="py-24 relative bg-[#121118] text-white border-t border-[#8069BF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
            <span>[ SPECIALIZED CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Full-Spectrum Digital <span className="text-gradient-vox">Engineering</span>
          </h2>
          <p className="text-[#7C7296] text-sm sm:text-base font-light">
            Explore VOX Digital&apos;s specialized capabilities spanning Next.js & React web applications, GSAP micro-interactions, autonomous AI agents, and SEO dominance.
          </p>
        </div>

        {/* Search & Category Filter Controls (Single Row) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 overflow-hidden">
          {/* Category Tabs - Single Horizontal Row */}
          <div className="flex flex-nowrap items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#8069BF] text-white shadow-glow-vox'
                    : 'bg-[#1A1823] text-[#7C7296] hover:text-white hover:bg-[#252233] border border-[#8069BF]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-64 flex-shrink-0">
            <Search className="w-4 h-4 text-[#79767D] absolute left-3.5 top-2.5" />
            <input
              type="text"
              placeholder={`Search ${SERVICES_DATA.length} capabilities...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
            />
          </div>
        </div>

        {/* Services Grid (High-Contrast Readability Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {displayedServices.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <GlassCard className="h-full flex flex-col justify-between group cursor-pointer border-[#8069BF]/35 bg-[#1E1B2E] p-7 shadow-xl hover:border-[#8069BF] hover:bg-[#231F36]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#F3EEFF] uppercase px-3 py-1 bg-[#8069BF]/30 border border-[#8069BF]/60 rounded-md">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="text-xs font-bold text-[#FCE8B3] px-2.5 py-0.5 bg-[#C9A74D]/25 border border-[#C9A74D]/50 rounded-md">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-heading font-extrabold text-white group-hover:text-[#D8CEF6] transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  {/* High Contrast Bright Description Text */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 bg-[#2C273F] text-slate-200 font-medium rounded-md border border-[#8069BF]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#8069BF]/25 flex items-center justify-between text-xs font-mono font-bold text-[#C9A74D] group-hover:text-white transition-colors">
                  <span>EXPLORE CAPABILITY</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A74D] group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* Expand / Collapse Control Button */}
        {!searchQuery && filteredServices.length > 6 && (
          <div className="mt-12 text-center">
            <MagneticButton
              variant="glass"
              size="md"
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 font-mono text-xs font-bold text-[#D8CEF6] border-[#8069BF]/30 hover:border-[#8069BF]"
            >
              <span>{showAll ? 'COLLAPSE CAPABILITIES' : `VIEW ALL CAPABILITIES (${filteredServices.length - 6} MORE)`}</span>
              {showAll ? <ChevronUp className="w-4 h-4 text-[#C9A74D]" /> : <ChevronDown className="w-4 h-4 text-[#8069BF]" />}
            </MagneticButton>
          </div>
        )}

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-[#79767D] font-mono text-xs">
            No services matched your search criteria. Try selecting another category or clearing search query.
          </div>
        )}
      </div>
    </section>
  );
}
