'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const columns = [
  {
    title: 'AI Technology',
    body: 'Cutting-edge AI tools applied to real trade business problems.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="28" height="28" rx="4" stroke="white" strokeWidth="2.5" />
        <circle cx="17" cy="17" r="2.5" fill="white" />
        <circle cx="31" cy="17" r="2.5" fill="white" />
        <circle cx="17" cy="31" r="2.5" fill="white" />
        <circle cx="31" cy="31" r="2.5" fill="white" />
        <circle cx="24" cy="24" r="3" fill="white" />
        <path d="M17 17L24 24M31 17L24 24M17 31L24 24M31 31L24 24" stroke="white" strokeWidth="1.5" />
        <path d="M10 17H6M10 31H6M38 17H42M38 31H42M17 10V6M31 10V6M17 38V42M31 38V42" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Proven Strategy',
    body: 'Ad and conversion systems tested and refined across the industry.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 6L28.5 17H40L30.75 23.5L34.5 35L24 28L13.5 35L17.25 23.5L8 17H19.5L24 6Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <path d="M18 40H30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 35V40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Performance Tracking',
    body: 'Every dollar measured, every lead accounted for in real time.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 38L18 26L24 32L32 20L40 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="12" r="3" fill="white" />
        <path d="M8 8V38H42" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="26" r="2.5" fill="white" />
        <circle cx="24" cy="32" r="2.5" fill="white" />
        <circle cx="32" cy="20" r="2.5" fill="white" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="why-us"
      aria-label="Why operators choose Blue Trade AI"
      className="bg-[#1A4D8F] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-white">
            Why Operators Choose Blue Trade AI
          </h2>
          <p className="text-blue-100 text-lg mt-6 leading-relaxed">
            Business owners in the trades and home services industry need a partner who
            understands their market and delivers measurable results. Blue Trade AI brings
            together AI technology, proven advertising strategy, and performance tracking into
            one cohesive system — so owners can focus on running their business while we focus
            on growing it.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-5">{col.icon}</div>
              <h3 className="text-xl font-bold text-white">{col.title}</h3>
              <p className="text-blue-100 mt-3 leading-relaxed">{col.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
