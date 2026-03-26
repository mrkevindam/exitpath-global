'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Our Approach', href: '#approach' },
  { label: 'Saleability Quadrant', href: '#quadrant' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Who We Serve', href: '#audience' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(80,21,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 no-underline">
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#D4AF37',
              letterSpacing: '-0.01em',
            }}
          >
            Exit
          </span>
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            Path
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.5)',
              marginLeft: '0.25rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Global
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#501508',
              background: '#D4AF37',
              padding: '0.5rem 1.25rem',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#BC9C22')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#D4AF37')}
          >
            Start a Conversation
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: '#FFFFFF',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: '#FFFFFF',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: '#FFFFFF',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(58,14,5,0.98)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <nav className="flex flex-col px-8 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#501508',
                  background: '#D4AF37',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block',
                }}
              >
                Start a Conversation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
