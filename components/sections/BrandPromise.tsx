'use client';

import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

export default function BrandPromise() {
  const text = `We don't just sell your business — we make it `;
  const highlighted = 'worth more';
  const ending = ' before we do.';

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="promise" className="relative w-full bg-maroon py-32 px-8 overflow-hidden">
      <StickyLabel label="Brand Promise" index={0} dark />

      {/* Animated Background Circles */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="text-5xl md:text-7xl font-heading font-bold text-cream leading-tight"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {text.split('').map((char, idx) => (
            <motion.span key={idx} variants={child} className="inline">
              {char}
            </motion.span>
          ))}
          <span className="text-gold-light italic ml-2">
            {highlighted.split('').map((char, idx) => (
              <motion.span key={`h-${idx}`} variants={child} className="inline">
                {char}
              </motion.span>
            ))}
          </span>
          {ending.split('').map((char, idx) => (
            <motion.span key={`e-${idx}`} variants={child} className="inline">
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
