import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = { title: "交通大数据通关营", description: "智慧交通互动学习闯关 App" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className="min-h-screen font-sans antialiased"><header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-ink/80 backdrop-blur-xl"><nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link href="/" className="flex items-center gap-3 font-black"><span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300 text-slate-950">路</span><span>交通大数据通关营</span></Link><div className="flex gap-2 text-sm"><Link className="rounded-lg px-3 py-2 hover:bg-white/5" href="/levels">关卡地图</Link><Link className="rounded-lg px-3 py-2 hover:bg-white/5" href="/profile">我的成就</Link></div></nav></header>{children}<footer className="mx-auto max-w-6xl px-5 py-10 text-center text-xs text-slate-500">CITY DATA LAB · 用数据读懂每一次出行</footer></body></html>;
}
