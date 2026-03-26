'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

interface ProofCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const ProofCard = ({ icon, title, description, delay }: ProofCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-gold/5 border border-gold/20 rounded-2xl p-10 text-center"
    >
      <p className="text-5xl mb-6">{icon}</p>
      <h3 className="text-2xl font-heading font-bold text-gold mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-base text-cream/80 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Proof() {
  const cards: ProofCardProps[] = [
    {
      icon: '📊',
      title: 'Tangible',
      description:
        'Measurable improvements to revenue, cost, and operations before going to market. We target 10-20% revenue growth pre-sale, which translates to a multiplied boost in sale price given typical EBITDA valuation multiples.',
      delay: 0,
    },
    {
      icon: '🎯',
      title: 'Measurable',
      description:
        'The Saleability Score™ quantifies exactly where value is being created or lost across 30 data points and 6 strategic dimensions.',
      delay: 0.15,
    },
    {
      icon: '🛡️',
      title: 'Defensible',
      description:
        'Every recommendation is grounded in data, not opinion or generic advice. Zero brokers in Singapore offer this level of diagnostic depth before listing.',
      delay: 0.3,
    },
  ];

  return (
    <section id="proof" className="w-full bg-maroon py-24 px-8">
      <StickyLabel label="Why ExitPath" index={7} dark />

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
            Why Clients Choose ExitPath
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-cream mb-6">
            Our promise is tangible, measurable, and defensible.
          </h2>
        </motion.div>

        {/* Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <ProofCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
