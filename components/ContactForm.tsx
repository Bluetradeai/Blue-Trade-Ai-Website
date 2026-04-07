'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  businessName: z.string().min(1, 'Business name is required'),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  businessType: z.string().min(1, 'Please select a business type'),
  helpWith: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const businessTypes = [
  'Plumbing',
  'Roofing',
  'Gutters',
  'Electrical',
  'Painting',
  'General Contracting',
  'Concrete',
  'Framing',
  'Junk Removal',
  'Lawn and Yard Service',
  'Tree Service',
  'Flooring',
  'Appliance Retail',
  'Furniture Retail',
  'Other',
];

const inputClass =
  'border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#1A4D8F] focus:border-transparent outline-none transition text-[#0F172A] placeholder-gray-400';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const existing = JSON.parse(localStorage.getItem('bluetradeai_leads') || '[]') as FormData[];
    existing.push({ ...data, timestamp: new Date().toISOString() } as FormData & { timestamp: string });
    localStorage.setItem('bluetradeai_leads', JSON.stringify(existing));
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      aria-label="Contact form — get in touch with Blue Trade AI"
      className="bg-[#F8FAFC] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-[#0F172A]">
            Get in Touch with Blue Trade AI
          </h2>
          <p className="text-[#475569] text-lg mt-4 max-w-2xl mx-auto">
            Fill out the form below and a member of our team will be in touch within
            one business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="#16A34A" strokeWidth="2" />
                  <path d="M8 12.5L10.5 15L16 9.5" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">Request Received</h3>
              <p className="text-[#475569] mt-2">
                Thank you. A member of the Blue Trade AI team will be in touch shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#1A4D8F] font-semibold hover:text-[#2563EB] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#0F172A] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    {...register('fullName')}
                    className={inputClass}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-[#0F172A] mb-1">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    placeholder="Smith Plumbing Co."
                    {...register('businessName')}
                    className={inputClass}
                    aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                  />
                  {errors.businessName && (
                    <p id="businessName-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...register('phone')}
                    className={inputClass}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@smithplumbing.com"
                    {...register('email')}
                    className={inputClass}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Business Type — spans both columns */}
                <div className="md:col-span-2">
                  <label htmlFor="businessType" className="block text-sm font-semibold text-[#0F172A] mb-1">
                    Type of Business <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessType"
                    {...register('businessType')}
                    className={inputClass}
                    defaultValue=""
                    aria-describedby={errors.businessType ? 'businessType-error' : undefined}
                  >
                    <option value="" disabled>Select your industry</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p id="businessType-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.businessType.message}
                    </p>
                  )}
                </div>

                {/* Help With — spans both columns */}
                <div className="md:col-span-2">
                  <label htmlFor="helpWith" className="block text-sm font-semibold text-[#0F172A] mb-1">
                    What Are You Looking for Help With?
                  </label>
                  <textarea
                    id="helpWith"
                    rows={4}
                    placeholder="Tell us about your business, your current marketing challenges, and what you're looking to improve..."
                    {...register('helpWith')}
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-[#1A4D8F] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#2563EB] hover:scale-[1.01] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4D8F]"
                aria-label="Submit contact request to Blue Trade AI"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
