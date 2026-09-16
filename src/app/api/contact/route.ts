import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const { name, email, phone, message, company } = await request.json()

  // Honeypot field filled in => bot. Pretend success without sending anything.
  if (company) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !to) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set — brief not sent.', {
      name,
      email,
      phone,
      message,
    })
    return NextResponse.json({ error: 'Service de contact non configuré' }, { status: 503 })
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: 'The Otter <brief@theotter.fr>',
      to,
      replyTo: email,
      subject: `Nouveau brief — ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form: failed to send email', err)
    return NextResponse.json({ error: 'Envoi impossible' }, { status: 502 })
  }
}
