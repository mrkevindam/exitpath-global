'use client';

import { useState, useEffect } from 'react';

// ── Design Tokens ──────────────────────────────────────────────────────────
const CR  = '#F5F0E4';
const MA  = '#501508';
const GO  = '#BC9C22';
const GL  = '#D4AF37';
const TX  = '#3D2B1A';
const TM  = '#6B5040';
const BD  = '#DDD6C8';
const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'Jost', system-ui, sans-serif";

// ── Types ──────────────────────────────────────────────────────────────────
interface CompanyMetadata { name: string; email: string; sector?: string; country?: string; }
interface QuestionScore   { q1: number; q2: number; q3: number; q4: number; q5: number; q6: number; }
interface QuestionNotes   { [key: string]: string | undefined; }
type SaleabilityTier = 'Highly Saleable' | 'Saleable with Minor Adjustments' | 'Needs Improvement / Risky' | 'Poor Saleability';
type Quadrant        = 'Ideal Sale' | 'Strategic Fix' | 'Risky Sale' | 'Hard to Sell';
type GateResult      = 'PASS' | 'BORDERLINE' | 'FAIL';
interface InternalFlags {
  redFlagFinancials: boolean; redFlagOps: boolean; redFlagRisk: boolean;
  concentrationRisk: boolean; ownerDependence: boolean; weakUSP: boolean;
  weakGrowth: boolean; motivationConcern: boolean;
}
interface ClientSummary { title: string; scoreLine: string; quadrant: Quadrant; message: string; cta: { label: string }; }
interface ComputedResults { totalScore: number; tier: SaleabilityTier; readiness: number; attractiveness: number; quadrant: Quadrant; gateResult: GateResult; internalFlags: InternalFlags; }
interface AssessmentResponse { assessmentId: string; computed: ComputedResults; clientSummary: ClientSummary; scores: QuestionScore; notes: QuestionNotes; company: CompanyMetadata; }

// ── Config ─────────────────────────────────────────────────────────────────
const CONFIG = {
  axisMidline: 3.5,
  passMinTotal: 22, passMinEach: 3,
  failMaxTotal: 17, failMinEach: 1,
  bands: {
    highly_saleable:     [25, 30],
    saleable_with_minor: [19, 24],
    needs_improvement:   [13, 18],
    poor:                [6,  12],
  },
};

// ── Blueprint ──────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 'q1', title: 'Motivation to Sell',
    core_question: 'Why is the owner selling the business at this time?',
    objective: 'Understand motivation and urgency.',
    options: [
      { value: 1, label: 'Distressed or urgent sale',  tip: 'Losing share / needs cash' },
      { value: 2, label: 'Some pressure to sell',      tip: 'Performance slowing' },
      { value: 3, label: 'Mixed reasons',               tip: 'Partly strategic, partly personal' },
      { value: 4, label: 'Strategic timing',            tip: 'Planned exit; targets achieved' },
      { value: 5, label: 'Fully strategic sale',        tip: 'Well-timed transition' },
    ],
  },
  {
    id: 'q2', title: 'Financial Health & KPIs',
    core_question: 'What are the revenue and EBITDA trends over the last five years?',
    objective: 'Evaluate performance, trends, and valuation readiness.',
    options: [
      { value: 1, label: 'Declining or negative',          tip: 'Losses / unaudited' },
      { value: 2, label: 'Flat or inconsistent',           tip: 'Limited visibility' },
      { value: 3, label: 'Stable, limited growth',         tip: 'Some metrics missing' },
      { value: 4, label: 'Positive & verified',            tip: 'Reviewed/audited growth' },
      { value: 5, label: 'Strong, clean, audited growth',  tip: 'Consistent YoY' },
    ],
  },
  {
    id: 'q3', title: 'Competitive Advantage',
    core_question: 'What differentiates this business from competitors?',
    objective: 'Identify defensibility and positioning.',
    options: [
      { value: 1, label: 'No clear differentiator',         tip: 'Price-only competition' },
      { value: 2, label: 'Weak or generic USP',             tip: 'Limited brand/loyalty' },
      { value: 3, label: 'Some differentiation',            tip: 'Emerging IP or niche' },
      { value: 4, label: 'Strong USP/defensibility',        tip: 'Contracts/certs/process' },
      { value: 5, label: 'Distinct, defensible advantage',  tip: 'Patents/IP, lock-in' },
    ],
  },
  {
    id: 'q4', title: 'Operational Readiness',
    core_question: 'How structured and independent are operations and management?',
    objective: 'Assess maturity and scalability.',
    options: [
      { value: 1, label: 'Owner-dependent, no systems',      tip: 'Everything founder-led' },
      { value: 2, label: 'Basic systems, frequent issues',   tip: 'Undocumented, turnover' },
      { value: 3, label: 'Partially structured',             tip: 'Some systems, limited delegation' },
      { value: 4, label: 'Documented systems, strong team',  tip: 'SOPs + leadership' },
      { value: 5, label: 'Autonomous & scalable ops',        tip: 'ERP/CRM; runs w/o owner' },
    ],
  },
  {
    id: 'q5', title: 'Growth Opportunities',
    core_question: 'What future growth opportunities exist?',
    objective: 'Assess scalability & forward potential.',
    options: [
      { value: 1, label: 'No clear growth plan',           tip: 'Shrinking market' },
      { value: 2, label: 'Limited ideas, weak strategy',   tip: 'Competition rising' },
      { value: 3, label: 'Some potential',                  tip: 'Early ideas; unclear exec' },
      { value: 4, label: 'Defined, actionable plan',       tip: 'New markets/products' },
      { value: 5, label: 'Proven & validated pipeline',    tip: 'Track record of scaling' },
    ],
  },
  {
    id: 'q6', title: 'Risks & Liabilities',
    core_question: 'Any outstanding liabilities, legal issues, or dependencies?',
    objective: 'Reveal hidden risks.',
    options: [
      { value: 1, label: 'Major unresolved risks',      tip: 'Lawsuits; 1 client >50%' },
      { value: 2, label: 'Multiple moderate risks',     tip: 'Compliance/tax gaps' },
      { value: 3, label: 'Minor manageable risks',      tip: 'Known & controlled' },
      { value: 4, label: 'Low-risk profile',            tip: 'Standard obligations' },
      { value: 5, label: 'Clean & diversified',         tip: 'No disputes or deps' },
    ],
  },
] as const;

// ── Assessment Logic ───────────────────────────────────────────────────────
function computeTier(total: number): SaleabilityTier {
  if (total >= 25) return 'Highly Saleable';
  if (total >= 19) return 'Saleable with Minor Adjustments';
  if (total >= 13) return 'Needs Improvement / Risky';
  return 'Poor Saleability';
}

function quadrantFromAxes(readiness: number, attractiveness: number): Quadrant {
  const hi = (x: number) => x >= CONFIG.axisMidline;
  if (hi(readiness) && hi(attractiveness))  return 'Ideal Sale';
  if (!hi(readiness) && hi(attractiveness)) return 'Strategic Fix';
  if (hi(readiness) && !hi(attractiveness)) return 'Risky Sale';
  return 'Hard to Sell';
}

function computeGateResult(total: number, minEach: number, quadrant: Quadrant): GateResult {
  if (total >= CONFIG.passMinTotal && minEach >= CONFIG.passMinEach && (quadrant === 'Ideal Sale' || quadrant === 'Strategic Fix')) return 'PASS';
  if (total <= CONFIG.failMaxTotal || minEach === CONFIG.failMinEach || quadrant === 'Hard to Sell') return 'FAIL';
  return 'BORDERLINE';
}

function flagsFromScores(s: QuestionScore): InternalFlags {
  return {
    redFlagFinancials:  s.q2 <= 2,
    redFlagOps:         s.q4 <= 2,
    redFlagRisk:        s.q6 <= 2,
    concentrationRisk:  s.q6 <= 3,
    ownerDependence:    s.q4 <= 3,
    weakUSP:            s.q3 <= 3,
    weakGrowth:         s.q5 <= 3,
    motivationConcern:  s.q1 <= 2,
  };
}

function generateClientSummary(gate: GateResult, total: number, tier: SaleabilityTier, quadrant: Quadrant): ClientSummary {
  const scoreLine = `Overall Score: ${total}/30 — ${tier}`;
  if (gate === 'PASS') return {
    title: 'Strong Saleability', scoreLine, quadrant,
    message: "Your business demonstrates strong readiness and attractiveness to buyers based on our assessment. We'd like to proceed with next steps to explore a potential engagement.",
    cta: { label: 'Book a next-step call' },
  };
  if (gate === 'BORDERLINE') return {
    title: 'Saleable with Caveats', scoreLine, quadrant,
    message: 'Your business meets several saleability criteria. Before we proceed, we recommend a short call to discuss considerations that could influence buyer confidence and deal structure.',
    cta: { label: 'Schedule a review call' },
  };
  return {
    title: 'Not Proceeding at This Time', scoreLine, quadrant,
    message: "Thank you for your time. Based on our criteria, we're unable to proceed right now. If circumstances change or new information becomes available, we're happy to reassess.",
    cta: { label: 'Share updates in future' },
  };
}

function calculateAssessment(company: CompanyMetadata, scores: QuestionScore, notes: QuestionNotes): AssessmentResponse {
  const totalScore   = Object.values(scores).reduce((a, b) => a + b, 0);
  const minEach      = Math.min(...Object.values(scores));
  const readiness    = (scores.q2 + scores.q4 + scores.q6) / 3;
  const attractiveness = (scores.q1 + scores.q3 + scores.q5) / 3;
  const tier         = computeTier(totalScore);
  const quadrant     = quadrantFromAxes(readiness, attractiveness);
  const gateResult   = computeGateResult(totalScore, minEach, quadrant);
  const internalFlags = flagsFromScores(scores);
  const clientSummary = generateClientSummary(gateResult, totalScore, tier, quadrant);
  return {
    assessmentId: `EP-${Date.now().toString(36).toUpperCase()}`,
    computed: { totalScore, tier, readiness, attractiveness, quadrant, gateResult, internalFlags },
    clientSummary,
    scores, notes, company,
  };
}

// ── Header ─────────────────────────────────────────────────────────────────
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
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: scrolled ? 'rgba(245,240,228,0.97)' : CR, borderBottom: `1px solid ${BD}`, backdropFilter: scrolled ? 'blur(8px)' : 'none', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 700, color: GL }}>Exit</span>
          <span style={{ fontFamily: serif, fontSize: '1.5rem', fontWeight: 600, color: MA }}>Path</span>
          <span style={{ fontFamily: sans, fontSize: '0.63rem', fontWeight: 500, color: TM, marginLeft: '0.3rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Global</span>
        </a>
        <nav className="sa-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {links.map(l => <a key={l.href} href={l.href} style={{ fontFamily: sans, fontSize: '1rem', fontWeight: 500, color: TM, textDecoration: 'none' }}>{l.label}</a>)}
          <a href="/#contact" style={{ fontFamily: sans, fontSize: '1rem', fontWeight: 600, color: CR, background: MA, padding: '0.5rem 1.25rem', textDecoration: 'none' }}>Start a Conversation</a>
        </nav>
        <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="sa-mobile-btn"
          style={{ background: 'none', border: `1px solid ${BD}`, cursor: 'pointer', padding: '8px 10px', display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 44, height: 44 }}>
          {open ? (
            <><span style={{ display: 'block', width: 22, height: 2, background: MA, transform: 'rotate(45deg) translate(5px,5px)', transition: 'all 0.2s' }} /><span style={{ display: 'block', width: 22, height: 2, background: MA, opacity: 0 }} /><span style={{ display: 'block', width: 22, height: 2, background: MA, transform: 'rotate(-45deg) translate(5px,-5px)', transition: 'all 0.2s' }} /></>
          ) : (
            <><span style={{ display: 'block', width: 22, height: 2, background: MA }} /><span style={{ display: 'block', width: 22, height: 2, background: MA }} /><span style={{ display: 'block', width: 22, height: 2, background: MA }} /></>
          )}
        </button>
      </div>
      {open && (
        <div style={{ background: CR, borderTop: `1px solid ${BD}`, padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: sans, fontSize: '1rem', color: MA, textDecoration: 'none' }}>{l.label}</a>)}
          <a href="/#contact" onClick={() => setOpen(false)} style={{ fontFamily: sans, fontSize: '0.9rem', fontWeight: 600, color: CR, background: MA, padding: '0.75rem', textDecoration: 'none', textAlign: 'center' }}>Start a Conversation</a>
        </div>
      )}
    </header>
  );
}

// ── Quadrant Chart ─────────────────────────────────────────────────────────
function QuadrantChart({ readiness, attractiveness }: { readiness: number; attractiveness: number }) {
  const W = 220; const H = 220; const PAD = 28;
  const plotW = W - PAD * 2; const plotH = H - PAD * 2;
  // readiness → X, attractiveness → Y (inverted: high = top)
  const dotX = PAD + ((readiness - 1) / 4) * plotW;
  const dotY = PAD + ((5 - attractiveness) / 4) * plotH;
  const midX = PAD + plotW / 2; const midY = PAD + plotH / 2;

  const quadrantColors: Record<string, string> = {
    'Ideal Sale':    'rgba(188,156,34,0.08)',
    'Strategic Fix': 'rgba(188,156,34,0.04)',
    'Risky Sale':    'rgba(80,21,8,0.04)',
    'Hard to Sell':  'rgba(80,21,8,0.08)',
  };
  const q = quadrantFromAxes(readiness, attractiveness);

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontFamily: sans, fontSize: '0.7rem', fontWeight: 600, color: GO, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Positioning Quadrant</p>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', margin: '0 auto' }}>
        {/* Quadrant fills */}
        <rect x={PAD} y={PAD} width={plotW/2} height={plotH/2} fill={quadrantColors['Strategic Fix']} />
        <rect x={midX} y={PAD} width={plotW/2} height={plotH/2} fill={quadrantColors['Ideal Sale']} />
        <rect x={PAD} y={midY} width={plotW/2} height={plotH/2} fill={quadrantColors['Hard to Sell']} />
        <rect x={midX} y={midY} width={plotW/2} height={plotH/2} fill={quadrantColors['Risky Sale']} />
        {/* Border + axes */}
        <rect x={PAD} y={PAD} width={plotW} height={plotH} fill="none" stroke={BD} strokeWidth={1} />
        <line x1={midX} y1={PAD} x2={midX} y2={PAD+plotH} stroke={BD} strokeWidth={1} strokeDasharray="3 3" />
        <line x1={PAD} y1={midY} x2={PAD+plotW} y2={midY} stroke={BD} strokeWidth={1} strokeDasharray="3 3" />
        {/* Quadrant labels */}
        <text x={PAD+plotW*0.25} y={PAD+14} textAnchor="middle" fontFamily={sans} fontSize={8} fill={TM}>Strategic Fix</text>
        <text x={PAD+plotW*0.75} y={PAD+14} textAnchor="middle" fontFamily={sans} fontSize={8} fill={GO}>Ideal Sale</text>
        <text x={PAD+plotW*0.25} y={PAD+plotH-6} textAnchor="middle" fontFamily={sans} fontSize={8} fill={TM}>Hard to Sell</text>
        <text x={PAD+plotW*0.75} y={PAD+plotH-6} textAnchor="middle" fontFamily={sans} fontSize={8} fill={TM}>Risky Sale</text>
        {/* Axis labels */}
        <text x={W/2} y={H-4} textAnchor="middle" fontFamily={sans} fontSize={7} fill={TM}>← Readiness to Sell →</text>
        <text x={8} y={H/2} textAnchor="middle" fontFamily={sans} fontSize={7} fill={TM} transform={`rotate(-90,8,${H/2})`}>← Attractiveness →</text>
        {/* Dot */}
        <circle cx={dotX} cy={dotY} r={7} fill={MA} opacity={0.9} />
        <circle cx={dotX} cy={dotY} r={3} fill={GL} />
      </svg>
      <p style={{ fontFamily: sans, fontSize: '0.75rem', fontWeight: 600, color: q === 'Ideal Sale' ? GO : MA, marginTop: '0.25rem' }}>{q}</p>
    </div>
  );
}

// ── Question Card ──────────────────────────────────────────────────────────
function QuestionCard({
  question, score, note, onScoreChange, onNoteChange, showNotes,
}: {
  question: typeof QUESTIONS[number];
  score: number; note: string;
  onScoreChange: (v: number) => void;
  onNoteChange: (v: string) => void;
  showNotes: boolean;
}) {
  return (
    <div style={{ background: '#fff', border: `1px solid ${BD}`, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{question.title}</p>
        <p style={{ fontFamily: serif, fontSize: '1.05rem', fontWeight: 600, color: MA, lineHeight: 1.4 }}>{question.core_question}</p>
        <p style={{ fontFamily: sans, fontSize: '0.78rem', color: TM, marginTop: '0.25rem', fontStyle: 'italic' }}>{question.objective}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {question.options.map(opt => {
          const selected = score === opt.value;
          return (
            <button key={opt.value} onClick={() => onScoreChange(opt.value)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.55rem 0.75rem', border: `1px solid ${selected ? GO : BD}`,
                background: selected ? `rgba(188,156,34,0.08)` : 'transparent',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
              }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', border: `2px solid ${selected ? GO : BD}`,
                background: selected ? GO : 'transparent', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {selected && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', display: 'block' }} />}
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ fontFamily: sans, fontSize: '0.85rem', fontWeight: selected ? 600 : 400, color: selected ? MA : TX }}>
                  <strong style={{ color: GO }}>{opt.value}</strong> — {opt.label}
                </span>
                <span style={{ display: 'block', fontFamily: sans, fontSize: '0.72rem', color: TM }}>{opt.tip}</span>
              </span>
            </button>
          );
        })}
      </div>
      {showNotes && (
        <div>
          <label style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 700, color: TM, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
            Internal Note (Private)
          </label>
          <textarea
            rows={2} value={note} onChange={e => onNoteChange(e.target.value)}
            placeholder="Add rationale or evidence..."
            style={{ width: '100%', fontFamily: sans, fontSize: '0.85rem', color: TX, background: '#FBF8F3', border: `1px solid ${BD}`, padding: '0.5rem 0.75rem', resize: 'vertical', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>
      )}
    </div>
  );
}

// ── Gate Result Badge ──────────────────────────────────────────────────────
function GateBadge({ gate }: { gate: GateResult }) {
  const colors: Record<GateResult, { bg: string; color: string; label: string }> = {
    PASS:       { bg: 'rgba(34,139,34,0.1)', color: '#1a6b1a', label: '✓ PASS' },
    BORDERLINE: { bg: 'rgba(188,156,34,0.1)', color: '#7a6010', label: '◐ BORDERLINE' },
    FAIL:       { bg: 'rgba(80,21,8,0.1)',   color: MA, label: '✕ FAIL' },
  };
  const c = colors[gate];
  return (
    <span style={{ fontFamily: sans, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', padding: '0.3rem 0.75rem', background: c.bg, color: c.color, display: 'inline-block' }}>
      {c.label}
    </span>
  );
}

// ── Score Bar ──────────────────────────────────────────────────────────────
function ScoreBar({ score, max = 5, label }: { score: number; max?: number; label: string }) {
  const pct = ((score - 1) / (max - 1)) * 100;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
        <span style={{ fontFamily: sans, fontSize: '0.78rem', color: TM }}>{label}</span>
        <span style={{ fontFamily: sans, fontSize: '0.78rem', fontWeight: 600, color: MA }}>{score.toFixed(1)}</span>
      </div>
      <div style={{ height: 6, background: BD, position: 'relative' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: GO, transition: 'width 0.4s ease' }} />
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
const INITIAL_SCORES: QuestionScore = { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0 };

export default function SaleabilityAssessmentPage() {
  const [company, setCompany] = useState<CompanyMetadata>({ name: '', email: '', sector: '', country: '' });
  const [scores, setScores]   = useState<QuestionScore>(INITIAL_SCORES);
  const [notes, setNotes]     = useState<QuestionNotes>({});
  const [result, setResult]   = useState<AssessmentResponse | null>(null);
  const [validationError, setValidationError] = useState('');
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});

  const handleCalculate = () => {
    if (!company.name.trim()) {
      setValidationError('Please enter a company name before calculating.');
      return;
    }
    if (!company.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(company.email)) {
      setValidationError('Please enter a valid email address before calculating.');
      return;
    }
    const unanswered = QUESTIONS.filter(q => scores[q.id as keyof QuestionScore] === 0);
    if (unanswered.length > 0) {
      setValidationError(`Please answer all questions before calculating. Missing: ${unanswered.map(q => q.title).join(', ')}.`);
      return;
    }
    setValidationError('');
    setResult(calculateAssessment(company, scores, notes));
    setTimeout(() => {
      document.getElementById('sa-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setCompany({ name: '', email: '', sector: '', country: '' });
    setScores(INITIAL_SCORES);
    setNotes({});
    setResult(null);
    setValidationError('');
    setTouched({});
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', fontFamily: sans, fontSize: '0.9rem', color: TX,
    background: '#FBF8F3', border: `1px solid ${BD}`, padding: '0.6rem 0.75rem',
    outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: sans, fontSize: '0.65rem', fontWeight: 700, color: MA,
    letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem',
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .sa-desktop-nav { display: none !important; }
          .sa-mobile-btn  { display: flex !important; }
          .sa-q-grid      { grid-template-columns: 1fr !important; }
          .sa-meta-grid   { grid-template-columns: 1fr !important; }
          .sa-results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: CR, minHeight: '100vh', fontFamily: sans, color: TX, display: 'flex', flexDirection: 'column' }}>
        <SiteHeader />

        <main style={{ flex: 1, paddingTop: '6rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

            {/* Page Header */}
            <div style={{ marginBottom: '3rem', borderBottom: `1px solid ${BD}`, paddingBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                  <span style={{ fontFamily: sans, fontSize: '0.7rem', fontWeight: 700, color: GO, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Internal Tool</span>
                  <h1 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: MA, lineHeight: 1.2, marginBottom: '0.5rem' }}>
                    Saleability Score™
                  </h1>
                  <p style={{ fontFamily: sans, fontSize: '1rem', color: TM, lineHeight: 1.7, maxWidth: 560 }}>
                    Score how ready and attractive a business is to sell. Rate each of the six dimensions from 1 (weak) to 5 (strong).
                  </p>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div style={{ background: '#fff', border: `1px solid ${BD}`, padding: '1.5rem', marginBottom: '2rem' }}>
              <p style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Company Details</p>
              <div className="sa-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Company Name <span style={{ color: '#b91c1c' }}>*</span></label>
                  <input type="text" required placeholder="e.g., Acme Inc." value={company.name}
                    onChange={e => setCompany(p => ({ ...p, name: e.target.value }))}
                    onBlur={() => setTouched(p => ({ ...p, name: true }))}
                    style={{ ...inputStyle, borderColor: touched.name && !company.name.trim() ? `rgba(185,28,28,0.5)` : BD }} />
                </div>
                <div>
                  <label style={labelStyle}>Email <span style={{ color: '#b91c1c' }}>*</span></label>
                  <input type="email" required placeholder="e.g., name@company.com" value={company.email}
                    onChange={e => setCompany(p => ({ ...p, email: e.target.value }))}
                    onBlur={() => setTouched(p => ({ ...p, email: true }))}
                    style={{ ...inputStyle, borderColor: touched.email && (!company.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(company.email)) ? `rgba(185,28,28,0.5)` : BD }} />
                </div>
                <div>
                  <label style={labelStyle}>Sector</label>
                  <input type="text" placeholder="e.g., SaaS, Retail" value={company.sector || ''}
                    onChange={e => setCompany(p => ({ ...p, sector: e.target.value }))} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Country</label>
                  <input type="text" placeholder="e.g., Singapore" value={company.country || ''}
                    onChange={e => setCompany(p => ({ ...p, country: e.target.value }))} style={inputStyle} />
                </div>
              </div>
            </div>

            {/* Assessment Dimensions */}
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Assessment Dimensions</p>
              <div className="sa-q-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {QUESTIONS.map(q => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    score={scores[q.id as keyof QuestionScore]}
                    note={notes[q.id] || ''}
                    onScoreChange={v => setScores(p => ({ ...p, [q.id]: v }))}
                    onNoteChange={v => setNotes(p => ({ ...p, [q.id]: v }))}
                    showNotes={false}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ margin: '2rem 0' }}>
            {validationError && (
              <p style={{ fontFamily: sans, fontSize: '0.85rem', color: '#b91c1c', marginBottom: '0.75rem', textAlign: 'right' }}>
                {validationError}
              </p>
            )}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={handleReset}
                style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 500, color: MA, background: 'transparent', border: `1px solid ${BD}`, padding: '0.75rem 1.75rem', cursor: 'pointer' }}>
                Reset
              </button>
              <button onClick={handleCalculate}
                style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: CR, background: MA, border: 'none', padding: '0.75rem 2rem', cursor: 'pointer' }}>
                Calculate Saleability Score
              </button>
            </div>
            </div>

            {/* Results */}
            {result && (
              <div id="sa-results" style={{ borderTop: `2px solid ${BD}`, paddingTop: '3rem', marginTop: '1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span style={{ fontFamily: sans, fontSize: '0.7rem', fontWeight: 700, color: GO, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Assessment Results</span>
                  <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, color: MA }}>
                    {result.company.name ? `Results for ${result.company.name}` : 'Assessment Complete'}
                  </h2>
                  <p style={{ fontFamily: sans, fontSize: '0.8rem', color: TM, marginTop: '0.5rem' }}>ID: {result.assessmentId}</p>
                </div>

                <div className="sa-results-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

                  {/* Client Summary */}
                  <div>
                    {/* Score hero */}
                    <div style={{ background: '#fff', border: `1px solid ${BD}`, padding: '2rem', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                          <GateBadge gate={result.computed.gateResult} />
                          <h3 style={{ fontFamily: serif, fontSize: '1.7rem', fontWeight: 700, color: MA, marginTop: '0.75rem', marginBottom: '0.25rem' }}>{result.clientSummary.title}</h3>
                          <p style={{ fontFamily: sans, fontSize: '0.9rem', color: TM }}>{result.clientSummary.scoreLine}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontFamily: serif, fontSize: '3.5rem', fontWeight: 700, color: GO, lineHeight: 1 }}>{result.computed.totalScore}</span>
                          <span style={{ fontFamily: sans, fontSize: '1.2rem', color: TM }}>/30</span>
                          <p style={{ fontFamily: sans, fontSize: '0.78rem', color: TM, marginTop: '0.25rem' }}>{result.computed.tier}</p>
                        </div>
                      </div>
                      <p style={{ fontFamily: sans, fontSize: '0.95rem', color: TM, lineHeight: 1.8, marginBottom: '1.5rem' }}>{result.clientSummary.message}</p>
                      <a href="/#contact" style={{ fontFamily: sans, fontSize: '0.875rem', fontWeight: 600, color: CR, background: MA, padding: '0.75rem 1.75rem', textDecoration: 'none', display: 'inline-block' }}>
                        {result.clientSummary.cta.label} →
                      </a>
                    </div>

                    {/* Axes + Quadrant */}
                    <div style={{ background: '#fff', border: `1px solid ${BD}`, padding: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <QuadrantChart readiness={result.computed.readiness} attractiveness={result.computed.attractiveness} />
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <p style={{ fontFamily: sans, fontSize: '0.65rem', fontWeight: 700, color: GO, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Axis Breakdown</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <ScoreBar score={result.computed.readiness} label="Readiness to Sell (q2 · q4 · q6)" />
                          <ScoreBar score={result.computed.attractiveness} label="Attractiveness to Buyers (q1 · q3 · q5)" />
                        </div>
                        <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {QUESTIONS.map(q => (
                            <div key={q.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ fontFamily: sans, fontSize: '0.78rem', color: TM }}>{q.title}</span>
                              <span style={{ fontFamily: sans, fontSize: '0.78rem', fontWeight: 700, color: MA }}>{scores[q.id as keyof QuestionScore]}/5</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

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
