import React from 'react';
import { IMAGES } from '../data/content';
import { Sparkles, ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface IntroductionProps {
  onDiscoverApex: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  onDiscoverApex,
  onOpenQuoteModal,
}) => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#08080a] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>THE APEX COMMITMENT</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
              YOUR HOME DESERVES
              <br />
              <span className="gold-text italic">CLEANER AIR.</span>
            </h2>

            {/* Gold Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-transparent rounded-full shadow-[0_0_10px_rgba(191,149,63,0.6)]" />

            {/* Paragraph 1 */}
            <p className="text-lg sm:text-xl font-light text-neutral-200 leading-relaxed">
              Apex Duct Cleaning provides professional residential air duct, dryer vent and HVAC cleaning services for homeowners across the United States.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base text-neutral-400 leading-relaxed font-normal">
              Our goal is simple: provide professional service that helps homeowners maintain cleaner ventilation systems and better airflow throughout their homes.
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#B38728]/40 transition-all backdrop-blur-sm shadow-sm">
                <div className="gold-text font-serif font-bold text-2xl mb-1">99.4%</div>
                <div className="text-xs text-neutral-400 font-medium">Particulate & allergen removal rate</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#B38728]/40 transition-all backdrop-blur-sm shadow-sm">
                <div className="gold-text font-serif font-bold text-2xl mb-1">50+</div>
                <div className="text-xs text-neutral-400 font-medium">US States supported nationwide</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#B38728]/40 transition-all backdrop-blur-sm shadow-sm">
                <div className="gold-text font-serif font-bold text-2xl mb-1">100%</div>
                <div className="text-xs text-neutral-400 font-medium">Satisfaction backed service</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="intro-discover-apex-btn"
                onClick={onDiscoverApex}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl gold-gradient text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:gold-gradient-hover transition-all duration-300 shadow-gold hover:scale-[1.02]"
              >
                <span>DISCOVER APEX</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="intro-quote-btn"
                onClick={() => onOpenQuoteModal('air-duct-cleaning')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-neutral-200 border border-[#B38728]/40 hover:border-[#BF953F] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors backdrop-blur-sm"
              >
                <span>GET DETAILED ESTIMATE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Technician Image with Gold Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#BF953F]/30 via-transparent to-[#FCF6BA]/20 rounded-2xl blur-lg" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#B38728]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#0c0c0e]">
                <img
                  src={IMAGES.aboutTech}
                  alt="Apex Duct Cleaning Certified Ventilation Technician with Air Quality Monitor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover object-top hover:scale-[1.02] transition-transform duration-700 filter brightness-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
