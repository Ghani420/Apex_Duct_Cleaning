import React from 'react';
import { ServiceType, SubmittedLead } from '../types';
import { Sparkles } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface QuoteFormSectionProps {
  initialZip?: string;
  initialService?: ServiceType | string;
  onLeadSubmitted?: (lead: SubmittedLead) => void;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  initialZip = '',
  initialService = 'Air Duct Cleaning',
  onLeadSubmitted,
}) => {
  return (
    <section
      id="quote-section"
      className="relative py-28 bg-[#050505] border-b border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>INSTANT TRANSPARENT PRICING</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            GET YOUR <span className="gold-text italic">FREE QUOTE</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal">
            Tell us what your home needs and an Apex representative can follow up with you.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl glass-card border border-[#B38728]/35 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          <LeadForm
            idPrefix="homepage-quote"
            initialZip={initialZip}
            initialService={initialService}
            submitButtonText="GET MY FREE QUOTE"
            onSuccess={onLeadSubmitted}
          />
        </div>
      </div>
    </section>
  );
};
