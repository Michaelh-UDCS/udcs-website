/**
 * Standalone Zero-Hydration GA4 Analytics Island
 * Loads Google Analytics asynchronously after window 'load' or during idle callback,
 * completely avoiding critical path impact to maintain 100/100/100/100 Lighthouse scores.
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
  const initGA4 = () => {
    // Prevent double initialization
    if (window.gtag) return;

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

  // Run when browser is idle or after window load to avoid LCP/FCP contention
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(initGA4, { timeout: 3000 });
  } else if (document.readyState === 'complete') {
    initGA4();
  } else {
    window.addEventListener('load', initGA4, { once: true });
  }
}
