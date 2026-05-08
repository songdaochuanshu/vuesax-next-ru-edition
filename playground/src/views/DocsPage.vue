<template>
  <div class="docs-page">
    <div class="docs-nav">
      <div class="nav-header">文档</div>
      <nav class="docs-nav-list">
        <a
          v-for="doc in docsList"
          :key="doc.id"
          :href="`#${doc.id}`"
          class="nav-link"
          :class="{ active: activeDoc === doc.id }"
          @click="activeDoc = doc.id"
        >
          {{ doc.name }}
        </a>
      </nav>
    </div>

    <div class="docs-content">
      <!-- 组件文档 -->
      <section v-if="activeDoc === 'components'" id="components" class="doc-section">
        <DocumentationViewer
          title="组件 API 文档"
          description="Vuesax-Next (Ru Edition) 所有组件的详细 API 文档"
          :content="componentsDoc"
        />
      </section>

      <!-- 安装指南 -->
      <section v-if="activeDoc === 'installation'" id="installation" class="doc-section">
        <DocumentationViewer
          title="安装和使用指南"
          description="快速开始、项目结构、开发指南"
          :content="installationDoc"
        />
      </section>

      <!-- 设计规范 -->
      <section v-if="activeDoc === 'design'" id="design" class="doc-section">
        <DocumentationViewer
          title="设计规范"
          description="汝窑美学设计系统、色彩、排版、间距等"
          :content="designDoc"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DocumentationViewer from '../components/DocumentationViewer.vue';

const activeDoc = ref('components');

const docsList = [
  { id: 'components', name: '组件 API 文档' },
  { id: 'installation', name: '安装指南' },
  { id: 'design', name: '设计规范' },
];

// 文档内容
const componentsDoc = `# 组件 API 文档

Vuesax-Next (Ru Edition) 提供了 12 个功能完整的 UI 组件，每个组件都遵循汝窑美学设计系统。

## VsButton - 按钮组件

按钮组件支持多种类型、颜色和尺寸，可以满足不同场景的需求。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`type\` | 'flat' \\| 'relief' \\| 'border' \\| 'gradient' | 'flat' | 按钮类型 |
| \`color\` | 'primary' \\| 'success' \\| 'warn' \\| 'danger' | 'primary' | 按钮颜色 |
| \`size\` | 'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl' | 'md' | 按钮尺寸 |
| \`disabled\` | boolean | false | 是否禁用 |
| \`loading\` | boolean | false | 是否加载中 |
| \`circle\` | boolean | false | 是否圆形 |
| \`block\` | boolean | false | 是否块级 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| \`click\` | (event: MouseEvent) | 按钮点击事件 |

### 示例

\`\`\`vue
<template>
  <div>
    <VsButton type="flat" color="primary">主按钮</VsButton>
    <VsButton type="relief" color="success">浮起按钮</VsButton>
    <VsButton type="border" color="warn">边框按钮</VsButton>
    <VsButton type="gradient" color="danger">渐变按钮</VsButton>
    <VsButton :loading="isLoading" @click="handleClick">加载中</VsButton>
    <VsButton disabled>禁用</VsButton>
    <VsButton circle>✓</VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton } from '@vuesax-next-ru/components';

const isLoading = ref(false);

const handleClick = async () => {
  isLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>
\`\`\`

## VsInput - 输入框组件

输入框组件支持多种输入类型、验证系统和前后缀。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`type\` | string | 'text' | 输入框类型 |
| \`modelValue\` | string \\| number | '' | 输入框值 |
| \`placeholder\` | string | - | 占位符 |
| \`size\` | 'sm' \\| 'md' \\| 'lg' | 'md' | 输入框尺寸 |
| \`state\` | 'default' \\| 'success' \\| 'warn' \\| 'danger' | 'default' | 输入框状态 |
| \`clearable\` | boolean | false | 是否显示清空按钮 |
| \`disabled\` | boolean | false | 是否禁用 |
| \`prefix\` | string | - | 前缀文本 |
| \`suffix\` | string | - | 后缀文本 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| \`update:modelValue\` | (value: string \\| number) | 值更新事件 |
| \`change\` | (value: string \\| number) | 变化事件 |
| \`focus\` | (event: FocusEvent) | 焦点事件 |
| \`blur\` | (event: FocusEvent) | 失焦事件 |

### 示例

\`\`\`vue
<template>
  <div>
    <VsInput
      v-model="text"
      placeholder="输入文本"
      clearable
    />
    
    <VsInput
      v-model="email"
      type="email"
      placeholder="输入邮箱"
      :validate="validateEmail"
    />
    
    <VsInput
      v-model="password"
      type="password"
      placeholder="输入密码"
      prefix="🔒"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsInput } from '@vuesax-next-ru/components';

const text = ref('');
const email = ref('');
const password = ref('');

const validateEmail = (value: string) => {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) || '请输入有效的邮箱';
};
</script>
\`\`\`

## VsSelect - 下拉选择组件

下拉选择组件支持单选、多选和搜索功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | string \\| number \\| array | - | 选择的值 |
| \`options\` | SelectOption[] | [] | 选项列表 |
| \`multiple\` | boolean | false | 是否多选 |
| \`searchable\` | boolean | false | 是否可搜索 |
| \`clearable\` | boolean | false | 是否显示清空按钮 |
| \`disabled\` | boolean | false | 是否禁用 |
| \`placeholder\` | string | - | 占位符 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| \`update:modelValue\` | (value: any) | 值更新事件 |
| \`change\` | (value: any) | 变化事件 |

## VsCheckbox - 复选框组件

复选框组件支持单个、分组和不确定状态。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | boolean \\| string \\| number | false | 复选框值 |
| \`value\` | string \\| number | - | 复选框的值 |
| \`label\` | string | - | 复选框标签 |
| \`disabled\` | boolean | false | 是否禁用 |
| \`indeterminate\` | boolean | false | 是否不确定状态 |

## VsRadio - 单选框组件

单选框组件支持单选和分组。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | string \\| number \\| boolean | - | 单选框值 |
| \`value\` | string \\| number \\| boolean | - | 单选框的值 |
| \`label\` | string | - | 单选框标签 |
| \`disabled\` | boolean | false | 是否禁用 |

## VsSwitch - 开关切换组件

开关切换组件支持多种尺寸和自定义文本。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | boolean | false | 开关状态 |
| \`size\` | 'sm' \\| 'md' \\| 'lg' | 'md' | 开关尺寸 |
| \`activeText\` | string | - | 激活时的文本 |
| \`inactiveText\` | string | - | 未激活时的文本 |
| \`disabled\` | boolean | false | 是否禁用 |

## VsAlert - 警告提示组件

警告提示组件支持多种类型和可关闭功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`type\` | 'success' \\| 'warn' \\| 'danger' \\| 'info' | 'info' | 提示类型 |
| \`title\` | string | - | 提示标题 |
| \`description\` | string | - | 提示描述 |
| \`closable\` | boolean | true | 是否可关闭 |
| \`icon\` | string | - | 自定义图标 |

## VsNotification - 通知提示组件

通知提示组件支持多个位置和自动关闭。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`type\` | 'success' \\| 'warn' \\| 'danger' \\| 'info' | 'info' | 通知类型 |
| \`title\` | string | - | 通知标题 |
| \`message\` | string | - | 通知消息 |
| \`position\` | 'top-left' \\| 'top-center' \\| 'top-right' \\| 'bottom-left' \\| 'bottom-center' \\| 'bottom-right' | 'top-right' | 通知位置 |
| \`duration\` | number | 3000 | 自动关闭时间（毫秒） |
| \`closable\` | boolean | true | 是否可关闭 |

## VsModal - 模态框组件

模态框组件支持加载状态和自定义按钮。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | boolean | false | 模态框是否显示 |
| \`title\` | string | - | 模态框标题 |
| \`width\` | string \\| number | 520 | 模态框宽度 |
| \`loading\` | boolean | false | 是否加载中 |
| \`closable\` | boolean | true | 是否可关闭 |
| \`maskClosable\` | boolean | true | 点击遮罩层是否关闭 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| \`update:modelValue\` | (value: boolean) | 值更新事件 |
| \`ok\` | - | 确定按钮点击事件 |
| \`cancel\` | - | 取消按钮点击事件 |

## VsDrawer - 抽屉组件

抽屉组件支持四个方向和自定义宽度。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | boolean | false | 抽屉是否显示 |
| \`title\` | string | - | 抽屉标题 |
| \`placement\` | 'left' \\| 'right' \\| 'top' \\| 'bottom' | 'right' | 抽屉位置 |
| \`width\` | string \\| number | 360 | 抽屉宽度 |
| \`closable\` | boolean | true | 是否可关闭 |
| \`maskClosable\` | boolean | true | 点击遮罩层是否关闭 |

## VsPagination - 分页组件

分页组件支持页码切换和页数选择。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`modelValue\` | number | 1 | 当前页码 |
| \`total\` | number | - | 总数据条数 |
| \`pageSize\` | number | 10 | 每页显示条数 |
| \`pageSizes\` | number[] | [10, 20, 50, 100] | 可选的每页条数 |
| \`showSizeChanger\` | boolean | false | 是否显示页数选择器 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| \`update:modelValue\` | (page: number) | 页码更新事件 |
| \`change\` | (page: number, pageSize: number) | 页码或页数变化事件 |

## VsBreadcrumb - 面包屑组件

面包屑组件用于显示导航路径。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`items\` | BreadcrumbItem[] | [] | 面包屑项目 |
| \`separator\` | string | '/' | 分隔符 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| \`click\` | (item: BreadcrumbItem) | 项目点击事件 |

## VsCard - 卡片组件

卡片组件用于展示内容。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`type\` | number | 4 | 卡片类型 |
| \`color\` | string | - | 卡片颜色 |
| \`interactive\` | boolean | true | 是否启用悬停动画 |

---

**更多详细信息请参考 GitHub 仓库的 docs/COMPONENTS.md 文件。**
`;

const installationDoc = `# 安装和使用指南

## 快速开始

### 1. 安装依赖

\`\`\`bash
# 使用 pnpm
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
\`\`\`

### 2. 导入组件

#### 全量导入

\`\`\`typescript
import { VsButton, VsInput, VsSelect } from '@vuesax-next-ru/components';
\`\`\`

#### 按需导入

\`\`\`typescript
import { VsButton } from '@vuesax-next-ru/components/button';
import { VsInput } from '@vuesax-next-ru/components/input';
import { VsSelect } from '@vuesax-next-ru/components/select';
\`\`\`

### 3. 在 Vue 组件中使用

\`\`\`vue
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
\`\`\`

## 项目结构

\`\`\`
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
\`\`\`

## 开发指南

### 本地开发

\`\`\`bash
# 进入 Playground 目录
cd playground

# 启动开发服务器
pnpm dev

# 访问 http://localhost:5173
\`\`\`

### 构建

\`\`\`bash
# 构建 Playground
cd playground
pnpm build

# 构建输出在 dist 目录
\`\`\`

### 组件开发

#### 创建新组件

1. 在 \`packages/components/\` 中创建新组件目录

\`\`\`bash
mkdir packages/components/YourComponent
\`\`\`

2. 创建组件文件结构

\`\`\`
YourComponent/
├── types.ts           # TypeScript 类型定义
├── YourComponent.vue  # 组件实现
├── index.ts           # 导出入口
└── package.json       # 包配置
\`\`\`

3. 在 \`packages/components/index.ts\` 中导出新组件

\`\`\`typescript
export { YourComponent } from './YourComponent';
export type { YourComponentProps, YourComponentEmits } from './YourComponent/types';
\`\`\`

## 主题定制

### CSS 变量

所有组件都使用 CSS 变量，可以通过修改根元素的变量来自定义主题：

\`\`\`css
:root {
  /* 汝窑色彩系统 */
  --vs-primary: #7BBFC3;        /* 天青 */
  --vs-success: #90B44B;        /* 粉青 */
  --vs-warn: #E08A5E;           /* 琥珀 */
  --vs-danger: #CF4647;         /* 釉红 */
  --vs-bg: #F5F7F8;             /* 月白 */
}
\`\`\`

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 常见问题

### Q: 如何在 TypeScript 项目中使用？

A: 所有组件都提供完整的 TypeScript 类型定义，可以直接导入使用。

### Q: 如何自定义组件样式？

A: 可以通过以下方式自定义样式：

1. 修改 CSS 变量
2. 使用 CSS 覆盖
3. 使用 SCSS 变量

### Q: 组件是否支持 SSR？

A: 目前不支持 SSR，但可以通过动态导入实现。

---

**更多详细信息请参考 GitHub 仓库的 docs/INSTALLATION.md 文件。**
`;

const designDoc = `# 汝窑美学设计规范

## 设计理念

Vuesax-Next (Ru Edition) 融合了现代 UI 设计与东方美学，以汝窑陶瓷为灵感，创造出低饱和度、高质感的设计系统。

### 核心价值观

- **东方美学** - 融入中国传统美学元素
- **简洁优雅** - 去除繁复，保留本质
- **高质感** - 通过细节打磨提升品质感
- **可用性** - 在美学基础上确保易用性

## 色彩系统

### 汝窑色彩

汝窑色彩系统由五种主要颜色组成，每种颜色都代表不同的含义：

| 色彩名称 | 十六进制 | RGB | 含义 | 用途 |
|---------|---------|-----|------|------|
| **天青** | \`#7BBFC3\` | (123, 191, 195) | 宁静致远 | Primary 主色 |
| **粉青** | \`#90B44B\` | (144, 180, 75) | 生机活力 | Success 成功色 |
| **琥珀** | \`#E08A5E\` | (224, 138, 94) | 温暖沉稳 | Warning 警告色 |
| **釉红** | \`#CF4647\` | (207, 70, 71) | 警醒有力 | Danger 危险色 |
| **月白** | \`#F5F7F8\` | (245, 247, 248) | 纯净无瑕 | Background 背景色 |

## 排版系统

### 字体尺寸

| 用途 | 尺寸 | 行高 | 使用场景 |
|------|------|------|---------|
| 超大标题 | 32px | 1.2 | 页面主标题 |
| 大标题 | 24px | 1.3 | 模块标题 |
| 标题 | 20px | 1.4 | 卡片标题 |
| 副标题 | 18px | 1.4 | 小标题 |
| 正文 | 16px | 1.6 | 主要内容 |
| 小正文 | 14px | 1.6 | 次要内容 |
| 标签 | 12px | 1.5 | 标签、徽章 |

### 字体权重

| 权重 | 值 | 用途 |
|------|-----|------|
| Light | 300 | 辅助信息 |
| Normal | 400 | 正文 |
| Medium | 500 | 强调 |
| Semibold | 600 | 标题、按钮 |
| Bold | 700 | 重点标题 |

## 间距系统

采用 4px 基础网格系统：

| 变量 | 值 | 用途 |
|------|-----|------|
| xs | 4px | 极小间距 |
| sm | 8px | 小间距 |
| md | 12px | 中间距 |
| lg | 16px | 大间距 |
| xl | 24px | 超大间距 |

## 圆角系统

| 变量 | 值 | 用途 |
|------|-----|------|
| sm | 4px | 小圆角 |
| md | 8px | 中圆角 |
| lg | 12px | 大圆角 |
| xl | 16px | 超大圆角 |

## 阴影系统

| 等级 | 值 | 用途 |
|------|-----|------|
| sm | 0 1px 2px rgba(0, 0, 0, 0.05) | 微妙阴影 |
| md | 0 4px 6px rgba(0, 0, 0, 0.1) | 标准阴影 |
| lg | 0 10px 15px rgba(0, 0, 0, 0.1) | 浮起阴影 |
| xl | 0 20px 25px rgba(0, 0, 0, 0.15) | 深层阴影 |

## 过渡和动画

### 过渡时间

| 类型 | 时间 | 用途 |
|------|------|------|
| Fast | 150ms | 快速交互 |
| Base | 250ms | 标准过渡 |
| Slow | 350ms | 缓慢过渡 |

### 缓动函数

- **ease-out** - 默认，用于大多数过渡
- **ease-in-out** - 用于复杂动画
- **linear** - 用于连续动画

## 无障碍设计

### 键盘导航

所有交互元素都应该支持键盘导航。

### 颜色对比度

确保文本与背景的对比度符合 WCAG AA 标准（至少 4.5:1）。

### 语义化 HTML

使用语义化的 HTML 标签。

---

**更多详细信息请参考 GitHub 仓库的 docs/DESIGN.md 文件。**
`;

onMounted(() => {
  // 监听路由变化
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      activeDoc.value = hash;
    }
  });
});
</script>

<style scoped lang="scss">
.docs-page {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  min-height: 100vh;
  background: #F5F7F8;
  padding: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }

  @media (max-width: 640px) {
    padding: 16px;
    gap: 16px;
  }
}

.docs-nav {
  position: sticky;
  top: 20px;
  height: fit-content;
  border: 1px solid #E8EAED;
  border-radius: 8px;
  background: white;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

.nav-header {
  padding: 16px;
  font-weight: 600;
  border-bottom: 1px solid #E8EAED;
  color: var(--vs-text-primary);

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4B5563;
  }
}

.docs-nav-list {
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow-y: auto;
}

.nav-link {
  padding: 12px 16px;
  color: #7F8C8D;
  text-decoration: none;
  font-size: 14px;
  transition: all 250ms;
  border-left: 3px solid transparent;
  cursor: pointer;

  &:hover {
    color: var(--vs-primary);
    background: rgba(123, 191, 195, 0.05);
    border-left-color: var(--vs-primary);
  }

  &.active {
    color: var(--vs-primary);
    background: rgba(123, 191, 195, 0.1);
    border-left-color: var(--vs-primary);
    font-weight: 600;
  }
}

.docs-content {
  min-width: 0;
}

.doc-section {
  animation: fadeIn 300ms ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .docs-page {
    padding: 12px;
  }
}
</style>
