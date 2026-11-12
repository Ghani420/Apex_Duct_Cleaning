import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl glass-card border-2 border-[#B38728]/50 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <ShieldCheck className="w-6 h-6 text-gold" />
            <h3 className="font-serif font-bold text-xl text-white uppercase tracking-wider">
              {isPrivacy ? 'APEX DUCT CLEANING PRIVACY POLICY' : 'TERMS OF SERVICE'}
            </h3>
          </div>

          <div className="text-xs sm:text-sm text-neutral-300 space-y-4 leading-relaxed font-normal">
            {isPrivacy ? (
              <>
                <p>
                  Apex Duct Cleaning (&quot;Apex&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy of American homeowners who use our ventilation cleaning, dryer vent, and HVAC services.
                </p>
                <h4 className="font-serif font-bold text-white uppercase text-xs tracking-wider">Information We Collect</h4>
                <p>
                  We collect information you submit directly to us when checking service availability, requesting quotes, or scheduling appointments, including your name, contact phone number, email address, home physical service address, and ZIP code.
                </p>
                <h4 className="font-serif font-bold text-white uppercase text-xs tracking-wider">How We Use Your Information</h4>
                <p>
                  Your information is utilized solely to provide transparent service estimates, coordinate certified technician dispatches, confirm appointment windows, and communicate regarding your home ventilation service. We do not sell or trade your personal data to third-party marketers.
                </p>
                <h4 className="font-serif font-bold text-white uppercase text-xs tracking-wider">Data Security</h4>
                <p>
                  We maintain strict electronic and procedural safeguards to ensure your home contact information remains secure and protected.
                </p>
              </>
            ) : (
              <>
                <p>
                  By accessing the Apex Duct Cleaning website or requesting service quotes, you agree to these Terms of Service.
                </p>
                <h4 className="font-serif font-bold text-white uppercase text-xs tracking-wider">Service Scope & Estimates</h4>
                <p>
                  All estimates provided online are preliminary quotes based on homeowner-provided parameters. Certified technicians will verify duct accessibility, furnace unit counts, and vent lengths on-site prior to executing services.
                </p>
                <h4 className="font-serif font-bold text-white uppercase text-xs tracking-wider">Satisfaction Guarantee & Safety</h4>
                <p>
                  Apex technicians operate in compliance with NADCA and EPA ventilation standards using negative air pressure HEPA extraction equipment to protect indoor air quality and prevent contamination.
                </p>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-xs uppercase tracking-wider transition-all shadow-gold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
