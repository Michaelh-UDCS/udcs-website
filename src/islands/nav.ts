/**
 * Standalone Mobile Navigation Island
 * Escape closes the CSS checkbox menu; links auto-close on navigate.
 */
if (typeof window !== 'undefined') {
  const initNav = () => {
    const toggle = document.getElementById('nav-toggle') as HTMLInputElement | null;
    if (!toggle) return;

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && toggle.checked) {
        toggle.checked = false;
        toggle.focus();
      }
    });

    const mobileNav = toggle.closest('header')?.querySelector('nav[aria-label="Mobile Navigation"]');
    mobileNav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.checked = false;
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
}
