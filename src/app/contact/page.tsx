'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Engineering',
    budget: '$5k - $10k',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Website Engineering',
    'Custom Web Applications',
    'Autonomous AI Agents',
    'Shopify & E-commerce',
    'SEO Optimization',
    'GSAP Motion & UI Systems',
    'Infrastructure & Cloud',
    'CRM & API Middleware',
  ];

  const budgetList = ['$3k - $5k', '$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        router.push('/thank-you');
      } else {
        setErrorMsg(data.message || 'Submission failed. Please check form fields.');
      }
    } catch (err) {
      setErrorMsg('Server network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      {/* Banner */}
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Start Your <span className="text-gradient-vox">Project Proposal</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-3xl leading-relaxed font-light">
            Fill out the project planner below to receive a detailed architecture roadmap, milestone timeline, and cost estimate within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Working Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <GlassCard hoverGlow={false} className="p-8 sm:p-12 space-y-6 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl">
              <h2 className="text-2xl font-heading font-extrabold text-white uppercase tracking-tight">Project Planner Form</h2>

              {errorMsg && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">Primary Capability Needed *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {servicesList.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`p-2.5 rounded-xl text-[11px] font-mono font-semibold text-left border transition-all ${
                          formData.service === srv
                            ? 'bg-[#8069BF] border-[#8069BF] text-white shadow-glow-vox font-bold'
                            : 'bg-[#1A1823] border-[#8069BF]/20 text-[#7C7296] hover:text-white'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">Estimated Budget Range *</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetList.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
                          formData.budget === b
                            ? 'bg-[#C9A74D] border-[#C9A74D] text-[#121118] font-bold'
                            : 'bg-[#1A1823] border-[#8069BF]/20 text-[#7C7296] hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Project Details & Objectives *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your current platform challenges, goals, and target launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
                  />
                </div>

                <MagneticButton type="submit" variant="primary" size="lg" disabled={loading} className="w-full sm:w-auto font-mono text-xs font-bold">
                  <span>{loading ? 'Transmitting Scope...' : 'Submit Project Proposal Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </MagneticButton>
              </form>
            </GlassCard>
          </div>

          {/* Sidebar Contact Info & Instant Booking */}
          <div className="space-y-8">
            {/* Card 1: Email Contact */}
            <GlassCard hoverGlow={false} className="p-8 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8069BF]/20 border border-[#8069BF]/40 flex items-center justify-center text-[#8069BF] flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-white tracking-tight">Email Inquiries</h3>
                  <p className="text-xs text-[#7C7296] font-mono mt-0.5">Monitored 24/7 • 24-hr response SLA</p>
                </div>
              </div>

              <div className="my-5 border-t border-[#8069BF]/20" />

              <div>
                <a
                  href="mailto:info@voxdigitalagency.com"
                  className="text-base sm:text-lg font-mono font-bold text-[#D8CEF6] hover:text-white transition-colors block truncate"
                >
                  info@voxdigitalagency.com
                </a>
              </div>
            </GlassCard>

            {/* Card 2: Calendly Strategy Call */}
            <GlassCard hoverGlow={false} className="p-8 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A74D]/20 border border-[#C9A74D]/40 flex items-center justify-center text-[#C9A74D] flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-white tracking-tight">Strategy Consultation</h3>
                  <p className="text-xs text-[#7C7296] font-mono mt-0.5">Instant 30-min video session</p>
                </div>
              </div>

              <div className="my-5 border-t border-[#8069BF]/20" />

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Prefer an immediate strategy call with our Lead Solutions Architect to discuss project feasibility and timelines?
              </p>

              <div className="pt-2">
                <a
                  href="/book-consultation"
                  className="w-full py-4 px-6 bg-[#1A1823] border border-[#8069BF]/40 rounded-xl text-xs sm:text-sm font-mono font-bold text-[#D8CEF6] hover:bg-[#8069BF] hover:text-white hover:border-[#8069BF] transition-all flex items-center justify-center gap-2 shadow-md group"
                >
                  <span>Open Calendly Calendar</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A74D] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
