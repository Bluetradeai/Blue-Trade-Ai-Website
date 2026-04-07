'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'AI-Powered Websites Engineered to Convert',
    body: 'Professionally built websites engineered to convert visitors into leads and calls — designed specifically for trade and home service businesses seeking a stronger online presence.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="8" width="32" height="22" rx="3" stroke="#1A4D8F" strokeWidth="2.5" />
        <path d="M14 30L13 36" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 30L27 36" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 36H30" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 24H36" stroke="#1A4D8F" strokeWidth="2" />
        <circle cx="20" cy="16" r="4" stroke="#1A4D8F" strokeWidth="2" />
        <path d="M14 21a6 6 0 0 1 12 0" stroke="#1A4D8F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Google Ads for Home Service Businesses',
    body: 'Google Ads campaigns targeting customers actively searching for your services — a proven contractor lead generation system that puts your business in front of high-intent local buyers.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="#1A4D8F" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="8" stroke="#1A4D8F" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="#1A4D8F" />
        <line x1="20" y1="4" x2="20" y2="8" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="32" x2="20" y2="36" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="20" x2="8" y2="20" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="20" x2="36" y2="20" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Lead Tracking That Shows Real Revenue',
    body: 'Lead tracking and performance reporting that shows exactly where revenue is coming from — so every marketing dollar is accounted for and your trade business online presence delivers measurable ROI.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="28" width="6" height="8" rx="1" fill="#1A4D8F" />
        <rect x="13" y="20" width="6" height="16" rx="1" fill="#1A4D8F" />
        <rect x="22" y="14" width="6" height="22" rx="1" fill="#1A4D8F" />
        <rect x="31" y="8" width="6" height="28" rx="1" fill="#1A4D8F" opacity="0.6" />
        <path d="M6 22L15 16L24 10L33 5" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="33" cy="5" r="2.5" fill="#1A4D8F" />
      </svg>
    ),
  },
  {
    title: 'Automation Systems for Contractors',
    body: 'Automation systems that improve response time, follow-up, and operational efficiency — practical AI tools for trade businesses that save time and keep your operation running smoothly.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 4L24 12H36L26.5 18.5L30 27L20 21L10 27L13.5 18.5L4 12H16L20 4Z" stroke="#1A4D8F" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="20" cy="21" r="3" fill="#1A4D8F" />
        <path d="M20 24V36" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="solution"
      aria-label="Solution — Blue Trade AI installs systems that drive consistent growth"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-[#0F172A]">
            Blue Trade AI Installs the Systems That Drive Consistent Growth
          </h2>
          <p className="text-[#475569] text-lg mt-6 leading-relaxed">
            We design and manage integrated growth systems that combine AI-powered websites,
            targeted advertising, lead tracking, and automation — all built specifically for the
            trades and home service industry. Every component is built to produce results you
            can see and measure.
          </p>
        </motion.div>

        <div ref={ref} className="mt-12 space-y-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 bg-[#EFF6FF] p-3 rounded-full w-[64px] h-[64px] flex items-center justify-center">
                <div className="w-10 h-10">{feature.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">{feature.title}</h3>
                <p className="text-[#475569] mt-2 leading-relaxed">{feature.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
