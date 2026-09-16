const COLORS = {
  ink: '#0a1520',
  navy: '#0f2136',
  paper: '#f8f6f1',
  paperDim: '#efeae1',
  copper: '#c17a3f',
  mist: '#66717d',
}

const LOGO_URL = 'https://theotter.fr/brand/theotter-logo.png'

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function renderConfirmationEmail({
  firstName,
  message,
  company,
  jobTitle,
}: {
  firstName: string
  message: string
  company?: string | null
  jobTitle?: string | null
}) {
  const recapLines = [
    company ? `<p style="margin:0 0 4px;color:${COLORS.mist};font-size:13px;">Entreprise&nbsp;: ${escapeHtml(company)}</p>` : '',
    jobTitle ? `<p style="margin:0 0 4px;color:${COLORS.mist};font-size:13px;">Fonction&nbsp;: ${escapeHtml(jobTitle)}</p>` : '',
  ].join('')
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  const html = `<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:0;background:${COLORS.paperDim};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.paperDim};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${COLORS.paper};border-radius:16px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
            <tr>
              <td style="background:${COLORS.navy};padding:36px 40px;text-align:center;">
                <img src="${LOGO_URL}" width="200" height="39" alt="The Otter" style="display:block;margin:0 auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="background:${COLORS.copper};height:4px;line-height:4px;font-size:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <span style="display:block;color:${COLORS.copper};font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:12px;">
                  Brief bien reçu
                </span>
                <h1 style="margin:0 0 16px;color:${COLORS.ink};font-size:22px;line-height:1.3;font-weight:700;">
                  Merci ${escapeHtml(firstName)}, votre brief est bien arrivé.
                </h1>
                <p style="margin:0 0 24px;color:${COLORS.ink};font-size:14px;line-height:1.6;">
                  Nous revenons vers vous avec les premières questions sous 24h. Voici un
                  récapitulatif de votre message.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.paperDim};border-radius:12px;margin-bottom:32px;">
                  <tr>
                    <td style="padding:20px 24px;">
                      ${recapLines}
                      <p style="margin:${company || jobTitle ? '10px' : '0'} 0 0;color:${COLORS.ink};font-size:14px;line-height:1.6;">
                        ${safeMessage}
                      </p>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 4px;color:${COLORS.ink};font-size:14px;line-height:1.6;">
                  À très vite,<br /><strong>L&rsquo;équipe The Otter</strong>
                </p>
                <a href="https://theotter.fr" style="color:${COLORS.copper};font-size:13px;text-decoration:underline;">
                  www.theotter.fr
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:${COLORS.navy};padding:28px 40px;text-align:center;">
                <p style="margin:0 0 6px;color:rgba(248,246,241,0.7);font-size:12px;">
                  contact@theotter.fr &middot; 06 60 98 73 94
                </p>
                <p style="margin:0;color:rgba(248,246,241,0.4);font-size:11px;">
                  The Otter &middot; 145 rue Croix de Seguey, 33000 Bordeaux
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  const text = [
    `Merci ${firstName}, votre brief est bien arrivé.`,
    '',
    'Nous revenons vers vous avec les premières questions sous 24h.',
    '',
    company ? `Entreprise : ${company}` : null,
    jobTitle ? `Fonction : ${jobTitle}` : null,
    '',
    message,
    '',
    'À très vite,',
    'L\'équipe The Otter',
    'www.theotter.fr',
    '',
    'contact@theotter.fr · 06 60 98 73 94',
  ]
    .filter((l) => l !== null)
    .join('\n')

  return { html, text }
}
