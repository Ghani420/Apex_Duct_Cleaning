import React from 'react';
import { IMAGES } from '../data/content';
import { Sparkles, ArrowRight, Shield } from 'lucide-react';

interface FinalCtaProps {
  onOpenZipModal: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onOpenZipModal,
  onOpenQuoteModal,
}) => {
  return (
    <section
      id="final-cta"
      className="relative py-28 sm:py-32 bg-[#050505] overflow-hidden border-t border-b border-[#B38728]/35"
    >
      {/* Background Image: Low visibility / cinematic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.airDuct}
          alt="Apex Duct Cleaning System Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.18] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/40 text-gold text-xs font-bold tracking-widest uppercase shadow-lg">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>SCHEDULE YOUR SERVICE TODAY</span>
        </div>

        {/* Large Headline */}
        <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          READY TO BREATHE <br />
          <span className="gold-text italic drop-shadow-[0_0_35px_rgba(229,185,100,0.4)]">
            CLEANER?
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Check your ZIP code and request your free inspection or quote today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="final-cta-check-availability"
            onClick={onOpenZipModal}
            className="w-full sm:w-auto px-9 py-4 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-gold-lg hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>CHECK AVAILABILITY</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            id="final-cta-free-inspection"
            onClick={() => onOpenQuoteModal('free-inspection')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-neutral-100 border border-[#B38728]/50 hover:border-[#BF953F] font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg backdrop-blur-sm"
          >
            <Shield className="w-4 h-4 text-gold" />
            <span>GET FREE INSPECTION</span>
          </button>
        </div>
      </div>
    </section>
  );
};
