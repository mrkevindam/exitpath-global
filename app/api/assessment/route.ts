import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const QUESTION_TITLES: Record<string, string> = {
  q1: 'Motivation to Sell',
  q2: 'Financial Health & KPIs',
  q3: 'Competitive Advantage',
  q4: 'Operational Readiness',
  q5: 'Growth Opportunities',
  q6: 'Risks & Liabilities',
};

const GATE_COLORS: Record<string, string> = {
  PASS:       '#16a34a',
  BORDERLINE: '#d97706',
  FAIL:       '#b91c1c',
};

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      assessmentId, companyName, email, sector, country,
      q1, q2, q3, q4, q5, q6,
      totalScore, tier, quadrant, gateResult, readiness, attractiveness,
    } = data;

    const notifyEmail = process.env.ASSESSMENT_NOTIFY_EMAIL;
    if (!notifyEmail) {
      return NextResponse.json({ error: 'Notify email not configured' }, { status: 500 });
    }

    const gateColor = GATE_COLORS[gateResult] ?? '#501508';
    const scores = { q1, q2, q3, q4, q5, q6 };

    const scoreRows = Object.entries(scores)
      .map(([key, val]) => `
        <tr>
          <td style="padding:6px 12px;border-bottom:1px solid #f0ebe0;color:#6B5040;font-size:13px;">${QUESTION_TITLES[key]}</td>
          <td style="padding:6px 12px;border-bottom:1px solid #f0ebe0;font-weight:700;color:#501508;font-size:13px;text-align:center;">${val}/5</td>
        </tr>`)
      .join('');

    const html = `
      <div style="font-family:'Helvetica Neue',sans-serif;max-width:600px;margin:0 auto;background:#F5F0E4;padding:32px;">
        <div style="background:#501508;padding:24px 32px;margin-bottom:0;">
          <h1 style="color:#D4AF37;font-size:22px;margin:0;font-weight:700;">ExitPath Global</h1>
          <p style="color:rgba(245,240,228,0.7);font-size:13px;margin:4px 0 0;">New Saleability Score™ Submission</p>
        </div>

        <div style="background:#fff;padding:24px 32px;border:1px solid #DDD6C8;border-top:none;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
            <div>
              <h2 style="color:#501508;font-size:20px;margin:0 0 4px;">${companyName}</h2>
              <p style="color:#6B5040;font-size:13px;margin:0;">${email}${sector ? ` · ${sector}` : ''}${country ? ` · ${country}` : ''}</p>
              <p style="color:#999;font-size:11px;margin:6px 0 0;">ID: ${assessmentId}</p>
            </div>
            <div style="text-align:right;">
              <span style="display:inline-block;background:${gateColor};color:#fff;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:0.1em;">${gateResult}</span>
              <p style="color:#501508;font-size:28px;font-weight:700;margin:8px 0 0;">${totalScore}<span style="font-size:14px;color:#6B5040;">/30</span></p>
              <p style="color:#6B5040;font-size:12px;margin:2px 0 0;">${tier}</p>
            </div>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <thead>
              <tr style="background:#F5F0E4;">
                <th style="padding:8px 12px;text-align:left;font-size:11px;color:#BC9C22;letter-spacing:0.1em;text-transform:uppercase;">Dimension</th>
                <th style="padding:8px 12px;text-align:center;font-size:11px;color:#BC9C22;letter-spacing:0.1em;text-transform:uppercase;">Score</th>
              </tr>
            </thead>
            <tbody>${scoreRows}</tbody>
          </table>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="background:#F5F0E4;padding:12px 16px;">
              <p style="font-size:11px;color:#BC9C22;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">Quadrant</p>
              <p style="font-size:14px;font-weight:600;color:#501508;margin:0;">${quadrant}</p>
            </div>
            <div style="background:#F5F0E4;padding:12px 16px;">
              <p style="font-size:11px;color:#BC9C22;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">Axes</p>
              <p style="font-size:13px;color:#501508;margin:0;">Readiness: <strong>${Number(readiness).toFixed(2)}</strong> · Attractiveness: <strong>${Number(attractiveness).toFixed(2)}</strong></p>
            </div>
          </div>
        </div>

        <p style="color:#6B5040;font-size:11px;text-align:center;margin:0;">ExitPath Global · exitpath.global</p>
      </div>
    `;

    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    await Promise.all([
      resend.emails.send({
        from: 'noreply@exitpath.global',
        to: [notifyEmail, 'enquiries@exitpath.global'],
        subject: `[${gateResult}] New Saleability Score™ — ${companyName} (${totalScore}/30)`,
        html,
      }),
      sheetsUrl
        ? fetch(sheetsUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              assessmentId, companyName, email, sector, country,
              q1, q2, q3, q4, q5, q6,
              totalScore, tier, quadrant, gateResult, readiness, attractiveness,
            }),
          }).catch(err => console.error('Sheets webhook error:', err))
        : Promise.resolve(),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Assessment notify error:', err);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
