import React, { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const OfferCountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    // Target is midnight at the end of Tuesday, November 10, 2026 (Extended by popular demand)
    const targetDate = new Date('2026-11-10T23:59:59').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds, isExpired: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => String(num).padStart(2, '0');

  return (
    <div
      id="offer-countdown-banner"
      className="w-full max-w-3xl mx-auto px-3 sm:px-6 relative z-20"
      aria-label="Extended Offer Urgency Timer"
    >
      <div className="relative rounded-2xl sm:rounded-3xl pt-6 sm:pt-7 pb-4 sm:pb-5 px-4 sm:px-6 bg-gradient-to-r from-[#2a073f]/95 via-[#4a0d6b]/95 to-[#2a073f]/95 border-2 border-amber-400/80 shadow-[0_8px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(245,158,11,0.35)] backdrop-blur-xl text-center overflow-visible">
        {/* Top Border Badge: Today is the last day (Zero shadow, clean solid red) */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          {/* Red badge with clean brightness blinking animation - zero shadow */}
          <span className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-black text-[10px] sm:text-xs tracking-widest uppercase border-2 border-yellow-300 whitespace-nowrap select-none shadow-none animate-badge-blink">
            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-200 fill-yellow-200 animate-pulse flex-shrink-0" />
            <span className="font-black tracking-wider">Today is the last day</span>
            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-200 fill-yellow-200 animate-pulse flex-shrink-0" />
          </span>
        </div>

        {/* Shimmer accent */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer pointer-events-none rounded-2xl sm:rounded-3xl" />

        {/* Concise Bold Headline: Extended 1 Day Only • Tuesday, Nov 10 */}
        <h2 className="font-cinzel text-sm sm:text-lg md:text-xl font-black text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1">
          <span className="gold-text-gradient">Extended For 1 Day Only:</span>{' '}
          <strong className="text-yellow-300 font-black">Tuesday, Nov 10</strong>
        </h2>

        {/* Breathable, Single-Line Notice (Reduces Congestion, Max Mobile Readability) */}
        <p className="text-[11px] sm:text-xs md:text-sm text-amber-200/90 font-medium tracking-wide mb-3 sm:mb-4">
          Today is the 10th — ends tonight at <strong className="text-white font-bold">12:00 AM Midnight</strong> • Limited seats remaining
        </p>

        {/* Spacious, Marketing-Friendly Timer Display */}
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2 rounded-xl bg-[#140422]/90 border border-amber-400/50 shadow-inner">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-spin-slow flex-shrink-0" />

          {/* Hours Box */}
          <div className="flex flex-col items-center min-w-[34px] sm:min-w-[42px]">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {formatDigit(timeLeft.hours)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Hours
            </span>
          </div>

          <span className="text-amber-400/80 font-bold text-base sm:text-lg -mt-2">:</span>

          {/* Minutes Box */}
          <div className="flex flex-col items-center min-w-[34px] sm:min-w-[42px]">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {formatDigit(timeLeft.minutes)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Mins
            </span>
          </div>

          <span className="text-amber-400/80 font-bold text-base sm:text-lg -mt-2">:</span>

          {/* Seconds Box */}
          <div className="flex flex-col items-center min-w-[34px] sm:min-w-[42px]">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {formatDigit(timeLeft.seconds)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Secs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
