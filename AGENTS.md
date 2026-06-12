# AGENTS.md

## 项目目标
开发易用、有趣、响应式的“交通大数据通关营”，通过课程、小游戏和测验帮助用户学习交通大数据。

## 技术栈
Next.js、React、TypeScript、Tailwind CSS；第一版使用 localStorage，不使用真实后端。

## 开发规范
- 使用 TypeScript 严格类型，不引入无必要依赖。
- 优先复用组件，保持响应式布局、无障碍标签与一致的智慧交通视觉语言。
- 不破坏已有功能；用户进度结构变化时需考虑旧数据兼容。
- 不要提交 API Key、Token、密码或其他敏感信息。

## 文件组织规范
- 页面位于 `src/app`，复用 UI 位于 `src/components`。
- 静态课程数据位于 `src/data`，业务工具和存储逻辑位于 `src/lib`。
- CI 工作流位于 `.github/workflows`。

## 提交前检查
每次代码改动后必须运行并修复以下命令的全部报错：

```bash
npm run lint
npm run build
```
