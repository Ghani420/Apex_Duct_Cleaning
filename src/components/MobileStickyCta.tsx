import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface MobileStickyCtaProps {
  onCheckAvailability: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onCheckAvailability }) => {
  return (
    <aside
      id="mobile-sticky-cta-bar"
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070709]/98 backdrop-blur-xl border-t border-[#B38728]/45 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.92)]"
      style={{
        paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2.5">
        {/* Left Button: Direct Call Dial Action */}
        <a
          href="tel:8005552739"
          id="mobile-sticky-call-btn"
          aria-label="Call Apex Duct Cleaning at (800) 555-APEX"
          className="flex-1 min-h-[48px] h-[50px] px-2 xs:px-3 rounded-xl bg-[#101014] hover:bg-[#18181f] active:scale-[0.98] border border-[#B38728]/50 hover:border-gold text-gold hover:text-[#FCF6BA] font-bold text-xs xs:text-[13px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-all duration-200 cursor-pointer select-none text-center"
        >
          <Phone className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="whitespace-nowrap">CALL (800) 555-APEX</span>
        </a>

        {/* Right Button: Check Availability Action */}
        <button
          type="button"
          id="mobile-sticky-availability-btn"
          onClick={onCheckAvailability}
          aria-label="Check Service Availability by ZIP code"
          className="flex-1 min-h-[48px] h-[50px] px-2 xs:px-3 rounded-xl gold-gradient hover:opacity-95 active:scale-[0.98] text-black font-extrabold text-xs xs:text-[13px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(191,149,63,0.35)] transition-all duration-200 cursor-pointer select-none text-center"
        >
          <span className="whitespace-nowrap">CHECK AVAILABILITY</span>
          <ArrowRight className="w-4 h-4 text-black flex-shrink-0" />
        </button>
      </div>
    </aside>
  );
};
