export interface Badge { id: string; name: string; description: string; icon: string; requirement: number; color: string; }
export const badges: Badge[] = [
  { id: "starter", name: "数据启程", description: "完成第 1 关", icon: "🛰️", requirement: 1, color: "from-cyan-400 to-blue-500" },
  { id: "analyst", name: "城市分析师", description: "完成 4 个关卡", icon: "📊", requirement: 4, color: "from-violet-400 to-fuchsia-500" },
  { id: "engineer", name: "算法工程师", description: "完成 8 个关卡", icon: "🧠", requirement: 8, color: "from-lime-400 to-emerald-500" },
  { id: "planner", name: "智慧规划师", description: "完成 12 个关卡", icon: "🏙️", requirement: 12, color: "from-amber-300 to-orange-500" },
  { id: "master", name: "交通数据大师", description: "通关全部关卡", icon: "🏆", requirement: 16, color: "from-yellow-200 to-yellow-500" },
];
