import React from 'react';
import { IMAGES } from '../data/content';
import { Sparkles, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMore,
  onOpenQuoteModal,
}) => {
  return (
    <section
      id="about-full"
      className="relative py-28 bg-[#08080a] border-b border-white/5 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media with Luxury Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#BF953F]/30 via-transparent to-[#FCF6BA]/20 rounded-3xl blur-xl" />

              <div className="relative rounded-3xl overflow-hidden border border-[#B38728]/35 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-[#0e0e12]">
                <img
                  src={IMAGES.inspection}
                  alt="Apex Duct Cleaning Certified Specialist inspecting home air ventilation"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-center hover:scale-105 transition-transform duration-700 filter brightness-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08080a]/92 backdrop-blur-xl border border-[#B38728]/40 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-serif font-black text-white">NADCA & EPA</div>
                      <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-sans">
                        Standardized Safety Protocols
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#BF953F]/20 border border-[#BF953F]/40 flex items-center justify-center text-gold">
                      <ShieldCheck className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>ABOUT APEX DUCT CLEANING</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
              PROFESSIONAL SERVICE.
              <br />
              <span className="gold-text italic">A CLEANER APPROACH.</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#BF953F] to-transparent rounded-full" />

            <p className="text-lg text-neutral-200 leading-relaxed font-light">
              At Apex Duct Cleaning, we believe homeowners deserve professional, dependable and transparent service.
            </p>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Our focus is residential air duct, dryer vent and HVAC cleaning, helping homeowners maintain cleaner ventilation systems and better airflow throughout their homes.
            </p>

            <p className="text-base text-neutral-400 leading-relaxed font-normal">
              We proudly serve homeowners across the United States and make it easy to check availability and request service online.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Zero Mess & HEPA Containment</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Background-Checked Technicians</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Upfront & Honest Pricing</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Nationwide Residential Coverage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="about-learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-gold hover:scale-[1.02]"
              >
                <span>LEARN MORE ABOUT APEX</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="about-free-inspection-btn"
                onClick={() => onOpenQuoteModal('free-inspection')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-neutral-200 border border-[#B38728]/40 hover:border-[#BF953F] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors backdrop-blur-sm"
              >
                <span>REQUEST FREE INSPECTION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
