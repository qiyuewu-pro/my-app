"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import DragMatchGame, { CompleteButton, GameShell } from "@/components/DragMatchGame";
import CodePuzzleGame from "@/components/CodePuzzleGame";
import RegressionGame from "@/components/RegressionGame";
import ClusterGame from "@/components/ClusterGame";
import { getLevel } from "@/data/levels";
export default function GamePage() { const id = Number(useParams<{id:string}>().id); const router = useRouter(); const level = getLevel(id); if (!level) return <main className="p-10">关卡不存在</main>; const done=()=>router.push(`/quiz/${id}`); return <main className="mx-auto max-w-3xl px-5 py-12"><Link href={`/lesson/${id}`} className="text-sm text-cyan-300">← 返回课程</Link><div className="mb-7 mt-8"><p className="eyebrow">LEVEL {id} · GAME MISSION</p><h1 className="mt-2 text-3xl font-black">{level.title}</h1></div>{level.gameType === "match" ? <DragMatchGame onComplete={done}/> : level.gameType === "code" ? <CodePuzzleGame onComplete={done}/> : level.gameType === "regression" ? <RegressionGame onComplete={done}/> : level.gameType === "cluster" ? <ClusterGame onComplete={done}/> : <GameShell title="城市交通决策挑战" hint="选择更可靠的数据分析策略，完成本关任务"><div className="space-y-3"><div className="rounded-xl border border-cyan-300 bg-cyan-300/10 p-4">✓ 明确问题、检查数据质量并验证结果</div><div className="rounded-xl border border-white/10 p-4 text-slate-500">直接部署未验证的复杂模型</div></div><CompleteButton ready onComplete={done}/></GameShell>}</main> }
