'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import StickyLabel from '@/components/ui/StickyLabel';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '6px',
    fontFamily: 'var(--font-jost)',
    fontSize: '0.9rem',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ background: '#501508', position: 'relative', overflow: 'hidden' }}>
      <StickyLabel label="Contact" index={9} dark />

      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(212,175,55,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(0,0,0,0.1)', pointerEvents: 'none' }} />

      <div className="section-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '3rem' }}
        >
          <span style={{ display: 'block', fontFamily: 'var(--font-jost)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#D4AF37', marginBottom: '0.75rem' }}>
            Let&apos;s Talk
          </span>
          <h2 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            Let&apos;s talk through what you need
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto', fontSize: '1rem' }}>
            Whether you&apos;re preparing for sale, exploring your options, or simply want a confidential conversation — we&apos;re here.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: '480px',
              margin: '0 auto',
              background: 'rgba(212,175,55,0.15)',
              border: '1px solid rgba(212,175,55,0.4)',
              borderRadius: '12px',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ color: '#D4AF37', marginBottom: '0.75rem' }}>Message received</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              Thank you for reaching out. We&apos;ll be in touch within one business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-jost)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-jost)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-jost)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Company / Business
              </label>
              <input
                name="company"
                type="text"
                placeholder="Your company name"
                value={form.company}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-jost)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                How Can We Help?
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your business and what you're looking to achieve..."
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '0.875rem 2rem',
                background: '#D4AF37',
                color: '#501508',
                fontFamily: 'var(--font-jost)',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.1s',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#BC9C22';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start a Conversation →
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
