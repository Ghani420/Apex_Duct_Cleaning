import React, { useState } from 'react';
import { X, MapPin, CheckCircle2, AlertCircle, ArrowRight, Shield } from 'lucide-react';

interface ZipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToQuote: (zip: string) => void;
  onProceedToInspection: (zip: string) => void;
}

export const ZipModal: React.FC<ZipModalProps> = ({
  isOpen,
  onClose,
  onProceedToQuote,
  onProceedToInspection,
}) => {
  const [zipInput, setZipInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validatedZip, setValidatedZip] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zipInput.trim();

    if (!/^\d{5}$/.test(clean)) {
      setErrorMessage('Please enter a valid 5-digit U.S. ZIP code.');
      setValidatedZip(null);
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsVerifying(false);
      setValidatedZip(clean);
    }, 400);
  };

  const handleReset = () => {
    setValidatedZip(null);
    setZipInput('');
    setErrorMessage('');
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-card border-2 border-[#B38728]/50 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="zip-modal-close-btn"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10 transition-colors"
          aria-label="Close ZIP Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!validatedZip ? (
          <div className="space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#BF953F]/15 border border-[#BF953F]/40 flex items-center justify-center mx-auto text-gold shadow-lg">
              <MapPin className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-white uppercase">
                CHECK <span className="gold-text italic">AVAILABILITY</span>
              </h3>
              <p className="text-sm text-neutral-300 font-normal">
                Enter your 5-digit ZIP code to confirm dispatch coverage in your area.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 text-center font-sans">
                  5-DIGIT US ZIP CODE
                </label>
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value.replace(/\D/g, ''));
                    setErrorMessage('');
                  }}
                  placeholder="e.g. 10001 or 90210"
                  className="w-full text-center text-xl font-serif font-bold tracking-widest px-4 py-3.5 bg-black/70 border-2 border-neutral-800 rounded-xl text-white focus:outline-none focus:border-[#BF953F]"
                  autoFocus
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center justify-center gap-2 font-sans">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isVerifying}
                id="zip-modal-check-submit"
                className="w-full py-4 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
              >
                {isVerifying ? 'VERIFYING COVERAGE...' : 'CHECK AVAILABILITY'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-[11px] text-neutral-500 font-sans">
              Apex Duct Cleaning proudly serves homeowners nationwide across the United States.
            </p>
          </div>
        ) : (
          /* Available confirmation */
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#BF953F]/20 border-2 border-[#BF953F] flex items-center justify-center mx-auto text-gold shadow-gold-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-black text-3xl text-white uppercase">
                GREAT NEWS!
              </h3>
              <p className="text-base font-bold text-[#FCF6BA]">
                Apex Duct Cleaning is available in ZIP {validatedZip}.
              </p>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto font-normal">
                We proudly serve homeowners across the USA. You're ready to request your quote.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  onProceedToQuote(validatedZip);
                  onClose();
                }}
                className="w-full py-3.5 px-6 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-gold flex items-center justify-center gap-2"
              >
                <span>GET MY QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onProceedToInspection(validatedZip);
                  onClose();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gold border border-[#B38728]/40 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4 text-gold" />
                <span>BOOK FREE INSPECTION</span>
              </button>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-neutral-400 hover:text-white underline tracking-wider pt-2 block mx-auto font-sans"
            >
              Check another ZIP code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
