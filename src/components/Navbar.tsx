import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Shield, ArrowRight, MapPin, CheckCircle } from 'lucide-react';

interface NavbarProps {
  onOpenZipModal: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenZipModal,
  onOpenQuoteModal,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'SERVICES', id: 'services' },
    { label: 'BEFORE & AFTER', id: 'before-after' },
    { label: 'WHY APEX', id: 'why-apex' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleZipAvailabilityClick = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById('zip-availability');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      onOpenZipModal();
    }
  };

  const handleFreeInspectionClick = () => {
    setMobileMenuOpen(false);
    onOpenQuoteModal('free-inspection');
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#050505] backdrop-blur-xl border-b border-[#B38728]/35 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
            : 'bg-[#050505]/95 backdrop-blur-lg border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 lg:h-[84px]">
            {/* 1. OFFICIAL APEX LOGO (LEFT) */}
            <div className="flex-shrink-0 flex items-center">
              <Logo
                size={isScrolled ? 'sm' : 'md'}
                onClick={() => handleLinkClick('hero')}
              />
            </div>

            {/* 2. DESKTOP NAVIGATION (CENTER) - HIDDEN ON MOBILE/TABLET */}
            <nav
              id="desktop-nav-menu"
              className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 flex-shrink-0"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`whitespace-nowrap text-xs xl:text-[13px] font-semibold tracking-[0.14em] uppercase py-2 px-1 transition-colors duration-200 relative flex-shrink-0 focus:outline-none cursor-pointer ${
                      isActive
                        ? 'text-gold'
                        : 'text-neutral-300 hover:text-gold'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent rounded-full shadow-[0_0_8px_rgba(191,149,63,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* 3. DESKTOP RIGHT ACTION BUTTON */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                id="nav-free-inspection-btn"
                onClick={() => onOpenQuoteModal('free-inspection')}
                className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-black/60 hover:bg-[#0e0e12] text-gold hover:text-white border border-[#B38728]/50 hover:border-[#BF953F] font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-gold flex items-center gap-2 flex-shrink-0 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>FREE INSPECTION</span>
              </button>
            </div>

            {/* 4. MOBILE & TABLET HEADER CONTROLS (RIGHT) */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              {/* Quick Free Inspection Button */}
              <button
                id="mobile-quick-inspection-btn"
                type="button"
                onClick={handleFreeInspectionClick}
                className="whitespace-nowrap px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-[#0c0c0e] border border-[#B38728]/60 hover:border-gold text-gold hover:text-white rounded-lg font-bold text-[10px] sm:text-xs tracking-wider uppercase shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Shield className="w-3 h-3 text-gold hidden xs:inline-block" />
                <span>FREE INSPECTION</span>
              </button>

              {/* Hamburger / Close Toggle Button */}
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`p-2 sm:p-2.5 rounded-lg border transition-all duration-200 cursor-pointer focus:outline-none ${
                  mobileMenuOpen
                    ? 'bg-[#18181c] text-gold border-gold shadow-[0_0_15px_rgba(191,149,63,0.3)]'
                    : 'bg-[#0c0c0e] text-neutral-200 hover:text-gold border-neutral-800 hover:border-[#B38728]/50'
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 5. FULL MOBILE NAVIGATION PANEL (STANDALONE FIXED OVERLAY) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[72px] sm:top-[80px] lg:hidden z-[999] bg-[#060608] text-white flex flex-col justify-between overflow-y-auto border-t border-[#B38728]/35 shadow-2xl animate-mobile-drawer"
          style={{ height: 'calc(100dvh - 72px)' }}
        >
          {/* Menu Items Container */}
          <div className="px-5 sm:px-7 py-6 sm:py-8 flex flex-col space-y-3">
            {/* Branding Header in Drawer */}
            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-serif font-black tracking-wider text-base text-white">
                  APEX DUCT CLEANING
                </span>
                <span className="text-[10px] text-gold uppercase tracking-widest font-sans">
                  Clean Air. Better Health. Safer Home.
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                <CheckCircle className="w-3 h-3 text-gold" />
                <span>NADCA Certified</span>
              </div>
            </div>

            {/* Standardized Mobile Navigation List */}
            <nav className="flex flex-col space-y-1.5 pt-2" aria-label="Mobile Menu Navigation">
              {/* 1. HOME */}
              <button
                id="mobile-nav-home"
                type="button"
                onClick={() => handleLinkClick('hero')}
                className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base transition-all duration-200 cursor-pointer ${
                  activeSection === 'hero'
                    ? 'bg-[#151518] text-gold border-l-4 border-gold shadow-sm'
                    : 'text-neutral-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>HOME</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>

              {/* 2. ABOUT US */}
              <button
                id="mobile-nav-about"
                type="button"
                onClick={() => handleLinkClick('about')}
                className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base transition-all duration-200 cursor-pointer ${
                  activeSection === 'about'
                    ? 'bg-[#151518] text-gold border-l-4 border-gold shadow-sm'
                    : 'text-neutral-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>

              {/* 3. SERVICES */}
              <button
                id="mobile-nav-services"
                type="button"
                onClick={() => handleLinkClick('services')}
                className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base transition-all duration-200 cursor-pointer ${
                  activeSection === 'services'
                    ? 'bg-[#151518] text-gold border-l-4 border-gold shadow-sm'
                    : 'text-neutral-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>SERVICES</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>

              {/* 4. BEFORE & AFTER */}
              <button
                id="mobile-nav-before-after"
                type="button"
                onClick={() => handleLinkClick('before-after')}
                className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base transition-all duration-200 cursor-pointer ${
                  activeSection === 'before-after'
                    ? 'bg-[#151518] text-gold border-l-4 border-gold shadow-sm'
                    : 'text-neutral-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>BEFORE & AFTER</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>

              {/* 5. WHY APEX */}
              <button
                id="mobile-nav-why-apex"
                type="button"
                onClick={() => handleLinkClick('why-apex')}
                className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base transition-all duration-200 cursor-pointer ${
                  activeSection === 'why-apex'
                    ? 'bg-[#151518] text-gold border-l-4 border-gold shadow-sm'
                    : 'text-neutral-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>WHY APEX</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>

              {/* 6. CONTACT */}
              <button
                id="mobile-nav-contact"
                type="button"
                onClick={() => handleLinkClick('contact')}
                className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base transition-all duration-200 cursor-pointer ${
                  activeSection === 'contact'
                    ? 'bg-[#151518] text-gold border-l-4 border-gold shadow-sm'
                    : 'text-neutral-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>CONTACT</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>

              {/* 7. CHECK AVAILABILITY */}
              <button
                id="mobile-nav-check-availability"
                type="button"
                onClick={handleZipAvailabilityClick}
                className="w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl font-bold tracking-wider text-base text-gold bg-[#121215] hover:bg-[#1a1a1f] border border-[#B38728]/40 hover:border-gold transition-all duration-200 cursor-pointer shadow-sm mt-2"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>CHECK AVAILABILITY</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>

              {/* 8. FREE INSPECTION */}
              <button
                id="mobile-nav-free-inspection"
                type="button"
                onClick={handleFreeInspectionClick}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl font-bold tracking-widest text-sm text-black gold-gradient hover:opacity-95 shadow-gold uppercase transition-all duration-200 cursor-pointer mt-2"
              >
                <Shield className="w-4 h-4 text-black flex-shrink-0" />
                <span>FREE INSPECTION</span>
              </button>
            </nav>
          </div>

          {/* Drawer Footer Contact Bar */}
          <div className="p-5 sm:p-7 border-t border-white/10 bg-[#040405] text-center space-y-2 mt-auto">
            <a
              href="tel:18005552739"
              className="inline-flex items-center justify-center gap-2 text-gold hover:text-white font-bold text-sm tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>(800) 555-APEX / (800) 555-2739</span>
            </a>
            <p className="text-[11px] text-neutral-400 font-sans">
              24/7 Homeowner Dispatch & Support Across the USA
            </p>
          </div>
        </div>
      )}
    </>
  );
};
