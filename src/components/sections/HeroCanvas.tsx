'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface GlobePoint {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  color: string;
  glowColor: string;
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

    // 3D Globe Fibonacci Distribution
    const globeRadius = Math.min(width, height) * 0.38;
    const pointCount = 280;
    const points: GlobePoint[] = [];

    const goldColor = { fill: '#C9A74D', glow: 'rgba(201, 167, 77, 0.45)' };
    const purpleColor = { fill: '#8069BF', glow: 'rgba(128, 105, 191, 0.45)' };
    const lavenderColor = { fill: '#D8CEF6', glow: 'rgba(216, 206, 246, 0.4)' };

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / pointCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = globeRadius * Math.sin(phi) * Math.cos(theta);
      const y = globeRadius * Math.sin(phi) * Math.sin(theta);
      const z = globeRadius * Math.cos(phi);

      const colorSet = i % 3 === 0 ? goldColor : i % 3 === 1 ? purpleColor : lavenderColor;

      points.push({
        x,
        y,
        z,
        baseRadius: Math.random() * 1.5 + 1.2,
        color: colorSet.fill,
        glowColor: colorSet.glow,
      });
    }

    // 3D Mouse Rotation Inertia
    let rotX = 0.2;
    let rotY = 0;
    let targetRotX = 0.2;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      targetRotY = (mouseX / width) * 0.8;
      targetRotX = (mouseY / height) * 0.8 + 0.2;
    };

    const parentEl = canvas.parentElement;
    parentEl?.addEventListener('mousemove', handleMouseMove);

    let angleY = 0;

    // 60 FPS 3D Render Loop
    const renderGlobe = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation interpolation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      angleY += 0.004;

      const totalRotY = angleY + rotY;
      const totalRotX = rotX;

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 500;

      // Project 3D Points to 2D
      const projectedPoints: { x: number; y: number; z: number; pt: GlobePoint }[] = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // Rotate Y
        const cosY = Math.cos(totalRotY);
        const sinY = Math.sin(totalRotY);
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.z * cosY + pt.x * sinY;

        // Rotate X
        const cosX = Math.cos(totalRotX);
        const sinX = Math.sin(totalRotX);
        const y2 = pt.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + pt.y * sinX;

        // Perspective Projection
        const scale = fov / (fov + z2 + globeRadius);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        projectedPoints.push({ x: projX, y: projY, z: z2, pt });
      }

      // Sort points by Z for depth buffering
      projectedPoints.sort((a, b) => b.z - a.z);

      // 1. Draw Subtle Connecting 3D Mesh Lines
      const connectMaxDist = 85;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        if (p1.z < -globeRadius * 0.4) continue; // Skip back hemisphere lines

        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          if (p2.z < -globeRadius * 0.4) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectMaxDist) {
            const alpha = (1 - dist / connectMaxDist) * 0.2 * ((p1.z + globeRadius) / (globeRadius * 2));
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(128, 105, 191, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Draw 3D Globe Particle Nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const depthAlpha = Math.max(0.1, (p.z + globeRadius * 1.2) / (globeRadius * 2.2));
        const size = Math.max(0.8, p.pt.baseRadius * depthAlpha * 1.4);

        // Halo Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.pt.glowColor;
        ctx.globalAlpha = depthAlpha * 0.6;
        ctx.fill();

        // Solid Point Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.pt.color;
        ctx.globalAlpha = depthAlpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    gsap.ticker.add(renderGlobe);

    return () => {
      gsap.ticker.remove(renderGlobe);
      window.removeEventListener('resize', handleResize);
      if (parentEl) {
        parentEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}
