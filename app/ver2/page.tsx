'use client';

import { useState, useEffect } from 'react';

// ─── Design Tokens ─────────────────────────────────────────────────────────
const CR = '#F5F0E4';       // warm cream — matches PDF background
const MA = '#501508';       // maroon
const GO = '#BC9C22';       // gold
const GL = '#D4AF37';       // gold light
const TX = '#3D2B1A';       // body text (warm dark brown)
const TM = '#6B5040';       // secondary text
const BD = '#DDD6C8';       // border

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'Jost', system-ui, sans-serif";

// ─── Unsplash Photos ────────────────────────────────────────────────────────
const PH = {
  hero:    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  market:  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  serve:   'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
  values:  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
  contact: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
};

// ─── Shared Styles ──────────────────────────────────────────────────────────
const eyebrow = {
  fontFamily: sans, fontSize: '0.68rem', fontWeight: 600 as const,
  color: GO, letterSpacing: '0.15em', textTransform: 'uppercase' as const,
  marginBottom: '1rem', display: 'block',
};
const sectionWrap = {
  background: CR, padding: '88px 2rem', borderTop: `1px solid ${BD}`,
};
const inner = { maxWidth: 1100, margin: '0 auto' };
const splitGrid = {
  display: 'grid', gridTemplateColumns: '1fr 1fr',
  gap: '5rem', alignItems: 'center' as const,
};

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { label: 'Our Approach', href: '#v2-approach' },
    { label: 'Pricing',      href: '#v2-pricing'  },
    { label: 'Who We Serve', href: '#v2-serve'    },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? `rgba(245,240,228,0.97)` : 'transparent',
      borderBottom: scrolled ? `1px solid ${BD}` : 'none',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="/ver2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: GL }}>Exit</span>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 600, color: MA }}>Path</span>
          <span style={{ fontFamily: sans, fontSize: '0.63rem', fontWeight: 500, color: TM, marginLeft: '0.3rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: sans, fontSize: '0.8rem', fontWeight: 500, color: scrolled ? TM : MA, textDecoration: 'none', letterSpacing: '0.03em' }}>
              {l.label}
            </a>
          ))}
          <a href="#v2-contact" style={{ fontFamily: sans, fontSize: '0.8rem', fontWeight: 600, color: CR, background: MA, padding: '0.5rem 1.25rem', borderRadius: 4, textDecoration: 'none' }}>
            Start a Conversation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }} className="show-mobile" aria-label="Menu">
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: MA }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: CR, borderTop: `1px solid ${BD}`, padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: sans, fontSize: '1rem', color: MA, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="#v2-contact" onClick={() => setOpen(false)} style={{ fontFamily: sans, fontSize: '0.9rem', fontWeight: 600, color: CR, background: MA, padding: '0.75rem 1.5rem', borderRadius: 4, textDecoration: 'none', textAlign: 'center' }}>
            Start a Conversation
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ background: CR, paddingTop: 104, paddingBottom: 80, paddingLeft: '2rem', paddingRight: '2rem' }}>
      <div style={{ ...inner, ...splitGrid }}>
        {/* Left: text */}
        <div>
          <span style={eyebrow}>Strategic Exit Advisory · Singapore</span>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: 700, color: MA, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            We make your business worth more —{' '}
            <em style={{ fontStyle: 'italic', color: GL }}>before we sell it.</em>
          </h1>
          <p style={{ fontFamily: sans, fontSize: '1.05rem', color: TM, lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 460 }}>
            Clear preparation. Sharp positioning. Precise deal execution — delivered with global reach and total confidentiality.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#v2-contact" style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: CR, background: MA, padding: '0.875rem 2rem', borderRadius: 4, textDecoration: 'none' }}>
              Start a Conversation
            </a>
            <a href="#v2-approach" style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 500, color: MA, padding: '0.875rem 2rem', border: `1px solid ${BD}`, borderRadius: 4, textDecoration: 'none' }}>
              Our Approach →
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div style={{ position: 'relative' }}>
          <img src={PH.hero} alt="Strategic business advisory" loading="lazy"
            style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 8, display: 'block' }} />
          {/* floating stat card */}
          <div style={{ position: 'absolute', bottom: 28, left: -28, background: CR, borderRadius: 8, padding: '1rem 1.5rem', boxShadow: `0 4px 24px rgba(80,21,8,0.14)`, border: `1px solid ${BD}` }}>
            <p style={{ fontFamily: serif, fontSize: '1.75rem', fontWeight: 700, color: MA, margin: 0, lineHeight: 1 }}>30-pt</p>
            <p style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 600, color: TM, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>Saleability Score™</p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ ...inner, borderTop: `1px solid ${BD}`, marginTop: '4rem', paddingTop: '2.5rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        {[
          { stat: 'SGD 500K–10M', label: 'EBITDA Range We Serve' },
          { stat: '6',            label: 'Strategic Dimensions Scored' },
          { stat: '1–3 yr',       label: 'Typical Exit Horizon' },
        ].map(item => (
          <div key={item.stat}>
            <p style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: MA, margin: 0, lineHeight: 1 }}>{item.stat}</p>
            <p style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 600, color: TM, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 5 }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Brand Promise ───────────────────────────────────────────────────────────
function BrandPromise() {
  return (
    <section style={sectionWrap}>
      <div style={{ ...inner, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
        <span style={eyebrow}>Brand Promise</span>
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: MA, lineHeight: 1.2, marginBottom: '1.5rem' }}>
          We don&apos;t just sell your business —{' '}
          <em style={{ fontStyle: 'italic', color: GL }}>we make it worth more</em>{' '}
          before we do.
        </h2>
        <p style={{ fontFamily: sans, fontSize: '1rem', fontWeight: 600, color: TM, letterSpacing: '0.03em', fontStyle: 'italic' }}>
          This promise is tangible, measurable, and defensible.
        </p>
      </div>
    </section>
  );
}

// ─── Market Gap ──────────────────────────────────────────────────────────────
function MarketGap() {
  const points = [
    'Revenue and cost optimisation pre-sale',
    'Operational maturity & succession planning',
    'AI & digital positioning for premium buyers',
    'Saleability diagnostics & strategic exit timing',
  ];
  return (
    <section style={sectionWrap}>
      <div style={{ ...inner, ...splitGrid }}>
        {/* Photo left */}
        <img src={PH.market} alt="ExitPath advisory discussion" loading="lazy"
          style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 8, display: 'block' }} />

        {/* Text right */}
        <div>
          <span style={eyebrow}>The Market Gap</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Most advisors rush the sale. We engineer the value.
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8, marginBottom: '1.75rem' }}>
            The market is dominated by generalist brokers focused on listings, buyer databases, and speed to close. ExitPath Global occupies the gap they consistently ignore.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {points.map(pt => (
              <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: GO, fontSize: '1rem', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                <span style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.65 }}>{pt}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.9rem', color: MA }}>
            <span style={{ color: GL }}>Exit</span>Path Global occupies this gap.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Approach ────────────────────────────────────────────────────────────────
function Approach() {
  const pillars = [
    {
      roman: 'I',
      title: 'Saleability Score™ Diagnostic',
      body: 'A proprietary 30-point scoring model across 6 strategic dimensions. It tells you exactly where your business stands — and what to fix before going to market.',
    },
    {
      roman: 'II',
      title: 'Revenue & Digital Excellence',
      body: 'We identify and implement 10–20% revenue growth opportunities, AI & digital upgrades, pricing strategy, and operational readiness improvements before the sale.',
    },
    {
      roman: 'III',
      title: 'Strategic Execution & Expertise',
      body: 'Full deal management from positioning to close — buyer identification, negotiation, term optimisation — with confidentiality embedded into every step.',
    },
  ];
  return (
    <section id="v2-approach" style={sectionWrap}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 640 }}>
          <span style={eyebrow}>Our Approach</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2 }}>
            Saleability-First. Value-Driven.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {pillars.map(p => (
            <div key={p.roman} style={{ padding: '2.25rem 2rem', border: `1px solid ${BD}`, borderRadius: 8 }}>
              <p style={{ fontFamily: serif, fontSize: '2.25rem', fontWeight: 700, color: GO, marginBottom: '1rem', lineHeight: 1 }}>{p.roman}</p>
              <h3 style={{ fontFamily: serif, fontSize: '1.3rem', fontWeight: 700, color: MA, marginBottom: '0.875rem', lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.8 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Saleability Quadrant ────────────────────────────────────────────────────
function SaleabilityQuadrant() {
  const cells = [
    { quadrant: 'Value Builder',     corner: 'top-left',     desc: 'High market appeal, needs operational improvement',      accent: TM,      bg: '#EDE8DF' },
    { quadrant: 'Highly Saleable',   corner: 'top-right',    desc: 'Strong revenue and lean operations — ready to market',   accent: MA,      bg: CR    },
    { quadrant: 'Foundation Build',  corner: 'bottom-left',  desc: 'Needs significant work across both dimensions',          accent: '#9A9A9A', bg: '#E8E3DA' },
    { quadrant: 'Strategic Fix',     corner: 'bottom-right', desc: 'Good operations but revenue needs targeted improvement', accent: GO,      bg: '#F2EDE4' },
  ];
  return (
    <section id="v2-quadrant" style={sectionWrap}>
      <div style={inner}>
        <div style={{ marginBottom: '3rem', maxWidth: 640 }}>
          <span style={eyebrow}>Saleability Quadrant</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2 }}>
            Where Does Your Business Stand?
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, marginTop: '0.875rem', lineHeight: 1.8 }}>
            Our Saleability Score™ maps your business across two dimensions: market appeal and operational readiness. Your quadrant determines your path to exit.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: 680, border: `1px solid ${BD}`, borderRadius: 8, overflow: 'hidden' }}>
          {cells.map(c => (
            <div key={c.quadrant} style={{ background: c.bg, padding: '2rem', borderBottom: c.corner.startsWith('top') ? `1px solid ${BD}` : 'none', borderRight: c.corner.endsWith('left') ? `1px solid ${BD}` : 'none' }}>
              <span style={{ display: 'inline-block', background: c.accent, color: CR, fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: 20, marginBottom: '0.75rem' }}>
                {c.quadrant}
              </span>
              <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '3rem', marginTop: '1.25rem', paddingLeft: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: sans, fontSize: '0.75rem', color: TM }}>↑ High Market Appeal (top row)</span>
          <span style={{ fontFamily: sans, fontSize: '0.75rem', color: TM }}>→ High Operational Readiness (right column)</span>
        </div>

        <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', border: `1px solid ${BD}`, borderRadius: 8, maxWidth: 680, background: '#FBF8F3' }}>
          <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: MA }}>Not sure which quadrant you&apos;re in?</strong> Book a confidential Saleability Score™ assessment and find out exactly where your business stands — and what it will take to reach Highly Saleable.
          </p>
          <a href="#v2-contact" style={{ display: 'inline-block', marginTop: '1rem', fontFamily: sans, fontSize: '0.8rem', fontWeight: 600, color: MA, textDecoration: 'none', borderBottom: `1px solid ${MA}` }}>
            Book your assessment →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      subtitle: 'Top Quadrant Businesses',
      name:     'Highly Saleable',
      price:    '10% Success Fee',
      desc:     'For businesses already scoring in the Highly Saleable quadrant. No upfront fee — fully aligned incentives throughout.',
      features: ['Full deal management & execution', 'Buyer identification & outreach', 'Negotiation & term optimisation', 'No upfront fee — pay on success'],
      cta:      'Book a Discovery Call',
      featured: false,
    },
    {
      subtitle: 'Most Common',
      name:     'Strategic Fix',
      price:    'SGD 7,000',
      desc:     'For businesses in the Strategic Fix quadrant needing targeted improvement before going to market.',
      features: ['Saleability improvement roadmap', 'Operational improvements', 'AI & digital positioning strategy', 'Pricing strategy & revenue optimisation'],
      cta:      'Start Your Exit Journey',
      featured: true,
    },
    {
      subtitle: 'Aligned Incentives',
      name:     'Fee Adjustment',
      price:    'Offset on Exit',
      desc:     'The SGD 7,000 consultancy fee is credited back against the final success fee upon a successful sale.',
      features: ['Full success fee applies on exit', 'Consultancy fee credited back', 'We win when you win', 'No double-billing, ever'],
      cta:      'Learn More',
      featured: false,
    },
  ];
  return (
    <section id="v2-pricing" style={sectionWrap}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 600 }}>
          <span style={eyebrow}>Pricing Model</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2 }}>
            Value-Aligned Fees
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, marginTop: '0.875rem', lineHeight: 1.8 }}>
            Pay more only when you win more. Our fees are structured so our incentives are always aligned with yours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {tiers.map(t => (
            <div key={t.name} style={{ padding: '2rem', border: t.featured ? `2px solid ${MA}` : `1px solid ${BD}`, borderRadius: 8, background: t.featured ? '#FBF8F3' : CR, position: 'relative' }}>
              {t.featured && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: MA, color: GL, fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 1rem', borderRadius: 20, whiteSpace: 'nowrap' }}>
                  Recommended
                </div>
              )}
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.subtitle}</p>
              <h3 style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: MA, marginBottom: '0.25rem' }}>{t.name}</h3>
              <p style={{ fontFamily: serif, fontSize: '1.75rem', fontWeight: 700, color: MA, marginBottom: '0.875rem' }}>{t.price}</p>
              <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.7, marginBottom: '1.5rem' }}>{t.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {t.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <span style={{ color: GO, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: sans, fontSize: '0.875rem', color: TM }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#v2-contact" style={{ display: 'block', textAlign: 'center', fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: t.featured ? CR : MA, background: t.featured ? MA : 'transparent', border: `1px solid ${t.featured ? MA : BD}`, padding: '0.75rem', borderRadius: 4, textDecoration: 'none' }}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, marginTop: '2rem', lineHeight: 1.7 }}>
          Aligned incentives — we win when you win. Let&apos;s discuss which pathway fits your current Saleability Score™ and timeline.
        </p>
      </div>
    </section>
  );
}

// ─── Who We Serve ────────────────────────────────────────────────────────────
function WhoWeServe() {
  const segs = [
    {
      label: 'Primary Audience',
      title: 'Founder-Owners',
      sub:   'Age 40–70 · EBITDA SGD 500K–10M',
      desc:  'Baby Boomers and Gen X founders in professional services, agencies, retail, consulting, and SMEs with a 1–3 year exit horizon.',
      needs: ['Higher exit valuation', 'Reduced personal risk', 'Legacy preservation', 'Clear succession planning'],
    },
    {
      label: 'Secondary Audience',
      title: 'Growth-Stage Founders',
      sub:   'Age 30–50 · Digital & Scalable',
      desc:  'Digital, e-commerce, or scalable service businesses considering partial exits or strategic partnerships.',
      needs: ['Digital or scalable business model', 'Partial exit or strategic partnership', 'Growth capital via sale', 'Retain operational involvement'],
    },
    {
      label: 'Buyers',
      title: 'Strategic Buyers & Family Offices',
      sub:   'Acquisition-Ready',
      desc:  'Looking for well-prepared, low-risk acquisitions with professionalised operations and strong management teams.',
      needs: ['Vetted, deal-ready businesses', 'Professionalised operations', 'Low integration risk', 'Strong management teams'],
    },
  ];
  return (
    <section id="v2-serve" style={sectionWrap}>
      <div style={{ ...inner, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left: segment list */}
        <div>
          <span style={eyebrow}>Who We Serve</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '2.5rem' }}>
            Built for Founders at Every Stage of Exit
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {segs.map((s, i) => (
              <div key={s.title} style={{ paddingBottom: '2rem', marginBottom: '2rem', borderBottom: i < segs.length - 1 ? `1px solid ${BD}` : 'none' }}>
                <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{s.label}</p>
                <h3 style={{ fontFamily: serif, fontSize: '1.35rem', fontWeight: 700, color: MA, marginBottom: '0.25rem' }}>{s.title}</h3>
                <p style={{ fontFamily: sans, fontSize: '0.75rem', fontWeight: 600, color: GO, marginBottom: '0.625rem' }}>{s.sub}</p>
                <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.7, marginBottom: '0.875rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {s.needs.map(n => (
                    <span key={n} style={{ fontFamily: sans, fontSize: '0.75rem', color: TM, background: '#EDE8DF', padding: '0.25rem 0.75rem', borderRadius: 20 }}>{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo + note */}
        <div style={{ position: 'sticky', top: 80 }}>
          <img src={PH.serve} alt="Founders we serve" loading="lazy"
            style={{ width: '100%', height: 560, objectFit: 'cover', borderRadius: 8, display: 'block' }} />
          <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', border: `1px solid ${BD}`, borderRadius: 8 }}>
            <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.7, margin: 0 }}>
              Not sure if you fit? Book your Saleability Score™ assessment.{' '}
              <strong style={{ color: MA }}>No commitment. No pressure.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Vision & Values ─────────────────────────────────────────────────────────
function VisionValues() {
  const values = [
    { title: 'Founder-first Thinking',          desc: 'We protect the interests, legacy, and future of business owners — not just the transaction.' },
    { title: 'Strategic Rigour',                desc: 'Every exit is driven by data, positioning, and long-term value creation, not guesswork.' },
    { title: 'Confidentiality Without Compromise', desc: 'Confidentiality is embedded into every process, decision, and communication.' },
    { title: 'Value Before Velocity',           desc: 'We prioritise maximising long-term value over rushing transactions.' },
    { title: 'Global Perspective',              desc: 'We think cross-border, cross-industry, and cross-cycle.' },
  ];
  return (
    <section id="v2-values" style={sectionWrap}>
      <div style={{ ...inner, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left: photo */}
        <img src={PH.values} alt="ExitPath values" loading="lazy"
          style={{ width: '100%', height: 540, objectFit: 'cover', borderRadius: 8, display: 'block' }} />

        {/* Right: content */}
        <div>
          <span style={eyebrow}>Why We Exist</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '2rem' }}>
            Ownership to Opportunity
          </h2>

          <div style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MA, marginBottom: '0.375rem' }}>OUR VISION</p>
            <p style={{ fontFamily: sans, fontSize: '0.925rem', color: TM, lineHeight: 1.75 }}>To become the most trusted global exit advisory for founders navigating their most important transition.</p>
          </div>
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: `1px solid ${BD}` }}>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MA, marginBottom: '0.375rem' }}>OUR MISSION</p>
            <p style={{ fontFamily: sans, fontSize: '0.925rem', color: TM, lineHeight: 1.75 }}>To help founders exit with clarity, confidence, and maximum value by transforming businesses into investor-ready assets.</p>
          </div>

          <p style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: MA, marginBottom: '1.25rem' }}>Values</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {values.map(v => (
              <div key={v.title} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <span style={{ color: GO, fontSize: '1.05rem', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                <div>
                  <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.925rem', color: MA, marginBottom: '0.2rem' }}>{v.title}</p>
                  <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Proof ───────────────────────────────────────────────────────────────────
function Proof() {
  const cards = [
    {
      label: 'Tangible',
      title: 'Real Value, Before the Sale',
      accent: MA,
      points: [
        'Saleability Score™ improvement across 6 dimensions',
        '10–20% revenue growth strategies implemented',
        'Operational cost reductions that increase EBITDA',
        'AI & digital positioning that attracts premium buyers',
      ],
    },
    {
      label: 'Measurable',
      title: 'Numbers You Can Take to Market',
      accent: GO,
      points: [
        '30-point diagnostic with clear scoring',
        'Revenue improvement benchmarks tied to deal value',
        'Cost-to-value ratio tracked throughout',
        'Exit multiple improvement documented',
      ],
    },
    {
      label: 'Defensible',
      title: 'Built to Withstand Due Diligence',
      accent: GL,
      points: [
        'Buyer-ready information memoranda',
        'Cleaned and organised financial records',
        'Documented operational processes & SOPs',
        'Management team continuity plans',
      ],
    },
  ];
  return (
    <section id="v2-proof" style={sectionWrap}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 600 }}>
          <span style={eyebrow}>The ExitPath Difference</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2 }}>
            Our Promise in Practice
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {cards.map(c => (
            <div key={c.label} style={{ padding: '2rem', border: `1px solid ${BD}`, borderRadius: 8, borderTop: `3px solid ${c.accent}` }}>
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{c.label}</p>
              <h3 style={{ fontFamily: serif, fontSize: '1.3rem', fontWeight: 700, color: MA, marginBottom: '1.25rem', lineHeight: 1.3 }}>{c.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {c.points.map(pt => (
                  <li key={pt} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                    <span style={{ color: GO, fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.65 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm]   = useState({ firstName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const r = await fetch('/api/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ firstName: form.firstName, email: form.email }),
      });
      if (!r.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%', fontFamily: sans, fontSize: '0.9rem', color: TX,
    background: '#FBF8F3', border: `1px solid ${BD}`, borderRadius: 4,
    padding: '0.75rem', outline: 'none', boxSizing: 'border-box' as const,
  };
  const labelStyle = {
    fontFamily: sans, fontSize: '0.72rem', fontWeight: 600 as const,
    color: MA, display: 'block' as const, marginBottom: '0.375rem',
  };

  return (
    <section id="v2-contact" style={sectionWrap}>
      <div style={{ ...inner, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left: form */}
        <div>
          <span style={eyebrow}>Get in Touch</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '1rem' }}>
            Ready to Find Out What Your Business Is Really Worth?
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Book a confidential Saleability Score™ assessment. No commitment. No pressure. Just clarity on where you stand and what&apos;s possible.
          </p>

          {status === 'sent' ? (
            <div style={{ padding: '2rem', border: `1px solid ${GO}`, borderRadius: 8, background: '#FBF8F0' }}>
              <p style={{ fontFamily: sans, fontWeight: 700, color: MA, marginBottom: '0.5rem' }}>Message received.</p>
              <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM }}>We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input type="text" required placeholder="Your name" value={form.firstName}
                    onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" required placeholder="your@email.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Tell us about your business</label>
                <textarea rows={4} placeholder="Industry, annual revenue, exit timeline..." value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={status === 'sending'}
                style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: CR, background: MA, padding: '0.875rem 2rem', borderRadius: 4, border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>
                {status === 'sending' ? 'Sending…' : 'Book Your Assessment'}
              </button>
              {status === 'error' && (
                <p style={{ fontFamily: sans, fontSize: '0.875rem', color: '#C0392B' }}>Something went wrong. Please email us at <a href="mailto:consulting@kevindam.com" style={{ color: MA }}>consulting@kevindam.com</a></p>
              )}
            </form>
          )}
        </div>

        {/* Right: photo */}
        <img src={PH.contact} alt="Connect with ExitPath" loading="lazy"
          style={{ width: '100%', height: 580, objectFit: 'cover', borderRadius: 8, display: 'block' }} />
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#EDE8D8', borderTop: `1px solid ${BD}`, padding: '3rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.375rem' }}>
            <span style={{ fontFamily: serif, fontSize: '1.25rem', fontWeight: 700, color: GL }}>Exit</span>
            <span style={{ fontFamily: serif, fontSize: '1.25rem', fontWeight: 600, color: MA }}>Path</span>
            <span style={{ fontFamily: sans, fontSize: '0.6rem', fontWeight: 500, color: TM, marginLeft: '0.25rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
          </div>
          <p style={{ fontFamily: sans, fontSize: '0.8rem', color: TM, fontStyle: 'italic' }}>Ownership to Opportunity</p>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Our Approach', href: '#v2-approach' },
            { label: 'Pricing',      href: '#v2-pricing'  },
            { label: 'Who We Serve', href: '#v2-serve'    },
            { label: 'Contact',      href: '#v2-contact'  },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: sans, fontSize: '0.8rem', color: TM, textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>
        <p style={{ fontFamily: sans, fontSize: '0.75rem', color: TM }}>© 2025 ExitPath Global. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Ver2Page() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex  !important; }
          .split-grid    { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .three-col     { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
      <div style={{ background: CR, fontFamily: sans, color: TX, overflowX: 'hidden' }}>
        <Header />
        <main>
          <Hero />
          <BrandPromise />
          <MarketGap />
          <Approach />
          <SaleabilityQuadrant />
          <Pricing />
          <WhoWeServe />
          <VisionValues />
          <Proof />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
