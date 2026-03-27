'use client';

import { useState, useEffect } from 'react';

// ─── Design Tokens ─────────────────────────────────────────────────────────
const CR = '#F5F0E4';
const MA = '#501508';
const GO = '#BC9C22';
const GL = '#D4AF37';
const TX = '#3D2B1A';
const TM = '#6B5040';
const BD = '#DDD6C8';

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'Jost', system-ui, sans-serif";


// ─── Shared Styles ──────────────────────────────────────────────────────────
const eyebrow: React.CSSProperties = {
  fontFamily: sans, fontSize: '0.68rem', fontWeight: 600,
  color: GO, letterSpacing: '0.15em', textTransform: 'uppercase',
  marginBottom: '1rem', display: 'block',
};
const sectionStyle: React.CSSProperties = {
  background: CR, padding: '88px 2rem', borderTop: `1px solid ${BD}`,
};
const inner: React.CSSProperties = { maxWidth: 1100, margin: '0 auto' };
const split: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '1fr 1fr',
  gap: '5rem', alignItems: 'center',
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

  const links = [
    { label: 'Our Approach', href: '#v2-approach' },
    { label: 'Pricing',      href: '#v2-pricing'  },
    { label: 'Who We Serve', href: '#v2-serve'    },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(245,240,228,0.97)' : 'transparent',
      borderBottom: scrolled ? `1px solid ${BD}` : 'none',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/ver2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: GL }}>Exit</span>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 600, color: MA }}>Path</span>
          <span style={{ fontFamily: sans, fontSize: '0.63rem', fontWeight: 500, color: TM, marginLeft: '0.3rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: sans, fontSize: '0.8rem', fontWeight: 500, color: scrolled ? TM : MA, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="#v2-contact" style={{ fontFamily: sans, fontSize: '0.8rem', fontWeight: 600, color: CR, background: MA, padding: '0.5rem 1.25rem', borderRadius: 0, textDecoration: 'none' }}>
            Start a Conversation
          </a>
        </nav>
        <button onClick={() => setOpen(o => !o)} aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
          className="mobile-menu-btn">
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: MA, margin: '4px 0' }} />)}
        </button>
      </div>
      {open && (
        <div style={{ background: CR, borderTop: `1px solid ${BD}`, padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: sans, fontSize: '1rem', color: MA, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="#v2-contact" onClick={() => setOpen(false)}
            style={{ fontFamily: sans, fontSize: '0.9rem', fontWeight: 600, color: CR, background: MA, padding: '0.75rem', borderRadius: 0, textDecoration: 'none', textAlign: 'center' }}>
            Start a Conversation
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Section 1: Hero ────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ background: CR, paddingTop: 104, paddingBottom: 80, paddingLeft: '2rem', paddingRight: '2rem' }}>
      <div style={{ ...inner }}>
        <div style={{ maxWidth: 680 }}>
          <span style={eyebrow}>Strategic Exit Advisory</span>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: 700, color: MA, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            <span style={{ color: GL }}>Exit</span>Path Global helps founders unlock the full value of their business.
          </h1>
          <p style={{ fontFamily: sans, fontSize: '1.05rem', color: TM, lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 520 }}>
            Clear preparation. Sharp positioning. Precise deal execution — delivered with global reach and total confidentiality.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#v2-contact" style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: CR, background: MA, padding: '0.875rem 2rem', borderRadius: 0, textDecoration: 'none' }}>
              Start a Conversation
            </a>
            <a href="#v2-approach" style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 500, color: MA, padding: '0.875rem 2rem', border: `1px solid ${BD}`, borderRadius: 0, textDecoration: 'none' }}>
              Our Approach →
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — direct from copy doc */}
      <div style={{ ...inner, borderTop: `1px solid ${BD}`, marginTop: '4rem', paddingTop: '2.5rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        {[
          { stat: 'SGD 10M', label: 'Max EBITDA Target'    },
          { stat: '30-pt',   label: 'Saleability Score™'  },
          { stat: '6',       label: 'Strategic Dimensions' },
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

// ─── Section 2: Brand Promise ────────────────────────────────────────────────
function BrandPromise() {
  return (
    <section style={sectionStyle}>
      <div style={{ ...inner, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
        <span style={eyebrow}>Brand Promise</span>
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: MA, lineHeight: 1.2, marginBottom: '1.5rem' }}>
          We don&apos;t just sell your business —{' '}
          <em style={{ fontStyle: 'italic', color: GL }}>we make it worth more</em>{' '}
          before we do.
        </h2>
        <p style={{ fontFamily: sans, fontSize: '1rem', fontWeight: 600, color: TM, letterSpacing: '0.02em', fontStyle: 'italic' }}>
          This promise is tangible, measurable, and defensible.
        </p>
      </div>
    </section>
  );
}

// ─── Section 3: Market Position ─────────────────────────────────────────────
function MarketPosition() {
  const overserved = [
    'Business listings & buyer databases',
    'Commoditised success fees (5–12%, with 59% charging a flat 10%)',
    'Focus on speed-to-close',
    'Generic deal execution',
    'DIY marketplace platforms',
  ];
  const underserved = [
    'Revenue, process & cost optimisation pre-sale',
    'Operational maturity & succession planning',
    'AI & digital positioning',
    'Saleability diagnostics & improvement',
    'Strategic exit timing & buyer targeting',
  ];
  return (
    <section style={sectionStyle}>
      <div style={{ ...inner }}>
        <div style={{ maxWidth: 760 }}>
          <span style={eyebrow}>Market Position</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Occupy the Gap Nobody Else Fills
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.8, marginBottom: '1.75rem' }}>
            The SME exit market is saturated with generalist brokers competing on buyer databases and deal speed. ExitPath operates in the underserved, high-value space — the{' '}
            <strong style={{ color: MA }}>$1M–$10M range with value-improvement positioning</strong>{' '}
            that nobody currently owns.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ padding: '1.25rem', background: '#EDE8DF', borderRadius: 0 }}>
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: TM, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                What Everyone Else Does
              </p>
              {overserved.map(pt => (
                <div key={pt} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#9A9A9A', fontWeight: 700, flexShrink: 0, fontSize: '0.75rem', marginTop: 1 }}>✕</span>
                  <span style={{ fontFamily: sans, fontSize: '0.78rem', color: TM, lineHeight: 1.5 }}>{pt}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '1.25rem', background: '#FBF8F0', border: `1px solid ${GO}`, borderRadius: 0 }}>
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                ExitPath&apos;s Territory
              </p>
              {underserved.map(pt => (
                <div key={pt} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{ color: GO, fontWeight: 700, flexShrink: 0, fontSize: '0.75rem', marginTop: 1 }}>→</span>
                  <span style={{ fontFamily: sans, fontSize: '0.78rem', color: MA, lineHeight: 1.5, fontWeight: 500 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: sans, fontSize: '0.8rem', fontWeight: 700, color: TM, marginTop: '1.25rem', fontStyle: 'italic' }}>
            Zero brokers in Singapore currently offer pre-sale revenue optimisation or AI/digital positioning.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: What Sets Us Apart ──────────────────────────────────────────
function Differentiators() {
  const cards = [
    {
      title: 'Saleability Score™',
      stat: '30-pt',
      front: 'Proprietary 30-point diagnostic across 6 strategic dimensions — no other broker in Singapore offers this.',
      back: 'Zero Competitors Offer This. No broker in Singapore provides a data-backed, multi-dimensional diagnostic before listing.',
    },
    {
      title: '10–20% Revenue Growth',
      stat: '10–20%',
      front: 'We optimise revenue, costs, and processes before going to market — translating to multiplied gains on your sale price.',
      back: 'Revenue Growth Pre-Sale. A 15% revenue increase on a business valued at 4× EBITDA translates to hundreds of thousands in additional enterprise value.',
    },
    {
      title: 'AI & Digital Positioning',
      stat: '0',
      front: 'Modernise your digital footprint and integrate AI-driven improvements to appeal to sophisticated buyers.',
      back: 'Brokers Offer This. Traditional brokers focus on listings and databases. Zero brokers in Singapore modernise your digital footprint pre-sale.',
    },
    {
      title: 'Confidentiality Without Compromise',
      stat: '59%',
      front: 'Embedded into every process, decision, and communication. 59% of brokers use a flat-fee model with no discretion layer.',
      back: 'Use Flat-Fee, No Discretion. Most brokers charge a commodity 10% with no confidentiality protocol built in.',
    },
    {
      title: 'Founder-First Thinking',
      stat: '1–3 yr',
      front: 'We protect the interests, legacy, and future of business owners — not just the transaction.',
      back: 'Typical Exit Horizon. We work with founders who are planning ahead, not rushing. Better preparation means better outcomes.',
    },
    {
      title: 'Global Perspective',
      stat: '80%',
      front: 'Cross-border, cross-industry, and cross-cycle — connecting you with the right buyers worldwide.',
      back: 'Of Buyers Are International. Market data shows the majority of acquirers in Singapore are cross-border. Global reach is not optional — it is essential.',
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 700 }}>
          <span style={eyebrow}>Why ExitPath</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '0.875rem' }}>
            Built on value creation, not just deal execution.
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8 }}>
            Every engagement starts with making your business more valuable, more transferable, and more attractive to the right buyers.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {cards.map(c => (
            <div key={c.title} style={{ padding: '2rem', border: `1px solid ${BD}`, borderRadius: 0, background: CR }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: serif, fontSize: '1.2rem', fontWeight: 700, color: MA, lineHeight: 1.3, flex: 1, marginRight: '0.75rem' }}>{c.title}</h3>
                <span style={{ fontFamily: serif, fontSize: '1.4rem', fontWeight: 700, color: GO, flexShrink: 0 }}>{c.stat}</span>
              </div>
              <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.7, marginBottom: '1rem' }}>{c.front}</p>
              <p style={{ fontFamily: sans, fontSize: '0.8rem', color: TM, lineHeight: 1.65, fontStyle: 'italic', borderTop: `1px solid ${BD}`, paddingTop: '0.875rem' }}>{c.back}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Our Approach ─────────────────────────────────────────────────
function Approach() {
  const blocks = [
    {
      step: 'Step 01',
      title: 'Saleability Score™ Diagnostic',
      body: 'Proprietary 30-point scoring model across 6 strategic dimensions to assess sale readiness and identify value gaps. The score tells you whether you are ready to go to market, or whether targeted improvements will unlock meaningfully higher valuations.',
    },
    {
      step: 'Steps 02 & 03',
      title: 'Revenue & Digital Excellence',
      body: 'Drive 10–20% revenue growth and eliminate operational inefficiencies before going to market. Modernise your digital footprint with AI-driven improvements to appeal to sophisticated buyers.',
    },
    {
      step: 'Steps 04 & 05',
      title: 'Strategic Execution & Expertise',
      body: 'Precision targeting of strategic acquirers, family offices, and growth investors with full confidentiality management. Specialist in agencies, consulting firms, and digital SMEs where operational maturity is the key value multiplier.',
    },
  ];
  const dimensions = ['Financial Clarity', 'Revenue Quality', 'Operational Maturity', 'Digital Readiness', 'Management Depth', 'Market Position'];

  return (
    <section id="v2-approach" style={sectionStyle}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 640 }}>
          <span style={eyebrow}>Our Approach</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '0.875rem' }}>
            Saleability-First. Value-Driven.
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8 }}>
            ExitPath is an advisory built on value creation, not just deal execution.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
          {blocks.map(b => (
            <div key={b.title} style={{ padding: '2.25rem 2rem', border: `1px solid ${BD}`, borderRadius: 0 }}>
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>{b.step}</p>
              <h3 style={{ fontFamily: serif, fontSize: '1.3rem', fontWeight: 700, color: MA, marginBottom: '0.875rem', lineHeight: 1.3 }}>{b.title}</h3>
              <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.8 }}>{b.body}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '1.5rem 2rem', border: `1px solid ${BD}`, borderRadius: 0, background: '#FBF8F3' }}>
          <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            The 6 Strategic Dimensions
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {dimensions.map(d => (
              <span key={d} style={{ fontFamily: sans, fontSize: '0.82rem', fontWeight: 600, color: MA, background: CR, border: `1px solid ${BD}`, padding: '0.375rem 0.875rem', borderRadius: 0 }}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Saleability Quadrant ────────────────────────────────────────
function SaleabilityQuadrant() {
  const cells = [
    { name: 'Risky Sale',    score: '13–18', desc: 'Good operational setup but no clear USP or growth potential. Low attractiveness to buyers.',                            accent: TM, bg: '#EDE8DF' },
    { name: 'Ideal Sale ★',  score: '25–30', desc: 'Premium asset. Strong in all areas — operational excellence, growth story, and buyer appeal.',                          accent: MA, bg: '#FBF8F0' },
    { name: 'Hard to Sell',  score: '6–12',  desc: 'Needs major fixes and is unattractive to buyers. High operational risk, no growth story.',                              accent: '#9A9A9A', bg: '#E8E3DA' },
    { name: 'Strategic Fix', score: '19–24', desc: 'Attractive to buyers but needs operational cleanup. Strong market potential, weak execution.',                           accent: GO, bg: CR },
  ];

  return (
    <section id="v2-quadrant" style={sectionStyle}>
      <div style={inner}>
        <div style={{ marginBottom: '3rem', maxWidth: 640, margin: '0 auto 3rem', textAlign: 'center' }}>
          <span style={eyebrow}>The Saleability Quadrant</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '0.875rem' }}>
            Where Does Your Business Sit?
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8 }}>
            The quadrant maps every business on two axes:{' '}
            <strong style={{ color: MA }}>Readiness to Sell</strong> (operational maturity, team depth, clean financials) against{' '}
            <strong style={{ color: MA }}>Attractiveness to Buyers</strong> (growth potential, competitive advantage, low risk). Your position determines your advisory pathway.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: 700, border: `1px solid ${BD}`, borderRadius: 0, overflow: 'hidden', margin: '0 auto' }}>
          {cells.map((c, i) => (
            <div key={c.name} style={{
              background: c.bg, padding: '2rem',
              borderBottom: i < 2 ? `1px solid ${BD}` : 'none',
              borderRight: i % 2 === 0 ? `1px solid ${BD}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ display: 'inline-block', background: c.accent, color: CR, fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: 0 }}>
                  {c.name}
                </span>
                <span style={{ fontFamily: serif, fontSize: '1rem', fontWeight: 700, color: c.accent }}>{c.score}</span>
              </div>
              <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '3rem', marginTop: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 700, margin: '1.25rem auto 0' }}>
          <span style={{ fontFamily: sans, fontSize: '0.75rem', color: TM }}>↑ High Attractiveness to Buyers (top row)</span>
          <span style={{ fontFamily: sans, fontSize: '0.75rem', color: TM }}>→ High Readiness to Sell (right column)</span>
        </div>
        <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', border: `1px solid ${BD}`, borderRadius: 0, maxWidth: 700, background: '#FBF8F3', margin: '2.5rem auto 0' }}>
          <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: MA }}>Not sure which quadrant you&apos;re in?</strong> Book a confidential Saleability Score™ assessment and find out exactly where your business stands — and what it will take to reach Ideal Sale.
          </p>
          <a href="#v2-contact" style={{ display: 'inline-block', marginTop: '1rem', fontFamily: sans, fontSize: '0.8rem', fontWeight: 600, color: MA, textDecoration: 'none', borderBottom: `1px solid ${MA}` }}>
            Book your assessment →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Pricing ──────────────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      subtitle: 'Top Quadrant Businesses',
      name: 'Highly Saleable',
      price: '10% Success Fee',
      desc: 'For businesses scoring in the Highly Saleable quadrant of our Saleability Score™ framework.',
      features: ['Full deal management & execution', 'Buyer identification & outreach', 'Negotiation & term optimisation', 'No upfront fee — pay on success'],
      cta: 'Book a Discovery Call',
      featured: false,
    },
    {
      subtitle: 'Most Common',
      name: 'Strategic Fix',
      price: 'SGD 7,000',
      desc: 'For businesses in the Strategic Fix quadrant needing targeted improvement before going to market.',
      features: ['Saleability improvement roadmap', 'Operational improvements (cost & process)', 'AI & digital positioning strategy', 'Pricing strategy & revenue optimisation'],
      cta: 'Start Your Exit Journey',
      featured: true,
    },
    {
      subtitle: 'Aligned Incentives',
      name: 'Fee Adjustment',
      price: 'Offset on Exit',
      desc: 'Upon successful sale, the $7,000 consultancy payments are offset against the final success fee.',
      features: ['Full success fee applies on exit', 'Consultancy fee credited back', 'We win when you win', 'No double-billing, ever'],
      cta: 'Learn More',
      featured: false,
    },
  ];
  return (
    <section id="v2-pricing" style={sectionStyle}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 600 }}>
          <span style={eyebrow}>Pricing Model</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '0.875rem' }}>
            Value-Aligned Fees
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8 }}>
            Pay more only when you win more. Our fees are structured so our incentives are always aligned with yours.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {tiers.map(t => (
            <div key={t.name} style={{ padding: '2rem', border: t.featured ? `2px solid ${MA}` : `1px solid ${BD}`, borderRadius: 0, background: t.featured ? '#FBF8F3' : CR, position: 'relative' }}>
              {t.featured && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: MA, color: GL, fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 1rem', borderRadius: 0, whiteSpace: 'nowrap' }}>
                  Most Common
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
              <a href="#v2-contact" style={{ display: 'block', textAlign: 'center', fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: t.featured ? CR : MA, background: t.featured ? MA : 'transparent', border: `1px solid ${t.featured ? MA : BD}`, padding: '0.75rem', borderRadius: 0, textDecoration: 'none' }}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: MA, marginTop: '2rem', fontStyle: 'italic' }}>
          Aligned incentives — we win when you win.
        </p>
      </div>
    </section>
  );
}

// ─── Section 8: Who We Serve ─────────────────────────────────────────────────
function WhoWeServe() {
  const segs = [
    {
      label: 'Primary Audience',
      title: 'Founder-Owners',
      sub: 'Age 40–70 · EBITDA SGD 500K–10M',
      desc: 'Baby Boomers and Gen X founders in professional services, agencies, retail, consulting, and SMEs with a 1–3 year exit horizon.',
      needs: ['Higher exit valuation', 'Reduced personal risk', 'Legacy preservation', 'Clear succession planning'],
    },
    {
      label: 'Secondary Audience',
      title: 'Growth-Stage Founders',
      sub: 'Age 30–50 · Digital & Scalable',
      desc: 'Digital, e-commerce, or scalable service businesses considering partial exits or strategic partnerships.',
      needs: ['Digital or scalable business model', 'Partial exit or strategic partnership', 'Growth capital via sale', 'Retain operational involvement'],
    },
    {
      label: 'Buyers',
      title: 'Strategic Buyers & Family Offices',
      sub: 'Acquisition-Ready',
      desc: 'Looking for well-prepared, low-risk acquisitions with professionalised operations.',
      needs: ['Vetted, deal-ready businesses', 'Professionalised operations', 'Low integration risk', 'Strong management teams'],
    },
  ];
  return (
    <section id="v2-serve" style={sectionStyle}>
      <div style={{ ...inner }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 2.5rem' }}>
          <span style={eyebrow}>Who We Serve</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '0.875rem' }}>
            Built for Founders at Every Stage of Exit
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8 }}>
            From Baby Boomer business owners approaching retirement to growth-stage founders considering strategic partnerships.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {segs.map((s, i) => (
            <div key={s.title} style={{ paddingTop: '2rem', borderTop: `2px solid ${i === 0 ? MA : BD}` }}>
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{s.label}</p>
              <h3 style={{ fontFamily: serif, fontSize: '1.35rem', fontWeight: 700, color: MA, marginBottom: '0.25rem' }}>{s.title}</h3>
              <p style={{ fontFamily: sans, fontSize: '0.75rem', fontWeight: 600, color: GO, marginBottom: '0.625rem' }}>{s.sub}</p>
              <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM, lineHeight: 1.7, marginBottom: '0.875rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {s.needs.map(n => (
                  <span key={n} style={{ fontFamily: sans, fontSize: '0.75rem', color: TM, background: '#EDE8DF', padding: '0.25rem 0.75rem', borderRadius: 0 }}>{n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2.5rem', padding: '1.25rem 1.5rem', border: `1px solid ${BD}`, borderRadius: 0 }}>
          <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.7, margin: 0 }}>
            Not sure if you fit? Book your Saleability Score™ assessment.{' '}
            <strong style={{ color: MA }}>No commitment. No pressure.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Vision & Values ──────────────────────────────────────────────
function VisionValues() {
  const milestones = [
    'Recognised market leader in strategic exits for SMEs',
    'Premium brand with selective, high-value mandates',
    'Platformised advisory framework scalable across markets',
  ];
  const values = [
    { roman: 'I',   title: 'Founder-First Thinking', desc: 'We protect the interests, legacy, and future of business owners — not just the transaction.' },
    { roman: 'II',  title: 'Strategic Rigour',        desc: 'Every exit is driven by data, positioning, and long-term value creation, not guesswork.' },
    { roman: 'III', title: 'Confidentiality',         desc: 'Embedded into every process, decision, and communication without compromise.' },
    { roman: 'IV',  title: 'Value Before Velocity',   desc: 'We prioritise maximising long-term value over rushing transactions.' },
    { roman: 'V',   title: 'Global Perspective',      desc: 'We think cross-border, cross-industry, and cross-cycle — connecting the right buyers globally.' },
  ];
  return (
    <section id="v2-values" style={sectionStyle}>
      <div style={{ ...inner }}>
        <div style={{ maxWidth: 720 }}>
          <span style={eyebrow}>About ExitPath</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '2rem' }}>
            Why We Exist
          </h2>
          <div style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MA, marginBottom: '0.375rem' }}>OUR VISION</p>
            <p style={{ fontFamily: sans, fontSize: '0.925rem', color: TM, lineHeight: 1.75 }}>To become the most trusted global exit advisory for founders navigating their most important transition.</p>
          </div>
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: `1px solid ${BD}` }}>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MA, marginBottom: '0.375rem' }}>OUR MISSION</p>
            <p style={{ fontFamily: sans, fontSize: '0.925rem', color: TM, lineHeight: 1.75 }}>To help founders exit with clarity, confidence, and maximum value by transforming businesses into investor-ready assets.</p>
          </div>
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: `1px solid ${BD}` }}>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: MA, marginBottom: '0.875rem' }}>GROWTH VISION</p>
            <p style={{ fontFamily: serif, fontSize: '1.1rem', fontWeight: 600, color: MA, marginBottom: '0.875rem' }}>Building the World&apos;s Most Trusted Exit Advisory</p>
            {milestones.map(m => (
              <div key={m} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span style={{ color: GO, fontWeight: 700, flexShrink: 0 }}>→</span>
                <span style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.6 }}>{m}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: serif, fontSize: '1.35rem', fontWeight: 700, color: MA, marginBottom: '1.25rem' }}>Values</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {values.map(v => (
              <div key={v.roman} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: serif, fontSize: '1rem', fontWeight: 700, color: GO, flexShrink: 0, minWidth: 22 }}>{v.roman}</span>
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

// ─── Section 10: Brand Promise Proof ────────────────────────────────────────
function Proof() {
  const cards = [
    {
      label: 'Tangible',
      title: 'Measurable Improvements Before the Sale',
      body: 'We target 10–20% revenue growth pre-sale, which translates to a multiplied boost in sale price given typical EBITDA valuation multiples. Measurable improvements to revenue, cost, and operations before going to market.',
    },
    {
      label: 'Measurable',
      title: 'The Saleability Score™ Quantifies It',
      body: 'The Saleability Score™ quantifies exactly where value is being created or lost across 30 data points and 6 strategic dimensions. Every recommendation is grounded in data, not opinion.',
    },
    {
      label: 'Defensible',
      title: 'Zero Brokers Offer This Level of Depth',
      body: 'Every recommendation is grounded in data, not opinion or generic advice. Zero brokers in Singapore offer this level of diagnostic depth before listing.',
    },
  ];
  const accents = [MA, GO, GL];
  return (
    <section id="v2-proof" style={sectionStyle}>
      <div style={inner}>
        <div style={{ marginBottom: '3.5rem', maxWidth: 600 }}>
          <span style={eyebrow}>Why Clients Choose ExitPath</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2 }}>
            Our promise is tangible, measurable, and defensible.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {cards.map((c, i) => (
            <div key={c.label} style={{ padding: '2rem', border: `1px solid ${BD}`, borderRadius: 0, borderTop: `3px solid ${accents[i]}` }}>
              <p style={{ fontFamily: sans, fontSize: '0.62rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{c.label}</p>
              <h3 style={{ fontFamily: serif, fontSize: '1.3rem', fontWeight: 700, color: MA, marginBottom: '1rem', lineHeight: 1.3 }}>{c.title}</h3>
              <p style={{ fontFamily: sans, fontSize: '0.875rem', color: TM, lineHeight: 1.75 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 11: CTA ─────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ ...sectionStyle, textAlign: 'center' }}>
      <div style={{ ...inner, maxWidth: 700, margin: '0 auto' }}>
        <span style={eyebrow}>Ready to Begin?</span>
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '1.25rem' }}>
          Ready to Find Out What Your Business Is Really Worth?
        </h2>
        <p style={{ fontFamily: sans, fontSize: '1rem', color: TM, lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Book a confidential discovery call. We&apos;ll run your Saleability Score™ and show you exactly where value is being left on the table.
        </p>
        <a href="#v2-contact" style={{ fontFamily: sans, fontSize: '0.9rem', fontWeight: 600, color: CR, background: MA, padding: '1rem 2.5rem', borderRadius: 0, textDecoration: 'none', display: 'inline-block' }}>
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
}

// ─── Section 12: Contact ─────────────────────────────────────────────────────
function Contact() {
  const [form, setForm]     = useState({ fullName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const r = await fetch('/api/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ firstName: form.fullName.split(' ')[0], email: form.email }),
      });
      if (!r.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', fontFamily: sans, fontSize: '0.9rem', color: TX,
    background: '#FBF8F3', border: `1px solid ${BD}`, borderRadius: 0,
    padding: '0.75rem', outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: sans, fontSize: '0.72rem', fontWeight: 600,
    color: MA, display: 'block', marginBottom: '0.375rem',
  };

  return (
    <section id="v2-contact" style={sectionStyle}>
      <div style={{ ...inner, display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 640, width: '100%' }}>
          <span style={{ ...eyebrow, textAlign: 'center', display: 'block' }}>Get In Touch</span>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '1rem', textAlign: 'center' }}>
            Start Your Exit Journey
          </h2>
          <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8, marginBottom: '2.5rem', textAlign: 'center' }}>
            Book a confidential discovery call. We&apos;ll run your Saleability Score™ and show you exactly where value is being left on the table.
          </p>
          {status === 'sent' ? (
            <div style={{ padding: '2rem', border: `1px solid ${GO}`, borderRadius: 0, background: '#FBF8F0' }}>
              <p style={{ fontFamily: sans, fontWeight: 700, color: MA, marginBottom: '0.5rem' }}>Message received.</p>
              <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM }}>We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" required placeholder="Your full name" value={form.fullName}
                    onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" required placeholder="your@email.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input type="tel" placeholder="+65 xxxx xxxx" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Tell us about your business</label>
                <textarea rows={4} placeholder="Industry, annual revenue, exit timeline..." value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={status === 'sending'}
                style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: CR, background: MA, padding: '0.875rem 2rem', borderRadius: 0, border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>
                {status === 'sending' ? 'Sending…' : 'Book a Discovery Call'}
              </button>
              {status === 'error' && (
                <p style={{ fontFamily: sans, fontSize: '0.875rem', color: '#C0392B' }}>
                  Something went wrong. Please email us at{' '}
                  <a href="mailto:consulting@kevindam.com" style={{ color: MA }}>consulting@kevindam.com</a>
                </p>
              )}
            </form>
          )}
        </div>
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
          .mobile-menu-btn { display: flex !important; }
          nav { display: none !important; }
        }
      `}</style>
      <div style={{ background: CR, fontFamily: sans, color: TX, overflowX: 'hidden' }}>
        <Header />
        <main>
          <Hero />
          <BrandPromise />
          <MarketPosition />
          <Differentiators />
          <Approach />
          <SaleabilityQuadrant />
          <Pricing />
          <WhoWeServe />
          <VisionValues />
          <Proof />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
