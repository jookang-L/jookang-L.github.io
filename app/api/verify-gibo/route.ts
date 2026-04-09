import { NextResponse } from 'next/server'

/** GET: 암호 게이트 사용 여부 (클라이언트에 비밀값 노출 없음) */
export async function GET() {
  const enabled = Boolean(process.env.GIBO_LINK_PASSWORD?.trim())
  return NextResponse.json({ gateEnabled: enabled })
}

/** POST: 암호 확인 */
export async function POST(req: Request) {
  const secret = process.env.GIBO_LINK_PASSWORD?.trim()
  if (!secret) {
    return NextResponse.json({ ok: true })
  }

  let body: { password?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (String(body.password ?? '') === secret) {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ ok: false, error: 'wrong_password' }, { status: 401 })
}
