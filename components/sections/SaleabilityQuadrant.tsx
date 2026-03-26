'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

interface QuadrantItemProps {
  title: string;
  description: string;
  icon: string;
  position: 'tl' | 'tr' | 'bl' | 'br';
  delay: number;
}

const QuadrantItem = ({
  title,
  description,
  icon,
  position,
  delay,
}: QuadrantItemProps) => {
  const positionClasses = {
    tl: 'col-span-1 row-span-1',
    tr: 'col-span-1 row-span-1',
    bl: 'col-span-1 row-span-1',
    br: 'col-span-1 row-span-1',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className={`${positionClasses[position]} bg-white border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center`}
    >
      <p className="text-5xl mb-4">{icon}</p>
      <h3 className="text-xl font-heading font-bold text-maroon mb-3">{title}</h3>
      <p className="text-base text-slate-ep">{description}</p>
    </motion.div>
  );
};

export default function SaleabilityQuadrant() {
  const quadrants: QuadrantItemProps[] = [
    {
      title: 'Revenue Optimization',
      description: 'Maximize topline while controlling cost structures for EBITDA expansion',
      icon: '💰',
      position: 'tl',
      delay: 0,
    },
    {
      title: 'Strategic Positioning',
      description: 'Differentiate from competitors and strengthen competitive moat',
      icon: '🎯',
      position: 'tr',
      delay: 0.1,
    },
    {
      title: 'Risk Mitigation',
      description: 'Address operational and legal exposures that spook buyers',
      icon: '🛡️',
      position: 'bl',
      delay: 0.2,
    },
    {
      title: 'Growth Narrative',
      description: 'Document repeatable, scalable processes and market expansion potential',
      icon: '📈',
      position: 'br',
      delay: 0.3,
    },
  ];

  return (
    <section id="saleability" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Saleability Quadrant" index={3} />

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
            Exit Readiness Framework
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            The Saleability Score™ Measures Four Dimensions
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Every dollar of value depends on how well your business performs across these critical
            areas. We audit each, then systematically unlock hidden potential.
          </p>
        </motion.div>

        {/* 2x2 Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quadrants.map((item) => (
            <QuadrantItem key={item.position} {...item} />
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            The result: a precise roadmap for value enhancement before entering the market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
