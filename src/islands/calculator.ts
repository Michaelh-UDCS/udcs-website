/**
 * Vanilla SaaS Metrics Calculator Island
 * Zero dependencies. Deferred via IntersectionObserver.
 * Supports preset buttons + mobile <select data-calc-select>.
 * Uses querySelectorAll so mobile + desktop duplicate data-calc-* nodes stay in sync.
 * Retries / MutationObserver: Vite DEV mounts React after deferred islands.
 */

function initCalculator() {
  const container = document.getElementById('saas-calculator');
  if (!container || container.dataset.calcBound === '1') return;
  container.dataset.calcBound = '1';

  const slider = /** @type {HTMLInputElement | null} */ (container.querySelector('#monthly-fee-slider'));
  const feeDisplays = container.querySelectorAll('[data-calc-fee]');
  const oneYearDisplays = container.querySelectorAll('[data-calc-1yr]');
  const threeYearDisplays = container.querySelectorAll('[data-calc-3yr]');
  const fiveYearDisplays = container.querySelectorAll('[data-calc-5yr]');
  const presetButtons = container.querySelectorAll('[data-calc-preset]');
  const select = /** @type {HTMLSelectElement | null} */ (container.querySelector('[data-calc-select]'));
  const resultCards = container.querySelectorAll('.calc-result');

  if (!slider) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function pulseResults() {
    if (reduced) return;
    resultCards.forEach((card) => {
      card.classList.remove('calc-result--pulse');
      // reflow so animation can re-trigger
      void /** @type {HTMLElement} */ (card).offsetWidth;
      card.classList.add('calc-result--pulse');
    });
  }

  function setAll(nodes, text) {
    nodes.forEach((el) => {
      el.textContent = text;
    });
  }

  function update(val) {
    const n = Number(val);
    if (isNaN(n)) return;

    slider.value = String(n);
    setAll(feeDisplays, `$${n}`);
    setAll(oneYearDisplays, `$${(n * 12).toLocaleString()}`);
    setAll(threeYearDisplays, `$${(n * 36).toLocaleString()}`);
    setAll(fiveYearDisplays, `$${(n * 60).toLocaleString()}`);
    if (select) select.value = String(n);

    presetButtons.forEach((btn) => {
      const btnVal = Number(btn.getAttribute('data-calc-preset'));
      if (btnVal === n) {
        btn.classList.add('bg-gold', 'text-charcoal-950', 'border-gold');
        btn.classList.remove('bg-navy/40', 'text-cream/80', 'text-cream/70', 'border-gold/20', 'border-gold/30');
      } else {
        btn.classList.remove('bg-gold', 'text-charcoal-950', 'border-gold');
        btn.classList.add('bg-navy/40', 'text-cream/80', 'border-gold/30');
      }
    });

    pulseResults();
  }

  slider.addEventListener('input', () => update(slider.value));

  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-calc-preset'));
      if (!isNaN(val)) update(val);
    });
  });

  if (select) {
    select.addEventListener('change', () => update(select.value));
  }

  // Sync select ↔ slider on init (default fee may not match a preset chip)
  update(slider.value);
}

/**
 * Arm IO (or init immediately) on the current #saas-calculator node.
 * Marks data-calc-watching so MutationObserver retries do not stack observers.
 */
function armCalculator(el) {
  if (!el || el.dataset.calcBound === '1' || el.dataset.calcWatching === '1') return;
  el.dataset.calcWatching = '1';

  if (!('IntersectionObserver' in window)) {
    initCalculator();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        initCalculator();
        observer.disconnect();
      }
    },
    { rootMargin: '200px' },
  );

  observer.observe(el);

  // Already near viewport (hash deep-link / short pages)
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.bottom > -200 && rect.top < vh + 200) {
    initCalculator();
    observer.disconnect();
  }
}

function tryArmCalculator() {
  const el = document.getElementById('saas-calculator');
  if (el) armCalculator(el);
}

if (typeof window !== 'undefined') {
  const start = () => {
    tryArmCalculator();

    // Vite DEV: React may mount #saas-calculator after this deferred module
    let attempts = 0;
    const retry = () => {
      const el = document.getElementById('saas-calculator');
      if (el) {
        armCalculator(el);
        return;
      }
      if (attempts < 60) {
        attempts += 1;
        window.setTimeout(retry, 50);
      }
    };
    if (!document.getElementById('saas-calculator')) retry();

    if ('MutationObserver' in window && document.body) {
      let scheduled = false;
      const mo = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          tryArmCalculator();
        });
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}
