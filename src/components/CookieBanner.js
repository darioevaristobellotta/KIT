'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShowClass, setHasShowClass] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics_consent');

    if (!consent) {
      setIsVisible(true);
      const timer = requestAnimationFrame(() => {
        setHasShowClass(true);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: consent === 'granted' ? 'consent_granted' : 'consent_denied',
        analytics_storage: consent,
      });

      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'analytics_storage': consent
        });
      }
    }
  }, []);

  const closeBanner = () => {
    setHasShowClass(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleAccept = () => {
    localStorage.setItem('analytics_consent', 'granted');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_granted',
      analytics_storage: 'granted',
    });

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    closeBanner();
  };

  const handleDecline = () => {
    localStorage.setItem('analytics_consent', 'denied');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_denied',
      analytics_storage: 'denied',
    });

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }

    closeBanner();
  };

  if (!isVisible) return null;

  return (
    <div
      id="cookie-banner"
      className={hasShowClass ? 'show' : ''}
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
    >
      <p id="cookie-banner-title" className="sr-only">Cookie Consent Banner</p>
      <p>
        To provide the best experiences, we use technologies like cookies to store and/or access device information.
        <br />
        <br />
        <Link href="/privacy-policy" target="_blank">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/imprint" target="_blank">
          Imprint
        </Link>
      </p>
      <div className="button-row">
        <button id="cookie-decline" onClick={handleDecline}>
          Decline
        </button>
        <button id="cookie-accept" onClick={handleAccept}>
          Accept all
        </button>
      </div>
    </div>
  );
}
