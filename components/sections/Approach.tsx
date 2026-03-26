'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

interface ApproachBlockProps {
  step: number;
  title: string;
  description: string;
  points: string[];
  icon: string;
  isReverse?: boolean;
}

const ApproachBlock = ({
  step,
  title,
  description,
  points,
  icon,
  isReverse = false,
}: ApproachBlockProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 ${
        isReverse ? 'md:direction-rtl' : ''
      }`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className={isReverse ? 'md:order-2' : 'md:order-1'}
      >
        <div className="mb-6">
          <span className="inline-block bg-gold/10 border border-gold/30 rounded-full px-4 py-2 text-sm font-semibold text-gold mb-4">
            Step {step}
          </span>
          <h3 className="text-4xl font-heading font-bold text-maroon mb-4">
            {title}
          </h3>
        </div>

        <p className="text-lg text-slate-ep mb-8 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-4">
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex items-start gap-3"
            >
              <span className="text-gold text-2xl mt-1">✓</span>
              <p className="text-base text-slate-ep">{point}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className={`flex items-center justify-center ${isReverse ? 'md:order-1' : 'md:order-2'}`}
      >
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-2xl" />
          <div className="relative bg-cream border border-border rounded-3xl p-12 flex items-center justify-center h-80">
            <p className="text-8xl">{icon}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Approach() {
  const blocks: ApproachBlockProps[] = [
    {
      step: 1,
      title: 'Saleability Score™ Diagnostic',
      description:
        'Proprietary 30-point scoring model across 6 strategic dimensions to assess sale readiness and identify value gaps. The score tells you whether you are ready to go to market, or whether targeted improvements will unlock meaningfully higher valuations.',
      points: [
        'Financial Clarity',
        'Revenue Quality',
        'Operational Maturity',
        'Digital Readiness',
        'Management Depth',
        'Market Position',
      ],
      icon: '🔍',
      isReverse: false,
    },
    {
      step: 2,
      title: 'Revenue & Digital Excellence',
      description:
        'Drive 10-20% revenue growth and eliminate operational inefficiencies before going to market. Modernise your digital footprint with AI-driven improvements to appeal to sophisticated buyers. The market already accepts performance-aligned fee structures for deals in the $1M-$100M range.',
      points: [
        'Revenue optimisation strategy',
        'Cost and process efficiency',
        'AI & digital positioning',
        'Pricing strategy improvement',
      ],
      icon: '📈',
      isReverse: true,
    },
    {
      step: 3,
      title: 'Strategic Execution & Expertise',
      description:
        'Precision targeting of strategic acquirers, family offices, and growth investors with full confidentiality management. Specialist in agencies, consulting firms, and digital SMEs where operational maturity is the key value multiplier.',
      points: [
        'Buyer sourcing from 500+ network',
        'Controlled exposure & NDA management',
        'Negotiation and deal structuring',
        'Close support and transition',
      ],
      icon: '🚀',
      isReverse: false,
    },
  ];

  return (
    <section id="approach" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Approach" index={4} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Our Approach
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Saleability-First. Value-Driven.
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            ExitPath is an advisory built on value creation, not just deal execution.
          </p>
        </motion.div>

        {/* Approach Blocks */}
        <div className="space-y-12">
          {blocks.map((block, idx) => (
            <ApproachBlock key={idx} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
