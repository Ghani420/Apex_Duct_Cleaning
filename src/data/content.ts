import heroTechImg from '../assets/images/hero_apex_technician_1787069578359.jpg';
import airDuctImg from '../assets/images/air_duct_clean_1786890544910.jpg';
import dryerVentImg from '../assets/images/dryer_vent_card_1786890559166.jpg';
import hvacUnitImg from '../assets/images/hvac_unit_card_1786890572596.jpg';
import inspectionImg from '../assets/images/inspection_card_1786890589144.jpg';
import ductDirtyImg from '../assets/images/duct_dirty_view_1786890605538.jpg';
import ductCleanImg from '../assets/images/duct_clean_view_1786890618668.jpg';
import dryerDirtyImg from '../assets/images/dryer_dirty_view_1786890631041.jpg';
import dryerCleanImg from '../assets/images/dryer_clean_view_1786890643068.jpg';
import aboutTechImg from '../assets/images/apex_technician_tablet_1786976988306.jpg';
import apexOfficialLogoImg from '../assets/images/apex_official_logo_1786894560590.jpg';

import { ServiceItem, BeforeAfterItem, WhyApexItem, StepItem, FaqItem } from '../types';

export const IMAGES = {
  heroTech: heroTechImg,
  airDuct: airDuctImg,
  dryerVent: dryerVentImg,
  hvacUnit: hvacUnitImg,
  inspection: inspectionImg,
  ductDirty: ductDirtyImg,
  ductClean: ductCleanImg,
  dryerDirty: dryerDirtyImg,
  dryerClean: dryerCleanImg,
  aboutTech: aboutTechImg,
  apexOfficialLogo: apexOfficialLogoImg,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hvac-cleaning',
    title: 'HVAC CLEANING',
    badge: 'HEATING & COOLING EFFICIENCY',
    shortDescription: 'Professional HVAC cleaning to help remove accumulated dust and buildup from key areas of your heating and cooling system.',
    fullDescription: 'Our deep HVAC cleaning addresses the coils, blower motor, plenum, heat exchangers, and air handlers. Removing dust and debris restores optimum airflow and boosts thermal transfer efficiency.',
    image: hvacUnitImg,
    benefits: [
      'Increases system energy efficiency',
      'Removes deep furnace & coil debris',
      'Extends HVAC equipment lifespan',
      'Minimizes strain on blower motor'
    ],
    ctaText: 'GET QUOTE'
  },
  {
    id: 'air-duct-cleaning',
    title: 'AIR DUCT CLEANING',
    badge: 'WHOLE-HOME AIR PURITY',
    shortDescription: 'Professional air duct cleaning designed to help remove accumulated dust and debris and support cleaner airflow throughout your home.',
    fullDescription: 'Using powerful negative air vacuum systems and rotary agitating whips, we dislodge pet dander, drywall dust, pollen, and microscopic particulates from every supply and return vent trunk line.',
    image: airDuctImg,
    benefits: [
      'Eliminates trapped dust & allergens',
      'Improves balanced room airflow',
      'Reduces airborne dust settling on furniture',
      'Sanitizes supply and return duct trunks'
    ],
    ctaText: 'GET QUOTE'
  },
  {
    id: 'dryer-vent-cleaning',
    title: 'DRYER VENT CLEANING',
    badge: 'FIRE SAFETY & FAST DRYING',
    shortDescription: 'Professional dryer vent cleaning to help remove lint buildup and restricted airflow and support better dryer performance.',
    fullDescription: 'Clogged dryer lines are a leading source of residential house fires and inflated electricity bills. We clear the full exterior exhaust path from the dryer connection to the roof or exterior wall cap.',
    image: dryerVentImg,
    benefits: [
      'Mitigates dangerous residential fire hazards',
      'Dries clothing loads significantly faster',
      'Reduces high energy & electricity costs',
      'Prevents dryer overheating & component wear'
    ],
    ctaText: 'GET QUOTE'
  },
  {
    id: 'free-inspection',
    title: 'FREE INSPECTION',
    badge: 'NO OBLIGATION ASSESSMENT',
    shortDescription: 'Not sure what your home needs? Let Apex inspect your system and help you determine the appropriate service.',
    fullDescription: 'Our certified technicians conduct high-definition fiber optic video inspections of your ductwork and ventilation systems to clearly show you the actual internal condition before any work begins.',
    image: inspectionImg,
    benefits: [
      'HD digital borescope camera assessment',
      'Zero cost, zero obligation transparent review',
      'Airflow pressure & velocity check',
      'Customized recommendations for your home'
    ],
    ctaText: 'GET FREE INSPECTION'
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'air-duct-comparison',
    category: 'Air Duct',
    title: 'AIR DUCT VENTILATION RESTORATION',
    subtitle: 'See how years of dust, construction debris, and dander are completely eliminated with our negative air extraction method.',
    beforeImage: ductDirtyImg,
    afterImage: ductCleanImg,
    beforeLabel: 'BEFORE (DUST & ALLERGENS)',
    afterLabel: 'AFTER (SPOTLESS APEX CLEAN)',
    stats: {
      dustReduction: '98.7% Dust Removed',
      airflowBoost: '+42% Airflow Rate'
    }
  },
  {
    id: 'dryer-vent-comparison',
    category: 'Dryer Vent',
    title: 'DRYER VENT LINT EXTRACTION',
    subtitle: 'Combustible lint and heat blockages removed to safeguard your home against fire risks and restore rapid drying cycles.',
    beforeImage: dryerDirtyImg,
    afterImage: dryerCleanImg,
    beforeLabel: 'BEFORE (CLOGGED LINT HAZARD)',
    afterLabel: 'AFTER (100% CLEAR EXHAUST)',
    stats: {
      dustReduction: '100% Lint Cleared',
      airflowBoost: '2.5x Faster Drying',
      fireRiskReduction: '0% Fire Risk from Vent'
    }
  }
];

export const WHY_APEX_DATA: WhyApexItem[] = [
  {
    id: 'prof-service',
    title: 'PROFESSIONAL SERVICE',
    description: 'Professional residential cleaning performed by trained, background-checked ventilation technicians.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'usa-coverage',
    title: 'USA-WIDE COVERAGE',
    description: 'Serving homeowners across the United States with dedicated regional service dispatchers.',
    iconName: 'MapPin'
  },
  {
    id: 'free-inspection',
    title: 'FREE INSPECTION',
    description: 'Start with an inspection when you\'re unsure what service you need. 100% transparent and zero obligation.',
    iconName: 'SearchCheck'
  },
  {
    id: 'customer-first',
    title: 'CUSTOMER FIRST',
    description: 'Professional communication, clear upfront pricing, and homeowner-focused respect for your property.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'cleaner-airflow',
    title: 'CLEANER AIRFLOW',
    description: 'Helping homeowners maintain cleaner ventilation systems and optimal breathing environments.',
    iconName: 'Wind'
  },
  {
    id: 'easy-online-request',
    title: 'EASY ONLINE REQUEST',
    description: 'Check your ZIP code in seconds and request your free quote or inspection seamlessly online.',
    iconName: 'Laptop'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    stepNumber: '01',
    title: 'ENTER YOUR ZIP',
    description: 'Check service availability instantly in your city or neighborhood across the USA.'
  },
  {
    stepNumber: '02',
    title: 'SELECT YOUR SERVICE',
    description: 'Choose HVAC, air duct, dryer vent cleaning or start with a complimentary 100% free inspection.'
  },
  {
    stepNumber: '03',
    title: 'REQUEST YOUR QUOTE',
    description: 'Enter your basic home details in our secure portal to receive transparent, upfront pricing.'
  },
  {
    stepNumber: '04',
    title: 'SCHEDULE SERVICE',
    description: 'An Apex service coordinator contacts you to confirm your convenient appointment time.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How do I check if Apex serves my area?',
    answer: 'Simply enter your 5-digit US ZIP code in our availability tool on this page. Apex Duct Cleaning proudly serves residential homeowners nationwide across the United States with our extensive network of certified service technicians.'
  },
  {
    question: 'What services does Apex provide?',
    answer: 'We specialize in whole-home Air Duct Cleaning, Dryer Vent Exhaust Cleaning, HVAC Furnace & Coil Cleaning, and Free Pre-Service Video Inspections. We also provide antimicrobial sanitization treatments upon request.'
  },
  {
    question: 'Do you offer free inspections?',
    answer: 'Yes! If you are uncertain about the current cleanliness or condition of your ductwork or dryer vent, you can book a 100% Free Inspection. Our technician inspects your system using fiber-optic cameras with zero obligation.'
  },
  {
    question: 'How do I request a quote?',
    answer: 'You can request a free quote anytime online through our quote form, by entering your ZIP code, or by contacting our customer care line. We provide prompt, transparent estimates tailored to your home layout.'
  },
  {
    question: 'Do you serve homeowners across the USA?',
    answer: 'Yes. Apex Duct Cleaning is established to serve residential homeowners across the United States. Our regional teams are equipped with industrial-grade negative air pressure machines and HEPA filtration gear.'
  },
  {
    question: 'How often should dryer vents be cleaned?',
    answer: 'The National Fire Protection Association (NFPA) recommends having residential dryer vents professionally inspected and cleaned at least once per year. Homes with large families, frequent laundry cycles, or long vent runs should consider cleaning every 6 to 9 months to prevent lint fire risks and keep appliances working efficiently.'
  },
  {
    question: 'How long does a typical air duct cleaning appointment take?',
    answer: 'A standard residential air duct cleaning service generally takes between 2 to 4 hours depending on the square footage of your home, number of HVAC systems, and the total count of supply and return registers.'
  },
  {
    question: 'Will duct cleaning make a mess in my home?',
    answer: 'Never. Our technicians use clean drop cloths, corner protectors, shoe covers, and seal all registers while maintaining continuous negative vacuum pressure. All dust and debris is pulled directly into our sealed HEPA filtration collection units outside or in our containment units.'
  }
];

export const USA_HUB_POINTS = [
  { city: 'New York, NY', x: 84, y: 32 },
  { city: 'Los Angeles, CA', x: 14, y: 58 },
  { city: 'Chicago, IL', x: 67, y: 36 },
  { city: 'Houston, TX', x: 53, y: 80 },
  { city: 'Phoenix, AZ', x: 23, y: 64 },
  { city: 'Philadelphia, PA', x: 82, y: 38 },
  { city: 'San Antonio, TX', x: 50, y: 84 },
  { city: 'San Diego, CA', x: 16, y: 66 },
  { city: 'Dallas, TX', x: 52, y: 72 },
  { city: 'Denver, CO', x: 38, y: 46 },
  { city: 'Seattle, WA', x: 16, y: 16 },
  { city: 'Atlanta, GA', x: 74, y: 66 },
  { city: 'Miami, FL', x: 83, y: 90 },
  { city: 'Orlando, FL', x: 81, y: 84 },
  { city: 'Charlotte, NC', x: 79, y: 56 },
  { city: 'Nashville, TN', x: 68, y: 54 },
  { city: 'Las Vegas, NV', x: 20, y: 52 },
  { city: 'Kansas City, MO', x: 54, y: 48 },
  { city: 'Minneapolis, MN', x: 58, y: 26 },
  { city: 'Boston, MA', x: 88, y: 28 },
  { city: 'Detroit, MI', x: 72, y: 33 },
  { city: 'Tampa, FL', x: 79, y: 86 },
  { city: 'Portland, OR', x: 15, y: 22 },
  { city: 'Salt Lake City, UT', x: 28, y: 40 },
];
