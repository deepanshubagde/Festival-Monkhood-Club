import React, { useState, useEffect } from 'react';
import { Sparkles, Clock } from 'lucide-react';

interface LightBulb {
  id: number;
  cx: number;
  cy: number;
  color: string;
  glowColor: string;
  delay: string;
  duration: string;
  size: number;
}

export const FestiveLightsTop: React.FC = () => {
  // Festive countdown timer to create genuine festive season urgency
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 2, hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate glowing festive string lights along a curved wire
  const bulbs: LightBulb[] = [
    { id: 1, cx: 4, cy: 18, color: '#fef08a', glowColor: 'rgba(254, 240, 138, 0.9)', delay: '0s', duration: '2.1s', size: 6.5 },
    { id: 2, cx: 10, cy: 30, color: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.9)', delay: '0.4s', duration: '2.5s', size: 7.5 },
    { id: 3, cx: 16, cy: 38, color: '#fde047', glowColor: 'rgba(253, 224, 71, 0.9)', delay: '0.8s', duration: '1.9s', size: 7 },
    { id: 4, cx: 22, cy: 32, color: '#ea580c', glowColor: 'rgba(234, 88, 12, 0.85)', delay: '1.2s', duration: '2.3s', size: 6.5 },
    { id: 5, cx: 28, cy: 19, color: '#fef08a', glowColor: 'rgba(254, 240, 138, 0.95)', delay: '0.2s', duration: '2.4s', size: 7.5 },
    { id: 6, cx: 34, cy: 31, color: '#d97706', glowColor: 'rgba(217, 119, 6, 0.9)', delay: '0.7s', duration: '2.2s', size: 7 },
    { id: 7, cx: 40, cy: 39, color: '#fbbf24', glowColor: 'rgba(251, 191, 36, 0.95)', delay: '1.4s', duration: '2.6s', size: 8 },
    { id: 8, cx: 46, cy: 33, color: '#fef08a', glowColor: 'rgba(254, 240, 138, 0.9)', delay: '0.5s', duration: '2.0s', size: 6.5 },
    { id: 9, cx: 52, cy: 20, color: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.9)', delay: '1.1s', duration: '2.7s', size: 7.5 },
    { id: 10, cx: 58, cy: 32, color: '#fbbf24', glowColor: 'rgba(251, 191, 36, 0.9)', delay: '0.3s', duration: '2.1s', size: 7 },
    { id: 11, cx: 64, cy: 40, color: '#fde047', glowColor: 'rgba(253, 224, 71, 0.95)', delay: '0.9s', duration: '2.3s', size: 8 },
    { id: 12, cx: 70, cy: 32, color: '#ea580c', glowColor: 'rgba(234, 88, 12, 0.85)', delay: '1.5s', duration: '2.2s', size: 6.5 },
    { id: 13, cx: 76, cy: 21, color: '#fef08a', glowColor: 'rgba(254, 240, 138, 0.9)', delay: '0.6s', duration: '2.5s', size: 7.5 },
    { id: 14, cx: 82, cy: 33, color: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.9)', delay: '1.3s', duration: '2.1s', size: 7 },
    { id: 15, cx: 88, cy: 39, color: '#fbbf24', glowColor: 'rgba(251, 191, 36, 0.95)', delay: '0.4s', duration: '2.4s', size: 7.5 },
    { id: 16, cx: 94, cy: 27, color: '#fef08a', glowColor: 'rgba(254, 240, 138, 0.9)', delay: '1.0s', duration: '2.2s', size: 6.5 },
  ];

  return (
    <div className="relative w-full z-30 select-none overflow-hidden">
      {/* Festive Urgency Bar */}
      <aside aria-label="Festive Announcement" className="w-full bg-gradient-to-r from-[#180f03] via-[#331c04] to-[#180f03] border-b border-amber-500/30 text-amber-200 px-3 py-2 text-center text-xs relative z-40 backdrop-blur-md shadow-[0_2px_20px_rgba(245,158,11,0.15)]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-6 text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-1.5 font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="tracking-wider uppercase font-bold text-amber-200">
              Grand Festive Season Celebration
            </span>
          </div>

          <div className="hidden sm:inline-block text-amber-500/60 font-serif">✦</div>

          <div className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
            <span className="text-amber-300 font-bold bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
              REGULAR PRICING
            </span>
            <span>Monthly & Yearly Memberships</span>
          </div>

          <div className="hidden md:inline-block text-amber-500/60 font-serif">✦</div>

          <div className="inline-flex items-center gap-2 text-slate-300 font-mono text-[11px] bg-slate-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            <Clock className="w-3 h-3 text-amber-400 animate-spin-slow" />
            <span className="text-amber-400 font-bold">
              {String(timeLeft.days).padStart(2, '0')}d :{' '}
              {String(timeLeft.hours).padStart(2, '0')}h :{' '}
              {String(timeLeft.minutes).padStart(2, '0')}m :{' '}
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans">Left</span>
          </div>
        </div>
      </aside>

      {/* Radiant Festive Hanging String Lights & Garlands */}
      <div className="relative w-full h-16 sm:h-20 pointer-events-none -mt-1 overflow-visible">
        {/* Ambient Top Glow Wash */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-amber-500/20 via-yellow-500/10 to-transparent blur-md pointer-events-none" />

        {/* SVG String Lights with Catenary Swag Wire */}
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible animate-garland-sway"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Radial Bulb Glow */}
            <radialGradient id="festiveGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
              <stop offset="40%" stopColor="#fde047" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
            </radialGradient>
            <filter id="festiveBloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Wire 1: Main Swag Arc 1 */}
          <path
            d="M 0,10 Q 14,42 28,12 Q 40,42 52,12 Q 64,43 76,13 Q 88,41 100,10"
            fill="none"
            stroke="#453112"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Wire 2: Delicate Secondary Wire */}
          <path
            d="M 0,6 Q 14,35 28,8 Q 40,36 52,8 Q 64,36 76,9 Q 88,34 100,7"
            fill="none"
            stroke="#78531b"
            strokeWidth="0.3"
            strokeDasharray="1 1"
            opacity="0.6"
          />

          {/* Glowing Bulbs with Brass Sockets */}
          {bulbs.map(b => (
            <g key={b.id} className="animate-light-glow" style={{ animationDelay: b.delay, animationDuration: b.duration }}>
              {/* Brass Socket Cap */}
              <rect
                x={b.cx - 0.7}
                y={b.cy - 7}
                width="1.4"
                height="3.2"
                rx="0.5"
                fill="#854d0e"
                stroke="#ca8a04"
                strokeWidth="0.2"
              />

              {/* Wide Light Halo */}
              <circle
                cx={b.cx}
                cy={b.cy - 1}
                r={b.size * 1.8}
                fill={b.glowColor}
                opacity="0.25"
                filter="url(#festiveBloom)"
              />

              {/* Outer Glowing Teardrop Bulb */}
              <ellipse
                cx={b.cx}
                cy={b.cy - 1.5}
                rx={b.size * 0.42}
                ry={b.size * 0.65}
                fill={b.color}
                filter="url(#festiveBloom)"
                opacity="0.95"
              />

              {/* Core Hot Filament Highlight */}
              <ellipse
                cx={b.cx}
                cy={b.cy - 2}
                rx={b.size * 0.18}
                ry={b.size * 0.3}
                fill="#ffffff"
                opacity="0.95"
              />
            </g>
          ))}
        </svg>

        {/* Hanging Lanterns Accents on Left & Right */}
        <div className="absolute top-1 left-3 sm:left-8 flex items-start gap-3 pointer-events-none">
          <div className="flex flex-col items-center animate-lantern-float">
            <div className="w-[1px] h-6 sm:h-9 bg-gradient-to-b from-amber-600 to-amber-400" />
            <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-lg bg-gradient-to-b from-amber-400 via-yellow-300 to-amber-600 border border-yellow-200/80 shadow-[0_0_20px_rgba(245,158,11,0.8)] flex items-center justify-center p-1">
              <div className="w-2 h-3 bg-white rounded-full blur-[1px] animate-pulse" />
            </div>
          </div>
        </div>

        <div className="absolute top-1 right-3 sm:right-8 flex items-start gap-3 pointer-events-none">
          <div className="flex flex-col items-center animate-lantern-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-[1px] h-6 sm:h-9 bg-gradient-to-b from-amber-600 to-amber-400" />
            <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-lg bg-gradient-to-b from-amber-400 via-yellow-300 to-amber-600 border border-yellow-200/80 shadow-[0_0_20px_rgba(245,158,11,0.8)] flex items-center justify-center p-1">
              <div className="w-2 h-3 bg-white rounded-full blur-[1px] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
