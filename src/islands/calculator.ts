/**
 * Vanilla SaaS Metrics Calculator Island
 * Zero dependencies, <1 kB gzip.
 * Deferred initialization via IntersectionObserver.
 */

function initCalculator() {
  const container = document.getElementById('saas-calculator');
  if (!container) return;

  const slider = container.querySelector('#monthly-fee-slider');
  const feeDisplay = container.querySelector('[data-calc-fee]');
  const oneYearDisplay = container.querySelector('[data-calc-1yr]');
  const threeYearDisplay = container.querySelector('[data-calc-3yr]');
  const fiveYearDisplay = container.querySelector('[data-calc-5yr]');
  const presetButtons = container.querySelectorAll('[data-calc-preset]');

  if (!slider) return;

  function update(val) {
    slider.value = String(val);
    if (feeDisplay) feeDisplay.textContent = `$${val}`;
    if (oneYearDisplay) oneYearDisplay.textContent = `$${(val * 12).toLocaleString()}`;
    if (threeYearDisplay) threeYearDisplay.textContent = `$${(val * 36).toLocaleString()}`;
    if (fiveYearDisplay) fiveYearDisplay.textContent = `$${(val * 60).toLocaleString()}`;

    presetButtons.forEach(btn => {
      const btnVal = Number(btn.getAttribute('data-calc-preset'));
      if (btnVal === val) {
        btn.classList.add('bg-gold', 'text-charcoal-950', 'border-gold');
        btn.classList.remove('bg-navy/40', 'text-cream/70', 'border-gold/20');
      } else {
        btn.classList.remove('bg-gold', 'text-charcoal-950', 'border-gold');
        btn.classList.add('bg-navy/40', 'text-cream/70', 'border-gold/20');
      }
    });
  }

  slider.addEventListener('input', () => {
    update(Number(slider.value));
  });

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-calc-preset'));
      if (!isNaN(val)) update(val);
    });
  });
}

if (typeof window !== 'undefined') {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        initCalculator();
        observer.disconnect();
      }
    }, { rootMargin: '200px' });

    const el = document.getElementById('saas-calculator');
    if (el) observer.observe(el);
    else document.addEventListener('DOMContentLoaded', () => {
      const lateEl = document.getElementById('saas-calculator');
      if (lateEl) observer.observe(lateEl);
    });
  } else {
    initCalculator();
  }
}
