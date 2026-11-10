import React from 'react';
import { FestiveLightsHeader } from './components/FestiveLightsHeader';
import { AmbientBackground } from './components/AmbientBackground';
import { OfferCountdownTimer } from './components/OfferCountdownTimer';
import { RecentPurchaseToast } from './components/RecentPurchaseToast';
import { HeroBanner } from './components/HeroBanner';
import { PricingSection } from './components/PricingSection';
import { AccessGuideSection } from './components/AccessGuideSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HelpSection } from './components/HelpSection';
import { MainFooter } from './components/MainFooter';

export default function App() {
  const monthlyCheckoutUrl = 'https://learn.monkhoodclub.com/web/checkout/6a690eba258d6e22aee85fcf';
  const yearlyCheckoutUrl = 'https://learn.monkhoodclub.com/web/checkout/6a78bec74acf6bf7224468b2';

  return (
    <div className="min-h-screen text-slate-100 font-['Outfit',sans-serif] selection:bg-amber-500/40 selection:text-amber-100 antialiased relative overflow-x-hidden bg-[#10031c]">
      {/* Grand Top Festive Lightings Header with Cascading Strings, Hanging Brass Lanterns & Glowing Diyas */}
      <FestiveLightsHeader />

      {/* Royal Velvet Plum Canvas Ambient Particle Glow */}
      <AmbientBackground />

      {/* Main Festive Content Stream */}
      <main className="relative z-10">
        {/* Extended 1-Day Urgency Countdown & Seats Warning (Tuesday, November 10, 2026 - Ends Midnight) */}
        <div className="mt-3 sm:mt-5 mb-4 sm:mb-6">
          <OfferCountdownTimer />
        </div>

        {/* Replacement Hero Banner with User's Uploaded Festive Season Special Offer Graphic */}
        <div className="mb-4 sm:mb-8">
          <HeroBanner />
        </div>

        {/* Regular Pricing Stacks (Monthly ₹51 & Yearly ₹499) */}
        <div className="mb-8 sm:mb-14">
          <PricingSection
            customMonthlyUrl={monthlyCheckoutUrl}
            customYearlyUrl={yearlyCheckoutUrl}
          />
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
          <BenefitsSection
            customMonthlyUrl={monthlyCheckoutUrl}
            customYearlyUrl={yearlyCheckoutUrl}
          />
        </div>

        {/* Need Help Card with Contact Options */}
        <div className="mb-6 sm:mb-10">
          <HelpSection />
        </div>
      </main>

      {/* Footer */}
      <MainFooter />

      {/* Real-Time Mobile-Friendly Indian Name Recent Purchase Pop-up (every 7-10s) */}
      <RecentPurchaseToast />
    </div>
  );
}
