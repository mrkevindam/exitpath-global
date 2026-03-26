'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  timeline: string;
  icon: string;
  delay: number;
}

const ProcessStep = ({
  step,
  title,
  description,
  timeline,
  icon,
  delay,
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative flex flex-col items-center"
    >
      {/* Connector line (except for last step) */}
      {step < 5 && (
        <div className="hidden md:block absolute top-24 left-1/2 w-0.5 h-24 bg-gradient-to-b from-gold/50 to-gold/10 transform translate-y-full" />
      )}

      {/* Step Card */}
      <div className="relative z-10 w-full bg-white border border-border rounded-2xl p-5 text-center hover:border-gold/50 transition-colors duration-300">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-maroon border-4 border-gold rounded-full flex items-center justify-center">
          <span className="text-cream font-bold text-lg">{step}</span>
        </div>

        <p className="text-4xl mb-6 mt-2">{icon}</p>

        <h3 className="text-2xl font-heading font-bold text-maroon mb-4">
          {title}
        </h3>

        <p className="text-base text-slate-ep mb-6 leading-relaxed">
          {description}
        </p>

        <p className="text-sm font-semibold text-gold uppercase tracking-wider">
          {timeline}
        </p>
      </div>
    </motion.div>
  );
};

export default function Process() {
  const steps: ProcessStepProps[] = [
    {
      step: 1,
      title: 'Intake & Assessment',
      description:
        'We learn your business inside and out. Financial audit, competitive analysis, buyer attractiveness evaluation, and risk identification.',
      timeline: 'Weeks 1-2',
      icon: '📋',
      delay: 0,
    },
    {
      step: 2,
      title: 'Saleability Roadmap',
      description:
        'Custom strategy to unlock hidden value. Financial optimization, operational efficiency, risk mitigation, and growth narrative development.',
      timeline: 'Weeks 3-4',
      icon: '🗺️',
      delay: 0.1,
    },
    {
      step: 3,
      title: 'Preparation & Execution',
      description:
        'We implement the roadmap while you run your business. Financial hardening, governance upgrades, and seller documentation package creation.',
      timeline: 'Months 2-4',
      icon: '⚙️',
      delay: 0.2,
    },
    {
      step: 4,
      title: 'Buyer Sourcing & Process',
      description:
        'Strategic buyer identification from our 500+ network. Controlled exposure, NDA negotiation, and management of competitive tension.',
      timeline: 'Months 4-6',
      icon: '🎯',
      delay: 0.3,
    },
    {
      step: 5,
      title: 'Negotiation & Close',
      description:
        'Deal structuring, LOI negotiation, and final terms optimization. We protect your interests through diligence, drafting, and closing support.',
      timeline: 'Months 6-12',
      icon: '🏁',
      delay: 0.4,
    },
  ];

  return (
    <section id="process" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Process" index={8} />

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
            Your Exit Timeline
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Five Phases to Successful Close
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            A predictable, phased approach from initial assessment through successful exit. Typically 8-12 months,
            faster when you're already exit-ready.
          </p>
        </motion.div>

        {/* Process Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3">
          {steps.map((step) => (
            <ProcessStep key={step.step} {...step} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-20"
        >
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            Every business is unique. This timeline flexes based on your current readiness and market conditions. Let's
            discuss your specific situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
