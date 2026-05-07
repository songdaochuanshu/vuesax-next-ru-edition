# Vuesax-Next (Ru Edition)

**汝窑美学 UI 组件库 - Vue 3.5+ 重构版**

一个融入汝窑美学的现代 Vue 3.5+ UI 组件库，将高饱和度的现代设计转化为低饱和度、高质感的东方审美体系。

## 🎨 设计理念

本项目采用**汝窑美学**作为核心设计语言，通过以下色彩系统表达东方审美：

| 色彩 | 十六进制 | 寓意 | 用途 |
|------|---------|------|------|
| 天青 | `#7BBFC3` | 宁静致远 | Primary 主色 |
| 粉青 | `#90B44B` | 自然生机 | Success 成功色 |
| 琥珀 | `#E08A5E` | 古韵厚重 | Warning 警告色 |
| 釉红 | `#CF4647` | 精致典雅 | Danger 危险色 |
| 月白 | `#F5F7F8` | 纯净高级 | Background 背景色 |

## 📦 项目结构

```
vuesax-next-ru-edition/
├── packages/
│   ├── theme/              # 主题与设计 Token
│   │   ├── _tokens.scss    # CSS 变量定义
│   │   ├── index.scss      # 主题入口
│   │   └── package.json
│   └── components/         # UI 组件库
│       ├── Card/           # VsCard 卡片组件
│       │   ├── VsCard.vue  # 组件实现
│       │   ├── types.ts    # 类型定义
│       │   ├── index.ts    # 导出入口
│       │   └── package.json
│       ├── index.ts        # 组件库导出
│       └── package.json
├── playground/             # 演示与开发环境
│   ├── src/
│   │   ├── App.vue         # 主应用
│   │   ├── main.ts         # 入口文件
│   │   └── style.css       # 全局样式
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
├── pnpm-workspace.yaml     # Monorepo 配置
└── README.md
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
cd playground
pnpm dev
```

访问 `http://localhost:5173` 查看演示页面。

### 构建项目

```bash
cd playground
pnpm build
```

## 🎯 VsCard Type 4 组件

### 功能特性

- **汝窑美学设计**：融入低饱和度、高质感的东方审美
- **磨砂玻璃效果**：浮动图标采用 `backdrop-filter` 实现
- **平滑交互动画**：悬停时的缩放和阴影变化
- **响应式设计**：完美适配各种屏幕尺寸
- **TypeScript 支持**：完整的类型定义

### 基本用法

```vue
<template>
  <VsCard
    type="4"
    title="卡片标题"
    description="卡片描述文本"
    image="https://example.com/image.jpg"
    :like-count="128"
    :comment-count="24"
    @like="handleLike"
    @comment="handleComment"
  />
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Card liked:', liked);
};

const handleComment = () => {
  console.log('Comment button clicked');
};
</script>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `string \| number` | `4` | 卡片类型 |
| `color` | `string` | `var(--vs-primary)` | 自定义颜色 |
| `interactive` | `boolean` | `true` | 是否启用交互动画 |
| `title` | `string` | - | 卡片标题 |
| `description` | `string` | - | 卡片描述 |
| `image` | `string` | - | 卡片图片 URL |
| `showLike` | `boolean` | `true` | 显示收藏按钮 |
| `showComment` | `boolean` | `true` | 显示评论按钮 |
| `likeCount` | `number` | `0` | 收藏数量 |
| `commentCount` | `number` | `0` | 评论数量 |
| `liked` | `boolean` | `false` | 是否已收藏 |

### Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `like` | `liked: boolean` | 收藏按钮点击事件 |
| `comment` | - | 评论按钮点击事件 |
| `click` | `event: MouseEvent` | 卡片点击事件 |

## 🎨 设计系统

### 色彩系统

所有颜色均通过 CSS 变量定义，支持深色模式自动切换：

```scss
:root {
  --vs-primary: #7BBFC3;           /* 天青 */
  --vs-success: #90B44B;           /* 粉青 */
  --vs-warn: #E08A5E;              /* 琥珀 */
  --vs-danger: #CF4647;            /* 釉红 */
  --vs-bg: #F5F7F8;                /* 月白 */
  /* ... 更多变量 */
}
```

### 圆角系统

```scss
--vs-radius-sm: 4px;
--vs-radius-md: 8px;
--vs-radius-lg: 12px;
--vs-radius-xl: 18px;
--vs-radius-2xl: 24px;
```

### 间距系统

```scss
--vs-spacing-xs: 4px;
--vs-spacing-sm: 8px;
--vs-spacing-md: 12px;
--vs-spacing-lg: 16px;
--vs-spacing-xl: 24px;
--vs-spacing-2xl: 32px;
```

### 动画系统

```scss
--vs-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--vs-transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--vs-transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

## 🔧 技术栈

- **Vue**: 3.5+
- **Vite**: 6+
- **TypeScript**: 5.3+
- **SCSS**: 1.70+
- **pnpm**: Monorepo 包管理

## 📝 开发指南

### 添加新组件

1. 在 `packages/components/` 中创建新组件目录
2. 编写组件 `.vue` 文件和 `types.ts` 类型定义
3. 创建 `index.ts` 导出入口
4. 在 `packages/components/index.ts` 中导出新组件
5. 在 `playground/src/App.vue` 中添加演示

### 修改主题

编辑 `packages/theme/_tokens.scss` 中的 CSS 变量即可全局更新主题。

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🙏 致谢

本项目灵感来自汝窑陶瓷艺术的美学精髓，致敬中国传统工艺文化。

---

**Vuesax-Next (Ru Edition)** - 东方审美，现代设计 ✨
