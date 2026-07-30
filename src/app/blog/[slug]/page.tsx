import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_DATA } from '@/data/blogData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactCTASection from '@/components/sections/ContactCTASection';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { Clock, Calendar, ArrowLeft, Share2, Tag } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | VOX Digital' };

  return {
    title: `${post.title} | VOX Digital Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <JsonLdSchema
        type="BlogPosting"
        data={{
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          author: {
            '@type': 'Person',
            name: post.author.name,
          },
        }}
      />

      {/* Header Banner */}
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
          <span className="text-xs font-mono font-bold text-[#D8CEF6] uppercase px-3 py-1 bg-[#8069BF]/30 border border-[#8069BF]/50 rounded-md inline-block">{post.category}</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight uppercase tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#7C7296] font-mono pt-3 border-t border-[#8069BF]/20">
            <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#8069BF]" /> {post.publishedAt}</div>
            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C9A74D]" /> {post.readTime}</div>
          </div>
        </div>
      </div>

      {/* Article Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <GlassCard hoverGlow={false} className="p-8 sm:p-12 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl space-y-6 text-slate-300 text-sm leading-relaxed prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </GlassCard>

        {/* Tags */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#8069BF]/20 text-xs font-mono">
          <Tag className="w-4 h-4 text-[#8069BF]" />
          <span className="text-[#7C7296]">Tags:</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-[#1A1823] text-[#D8CEF6] rounded-lg border border-[#8069BF]/30 text-[11px]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ContactCTASection />
    </div>
  );
}
