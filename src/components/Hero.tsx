import React, { useState } from 'react';
import { IMAGES } from '../data/content';
import { ShieldCheck, MapPin, SearchCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenZipModal: () => void;
  onOpenQuoteModal: (serviceId?: string, zip?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenZipModal,
  onOpenQuoteModal,
}) => {
  const [quickZip, setQuickZip] = useState('');
  const [zipSubmitted, setZipSubmitted] = useState(false);
  const [zipError, setZipError] = useState('');

  const handleQuickZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = quickZip.trim();
    if (!/^\d{5}$/.test(cleanZip)) {
      setZipError('Please enter a valid 5-digit U.S. ZIP code.');
      setZipSubmitted(false);
      return;
    }
    setZipError('');
    setZipSubmitted(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Background Image: High-Definition Hero Photography with Intelligent Positioning */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.heroTech}
          alt="Professional Apex Duct Cleaning Technician servicing residential ventilation and dryer system"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] md:object-[65%_center] lg:object-[75%_center] xl:object-[80%_center] filter brightness-[0.72] contrast-[1.08] transition-transform duration-1000 ease-out"
        />

        {/* Sophisticated Dark Black & Gold Gradient Overlays (Text Legibility + High Image Clarity) */}
        {/* Directional left shadow to ensure crystal-clear text contrast on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 sm:via-[#050505]/65 to-[#050505]/30 lg:to-transparent" />
        {/* Top and bottom subtle edge fading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_65%)]" />
        <div className="absolute inset-0 tech-grid opacity-20" />

        {/* Subtle Floating Gold Particle Accents */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#BF953F] blur-[1px] animate-particle-1 opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-[#FCF6BA] blur-[2px] animate-particle-2 opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#B38728] blur-[1px] animate-particle-3 opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#FBF5B7] blur-[1px] animate-particle-1 opacity-35"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-10 pb-12">
        <div className="max-w-3xl lg:max-w-4xl space-y-6">
          {/* Small Gold Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d0f]/90 border border-[#B38728]/40 shadow-[0_0_20px_rgba(179,135,40,0.2)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#BF953F] animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#FCF6BA] uppercase">
              SERVING HOMEOWNERS ACROSS THE USA
            </span>
          </div>

          {/* Large Serif Headline */}
          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            BREATHE{' '}
            <span className="gold-text italic">
              CLEANER.
            </span>
            <br />
            LIVE <span className="text-white">BETTER.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-200 leading-snug max-w-2xl">
            Professional Air Duct, Dryer Vent & HVAC Cleaning Services for Homeowners Across the USA.
          </p>

          {/* Additional Text */}
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
            Improve airflow, reduce accumulated dust and keep your home's ventilation systems performing at their best with professional service from <strong className="text-neutral-200 font-semibold">Apex Duct Cleaning</strong>.
          </p>

          {/* Main Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            {/* Primary Button */}
            <button
              id="hero-check-availability-btn"
              onClick={onOpenZipModal}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gold-gradient text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:gold-gradient-hover hover:scale-[1.02] shadow-gold focus:outline-none focus:ring-2 focus:ring-[#BF953F]"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary Button */}
            <button
              id="hero-free-inspection-btn"
              onClick={() => onOpenQuoteModal('free-inspection')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-neutral-100 border border-[#B38728]/45 hover:border-[#BF953F] font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md focus:outline-none"
            >
              <SearchCheck className="w-4 h-4 text-gold" />
              <span>GET FREE INSPECTION</span>
            </button>
          </div>

          {/* Inline Quick ZIP Check Box for High-Conversion */}
          <div className="pt-3 max-w-md">
            <form
              onSubmit={handleQuickZipCheck}
              className="flex flex-col sm:flex-row gap-2 bg-[#0d0d10]/90 p-2 rounded-xl border border-[#B38728]/25 focus-within:border-[#BF953F] backdrop-blur-xl shadow-lg"
            >
              <input
                id="hero-quick-zip-input"
                type="text"
                placeholder="Enter 5-Digit ZIP Code"
                maxLength={5}
                value={quickZip}
                onChange={(e) => {
                  setQuickZip(e.target.value.replace(/\D/g, ''));
                  setZipSubmitted(false);
                  setZipError('');
                }}
                className="flex-1 px-4 py-2.5 bg-black/70 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#BF953F]"
              />
              <button
                type="submit"
                id="hero-quick-zip-submit"
                className="px-5 py-2.5 bg-[#17171c] hover:bg-[#202026] text-gold hover:text-white font-bold text-xs tracking-wider rounded-lg uppercase border border-[#B38728]/35 transition-colors whitespace-nowrap"
              >
                CHECK ZIP
              </button>
            </form>

            {zipError && (
              <p className="text-red-400 text-xs mt-2 pl-1">{zipError}</p>
            )}

            {zipSubmitted && (
              <div className="mt-2.5 p-3 rounded-lg bg-[#111115]/95 border border-[#B38728]/45 text-xs text-neutral-200 animate-in fade-in flex items-center justify-between gap-2 shadow-gold">
                <span className="flex items-center gap-1.5 text-gold-light">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Apex operates in <strong>ZIP {quickZip}</strong>!</span>
                </span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('air-duct-cleaning', quickZip)}
                  className="text-[11px] font-bold text-gold underline hover:text-white uppercase cursor-pointer"
                >
                  Request Quote &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Trust Strip */}
      <div className="relative z-10 w-full border-t border-white/5 bg-[#070709]/80 backdrop-blur-xl py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 items-center justify-between text-center sm:text-left">
            {/* Trust Item 1 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-900/90 border border-[#B38728]/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">
                  USA-WIDE SERVICE
                </h4>
                <p className="text-[11px] text-neutral-400">Serving homeowners across all 50 states</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-900/90 border border-[#B38728]/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">
                  PROFESSIONAL CLEANING
                </h4>
                <p className="text-[11px] text-neutral-400">Certified NADCA standard procedures</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-900/90 border border-[#B38728]/30 flex items-center justify-center flex-shrink-0">
                <SearchCheck className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">
                  FREE INSPECTION
                </h4>
                <p className="text-[11px] text-neutral-400">No obligation camera duct diagnosis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
