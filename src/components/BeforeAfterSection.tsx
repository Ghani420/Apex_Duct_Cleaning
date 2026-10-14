import React, { useState } from 'react';
import { BEFORE_AFTER_DATA } from '../data/content';
import { Sparkles, MoveHorizontal, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  onOpenQuoteModal,
}) => {
  // Slider percentages for each category (default 50%)
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    'air-duct-comparison': 50,
    'dryer-vent-comparison': 50,
  });

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <section
      id="before-after"
      className="relative py-28 bg-[#050505] border-b border-white/5 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>REAL RESIDENTIAL RESULTS</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            SEE THE <span className="gold-text italic">DIFFERENCE.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal">
            Professional cleaning can make a visible difference in the condition of your home's ventilation systems.
          </p>
        </div>

        {/* 2 Major Interactive Before & After Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {BEFORE_AFTER_DATA.map((item) => {
            const currentPosition = sliderPositions[item.id] ?? 50;

            return (
              <div
                key={item.id}
                id={`before-after-card-${item.id}`}
                className="flex flex-col justify-between rounded-3xl glass-card p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.85)] border border-[#B38728]/30"
              >
                <div className="space-y-4">
                  {/* Category & Title */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-[#BF953F]/15 border border-[#BF953F]/40 text-[#FCF6BA] font-bold text-xs tracking-wider uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
                      <MoveHorizontal className="w-3.5 h-3.5 text-gold animate-pulse" />
                      Drag slider to compare
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-white tracking-wide uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>

                  {/* Interactive Before/After Split View Container */}
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden select-none border border-neutral-800 shadow-2xl bg-black">
                    {/* AFTER Image (Full Background) */}
                    <img
                      src={item.afterImage}
                      alt={`${item.category} After Cleaning`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />

                    {/* AFTER Label Tag (Top Right) */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-emerald-500/50 text-emerald-400 text-[11px] font-bold tracking-wider uppercase z-20 flex items-center gap-1.5 shadow-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.afterLabel}</span>
                    </div>

                    {/* BEFORE Image (Clipped by slider position) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${currentPosition}%` }}
                    >
                      <img
                        src={item.beforeImage}
                        alt={`${item.category} Before Cleaning`}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                        style={{ width: '100%', height: '100%', minWidth: '100%' }}
                      />

                      {/* BEFORE Label Tag (Top Left) */}
                      <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/50 text-amber-400 text-[11px] font-bold tracking-wider uppercase z-20 flex items-center gap-1.5 shadow-lg">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.beforeLabel}</span>
                      </div>
                    </div>

                    {/* Vertical Dividing Line */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#FCF6BA] via-[#BF953F] to-[#B38728] z-30 shadow-[0_0_15px_rgba(191,149,63,0.8)] pointer-events-none"
                      style={{ left: `${currentPosition}%`, transform: 'translateX(-50%)' }}
                    >
                      {/* Center Draggable Gold Handle */}
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full gold-gradient text-black shadow-[0_0_20px_rgba(191,149,63,0.9)] flex items-center justify-center border-2 border-black">
                        <MoveHorizontal className="w-4 h-4 text-black" />
                      </div>
                    </div>

                    {/* Range Input Slider Overlay for touch & click control */}
                    <input
                      type="range"
                      min={5}
                      max={95}
                      value={currentPosition}
                      onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                      aria-label={`Compare ${item.title}`}
                    />
                  </div>

                  {/* Performance Metrics & Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <span className="block text-gold font-bold text-sm sm:text-base font-serif">
                        {item.stats.dustReduction}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        Contaminants
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <span className="block text-gold font-bold text-sm sm:text-base font-serif">
                        {item.stats.airflowBoost}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        System Airflow
                      </span>
                    </div>
                    {item.stats.fireRiskReduction ? (
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center col-span-2 sm:col-span-1">
                        <span className="block text-emerald-400 font-bold text-sm sm:text-base font-serif">
                          {item.stats.fireRiskReduction}
                        </span>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                          Lint Fire Safety
                        </span>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center col-span-2 sm:col-span-1">
                        <span className="block text-gold font-bold text-sm sm:text-base font-serif">
                          100% HEPA
                        </span>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                          Containment
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-4 border-t border-white/5">
                  <button
                    onClick={() =>
                      onOpenQuoteModal(
                        item.category === 'Air Duct' ? 'air-duct-cleaning' : 'dryer-vent-cleaning'
                      )
                    }
                    className="w-full py-3.5 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-neutral-200 hover:text-gold border border-[#B38728]/40 hover:border-[#BF953F] font-bold text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <span>RESTORE YOUR {item.category.toUpperCase()} TODAY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
