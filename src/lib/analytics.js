/**
 * Lightweight Event Tracker Helper for Google Tag Manager / Analytics.
 * Safely pushes custom events to window.dataLayer without breaking if GTM is not active.
 * 
 * Usage example:
 *   import { trackEvent } from '@/lib/analytics';
 *   trackEvent('cta_click', { button_name: 'hero_github', page: 'home' });
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
}
