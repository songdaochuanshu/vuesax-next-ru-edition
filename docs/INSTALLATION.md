# 安装和使用指南

## 快速开始

### 1. 安装依赖

```bash
# 使用 pnpm
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 2. 导入组件

#### 全量导入

```typescript
import { VsButton, VsInput, VsSelect } from '@vuesax-next-ru/components';
```

#### 按需导入

```typescript
import { VsButton } from '@vuesax-next-ru/components/button';
import { VsInput } from '@vuesax-next-ru/components/input';
import { VsSelect } from '@vuesax-next-ru/components/select';
```

### 3. 在 Vue 组件中使用

```vue
<template>
  <div>
    <VsButton type="flat" color="primary">
      点击我
    </VsButton>
    
    <VsInput
      v-model="text"
      placeholder="输入文本"
      clearable
    />
    
    <VsSelect
      v-model="selected"
      :options="options"
      placeholder="选择一个选项"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsInput, VsSelect } from '@vuesax-next-ru/components';

const text = ref('');
const selected = ref('');

const options = [
  { label: '选项 1', value: 1 },
  { label: '选项 2', value: 2 },
  { label: '选项 3', value: 3 },
];
</script>
```

## 项目结构

```
vuesax-next-ru-edition/
├── packages/
│   ├── theme/                  # 汝窑美学主题系统
│   │   ├── _tokens.scss        # CSS 变量定义
│   │   ├── index.scss          # 主题入口
│   │   └── package.json
│   └── components/             # UI 组件库
│       ├── Button/             # VsButton 按钮
│       ├── Input/              # VsInput 输入框
│       ├── Select/             # VsSelect 下拉选择
│       ├── Checkbox/           # VsCheckbox 复选框
│       ├── Radio/              # VsRadio 单选框
│       ├── Switch/             # VsSwitch 开关
│       ├── Alert/              # VsAlert 警告提示
│       ├── Notification/       # VsNotification 通知
│       ├── Modal/              # VsModal 模态框
│       ├── Drawer/             # VsDrawer 抽屉
│       ├── Pagination/         # VsPagination 分页
│       ├── Breadcrumb/         # VsBreadcrumb 面包屑
│       ├── Card/               # VsCard 卡片
│       ├── index.ts            # 导出入口
│       └── package.json
├── playground/                 # 演示和开发环境
│   ├── src/
│   │   ├── App.vue             # 主应用
│   │   ├── main.ts             # 入口
│   │   ├── components/         # 演示组件
│   │   ├── data/               # 示例数据
│   │   ├── composables/        # 组合式函数
│   │   └── style.css           # 全局样式
│   ├── vite.config.ts          # Vite 配置
│   ├── index.html              # HTML 入口
│   └── package.json
├── docs/                       # 文档
│   ├── COMPONENTS.md           # 组件 API 文档
│   ├── INSTALLATION.md         # 安装指南
│   └── DESIGN.md               # 设计规范
├── pnpm-workspace.yaml         # Monorepo 配置
├── package.json                # 根包配置
├── README.md                   # 项目说明
└── .gitignore
```

## 开发指南

### 本地开发

```bash
# 进入 Playground 目录
cd playground

# 启动开发服务器
pnpm dev

# 访问 http://localhost:5173
```

### 构建

```bash
# 构建 Playground
cd playground
pnpm build

# 构建输出在 dist 目录
```

### 组件开发

#### 创建新组件

1. 在 `packages/components/` 中创建新组件目录

```bash
mkdir packages/components/YourComponent
```

2. 创建组件文件结构

```
YourComponent/
├── types.ts           # TypeScript 类型定义
├── YourComponent.vue  # 组件实现
├── index.ts           # 导出入口
└── package.json       # 包配置
```

3. 在 `packages/components/index.ts` 中导出新组件

```typescript
export { YourComponent } from './YourComponent';
export type { YourComponentProps, YourComponentEmits } from './YourComponent/types';
```

#### 组件规范

- 使用 Vue 3.5 的 `<script setup>` 语法
- 使用 TypeScript 定义 Props 和 Emits
- 遵循汝窑美学设计系统
- 支持响应式设计
- 提供完整的 JSDoc 注释

### 样式开发

所有组件样式都使用 SCSS，并遵循以下规范：

```scss
// 导入主题系统
@import '../../theme/_tokens.scss';

// 使用 CSS 变量
.component {
  color: var(--vs-text-primary);
  background: var(--vs-bg);
  border-radius: var(--vs-radius-md);
  transition: all var(--vs-transition-base);
}

// 响应式设计
@media (max-width: 640px) {
  .component {
    padding: 12px;
  }
}

// 深色模式支持
@media (prefers-color-scheme: dark) {
  .component {
    background: #374151;
  }
}
```

## 主题定制

### CSS 变量

所有组件都使用 CSS 变量，可以通过修改根元素的变量来自定义主题：

```css
:root {
  /* 汝窑色彩系统 */
  --vs-primary: #7BBFC3;        /* 天青 */
  --vs-success: #90B44B;        /* 粉青 */
  --vs-warn: #E08A5E;           /* 琥珀 */
  --vs-danger: #CF4647;         /* 釉红 */
  --vs-bg: #F5F7F8;             /* 月白 */

  /* 文本颜色 */
  --vs-text-primary: #2C3E50;
  --vs-text-secondary: #7F8C8D;
  --vs-text-tertiary: #BDC3C7;

  /* 边框和背景 */
  --vs-border: #E8EAED;
  --vs-border-light: #F0F2F5;

  /* 间距 */
  --vs-spacing-xs: 4px;
  --vs-spacing-sm: 8px;
  --vs-spacing-md: 12px;
  --vs-spacing-lg: 16px;
  --vs-spacing-xl: 24px;

  /* 圆角 */
  --vs-radius-sm: 4px;
  --vs-radius-md: 8px;
  --vs-radius-lg: 12px;
  --vs-radius-xl: 16px;

  /* 阴影 */
  --vs-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --vs-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --vs-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --vs-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

  /* 过渡 */
  --vs-transition-fast: 150ms ease-out;
  --vs-transition-base: 250ms ease-out;
  --vs-transition-slow: 350ms ease-out;

  /* 字体 */
  --vs-font-size-xs: 12px;
  --vs-font-size-sm: 14px;
  --vs-font-size-base: 16px;
  --vs-font-size-lg: 18px;
  --vs-font-size-xl: 20px;

  --vs-font-weight-light: 300;
  --vs-font-weight-normal: 400;
  --vs-font-weight-medium: 500;
  --vs-font-weight-semibold: 600;
  --vs-font-weight-bold: 700;
}
```

### 深色模式

深色模式会自动应用，只需在 `:root` 中定义深色模式的变量：

```css
@media (prefers-color-scheme: dark) {
  :root {
    --vs-text-primary: #E8EAED;
    --vs-text-secondary: #A8AEB5;
    --vs-bg: #1F2937;
    /* ... 其他深色模式变量 */
  }
}
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 常见问题

### Q: 如何在 TypeScript 项目中使用？

A: 所有组件都提供完整的 TypeScript 类型定义，可以直接导入使用：

```typescript
import { VsButton } from '@vuesax-next-ru/components';
import type { VsButtonProps } from '@vuesax-next-ru/components';

const props: VsButtonProps = {
  type: 'flat',
  color: 'primary',
  size: 'md',
};
```

### Q: 如何自定义组件样式？

A: 可以通过以下方式自定义样式：

1. 修改 CSS 变量
2. 使用 CSS 覆盖
3. 使用 SCSS 变量

### Q: 组件是否支持 SSR？

A: 目前不支持 SSR，但可以通过动态导入实现：

```typescript
const VsButton = defineAsyncComponent(() =>
  import('@vuesax-next-ru/components').then(m => m.VsButton)
);
```

### Q: 如何报告 Bug？

A: 请在 GitHub Issues 中报告 Bug，并提供：

1. 复现步骤
2. 期望行为
3. 实际行为
4. 浏览器和版本信息

## 贡献指南

欢迎提交 Pull Request！请遵循以下步骤：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT

## 更多资源

- [GitHub 仓库](https://github.com/songdaochuanshu/vuesax-next-ru-edition)
- [组件 API 文档](./COMPONENTS.md)
- [设计规范](./DESIGN.md)
- [Playground 演示](https://vuesax-next-ru-edition.pages.dev)

---

**祝您使用愉快！** 🎨✨
