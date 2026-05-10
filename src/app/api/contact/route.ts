import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:      z.string().min(2).max(80),
  company:   z.string().min(1).max(100),
  email:     z.string().email(),
  phone:     z.string().max(20).optional(),
  challenge: z.string().min(10).max(500),
})

export async function POST(req: NextRequest) {
  try {
    const parsed = schema.safeParse(await req.json())
    if (!parsed.success) return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, timestamp: new Date().toISOString() }),
      })
    } else {
      console.log('[contact]', parsed.data.name, parsed.data.email)
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
