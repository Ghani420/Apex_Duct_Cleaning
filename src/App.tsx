import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ServicesSection } from './components/ServicesSection';
import { ZipChecker } from './components/ZipChecker';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WhyApex } from './components/WhyApex';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { UsaCoverage } from './components/UsaCoverage';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ZipModal } from './components/ZipModal';
import { QuoteModal } from './components/QuoteModal';
import { LegalModal } from './components/LegalModal';
import { MobileStickyCta } from './components/MobileStickyCta';
import { FloatingInstagramButton } from './components/FloatingInstagramButton';
import { ServiceType, SubmittedLead } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState<ServiceType>('air-duct-cleaning');
  const [selectedZip, setSelectedZip] = useState<string>('');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  });

  // Track leads submitted in session
  const [submittedLeads, setSubmittedLeads] = useState<SubmittedLead[]>([]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenZipModal = () => {
    setIsZipModalOpen(true);
  };

  const handleOpenQuoteModal = (serviceId?: string, zip?: string) => {
    if (serviceId) {
      setModalService(serviceId as ServiceType);
    }
    if (zip) {
      setSelectedZip(zip);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (serviceId: ServiceType) => {
    setModalService(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleZipQuote = (zip: string) => {
    setSelectedZip(zip);
    setModalService('air-duct-cleaning');
    // Scroll smoothly to quote section or open modal
    const quoteElement = document.getElementById('quote-section');
    if (quoteElement) {
      const yOffset = -80;
      const y = quoteElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  const handleZipInspection = (zip: string) => {
    setSelectedZip(zip);
    setModalService('free-inspection');
    const quoteElement = document.getElementById('quote-section');
    if (quoteElement) {
      const yOffset = -80;
      const y = quoteElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  const handleLeadSubmitted = (lead: SubmittedLead) => {
    setSubmittedLeads((prev) => [lead, ...prev]);
  };

  // Scroll spy to update active navigation state
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'before-after', 'why-apex', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Premium Navbar */}
      <Navbar
        onOpenZipModal={handleOpenZipModal}
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenZipModal={handleOpenZipModal}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 2. Introduction Section */}
        <Introduction
          onDiscoverApex={() => handleNavigate('services')}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. ZIP Code Availability Checker */}
        <ZipChecker
          onQuoteWithZip={handleZipQuote}
          onInspectionWithZip={handleZipInspection}
        />

        {/* 5. Before & After Interactive Comparison */}
        <BeforeAfterSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Why Apex Pillars */}
        <WhyApex />

        {/* 7. How It Works Timeline */}
        <HowItWorks
          onOpenZipModal={handleOpenZipModal}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 8. About Apex Story */}
        <AboutSection
          onLearnMore={() => handleNavigate('why-apex')}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 9. Full Quote Form */}
        <QuoteFormSection
          initialZip={selectedZip}
          initialService={modalService}
          onLeadSubmitted={handleLeadSubmitted}
        />

        {/* 10. Contact Section */}
        <ContactSection />

        {/* 11. FAQ Accordions */}
        <FaqSection
          onOpenZipModal={handleOpenZipModal}
          onOpenQuoteModal={() => handleOpenQuoteModal('free-inspection')}
        />

        {/* 12. USA Nationwide Coverage Map */}
        <UsaCoverage onOpenZipModal={handleOpenZipModal} />

        {/* 13. Final CTA Section */}
        <FinalCta
          onOpenZipModal={handleOpenZipModal}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        onOpenPrivacyModal={() => setLegalModal({ isOpen: true, type: 'privacy' })}
        onOpenTermsModal={() => setLegalModal({ isOpen: true, type: 'terms' })}
      />

      {/* Modals */}
      <ZipModal
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
        onProceedToQuote={handleZipQuote}
        onProceedToInspection={handleZipInspection}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={modalService}
        initialZip={selectedZip}
        onLeadSubmitted={handleLeadSubmitted}
      />

      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />

      {/* Dedicated Mobile Sticky Bottom Fast CTA Bar */}
      <MobileStickyCta
        onCheckAvailability={() => {
          const element = document.getElementById('zip-availability');
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            handleOpenZipModal();
          }
        }}
      />

      {/* Floating Instagram Button (Bottom-Right, always visible) */}
      <FloatingInstagramButton />
    </div>
  );
}
