'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_DATA } from '@/data/blogData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactCTASection from '@/components/sections/ContactCTASection';
import { Search, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Engineering', 'AI & Automation', 'SEO Strategy', 'UI/UX Design'];

  const filteredPosts = BLOG_DATA.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_DATA.find((p) => p.featured) || BLOG_DATA[0];

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      {/* Header Banner */}
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Blog & Technical Articles' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Engineering & Growth <span className="text-gradient-vox">Insights</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            In-depth technical guides, AI automation breakdowns, and SEO strategies written by our lead software architects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured Post Card */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`}>
            <GlassCard className="p-8 group cursor-pointer border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl hover:border-[#8069BF] hover:bg-[#231F36] space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-[#8069BF]/30 text-[#D8CEF6] border border-[#8069BF]/50 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C9A74D]" /> FEATURED ARTICLE
                </span>
                <span className="text-xs text-[#7C7296] font-mono">{featuredPost.publishedAt}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-3xl font-heading font-extrabold text-white group-hover:text-[#D8CEF6] transition-colors tracking-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#7C7296] font-mono pt-2">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C9A74D]" /> {featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-end text-[#C9A74D] font-mono font-bold text-xs group-hover:translate-x-2 transition-transform">
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#C9A74D]" />
                </div>
              </div>
            </GlassCard>
          </Link>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#8069BF] text-white shadow-glow-vox'
                    : 'bg-[#1A1823] text-[#7C7296] hover:text-white border border-[#8069BF]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#79767D] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <GlassCard className="h-full flex flex-col justify-between group cursor-pointer border-[#8069BF]/35 bg-[#1E1B2E] p-7 shadow-xl hover:border-[#8069BF] hover:bg-[#231F36] transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#D8CEF6] uppercase px-2.5 py-0.5 bg-[#8069BF]/30 border border-[#8069BF]/50 rounded-md">{post.category}</span>
                    <span className="flex items-center gap-1 text-[#7C7296]"><Clock className="w-3 h-3 text-[#C9A74D]" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-white group-hover:text-[#D8CEF6] transition-colors line-clamp-2 tracking-tight">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#8069BF]/20 flex items-center justify-between text-xs font-mono font-bold text-[#C9A74D] group-hover:text-white transition-colors">
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A74D] group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>

      <ContactCTASection />
    </div>
  );
}
