'use client';

// ─── Design Tokens ─────────────────────────────────────────────────────────
const CR  = '#F5F0E4';
const MA  = '#501508';
const GO  = '#BC9C22';
const GL  = '#D4AF37';
const TX  = '#3D2B1A';
const TM  = '#6B5040';
const BD  = '#DDD6C8';

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'Jost', system-ui, sans-serif";

export default function ThankYouPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
      <div style={{ background: CR, minHeight: '100vh', fontFamily: sans, color: TX, display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <header style={{ borderBottom: `1px solid ${BD}`, background: CR }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: GL }}>Exit</span>
            <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 600, color: MA }}>Path</span>
            <span style={{ fontFamily: sans, fontSize: '0.63rem', fontWeight: 500, color: TM, marginLeft: '0.3rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
          </a>
          </div>
        </header>

        {/* Main content */}
        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: 620, width: '100%', textAlign: 'center' }}>

            {/* Icon */}
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: `rgba(188,156,34,0.12)`,
              border: `2px solid ${GO}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16L13 23L26 9" stroke={GO} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Eyebrow */}
            <span style={{
              fontFamily: sans, fontSize: '1.25rem', fontWeight: 600,
              color: GO, letterSpacing: '0.15em', textTransform: 'uppercase',
              display: 'block', marginBottom: '1rem',
            }}>
              Message Received
            </span>

            {/* Heading */}
            <h1 style={{
              fontFamily: serif,
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 700, color: MA, lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              Thank you for reaching out.
            </h1>

            {/* Body */}
            <p style={{
              fontFamily: sans, fontSize: '1rem', color: TM,
              lineHeight: 1.8, marginBottom: '1rem',
            }}>
              We&apos;ve received your enquiry and one of our advisors will be in touch within{' '}<strong style={{ color: MA, whiteSpace: 'nowrap' }}>one business day</strong>.
            </p>
            <p style={{
              fontFamily: sans, fontSize: '1rem', color: TM,
              lineHeight: 1.8, marginBottom: '3rem',
            }}>
              In the meantime, feel free to explore how ExitPath Global helps founders unlock the full value of their business.
            </p>

            {/* Divider */}
            <div style={{ borderTop: `1px solid ${BD}`, marginBottom: '2.5rem' }} />

            {/* What to expect */}
            <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <p style={{
                fontFamily: sans, fontSize: '0.75rem', fontWeight: 700,
                color: GO, letterSpacing: '0.15em', textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                What Happens Next
              </p>
              {[
                { step: '01', text: 'Our team reviews your enquiry and prepares for your discovery call.' },
                { step: '02', text: 'We run your Saleability Score™ to identify where value is being left on the table.' },
                { step: '03', text: 'You receive a personalised advisory plan — no commitment required.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: serif, fontSize: '1.2rem', fontWeight: 700,
                    color: GO, flexShrink: 0, minWidth: 28,
                  }}>{item.step}</span>
                  <p style={{ fontFamily: sans, fontSize: '1rem', color: TM, lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="/" style={{
                fontFamily: sans, fontSize: '1rem', fontWeight: 600,
                color: CR, background: MA,
                padding: '0.875rem 2rem', textDecoration: 'none', display: 'inline-block',
              }}>
                Back to Home
              </a>
              <a href="/#approach" style={{
                fontFamily: sans, fontSize: '1rem', fontWeight: 500,
                color: MA, border: `1px solid ${BD}`,
                padding: '0.875rem 2rem', textDecoration: 'none', display: 'inline-block',
              }}>
                Our Approach →
              </a>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer style={{ background: '#EDE8D8', borderTop: `1px solid ${BD}`, padding: '2rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: serif, fontSize: '1.25rem', fontWeight: 700, color: GL }}>Exit</span>
              <span style={{ fontFamily: serif, fontSize: '1.25rem', fontWeight: 600, color: MA }}>Path</span>
              <span style={{ fontFamily: sans, fontSize: '0.6rem', fontWeight: 500, color: TM, marginLeft: '0.25rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
            </div>
            <p style={{ fontFamily: sans, fontSize: '1rem', color: TM }}>© 2026 ExitPath Global. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}
