import React from 'react';
import { Sparkles } from 'lucide-react';

export const TopNavbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#05040a]/85 border-b border-amber-500/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          className="flex items-center space-x-2.5 whitespace-nowrap shrink-0 group"
          aria-label="Monkhood Club Home"
        >
          <img
            src="/logo-sm.webp"
            alt="Monkhood Club Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-full border border-amber-400/40 group-hover:border-amber-300 transition-colors shadow-[0_0_12px_rgba(245,158,11,0.3)]"
          />
          <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-slate-100 gold-text-gradient group-hover:brightness-110 transition-all">
            Monkhood Club
          </span>
        </a>

        {/* Zone 2: 4 Concise Single-Line Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300"
          aria-label="Primary Navigation"
        >
          <a
            href="#pricing-section"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Festive Offers
          </a>
          <a
            href="#access-guide-section"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            How to Access
          </a>
          <a
            href="#app-showcase-section"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            App Showcase
          </a>
          <a
            href="#help-section"
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            Support
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#pricing-section"
            className="inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:brightness-110 shadow-[0_0_20px_rgba(245,215,127,0.4)] btn-clicky tap-instant whitespace-nowrap shrink-0 border border-yellow-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950 flex-shrink-0" />
            <span>Join Now • 20% Off</span>
          </a>
        </div>
      </div>
    </header>
  );
};
