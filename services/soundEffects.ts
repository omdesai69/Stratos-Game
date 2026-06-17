export const SOUND_FREQUENCIES = { laser: 880, explosion: 120, powerup: 587.33, shield: 440 };
export function playTone(ctx: AudioContext, freq: number) {
  try {
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.15);
  } catch {}
}
