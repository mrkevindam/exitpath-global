'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="w-full bg-maroon py-28 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            Ready to Begin?
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Ready to Find Out What Your Business Is Really Worth?
          </h2>
          <p className="text-lg text-cream/80 mb-12 leading-relaxed max-w-xl mx-auto">
            Book a confidential discovery call. We&apos;ll run your Saleability Score™ and show you exactly
            where value is being left on the table.
          </p>
          <Button variant="gold" href="#contact" className="px-10 py-5 text-base">
            Book a Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
