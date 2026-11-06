import React, { useEffect, useRef } from 'react';

// Sacred Geometry Lotus Mandala in Festive Gold & Amber
export const SacredMandala: React.FC<{ className?: string }> = ({
  className = 'w-[600px] h-[600px] opacity-20',
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`pointer-events-none transition-transform duration-1000 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <defs>
        <radialGradient id="festiveLotusGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde047" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.25" />
          <stop offset="75%" stopColor="#c026d3" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#10031c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="185" fill="url(#festiveLotusGlow)" opacity="0.25" />
      <circle cx="200" cy="200" r="190" stroke="#fde047" strokeWidth="0.8" strokeDasharray="6 6" opacity="0.5" />
      <circle cx="200" cy="200" r="160" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
      <circle cx="200" cy="200" r="120" stroke="#fde047" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="200" cy="200" r="80" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
      <circle cx="200" cy="200" r="40" stroke="#fef08a" strokeWidth="0.8" opacity="0.6" />

      {/* 12 Outer Petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={`outer-${i}`} transform={`rotate(${i * 30} 200 200)`}>
          <path
            d="M200 35 C238 85 238 140 200 180 C162 140 162 85 200 35 Z"
            stroke="#fde047"
            strokeWidth="0.9"
            fill="rgba(253, 224, 71, 0.025)"
            opacity="0.6"
          />
          <circle cx="200" cy="25" r="2.8" fill="#fef08a" opacity="0.8" />
        </g>
      ))}

      {/* 12 Inner Petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={`inner-${i}`} transform={`rotate(${i * 30 + 15} 200 200)`}>
          <path
            d="M200 75 C222 115 222 145 200 172 C178 145 178 115 200 75 Z"
            stroke="#f59e0b"
            strokeWidth="0.8"
            fill="rgba(245, 158, 11, 0.04)"
            opacity="0.5"
          />
        </g>
      ))}

      <circle cx="200" cy="200" r="9" fill="#fef08a" opacity="0.9" />
      <circle cx="200" cy="200" r="4" fill="#ffffff" opacity="0.95" />
    </svg>
  );
};

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let lastWidth = width;

    const onResize = () => {
      if (Math.abs(window.innerWidth - lastWidth) > 40) {
        lastWidth = window.innerWidth;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Golden festive spark particles & warm embers
    const particleCount = window.innerWidth < 640 ? 24 : 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.6,
      alpha: Math.random() * 0.45 + 0.15,
      speedY: -(Math.random() * 0.28 + 0.08),
      speedX: (Math.random() - 0.5) * 0.16,
      pulse: Math.random() * 0.025 + 0.009,
      color:
        Math.random() > 0.45
          ? '#fde047'
          : Math.random() > 0.25
            ? '#f59e0b'
            : Math.random() > 0.1
              ? '#ea580c'
              : '#ffffff',
    }));

    let frame = 0;
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(frame * 0.04) * p.pulse;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x | 0, p.y | 0, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.08, Math.min(0.65, p.alpha));
        ctx.fill();
      }

      frame++;
      animId = requestAnimationFrame(render);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animId);
      } else if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility, { passive: true });
    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      id="ambient-background"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center bg-[#10031c]"
      aria-hidden="true"
    >
      {/* Royal Velvet Plum Radial Auras */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#491167]/45 via-[#2b0840]/30 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-amber-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-[#801b9e]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-gradient-to-t from-amber-600/15 via-[#390954]/25 to-transparent blur-[120px] pointer-events-none" />

      {/* Floating Canvas Sparks */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-75 pointer-events-none" />

      {/* Rotating Sacred Lotus Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <SacredMandala className="w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] animate-spin-slow" />
      </div>
    </div>
  );
};
