'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Phone, Sparkles, MapPin, Mail, Calendar } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', hasMega: true },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Industries', href: '/industries' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - VOX Digital Agency */}
      <div className={`hidden md:block bg-[#181622] border-b border-[#8069BF]/20 py-1.5 px-4 sm:px-6 lg:px-8 transition-all ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-none' : 'h-auto opacity-100'}`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-[#7C7296]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#8069BF] font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8069BF]" />
              <span>VOX Digital Agency — Next.js 15 & AI Engineering</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:info@voxdigitalagency.com" className="flex items-center gap-1.5 text-slate-200 hover:text-[#8069BF] transition-colors font-mono text-xs">
              <Mail className="w-3.5 h-3.5 text-[#8069BF]" />
              <span>info@voxdigitalagency.com</span>
            </a>
            <Link href="/book-consultation" className="flex items-center gap-1 text-[#C9A74D] hover:text-white transition-colors font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#C9A74D]" />
              <span>Schedule Strategy Call</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-[#121118]/95 backdrop-blur-xl shadow-xl py-3 border-b border-[#8069BF]/25' : 'bg-[#121118]/80 backdrop-blur-md py-4 border-b border-[#8069BF]/15'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8069BF] via-[#937BD2] to-[#C9A74D] flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-glow-vox group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-white text-lg tracking-wider leading-none group-hover:text-[#8069BF] transition-colors">
                VOX <span className="text-[#8069BF]">DIGITAL</span>
              </span>
              <span className="text-[9px] font-mono text-[#7C7296] tracking-widest uppercase mt-0.5">
                AGENCY & LABS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMega) {
                return (
                  <div key={link.href} className="relative">
                    <button
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={`flex items-center gap-1.5 hover:text-[#8069BF] transition-colors py-2 text-sm xl:text-base whitespace-nowrap ${
                        isActive ? 'text-[#8069BF] font-bold' : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? 'rotate-180 text-[#8069BF]' : ''}`} />
                    </button>
                    {megaMenuOpen && <MegaMenu onClose={() => setMegaMenuOpen(false)} />}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-[#8069BF] transition-colors py-2 relative text-sm xl:text-base whitespace-nowrap ${
                    isActive ? 'text-[#8069BF] font-bold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8069BF] to-[#C9A74D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/book-consultation">
              <MagneticButton variant="glass" size="sm" className="border-[#8069BF]/30 text-slate-200">
                <span>Book Call</span>
              </MagneticButton>
            </Link>
            <Link href="/contact">
              <MagneticButton variant="primary" size="sm" className="bg-[#8069BF] text-white font-bold">
                <span>Start Project</span>
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2.5 text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
              aria-label="Toggle Mobile Menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#090A0F]/98 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-colors ${
                  pathname === link.href ? 'bg-indigo-900/40 text-cyan-300 font-bold' : 'text-slate-200 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <Link href="/book-consultation" onClick={() => setMobileNavOpen(false)}>
              <MagneticButton variant="glass" className="w-full py-3 text-sm font-bold">
                Book Strategy Call
              </MagneticButton>
            </Link>
            <Link href="/contact" onClick={() => setMobileNavOpen(false)}>
              <MagneticButton variant="primary" className="w-full py-3 text-sm font-bold">
                Start Project Now
              </MagneticButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
