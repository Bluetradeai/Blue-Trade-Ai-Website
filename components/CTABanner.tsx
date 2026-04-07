'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section
      aria-label="Call to action — schedule a free consultation"
      className="bg-[#1A4D8F] py-24 text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Let&apos;s Build a Growth System That Works for Your Business
          </h2>

          <p className="text-blue-100 text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            If you are ready to generate more consistent leads, improve your online presence,
            and put real systems behind your growth, Blue Trade AI is ready to get to work.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-white text-[#1A4D8F] font-extrabold text-xl px-10 py-5 rounded-lg hover:bg-[#F0F7FF] hover:scale-105 shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Schedule your free consultation with Blue Trade AI"
            >
              Schedule Your Free Consultation
            </a>
          </div>

          <p className="mt-4 text-blue-200 text-sm">
            No commitment required. A straightforward conversation about what growth looks like
            for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
