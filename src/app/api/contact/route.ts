import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2).max(80),
  email:   z.string().email(),
  phone:   z.string().min(6).max(20),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(600),
})

export async function POST(req: NextRequest) {
  try {
    const parsed = schema.safeParse(await req.json())
    if (!parsed.success) return NextResponse.json({ error: 'Invalid' }, { status: 400 })
    const wh = process.env.CONTACT_WEBHOOK_URL
    if (wh) {
      await fetch(wh, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, ts: new Date().toISOString() }),
      })
    } else {
      console.log('[contact]', parsed.data.name, parsed.data.email, parsed.data.phone)
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error' }, { status: 500 })
  }
}
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
