import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MobileStickyCtaProps {
  onCheckAvailability: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onCheckAvailability }) => {
  return (
    <aside
      id="mobile-sticky-cta-bar"
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070709]/98 backdrop-blur-xl border-t border-[#B38728]/45 px-3.5 sm:px-4 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.92)]"
      style={{
        paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="w-full max-w-md mx-auto">
        {/* Full-width Check Availability Action Button */}
        <button
          type="button"
          id="mobile-sticky-availability-btn"
          onClick={onCheckAvailability}
          aria-label="Check Service Availability by ZIP code"
          className="w-full min-h-[48px] h-[50px] px-4 rounded-xl gold-gradient hover:opacity-95 active:scale-[0.98] text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(191,149,63,0.35)] transition-all duration-200 cursor-pointer select-none text-center"
        >
          <span className="whitespace-nowrap">CHECK AVAILABILITY</span>
          <ArrowRight className="w-4 h-4 text-black flex-shrink-0" />
        </button>
      </div>
    </aside>
  );
};

