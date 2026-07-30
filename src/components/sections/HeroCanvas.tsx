'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface StarNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
}

interface PlasmaOrb {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
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

    // 1. Plasma Gradient Light Orbs
    const plasmaOrbs: PlasmaOrb[] = [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: 350,
        color: 'rgba(128, 105, 191, 0.22)', // Electric Purple
        vx: 0.4,
        vy: 0.3,
      },
      {
        x: width * 0.8,
        y: height * 0.4,
        radius: 320,
        color: 'rgba(201, 167, 77, 0.18)', // Royal Gold
        vx: -0.3,
        vy: 0.4,
      },
      {
        x: width * 0.5,
        y: height * 0.7,
        radius: 280,
        color: 'rgba(147, 123, 210, 0.15)', // Lavender
        vx: 0.35,
        vy: -0.25,
      },
    ];

    // 2. Star Particles
    const starCount = Math.min(Math.floor(width / 18), 65);
    const stars: StarNode[] = [];

    const starColors = [
      { fill: '#C9A74D', glow: 'rgba(201, 167, 77, 0.6)' },
      { fill: '#8069BF', glow: 'rgba(128, 105, 191, 0.6)' },
      { fill: '#E2D9F7', glow: 'rgba(226, 217, 247, 0.5)' },
    ];

    for (let i = 0; i < starCount; i++) {
      const col = starColors[i % starColors.length];
      const sz = Math.random() * 2 + 1.2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: sz,
        baseSize: sz,
        color: col.fill,
        glowColor: col.glow,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // 3. Interactive Mouse Spotlight
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    const parentEl = canvas.parentElement;
    parentEl?.addEventListener('mousemove', handleMouseMove);
    parentEl?.addEventListener('mouseleave', handleMouseLeave);

    let laserY = 0;

    // 60 FPS Render Loop
    const renderBackground = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // A. Draw Drifting Plasma Light Orbs
      for (let i = 0; i < plasmaOrbs.length; i++) {
        const orb = plasmaOrbs[i];
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 100 || orb.x > width - 100) orb.vx *= -1;
        if (orb.y < 100 || orb.y > height - 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 10, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(18, 17, 24, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // B. Draw Interactive Mouse Glow Spotlight
      if (mouse.active) {
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 250);
        mouseGrad.addColorStop(0, 'rgba(201, 167, 77, 0.16)');
        mouseGrad.addColorStop(0.5, 'rgba(128, 105, 191, 0.08)');
        mouseGrad.addColorStop(1, 'rgba(18, 17, 24, 0)');

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI * 2);
        ctx.fill();
      }

      // C. Draw Ambient Horizontal Scanning Laser Line
      laserY += 0.9;
      if (laserY > height) laserY = 0;

      const laserGrad = ctx.createLinearGradient(0, laserY, width, laserY);
      laserGrad.addColorStop(0, 'rgba(128, 105, 191, 0)');
      laserGrad.addColorStop(0.2, 'rgba(128, 105, 191, 0.12)');
      laserGrad.addColorStop(0.5, 'rgba(201, 167, 77, 0.25)');
      laserGrad.addColorStop(0.8, 'rgba(128, 105, 191, 0.12)');
      laserGrad.addColorStop(1, 'rgba(128, 105, 191, 0)');

      ctx.beginPath();
      ctx.moveTo(0, laserY);
      ctx.lineTo(width, laserY);
      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // D. Draw Floating Star Nodes & Constellation Beams
      const maxConnectDist = 140;

      for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];

        s1.x += s1.vx;
        s1.y += s1.vy;

        if (s1.x < 0 || s1.x > width) s1.vx *= -1;
        if (s1.y < 0 || s1.y > height) s1.vy *= -1;

        s1.pulsePhase += 0.03;
        s1.size = s1.baseSize + Math.sin(s1.pulsePhase) * 0.6;

        // Mouse Magnet Proximity
        if (mouse.active) {
          const dx = mouse.x - s1.x;
          const dy = mouse.y - s1.y;
          const mdist = Math.sqrt(dx * dx + dy * dy);

          if (mdist < 180) {
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mAlpha = (1 - mdist / 180) * 0.35;
            ctx.strokeStyle = `rgba(201, 167, 77, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw Star Halo Glow
        ctx.beginPath();
        ctx.arc(s1.x, s1.y, s1.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = s1.glowColor;
        ctx.fill();

        // Draw Solid Star Node
        ctx.beginPath();
        ctx.arc(s1.x, s1.y, s1.size, 0, Math.PI * 2);
        ctx.fillStyle = s1.color;
        ctx.fill();

        // Inter-Star Constellation Lines
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s2.x - s1.x;
          const dy = s2.y - s1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.24;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = `rgba(128, 105, 191, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
    };

    gsap.ticker.add(renderBackground);

    return () => {
      gsap.ticker.remove(renderBackground);
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
    />
  );
}
