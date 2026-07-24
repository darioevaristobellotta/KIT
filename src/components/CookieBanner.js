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
        Wir nutzen Cookies und ähnliche Technologien, um dir ein optimales Webseiten-Erlebnis zu bieten. 
        Du kannst selbst entscheiden, welche Kategorien du zulassen möchtest.
        <br />
        <br />
        <Link href="/datenschutz" target="_blank">
          Datenschutz
        </Link>{" "}
        |{" "}
        <Link href="/impressum" target="_blank">
          Impressum
        </Link>
      </p>
      <div className="button-row">
        <button id="cookie-decline" onClick={handleDecline}>
          Ablehnen
        </button>
        <button id="cookie-accept" onClick={handleAccept}>
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
