export interface HighScoreRecord { score: number; distance: number; date: string; }
const STORAGE_KEY = 'stratos_high_scores_v1';
export function getHighScores(): HighScoreRecord[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}
export function saveHighScore(score: number, distance: number): boolean {
  if (score <= 0) return false;
  const list = getHighScores();
  list.push({ score, distance, date: new Date().toISOString().split('T')[0] });
  list.sort((a, b) => b.score - a.score);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 10))); return true; } catch { return false; }
}
