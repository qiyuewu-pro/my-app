export interface UserProgress { completedLevels: number[]; points: number; }
export const STORAGE_KEY = "traffic-data-camp-progress";
export const defaultProgress: UserProgress = { completedLevels: [], points: 0 };
export function loadProgress(): UserProgress { if (typeof window === "undefined") return defaultProgress; try { const value = localStorage.getItem(STORAGE_KEY); return value ? { ...defaultProgress, ...JSON.parse(value) } : defaultProgress; } catch { return defaultProgress; } }
export function saveProgress(progress: UserProgress) { if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
export function completeLevel(levelId: number, points: number) { const current = loadProgress(); if (current.completedLevels.includes(levelId)) return current; const next = { completedLevels: [...current.completedLevels, levelId], points: current.points + points }; saveProgress(next); return next; }
export const isLevelUnlocked = (id: number, completed: number[]) => id === 1 || completed.includes(id - 1);
export const nextLevelId = (completed: number[]) => Math.min(completed.length + 1, 16);
