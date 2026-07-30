'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn || disabled) return;

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.35;
      const y = (clientY - (top + height / 2)) * 0.35;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  const baseStyles =
    'relative inline-flex items-center justify-center font-heading font-semibold tracking-normal transition-all rounded-xl overflow-hidden group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap select-none min-w-fit';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 sm:px-6 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3.5 text-sm sm:text-base',
  };

  const variantStyles = {
    primary:
      'bg-[#8069BF] hover:bg-[#937BD2] text-white shadow-glow-vox border border-[#8069BF]/40',
    secondary:
      'bg-[#2B273A] hover:bg-[#38334B] text-[#D8CEF6] border border-[#8069BF]/30',
    glass:
      'bg-[#1A1823]/80 hover:bg-[#252233] text-[#D8CEF6] backdrop-blur-xl border border-[#8069BF]/25 shadow-glass-vox',
    outline:
      'bg-transparent hover:bg-[#8069BF]/10 text-[#8069BF] border border-[#8069BF]/50',
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2.5 px-1">{children}</span>
    </button>
  );
}
