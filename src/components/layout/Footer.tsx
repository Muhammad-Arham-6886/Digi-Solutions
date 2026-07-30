'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        setErrorMsg(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Server connection failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#121118] text-slate-300 border-t border-[#8069BF]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8069BF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C9A74D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Full Brand Logo PNG */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/logo/vox-banner.png"
                alt="VOX Digital Agency"
                className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-sm sm:text-base text-[#7C7296] max-w-sm leading-relaxed font-light">
              Engineering high-performance web applications, autonomous AI agents, technical SEO pipelines, and award-winning GSAP motion design for ambitious brands.
            </p>

            <div className="space-y-2.5 text-sm text-[#7C7296]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8069BF]" />
                <a href="mailto:info@voxdigitalagency.com" className="hover:text-white transition-colors font-mono">info@voxdigitalagency.com</a>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base sm:text-lg tracking-wider uppercase">Core Capabilities</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/website-development" className="hover:text-[#8069BF] transition-colors">Website Engineering</Link></li>
              <li><Link href="/services/nextjs-development" className="hover:text-[#8069BF] transition-colors">Next.js & React Apps</Link></li>
              <li><Link href="/services/ai-agents-business-automation" className="hover:text-[#8069BF] transition-colors">Autonomous AI Agents</Link></li>
              <li><Link href="/services/shopify-development" className="hover:text-[#8069BF] transition-colors">Shopify & E-commerce</Link></li>
              <li><Link href="/services/seo-optimization" className="hover:text-[#8069BF] transition-colors">Technical SEO Domination</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-[#8069BF] transition-colors">GSAP Motion & UI Systems</Link></li>
              <li><Link href="/services" className="text-[#C9A74D] font-bold hover:underline">View All Capabilities →</Link></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base sm:text-lg tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-[#8069BF] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#8069BF] transition-colors">Portfolio & Case Studies</Link></li>
              <li><Link href="/industries" className="hover:text-[#8069BF] transition-colors">Industries We Serve</Link></li>
              <li><Link href="/pricing" className="hover:text-[#8069BF] transition-colors">Pricing Plans</Link></li>
              <li><Link href="/process" className="hover:text-[#8069BF] transition-colors">Our Process</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#8069BF] transition-colors">Client Endorsements</Link></li>
              <li><Link href="/blog" className="hover:text-[#8069BF] transition-colors">Insights & Engineering</Link></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base sm:text-lg tracking-wider uppercase">Stay Ahead</h4>
            <p className="text-xs sm:text-sm text-[#7C7296] leading-relaxed">
              Subscribe to VOX digital engineering insights. Zero spam, pure technical value.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#8069BF]/20 border border-[#8069BF]/40 rounded-xl text-[#D8CEF6] text-xs sm:text-sm flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C9A74D]" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1A1823] border border-[#8069BF]/25 rounded-xl text-xs sm:text-sm text-white placeholder-[#79767D] focus:outline-none focus:border-[#8069BF] pr-10"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#8069BF] hover:bg-[#937BD2] text-white rounded-lg transition-colors flex items-center justify-center shadow-glow-vox"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {errorMsg && <p className="text-xs text-rose-400">{errorMsg}</p>}
              </form>
            )}

            <div className="pt-2 flex items-center gap-3">
              <Link href="/contact" className="text-sm font-semibold text-[#C9A74D] hover:underline flex items-center gap-1">
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VOX Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookies Policy</Link>
            <Link href="/coming-soon" className="hover:text-slate-300 transition-colors">Coming Soon</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
