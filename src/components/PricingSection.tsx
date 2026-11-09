import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { DiyaLamp } from './FestiveLightsHeader';

interface PricingProps {
  customMonthlyUrl?: string;
  customYearlyUrl?: string;
}

const triggerHaptic = () => {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
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

const yearlyFeatures = [
  'Daily Monk Morning Sangha Sessions',
  'Sunday Weekly Live Community Sessions',
  'Premium Recorded Mastercourses',
  'Live Guest Expert Sessions',
  'Full Session Recordings Archive',
  'Private Global Community Access',
  'Mindfulness & Meditation Vault',
  "Buddha's Wisdom for Modern Life",
  'New Course Added Every Month',
  'Early VIP Access to Every New Course',
  'Priority Registration for Offline Retreats',
  'Members-Only Surprise Wisdom Circles',
  'Exclusive VIP Sangha Badge',
  'Mindful Gamification & Milestones',
  'Monthly Habit Transformation Challenges',
];

export const PricingSection: React.FC<PricingProps> = ({
  customYearlyUrl = 'https://learn.monkhoodclub.com/l/8cbf23b69c',
}) => {
  useEffect(() => {
    prefetchUrl(customYearlyUrl);
  }, [customYearlyUrl]);

  return (
    <section
      id="pricing-section"
      className="relative pt-2 sm:pt-6 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 scroll-mt-6"
      aria-label="Festive Membership Pricing Plans"
    >
      {/* Decorative Ornate Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
        <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black tracking-wide text-white gold-text-gradient drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Enlighten Your Life This Festive Season
        </h2>
      </div>

      {/* Centered Yearly Membership Plan Card */}
      <div className="max-w-xl mx-auto">
        <div
          id="yearly-membership-card"
          className="relative group rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 bg-gradient-to-b from-[#340b54] via-[#22073a] to-[#140324] border-2 border-yellow-300/90 hover:border-amber-300 festive-card-glow-popular flex flex-col justify-between overflow-visible transition-all duration-300 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.35)]"
        >
          <div>
            <div className="flex items-center justify-between mb-2 pt-2">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white tracking-wide gold-text-gradient">
                Yearly Membership
              </h3>
              <DiyaLamp size={32} />
            </div>

            <p className="text-xs sm:text-sm text-amber-200/90 font-light mb-5 sm:mb-6">
              Pay once and enjoy 365 days of sacred daily mindfulness and sangha wisdom.
            </p>

            {/* Price Box with Strikethroughs and New Price ₹399 */}
            <div className="mb-5 pb-5 sm:pb-6 border-b border-amber-500/40">
              <div className="flex items-baseline space-x-3">
                <span className="line-through text-amber-500/50 font-price text-xl sm:text-2xl font-normal">
                  ₹612
                </span>
                <span className="line-through text-amber-400/70 font-price text-2xl sm:text-3xl font-semibold">
                  ₹499
                </span>
                <span className="font-price text-6xl sm:text-7xl font-bold gold-text-gradient tracking-tight drop-shadow-[0_2px_20px_rgba(245,158,11,0.7)]">
                  ₹399
                </span>
                <span className="text-sm sm:text-base text-amber-200 font-medium">
                  /year
                </span>
              </div>

              <div className="mt-2.5">
                <span className="inline-block text-[11px] font-extrabold tracking-wider text-slate-950 bg-gradient-to-r from-yellow-300 to-amber-400 border border-yellow-100 px-3.5 py-1 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  FLAT 20% OFF • EXPIRES TONIGHT AT 12:00 AM MIDNIGHT
                </span>
              </div>
            </div>

            <div className="mb-3.5">
              <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400/90 uppercase font-cinzel">
                WHAT'S INCLUDED IN YEARLY SANGHA
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {yearlyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400/40 to-yellow-500/30 border border-yellow-300 flex items-center justify-center text-amber-200 text-[11px] flex-shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                    <Check className="w-3 h-3 text-slate-950 stroke-[3]" />
                  </span>
                  <span className="font-medium text-slate-200">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
              className="w-full block text-center py-4 px-6 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.8)] btn-clicky tap-instant cursor-pointer select-none bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 hover:brightness-110 active:scale-[0.94] active:translate-y-[2px] border-2 border-yellow-100"
            >
              Yearly 399/year
            </a>
            <p className="text-[11px] text-center text-amber-200 mt-3 font-semibold">
              ⚡ Today is the Last Day: Monday, Nov 9 Offer Ends at 12:00 AM Midnight • Once Gone, Gone Forever!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
