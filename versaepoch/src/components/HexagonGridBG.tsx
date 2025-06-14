'use client';

import React, { useEffect, useRef, useState } from 'react';

export const HexagonBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawHexagon = (x: number, y: number, size: number, glow: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const hexX = x + Math.cos(angle) * size;
        const hexY = y + Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(hexX, hexY);
        else ctx.lineTo(hexX, hexY);
      }
      ctx.closePath();

      // Base color
      ctx.strokeStyle = `rgba(70, 130, 255, ${0.3 + glow * 0.7})`;
      ctx.lineWidth = 1;

      // Glow effect
      if (glow > 0) {
        ctx.shadowColor = 'rgba(8, 175, 175, 0.8)';
        ctx.shadowBlur = glow * 20;
      }

      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const hexSize = 20;
      const spacing = 40;
      const glowRadius = 100;

      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        for (let y = 0; y < canvas.height + spacing; y += spacing * 0.87) {
          const offsetX = (Math.floor(y / (spacing * 0.87)) % 2) * (spacing / 2);
          const hexX = x + offsetX;
          const hexY = y;

          // Calculate distance to mouse
          const distance = Math.sqrt(
            Math.pow(hexX - mousePos.x, 2) + Math.pow(hexY - mousePos.y, 2)
          );

          // Calculate glow intensity
          const glow = distance < glowRadius ? 1 - (distance / glowRadius) : 0;

          drawHexagon(hexX, hexY, hexSize, glow);
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#0a0a0a' }}
    />
  );
};
