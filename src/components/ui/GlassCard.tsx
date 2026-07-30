'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  hoverGlow = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverGlow ? { y: -5, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative bg-[#1A1823]/80 backdrop-blur-xl border border-[#8069BF]/20 rounded-2xl p-6 shadow-glass-vox overflow-hidden transition-all duration-300 ${
        hoverGlow ? 'hover:border-[#8069BF]/50 hover:shadow-glow-vox' : ''
      } ${className}`}
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8069BF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
