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
      icon: '🚀',
      title: 'Bootstrapped Founders',
      description:
        'Built something from nothing. Bootstrapped your way to $1M-$10M EBITDA. Now you want off the hamster wheel with maximum value realized.',
      characteristics: [
        'Sole or co-founder structure',
        'Organic growth trajectory',
        'Minimal external funding',
        'Ready for strategic next chapter',
      ],
      delay: 0,
    },
    {
      icon: '📊',
      title: 'PE-Backed Founders',
      description:
        'Took institutional capital, scaled fast, hit your targets. Now looking for a natural exit while relationships remain strong and timing is perfect.',
      characteristics: [
        'Portfolio company executives',
        'Clear exit windows approaching',
        'Institutional alignment needed',
        'Secondary transaction ready',
      ],
      delay: 0.1,
    },
    {
      icon: '👨‍💼',
      title: 'Professional Operators',
      description:
        `Built a business you're proud of. Not an overnight success, but a stable, profitable, scalable operation. Looking for the right buyer and the right price.`,
      characteristics: [
        'Strong management teams',
        'Documented processes',
        'Consistent profitability',
        'Strategic buyer appeal',
      ],
      delay: 0.2,
    },
    {
      icon: '🌏',
      title: 'Asia-Pacific Businesses',
      description:
        'Operating across Singapore, Malaysia, Thailand, Indonesia, or beyond. Seeking buyers who understand the region and can take you regional or global.',
      characteristics: [
        'Multi-country operations',
        'Regional market expertise',
        'Cross-border buyer networks',
        'Growth beyond home market',
      ],
      delay: 0.3,
    },
    {
      icon: '⚙️',
      title: 'B2B Services & Software',
      description:
        `Whether consulting, managed services, SaaS, or software development—you've built recurring revenue and proven unit economics. The market wants what you have.`,
      characteristics: [
        'Recurring revenue models',
        'Scalable infrastructure',
        'Institutional buyer interest',
        'Clear revenue mechanics',
      ],
      delay: 0.4,
    },
    {
      icon: '🏪',
      title: 'E-Commerce & Retail',
      description:
        'Built a brand, customer base, and supply chain that buyers covet. Strategic acquirers are actively hunting companies like yours in your category.',
      characteristics: [
        'Established customer acquisition',
        'Branded product/service',
        'Scalable fulfillment',
        'Multiple buyer personas',
      ],
      delay: 0.5,
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
            Our Ideal Founders
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            We Work With Founders Who've Built Real Businesses
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Whether you bootstrapped, took funding, scaled across borders, or built something niche—if
            your business is profitable, scalable, and attractive to buyers, we can help you win an exit.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
