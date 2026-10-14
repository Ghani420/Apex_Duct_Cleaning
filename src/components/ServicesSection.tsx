import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceType } from '../types';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#050505] overflow-hidden border-b border-white/5"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FCF6BA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>RESIDENTIAL SPECIALTIES</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
            PROFESSIONAL SERVICES.
            <br />
            <span className="gold-text italic">BUILT FOR YOUR HOME.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Professional cleaning solutions designed for today's homeowners.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isInspection = service.id === 'free-inspection';
            const indexStr = `0${index + 1}`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
              >
                {/* Top Image Container with Dark Gradient Overlay & Hover Zoom */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Deep Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/40 to-transparent" />

                  {/* Sleek Number Index & Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    {service.badge ? (
                      <div className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-[#B38728]/40 text-[10px] font-bold tracking-wider text-gold uppercase shadow-md">
                        {service.badge}
                      </div>
                    ) : <div />}
                    <span className="text-xs font-serif font-bold text-[#FCF6BA]/80 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/5">
                      {indexStr}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative px-6 pb-6 pt-2 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Gold Title */}
                    <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#FCF6BA] transition-colors tracking-wide uppercase">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Key Benefits List */}
                    <ul className="space-y-2 pt-2 border-t border-white/5">
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2 text-[12px] text-neutral-400">
                          <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-white/5">
                    <button
                      id={`service-cta-btn-${service.id}`}
                      onClick={() => onSelectService(service.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                        isInspection
                          ? 'gold-gradient text-black hover:gold-gradient-hover shadow-gold'
                          : 'bg-white/[0.03] hover:bg-white/[0.08] text-neutral-100 border border-[#B38728]/35 hover:border-[#BF953F] hover:text-gold'
                      }`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
