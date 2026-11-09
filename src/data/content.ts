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
    shortDescription: 'Comprehensive HVAC system cleaning targeting furnace blower motors, evaporator coils, heat exchangers, and air plenums to restore peak thermal efficiency and eliminate trapped particulate buildup.',
    fullDescription: 'Our deep HVAC cleaning addresses the coils, blower motor, plenum, heat exchangers, and air handlers. Removing dust and debris restores optimum airflow, lowers electricity consumption, and boosts equipment lifespan.',
    image: hvacUnitImg,
    benefits: [
      'Increases HVAC energy efficiency & lowers utility bills',
      'Deep cleans evaporator coils, blower fan & furnace plenum',
      'Common signs needed: Weak airflow, higher energy bills, musty odors',
      'Why Apex: HEPA negative vacuum extraction & certified technicians'
    ],
    ctaText: 'GET QUOTE'
  },
  {
    id: 'air-duct-cleaning',
    title: 'AIR DUCT CLEANING',
    badge: 'WHOLE-HOME AIR PURITY',
    shortDescription: 'Professional residential air duct cleaning utilizing high-powered negative air HEPA extraction and rotary whips to eliminate accumulated dust, pet dander, allergens, and debris from all supply and return vents.',
    fullDescription: 'Using powerful negative air vacuum systems and rotary agitating whips, we dislodge pet dander, drywall dust, pollen, and microscopic particulates from every supply and return vent trunk line, significantly improving indoor air quality.',
    image: airDuctImg,
    benefits: [
      'Eliminates trapped dust, allergens, pet dander & pollen',
      'Improves indoor air quality & balanced room-to-room airflow',
      'Common signs needed: Dust settling fast, allergic symptoms, visible vent debris',
      'Why Apex: NADCA-standard containment with zero home mess'
    ],
    ctaText: 'GET QUOTE'
  },
  {
    id: 'dryer-vent-cleaning',
    title: 'DRYER VENT CLEANING',
    badge: 'FIRE SAFETY & FAST DRYING',
    shortDescription: 'Professional dryer vent cleaning removing combustible lint blockages and restricted airflow from dryer to exterior exhaust cap to safeguard your home against house fires and accelerate drying times.',
    fullDescription: 'Clogged dryer lines are a leading source of residential house fires and inflated electricity bills. We clear the full exterior exhaust path from the dryer connection to the roof or exterior wall cap.',
    image: dryerVentImg,
    benefits: [
      'Mitigates hazardous residential dryer lint fire risks',
      'Restores rapid drying cycles & saves laundry electricity',
      'Common signs needed: Clothes hot but damp, burning smell, long dry times',
      'Why Apex: Complete wall-to-roof exhaust line cleaning'
    ],
    ctaText: 'GET QUOTE'
  },
  {
    id: 'free-inspection',
    title: 'FREE INSPECTION',
    badge: 'NO OBLIGATION ASSESSMENT',
    shortDescription: 'Comprehensive fiber-optic video camera assessment of your home\'s air duct system and dryer vent exhaust to identify internal contamination, airflow restrictions, and exact service needs with zero obligation.',
    fullDescription: 'Our certified technicians conduct high-definition fiber optic video inspections of your ductwork and ventilation systems to clearly show you the actual internal condition before any work begins.',
    image: inspectionImg,
    benefits: [
      'High-definition borescope camera inspection of supply & returns',
      'Accurate diagnosis of dust, debris & lint buildup',
      'Transparent findings with upfront, honest service options',
      'Why Apex: 100% free inspection with zero sales pressure'
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
    description: 'Professional residential air duct, dryer vent and HVAC cleaning performed by trained, background-checked ventilation technicians.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'usa-coverage',
    title: 'USA-WIDE COVERAGE',
    description: 'Serving homeowners across the United States with dedicated regional service dispatchers and certified local crews.',
    iconName: 'MapPin'
  },
  {
    id: 'free-inspection',
    title: 'FREE INSPECTION',
    description: 'Start with an inspection when you\'re unsure what service you need. 100% transparent and zero obligation with fiber-optic video diagnosis.',
    iconName: 'SearchCheck'
  },
  {
    id: 'customer-first',
    title: 'CUSTOMER FIRST',
    description: 'Professional communication, clear upfront pricing, and homeowner-focused respect for your property with zero hidden charges.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'cleaner-airflow',
    title: 'CLEANER AIRFLOW',
    description: 'Helping homeowners eliminate dust, pet dander and allergens to maintain cleaner ventilation systems and optimal breathing environments.',
    iconName: 'Wind'
  },
  {
    id: 'easy-online-request',
    title: 'EASY ONLINE REQUEST',
    description: 'Check your ZIP code in seconds and request your free quote or inspection seamlessly online with fast dispatch confirmation.',
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
    question: 'How do I check if Apex Duct Cleaning serves my area?',
    answer: 'Simply enter your 5-digit US ZIP code in our availability tool on this page. Apex Duct Cleaning proudly serves residential homeowners nationwide across the United States through an established network of certified ventilation specialists and regional dispatch teams.'
  },
  {
    question: 'What services does Apex Duct Cleaning provide?',
    answer: 'We specialize in whole-home Air Duct Cleaning, Dryer Vent Exhaust Cleaning, HVAC Furnace & Coil Cleaning, and Free Pre-Service Video Camera Inspections. Every service is performed according to strict NADCA indoor air hygiene standards.'
  },
  {
    question: 'Do you offer free inspections?',
    answer: 'Yes! If you are uncertain about the current cleanliness or condition of your ductwork or dryer vent, you can book a 100% Free Inspection. Our certified technician inspects your system using high-definition fiber-optic cameras with zero cost and zero obligation.'
  },
  {
    question: 'How much does air duct and dryer vent cleaning cost, and how do I request a quote?',
    answer: 'Pricing depends on the square footage of your home, number of HVAC systems, and the total count of supply and return vents. You can request a free, upfront estimate anytime through our online form or by checking your ZIP code. We believe in transparent pricing with no hidden fees or unexpected upsells.'
  },
  {
    question: 'Do you serve homeowners across the entire USA?',
    answer: 'Yes. Apex Duct Cleaning is structured to serve residential homeowners across the United States. Our regional teams are equipped with industrial-grade negative air pressure machines and HEPA filtration gear to deliver consistent, top-tier service nationwide.'
  },
  {
    question: 'How often should residential air ducts be cleaned?',
    answer: 'The National Air Duct Cleaners Association (NADCA) recommends having residential air ducts professionally cleaned every 2 to 3 years. Homes with pets, residents with asthma or allergies, recent home renovations, or noticeable dust accumulation should schedule cleaning more frequently.'
  },
  {
    question: 'How often should dryer vents be cleaned and what are warning signs of a clogged vent?',
    answer: 'The National Fire Protection Association (NFPA) recommends professional dryer vent cleaning at least once per year. Key warning signs that your dryer vent is clogged include: clothes taking longer than one cycle to dry, the dryer or laundry room becoming excessively hot, a burning lint odor, or the exterior vent flap failing to open during operation.'
  },
  {
    question: 'What are the common signs my HVAC system or air ducts need professional cleaning?',
    answer: 'Common signs include: visible dust puffs when the HVAC turns on, dust settling on furniture shortly after dusting, persistent stale or musty odors throughout the home, uneven airflow between rooms, rising heating or cooling bills, and worsening morning allergy symptoms.'
  },
  {
    question: 'Will air duct cleaning make a mess in my home?',
    answer: 'Never. Our technicians use clean drop cloths, corner protectors, and shoe covers while maintaining continuous negative air HEPA vacuum pressure. All dislodged dust, pet dander, and contaminants are pulled directly into sealed collection units so none enters your living space.'
  },
  {
    question: 'Can professional air duct cleaning improve indoor air quality and lower energy bills?',
    answer: 'Yes. Removing pounds of accumulated dust and debris eliminates restrictions on airflow, allowing your HVAC blower and coils to transfer heat and circulate air with significantly less effort. This improves indoor air quality, reduces airborne allergens, and helps lower monthly utility costs.'
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
