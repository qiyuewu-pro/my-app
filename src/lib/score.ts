export const calculateQuizScore = (correct: number, total: number) => total ? Math.round((correct / total) * 100) : 0;
export const getLearningLevel = (points: number) => Math.floor(points / 500) + 1;
export const pointsToNextLevel = (points: number) => 500 - (points % 500);
