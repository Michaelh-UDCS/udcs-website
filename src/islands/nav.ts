/**
 * Standalone Mobile Navigation Island
 * Handles Escape key closing, focus restoration, and mobile link selection.
 */
if (typeof window !== 'undefined') {
  const initNav = () => {
    const toggle = document.getElementById('nav-toggle') as HTMLInputElement | null;
    if (!toggle) return;

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && toggle.checked) {
        toggle.checked = false;
        const label = document.querySelector('label[for="nav-toggle"]') as HTMLElement | null;
        label?.focus();
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
