/**
 * Sticky mobile CTA island — show after hero leaves, hide when #contact is in view.
 * Compositor-only (transform/opacity). Respects prefers-reduced-motion.
 * When hidden: aria-hidden + inert + tabindex=-1 (WCAG 2.4.11 focus not obscured / no trap).
 * Retries until #sticky-mobile-cta exists (Vite React mounts after deferred islands in dev).
 */
if (typeof window !== 'undefined') {
  const setInteractive = (bar: HTMLElement, show: boolean) => {
    bar.classList.toggle('is-visible', show);
    bar.setAttribute('aria-hidden', show ? 'false' : 'true');
    document.documentElement.classList.toggle('has-sticky-cta', show);

    if (show) {
      bar.removeAttribute('inert');
    } else {
      bar.setAttribute('inert', '');
    }

    bar.querySelectorAll<HTMLElement>('[data-sticky-link]').forEach((link) => {
      if (show) link.removeAttribute('tabindex');
      else link.setAttribute('tabindex', '-1');
    });
  };

  const bindStickyCta = (bar: HTMLElement) => {
    if (bar.dataset.stickyBound === '1') return;
    bar.dataset.stickyBound = '1';

    const contact = document.getElementById('contact');
    const hero = document.querySelector('main > section');
    if (!contact || !hero) return;

    let heroGone = false;
    let contactVisible = false;

    const sync = () => setInteractive(bar, heroGone && !contactVisible);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroGone = !entry.isIntersecting;
        sync();
      },
      { threshold: 0, rootMargin: reduced ? '0px' : '0px 0px -15% 0px' },
    );

    const contactObs = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.08, rootMargin: '0px' },
    );

    heroObs.observe(hero);
    contactObs.observe(contact);
    setInteractive(bar, false);
  };

  const tryInit = (attempts = 0) => {
    const bar = document.getElementById('sticky-mobile-cta');
    if (bar) {
      bindStickyCta(bar);
      return;
    }
    if (attempts < 60) {
      window.setTimeout(() => tryInit(attempts + 1), 50);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tryInit());
  } else {
    tryInit();
  }
}
