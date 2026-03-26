import { NextRequest, NextResponse } from 'next/server'

const KIT_FORM_ID = '9250037'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const apiKey = process.env.CONVERTKIT_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const res = await fetch(`https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        ...(firstName ? { first_name: firstName } : {}),
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Kit API error:', err)
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
