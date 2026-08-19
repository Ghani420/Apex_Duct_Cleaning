import React, { useState, useEffect } from 'react';
import {
  LeadFormData,
  ServiceNeeded,
  SERVICE_NEEDED_OPTIONS,
  mapToServiceNeeded,
  SubmittedLead,
} from '../types';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendLeadEmail } from '../lib/emailjs';

export interface LeadFormProps {
  initialZip?: string;
  initialService?: string;
  submitButtonText?: string;
  onSuccess?: (lead: SubmittedLead) => void;
  idPrefix?: string;
  compact?: boolean;
  className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialZip = '',
  initialService = 'Air Duct Cleaning',
  submitButtonText = 'GET MY FREE QUOTE',
  onSuccess,
  idPrefix = 'lead-form',
  compact = false,
  className = '',
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip_code: initialZip,
    service: mapToServiceNeeded(initialService),
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (initialZip) {
      setFormData((prev) => ({ ...prev, zip_code: initialZip }));
    }
  }, [initialZip]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: mapToServiceNeeded(initialService) }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Service address is required.';
    }

    if (!formData.zip_code.trim()) {
      newErrors.zip_code = '5-digit ZIP code is required.';
    } else if (!/^\d{5}$/.test(formData.zip_code.trim())) {
      newErrors.zip_code = 'Please enter a valid 5-digit U.S. ZIP code.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service needed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Standard payload matches EmailJS template variables:
    // {{name}}, {{email}}, {{phone}}, {{service_address}}, {{zip}}, {{service_needed}}, {{message}}
    const leadPayload: LeadFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      zip_code: formData.zip_code.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };

    try {
      const result = await sendLeadEmail(leadPayload);

      if (result.success) {
        const newLead: SubmittedLead = {
          ...leadPayload,
          id: `APX-${Math.floor(100000 + Math.random() * 900000)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'Received',
          estimatedTimeline: 'Representative contact within 15 minutes',
        };

        setIsSubmitting(false);
        setIsSubmitted(true);
        if (onSuccess) {
          onSuccess(newLead);
        }
      } else {
        setIsSubmitting(false);
        setSubmitError(
          result.message || 'We could not submit your request at this moment. Please check your connection or try again.'
        );
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError(
        err?.message || 'An unexpected error occurred while processing your request. Please try again.'
      );
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      zip_code: '',
      service: 'Air Duct Cleaning',
      message: '',
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div
        id={`${idPrefix}-success-message`}
        className="py-10 text-center space-y-6 animate-in zoom-in-95 duration-200"
      >
        <div className="w-16 h-16 rounded-full bg-[#BF953F]/20 border-2 border-[#BF953F] flex items-center justify-center mx-auto text-gold shadow-gold-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
            REQUEST RECEIVED
          </h3>
          <p className="text-[#FCF6BA] font-bold text-base">
            Thank you, {formData.name || 'valued customer'}. An Apex regional specialist will contact you shortly.
          </p>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-normal">
            We have routed your request for <strong>{formData.service}</strong> to our dispatch team covering ZIP <strong>{formData.zip_code}</strong>.
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl bg-white/[0.04] border border-[#B38728]/40 text-gold text-xs font-bold uppercase tracking-wider hover:bg-white/[0.08] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  const inputPadding = compact ? 'px-3.5 py-2.5' : 'px-4 py-3.5';
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5 font-sans';

  return (
    <form
      id={`${idPrefix}-element`}
      onSubmit={handleSubmit}
      className={`space-y-5 text-left ${className}`}
      noValidate
    >
      {/* 1. FULL NAME & 2. EMAIL (Grid on larger screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClass}>
            FULL NAME <span className="text-gold">*</span>
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Robert Miller"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            className={`w-full ${inputPadding} bg-black/60 border rounded-xl text-white text-sm focus:outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-[#BF953F]'
            }`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>
            EMAIL <span className="text-gold">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="robert@example.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            className={`w-full ${inputPadding} bg-black/60 border rounded-xl text-white text-sm focus:outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-[#BF953F]'
            }`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* 3. PHONE NUMBER & 5. ZIP CODE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
            PHONE NUMBER <span className="text-gold">*</span>
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            className={`w-full ${inputPadding} bg-black/60 border rounded-xl text-white text-sm focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-[#BF953F]'
            }`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-zip_code`} className={labelClass}>
            ZIP CODE <span className="text-gold">*</span>
          </label>
          <input
            id={`${idPrefix}-zip_code`}
            name="zip_code"
            type="text"
            inputMode="numeric"
            maxLength={5}
            required
            autoComplete="postal-code"
            placeholder="5-Digit ZIP (e.g. 10001)"
            value={formData.zip_code}
            onChange={(e) => {
              setFormData({ ...formData, zip_code: e.target.value.replace(/\D/g, '') });
              if (errors.zip_code) setErrors({ ...errors, zip_code: undefined });
            }}
            className={`w-full ${inputPadding} bg-black/60 border rounded-xl text-white text-sm focus:outline-none transition-colors ${
              errors.zip_code ? 'border-red-500' : 'border-neutral-800 focus:border-[#BF953F]'
            }`}
          />
          {errors.zip_code && <p className="text-red-400 text-xs mt-1">{errors.zip_code}</p>}
        </div>
      </div>

      {/* 4. SERVICE ADDRESS */}
      <div>
        <label htmlFor={`${idPrefix}-address`} className={labelClass}>
          SERVICE ADDRESS <span className="text-gold">*</span>
        </label>
        <input
          id={`${idPrefix}-address`}
          name="address"
          type="text"
          required
          autoComplete="street-address"
          placeholder="Street Address, City, State"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            if (errors.address) setErrors({ ...errors, address: undefined });
          }}
          className={`w-full ${inputPadding} bg-black/60 border rounded-xl text-white text-sm focus:outline-none transition-colors ${
            errors.address ? 'border-red-500' : 'border-neutral-800 focus:border-[#BF953F]'
          }`}
        />
        {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
      </div>

      {/* 6. SERVICE NEEDED */}
      <div>
        <label htmlFor={`${idPrefix}-service`} className={labelClass}>
          SERVICE NEEDED <span className="text-gold">*</span>
        </label>
        <select
          id={`${idPrefix}-service`}
          name="service"
          required
          value={formData.service}
          onChange={(e) => {
            setFormData({ ...formData, service: e.target.value as ServiceNeeded });
            if (errors.service) setErrors({ ...errors, service: undefined });
          }}
          className="w-full px-4 py-3.5 bg-black/80 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#BF953F] transition-colors"
        >
          {SERVICE_NEEDED_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-[#121215] text-white">
              {opt}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
      </div>

      {/* 7. MESSAGE */}
      <div>
        <label htmlFor={`${idPrefix}-message`} className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5 font-sans">
          MESSAGE
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your home ventilation needs, questions, or details..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-black/60 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#BF953F] transition-colors resize-none placeholder-neutral-500"
        />
      </div>

      {/* SUBMIT ERROR DISPLAY */}
      {submitError && (
        <div
          id={`${idPrefix}-submit-error`}
          className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5 animate-in fade-in duration-200"
        >
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold text-red-300">Unable to Submit Request</p>
            <p>{submitError}</p>
          </div>
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <div className="pt-2">
        <button
          type="submit"
          id={`${idPrefix}-submit-btn`}
          disabled={isSubmitting}
          className="w-full py-4 px-8 rounded-xl gold-gradient hover:gold-gradient-hover text-black font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-gold flex items-center justify-center gap-3 disabled:opacity-70 hover:scale-[1.01]"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              PROCESSING YOUR REQUEST...
            </span>
          ) : (
            <>
              <span>{submitButtonText}</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-3">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>Zero Obligation. Your information is 100% confidential & secure.</span>
        </div>
      </div>
    </form>
  );
};
