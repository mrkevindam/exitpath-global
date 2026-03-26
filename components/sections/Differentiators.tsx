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
      description: 'Proprietary 30-point diagnostic across 6 strategic dimensions — no other broker in Singapore offers this.',
      stat: '30-pt',
      statLabel: 'Zero Competitors Offer This',
      statDescription: 'No broker in Singapore provides a data-backed, multi-dimensional diagnostic before listing.',
      delay: 0,
    },
    {
      icon: '📈',
      title: '10-20% Revenue Growth',
      description: 'We optimise revenue, costs, and processes before going to market — translating to multiplied gains on your sale price.',
      stat: '10-20%',
      statLabel: 'Revenue Growth Pre-Sale',
      statDescription: 'A 15% revenue increase on a business valued at 4x EBITDA translates to hundreds of thousands in additional enterprise value.',
      delay: 0.1,
    },
    {
      icon: '🤖',
      title: 'AI & Digital Positioning',
      description: 'Modernise your digital footprint and integrate AI-driven improvements to appeal to sophisticated buyers.',
      stat: '0',
      statLabel: 'Brokers Offer This',
      statDescription: 'Traditional brokers focus on listings and databases. Zero brokers in Singapore modernise your digital footprint pre-sale.',
      delay: 0.2,
    },
    {
      icon: '🛡️',
      title: 'Confidentiality Without Compromise',
      description: 'Embedded into every process, decision, and communication. 59% of brokers use a flat-fee model with no discretion layer.',
      stat: '59%',
      statLabel: 'Use Flat-Fee, No Discretion',
      statDescription: 'Most brokers charge a commodity 10% with no confidentiality protocol built in.',
      delay: 0.3,
    },
    {
      icon: '👥',
      title: 'Founder-First Thinking',
      description: 'We protect the interests, legacy, and future of business owners — not just the transaction.',
      stat: '1-3yr',
      statLabel: 'Typical Exit Horizon',
      statDescription: 'We work with founders who are planning ahead, not rushing. Better preparation means better outcomes.',
      delay: 0.4,
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Cross-border, cross-industry, and cross-cycle — connecting you with the right buyers worldwide.',
      stat: '80%',
      statLabel: 'Of Buyers Are International',
      statDescription: 'Market data shows the majority of acquirers in Singapore are cross-border. Global reach is not optional — it is essential.',
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
            Why ExitPath
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Built on value creation, not just deal execution.
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Every engagement starts with making your business more valuable, more transferable,
            and more attractive to the right buyers. Hover to reveal the market data behind each dimension.
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
