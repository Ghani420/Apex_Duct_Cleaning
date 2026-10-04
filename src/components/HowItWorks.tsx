import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenZipModal: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenZipModal,
  onOpenQuoteModal,
}) => {
  return (
    <section
      id="how-it-works"
      className="relative py-28 bg-[#08080a] border-b border-white/5 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(191,149,63,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SEAMLESS PROCESS</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            HOW IT <span className="gold-text italic">WORKS</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal">
            Four simple steps from your ZIP code verification to immaculate, clean home airflow.
          </p>
        </div>

        {/* 4-Step Timeline Grid with Connection Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle Horizontal Connector for desktop */}
          <div className="hidden lg:block absolute top-14 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/40 to-transparent z-0" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              id={`timeline-step-${step.stepNumber}`}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-black/80 border border-[#B38728]/40 group-hover:border-[#BF953F] group-hover:shadow-gold flex items-center justify-center mb-6 transition-all duration-300">
                <span className="font-serif font-black text-2xl gold-text">
                  0{step.stepNumber}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#FCF6BA] transition-colors tracking-wide uppercase mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick CTA Bottom Bar */}
        <div className="mt-16 text-center">
          <button
            id="how-it-works-start-cta"
            onClick={onOpenZipModal}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-gold hover:scale-105"
          >
            <span>START WITH STEP 1: CHECK ZIP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
