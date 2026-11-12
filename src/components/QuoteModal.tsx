import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { ServiceType, SubmittedLead, mapToServiceNeeded } from '../types';
import { LeadForm } from './LeadForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType | string;
  initialZip?: string;
  onLeadSubmitted?: (lead: SubmittedLead) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Air Duct Cleaning',
  initialZip = '',
  onLeadSubmitted,
}) => {
  if (!isOpen) return null;

  const currentServiceNeeded = mapToServiceNeeded(initialService);
  const isInspection = currentServiceNeeded === 'Free Inspection';
  const submitButtonText = isInspection ? 'REQUEST FREE INSPECTION' : 'GET MY FREE QUOTE';

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="relative w-full max-w-xl my-8 rounded-3xl glass-card border-2 border-[#B38728]/50 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="quote-modal-close-btn"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close Quote Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-6">
          <div className="text-center space-y-2 pr-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d0d10] border border-[#B38728]/40 text-gold text-[11px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>{isInspection ? 'FREE 21-POINT INSPECTION' : 'DIRECT HOMEOWNER ESTIMATE'}</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-white uppercase">
              {isInspection ? (
                <>
                  SCHEDULE YOUR <span className="gold-text italic">FREE INSPECTION</span>
                </>
              ) : (
                <>
                  REQUEST YOUR <span className="gold-text italic">FREE ESTIMATE</span>
                </>
              )}
            </h3>
            <p className="text-xs text-neutral-300 font-normal">
              Receive upfront, transparent pricing for your home ventilation systems.
            </p>
          </div>

          {/* Standardized Reusable Lead Form */}
          <LeadForm
            idPrefix="modal-lead-form"
            compact={true}
            initialZip={initialZip}
            initialService={initialService}
            submitButtonText={submitButtonText}
            onSuccess={(lead) => {
              if (onLeadSubmitted) onLeadSubmitted(lead);
            }}
          />
        </div>
      </div>
    </div>
  );
};
