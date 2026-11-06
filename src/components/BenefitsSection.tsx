import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Sun,
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Video,
  MessageCircle,
} from 'lucide-react';
import { DiyaLamp } from './FestiveLightsHeader';

interface BenefitsProps {
  customMonthlyUrl?: string;
  customYearlyUrl?: string;
}

const triggerHaptic = () => {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  } catch {
    // Ignore
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

const benefitsList = [
  { icon: Sun, label: 'Daily Guided Meditation' },
  { icon: Users, label: 'Supportive Community' },
  { icon: BookOpen, label: 'Premium Learning Library' },
  { icon: GraduationCap, label: 'Learn at Your Own Pace' },
  { icon: TrendingUp, label: 'Continuous Personal Growth' },
  { icon: ShieldCheck, label: 'Trusted by the Monkhood Community' },
  { icon: Video, label: 'Weekly Sunday Live Sessions' },
  { icon: MessageCircle, label: 'Interactive Community Feed Access' },
];

export const BenefitsSection: React.FC<BenefitsProps> = ({
  customMonthlyUrl = 'https://learn.monkhoodclub.com/web/checkout/6a690eba258d6e22aee85fcf',
  customYearlyUrl = 'https://learn.monkhoodclub.com/l/8cbf23b69c',
}) => {
  return (
    <section
      id="benefits-section"
      className="pt-6 sm:pt-10 pb-12 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative scroll-mt-6"
      aria-label="Membership Benefits and Direct Actions"
    >
      {/* Single Yearly Action Button with Flat 20% Off Festive Pricing */}
      <div className="flex items-center justify-center mb-10 text-center w-full px-2">
        {/* Yearly Action Button */}
        <a
          id="benefits-join-yearly-btn"
          href={customYearlyUrl}
          target="_self"
          rel="noopener"
          aria-label="Join Yearly $399"
          data-label="Join Yearly $399"
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
          className="btn-clicky animate-gold-pulse group relative inline-flex items-center justify-center space-x-2.5 sm:space-x-3.5 w-full max-w-md sm:w-auto px-7 sm:px-12 py-4 sm:py-4.5 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase text-slate-950 shadow-[0_0_45px_rgba(251,191,36,0.85)] hover:shadow-[0_0_80px_rgba(251,191,36,1)] tap-instant cursor-pointer overflow-hidden border-2 border-yellow-100 select-none min-h-[56px] bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 active:scale-[0.94] active:translate-y-[2px]"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
          <Sparkles className="w-4 h-4 text-slate-950 animate-pulse flex-shrink-0" />
          <span className="font-extrabold tracking-widest">
            Join Yearly ₹399
          </span>
          <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform flex-shrink-0" />
        </a>
      </div>

      {/* Trust & Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {benefitsList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              id={`benefit-pill-${idx}`}
              className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-gradient-to-b from-[#24083a]/80 to-[#160426]/90 border border-amber-500/35 hover:border-amber-400/80 backdrop-blur-md transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] group"
            >
              <div className="flex-shrink-0 text-amber-400 group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-200 transition-colors truncate">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
