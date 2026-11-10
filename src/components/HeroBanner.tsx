import React, { useEffect } from 'react';
import { DiyaLamp } from './FestiveLightsHeader';

const BANNER_REDIRECT_URL = 'https://join.monkhood.in/';

const triggerHaptic = () => {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(12);
    }
  } catch {
    // Ignore unsupported
  }
};

const prefetchUrl = (url: string) => {
  try {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'document';
    document.head.appendChild(link);
  } catch {
    // Ignore
  }
};

export const HeroBanner: React.FC = () => {
  useEffect(() => {
    prefetchUrl(BANNER_REDIRECT_URL);
  }, []);

  return (
    <section
      id="hero-banner"
      className="relative pt-2 sm:pt-4 pb-2 sm:pb-4 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Monkhood Club Festive Season Offer Banner"
    >
      {/* Deep Royal Purple & Amber Glow Halos Behind Banner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] sm:h-[480px] bg-gradient-to-r from-amber-500/25 via-[#68198f]/40 to-amber-600/20 blur-[100px] sm:blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* Main Banner Container with Ornate Golden Border & Clickable Link */}
      <div className="relative group rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-amber-400/80 via-[#8022a8]/50 to-amber-500/80 shadow-[0_10px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(245,158,11,0.35)] border-2 border-amber-400/70 overflow-visible transition-all hover:border-yellow-300">
        {/* Animated Golden Rim Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/40 via-yellow-300/50 to-amber-500/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10 pointer-events-none rounded-3xl" />

        {/* Inner Card Frame - Wrapped in interactive link for instant fast redirection */}
        <a
          id="hero-banner-link"
          href={BANNER_REDIRECT_URL}
          target="_self"
          rel="noopener"
          aria-label="Join Monkhood Club - Click to explore regular pricing"
          onPointerDown={e => {
            e.currentTarget.setAttribute('data-active', 'true');
            triggerHaptic();
            prefetchUrl(BANNER_REDIRECT_URL);
          }}
          onPointerUp={e => e.currentTarget.removeAttribute('data-active')}
          onPointerCancel={e => e.currentTarget.removeAttribute('data-active')}
          onPointerLeave={e => e.currentTarget.removeAttribute('data-active')}
          onTouchStart={e => {
            e.currentTarget.setAttribute('data-active', 'true');
            triggerHaptic();
            prefetchUrl(BANNER_REDIRECT_URL);
          }}
          onTouchEnd={e => e.currentTarget.removeAttribute('data-active')}
          onTouchCancel={e => e.currentTarget.removeAttribute('data-active')}
          onPointerEnter={() => prefetchUrl(BANNER_REDIRECT_URL)}
          className="relative block rounded-[16px] sm:rounded-[22px] overflow-hidden bg-[#160424] cursor-pointer tap-instant select-none transition-transform duration-300 group-hover:brightness-105 active:scale-[0.99]"
        >
          <picture>
            <source srcSet="/assets/aistudio/Festive_Season_Offer_Thank_You_49bd9c7c.webp" type="image/webp" />
            <img
              id="hero-banner-image"
              src="/assets/aistudio/Festive_Season_Offer_Thank_You_49bd9c7c.png"
              alt="Thank You! For Taking Part in Our Festive Season Special Offer. This Offer is Now Officially Ended. Join Us with Our Regular Prices - Click to Join."
              width={1672}
              height={941}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-cover object-center max-h-[680px] rounded-[16px] sm:rounded-[22px] transition-transform duration-700 group-hover:scale-[1.01] shadow-2xl block"
            />
          </picture>

          {/* Vignette Overlay at the Edges for Cinematic Polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10031c]/60 via-transparent to-transparent pointer-events-none" />

          {/* Subtle click indicator shimmer on hover */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none" />
        </a>

        {/* Lower Left & Lower Right Decorative Diya Accents */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-4 sm:left-8 z-20 pointer-events-none">
          <DiyaLamp size={32} />
        </div>
        <div className="absolute -bottom-3 sm:-bottom-4 right-4 sm:right-8 z-20 pointer-events-none">
          <DiyaLamp size={32} />
        </div>
      </div>
    </section>
  );
};
