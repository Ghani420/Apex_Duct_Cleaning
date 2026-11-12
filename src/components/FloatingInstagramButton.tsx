import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingInstagramButton: React.FC = () => {
  return (
    <div
      id="floating-text-wrapper"
      className="fixed bottom-[74px] sm:bottom-[82px] md:bottom-6 right-3 sm:right-5 z-40 flex items-center select-none"
    >
      <a
        href="sms:+18182785848"
        id="floating-text-btn"
        aria-label="Text Apex Duct Cleaning at 818-278-5848"
        className="group relative flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#0a0a0f] border border-[#B38728]/70 hover:border-gold shadow-[0_6px_25px_rgba(0,0,0,0.85),0_0_15px_rgba(191,149,63,0.3)] hover:shadow-[0_0_25px_rgba(191,149,63,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer max-w-[calc(100vw-24px)]"
        title="Send a text message to 818-278-5848"
      >
        {/* Subtle pulsing background gold glow layer */}
        <span className="absolute inset-0 rounded-full bg-[#BF953F]/10 group-hover:bg-[#BF953F]/20 transition-colors pointer-events-none" />

        {/* Messaging Icon in gold styling */}
        <div className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#B38728]/80 bg-[#121218] text-gold shadow-[0_0_8px_rgba(191,149,63,0.35)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold fill-gold/20" />
        </div>

        {/* Text US in bold gold uppercase typography */}
        <span className="relative z-10 text-gold group-hover:text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap transition-colors duration-200">
          TEXT US
        </span>
      </a>
    </div>
  );
};


