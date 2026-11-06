import React from 'react';
import { FestiveLightsHeader } from './components/FestiveLightsHeader';
import { AmbientBackground } from './components/AmbientBackground';
import { LimitedTimeOfferBanner } from './components/LimitedTimeOfferBanner';
import { HeroBanner } from './components/HeroBanner';
import { PricingSection } from './components/PricingSection';
import { AccessGuideSection } from './components/AccessGuideSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HelpSection } from './components/HelpSection';
import { MainFooter } from './components/MainFooter';

export default function App() {
  const yearlyCheckoutUrl = 'https://learn.monkhoodclub.com/l/8cbf23b69c';

  return (
    <div className="min-h-screen text-slate-100 font-['Outfit',sans-serif] selection:bg-amber-500/40 selection:text-amber-100 antialiased relative overflow-x-hidden bg-[#10031c]">
      {/* Grand Top Festive Lightings Header with Cascading Strings, Hanging Brass Lanterns & Glowing Diyas */}
      <FestiveLightsHeader />

      {/* Royal Velvet Plum Canvas Ambient Particle Glow */}
      <AmbientBackground />

      {/* Main Festive Content Stream */}
      <main className="relative z-10">
        {/* New Section Above the Header Image: Limited Time Offer */}
        <div className="mb-2 sm:mb-4">
          <LimitedTimeOfferBanner />
        </div>

        {/* Replacement Hero Banner with User's Uploaded Festive Season Special Offer Graphic */}
        <div className="mb-4 sm:mb-8">
          <HeroBanner />
        </div>

        {/* Festive Value Card (Yearly ₹399 - Flat 20% Off) */}
        <div className="mb-8 sm:mb-14">
          <PricingSection customYearlyUrl={yearlyCheckoutUrl} />
        </div>

        {/* Access Guide in Royal Plum & Ornate Gold */}
        <div className="mb-8 sm:mb-14">
          <AccessGuideSection />
        </div>

        {/* Interactive App Showcase in Festive Frame */}
        <div className="mb-8 sm:mb-14">
          <AppShowcaseSection />
        </div>

        {/* Shimmering Action CTAs & Value Pillars */}
        <div className="mb-8 sm:mb-14">
          <BenefitsSection customYearlyUrl={yearlyCheckoutUrl} />
        </div>

        {/* Need Help Card with Contact Options */}
        <div className="mb-6 sm:mb-10">
          <HelpSection />
        </div>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
