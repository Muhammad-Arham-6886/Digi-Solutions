import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | VOX Digital',
  description: 'VOX Digital Privacy Policy regarding data collection, client confidentiality, and security.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#121118] text-white">
      <div className="py-16 bg-[#1A1823] border-b border-[#8069BF]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-white uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-[#7C7296] font-mono">Last Updated: July 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
        <section className="space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white tracking-tight">1. Data Collection & Usage</h2>
          <p>
            At VOX Digital Agency, we respect your confidentiality and data privacy. We collect personal information (name, business email, phone number, and project scope details) solely when submitted via our contact forms, consultation booking system, or newsletter subscription.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white tracking-tight">2. Client Intellectual Property Protection</h2>
          <p>
            All codebases, design files, database schemas, and proprietary business logic shared with or engineered by VOX Digital remain the exclusive intellectual property of the client upon final project delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-extrabold text-white tracking-tight">3. Third-Party Data Security</h2>
          <p>
            We do not sell, rent, or trade client or lead data to third-party marketers. Data processed via our APIs is secured using TLS 1.3 encryption and stored in SOC2-compliant cloud environments.
          </p>
        </section>
      </div>
    </div>
  );
}
