/**
 * Standalone Scroll Reveal Island
 * Zero-framework progressive enhancement.
 * Respects prefers-reduced-motion and handles viewport intersection.
 * Re-observes late-mounted nodes in DEV only (HMR) — production SSG is static.
 */
if (typeof window !== 'undefined') {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.remove('js-reveal');
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    );

    const observeNew = () => {
      document.querySelectorAll('.reveal-on-scroll:not([data-reveal-observed])').forEach((el) => {
        el.setAttribute('data-reveal-observed', '1');
        observer.observe(el);
      });
    };

    const init = () => {
      // Homepage (and most routes) have zero reveal targets — skip observers.
      if (!document.querySelector('.reveal-on-scroll')) return;

      observeNew();

      if (import.meta.env.DEV && 'MutationObserver' in window) {
        let scheduled = false;
        const mo = new MutationObserver(() => {
          if (scheduled) return;
          scheduled = true;
          requestAnimationFrame(() => {
            scheduled = false;
            observeNew();
          });
        });
        mo.observe(document.body, { childList: true, subtree: true });
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  } else {
    document.documentElement.classList.remove('js-reveal');
  }
}
