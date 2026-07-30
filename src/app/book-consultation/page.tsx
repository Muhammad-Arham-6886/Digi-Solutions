'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { Calendar, Clock, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BookConsultationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    preferredDate: '',
    preferredTime: '10:00 AM AEST',
    topic: 'Architecture Review & Tech Stack',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = ['09:00 AM AEST', '10:00 AM AEST', '11:30 AM AEST', '02:00 PM AEST', '04:00 PM AEST'];
  const topics = [
    'Architecture Review & Tech Stack',
    'AI Agents & Process Automation',
    'Core Web Vitals & Speed Optimization',
    'Full Web Application Scoping',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        const data = await res.json();
        setErrorMsg(data.message || 'Booking submission failed.');
      }
    } catch (err) {
      setErrorMsg('Server connection failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <Breadcrumbs items={[{ label: 'Book Strategy Consultation' }]} />
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white uppercase tracking-tight">
            Book a 1-on-1 <span className="text-gradient-vox">Strategy Call</span>
          </h1>
          <p className="text-[#7C7296] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Reserve a 30-minute video session with VOX Digital Lead Engineers to discuss project feasibility, tech stack choices, and execution timelines.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GlassCard hoverGlow={false} className="p-8 sm:p-12 space-y-6 border-[#8069BF]/35 bg-[#1E1B2E] shadow-xl">
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
                  placeholder="Alex Sterling"
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

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Company Name</label>
              <input
                type="text"
                placeholder="Enterprise Inc"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-2">Select Consultation Topic *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setFormData({ ...formData, topic: t })}
                    className={`p-3 rounded-xl text-xs font-mono font-semibold text-left border transition-all ${
                      formData.topic === t
                        ? 'bg-[#8069BF] border-[#8069BF] text-white shadow-glow-vox font-bold'
                        : 'bg-[#1A1823] border-[#8069BF]/20 text-[#7C7296] hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white focus:outline-none focus:border-[#8069BF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Preferred Time Slot *</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white focus:outline-none focus:border-[#8069BF]"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Any specific questions or context?</label>
              <textarea
                rows={4}
                placeholder="Let us know any technical constraints or goals before our meeting..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF]"
              />
            </div>

            <MagneticButton type="submit" variant="primary" size="lg" disabled={loading} className="w-full font-mono text-xs font-bold">
              <span>{loading ? 'Confirming Calendar Slot...' : 'Confirm Strategy Session'}</span>
              <Calendar className="w-4 h-4" />
            </MagneticButton>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
