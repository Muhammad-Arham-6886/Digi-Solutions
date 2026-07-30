'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface WaveLayer {
  frequency: number;
  amplitude: number;
  speed: number;
  offset: number;
  phase: number;
  colorStart: string;
  colorEnd: string;
  strokeColor: string;
  heightOffset: number;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  pulse: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Multi-Layered Cyber Aurora Waves (VOX Purple & Gold)
    const waves: WaveLayer[] = [
      {
        frequency: 0.0035,
        amplitude: 65,
        speed: 0.015,
        offset: 0,
        phase: 0,
        colorStart: 'rgba(128, 105, 191, 0.18)', // Purple
        colorEnd: 'rgba(18, 17, 24, 0)',
        strokeColor: 'rgba(128, 105, 191, 0.45)',
        heightOffset: 0.48,
      },
      {
        frequency: 0.0028,
        amplitude: 80,
        speed: 0.012,
        offset: Math.PI / 3,
        phase: 0,
        colorStart: 'rgba(201, 167, 77, 0.14)', // Gold
        colorEnd: 'rgba(18, 17, 24, 0)',
        strokeColor: 'rgba(201, 167, 77, 0.4)',
        heightOffset: 0.52,
      },
      {
        frequency: 0.0045,
        amplitude: 50,
        speed: 0.02,
        offset: Math.PI / 2,
        phase: 0,
        colorStart: 'rgba(147, 123, 210, 0.12)', // Lavender
        colorEnd: 'rgba(18, 17, 24, 0)',
        strokeColor: 'rgba(147, 123, 210, 0.35)',
        heightOffset: 0.55,
      },
      {
        frequency: 0.0022,
        amplitude: 95,
        speed: 0.008,
        offset: Math.PI,
        phase: 0,
        colorStart: 'rgba(128, 105, 191, 0.1)', // Deep Purple Base
        colorEnd: 'rgba(18, 17, 24, 0)',
        strokeColor: 'rgba(201, 167, 77, 0.25)',
        heightOffset: 0.42,
      },
    ];

    // Wave Sparkles
    const sparkles: Sparkle[] = [];
    const sparkleCount = 35;
    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.4 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Interactive Mouse Distortion Physics
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      force: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.force = 1;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.force = 0;
    };

    const parentEl = canvas.parentElement;
    parentEl?.addEventListener('mousemove', handleMouseMove);
    parentEl?.addEventListener('mouseleave', handleMouseLeave);

    // GSAP Ticker Render Loop
    const renderAuroraWaves = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw Multi-Layered Cyber Waves
      for (let w = 0; w < waves.length; w++) {
        const wave = waves[w];
        wave.phase += wave.speed;

        const centerY = height * wave.heightOffset;

        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 4) {
          // Standard Sine Equation
          let y = centerY + Math.sin(x * wave.frequency + wave.phase + wave.offset) * wave.amplitude;

          // Interactive Mouse Distortion Ripple
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const rippleRadius = 220;

          if (dist < rippleRadius) {
            const rippleForce = Math.cos((dist / rippleRadius) * (Math.PI / 2)) * 60;
            y += rippleForce * (mouse.y > centerY ? -1 : 1);
          }

          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Gradient Fill
        const grad = ctx.createLinearGradient(0, centerY - wave.amplitude, 0, height);
        grad.addColorStop(0, wave.colorStart);
        grad.addColorStop(1, wave.colorEnd);

        ctx.fillStyle = grad;
        ctx.fill();

        // Wave Top Glowing Ribbon Line
        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          let y = centerY + Math.sin(x * wave.frequency + wave.phase + wave.offset) * wave.amplitude;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const rippleRadius = 220;

          if (dist < rippleRadius) {
            const rippleForce = Math.cos((dist / rippleRadius) * (Math.PI / 2)) * 60;
            y += rippleForce * (mouse.y > centerY ? -1 : 1);
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = wave.strokeColor;
        ctx.lineWidth = w % 2 === 0 ? 1.8 : 1.2;
        ctx.stroke();
      }

      // 2. Draw Floating Wave Crest Sparkles
      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];
        s.pulse += 0.03;
        s.x += s.speed;

        if (s.x > width) s.x = 0;

        const currentOpacity = s.opacity + Math.sin(s.pulse) * 0.3;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(201, 167, 77, 0.4)' : 'rgba(128, 105, 191, 0.4)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
      }
    };

    // GSAP Ticker for smooth 60 FPS animation
    gsap.ticker.add(renderAuroraWaves);

    return () => {
      gsap.ticker.remove(renderAuroraWaves);
      window.removeEventListener('resize', handleResize);
      if (parentEl) {
        parentEl.removeEventListener('mousemove', handleMouseMove);
        parentEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
