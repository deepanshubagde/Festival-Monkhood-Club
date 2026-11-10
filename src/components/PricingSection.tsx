import React, { useEffect } from 'react';
import { Check, Zap } from 'lucide-react';

interface PricingProps {
  customMonthlyUrl?: string;
  customYearlyUrl?: string;
}

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

const monthlyFeatures = [
  'Daily Monk Morning Sangha Sessions',
  'Sunday Weekly Live Community Sessions',
  'Premium Recorded Courses',
  'Live Guest Expert Sessions',
  'Session Recordings',
  'Community Access',
  'Mindfulness & Meditation Library',
  "Buddha's Wisdom for Modern Life",
  'New Course Every Month',
];

const yearlyFeatures = [
  'Daily Monk Morning Sangha Sessions',
  'Sunday Weekly Live Community Sessions',
  'Premium Recorded Courses',
  'Live Guest Expert Sessions',
  'Session Recordings',
  'Community Access',
  'Mindfulness & Meditation Library',
  "Buddha's Wisdom for Modern Life",
  'New Course Every Month',
  'Early Access to Every New Course',
  'Priority Registration for Offline Events',
  'Members-only Surprise Sessions',
  'VIP Community Badge',
  'Gamification',
  'Monthly Challenges',
];

export const PricingSection: React.FC<PricingProps> = ({
  customMonthlyUrl = 'https://learn.monkhoodclub.com/web/checkout/6a690eba258d6e22aee85fcf',
  customYearlyUrl = 'https://learn.monkhoodclub.com/web/checkout/6a78bec74acf6bf7224468b2',
}) => {
  useEffect(() => {
    prefetchUrl(customMonthlyUrl);
    prefetchUrl(customYearlyUrl);
  }, [customMonthlyUrl, customYearlyUrl]);

  return (
    <section
      id="pricing-section"
      className="relative pt-2 sm:pt-6 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 scroll-mt-6"
      aria-label="Monkhood Club Membership Pricing Plans"
    >
      {/* Ornate Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
        <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black tracking-wide text-white gold-text-gradient drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Choose Your Membership
        </h2>
        <p className="text-xs sm:text-base text-amber-200 font-medium mt-2">
          You can still join the community with our regular pricing
        </p>
        <p className="text-[11px] sm:text-xs text-amber-300/80 font-light mt-1">
          (Check out Below the Monthly and Yearly Memberships)
        </p>
      </div>

      {/* Two Membership Stacks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
        {/* =========================================
            CARD 1: MONTHLY MEMBERSHIP
            ========================================= */}
        <div
          id="monthly-membership-card"
          className="relative group rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 bg-gradient-to-b from-[#220738]/90 via-[#180428]/95 to-[#10021c] border-2 border-amber-500/40 hover:border-amber-400/70 shadow-[0_15px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between transition-all duration-300"
        >
          <div>
            {/* Header */}
            <div className="mb-2">
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-amber-100 tracking-wide gold-text-gradient">
                MONTHLY MEMBERSHIP
              </h3>
              <p className="text-xs sm:text-sm text-slate-300/90 font-light mt-1">
                Perfect to begin your mindfulness journey.
              </p>
            </div>

            {/* Price Box */}
            <div className="my-5 pb-5 border-b border-amber-500/25">
              <div className="flex items-baseline space-x-1.5">
                <span className="font-price text-5xl sm:text-6xl font-bold gold-text-gradient tracking-tight drop-shadow-[0_2px_15px_rgba(245,158,11,0.5)]">
                  ₹51
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  /month
                </span>
              </div>
            </div>

            {/* Features List Header */}
            <div className="mb-3.5">
              <span className="text-[11px] font-bold tracking-[0.2em] text-amber-300/80 uppercase font-cinzel">
                INCLUDES
              </span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {monthlyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 text-[10px] flex-shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
                    <Check className="w-3 h-3 text-amber-300 stroke-[3]" />
                  </span>
                  <span className="font-medium text-slate-200">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA & Renewal Notice */}
          <div className="pt-2">
            <a
              id="monthly-checkout-btn"
              href={customMonthlyUrl}
              target="_self"
              rel="noopener"
              onPointerDown={e => {
                e.currentTarget.setAttribute('data-active', 'true');
                triggerHaptic();
                prefetchUrl(customMonthlyUrl);
              }}
              onPointerUp={e => e.currentTarget.removeAttribute('data-active')}
              onPointerCancel={e => e.currentTarget.removeAttribute('data-active')}
              onPointerLeave={e => e.currentTarget.removeAttribute('data-active')}
              onTouchStart={e => {
                e.currentTarget.setAttribute('data-active', 'true');
                triggerHaptic();
                prefetchUrl(customMonthlyUrl);
              }}
              onTouchEnd={e => e.currentTarget.removeAttribute('data-active')}
              onTouchCancel={e => e.currentTarget.removeAttribute('data-active')}
              onPointerEnter={() => prefetchUrl(customMonthlyUrl)}
              className="w-full block text-center py-3.5 sm:py-4 px-6 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase text-amber-200 shadow-[0_0_25px_rgba(180,83,9,0.3)] btn-clicky tap-instant cursor-pointer select-none bg-gradient-to-r from-[#2c1806] via-[#48280b] to-[#2c1806] hover:brightness-125 active:scale-[0.95] active:translate-y-[2px] border border-amber-600/70"
            >
              JOIN MONTHLY
            </a>
            <p className="text-[11px] text-center text-slate-400/80 mt-2.5 font-normal">
              Renews automatically every month.
            </p>
          </div>
        </div>

        {/* =========================================
            CARD 2: YEARLY MEMBERSHIP (MOST POPULAR)
            ========================================= */}
        <div
          id="yearly-membership-card"
          className="relative group rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 bg-gradient-to-b from-[#340b54] via-[#22073a] to-[#140324] border-2 border-yellow-300/90 hover:border-amber-300 festive-card-glow-popular flex flex-col justify-between overflow-visible transition-all duration-300 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.35)]"
        >
          {/* Top Badge: MOST POPULAR */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <span className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-slate-950 font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.7)] border border-yellow-200 whitespace-nowrap">
              <Zap className="w-3 h-3 text-slate-950 fill-slate-950 flex-shrink-0" />
              <span>MOST POPULAR</span>
            </span>
          </div>

          <div>
            {/* Header */}
            <div className="mb-2 pt-2 sm:pt-1">
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white tracking-wide gold-text-gradient">
                YEARLY MEMBERSHIP
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 font-light mt-1">
                Pay once and enjoy the entire year.
              </p>
            </div>

            {/* Price Box with Strikethrough & Savings Pill */}
            <div className="my-5 pb-5 border-b border-amber-500/35">
              <div className="flex items-baseline space-x-2.5 flex-wrap">
                <span className="line-through text-slate-400/70 font-price text-xl sm:text-2xl font-normal">
                  ₹612
                </span>
                <span className="font-price text-5xl sm:text-6xl font-bold gold-text-gradient tracking-tight drop-shadow-[0_2px_15px_rgba(245,158,11,0.6)]">
                  ₹499
                </span>
                <span className="text-xs sm:text-sm text-amber-200 font-medium">
                  /year
                </span>
              </div>

              {/* Savings Pill */}
              <div className="mt-2.5">
                <span className="inline-block text-[10px] sm:text-[11px] font-extrabold tracking-wider text-amber-200 bg-amber-400/15 border border-amber-400/40 px-3 py-0.5 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                  SAVE 18% • YOU SAVE ₹113
                </span>
              </div>
            </div>

            {/* Features List Header */}
            <div className="mb-3.5">
              <span className="text-[11px] font-bold tracking-[0.2em] text-amber-300/90 uppercase font-cinzel">
                EVERYTHING IN MONTHLY, PLUS
              </span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {yearlyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400/40 to-yellow-500/30 border border-yellow-300 flex items-center justify-center text-amber-200 text-[10px] flex-shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    <Check className="w-3 h-3 text-slate-950 stroke-[3]" />
                  </span>
                  <span className="font-medium text-slate-200">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="pt-2">
            <a
              id="yearly-checkout-btn"
              href={customYearlyUrl}
              target="_self"
              rel="noopener"
              onPointerDown={e => {
                e.currentTarget.setAttribute('data-active', 'true');
                triggerHaptic();
                prefetchUrl(customYearlyUrl);
              }}
              onPointerUp={e => e.currentTarget.removeAttribute('data-active')}
              onPointerCancel={e => e.currentTarget.removeAttribute('data-active')}
              onPointerLeave={e => e.currentTarget.removeAttribute('data-active')}
              onTouchStart={e => {
                e.currentTarget.setAttribute('data-active', 'true');
                triggerHaptic();
                prefetchUrl(customYearlyUrl);
              }}
              onTouchEnd={e => e.currentTarget.removeAttribute('data-active')}
              onTouchCancel={e => e.currentTarget.removeAttribute('data-active')}
              onPointerEnter={() => prefetchUrl(customYearlyUrl)}
              className="w-full block text-center py-3.5 sm:py-4 px-6 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase text-slate-950 shadow-[0_0_35px_rgba(251,191,36,0.8)] btn-clicky tap-instant cursor-pointer select-none bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 hover:brightness-110 active:scale-[0.95] active:translate-y-[2px] border-2 border-yellow-100"
            >
              JOIN YEARLY
            </a>
            <p className="text-[11px] text-center text-amber-200/80 mt-2.5 font-medium">
              Best value for complete 365-day transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
