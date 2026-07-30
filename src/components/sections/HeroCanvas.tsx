'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface GlowParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulsePhase: number;
}

interface AmbientOrb {
  x: number;
  y: number;
  radius: number;
  color: string;
  angleX: number;
  angleY: number;
  speedX: number;
  speedY: number;
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

    // Floating Ambient Glow Orbs
    const orbs: AmbientOrb[] = [
      {
        x: width * 0.25,
        y: height * 0.3,
        radius: 380,
        color: 'rgba(128, 105, 191, 0.14)', // Electric Purple
        angleX: 0,
        angleY: 0,
        speedX: 0.008,
        speedY: 0.006,
      },
      {
        x: width * 0.75,
        y: height * 0.45,
        radius: 340,
        color: 'rgba(201, 167, 77, 0.11)', // Royal Gold
        angleX: Math.PI / 3,
        angleY: Math.PI / 4,
        speedX: 0.007,
        speedY: 0.009,
      },
      {
        x: width * 0.5,
        y: height * 0.7,
        radius: 300,
        color: 'rgba(147, 123, 210, 0.08)', // Lavender Glow
        angleX: Math.PI / 2,
        angleY: Math.PI / 2,
        speedX: 0.005,
        speedY: 0.007,
      },
    ];

    // Floating Micro Light Dust
    const particleCount = Math.min(Math.floor(width / 25), 45);
    const particles: GlowParticle[] = [];

    const colors = [
      'rgba(128, 105, 191, ', // Purple
      'rgba(201, 167, 77, ',  // Gold
      'rgba(216, 206, 246, ', // Lavender White
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseColor = colors[i % colors.length];
      const alpha = Math.random() * 0.4 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.1, // Drifting upward
        size: Math.random() * 2 + 1,
        opacity: alpha,
        color: baseColor + alpha + ')',
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Grid Light Beam Sweeps
    let beamY = 0;

    // Mouse Tracking for Smooth Parallax
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const parentEl = canvas.parentElement;
    parentEl?.addEventListener('mousemove', handleMouseMove);

    // Premium Web Agency Render Loop
    const renderAgencyBg = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const parallaxX = (mouse.x - width / 2) * 0.04;
      const parallaxY = (mouse.y - height / 2) * 0.04;

      // 1. Draw Organic Floating Ambient Orbs
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.angleX += orb.speedX;
        orb.angleY += orb.speedY;

        const currentX = orb.x + Math.sin(orb.angleX) * 60 + parallaxX * (i + 1) * 0.5;
        const currentY = orb.y + Math.cos(orb.angleY) * 45 + parallaxY * (i + 1) * 0.5;

        const grad = ctx.createRadialGradient(
          currentX,
          currentY,
          10,
          currentX,
          currentY,
          orb.radius
        );
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(18, 17, 24, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Subtle Horizontal Grid Laser Beam
      beamY += 0.8;
      if (beamY > height) beamY = 0;

      const beamGrad = ctx.createLinearGradient(0, beamY, width, beamY);
      beamGrad.addColorStop(0, 'rgba(128, 105, 191, 0)');
      beamGrad.addColorStop(0.3, 'rgba(128, 105, 191, 0.07)');
      beamGrad.addColorStop(0.5, 'rgba(201, 167, 77, 0.12)');
      beamGrad.addColorStop(0.7, 'rgba(128, 105, 191, 0.07)');
      beamGrad.addColorStop(1, 'rgba(128, 105, 191, 0)');

      ctx.beginPath();
      ctx.moveTo(0, beamY);
      ctx.lineTo(width, beamY);
      ctx.strokeStyle = beamGrad;
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Draw Micro Floating Light Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        p.pulsePhase += 0.02;
        const currentOpacity = p.opacity + Math.sin(p.pulsePhase) * 0.15;

        // Draw Soft Glow Halo around particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw Core Particle Speck
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
      }
    };

    // GSAP Ticker for smooth 60 FPS animation
    gsap.ticker.add(renderAgencyBg);

    return () => {
      gsap.ticker.remove(renderAgencyBg);
      window.removeEventListener('resize', handleResize);
      if (parentEl) {
        parentEl.removeEventListener('mousemove', handleMouseMove);
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
