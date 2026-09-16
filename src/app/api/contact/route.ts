import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function isValidPhone(value: string) {
  const v = value.trim().replace(/\s+/g, '')
  return /^0\d{9}$/.test(v) || /^\+\d{7,15}$/.test(v)
}

export async function POST(request: Request) {
  const { firstName, name, email, phone, company, jobTitle, message, website } = await request.json()

  // Honeypot field filled in => bot. Pretend success without sending anything.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!firstName || !name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: 'Numéro de téléphone invalide' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !to) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set — brief not sent.', {
      firstName,
      name,
      email,
      phone,
      company,
      jobTitle,
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
      subject: `Nouveau brief — ${firstName} ${name}`,
      text: [
        `Prénom : ${firstName}`,
        `Nom : ${name}`,
        `Email : ${email}`,
        `Téléphone : ${phone}`,
        company ? `Entreprise : ${company}` : null,
        jobTitle ? `Fonction : ${jobTitle}` : null,
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
