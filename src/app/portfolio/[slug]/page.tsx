import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactCTASection from '@/components/sections/ContactCTASection';
import { CheckCircle2 } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Banner */}
      <div className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }, { label: project.title }]} />
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">{project.category} • {project.year}</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
            {project.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Main Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Cover Image & Key Metrics */}
        <div className="space-y-8">
          <div className="relative h-[400px] sm:h-[550px] w-full rounded-3xl overflow-hidden border border-slate-800">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.stats.map((stat, idx) => (
              <GlassCard key={idx} hoverGlow={false} className="p-6 text-center border-slate-800">
                <div className="text-4xl font-heading font-extrabold text-brand-cyan">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <GlassCard hoverGlow={false} className="p-8 space-y-4 border-slate-800">
            <h2 className="text-2xl font-heading font-bold text-white">The Challenge</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
          </GlassCard>

          <GlassCard hoverGlow={false} className="p-8 space-y-4 border-brand-blue/30">
            <h2 className="text-2xl font-heading font-bold text-white">Our Engineered Solution</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.solution}</p>
          </GlassCard>
        </div>

        {/* Measured Results */}
        <div className="space-y-6">
          <h2 className="text-3xl font-heading font-bold text-white">Measured Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, i) => (
              <div key={i} className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-4 pt-6 border-t border-slate-900">
          <h3 className="text-lg font-heading font-bold text-white">Technologies & Tools Employed</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs px-4 py-2 bg-slate-900 text-brand-cyan rounded-xl border border-slate-800 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ContactCTASection />
    </div>
  );
}
