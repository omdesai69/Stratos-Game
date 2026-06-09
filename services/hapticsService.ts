/** Haptic vibration feedback for mobile browsers. */
export const triggerHaptic = (style: 'light' | 'medium' | 'heavy' = 'light') => {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    const durations = { light: 15, medium: 35, heavy: 70 };
    try { navigator.vibrate(durations[style] || 15); } catch {}
  }
};
