import React from 'react';
import { IMAGES } from '../data/content';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'h-9 xs:h-10 sm:h-12 w-auto max-w-[130px] xs:max-w-[160px] sm:max-w-[180px]',
    md: 'h-10 xs:h-12 sm:h-16 w-auto max-w-[140px] xs:max-w-[180px] sm:max-w-[220px]',
    lg: 'h-20 sm:h-28 w-auto max-w-[240px] sm:max-w-[280px]',
    xl: 'h-28 sm:h-36 w-auto max-w-[300px] sm:max-w-[360px]',
  };

  return (
    <div
      id="apex-official-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      role="banner"
      aria-label="Apex Duct Cleaning Official Logo"
    >
      <img
        src={IMAGES.apexOfficialLogo}
        alt="Apex Duct Cleaning - Clean Air. Better Health. Safer Home."
        referrerPolicy="no-referrer"
        className={`${sizeClasses[size]} object-contain object-left`}
        loading="eager"
      />
    </div>
  );
};
