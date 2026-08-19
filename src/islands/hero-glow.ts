/**
 * Standalone Hero Glow Island
 * Fluid spring-lerp physics matching Framer Motion's damping: 25, stiffness: 150.
 * Passive pointermove listener with automatic rAF sleeping when at rest.
 */
if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight * 0.4;
  let currentX = targetX;
  let currentY = targetY;
  let isRunning = false;

  const update = () => {
    // Lerp with damping factor ~0.08 (smooth fluid spring lag matching Framer Motion)
    const dx = targetX - currentX;
    const dy = targetY - currentY;
    currentX += dx * 0.08;
    currentY += dy * 0.08;

    document.documentElement.style.setProperty('--glow-x', `${currentX.toFixed(1)}px`);
    document.documentElement.style.setProperty('--glow-y', `${currentY.toFixed(1)}px`);

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      requestAnimationFrame(update);
    } else {
      isRunning = false;
    }
  };

  window.addEventListener(
    'pointermove',
    (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
}
