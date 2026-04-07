'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#')}
          className="text-xl font-extrabold text-[#1A4D8F] tracking-tight focus:outline-none focus:ring-2 focus:ring-[#1A4D8F] rounded"
          aria-label="Blue Trade AI — go to homepage"
        >
          Blue Trade AI
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-[#475569] font-semibold hover:text-[#1A4D8F] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4D8F] rounded"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button — Desktop */}
        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden md:block bg-[#1A4D8F] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-[#2563EB] hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4D8F]"
          aria-label="Get a free strategy session"
        >
          Get a Free Strategy Session
        </button>

        {/* Hamburger — Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#1A4D8F] rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          <motion.span
            className="block w-6 h-0.5 bg-[#1A4D8F] rounded"
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[#1A4D8F] rounded"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[#1A4D8F] rounded"
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-[#475569] font-semibold hover:text-[#1A4D8F] hover:bg-[#F8FAFC] rounded-lg transition-colors text-base"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full mt-2 bg-[#1A4D8F] text-white px-4 py-3 rounded-lg font-bold text-base shadow-md hover:bg-[#2563EB] transition-all"
                  aria-label="Get a free strategy session"
                >
                  Get a Free Strategy Session
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
