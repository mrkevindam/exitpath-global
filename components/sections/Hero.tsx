'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const FloatingIcon = ({ delay, icon }: { delay: number; icon: string }) => {
  const iconMap: Record<string, string> = {
    chart: '📊',
    target: '🎯',
    globe: '🌍',
    shield: '🛡️',
    users: '👥',
    trending: '📈',
    briefcase: '💼',
    layers: '📑',
  };

  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity }}
      className="absolute text-4xl opacity-60 text-maroon"
      style={{
        top: `${Math.random() * 60 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      }}
    >
      {iconMap[icon]}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-maroon text-cream overflow-hidden flex items-center justify-center">
      {/* Floating Icons */}
      <FloatingIcon delay={0} icon="chart" />
      <FloatingIcon delay={0.5} icon="target" />
      <FloatingIcon delay={1} icon="globe" />
      <FloatingIcon delay={1.5} icon="shield" />
      <FloatingIcon delay={2} icon="users" />
      <FloatingIcon delay={2.5} icon="trending" />
      <FloatingIcon delay={3} icon="briefcase" />
      <FloatingIcon delay={3.5} icon="layers" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-xs font-semibold uppercase tracking-widest mb-6"
        >
          Strategic Exit Advisory
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-heading font-bold mb-8 leading-tight"
        >
          <span className="text-gold-light">Exit</span>
          <span>Path Global helps founders unlock the full value of their business.</span>
        </motion.h1>

        {/* Lead Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-body max-w-3xl mx-auto mb-12 text-cream-dark leading-relaxed"
        >
          Clear preparation. Sharp positioning. Precise deal execution — delivered with global reach
          and total confidentiality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button variant="primary" href="#contact" className="px-8 py-4 text-base">
            Start a Conversation
          </Button>
          <Button variant="ghost" href="#approach" className="px-8 py-4 text-base">
            Our Approach
          </Button>
        </motion.div>
      </div>

      {/* Stats Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-maroon-dark/50 backdrop-blur-sm border-t border-gold/20">
        <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gold-light text-3xl font-heading font-bold">SGD 10M</p>
            <p className="text-gold text-sm uppercase tracking-wider mt-2">Max EBITDA Target</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-gold-light text-3xl font-heading font-bold">30-pt</p>
            <p className="text-gold text-sm uppercase tracking-wider mt-2">Saleability Score™</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gold-light text-3xl font-heading font-bold">6</p>
            <p className="text-gold text-sm uppercase tracking-wider mt-2">Strategic Dimensions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
