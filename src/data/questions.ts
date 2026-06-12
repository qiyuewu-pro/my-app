export interface Question { id: string; prompt: string; options: string[]; answer: number; explanation: string; }
export const questionsByLevel: Record<number, Question[]> = Object.fromEntries(Array.from({ length: 16 }, (_, i) => {
  const id = i + 1;
  return [id, [
    { id: `${id}-1`, prompt: `学习“第 ${id} 关”时，最可靠的分析起点是什么？`, options: ["先明确交通问题与目标", "直接选择最复杂模型", "忽略数据质量", "只看单日数据"], answer: 0, explanation: "明确业务问题和衡量目标，才能选择合适的数据与方法。" },
    { id: `${id}-2`, prompt: "面对交通传感器缺失值，合理做法是？", options: ["全部当作 0", "评估原因后进行清洗或插补", "隐藏缺失情况", "随机放大数值"], answer: 1, explanation: "应先理解缺失机制，再选择删除、插补或其他处理方式。" },
    { id: `${id}-3`, prompt: "如何判断交通分析结果值得用于决策？", options: ["图表颜色够多", "代码足够长", "在合理指标与验证数据上表现稳定", "模型名字最新"], answer: 2, explanation: "可靠结果需要合适指标、独立验证和稳定表现。" },
  ] satisfies Question[]];
}));
