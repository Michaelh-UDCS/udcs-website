import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig, phoneHref } from '../config/siteConfig';

/**
 * Fixed thumb-zone consult bar — homepage only, ≤lg.
 * Show/hide + inert via src/islands/sticky-cta.ts (A+++ a11y: no focus when hidden).
 */
export const StickyMobileCta: React.FC = () => {
  return (
    <nav
      id="sticky-mobile-cta"
      className="sticky-mobile-cta lg:hidden"
      data-sticky-cta
      aria-label="Quick contact"
      aria-hidden="true"
      inert
    >
      <div className="sticky-mobile-cta__inner">
        <a
          href={phoneHref}
          className="sticky-mobile-cta__call"
          tabIndex={-1}
          data-sticky-link
          aria-label={`Call ${siteConfig.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href="#contact"
          className="sticky-mobile-cta__start"
          tabIndex={-1}
          data-sticky-link
        >
          Get Started
          <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};
