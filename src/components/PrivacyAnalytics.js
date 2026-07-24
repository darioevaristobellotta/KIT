'use client';

import Script from 'next/script';

/**
 * PrivacyAnalytics Component (Plausible / Umami Alternative)
 * 
 * Ultra-lightweight (~1KB), privacy-first analytics loader.
 * - Does not store cookies, 100% GDPR compliant out of the box.
 * - Only loads if NEXT_PUBLIC_PLAUSIBLE_DOMAIN is defined in environment variables.
 */
export default function PrivacyAnalytics({ 
  domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN, 
  scriptUrl = 'https://plausible.io/js/script.js' 
}) {
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src={scriptUrl}
      strategy="afterInteractive"
    />
  );
}
