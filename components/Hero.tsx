'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — AI-powered growth partner for trade and home service businesses"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <Image
        src="/hero-banner.jpg"
        alt="Blue Trade AI hero banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="font-extrabold text-5xl md:text-6xl text-white leading-tight tracking-tight drop-shadow-lg">
            The Growth Partner Built for the Trades and Home Services Industry
          </h1>

          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto leading-relaxed">
            Blue Trade AI helps contractors, service companies, and local operators build a
            stronger online presence, generate consistent leads, and put measurable systems
            behind their growth.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-[#1A4D8F] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:bg-[#2563EB] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4D8F]"
              aria-label="Schedule a free strategy session"
            >
              Schedule a Free Strategy Session
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1A4D8F] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="See what Blue Trade AI does"
            >
              See What We Do
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Serving home service and trade businesses across the country.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
