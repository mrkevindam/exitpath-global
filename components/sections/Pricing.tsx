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
      name: 'Discovery',
      subtitle: 'For Curious Founders',
      price: 'Complimentary',
      description: 'Understand where you stand with a no-pressure assessment of your exit readiness.',
      features: [
        'Saleability Score™ evaluation',
        'Competitive positioning snapshot',
        'Value-unlock opportunities identified',
        'No commitment, zero fees',
      ],
      cta: 'Book Your Assessment',
      featured: false,
      delay: 0,
    },
    {
      name: 'Exit Acceleration',
      subtitle: 'For Serious Founders',
      price: 'Performance-Based',
      description:
        'Full end-to-end exit preparation and execution. Aligned incentives — we succeed when you succeed.',
      features: [
        'Complete Saleability Score™ diagnostic',
        'Customized value-unlock roadmap',
        'Full pre-sale optimization execution',
        'Buyer sourcing from 500+ network',
        'Deal negotiation & structuring',
        'Close support & transition',
      ],
      cta: 'Start Your Exit Journey',
      featured: true,
      delay: 0.1,
    },
    {
      name: 'Advisory',
      subtitle: 'For Hands-On Founders',
      price: 'Fee-Based',
      description: 'Retain us as your exclusive exit advisor while you maintain day-to-day control.',
      features: [
        'Dedicated senior advisor assigned',
        'Saleability Score™ framework & tooling',
        'Quarterly strategic reviews',
        'Access to buyer network as needed',
        'Deal evaluation & structuring support',
        'Ongoing operational coaching',
      ],
      cta: 'Explore Advisory',
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
            Transparent, Aligned Economics
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Three Models. One Goal: Your Maximum Value.
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Whether you want a quick assessment, full exit execution, or ongoing advisory support, we have a model
            that aligns our success with yours.
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
            All engagements include complete confidentiality, zero employee/client disruption, and a dedicated senior
            advisor. Let's discuss which model fits your timeline and situation best.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
