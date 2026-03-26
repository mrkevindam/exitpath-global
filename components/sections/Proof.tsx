'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

interface ProofStatProps {
  stat: string;
  label: string;
  description: string;
  delay: number;
}

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  result: string;
  delay: number;
}

const ProofStat = ({ stat, label, description, delay }: ProofStatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-gold/5 border border-gold/20 rounded-2xl p-8 text-center"
    >
      <p className="text-5xl font-heading font-bold text-gold mb-2">{stat}</p>
      <p className="text-sm font-semibold uppercase tracking-wider text-maroon mb-4">
        {label}
      </p>
      <p className="text-base text-slate-ep">{description}</p>
    </motion.div>
  );
};

const Testimonial = ({
  quote,
  author,
  title,
  company,
  result,
  delay,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white border border-border rounded-2xl p-8 flex flex-col h-full hover:border-gold/50 transition-colors duration-300"
    >
      <div className="flex items-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gold text-lg">
            ★
          </span>
        ))}
      </div>
      <blockquote className="text-base text-slate-ep mb-6 leading-relaxed flex-grow italic">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-6">
        <p className="font-semibold text-maroon">{author}</p>
        <p className="text-sm text-slate-ep">{title}</p>
        <p className="text-sm font-semibold text-gold mb-3">{company}</p>
        <p className="text-xs bg-gold/10 border border-gold/20 rounded-full px-3 py-2 text-maroon font-semibold inline-block">
          {result}
        </p>
      </div>
    </motion.div>
  );
};

export default function Proof() {
  const stats: ProofStatProps[] = [
    {
      stat: '150+',
      label: 'Successful Exits',
      description: 'Completed transactions across Asia-Pacific and beyond',
      delay: 0,
    },
    {
      stat: '$2.5B+',
      label: 'Total Transaction Value',
      description: 'Aggregate value realized for our founder clients',
      delay: 0.1,
    },
    {
      stat: '8-12mo',
      label: 'Average Time to Close',
      description: 'Predictable timeline from engagement to successful exit',
      delay: 0.2,
    },
    {
      stat: '25%',
      label: 'Average Value Increase',
      description: 'Pre-sale optimization unlocks hidden business potential',
      delay: 0.3,
    },
  ];

  const testimonials: TestimonialProps[] = [
    {
      quote:
        'ExitPath Global took a chaotic process and turned it into a structured, predictable exit. Their Saleability Score™ framework showed us exactly where we stood and what to fix. We increased our valuation by 32% in six months.',
      author: 'Rajesh Kumar',
      title: 'Founder & CEO',
      company: 'TechFlow Solutions',
      result: '+32% Valuation Increase',
      delay: 0,
    },
    {
      quote:
        "We bootstrapped for 12 years and had no idea how to navigate a sale. ExitPath didn't just find us a buyer—they prepared us, protected us, and negotiated on our behalf. The result exceeded our expectations.",
      author: 'Mei Chen',
      title: 'Co-Founder',
      company: 'Asia Trade Innovations',
      result: '5.2x EBITDA Multiple',
      delay: 0.1,
    },
    {
      quote:
        'Our PE firm was looking for the perfect exit window. ExitPath identified it, executed with precision, and handled all the complexity. Zero disruption to operations during the process.',
      author: 'Marcus Thompson',
      title: 'Managing Partner',
      company: 'Southeast Asia Ventures',
      result: '12 Month Execution',
      delay: 0.2,
    },
    {
      quote:
        'The confidentiality was flawless. Not a single employee suspected we were in exit talks until we closed. That protected our team and our business during the entire process.',
      author: 'Priya Desai',
      title: 'Founder',
      company: 'Digital Commerce Group',
      result: '100% Confidentiality',
      delay: 0.3,
    },
  ];

  return (
    <section id="proof" className="w-full bg-white py-24 px-8">
      <StickyLabel label="Proof & Results" index={7} />

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
            Proven Track Record
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-maroon mb-6">
            Our Results Speak for Themselves
          </h2>
          <p className="text-lg text-slate-ep max-w-3xl mx-auto">
            150+ successful exits. $2.5B+ in aggregate transaction value. Founders who trusted us to
            get it right.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <ProofStat key={stat.label} {...stat} />
          ))}
        </div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
            Founder Stories
          </p>
          <h3 className="text-3xl font-heading font-bold text-maroon">
            What Founders Say About Their Exit Journey
          </h3>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.author} {...testimonial} />
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
            Ready to join our community of successful founders? Start your exit journey with a
            confidential Saleability Score™ assessment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
