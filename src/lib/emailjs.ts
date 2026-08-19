import emailjs from '@emailjs/browser';
import { LeadFormData } from '../types';

export const EMAILJS_SERVICE_ID = 'service_wfzzr16';
export const EMAILJS_TEMPLATE_ID = 'template_fe5af6p';
export const EMAILJS_PUBLIC_KEY = '0rYv7F3_M0kaD92lQ';

// Initialize EmailJS with the provided Public Key
try {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
} catch (err) {
  console.warn('EmailJS initialization notice:', err);
}

export interface EmailSubmissionResult {
  success: boolean;
  message?: string;
  status?: number;
  error?: unknown;
}

/**
 * Sends a customer inquiry / lead form submission to EmailJS.
 * Maps exact template variables:
 * - name: {{name}}
 * - email: {{email}}
 * - phone: {{phone}}
 * - zip: {{zip}}
 * - service_address: {{service_address}}
 * - service_needed: {{service_needed}}
 * - message: {{message}}
 * - reply_to: {{email}}
 */
export async function sendLeadEmail(formData: LeadFormData): Promise<EmailSubmissionResult> {
  const templateParams: Record<string, string> = {
    // Primary variables mapped to EmailJS template:
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    zip: formData.zip_code.trim(),
    service_address: formData.address.trim(),
    service_needed: formData.service,
    message: formData.message?.trim() || 'No additional message provided.',
    reply_to: formData.email.trim(),

    // Complementary aliases for backward/forward template compatibility:
    address: formData.address.trim(),
    zip_code: formData.zip_code.trim(),
    service: formData.service,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      status: response.status,
      message: response.text,
    };
  } catch (error: any) {
    console.error('EmailJS submission error:', error);
    return {
      success: false,
      error,
      message: error?.text || error?.message || 'Failed to submit form. Please check your connection or try again.',
    };
  }
}

