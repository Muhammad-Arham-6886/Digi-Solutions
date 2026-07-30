'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface WebNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
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

    // Spider Web Colors (Purple & Gold accents)
    const nodeColors = [
      { fill: '#8069BF', glow: 'rgba(128, 105, 191, 0.5)', line: 'rgba(128, 105, 191, ' },
      { fill: '#C9A74D', glow: 'rgba(201, 167, 77, 0.5)', line: 'rgba(201, 167, 77, ' },
      { fill: '#D8CEF6', glow: 'rgba(216, 206, 246, 0.4)', line: 'rgba(216, 206, 246, ' },
    ];

    // Generate Spider Web Nodes
    const nodeCount = Math.min(Math.floor(width / 14), 85);
    const nodes: WebNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const col = nodeColors[i % nodeColors.length];
      const r = Math.random() * 2 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: r,
        baseRadius: r,
        color: col.fill,
        glowColor: col.glow,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Interactive Mouse Tracking
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

    // GSAP Animated Ticker Render Function
    const renderWeb = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      const connectDist = 160;
      const mouseDist = 200;

      // 1. Update Node Positions & Draw Spider Web Links
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move node
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce off canvas boundaries
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Pulsing radius animation
        n1.pulsePhase += 0.025;
        n1.radius = n1.baseRadius + Math.sin(n1.pulsePhase) * 0.5;

        // Mouse Magnet Elastic Web Effect
        if (mouse.active) {
          const dx = mouse.x - n1.x;
          const dy = mouse.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseDist) {
            const force = (mouseDist - dist) / mouseDist;
            const angle = Math.atan2(dy, dx);
            // Elastic spring pull
            n1.x -= Math.cos(angle) * force * 2.2;
            n1.y -= Math.sin(angle) * force * 2.2;

            // Draw Spider Web Thread to Cursor
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(mouse.x, mouse.y);
            const lineAlpha = (1 - dist / mouseDist) * 0.45;
            ctx.strokeStyle = `rgba(201, 167, 77, ${lineAlpha})`;
            ctx.lineWidth = (1 - dist / mouseDist) * 1.5 + 0.5;
            ctx.stroke();
          }
        }

        // Connect Spider Web Threads to Neighboring Nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.28;

            // Draw Web Thread Line
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(128, 105, 191, ${alpha})`;
            ctx.lineWidth = alpha * 1.8;
            ctx.stroke();

            // Triangle Web Mesh Fill for Proximity Clusters (3-Node Web)
            for (let k = j + 1; k < nodes.length; k++) {
              const n3 = nodes[k];
              const dx2 = n3.x - n1.x;
              const dy2 = n3.y - n1.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              const dx3 = n3.x - n2.x;
              const dy3 = n3.y - n2.y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

              if (dist2 < connectDist * 0.85 && dist3 < connectDist * 0.85) {
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.lineTo(n3.x, n3.y);
                ctx.closePath();
                const meshAlpha = (1 - (dist + dist2 + dist3) / (connectDist * 2.55)) * 0.08;
                ctx.fillStyle = `rgba(128, 105, 191, ${Math.max(0, meshAlpha)})`;
                ctx.fill();
              }
            }
          }
        }
      }

      // 2. Draw Spider Web Node Dots
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Outer Glow Halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = n.glowColor;
        ctx.fill();

        // Solid Inner Node Dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      }
    };

    // Use GSAP Ticker for smooth 60 FPS animation
    gsap.ticker.add(renderWeb);

    return () => {
      gsap.ticker.remove(renderWeb);
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
