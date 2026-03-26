'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

const values = [
  {
    numeral: 'I',
    title: 'Founder-First Thinking',
    description: 'We protect the interests, legacy, and future of business owners — not just the transaction.',
  },
  {
    numeral: 'II',
    title: 'Strategic Rigour',
    description: 'Every exit is driven by data, positioning, and long-term value creation, not guesswork.',
  },
  {
    numeral: 'III',
    title: 'Confidentiality',
    description: 'Embedded into every process, decision, and communication without compromise.',
  },
  {
    numeral: 'IV',
    title: 'Value Before Velocity',
    description: 'We prioritise maximising long-term value over rushing transactions.',
  },
  {
    numeral: 'V',
    title: 'Global Perspective',
    description: 'We think cross-border, cross-industry, and cross-cycle — connecting the right buyers globally.',
  },
];

export default function VisionValues() {
  return (
    <section id="about" className="w-full bg-cream py-24 px-8">
      <StickyLabel label="About ExitPath" index={8} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            About ExitPath
          </p>
          <h2
            className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Why We Exist
          </h2>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-maroon rounded-2xl p-10"
          >
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Vision</p>
            <p
              className="text-2xl text-cream leading-relaxed"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              To become the most trusted global exit advisory for founders navigating their most important transition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-2xl p-10"
          >
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Mission</p>
            <p
              className="text-2xl text-maroon leading-relaxed"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              To help founders exit with clarity, confidence, and maximum value by transforming businesses into investor-ready assets.
            </p>
          </motion.div>
        </div>

        {/* Growth Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3
            className="text-3xl font-heading font-bold text-maroon mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Building the World&apos;s Most Trusted Exit Advisory
          </h3>
          <p className="text-slate-ep max-w-2xl mx-auto mb-10">
            A clear path from a recognised Singapore firm to the definitive global brand for SME exits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Recognised market leader in strategic exits for SMEs',
              'Premium brand with selective, high-value mandates',
              'Platformised advisory framework scalable across markets',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-xl p-6 text-slate-ep text-sm leading-relaxed"
              >
                <span className="block text-gold font-bold text-lg mb-2">0{i + 1}</span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3
            className="text-3xl font-heading font-bold text-maroon"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Our Values
          </h3>
        </motion.div>

        <div className="space-y-4">
          {values.map((value, i) => (
            <motion.div
              key={value.numeral}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 bg-white border border-border rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <span
                className="text-2xl font-bold text-gold/60 w-10 shrink-0 pt-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {value.numeral}
              </span>
              <div>
                <h4 className="font-semibold text-maroon mb-1">{value.title}</h4>
                <p className="text-sm text-slate-ep leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
