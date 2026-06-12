import { levels } from "./levels";
export interface Lesson { levelId: number; objective: string; points: string[]; caseStudy: string; mission: string; }
const focus = ["多源数据与交通决策","Pandas 数据处理流程","NumPy、SciPy 与算法工具","缺失值、异常值与数据分布","监督学习与无监督学习","用历史流量预测未来趋势","最大间隔与分类边界","核函数与复杂路况识别","树结构与可解释决策","剪枝、调参与泛化能力","发现交通流的自然分组","组合多个模型提升稳定性","Boosting 与误差修正","神经元、层与反向传播","深层网络提取交通特征","时空预测与智能交通未来"];
export const lessons: Lesson[] = levels.map((level, i) => ({
  levelId: level.id,
  objective: `掌握「${focus[i]}」的核心思路，并能将它应用到真实城市出行问题。`,
  points: [focus[i], "识别输入数据、处理方法与输出结果", "评估模型或分析结论是否可靠"],
  caseStudy: `城市交通指挥中心结合路口流量、浮动车轨迹和天气数据，使用${level.title}相关方法优化高峰期信号配时，让通勤更加顺畅。`,
  mission: `完成本关数据任务，获得 ${level.xp} 积分并解锁下一片智慧城区。`,
}));
export const getLesson = (id: number) => lessons.find((lesson) => lesson.levelId === id);
