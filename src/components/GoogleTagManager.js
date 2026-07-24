'use client';

import Script from 'next/script';

/**
 * GoogleTagManager Component
 * 
 * Modular, zero-overhead GTM & Consent Mode loader for Next.js App Router.
 * - Uses strategy="lazyOnload" to prevent blocking initial page rendering or Core Web Vitals.
 * - Automatically initializes GTM Consent Mode defaults (denied until user consent via CookieBanner).
 * - Only renders script tags if a valid GTM ID is provided via prop or NEXT_PUBLIC_GTM_ID env variable.
 */
export default function GoogleTagManager({ gtmId = process.env.NEXT_PUBLIC_GTM_ID }) {
  if (!gtmId) return null;

  return (
    <>
      {/* Default Consent Mode Configuration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });

            try {
              var consent = localStorage.getItem('analytics_consent');
              if (consent) {
                gtag('consent', 'update', {
                  'analytics_storage': consent
                });
              }
            } catch (e) {}
          `,
        }}
      />

      {/* Asynchronous Lazy-loaded GTM Script */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  );
}
