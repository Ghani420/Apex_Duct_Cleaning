import React from 'react';
import { Logo } from './Logo';
import { Mail, MapPin, ShieldCheck, ArrowUp, Facebook } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { ServiceType } from '../types';

/**
 * Social & Contact Configuration
 * Update these constants to change URLs across the footer.
 */
export const INSTAGRAM_URL = 'https://www.instagram.com/apex_ductcleaning/';
export const FACEBOOK_URL = '';
export const CONTACT_EMAIL = 'apexductcleaning690@gmail.com';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceId: ServiceType) => void;
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFacebookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!FACEBOOK_URL) {
      e.preventDefault();
      // Graceful fallback when Facebook URL is not yet configured
      return;
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#040406] text-neutral-400 border-t border-[#B38728]/35 pt-16 pb-28 md:pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          {/* Brand & Social Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="lg" showTagline={true} onClick={scrollToTop} />

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md pt-1 font-normal">
              Apex Duct Cleaning provides professional residential air duct, dryer vent, and HVAC system cleaning services for homeowners across the United States. Dedicated to pure air, energy efficiency, and family health.
            </p>

            {/* Social & Contact Icon Row: [Instagram] [Facebook] [Email] */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                {/* 1. Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-social-instagram"
                  className="w-10 h-10 rounded-xl bg-[#0d0d10] border border-[#B38728]/40 hover:border-[#BF953F] flex items-center justify-center shadow-[0_0_15px_rgba(191,149,63,0.12)] hover:shadow-[0_0_20px_rgba(214,41,118,0.35)] transition-all duration-300 hover:scale-110 group cursor-pointer"
                  aria-label="Apex Duct Cleaning on Instagram"
                >
                  <InstagramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                </a>

                {/* 2. Facebook (Configurable URL) */}
                <a
                  href={FACEBOOK_URL || '#'}
                  target={FACEBOOK_URL ? '_blank' : undefined}
                  rel={FACEBOOK_URL ? 'noopener noreferrer' : undefined}
                  onClick={handleFacebookClick}
                  id="footer-social-facebook"
                  className={`w-10 h-10 rounded-xl bg-[#0d0d10] border border-[#B38728]/40 hover:border-[#BF953F] flex items-center justify-center text-gold hover:text-[#FCF6BA] shadow-[0_0_15px_rgba(191,149,63,0.12)] hover:shadow-[0_0_20px_rgba(191,149,63,0.35)] transition-all duration-300 hover:scale-110 group cursor-pointer ${
                    !FACEBOOK_URL ? 'opacity-90' : ''
                  }`}
                  aria-label="Apex Duct Cleaning on Facebook"
                  title={FACEBOOK_URL ? 'Visit our Facebook page' : 'Facebook page coming soon'}
                >
                  <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                </a>

                {/* 3. Direct Email */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  id="footer-social-email"
                  className="w-10 h-10 rounded-xl bg-[#0d0d10] border border-[#B38728]/40 hover:border-[#BF953F] flex items-center justify-center text-gold hover:text-[#FCF6BA] shadow-[0_0_15px_rgba(191,149,63,0.12)] hover:shadow-[0_0_20px_rgba(191,149,63,0.35)] transition-all duration-300 hover:scale-110 group cursor-pointer"
                  aria-label={`Send an email to ${CONTACT_EMAIL}`}
                  title={`Email us at ${CONTACT_EMAIL}`}
                >
                  <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                </a>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-2 flex flex-col space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
                    HOUSTON, TEXAS
                  </span>
                  <span className="text-neutral-300 block">2351 Lancashire Ct</span>
                  <span className="text-neutral-300 block">Houston, TX 77002</span>
                  <span className="text-[11px] text-neutral-500 block mt-0.5">
                    Serving Homeowners in Houston, Texas
                  </span>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-contact-instagram-dm"
                className="group flex items-start gap-2.5 text-neutral-300 hover:text-gold transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-bold text-white group-hover:text-gold uppercase tracking-wider text-[11px] block transition-colors">
                    INSTAGRAM DM
                  </span>
                  <span className="text-neutral-300 group-hover:text-gold block transition-colors">
                    @apex_ductcleaning
                  </span>
                </div>
              </a>
              <span className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-gold font-medium transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </span>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-widest border-l-2 border-gold pl-2.5">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider font-sans">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('before-after')}
                  className="hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  Before & After
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-apex')}
                  className="hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  Why Apex
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-gold transition-colors uppercase text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-widest border-l-2 border-gold pl-2.5">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider font-sans">
              <li>
                <button
                  onClick={() => onSelectService('hvac-cleaning')}
                  className="hover:text-gold transition-colors uppercase text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>HVAC Cleaning</span>
                  <span className="text-[10px] text-gold/70 group-hover:text-gold">Energy Efficient &rarr;</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('air-duct-cleaning')}
                  className="hover:text-gold transition-colors uppercase text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Air Duct Cleaning</span>
                  <span className="text-[10px] text-gold/70 group-hover:text-gold">Whole-Home Purity &rarr;</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('dryer-vent-cleaning')}
                  className="hover:text-gold transition-colors uppercase text-left flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Dryer Vent Cleaning</span>
                  <span className="text-[10px] text-gold/70 group-hover:text-gold">Fire Safety &rarr;</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('free-inspection')}
                  className="hover:text-gold transition-colors uppercase text-left flex items-center justify-between w-full group text-gold font-semibold cursor-pointer"
                >
                  <span>Free Inspection</span>
                  <span className="text-[10px] text-gold">$0 Obligation &rarr;</span>
                </button>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-sans">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>NADCA Certified Procedures & Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-neutral-500">
          <div className="text-center md:text-left space-y-1">
            <p className="text-neutral-400 font-medium">© {new Date().getFullYear()} Apex Duct Cleaning. All Rights Reserved.</p>
            <p className="text-[11px] text-neutral-500 font-sans">
              Clean Air. Better Health. Safer Home. Serving Homeowners Across the USA.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenPrivacyModal}
              id="footer-privacy-link-btn"
              className="hover:text-gold transition-colors uppercase tracking-wider text-[11px] font-semibold cursor-pointer py-1"
            >
              PRIVACY POLICY
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={onOpenTermsModal}
              id="footer-terms-link-btn"
              className="hover:text-gold transition-colors uppercase tracking-wider text-[11px] font-semibold cursor-pointer py-1"
            >
              TERMS OF SERVICE
            </button>
            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="hidden sm:inline-flex ml-2 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gold hover:text-white border border-[#B38728]/35 transition-all cursor-pointer items-center justify-center hover:scale-105"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
