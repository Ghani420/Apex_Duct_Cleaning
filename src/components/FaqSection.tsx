import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenZipModal: () => void;
  onOpenQuoteModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenZipModal,
  onOpenQuoteModal,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 bg-[#050505] border-b border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            FREQUENTLY <span className="gold-text italic">ASKED QUESTIONS</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal">
            Everything you need to know about our residential air duct and dryer vent cleaning services.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl glass-card transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#BF953F]/60 shadow-gold' : 'hover:border-[#BF953F]/40'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#08080a] border border-[#B38728]/40 flex items-center justify-center flex-shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180 gold-gradient text-black border-transparent shadow-gold' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Bottom Box */}
        <div className="mt-12 p-6 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-gold flex-shrink-0" />
            <div>
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Still have questions?
              </h4>
              <p className="text-xs text-neutral-400 font-normal">
                Our technicians are ready to assess your home's air duct system with zero obligation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gold border border-[#B38728]/40 hover:border-[#BF953F] font-bold text-xs tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            Ask A Specialist
          </button>
        </div>
      </div>
    </section>
  );
};
