import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX_FILE_SIZE = 4 * 1024 * 1024
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png']
const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png']

function isValidPhone(value: string) {
  const v = value.trim().replace(/\s+/g, '')
  return /^0\d{9}$/.test(v) || /^\+\d{7,15}$/.test(v)
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isAllowedFile(file: File) {
  const ext = '.' + (file.name.split('.').pop() ?? '').toLowerCase()
  return (ALLOWED_FILE_TYPES.includes(file.type) || ALLOWED_FILE_EXTENSIONS.includes(ext)) && file.size <= MAX_FILE_SIZE
}

export async function POST(request: Request) {
  const formData = await request.formData()

  const firstName = formData.get('firstName') as string | null
  const name = formData.get('name') as string | null
  const email = formData.get('email') as string | null
  const phone = formData.get('phone') as string | null
  const company = formData.get('company') as string | null
  const jobTitle = formData.get('jobTitle') as string | null
  const message = formData.get('message') as string | null
  const website = formData.get('website') as string | null
  const attachment = formData.get('attachment')

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

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
  }

  let attachments: { filename: string; content: Buffer }[] | undefined
  if (attachment instanceof File && attachment.size > 0) {
    if (!isAllowedFile(attachment)) {
      return NextResponse.json({ error: 'Pièce jointe invalide (PDF, JPG ou PNG, 4 Mo max)' }, { status: 400 })
    }
    attachments = [{ filename: attachment.name, content: Buffer.from(await attachment.arrayBuffer()) }]
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
      hasAttachment: !!attachments,
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
      attachments,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form: failed to send email', err)
    return NextResponse.json({ error: 'Envoi impossible' }, { status: 502 })
  }
}
