export type ServiceNeeded =
  | 'Air Duct Cleaning'
  | 'Dryer Vent Cleaning'
  | 'HVAC Cleaning'
  | 'Free Inspection'
  | 'Multiple Services'
  | 'Not Sure';

// Legacy ID mapping type for backward compatibility
export type ServiceType =
  | 'air-duct-cleaning'
  | 'dryer-vent-cleaning'
  | 'hvac-cleaning'
  | 'free-inspection'
  | 'multiple-services'
  | 'not-sure'
  | ServiceNeeded;

export const SERVICE_NEEDED_OPTIONS: ServiceNeeded[] = [
  'Air Duct Cleaning',
  'Dryer Vent Cleaning',
  'HVAC Cleaning',
  'Free Inspection',
  'Multiple Services',
  'Not Sure',
];

export const mapToServiceNeeded = (val?: string): ServiceNeeded => {
  if (!val) return 'Air Duct Cleaning';
  const lower = val.toLowerCase().replace(/[-_]/g, ' ');
  if (lower.includes('dryer')) return 'Dryer Vent Cleaning';
  if (lower.includes('hvac')) return 'HVAC Cleaning';
  if (lower.includes('free') || lower.includes('inspect')) return 'Free Inspection';
  if (lower.includes('multiple') || lower.includes('package')) return 'Multiple Services';
  if (lower.includes('not sure')) return 'Not Sure';
  return 'Air Duct Cleaning';
};

export interface ServiceItem {
  id: ServiceType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge?: string;
  benefits: string[];
  ctaText: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Air Duct' | 'Dryer Vent';
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  stats: {
    dustReduction: string;
    airflowBoost: string;
    fireRiskReduction?: string;
  };
}

export interface WhyApexItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Standardized Lead Form Data Structure for EmailJS integration
 * Exact variables: {{name}}, {{email}}, {{phone}}, {{address}}, {{zip_code}}, {{service}}, {{message}}
 */
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip_code: string;
  service: ServiceNeeded;
  message: string;
}

export interface SubmittedLead extends LeadFormData {
  id: string;
  timestamp: string;
  status: 'Received' | 'Assigned' | 'Scheduled';
  estimatedTimeline: string;
}

// Backward compatibility alias
export type QuoteFormData = LeadFormData;
