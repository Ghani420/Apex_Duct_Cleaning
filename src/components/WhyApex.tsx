import React from 'react';
import {
  ShieldCheck,
  MapPin,
  SearchCheck,
  HeartHandshake,
  Wind,
  Laptop,
  Sparkles,
} from 'lucide-react';
import { WHY_APEX_DATA } from '../data/content';

export const WhyApex: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-gold" />;
      case 'MapPin':
        return <MapPin className="w-7 h-7 text-gold" />;
      case 'SearchCheck':
        return <SearchCheck className="w-7 h-7 text-gold" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-gold" />;
      case 'Wind':
        return <Wind className="w-7 h-7 text-gold" />;
      case 'Laptop':
        return <Laptop className="w-7 h-7 text-gold" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-gold" />;
    }
  };

  return (
    <section
      id="why-apex"
      className="relative py-28 bg-[#050505] border-b border-white/5 overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FCF6BA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>THE APEX ADVANTAGE</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            WHY HOMEOWNERS <span className="gold-text italic">CHOOSE APEX</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal">
            Delivering an elevated standard of residential air hygiene and homeowner satisfaction.
          </p>
        </div>

        {/* 6 Visual Benefits Grid with Gold Line Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_APEX_DATA.map((benefit, index) => (
            <div
              key={benefit.id}
              id={`why-apex-card-${benefit.id}`}
              className="group relative p-8 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold"
            >
              {/* Icon Container with Gold Border */}
              <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-[#B38728]/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#BF953F] transition-all duration-300 shadow-md">
                {getIcon(benefit.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#FCF6BA] transition-colors tracking-wide uppercase mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-normal">
                {benefit.description}
              </p>

              {/* Decorative Subtle Corner Index */}
              <span className="absolute top-5 right-5 text-xs font-serif font-bold text-neutral-600 group-hover:text-[#BF953F] transition-colors">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
