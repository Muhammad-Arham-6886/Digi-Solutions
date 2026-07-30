'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  pulse: number;
}

interface LaserBeam {
  x: number;
  y: number;
  length: number;
  speed: number;
  horizontal: boolean;
  color: string;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // VOX Palette Colors
    const colors = [
      { fill: 'rgba(128, 105, 191, 0.75)', glow: 'rgba(128, 105, 191, 0.4)' }, // Electric Purple
      { fill: 'rgba(201, 167, 77, 0.75)', glow: 'rgba(201, 167, 77, 0.4)' },   // Royal Gold
      { fill: 'rgba(147, 123, 210, 0.65)', glow: 'rgba(147, 123, 210, 0.3)' }, // Soft Lavender
    ];

    // Initialize Particles
    const particleCount = Math.min(Math.floor(width / 16), 70);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.2 + 1.2,
        color: col.fill,
        glowColor: col.glow,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Initialize Laser Grid Beams
    const laserCount = 6;
    const lasers: LaserBeam[] = [];
    for (let i = 0; i < laserCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      lasers.push({
        x: isHorizontal ? -100 : Math.random() * width,
        y: isHorizontal ? Math.random() * height : -100,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 1.5 + 0.8,
        horizontal: isHorizontal,
        color: i % 2 === 0 ? 'rgba(128, 105, 191, 0.35)' : 'rgba(201, 167, 77, 0.3)',
      });
    }

    // Mouse Tracking with Inertia
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    const parentEl = canvas.parentElement;
    parentEl?.addEventListener('mousemove', handleMouseMove);
    parentEl?.addEventListener('mouseleave', handleMouseLeave);

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse position lag
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      // 1. Draw Glowing Plasma Orbs
      const time = Date.now() * 0.001;

      const orb1X = width * 0.3 + Math.sin(time * 0.4) * 80;
      const orb1Y = height * 0.35 + Math.cos(time * 0.5) * 50;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, 350);
      grad1.addColorStop(0, 'rgba(128, 105, 191, 0.12)');
      grad1.addColorStop(1, 'rgba(18, 17, 24, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.7 + Math.cos(time * 0.3) * 90;
      const orb2Y = height * 0.6 + Math.sin(time * 0.4) * 60;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, 320);
      grad2.addColorStop(0, 'rgba(201, 167, 77, 0.09)');
      grad2.addColorStop(1, 'rgba(18, 17, 24, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Moving Laser Grid Beams
      for (let i = 0; i < lasers.length; i++) {
        const l = lasers[i];
        ctx.beginPath();
        if (l.horizontal) {
          l.x += l.speed;
          if (l.x > width + l.length) l.x = -l.length;
          const beamGrad = ctx.createLinearGradient(l.x, l.y, l.x + l.length, l.y);
          beamGrad.addColorStop(0, 'rgba(0,0,0,0)');
          beamGrad.addColorStop(0.5, l.color);
          beamGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.strokeStyle = beamGrad;
          ctx.lineWidth = 1.2;
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(l.x + l.length, l.y);
        } else {
          l.y += l.speed;
          if (l.y > height + l.length) l.y = -l.length;
          const beamGrad = ctx.createLinearGradient(l.x, l.y, l.x, l.y + l.length);
          beamGrad.addColorStop(0, 'rgba(0,0,0,0)');
          beamGrad.addColorStop(0.5, l.color);
          beamGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.strokeStyle = beamGrad;
          ctx.lineWidth = 1.2;
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(l.x, l.y + l.length);
        }
        ctx.stroke();
      }

      // 3. Update & Draw Particles and Constellation Lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.pulse += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulse) * 0.6;

        // Mouse Repulsion & Connection
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - dist) / 150;
          p.x -= Math.cos(angle) * force * 1.8;
          p.y -= Math.sin(angle) * force * 1.8;

          // Draw Mouse Magnet Line
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          const mouseLineAlpha = (1 - dist / 150) * 0.35;
          ctx.strokeStyle = `rgba(201, 167, 77, ${mouseLineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw Particle Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.glowColor;
        ctx.fill();

        // Draw Core Particle Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect Neighboring Nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p2.x - p.x;
          const pdy = p2.y - p.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 135) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - pdist / 135) * 0.22;
            ctx.strokeStyle = `rgba(128, 105, 191, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
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
