'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
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
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="industries"
      aria-label="Industries — built for trade and home services"
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
            Built for the Trades and Home Services Industry
          </h2>
          <p className="text-[#475569] text-lg mt-6 leading-relaxed">
            Blue Trade AI works exclusively with local service and trade businesses.
            We understand your market, your customers, and what it takes to compete and win online.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="flex flex-wrap gap-3 mt-10 justify-center"
          role="list"
          aria-label="Industries served"
        >
          {industries.map((industry, i) => (
            <motion.span
              key={i}
              role="listitem"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="border-2 border-[#1A4D8F] text-[#1A4D8F] rounded-full px-5 py-2 font-semibold hover:bg-[#1A4D8F] hover:text-white transition-all cursor-default select-none"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
