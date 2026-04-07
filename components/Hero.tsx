'use client';

import { motion } from 'framer-motion';

const floatingCircles = [
  { size: 300, top: '10%', left: '5%', delay: 0 },
  { size: 200, top: '60%', left: '80%', delay: 0.5 },
  { size: 150, top: '20%', left: '70%', delay: 1.0 },
  { size: 80, top: '75%', left: '15%', delay: 1.5 },
  { size: 120, top: '40%', left: '90%', delay: 0.8 },
  { size: 250, top: '80%', left: '50%', delay: 0.3 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — AI-powered growth partner for trade and home service businesses"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16"
    >
      {/* Floating Background Circles */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#1A4D8F] pointer-events-none"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            opacity: 0.06,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: circle.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="font-extrabold text-5xl md:text-6xl text-[#0F172A] leading-tight tracking-tight">
            The Growth Partner Built for the Trades and Home Services Industry
          </h1>

          <p className="text-xl text-[#475569] mt-6 max-w-2xl mx-auto leading-relaxed">
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
              className="border-2 border-[#1A4D8F] text-[#1A4D8F] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A4D8F] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4D8F]"
              aria-label="See what Blue Trade AI does"
            >
              See What We Do
            </a>
          </div>

          <p className="mt-6 text-sm text-[#475569]">
            Serving home service and trade businesses across the country.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
