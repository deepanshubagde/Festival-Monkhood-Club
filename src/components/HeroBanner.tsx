import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { DiyaLamp } from './FestiveLightsHeader';

export const HeroBanner: React.FC = () => {
  return (
    <section
      id="hero-banner"
      className="relative pt-2 sm:pt-4 pb-2 sm:pb-4 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Monkhood Club Festive Season Offer Banner"
    >
      {/* Deep Royal Purple & Amber Glow Halos Behind Banner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] sm:h-[480px] bg-gradient-to-r from-amber-500/25 via-[#68198f]/40 to-amber-600/20 blur-[100px] sm:blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* Main Banner Container with Ornate Golden Border */}
      <div className="relative group rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 bg-gradient-to-b from-amber-400/80 via-[#8022a8]/50 to-amber-500/80 shadow-[0_10px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(245,158,11,0.35)] border-2 border-amber-400/70 overflow-visible transition-all">
        {/* Animated Golden Rim Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/40 via-yellow-300/50 to-amber-500/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10 pointer-events-none rounded-3xl" />

        {/* Inner Card Frame */}
        <div className="relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-[#160424]">
          <picture>
            <source srcSet="/assets/aistudio/Festive_Season_Yearly_Membership_Offer_f0b710ba.webp" type="image/webp" />
            <img
              id="hero-banner-image"
              src="/assets/aistudio/Festive_Season_Yearly_Membership_Offer_f0b710ba.png"
              alt="Monkhood Club Festive Season Special Offer - 20% Off for Yearly Membership (₹499 to ₹399)"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-cover object-center max-h-[680px] rounded-[16px] sm:rounded-[22px] transition-transform duration-700 hover:scale-[1.006] shadow-2xl block"
            />
          </picture>

          {/* Vignette Overlay at the Edges for Cinematic Polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10031c]/60 via-transparent to-transparent pointer-events-none" />
        </div>

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
