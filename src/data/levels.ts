export type GameType = "match" | "code" | "regression" | "cluster" | "challenge";
export interface Level { id: number; title: string; shortTitle: string; gameType: GameType; district: string; xp: number; icon: string; }
const titles = ["交通大数据概述","Python数据分析应用","Python高级算法库介绍","数据预处理与探索性数据分析","机器学习简介","线性回归","支持向量机1","支持向量机2","决策树1","决策树2","聚类分析","集成学习1","集成学习2","神经网络","深度学习1","深度学习2"];
const games: GameType[] = ["match","code","code","challenge","challenge","regression","challenge","challenge","challenge","challenge","cluster","challenge","challenge","challenge","challenge","challenge"];
const icons = ["🛰️","🐍","🧰","🧹","🤖","📈","🛣️","🚧","🌳","🚦","🫧","🧩","🏙️","🧠","🚇","🏆"];
export const levels: Level[] = titles.map((title, i) => ({ id: i + 1, title, shortTitle: title.replace(/介绍|应用|分析/g, ""), gameType: games[i], district: `智慧城区 ${String(i + 1).padStart(2,"0")}`, xp: 100 + i * 10, icon: icons[i] }));
export const getLevel = (id: number) => levels.find((level) => level.id === id);
