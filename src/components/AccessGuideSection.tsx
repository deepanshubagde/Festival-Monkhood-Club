import React from 'react';
import { Smartphone, Mail, Users, ArrowRight } from 'lucide-react';
import { DiyaLamp } from './FestiveLightsHeader';

interface Step {
  number: string;
  title: string;
  description: string;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Activate your Subscription',
    description:
      'Click on "Join Yearly" or "Join Monthly" to complete your secure registration (UPI, Cards, Net Banking, etc.).',
    actionText: 'Instant Membership Setup',
    icon: Smartphone,
    badge: 'Instant Setup',
  },
  {
    number: '02',
    title: 'Check WhatsApp & Mail',
    description:
      'You will receive an instant confirmation message on your registered WhatsApp and Email with the App Download link.',
    actionText: 'Get App Download Link',
    icon: Mail,
    badge: 'Email & WhatsApp',
  },
  {
    number: '03',
    title: 'Join Private Community',
    description:
      'Join the private WhatsApp community where you will get direct private messages and daily live sangha updates.',
    actionText: 'Access Sangha Circle',
    icon: Users,
    badge: 'Direct Access',
  },
];

export const AccessGuideSection: React.FC = () => {
  return (
    <section
      id="access-guide-section"
      className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative scroll-mt-6"
      aria-label="How to Access Monkhood Club"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-400/20 to-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Simple Onboarding</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-black tracking-wide text-white mb-2 sm:mb-3 gold-text-gradient drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          How to Access Monkhood Club
        </h2>
        <p className="text-xs sm:text-base text-slate-300 font-light leading-relaxed">
          Follow these 3 simple steps right after activating your membership to step into your daily digital sangha.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              id={`access-step-card-${idx + 1}`}
              className="relative group rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#220738]/90 via-[#180428]/95 to-[#10021c] border-2 border-amber-500/40 hover:border-amber-400/80 backdrop-blur-xl festive-card-glow transition-all duration-300 flex flex-col justify-between hover:scale-[1.01]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/30 to-amber-600/15 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105 group-hover:border-amber-300 transition-all duration-300">
                    <Icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <span className="font-cinzel text-3xl font-black text-amber-400/40 group-hover:text-amber-300/60 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="mb-2.5">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-amber-400/15 px-3 py-0.5 rounded-full border border-amber-400/30 mb-2">
                    Step {idx + 1} • {step.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide font-cinzel">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 whitespace-pre-line">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>{step.actionText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
