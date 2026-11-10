import React from 'react';
import { Flame, Clock } from 'lucide-react';

export const OfferCountdownTimer: React.FC = () => {
  // Offer is officially ended - timer permanently completed and stopped at 00:00:00
  const hours = '00';
  const minutes = '00';
  const seconds = '00';

  return (
    <div
      id="offer-countdown-banner"
      className="w-full max-w-3xl mx-auto px-3 sm:px-6 relative z-20"
      aria-label="Offer Ended Timer"
    >
      <div className="relative rounded-2xl sm:rounded-3xl pt-5 sm:pt-6 pb-3.5 sm:pb-4.5 px-4 sm:px-6 bg-gradient-to-r from-[#2a073f]/95 via-[#4a0d6b]/95 to-[#2a073f]/95 border-2 border-amber-400/80 shadow-[0_8px_35px_rgba(0,0,0,0.85),0_0_30px_rgba(245,158,11,0.35)] backdrop-blur-xl text-center overflow-visible">
        {/* Top Border Badge: The offer has ended */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          {/* Red badge with clean brightness blinking animation - zero shadow */}
          <span className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-black text-[10px] sm:text-xs tracking-widest uppercase border-2 border-yellow-300 whitespace-nowrap select-none shadow-none animate-badge-blink">
            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-200 fill-yellow-200 animate-pulse flex-shrink-0" />
            <span className="font-black tracking-wider">The offer has ended</span>
            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-200 fill-yellow-200 animate-pulse flex-shrink-0" />
          </span>
        </div>

        {/* Shimmer accent */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer pointer-events-none rounded-2xl sm:rounded-3xl" />

        {/* Spacious Timer Display - Permanently stopped at 00:00:00 */}
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2 rounded-xl bg-[#140422]/90 border border-amber-400/50 shadow-inner">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />

          {/* Hours Box */}
          <div className="flex flex-col items-center min-w-[34px] sm:min-w-[42px]">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {hours}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Hours
            </span>
          </div>

          <span className="text-amber-400/80 font-bold text-base sm:text-lg -mt-2">:</span>

          {/* Minutes Box */}
          <div className="flex flex-col items-center min-w-[34px] sm:min-w-[42px]">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {minutes}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Mins
            </span>
          </div>

          <span className="text-amber-400/80 font-bold text-base sm:text-lg -mt-2">:</span>

          {/* Seconds Box */}
          <div className="flex flex-col items-center min-w-[34px] sm:min-w-[42px]">
            <span className="font-price font-bold text-lg sm:text-2xl text-yellow-300 tracking-tight leading-none">
              {seconds}
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-200/70 uppercase tracking-wider font-semibold mt-0.5">
              Secs
            </span>
          </div>
        </div>

        {/* Regular Pricing Callout Below Timer */}
        <div className="mt-3 sm:mt-3.5 space-y-0.5 sm:space-y-1">
          <p className="text-xs sm:text-sm md:text-base text-amber-100 font-semibold tracking-wide">
            You can still join the community with our regular pricing
          </p>
          <p className="text-[11px] sm:text-xs text-amber-300/85 font-normal">
            (Check out Below. The Monthly and Yearly Memberships)
          </p>
        </div>
      </div>
    </div>
  );
};
