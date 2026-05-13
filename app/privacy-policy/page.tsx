'use client';

import { useState, useEffect } from 'react';

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

// ─── Site Header ─────────────────────────────────────────────────────────────
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Our Approach', href: '/#approach' },
    { label: 'Pricing',      href: '/#pricing'  },
    { label: 'Who We Serve', href: '/#serve'    },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(245,240,228,0.97)' : CR,
      borderBottom: scrolled ? `1px solid ${BD}` : `1px solid ${BD}`,
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: GL }}>Exit</span>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 600, color: MA }}>Path</span>
          <span style={{ fontFamily: sans, fontSize: '0.63rem', fontWeight: 500, color: TM, marginLeft: '0.3rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: sans, fontSize: '1rem', fontWeight: 500, color: TM, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="/#contact" style={{ fontFamily: sans, fontSize: '1rem', fontWeight: 600, color: CR, background: MA, padding: '0.5rem 1.25rem', borderRadius: 0, textDecoration: 'none' }}>
            Start a Conversation
          </a>
        </nav>
        <button onClick={() => setOpen(o => !o)} aria-label="Menu"
          style={{ background: 'none', border: `1px solid ${BD}`, cursor: 'pointer', padding: '8px 10px', display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 44, height: 44 }}
          className="mobile-menu-btn">
          {open ? (
            <>
              <span style={{ display: 'block', width: 22, height: 2, background: MA, transform: 'rotate(45deg) translate(5px, 5px)', transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: MA, opacity: 0, transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: MA, transform: 'rotate(-45deg) translate(5px, -5px)', transition: 'all 0.2s' }} />
            </>
          ) : (
            <>
              <span style={{ display: 'block', width: 22, height: 2, background: MA }} />
              <span style={{ display: 'block', width: 22, height: 2, background: MA }} />
              <span style={{ display: 'block', width: 22, height: 2, background: MA }} />
            </>
          )}
        </button>
      </div>
      {open && (
        <div style={{ background: CR, borderTop: `1px solid ${BD}`, padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: sans, fontSize: '1rem', color: MA, textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)}
            style={{ fontFamily: sans, fontSize: '0.9rem', fontWeight: 600, color: CR, background: MA, padding: '0.75rem', borderRadius: 0, textDecoration: 'none', textAlign: 'center' }}>
            Start a Conversation
          </a>
        </div>
      )}
    </header>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .pp-h2 { font-size: 1.2rem; font-weight: 700; color: ${MA}; margin-top: 2.5rem; margin-bottom: 0.75rem; font-family: ${sans}; }
        .pp-p  { margin-bottom: 1rem; color: #333; font-family: ${sans}; font-size: 1rem; line-height: 1.75; }
        .pp-ul { margin: 0.5rem 0 1rem 1.25rem; color: #333; font-family: ${sans}; font-size: 1rem; line-height: 1.75; }
        .pp-ul li { margin-bottom: 0.4rem; }
        .pp-a  { color: ${MA}; text-decoration: underline; }
        .pp-section { margin-bottom: 2rem; }
        .pp-highlight { background: #f9f5ef; border-left: 3px solid ${GL}; padding: 1rem 1.25rem; margin: 1.5rem 0; border-radius: 0 6px 6px 0; }
        .pp-highlight p { margin: 0; font-size: 0.95rem; color: ${TM}; font-family: ${sans}; line-height: 1.75; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      <div style={{ background: CR, minHeight: '100vh', fontFamily: sans, color: TX, display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <SiteHeader />

        {/* Main content */}
        <main style={{ flex: 1, padding: '4rem 2rem', paddingTop: '6rem' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>

            {/* Title */}
            <h1 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: MA, marginBottom: '0.5rem' }}>
              Privacy Policy
            </h1>
            <p style={{ fontFamily: sans, fontSize: '0.85rem', color: '#888', marginBottom: '2.5rem' }}>
              ExitPath Global &nbsp;|&nbsp; Last updated: May 2026
            </p>

            <div className="pp-highlight">
              <p>This policy is provided for informational purposes. It does not constitute legal advice. If you have specific compliance requirements, please consult a qualified legal professional.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">1. About This Policy</h2>
              <p className="pp-p">This Privacy Policy explains how ExitPath Global collects, uses, stores, and protects your personal data when you interact with our website at <a href="https://exitpath.global" className="pp-a">exitpath.global</a> or engage with our services.</p>
              <p className="pp-p">We take your privacy seriously. All enquiries and personal data are handled with discretion and in accordance with the Singapore Personal Data Protection Act 2012 (PDPA).</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">2. Who We Are</h2>
              <p className="pp-p">ExitPath Global is a strategic exit advisory business operating from Singapore. We are the data controller responsible for the personal data collected through this website.</p>
              <p className="pp-p">For any privacy-related enquiries, contact us at: <a href="mailto:exitpathglobal@gmail.com" className="pp-a">exitpathglobal@gmail.com</a></p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">3. What Personal Data We Collect</h2>
              <p className="pp-p">When you submit the contact form on our website, we collect the following information:</p>
              <ul className="pp-ul">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your company or business name</li>
                <li>Any information you provide in your message</li>
              </ul>
              <p className="pp-p">We may also collect standard technical data when you visit our website, such as your IP address, browser type, and pages visited. This data is collected automatically and is used only for website analytics and security purposes.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">4. How We Use Your Data</h2>
              <p className="pp-p">We use the personal data you provide for the following purposes:</p>
              <ul className="pp-ul">
                <li>To respond to your enquiry and provide the information or services you have requested</li>
                <li>To send you relevant information about business exit planning, business sales, and related topics</li>
                <li>To inform you about ExitPath Global&apos;s consulting services and updates</li>
                <li>To maintain records of our communications with you</li>
                <li>To improve our website and services based on how visitors engage with them</li>
              </ul>
              <p className="pp-p">We do not use your data for automated decision-making or profiling.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">5. Legal Basis for Processing</h2>
              <p className="pp-p">We process your personal data on the basis of your consent, which you provide when you submit our contact form. By submitting the form, you consent to us using your data as described in this policy.</p>
              <p className="pp-p">Where we have an ongoing legitimate interest in contacting you — for example, to follow up on a specific business enquiry you initiated — we may also rely on that legitimate interest as a lawful basis for processing.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">6. Marketing Communications</h2>
              <p className="pp-p">By submitting the contact form, you agree to receive communications from ExitPath Global. These may include:</p>
              <ul className="pp-ul">
                <li>Responses to your enquiry</li>
                <li>Information about business exit planning and related topics</li>
                <li>Updates about ExitPath Global&apos;s consulting services</li>
              </ul>
              <p className="pp-p">You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in any email, or by contacting us directly at <a href="mailto:exitpathglobal@gmail.com" className="pp-a">exitpathglobal@gmail.com</a>. Unsubscribing from marketing does not affect our ability to contact you about a specific enquiry you have made.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">7. How We Share Your Data</h2>
              <p className="pp-p">We do not sell, rent, or trade your personal data to third parties.</p>
              <p className="pp-p">We may share your data with trusted service providers who assist us in operating our website or delivering our services — for example, email platforms or website hosting providers. These providers are bound by confidentiality obligations and may only use your data to perform services on our behalf.</p>
              <p className="pp-p">We may also disclose your data if required to do so by law or to protect the rights, property, or safety of ExitPath Global or others.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">8. Data Retention</h2>
              <p className="pp-p">We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. If you ask us to delete your data, we will do so promptly, unless we are required to retain it for legal or regulatory reasons.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">9. Your Rights</h2>
              <p className="pp-p">Under the Singapore PDPA and applicable privacy law, you have the right to:</p>
              <ul className="pp-ul">
                <li>Access the personal data we hold about you</li>
                <li>Request corrections to inaccurate or incomplete data</li>
                <li>Withdraw your consent to receive marketing communications at any time</li>
                <li>Request that we delete your personal data, subject to any legal obligations we may have</li>
              </ul>
              <p className="pp-p">To exercise any of these rights, please contact us at <a href="mailto:exitpathglobal@gmail.com" className="pp-a">exitpathglobal@gmail.com</a>. We will respond to your request within a reasonable timeframe.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">10. Cookies</h2>
              <p className="pp-p">Our website may use cookies and similar tracking technologies to improve your browsing experience and collect analytics data. Cookies are small text files stored on your device.</p>
              <p className="pp-p">You can control or disable cookies through your browser settings at any time. Disabling cookies may affect the functionality of certain parts of the website.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">11. Security</h2>
              <p className="pp-p">We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse. All enquiries submitted through our website are handled in strict confidence.</p>
              <p className="pp-p">While we take these precautions, no method of transmission over the internet is completely secure. We cannot guarantee absolute security of your data.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">12. Third-Party Links</h2>
              <p className="pp-p">Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We recommend reviewing the privacy policy of any external site before providing your personal data.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">13. Changes to This Policy</h2>
              <p className="pp-p">We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page. Continued use of our website after any changes constitutes your acceptance of the updated policy.</p>
              <p className="pp-p">We encourage you to review this page periodically to stay informed of how we handle your personal data.</p>
            </div>

            <div className="pp-section">
              <h2 className="pp-h2">14. Contact Us</h2>
              <p className="pp-p">If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:</p>
              <p className="pp-p">
                ExitPath Global<br />
                <a href="mailto:exitpathglobal@gmail.com" className="pp-a">exitpathglobal@gmail.com</a><br />
                <a href="https://exitpath.global" className="pp-a">exitpath.global</a>
              </p>
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
