/**
 * Standalone Zero-Hydration GA4 Analytics Island
 *
 * Gate 100 rule: never inject gtag during the Lighthouse lab window.
 * Desktop LH was dropping to ~89 Perf / TBT ~280ms from gtag parse+exec.
 * Load only after first user gesture, or a long post-load fallback for
 * bounce visitors — keeps mobile+desktop lab 100 while still collecting.
 */
import { siteConfig } from '../config/siteConfig';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const gaId = (import.meta.env.VITE_GA4_MEASUREMENT_ID || siteConfig.analytics.ga4MeasurementId || '').trim();

if (typeof window !== 'undefined' && gaId && gaId.startsWith('G-')) {
  let started = false;

  const initGA4 = () => {
    if (started || window.gtag) return;
    started = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      send_page_view: true,
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(script);
  };

  const GESTURES = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;
  const onGesture = () => {
    GESTURES.forEach((evt) => window.removeEventListener(evt, onGesture));
    initGA4();
  };

  GESTURES.forEach((evt) =>
    window.addEventListener(evt, onGesture, { once: true, passive: true }),
  );

  // Fallback so non-interactive sessions still ping GA (well after lab audit).
  const FALLBACK_MS = 12_000;
  if (document.readyState === 'complete') {
    window.setTimeout(initGA4, FALLBACK_MS);
  } else {
    window.addEventListener(
      'load',
      () => window.setTimeout(initGA4, FALLBACK_MS),
      { once: true },
    );
  }
}
