'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

export default function MarketPosition() {
  const leftItems = [
    'Mega deals ($100M+)',
    'Institutional investors only',
    'One-size-fits-all approach',
    'Broker discretion over founder choice',
    'Post-sale, reactive support',
    'Geographic limitations',
  ];

  const rightItems = [
    'SME sweet spot ($1M-$10M)',
    'Strategic buyers + PE + Family offices',
    'Founder-first, custom roadmap',
    'Founder control throughout process',
    'Pre-sale value enhancement',
    'Global reach, Singapore expertise',
  ];

  return (
    <section id="market" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Market Position" index={1} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Market Position
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            We Occupy the Gap Nobody Else Fills
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            The SME exit market is saturated with generalist brokers competing on buyer databases and deal speed.
            ExitPath operates in the underserved, high-value space. Main Street brokers focus on $50K–$5M deals.
            M&A advisors focus on $5M+. The $1M–$10M range with value-improvement positioning is white space that nobody owns.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-cream/50 border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-maroon mb-8 text-center">
              What Everyone Else Does
            </h3>
            <ul className="space-y-6">
              {leftItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-start gap-4"
                >
                  <span className="text-gold text-2xl mt-1">×</span>
                  <p className="text-base text-slate-ep">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-gold/10 border border-gold/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-maroon mb-8 text-center">
              What the Market Needs — ExitPath's Territory
            </h3>
            <ul className="space-y-6">
              {rightItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-start gap-4"
                >
                  <span className="text-gold text-2xl mt-1">✓</span>
                  <p className="text-base text-slate-ep">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
