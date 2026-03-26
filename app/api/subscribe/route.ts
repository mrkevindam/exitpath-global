import { NextRequest, NextResponse } from 'next/server'

// Kit public form ID — no API key needed for subscriptions
const KIT_FORM_ID = '9250037'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Use Kit's public subscription endpoint — no auth required
    const params = new URLSearchParams({ email_address: email })
    if (firstName) params.append('first_name', firstName)

    const res = await fetch(
      `https://app.convertkit.com/forms/${KIT_FORM_ID}/subscriptions`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }
    )

    if (!res.ok) {
      const text = await res.text()
      console.error('Kit subscribe error:', res.status, text)
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
