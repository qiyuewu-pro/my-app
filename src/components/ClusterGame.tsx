"use client";
import { useState } from "react";
import { CompleteButton, GameShell } from "./DragMatchGame";
const roads = [{ n:"商务区主干路", c:"高流量" },{ n:"社区支路", c:"低流量" },{ n:"环城快速路", c:"高流量" },{ n:"郊区连接线", c:"低流量" }];
export default function ClusterGame({ onComplete }: { onComplete: () => void }) { const [a,setA] = useState<Record<string,string>>({}); const ready = roads.every(r => a[r.n] === r.c); return <GameShell title="道路聚类实验室" hint="根据道路特征，将样本划入合适的交通流类别"><div className="grid gap-3 md:grid-cols-2">{roads.map(r => <div key={r.n} className="rounded-xl bg-white/5 p-4"><strong>{r.n}</strong><div className="mt-3 flex gap-2">{["高流量","低流量"].map(c => <button key={c} onClick={() => setA({...a,[r.n]:c})} className={`flex-1 rounded-lg border p-2 text-xs ${a[r.n]===c ? "border-cyan-300 bg-cyan-300/10" : "border-white/10"}`}>{c}</button>)}</div></div>)}</div><CompleteButton ready={ready} onComplete={onComplete} /></GameShell>; }
