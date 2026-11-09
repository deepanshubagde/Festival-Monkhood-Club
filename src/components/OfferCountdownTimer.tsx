import React, { useState, useEffect } from 'react';
import { Flame, Clock, AlertTriangle, Sparkles } from 'lucide-react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const OfferCountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    // Target is midnight at the end of Monday, November 9, 2026
    const targetDate = new Date('2026-11-09T23:59:59').getTime();
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
      className="w-full max-w-4xl mx-auto px-3 sm:px-6 mt-1 sm:mt-1.5 mb-2 sm:mb-3 z-20 relative"
      aria-label="Last Day Offer Urgency Timer"
    >
      <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-gradient-to-r from-[#2a073f]/95 via-[#4a0d6b]/95 to-[#2a073f]/95 border-2 border-amber-400/80 shadow-[0_8px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(245,158,11,0.35)] backdrop-blur-xl text-center overflow-hidden">
        {/* Shimmer accent */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />

        {/* Top Urgency Strip: Seats filling fast */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/60 text-amber-200 text-[11px] sm:text-xs font-black tracking-wider uppercase mb-2 shadow-sm animate-pulse">
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Seats Are Filling Fast • Limited Seats Remaining</span>
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        </div>

        {/* Big Bold Headline: Today is the Last Day */}
        <h2 className="font-cinzel text-base sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1">
          <span className="gold-text-gradient">Today is the Last Day:</span>{' '}
          <strong className="text-yellow-300 font-black underline decoration-amber-400/80 underline-offset-4">
            Monday, November 9, 2026
          </strong>
        </h2>

        {/* Sub-headline: Offer Ends at Midnight */}
        <p className="text-xs sm:text-sm text-amber-200/90 font-medium mb-3">
          Offer Valid Until <strong className="text-white font-bold">12:00 AM Midnight Tonight</strong> Only. Once it ends, the 20% discount is gone forever!
        </p>

        {/* Minimalist, Marketing-Friendly Timer Display */}
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-xl bg-[#140422]/90 border border-amber-400/60 shadow-inner">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-spin-slow flex-shrink-0" />

          {/* Hours Box */}
          <div className="flex flex-col items-center">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {formatDigit(timeLeft.hours)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Hours
            </span>
          </div>

          <span className="text-amber-400 font-bold text-lg sm:text-xl -mt-2.5">:</span>

          {/* Minutes Box */}
          <div className="flex flex-col items-center">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {formatDigit(timeLeft.minutes)}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Mins
            </span>
          </div>

          <span className="text-amber-400 font-bold text-lg sm:text-xl -mt-2.5">:</span>

          {/* Seconds Box */}
          <div className="flex flex-col items-center">
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
