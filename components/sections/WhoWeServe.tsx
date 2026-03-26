'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

interface SegmentProps {
  icon: string;
  title: string;
  description: string;
  characteristics: string[];
  delay: number;
}

const Segment = ({
  icon,
  title,
  description,
  characteristics,
  delay,
}: SegmentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white border border-border rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300"
    >
      <p className="text-5xl mb-6">{icon}</p>
      <h3 className="text-2xl font-heading font-bold text-maroon mb-4">
        {title}
      </h3>
      <p className="text-base text-slate-ep mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3">
        {characteristics.map((char, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + idx * 0.05 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-start gap-3"
          >
            <span className="text-gold text-lg font-bold mt-0.5">✓</span>
            <p className="text-sm text-slate-ep">{char}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function WhoWeServe() {
  const segments: SegmentProps[] = [
    {
      icon: '👔',
      title: 'Founder-Owners',
      description:
        'Age 40–70 | EBITDA SGD 500K–10M. Baby boomers and Gen X founders in professional services, agencies, retail, consulting, and SMEs with a 1–3 year exit horizon.',
      characteristics: [
        'Higher exit valuation',
        'Reduced personal risk',
        'Legacy preservation',
        'Clear succession planning',
      ],
      delay: 0,
    },
    {
      icon: '🚀',
      title: 'Growth-Stage Founders',
      description:
        'Age 30–50 | Digital & Scalable. Digital, e-commerce, or scalable service businesses considering partial exits or strategic partnerships.',
      characteristics: [
        'Digital or scalable business model',
        'Partial exit or strategic partnership',
        'Growth capital via sale',
        'Retain operational involvement',
      ],
      delay: 0.1,
    },
    {
      icon: '🏦',
      title: 'Strategic Buyers & Family Offices',
      description:
        'Acquisition-Ready. Looking for well-prepared, low-risk acquisitions with professionalised operations.',
      characteristics: [
        'Vetted, deal-ready businesses',
        'Professionalised operations',
        'Low integration risk',
        'Strong management teams',
      ],
      delay: 0.2,
    },
  ];

  return (
    <section id="who-we-serve" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Who We Serve" index={6} />

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
            Who We Serve
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Built for Founders at Every Stage of Exit
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            From Baby Boomer business owners approaching retirement to growth-stage founders considering strategic partnerships.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <Segment key={segment.title} {...segment} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-ep max-w-3xl mx-auto mb-8">
            Not sure if you fit? Book your Saleability Score™ assessment. No commitment, no pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
