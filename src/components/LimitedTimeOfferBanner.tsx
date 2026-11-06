import React from 'react';
import { Sparkles } from 'lucide-react';

export const LimitedTimeOfferBanner: React.FC = () => {
  return (
    <div
      id="limited-time-offer-section"
      className="w-full px-3 text-center my-1 sm:my-2"
      aria-label="Limited Time Offer"
    >
      <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-[#2d073f]/90 to-amber-500/20 border border-amber-400/70 shadow-[0_0_15px_rgba(245,158,11,0.3)] backdrop-blur-md max-w-full">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse flex-shrink-0" />
        <span className="font-cinzel text-[11px] sm:text-xs md:text-sm font-black tracking-widest text-amber-200 uppercase drop-shadow select-none whitespace-nowrap">
          Limited Time Offer
        </span>
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse flex-shrink-0" />
      </div>
    </div>
  );
};
