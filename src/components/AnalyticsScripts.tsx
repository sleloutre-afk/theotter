'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_UPDATED_EVENT, getConsent, type CookieConsent } from '@/lib/cookieConsent'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

/**
 * Loads Google Analytics and/or Meta Pixel only once the visitor has
 * actually consented to each — never before. Re-evaluates live whenever
 * the cookie banner or the preferences page updates the stored consent,
 * so accepting later in the same session starts tracking immediately,
 * with no reload required.
 */
export default function AnalyticsScripts() {
  const [consent, setLocalConsent] = useState<CookieConsent | null>(null)

  useEffect(() => {
    setLocalConsent(getConsent())
    const onUpdate = (e: Event) => setLocalConsent((e as CustomEvent<CookieConsent>).detail)
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate)
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate)
  }, [])

  const analyticsAllowed = consent?.analytics && GA_ID
  const marketingAllowed = consent?.marketing && META_PIXEL_ID

  return (
    <>
      {analyticsAllowed && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {marketingAllowed && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  )
}
