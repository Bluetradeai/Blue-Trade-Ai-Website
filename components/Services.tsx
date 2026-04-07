'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCard {
  title: string;
  body: string;
  chatMessage: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: 'AI-Powered Website Builds',
    body: 'Professional websites built with conversion in mind — designed to turn visitors into inquiries and calls. Every site is optimized for local SEO and built for the best website for home service companies.',
    chatMessage: 'Tell me more about AI-Powered Website Builds',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="10" width="36" height="26" rx="3" stroke="#1A4D8F" strokeWidth="2.5" />
        <path d="M6 28H42" stroke="#1A4D8F" strokeWidth="2" />
        <path d="M18 34L17 42" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 34L31 42" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 42H35" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 20h6M22 20h8" stroke="#1A4D8F" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24h4" stroke="#1A4D8F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Google Ads Management',
    body: 'Targeted local ad campaigns that put your business in front of high-intent customers at the right moment. Google Ads management for local service businesses done right.',
    chatMessage: 'Tell me more about Google Ads Management',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M36 12L30 18" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="28" y="6" width="14" height="14" rx="2" stroke="#1A4D8F" strokeWidth="2.5" />
        <circle cx="19" cy="27" r="11" stroke="#1A4D8F" strokeWidth="2.5" />
        <path d="M27 35L38 42" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="19" cy="27" r="5" stroke="#1A4D8F" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Lead Tracking and Reporting',
    body: 'Clear, accurate reporting that shows which channels are generating leads and which are generating revenue. Know exactly where every contractor lead comes from.',
    chatMessage: 'Tell me more about Lead Tracking and Reporting',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 36L18 26L24 32L34 20L40 14" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="14" r="3" fill="#1A4D8F" />
        <rect x="6" y="34" width="6" height="8" rx="1" fill="#1A4D8F" opacity="0.3" />
        <rect x="16" y="28" width="6" height="14" rx="1" fill="#1A4D8F" opacity="0.4" />
        <rect x="26" y="22" width="6" height="20" rx="1" fill="#1A4D8F" opacity="0.5" />
        <rect x="36" y="16" width="6" height="26" rx="1" fill="#1A4D8F" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: 'Automation and AI Tools',
    body: 'Practical automation that handles follow-up, saves time, and keeps your business operating efficiently. Automated follow-up for contractors that never lets a lead fall through the cracks.',
    chatMessage: 'Tell me more about Automation and AI Tools',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="8" stroke="#1A4D8F" strokeWidth="2.5" />
        <path d="M24 8V12M24 36V40M8 24H12M36 24H40" stroke="#1A4D8F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13.1 13.1L16 16M32 32L34.9 34.9M13.1 34.9L16 32M32 16L34.9 13.1" stroke="#1A4D8F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#1A4D8F" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleLearnMore = (chatMessage: string) => {
    // Dispatch custom event to open chatbot with pre-filled message
    window.dispatchEvent(new CustomEvent('openChat', { detail: { message: chatMessage } }));
  };

  return (
    <section
      id="services"
      aria-label="Services — what Blue Trade AI delivers"
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
            What Blue Trade AI Delivers
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              aria-label={service.title}
            >
              <div className="w-12 h-12 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0F172A]">{service.title}</h3>
              <p className="text-[#475569] mt-3 leading-relaxed flex-1">{service.body}</p>
              <button
                onClick={() => handleLearnMore(service.chatMessage)}
                className="mt-6 text-[#1A4D8F] font-semibold hover:text-[#2563EB] transition-colors text-left focus:outline-none focus:ring-2 focus:ring-[#1A4D8F] rounded"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
