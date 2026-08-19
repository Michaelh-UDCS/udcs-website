/**
 * Standalone Hero Glow Island
 * Fluid spring-lerp physics matching Framer Motion's damping: 25, stiffness: 150.
 * Passive pointermove listener with automatic rAF sleeping when at rest.
 * Frame-rate independent delta-time scaling with k = 0.19 (~80ms time constant).
 */
if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight * 0.4;
  let currentX = targetX;
  let currentY = targetY;
  let isRunning = false;
  let lastTime = 0;

  const k = 0.19;

  const update = (now: number) => {
    if (!lastTime) lastTime = now;
    const dt = Math.min(now - lastTime, 64);
    lastTime = now;

    const f = 1 - Math.pow(1 - k, dt / 16.667);
    const dx = targetX - currentX;
    const dy = targetY - currentY;
    currentX += dx * f;
    currentY += dy * f;

    document.documentElement.style.setProperty('--glow-x', `${currentX.toFixed(1)}px`);
    document.documentElement.style.setProperty('--glow-y', `${currentY.toFixed(1)}px`);

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      requestAnimationFrame(update);
    } else {
      currentX = targetX;
      currentY = targetY;
      document.documentElement.style.setProperty('--glow-x', `${currentX.toFixed(1)}px`);
      document.documentElement.style.setProperty('--glow-y', `${currentY.toFixed(1)}px`);
      isRunning = false;
      lastTime = 0;
    }
  };

  window.addEventListener(
    'pointermove',
    (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        lastTime = performance.now();
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
}
