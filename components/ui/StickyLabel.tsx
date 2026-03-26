'use client';

import { motion } from 'framer-motion';

interface StickyLabelProps {
  label: string;
  index: number;
  dark?: boolean;
}

export default function StickyLabel({ label, index, dark = false }: StickyLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky w-screen -ml-[50vw] px-8 py-2 z-30 flex items-center backdrop-blur-lg ${
        dark
          ? 'bg-maroon/80 text-gold-light'
          : 'bg-cream/80 text-gold'
      }`}
      style={{
        top: `${index * 40}px`,
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <span className="text-xs font-heading font-semibold uppercase tracking-widest">
        {label}
      </span>
    </motion.div>
  );
}
