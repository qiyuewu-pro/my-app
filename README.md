# 交通大数据通关营

一个采用智慧交通与城市地图视觉风格的交通大数据互动学习 App。学习者沿 16 个关卡完成知识学习、小游戏和测验，并通过本地进度系统解锁新关卡、积分和成就徽章。

## 功能说明

- 首页驾驶员档案、等级、积分、总进度与推荐关卡
- 16 关顺序解锁的城市关卡地图
- 每关学习目标、核心知识点和交通大数据案例
- 数据源匹配、Python 代码拼图、线性回归预测、聚类分组等互动游戏
- 每关三题测验，达到 80 分通关并解锁下一关
- 基于 `localStorage` 的积分、通关进度和徽章系统
- 响应式桌面端与移动端界面

## 安装与运行

要求 Node.js 20+ 与 npm。

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:3000`。

## 构建与检查

```bash
npm run lint
npm run build
npm start
```

## GitHub + Codex 开发说明

- 使用 GitHub 分支和 Pull Request 管理改动，CI 会执行安装、Lint 与生产构建。
- 使用 Codex 开发时，先阅读根目录 `AGENTS.md`，保持现有目录组织并在提交前执行检查。
- 第一版不依赖后端；浏览器学习进度保存在 `traffic-data-camp-progress` localStorage 项中。
