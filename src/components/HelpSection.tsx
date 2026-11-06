import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { DiyaLamp } from './FestiveLightsHeader';

export const HelpSection: React.FC = () => {
  return (
    <section
      id="help-section"
      className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 max-w-2xl mx-auto z-10 relative scroll-mt-6"
      aria-label="Need Help or Support"
    >
      <div
        id="help-card"
        className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#24083a]/90 via-[#180428]/95 to-[#10021c] border-2 border-amber-500/40 backdrop-blur-md text-center festive-card-glow transition-all"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <DiyaLamp size={22} />
          <h4 className="text-[11px] font-black tracking-[0.25em] text-amber-400 uppercase font-cinzel">
            NEED HELP WITH SUBSCRIPTION?
          </h4>
          <DiyaLamp size={22} />
        </div>

        <p className="text-xs text-slate-300 font-light mb-5">
          Our monkhood support team is here to assist you throughout the festive season.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-slate-200">
          {/* Phone Call Link */}
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 px-4 py-2 rounded-xl border border-amber-400/25">
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400 font-normal">Call: </span>
            <a
              id="help-call-link"
              href="tel:+918080024707"
              className="font-bold text-white hover:text-amber-300 transition-colors tap-instant cursor-pointer"
            >
              <span className="mr-1">+91</span>
              <span>8080024707</span>
            </a>
          </div>

          {/* Email Support Link */}
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 px-4 py-2 rounded-xl border border-amber-400/25">
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400 font-normal">Email: </span>
            <a
              id="help-email-link"
              href="mailto:monkhoodlife@gmail.com"
              className="font-bold text-white hover:text-amber-300 transition-colors tap-instant cursor-pointer"
            >
              monkhoodlife@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
