'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import StickyLabel from '@/components/ui/StickyLabel';

interface FlipCardProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  statDescription: string;
  delay: number;
}

const FlipCard = ({
  icon,
  title,
  description,
  stat,
  statLabel,
  statDescription,
  delay,
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      className="h-80 cursor-pointer perspective"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' as const }}
        className="relative w-full h-full"
      >
        {/* Front of Card */}
        <div
          style={{ backfaceVisibility: 'hidden' as const }}
          className="absolute w-full h-full bg-white border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center"
        >
          <p className="text-5xl mb-6">{icon}</p>
          <h3 className="text-2xl font-heading font-bold text-maroon mb-4">
            {title}
          </h3>
          <p className="text-base text-slate-ep">{description}</p>
        </div>

        {/* Back of Card */}
        <div
          style={{ backfaceVisibility: 'hidden' as const, transform: 'rotateY(180deg)' }}
          className="absolute w-full h-full bg-gold/10 border border-gold/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
        >
          <p className="text-5xl font-heading font-bold text-gold mb-4">
            {stat}
          </p>
          <p className="text-sm font-semibold uppercase tracking-wider text-maroon mb-6">
            {statLabel}
          </p>
          <p className="text-base text-slate-ep">{statDescription}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Differentiators() {
  const cards: FlipCardProps[] = [
    {
      icon: '🎯',
      title: 'Saleability Score™',
      description: 'Proprietary 30-point framework that quantifies exit readiness',
      stat: '30-pt',
      statLabel: 'Zero Competitors Offer This',
      statDescription: 'Benchmark your business against 300+ successful exits',
      delay: 0,
    },
    {
      icon: '📈',
      title: 'Pre-Sale Value Enhancement',
      description: 'Unlock hidden value through structured business optimization',
      stat: '+25%',
      statLabel: 'Average Value Increase',
      statDescription: 'Before founders even enter the market',
      delay: 0.1,
    },
    {
      icon: '🌍',
      title: 'Global Buyer Network',
      description: 'Access to institutional investors, PE firms, and strategic buyers',
      stat: '500+',
      statLabel: 'Active Buyer Relationships',
      statDescription: 'Across Asia-Pacific and beyond',
      delay: 0.2,
    },
    {
      icon: '🛡️',
      title: 'Full Confidentiality',
      description: 'NDA-protected process with zero employee/client leakage risk',
      stat: '100%',
      statLabel: 'Discretion Rate',
      statDescription: 'Exits completed with zero operational disruption',
      delay: 0.3,
    },
    {
      icon: '👥',
      title: 'Founder-First Model',
      description: 'Your goals drive every decision — not commissions',
      stat: '1:1',
      statLabel: 'Dedicated Advisory',
      statDescription: 'Senior advisor assigned exclusively to your exit',
      delay: 0.4,
    },
    {
      icon: '⚙️',
      title: 'End-to-End Execution',
      description: 'From prep through close, we own the entire process',
      stat: '6-12mo',
      statLabel: 'Typical Timeline',
      statDescription: 'Structured phases, clear milestones, no surprises',
      delay: 0.5,
    },
  ];

  return (
    <section id="differentiators" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Differentiators" index={2} />

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
            What Sets Us Apart
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Six Dimensions of Difference
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            We compete on dimensions no one else even measures. Hover cards to reveal what
            makes our approach genuinely irreplaceable.
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <FlipCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
