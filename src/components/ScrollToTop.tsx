import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets window scroll on pathname change; preserves / restores #hash targets. */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }

    const scrollToTarget = (): boolean => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView();
      return true;
    };

    if (scrollToTarget()) return;

    // SSG/client paint can lag behind the first effect tick
    const raf = requestAnimationFrame(() => {
      if (!scrollToTarget()) {
        window.setTimeout(scrollToTarget, 50);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
};
