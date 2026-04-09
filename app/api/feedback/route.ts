import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL
  const secret = process.env.FEEDBACK_WEBHOOK_SECRET

  if (!scriptUrl || !secret) {
    return NextResponse.json(
      { ok: false, error: 'not_configured' },
      { status: 503 },
    )
  }

  let body: { name?: string; email?: string; category?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const payload = {
    name: String(body.name ?? '').trim(),
    email: String(body.email ?? '').trim(),
    category: String(body.category ?? '').trim(),
    message: String(body.message ?? '').trim(),
    secret,
  }

  let res: Response
  try {
    res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    return NextResponse.json({ ok: false, error: 'upstream_unreachable' }, { status: 502 })
  }

  const text = await res.text()
  let data: { ok?: boolean; error?: string } = {}
  try {
    data = JSON.parse(text) as { ok?: boolean; error?: string }
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_upstream' }, { status: 502 })
  }

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: 'upstream_http' }, { status: 502 })
  }
  if (data.ok === false) {
    return NextResponse.json(
      { ok: false, error: data.error ?? 'rejected' },
      { status: 400 },
    )
  }

  return NextResponse.json({ ok: true })
}
