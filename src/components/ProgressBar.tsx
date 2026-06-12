export default function ProgressBar({ value, label, compact = false }: { value: number; label?: string; compact?: boolean }) {
  const safe = Math.max(0, Math.min(100, value));
  return <div className="w-full">{label && <div className="mb-2 flex justify-between text-sm"><span className="text-slate-400">{label}</span><strong className="text-cyan-200">{safe}%</strong></div>}<div className={`${compact ? "h-2" : "h-3"} overflow-hidden rounded-full bg-slate-800`}><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-lime-300 transition-all duration-700" style={{ width: `${safe}%` }} /></div></div>;
}
