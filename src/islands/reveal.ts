/**
 * Standalone Scroll Reveal Island
 * Zero-framework progressive enhancement.
 * Respects prefers-reduced-motion and handles viewport intersection.
 *
 * Homepage sections use .reveal-on-scroll (inner wraps). In Vite DEV, React
 * mounts after this deferred island — always arm MutationObserver (never
 * early-return on zero targets). Visibility is stored on data-reveal-visible
 * so React className reconciles cannot wipe the revealed state.
 */
if (typeof window !== 'undefined') {
  const disarm = () => {
    document.documentElement.classList.remove('js-reveal');
  };

  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      disarm();
    } else if (!('IntersectionObserver' in window)) {
      disarm();
    } else {
      const ROOT_BOTTOM_INSET = 24;

      const markVisible = (el: Element) => {
        el.classList.add('is-visible');
        el.setAttribute('data-reveal-visible', '1');
        el.setAttribute('data-reveal-observed', '1');
      };

      const isRevealed = (el: Element) =>
        el.hasAttribute('data-reveal-visible') || el.classList.contains('is-visible');

      const isInRevealRange = (el: Element) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return false;
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const rootBottom = vh - ROOT_BOTTOM_INSET;
        // Any pixel in range — tall sections fail threshold:0.08 easily.
        return rect.bottom > 0 && rect.top < rootBottom;
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              markVisible(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        // threshold 0: fire as soon as any pixel intersects (tall homepage sections).
        { threshold: 0, rootMargin: `0px 0px -${ROOT_BOTTOM_INSET}px 0px` },
      );

      const observeNew = () => {
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
          if (isRevealed(el)) {
            observer.unobserve(el);
            return;
          }
          if (isInRevealRange(el)) {
            markVisible(el);
            observer.unobserve(el);
            return;
          }
          // Re-observe every pass so Vite HMR / remounts cannot orphan targets
          // stuck with data-reveal-observed from a dead observer instance.
          el.setAttribute('data-reveal-observed', '1');
          observer.observe(el);
        });
      };

      let hashHandledFor = '';

      const revealHashTarget = (opts?: { scroll?: boolean }) => {
        const hash = window.location.hash;
        if (!hash || hash.length < 2) return;

        let id: string;
        try {
          id = decodeURIComponent(hash.slice(1));
        } catch {
          id = hash.slice(1);
        }
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        // Ancestors (legacy section-level reveal) + descendants (current inner wraps)
        let node: Element | null = target;
        while (node && node !== document.documentElement) {
          if (node.classList.contains('reveal-on-scroll')) markVisible(node);
          node = node.parentElement;
        }
        target.querySelectorAll('.reveal-on-scroll').forEach((el) => markVisible(el));

        if (opts?.scroll && hashHandledFor !== hash) {
          hashHandledFor = hash;
          target.scrollIntoView({ block: 'start' });
        }
      };

      const failSafeInView = () => {
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
          if (!isRevealed(el) && isInRevealRange(el)) markVisible(el);
        });
      };

      const init = () => {
        // Always arm — do not skip when zero targets (DEV mounts later).
        observeNew();
        revealHashTarget({ scroll: true });

        // Fail-safe: if IO never fires for in-view nodes, mark them visible.
        window.setTimeout(() => {
          failSafeInView();
          observeNew();
          revealHashTarget({ scroll: true });
        }, 100);

        if ('MutationObserver' in window) {
          let scheduled = false;
          const mo = new MutationObserver(() => {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(() => {
              scheduled = false;
              observeNew();
              revealHashTarget({ scroll: true });
            });
          });
          mo.observe(document.body, { childList: true, subtree: true });
        }

        // Scroll/resize fail-safe — covers overflow-x-hidden layout clipping IO edges.
        let scrollScheduled = false;
        const onScrollOrResize = () => {
          if (scrollScheduled) return;
          scrollScheduled = true;
          requestAnimationFrame(() => {
            scrollScheduled = false;
            failSafeInView();
          });
        };
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize, { passive: true });

        window.addEventListener('hashchange', () => {
          hashHandledFor = '';
          requestAnimationFrame(() => {
            revealHashTarget({ scroll: true });
            failSafeInView();
          });
        });

        window.addEventListener('load', () => {
          observeNew();
          revealHashTarget({ scroll: true });
          failSafeInView();
        });
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    }
  } catch {
    disarm();
  }
}
