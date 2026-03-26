'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import StickyLabel from '@/components/ui/StickyLabel';

interface PricingTierProps {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  delay: number;
}

const PricingTier = ({
  name,
  subtitle,
  price,
  description,
  features,
  cta,
  featured = false,
  delay,
}: PricingTierProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
        featured
          ? 'bg-maroon border-2 border-gold scale-105 shadow-2xl'
          : 'bg-white border border-border hover:border-gold/50'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-maroon px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Recommended
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-2xl font-heading font-bold mb-2 ${featured ? 'text-cream' : 'text-maroon'}`}>
          {name}
        </h3>
        <p className={`text-sm font-semibold uppercase tracking-wider ${featured ? 'text-gold' : 'text-gold'}`}>
          {subtitle}
        </p>
      </div>

      <div className="mb-6">
        <p className={`text-4xl font-heading font-bold ${featured ? 'text-cream' : 'text-maroon'}`}>
          {price}
        </p>
      </div>

      <p className={`mb-8 leading-relaxed ${featured ? 'text-cream/90' : 'text-slate-ep'}`}>
        {description}
      </p>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + idx * 0.05 }}
            viewport={{ once: true, margin: '-100px' }}
            className={`flex items-start gap-3 ${featured ? 'text-cream' : 'text-slate-ep'}`}
          >
            <span className={`text-lg font-bold mt-1 ${featured ? 'text-gold' : 'text-gold'}`}>
              ✓
            </span>
            <p className="text-base">{feature}</p>
          </motion.li>
        ))}
      </ul>

      <Button
        href="#contact"
        variant={featured ? 'gold' : 'primary'}
        className="w-full text-center"
      >
        {cta}
      </Button>
    </motion.div>
  );
};

export default function Pricing() {
  const tiers: PricingTierProps[] = [
    {
      name: 'Highly Saleable',
      subtitle: 'Top Quadrant Businesses',
      price: '10% Success Fee',
      description:
        'For businesses scoring in the Highly Saleable quadrant of our Saleability Score™ framework.',
      features: [
        'Full deal management & execution',
        'Buyer identification & outreach',
        'Negotiation & term optimisation',
        'No upfront fee — pay on success',
      ],
      cta: 'Book a Discovery Call',
      featured: false,
      delay: 0,
    },
    {
      name: 'Strategic Fix',
      subtitle: 'Most Common',
      price: 'SGD 7,000',
      description:
        'For businesses in the Strategic Fix quadrant needing targeted improvement before going to market.',
      features: [
        'Saleability improvement roadmap',
        'Operational improvements (cost & process)',
        'AI & digital positioning strategy',
        'Pricing strategy & revenue optimisation',
      ],
      cta: 'Start Your Exit Journey',
      featured: true,
      delay: 0.1,
    },
    {
      name: 'Fee Adjustment',
      subtitle: 'Aligned Incentives',
      price: 'Offset on Exit',
      description:
        'Upon successful sale, the SGD 7,000 consultancy payments are offset against the final success fee.',
      features: [
        'Full success fee applies on exit',
        'Consultancy fee credited back',
        'We win when you win',
        'No double-billing, ever',
      ],
      cta: 'Learn More',
      featured: false,
      delay: 0.2,
    },
  ];

  return (
    <section id="pricing" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Pricing" index={5} />

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
            Pricing Model
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Value-Aligned Fees
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Pay more only when you win more. Our fees are structured so our incentives are always aligned with yours.
          </p>
        </motion.div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Aligned incentives — we win when you win. Let&apos;s discuss which pathway fits your current Saleability Score™ and timeline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
