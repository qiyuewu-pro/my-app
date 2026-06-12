"use client";
import LevelCard from "@/components/LevelCard";
import ProgressBar from "@/components/ProgressBar";
import { levels } from "@/data/levels";
import { isLevelUnlocked } from "@/lib/progress";
import { useProgress } from "@/lib/useProgress";
export default function LevelsPage() { const { progress } = useProgress(); const pct = Math.round(progress.completedLevels.length/16*100); return <main className="mx-auto max-w-6xl px-5 py-12"><div className="mb-10 md:flex md:items-end md:justify-between"><div><p className="eyebrow">SMART CITY ROUTE</p><h1 className="mt-3 text-4xl font-black">关卡地图</h1><p className="mt-3 text-slate-400">沿城市数据环线逐站学习，完成当前站即可解锁下一站。</p></div><div className="mt-6 w-full max-w-xs md:mt-0"><ProgressBar value={pct} label={`${progress.completedLevels.length} / 16 已通关`}/></div></div><div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{levels.map(level => <LevelCard key={level.id} level={level} state={progress.completedLevels.includes(level.id) ? "complete" : isLevelUnlocked(level.id, progress.completedLevels) ? "current" : "locked"}/>)}</div></main> }
