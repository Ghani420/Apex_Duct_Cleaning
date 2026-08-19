import React from 'react';
import { InstagramIcon } from './InstagramIcon';

export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/apex_ductcleaning/';

export const FloatingInstagramButton: React.FC = () => {
  return (
    <div
      id="floating-instagram-wrapper"
      className="fixed bottom-[90px] right-4 sm:right-5 z-50 flex items-center select-none"
    >
      <a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-instagram-btn"
        aria-label="Follow Apex Duct Cleaning on Instagram"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a0a0f] border-2 border-[#B38728]/70 hover:border-gold shadow-[0_6px_25px_rgba(0,0,0,0.85),0_0_15px_rgba(191,149,63,0.3)] hover:shadow-[0_0_30px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Subtle pulsing background glow layer */}
        <span className="absolute inset-0 rounded-full bg-[#BF953F]/10 animate-pulse pointer-events-none" />

        {/* Official Brand Instagram Icon */}
        <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300 relative z-10" />

        {/* Desktop Tooltip */}
        <div
          id="floating-instagram-tooltip"
          role="tooltip"
          className="hidden md:flex items-center absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-[#0c0c12] border border-[#B38728]/60 text-gold text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-[0_6px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(191,149,63,0.2)] whitespace-nowrap z-20"
        >
          <span>Follow Us on Instagram</span>
          {/* Tooltip triangle indicator */}
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0c0c12] border-t border-r border-[#B38728]/60 rotate-45" />
        </div>
      </a>
    </div>
  );
};
