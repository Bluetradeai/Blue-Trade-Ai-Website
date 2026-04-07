'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    stat: '87%',
    label: 'Of Local Businesses Rely Solely on Referrals',
  },
  {
    stat: '3x',
    label: 'More Leads with an Optimized Online Presence',
  },
  {
    stat: '60%',
    label: 'Of Local Searches Result in a Call Within One Hour',
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="problem"
      aria-label="The problem — most local businesses are leaving revenue on the table"
      className="bg-[#F8FAFC] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-[#0F172A]">
            Most Local Businesses Are Leaving Revenue on the Table
          </h2>
          <p className="text-[#475569] text-lg mt-6 leading-relaxed">
            The majority of trade and home service businesses have no reliable system for
            generating leads online. They are running on referrals alone, spending money on
            marketing they cannot measure, and losing potential customers to competitors who
            simply show up better online. Blue Trade AI was built to solve exactly that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm"
            >
              <div className="text-5xl font-extrabold text-[#1A4D8F]">{item.stat}</div>
              <p className="text-[#475569] mt-2 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
