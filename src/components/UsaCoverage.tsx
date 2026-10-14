import React, { useState } from 'react';
import { USA_HUB_POINTS } from '../data/content';
import { Sparkles, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface UsaCoverageProps {
  onOpenZipModal: () => void;
}

export const UsaCoverage: React.FC<UsaCoverageProps> = ({
  onOpenZipModal,
}) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section
      id="usa-coverage"
      className="relative py-28 bg-[#08080a] border-b border-white/5 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>NATIONWIDE RESIDENTIAL COVERAGE</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            ACROSS THE USA.
            <br />
            <span className="gold-text italic">HERE FOR YOUR HOME.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-2xl mx-auto">
            Apex Duct Cleaning proudly serves homeowners across the United States. Enter your ZIP code to check availability in your area.
          </p>
        </div>

        {/* Visual Dark USA Map Canvas Container with Gold Glowing Hub Points */}
        <div className="relative rounded-3xl glass-card border border-[#B38728]/35 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Subtle Map SVG Grid / Outlines */}
          <div className="relative w-full aspect-[16/9] max-h-[480px] bg-black/60 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
            {/* Stylized Vector USA Map Silhouette */}
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.15)] opacity-85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* USA Simplified Geo Contour Path */}
              <path
                d="M 120 120 L 250 110 L 350 120 L 450 110 L 600 130 L 720 100 L 820 90 L 890 120 L 920 180 L 880 230 L 830 300 L 860 380 L 810 460 L 780 520 L 730 470 L 690 420 L 620 440 L 520 480 L 450 490 L 390 420 L 320 400 L 220 420 L 150 380 L 90 280 L 100 200 Z"
                fill="#111116"
                stroke="#B38728"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />

              {/* State grid lines pattern */}
              <path
                d="M 250 110 L 220 420 M 350 120 L 390 420 M 450 110 L 450 490 M 600 130 L 620 440 M 720 100 L 730 470"
                stroke="#B38728"
                strokeWidth="0.7"
                strokeDasharray="4 4"
                strokeOpacity="0.25"
              />

              {/* Connection Waves radiating */}
              <circle cx="500" cy="300" r="180" stroke="#BF953F" strokeWidth="0.5" strokeOpacity="0.2" />
              <circle cx="500" cy="300" r="280" stroke="#BF953F" strokeWidth="0.5" strokeOpacity="0.1" />

              {/* Dynamic Interactive Gold Glowing City Nodes */}
              {USA_HUB_POINTS.map((hub, i) => (
                <g key={hub.city} className="cursor-pointer group">
                  {/* Glowing halo */}
                  <circle
                    cx={hub.x * 10}
                    cy={hub.y * 6}
                    r="8"
                    fill="#BF953F"
                    fillOpacity="0.3"
                    className="animate-pulse"
                  />
                  {/* Core dot */}
                  <circle
                    cx={hub.x * 10}
                    cy={hub.y * 6}
                    r="3.5"
                    fill="#FCF6BA"
                    stroke="#B38728"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
            </svg>

            {/* Hover City Tooltip Overlay */}
            {hoveredCity && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/90 border border-gold text-xs text-gold font-bold uppercase shadow-xl animate-in fade-in">
                {hoveredCity} • Active Regional Crew
              </div>
            )}

            {/* Floating Live Dispatch Card in bottom corner of map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-[#08080a]/92 backdrop-blur-xl border border-[#B38728]/40 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#BF953F]/20 flex items-center justify-center flex-shrink-0 text-gold">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
                    ALL 50 STATES SERVED
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans">
                    Direct certified technician dispatch
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Section */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-serif font-bold text-white uppercase tracking-wide">
                Ready to verify coverage in your exact neighborhood?
              </h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans">
                Enter your 5-digit ZIP code for instant automated verification.
              </p>
            </div>

            <button
              id="usa-coverage-check-btn"
              onClick={onOpenZipModal}
              className="py-3.5 px-8 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-gold hover:scale-105 flex items-center gap-2 flex-shrink-0"
            >
              <span>CHECK MY ZIP CODE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
