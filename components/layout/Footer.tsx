'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#3A0E05', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-[1100px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', fontWeight: 700, color: '#D4AF37' }}>Exit</span>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', fontWeight: 600, color: '#FFFFFF' }}>Path</span>
              <span style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)', marginLeft: '0.25rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
            </div>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '260px' }}>
              Ownership to Opportunity. Strategic exit advisory for founders who want more from their most important transaction.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', fontWeight: 700, color: '#BC9C22', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Our Approach', href: '#approach' },
                { label: 'Saleability Quadrant', href: '#quadrant' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Who We Serve', href: '#audience' },
                { label: 'Our Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', fontWeight: 700, color: '#BC9C22', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              Get in Touch
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              Singapore-based. Globally connected.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                marginTop: '1.25rem',
                fontFamily: 'var(--font-jost)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#501508',
                background: '#D4AF37',
                padding: '0.6rem 1.25rem',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#BC9C22')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#D4AF37')}
            >
              Start a Conversation
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} ExitPath Global. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
            Saleability Score™ is a proprietary framework of ExitPath Global.
          </p>
        </div>
      </div>
    </footer>
  );
}
