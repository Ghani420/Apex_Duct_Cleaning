import React, { useId } from 'react';

interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: 'glyph' | 'badge';
}

/**
 * Official Instagram brand logo icon with the authentic multi-stop
 * pink, purple, orange, and yellow brand gradient.
 */
export const InstagramIcon: React.FC<InstagramIconProps> = ({
  className = 'w-5 h-5',
  variant = 'glyph',
  ...props
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const gradientId = `ig-gradient-${uniqueId}`;

  if (variant === 'badge') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <defs>
          <radialGradient
            id={`${gradientId}-badge`}
            cx="30%"
            cy="107%"
            r="150%"
            fx="30%"
            fy="107%"
          >
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill={`url(#${gradientId}-badge)`} />
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="#ffffff"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="12" cy="12" r="3.5" stroke="#ffffff" strokeWidth="1.8" fill="none" />
        <circle cx="15.8" cy="8.2" r="1" fill="#ffffff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        fill="none"
      />
      <circle
        cx="16.8"
        cy="7.2"
        r="1.2"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};
