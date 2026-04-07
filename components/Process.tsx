'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Discovery',
    body: 'We learn your business, your market, and your growth objectives.',
  },
  {
    number: '2',
    title: 'System Design',
    body: 'We build the right combination of website, ads, tracking, and automation for your operation.',
  },
  {
    number: '3',
    title: 'Launch',
    body: 'We deploy your growth system and begin generating results.',
  },
  {
    number: '4',
    title: 'Ongoing Optimization',
    body: 'We monitor performance and continuously improve based on real data.',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      aria-label="Process — how Blue Trade AI works"
      className="bg-white py-20"
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
            A Straightforward Process Built Around Your Business
          </h2>
        </motion.div>

        {/* Desktop: horizontal layout */}
        <div ref={ref} className="hidden md:block relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-[#E2E8F0] -z-10" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-[#1A4D8F] text-white rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0 z-10 shadow-md">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-[#475569] mt-2 leading-relaxed text-sm">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#E2E8F0] -z-10" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[#1A4D8F] text-white rounded-full flex items-center justify-center font-extrabold text-lg z-10 shadow-md">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#0F172A]">{step.title}</h3>
                  <p className="text-[#475569] mt-1 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
