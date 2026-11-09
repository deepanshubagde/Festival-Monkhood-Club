import React from 'react';
import { Sparkles } from 'lucide-react';

interface DiyaLampProps {
  className?: string;
  size?: number;
}

// Ornate Traditional Festive Diya (Clay Oil Lamp) SVG with Animated Flame
export const DiyaLamp: React.FC<DiyaLampProps> = ({ className = '', size = 32 }) => {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Animated Flickering Golden Flame */}
      <div className="relative -mb-1 animate-flame">
        <svg
          width={size * 0.45}
          height={size * 0.75}
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flame outer amber glow */}
          <path
            d="M12 0C12 0 24 16 24 28C24 34.6274 18.6274 40 12 40C5.37258 40 0 34.6274 0 28C0 16 12 0 12 0Z"
            fill="url(#diyaFlameOuter)"
          />
          {/* Flame inner yellow core */}
          <path
            d="M12 8C12 8 20 20 20 28C20 32.4183 16.4183 36 12 36C7.58172 36 4 32.4183 4 28C4 20 12 8 12 8Z"
            fill="url(#diyaFlameInner)"
          />
          {/* Hot white center */}
          <ellipse cx="12" cy="28" rx="3.5" ry="5.5" fill="#ffffff" opacity="0.95" />
          <defs>
            <radialGradient id="diyaFlameOuter" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="80%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="diyaFlameInner" cx="50%" cy="65%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Terracotta/Brass Diya Base */}
      <svg
        width={size}
        height={size * 0.42}
        viewBox="0 0 60 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5 C15 22 45 22 58 5 C52 23 8 23 2 5 Z"
          fill="url(#diyaClayBase)"
          stroke="#ca8a04"
          strokeWidth="1.2"
        />
        {/* Diya Rim detail */}
        <ellipse cx="30" cy="5" rx="28" ry="4" fill="url(#diyaRim)" stroke="#fef08a" strokeWidth="0.8" />
        {/* Ornate bead decorations */}
        <circle cx="20" cy="14" r="1.5" fill="#fef08a" />
        <circle cx="30" cy="16" r="1.8" fill="#fde047" />
        <circle cx="40" cy="14" r="1.5" fill="#fef08a" />
        <defs>
          <linearGradient id="diyaClayBase" x1="0" y1="0" x2="60" y2="25">
            <stop offset="0%" stopColor="#854d0e" />
            <stop offset="35%" stopColor="#d97706" />
            <stop offset="70%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
          <linearGradient id="diyaRim" x1="0" y1="0" x2="60" y2="0">
            <stop offset="0%" stopColor="#ca8a04" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Hanging Brass Lantern
export const HangingLantern: React.FC<{ height?: number; delay?: string }> = ({
  height = 90,
  delay = '0s',
}) => {
  return (
    <div
      className="flex flex-col items-center animate-lantern-float select-none pointer-events-none"
      style={{ animationDelay: delay }}
    >
      {/* Hanging Chain / Wire */}
      <div
        className="w-[1.5px] bg-gradient-to-b from-amber-700 via-amber-400 to-amber-600 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
        style={{ height: `${height}px` }}
      />
      {/* Lantern Housing */}
      <div className="relative -mt-0.5">
        <svg width="40" height="58" viewBox="0 0 40 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Cap */}
          <path d="M20 2 L26 12 L14 12 Z" fill="#b45309" stroke="#fde047" strokeWidth="0.8" />
          <circle cx="20" cy="3" r="2.5" fill="#fef08a" />
          <rect x="8" y="12" width="24" height="4" rx="1.5" fill="#92400e" stroke="#facc15" strokeWidth="0.8" />
          {/* Glass Chamber */}
          <path
            d="M8 16 L12 44 L28 44 L32 16 Z"
            fill="url(#lanternGlass)"
            stroke="#eab308"
            strokeWidth="1"
          />
          {/* Metal Grille Bars */}
          <line x1="16" y1="16" x2="18" y2="44" stroke="#78350f" strokeWidth="0.8" />
          <line x1="24" y1="16" x2="22" y2="44" stroke="#78350f" strokeWidth="0.8" />
          {/* Inner Glowing Flame */}
          <circle cx="20" cy="30" r="7" fill="url(#lanternInnerGlow)" opacity="0.9" />
          <ellipse cx="20" cy="30" rx="3" ry="5" fill="#ffffff" opacity="0.95" />
          {/* Bottom Finial */}
          <rect x="10" y="44" width="20" height="4" rx="1.5" fill="#92400e" stroke="#facc15" strokeWidth="0.8" />
          <path d="M15 48 L20 56 L25 48 Z" fill="#b45309" stroke="#fde047" strokeWidth="0.8" />
          <circle cx="20" cy="56" r="1.5" fill="#fef08a" />

          <defs>
            <radialGradient id="lanternGlass" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="90%" stopColor="#b45309" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id="lanternInnerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fef08a" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Ambient Bloom Dropped around Lantern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-amber-400/35 blur-xl pointer-events-none" />
      </div>
    </div>
  );
};

export const FestiveLightsHeader: React.FC = () => {
  // Multi-tier festive string light garland nodes
  const garlandBulbs = [
    { x: 3, y: 14, color: '#fef08a', delay: '0s', size: 6.5 },
    { x: 7, y: 22, color: '#f59e0b', delay: '0.4s', size: 7.5 },
    { x: 12, y: 30, color: '#fbbf24', delay: '0.8s', size: 7 },
    { x: 17, y: 26, color: '#ea580c', delay: '1.2s', size: 6.5 },
    { x: 22, y: 15, color: '#fde047', delay: '0.2s', size: 7.5 },
    { x: 27, y: 24, color: '#fef08a', delay: '0.7s', size: 7 },
    { x: 32, y: 32, color: '#f59e0b', delay: '1.4s', size: 8 },
    { x: 37, y: 26, color: '#fbbf24', delay: '0.5s', size: 6.5 },
    { x: 42, y: 16, color: '#fef08a', delay: '1.1s', size: 7.5 },
    { x: 47, y: 25, color: '#f59e0b', delay: '0.3s', size: 7 },
    { x: 52, y: 33, color: '#fde047', delay: '0.9s', size: 8 },
    { x: 57, y: 25, color: '#ea580c', delay: '1.5s', size: 6.5 },
    { x: 62, y: 16, color: '#fef08a', delay: '0.6s', size: 7.5 },
    { x: 67, y: 25, color: '#fbbf24', delay: '1.3s', size: 7 },
    { x: 72, y: 32, color: '#f59e0b', delay: '0.4s', size: 7.5 },
    { x: 77, y: 26, color: '#fef08a', delay: '1.0s', size: 6.5 },
    { x: 82, y: 15, color: '#fde047', delay: '0.5s', size: 7.5 },
    { x: 87, y: 23, color: '#f59e0b', delay: '1.2s', size: 7 },
    { x: 92, y: 31, color: '#fbbf24', delay: '0.3s', size: 7.5 },
    { x: 97, y: 18, color: '#fef08a', delay: '0.9s', size: 6.5 },
  ];

  return (
    <header className="relative w-full z-40 select-none overflow-visible">
      {/* Radiant Top Ambience Glow */}
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#4a1268]/60 via-[#27083a]/40 to-transparent blur-2xl pointer-events-none -z-10" />

      {/* Hanging Brass Lanterns at Left and Right */}
      <div className="absolute top-0 left-2 sm:left-6 lg:left-12 z-50 pointer-events-none">
        <HangingLantern height={50} delay="0s" />
      </div>
      <div className="absolute top-0 left-16 sm:left-24 lg:left-32 z-50 pointer-events-none hidden sm:block">
        <HangingLantern height={30} delay="1.8s" />
      </div>

      <div className="absolute top-0 right-16 sm:right-24 lg:right-32 z-50 pointer-events-none hidden sm:block">
        <HangingLantern height={30} delay="2.4s" />
      </div>
      <div className="absolute top-0 right-2 sm:right-6 lg:right-12 z-50 pointer-events-none">
        <HangingLantern height={50} delay="1.1s" />
      </div>

      {/* Grand Hanging Light Strings (Layer 1 + Layer 2) */}
      <div className="relative w-full h-24 sm:h-28 overflow-visible pointer-events-none">
        <svg
          viewBox="0 0 100 45"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible animate-garland-sway"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="bulbBloom" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Golden Swag Wire Arc 1 */}
          <path
            d="M 0,8 Q 12,36 24,10 Q 34,38 44,11 Q 54,39 64,11 Q 74,38 84,10 Q 94,36 100,8"
            fill="none"
            stroke="#92400e"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Dotted Golden Secondary Wire */}
          <path
            d="M 0,4 Q 12,28 24,6 Q 34,30 44,7 Q 54,30 64,7 Q 74,29 84,6 Q 94,27 100,4"
            fill="none"
            stroke="#ca8a04"
            strokeWidth="0.3"
            strokeDasharray="1 1.2"
            opacity="0.75"
          />

          {/* Glowing Bulbs along the Garland */}
          {garlandBulbs.map((b, idx) => (
            <g
              key={idx}
              className="animate-light-glow"
              style={{ animationDelay: b.delay, animationDuration: '2.4s' }}
            >
              {/* Brass socket */}
              <rect
                x={b.x - 0.7}
                y={b.y - 5.5}
                width="1.4"
                height="2.8"
                rx="0.4"
                fill="#78350f"
                stroke="#ca8a04"
                strokeWidth="0.2"
              />

              {/* Wide Light Halo */}
              <circle
                cx={b.x}
                cy={b.y}
                r={b.size * 1.7}
                fill={b.color}
                opacity="0.3"
                filter="url(#bulbBloom)"
              />

              {/* Radiant Bulb */}
              <ellipse
                cx={b.x}
                cy={b.y - 0.5}
                rx={b.size * 0.42}
                ry={b.size * 0.62}
                fill={b.color}
                filter="url(#bulbBloom)"
                opacity="0.95"
              />

              {/* Filament core spark */}
              <ellipse
                cx={b.x}
                cy={b.y - 1}
                rx={b.size * 0.18}
                ry={b.size * 0.28}
                fill="#ffffff"
                opacity="0.95"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Centerpiece Festive Header: Ornate Royal Bar with Brand Emblem & Urgency */}
      <div className="relative -mt-10 sm:-mt-12 px-3 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Brand Lockup & Festive Medallion */}
        <div className="relative group inline-flex items-center gap-2.5 px-5 sm:px-8 py-2.5 rounded-full bg-gradient-to-r from-[#2c0b44]/90 via-[#3d115d]/95 to-[#2c0b44]/90 border-2 border-amber-400/70 shadow-[0_0_35px_rgba(245,158,11,0.45),inset_0_1px_1px_rgba(254,240,138,0.5)] backdrop-blur-xl">
          {/* Left Diya Flame */}
          <div className="hidden xs:block">
            <DiyaLamp size={26} />
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="/logo-sm.webp"
              alt="Monkhood Club"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-full border border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
            />
            <span className="font-cinzel text-base sm:text-xl font-black tracking-widest text-white gold-text-gradient uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Monkhood Club
            </span>
          </div>

          <span className="text-amber-400 font-serif">✦</span>

          <div className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="tracking-wider uppercase text-yellow-300">
              Grand Festive Special
            </span>
          </div>

          {/* Right Diya Flame */}
          <div className="hidden xs:block">
            <DiyaLamp size={26} />
          </div>
        </div>
      </div>
    </header>
  );
};
