'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vertical_forge_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('vertical_forge_cookie_consent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem('vertical_forge_cookie_consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 max-w-md z-50 p-5 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl text-slate-200"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-brand-cyan font-heading font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              <span>Cookie & Privacy Policy</span>
            </div>
            <button
              onClick={declineCookies}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            We use essential cookies and analytical telemetry to optimize site performance, personalize content, and enhance your digital experience.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-xs font-semibold bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors shadow-glow-blue"
            >
              Accept All
            </button>
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-xs font-semibold bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Essential Only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
