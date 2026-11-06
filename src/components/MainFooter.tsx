import React from 'react';
import { DiyaLamp } from './FestiveLightsHeader';

export const MainFooter: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="py-10 sm:py-14 border-t border-amber-500/20 text-center text-xs text-slate-400 relative z-10 bg-[#0d0218]/90 backdrop-blur-md"
    >
      <div className="max-w-4xl mx-auto px-4 space-y-3">
        <div className="flex items-center justify-center gap-3">
          <DiyaLamp size={24} />
          <p className="font-semibold text-slate-200 text-sm">
            Made with <span className="text-amber-400 animate-pulse">🧡</span> by Monkhood Club
          </p>
          <DiyaLamp size={24} />
        </div>

        <p className="text-[11px] text-amber-400/80 font-light tracking-wider">
          Grand Festive Season Edition • Festival of Lights Celebration • Monkhood
        </p>
      </div>
    </footer>
  );
};
