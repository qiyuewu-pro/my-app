# AGENTS.md

## 项目目标
本项目是“交通大数据学习通关小游戏 App”，用于将交通大数据课程内容转化为闯关式学习体验。

## 技术栈
- Next.js
- TypeScript
- Tailwind CSS
- ECharts
- localStorage

## 开发规范
- 所有页面和组件使用 TypeScript。
- 组件命名使用 PascalCase。
- 数据文件统一放在 src/data。
- 学习进度逻辑统一放在 src/lib/progress.ts。
- 评分逻辑统一放在 src/lib/score.ts。
- 避免引入不必要的大型依赖。
- 不要上传 API Key、Token、密码等敏感信息。

## UI 要求
- 风格为智慧交通、科技感、游戏闯关。
- 页面适配电脑和手机。
- 按钮、卡片、进度条需要有清晰的交互状态。

## 测试和构建
修改代码后请运行：
- npm run lint
- npm run build

## Review guidelines
- 检查是否有硬编码敏感信息。
- 检查关卡解锁逻辑是否正确。
- 检查 localStorage 读写是否有异常保护。
- 检查移动端布局是否可用。
- 检查 npm run build 是否通过。
