import React, { useState } from 'react';
import { MapPin, CheckCircle2, AlertCircle, ArrowRight, Shield, Sparkles, Building2 } from 'lucide-react';

interface ZipCheckerProps {
  onQuoteWithZip: (zip: string) => void;
  onInspectionWithZip: (zip: string) => void;
}

export const ZipChecker: React.FC<ZipCheckerProps> = ({
  onQuoteWithZip,
  onInspectionWithZip,
}) => {
  const [zipInput, setZipInput] = useState('');
  const [validatedZip, setValidatedZip] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zipInput.trim();

    if (!/^\d{5}$/.test(clean)) {
      setErrorMessage('Please enter a valid 5-digit U.S. ZIP code.');
      setValidatedZip(null);
      return;
    }

    setIsChecking(true);
    setErrorMessage('');

    // Fast simulated regional dispatch lookup
    setTimeout(() => {
      setIsChecking(false);
      setValidatedZip(clean);
    }, 450);
  };

  const handleReset = () => {
    setValidatedZip(null);
    setZipInput('');
    setErrorMessage('');
  };

  return (
    <section
      id="zip-availability"
      className="relative py-24 bg-[#08080a] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Subtle background radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-card p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center border border-[#B38728]/35">
          {/* Header */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#B38728]/40 text-gold text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>NATIONWIDE SERVICE CHECKER</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
              WE'RE HERE TO <span className="gold-text italic">SERVE YOU.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal">
              Serving homeowners across the USA. Enter your ZIP code to check availability.
            </p>
          </div>

          {/* Interactive Form or Success View */}
          {!validatedZip ? (
            <div className="mt-10 max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input
                      id="main-zip-checker-input"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={5}
                      value={zipInput}
                      onChange={(e) => {
                        setZipInput(e.target.value.replace(/\D/g, ''));
                        setErrorMessage('');
                      }}
                      placeholder="Enter 5-Digit ZIP Code (e.g. 10001, 90210)"
                      className="w-full pl-12 pr-4 py-4 bg-black/70 border-2 border-neutral-800 rounded-xl text-white text-lg font-semibold placeholder-neutral-500 focus:outline-none focus:border-[#BF953F] transition-all text-center sm:text-left shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    id="main-zip-checker-submit-btn"
                    disabled={isChecking}
                    className="py-4 px-8 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-gold hover:scale-[1.02] flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-75"
                  >
                    {isChecking ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        VERIFYING...
                      </span>
                    ) : (
                      <>
                        <span>CHECK AVAILABILITY</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-950/70 border border-red-800/80 text-red-300 text-xs sm:text-sm flex items-center justify-center gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  Instant Live Verification
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-gold" />
                  Direct Regional Technicians
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold" />
                  No Hidden Travel Fees
                </span>
              </div>
            </div>
          ) : (
            /* Successful Availability Result State */
            <div
              id="zip-success-result-box"
              className="mt-10 max-w-2xl mx-auto p-8 rounded-2xl bg-[#0e0e12]/95 border-2 border-[#BF953F] shadow-gold-lg animate-in zoom-in-95 duration-300 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#BF953F]/20 border-2 border-[#BF953F] flex items-center justify-center mx-auto text-gold">
                <CheckCircle2 className="w-9 h-9 text-gold" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                  GREAT NEWS!
                </h3>
                <p className="text-lg font-bold text-[#FCF6BA]">
                  Apex Duct Cleaning is available in your area (ZIP: {validatedZip}).
                </p>
                <p className="text-sm text-neutral-300 max-w-lg mx-auto font-normal">
                  We proudly serve homeowners across the USA. You're ready to request your quote.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  id="zip-success-quote-btn"
                  onClick={() => onQuoteWithZip(validatedZip)}
                  className="w-full sm:w-auto py-4 px-8 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-gold flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <span>GET MY QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="zip-success-inspection-btn"
                  onClick={() => onInspectionWithZip(validatedZip)}
                  className="w-full sm:w-auto py-4 px-8 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-neutral-100 border border-[#B38728]/60 font-semibold text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Shield className="w-4 h-4 text-gold" />
                  <span>BOOK FREE INSPECTION</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white underline tracking-wider pt-2 block mx-auto"
              >
                Check another ZIP code
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
