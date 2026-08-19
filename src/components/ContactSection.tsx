import React from 'react';
import { Mail, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { LeadForm } from './LeadForm';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#08080a] border-b border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & USA Dispatch Desk */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0d10] border border-[#B38728]/35 text-gold text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>DIRECT HOMEOWNER SUPPORT</span>
              </div>

              <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] uppercase">
                LET'S TALK ABOUT
                <br />
                <span className="gold-text italic">YOUR HOME.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Have questions about your ventilation system, scheduled service, or custom home layout? Our customer care specialists are standing by.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <a
                href="https://www.instagram.com/apex_ductcleaning/"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-instagram-dm-card"
                className="group flex items-start gap-4 p-4.5 sm:p-5 rounded-xl glass-card border border-[#B38728]/30 hover:border-[#BF953F] hover:shadow-[0_8px_25px_rgba(191,149,63,0.25)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0c0c12] border border-[#B38728]/40 group-hover:border-[#BF953F] flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(214,41,118,0.3)]">
                  <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-gold font-sans transition-colors">
                    INSTAGRAM DM
                  </h4>
                  <div className="text-base font-serif font-bold text-white group-hover:text-gold transition-colors tracking-wide">
                    @apex_ductcleaning
                  </div>
                  <p className="text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors mt-0.5">
                    Message us directly on Instagram
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4.5 sm:p-5 rounded-xl glass-card transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#BF953F]/15 border border-[#BF953F]/40 flex items-center justify-center flex-shrink-0 text-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-sans">
                    EMAIL INQUIRIES
                  </h4>
                  <a
                    href="mailto:apexductcleaning690@gmail.com"
                    className="text-base font-serif font-bold text-white hover:text-gold transition-colors tracking-wide"
                  >
                    apexductcleaning690@gmail.com
                  </a>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Average response under 30 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 sm:p-5 rounded-xl glass-card transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#BF953F]/15 border border-[#BF953F]/40 flex items-center justify-center flex-shrink-0 text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-sans">
                    HOUSTON, TEXAS
                  </h4>
                  <p className="text-base font-serif font-bold text-white tracking-wide">
                    2351 Lancashire Ct
                  </p>
                  <p className="text-sm font-semibold text-neutral-300">
                    Houston, TX 77002
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Serving Homeowners in Houston, Texas</p>
                </div>
              </div>
            </div>

            {/* Dedicated Instagram Follow Button */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/apex_ductcleaning/"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-follow-instagram-button"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#09090d] hover:bg-[#121218] text-white hover:text-gold border border-[#B38728]/50 hover:border-[#BF953F] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(191,149,63,0.35)] hover:-translate-y-0.5 cursor-pointer select-none"
              >
                <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="tracking-widest whitespace-nowrap">FOLLOW US ON INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Right Column: Standardized Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-card border border-[#B38728]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
              <div className="border-b border-white/5 pb-4 mb-6">
                <h3 className="font-serif font-bold text-xl text-white uppercase">
                  SEND A DIRECT INQUIRY
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-normal">
                  Fill out the form below and an Apex representative will follow up immediately.
                </p>
              </div>

              <LeadForm
                idPrefix="contact-page-form"
                initialService="Air Duct Cleaning"
                submitButtonText="GET MY FREE QUOTE"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
