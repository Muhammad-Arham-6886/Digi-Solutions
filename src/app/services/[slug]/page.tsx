import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import ContactCTASection from '@/components/sections/ContactCTASection';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { CheckCircle2, ArrowRight, ShieldCheck, Code, Sparkles, HelpCircle } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found | VOX Digital' };

  return {
    title: `${service.title} | VOX Digital Engineering`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} - VOX Digital Agency`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);
  const features = service.features || [];
  const techStack = service.techStack || [];
  const deliverables = service.deliverables || [];
  const benefits = service.benefits || [];
  const faqs = service.faqs || [];

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <JsonLdSchema
        type="Service"
        data={{
          name: service.title,
          serviceType: service.category,
          description: service.longDesc,
        }}
      />

      {/* Hero Service Banner */}
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A74D]" />
              <span>{service.category}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
              {service.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed font-light">
              {service.shortDesc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <MagneticButton variant="primary" size="md">
                  <span>Request {service.title} Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/book-consultation">
                <MagneticButton variant="glass" size="md">
                  <span>Book 1-on-1 Strategy Call</span>
                </MagneticButton>
              </Link>
            </div>
          </div>

          {service.image && (
            <div className="relative w-full h-64 lg:h-72 rounded-2xl overflow-hidden border border-[#8069BF]/40 shadow-glow-vox bg-slate-900">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1823]/60 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </div>

      {/* Detailed Service Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Overview & Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-heading font-extrabold text-white uppercase tracking-tight">Overview & Technical Approach</h2>
            <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line font-light">{service.longDesc}</p>

            {features.length > 0 && (
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-heading font-extrabold text-white">Key Capabilities & Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feat, i) => (
                    <div key={i} className="p-4 bg-[#1E1B2E] rounded-xl border border-[#8069BF]/30 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8069BF] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Tech Stack & Deliverables */}
          <div className="space-y-6">
            {techStack.length > 0 && (
              <GlassCard hoverGlow={false} className="p-6 border-[#8069BF]/35 bg-[#1E1B2E]">
                <h3 className="text-lg font-heading font-extrabold text-white border-b border-[#8069BF]/20 pb-2.5 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#8069BF]" />
                  <span>Technologies Used</span>
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#2C273F] text-slate-200 rounded-lg border border-[#8069BF]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            )}

            {deliverables.length > 0 && (
              <GlassCard hoverGlow={false} className="p-6 border-[#8069BF]/35 bg-[#1E1B2E]">
                <h3 className="text-lg font-heading font-extrabold text-white border-b border-[#8069BF]/20 pb-2.5 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A74D]" />
                  <span>What You Receive</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
                  {deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8069BF]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}
          </div>
        </div>

        {/* Business Impact / Benefits */}
        {benefits.length > 0 && (
          <div className="space-y-8 bg-[#1A1823] border border-[#8069BF]/25 p-8 sm:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-extrabold text-white text-center uppercase tracking-tight">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-6 bg-[#23202E] rounded-2xl border border-[#8069BF]/20 space-y-2">
                  <div className="text-[#C9A74D] font-mono font-bold text-xl">0{i + 1}</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service FAQs */}
        {faqs.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-extrabold text-white flex items-center gap-2 uppercase tracking-tight">
              <HelpCircle className="w-5 h-5 text-[#8069BF]" />
              <span>Service FAQs</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <GlassCard key={i} hoverGlow={false} className="p-6 space-y-2 border-[#8069BF]/30 bg-[#1E1B2E]">
                  <h3 className="font-heading font-bold text-white text-base">{faq.question}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-[#8069BF]/20">
            <h2 className="text-2xl font-heading font-extrabold text-white uppercase tracking-tight">Related Specialized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link key={rel.id} href={`/services/${rel.slug}`}>
                  <GlassCard className="p-6 h-full space-y-3 group border-[#8069BF]/35 bg-[#1E1B2E] hover:border-[#8069BF] hover:bg-[#231F36] transition-all">
                    <h3 className="font-heading font-extrabold text-white text-lg group-hover:text-[#D8CEF6] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">{rel.shortDesc}</p>
                    <div className="text-xs font-mono font-bold text-[#C9A74D] group-hover:text-white transition-colors flex items-center gap-1">
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactCTASection />
    </div>
  );
}
