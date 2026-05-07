# Vuesax-Next (Ru Edition) 组件 API 文档

## 目录

1. [VsButton](#vsbutton)
2. [VsInput](#vsinput)
3. [VsSelect](#vsselect)
4. [VsCheckbox](#vscheckbox)
5. [VsRadio](#vsradio)
6. [VsSwitch](#vsswitch)
7. [VsAlert](#vsalert)
8. [VsNotification](#vsnotification)
9. [VsModal](#vsmodal)
10. [VsDrawer](#vsdrawer)
11. [VsPagination](#vspagination)
12. [VsBreadcrumb](#vsbreadcrumb)

---

## VsButton

按钮组件，支持多种类型、颜色和尺寸。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'flat' \| 'relief' \| 'border' \| 'gradient'` | `'flat'` | 按钮类型 |
| `color` | `'primary' \| 'success' \| 'warn' \| 'danger' \| 'dark' \| 'light'` | `'primary'` | 按钮颜色 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 按钮尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `circle` | `boolean` | `false` | 是否为圆形按钮 |
| `block` | `boolean` | `false` | 是否为块级按钮 |
| `nativeType` | `'button' \| 'submit' \| 'reset'` | `'button'` | 原生按钮类型 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `click` | `(event: MouseEvent)` | 按钮点击事件 |

### 示例

```vue
<template>
  <!-- 基础按钮 -->
  <VsButton>点击我</VsButton>

  <!-- 不同类型 -->
  <VsButton type="flat">扁平</VsButton>
  <VsButton type="relief">浮起</VsButton>
  <VsButton type="border">边框</VsButton>
  <VsButton type="gradient">渐变</VsButton>

  <!-- 不同颜色 -->
  <VsButton color="success">成功</VsButton>
  <VsButton color="warn">警告</VsButton>
  <VsButton color="danger">危险</VsButton>

  <!-- 不同尺寸 -->
  <VsButton size="sm">小</VsButton>
  <VsButton size="lg">大</VsButton>

  <!-- 特殊状态 -->
  <VsButton :loading="isLoading">加载中</VsButton>
  <VsButton disabled>禁用</VsButton>
  <VsButton circle>✓</VsButton>
  <VsButton block>块级按钮</VsButton>
</template>

<script setup lang="ts">
import { VsButton } from '@vuesax-next-ru/components';
</script>
```

---

## VsInput

输入框组件，支持多种输入类型和验证系统。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url' \| 'search' \| 'date' \| 'time' \| 'datetime-local'` | `'text'` | 输入框类型 |
| `modelValue` | `string \| number` | `''` | 输入框值 |
| `placeholder` | `string` | - | 占位符 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `clearable` | `boolean` | `false` | 是否显示清空按钮 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 输入框尺寸 |
| `state` | `'default' \| 'success' \| 'warn' \| 'danger'` | `'default'` | 输入框状态 |
| `prefix` | `string` | - | 前置文本 |
| `suffix` | `string` | - | 后置文本 |
| `prefixIcon` | `string` | - | 前置图标 |
| `suffixIcon` | `string` | - | 后置图标 |
| `maxlength` | `number` | - | 最大长度 |
| `min` | `number` | - | 最小值（number 类型） |
| `max` | `number` | - | 最大值（number 类型） |
| `step` | `number` | - | 步长（number 类型） |
| `validate` | `(value: string \| number) => boolean \| string` | - | 验证函数 |
| `errorMessage` | `string` | - | 错误提示信息 |
| `successMessage` | `string` | - | 成功提示信息 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: string \| number)` | 值更新事件 |
| `input` | `(value: string \| number)` | 输入事件 |
| `change` | `(value: string \| number)` | 变化事件 |
| `focus` | `(event: FocusEvent)` | 焦点事件 |
| `blur` | `(event: FocusEvent)` | 失焦事件 |
| `clear` | - | 清空事件 |

### 示例

```vue
<template>
  <!-- 基础输入 -->
  <VsInput v-model="text" placeholder="输入文本" />

  <!-- 密码输入 -->
  <VsInput v-model="password" type="password" prefix="🔒" />

  <!-- 邮箱验证 -->
  <VsInput
    v-model="email"
    type="email"
    :validate="validateEmail"
    :error-message="emailError"
  />

  <!-- 数字输入 -->
  <VsInput
    v-model.number="age"
    type="number"
    :min="0"
    :max="120"
  />

  <!-- 搜索框 -->
  <VsInput
    v-model="search"
    type="search"
    suffix-icon="🔍"
    clearable
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsInput } from '@vuesax-next-ru/components';

const text = ref('');
const password = ref('');
const email = ref('');
const age = ref(0);
const search = ref('');
const emailError = ref('');

const validateEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || '请输入有效的邮箱';
};
</script>
```

---

## VsSelect

下拉选择组件，支持单选、多选和搜索功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number \| (string \| number)[]` | - | 选择的值 |
| `options` | `SelectOption[]` | - | 选项列表 |
| `placeholder` | `string` | `'请选择'` | 占位符 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 下拉框尺寸 |
| `multiple` | `boolean` | `false` | 是否多选 |
| `clearable` | `boolean` | `false` | 是否显示清空按钮 |
| `searchable` | `boolean` | `false` | 是否可搜索 |
| `maxHeight` | `number` | `300` | 下拉列表最大高度 |

### SelectOption 接口

```typescript
interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}
```

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: string \| number \| (string \| number)[])` | 值更新事件 |
| `change` | `(value: string \| number \| (string \| number)[])` | 变化事件 |

### 示例

```vue
<template>
  <!-- 单选 -->
  <VsSelect
    v-model="selected"
    :options="options"
    placeholder="选择一个选项"
    searchable
    clearable
  />

  <!-- 多选 -->
  <VsSelect
    v-model="multiSelected"
    :options="options"
    multiple
    placeholder="选择多个选项"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsSelect } from '@vuesax-next-ru/components';

const selected = ref('');
const multiSelected = ref([]);

const options = [
  { label: '选项 1', value: 1 },
  { label: '选项 2', value: 2 },
  { label: '选项 3', value: 3 },
];
</script>
```

---

## VsCheckbox

复选框组件，支持单个、分组和不确定状态。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean \| string \| number` | - | 复选框值 |
| `value` | `string \| number` | - | 复选框的值 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `indeterminate` | `boolean` | `false` | 是否不确定状态 |
| `label` | `string` | - | 复选框标签 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: boolean \| string \| number)` | 值更新事件 |
| `change` | `(value: boolean \| string \| number)` | 变化事件 |

### 示例

```vue
<template>
  <!-- 单个复选框 -->
  <VsCheckbox v-model="checked" label="同意条款" />

  <!-- 复选框组 -->
  <VsCheckbox
    v-for="item in items"
    :key="item.value"
    v-model="selectedItems"
    :value="item.value"
    :label="item.label"
  />

  <!-- 不确定状态 -->
  <VsCheckbox
    :model-value="isIndeterminate"
    :indeterminate="isIndeterminate"
    label="不确定状态"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsCheckbox } from '@vuesax-next-ru/components';

const checked = ref(false);
const selectedItems = ref([]);
const isIndeterminate = ref(true);

const items = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
];
</script>
```

---

## VsRadio

单选框组件，支持单选和分组。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number \| boolean` | - | 单选框值 |
| `value` | `string \| number \| boolean` | - | 单选框的值 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `label` | `string` | - | 单选框标签 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: string \| number \| boolean)` | 值更新事件 |
| `change` | `(value: string \| number \| boolean)` | 变化事件 |

### 示例

```vue
<template>
  <!-- 单选框组 -->
  <VsRadio
    v-for="item in options"
    :key="item.value"
    v-model="selected"
    :value="item.value"
    :label="item.label"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsRadio } from '@vuesax-next-ru/components';

const selected = ref('option1');

const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
];
</script>
```

---

## VsSwitch

开关切换组件，支持多种尺寸和自定义文本。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 开关状态 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 开关尺寸 |
| `activeColor` | `string` | `'#7BBFC3'` | 激活时的颜色 |
| `inactiveColor` | `string` | `'#BDC3C7'` | 未激活时的颜色 |
| `activeText` | `string` | - | 激活时的文本 |
| `inactiveText` | `string` | - | 未激活时的文本 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: boolean)` | 值更新事件 |
| `change` | `(value: boolean)` | 变化事件 |

### 示例

```vue
<template>
  <!-- 基础开关 -->
  <VsSwitch v-model="enabled" />

  <!-- 带文本的开关 -->
  <VsSwitch
    v-model="enabled"
    active-text="开启"
    inactive-text="关闭"
  />

  <!-- 不同尺寸 -->
  <VsSwitch v-model="enabled" size="sm" />
  <VsSwitch v-model="enabled" size="lg" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsSwitch } from '@vuesax-next-ru/components';

const enabled = ref(false);
</script>
```

---

## VsAlert

警告提示组件，支持多种类型和可关闭功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'success' \| 'warn' \| 'danger' \| 'info'` | `'info'` | 提示类型 |
| `title` | `string` | - | 提示标题 |
| `description` | `string` | - | 提示描述 |
| `closable` | `boolean` | `true` | 是否可关闭 |
| `icon` | `string` | `'ℹ️'` | 提示图标 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `close` | - | 关闭事件 |

### 示例

```vue
<template>
  <!-- 成功提示 -->
  <VsAlert
    type="success"
    title="成功"
    description="操作成功完成"
    closable
    icon="✓"
  />

  <!-- 错误提示 -->
  <VsAlert
    type="danger"
    title="错误"
    description="发生了一个错误"
    closable
    icon="✕"
  />
</template>

<script setup lang="ts">
import { VsAlert } from '@vuesax-next-ru/components';
</script>
```

---

## VsNotification

通知提示组件，支持多个位置和自动关闭。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'success' \| 'warn' \| 'danger' \| 'info'` | `'info'` | 通知类型 |
| `title` | `string` | - | 通知标题 |
| `message` | `string` | - | 通知消息 |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center' \| 'bottom-center'` | `'top-right'` | 通知位置 |
| `duration` | `number` | `3000` | 自动关闭时间（毫秒） |
| `closable` | `boolean` | `true` | 是否可关闭 |
| `icon` | `string` | `'ℹ️'` | 通知图标 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `close` | - | 关闭事件 |

### 示例

```vue
<template>
  <!-- 右上角通知 -->
  <VsNotification
    v-if="showNotif"
    type="success"
    title="成功"
    message="操作成功完成"
    position="top-right"
    :duration="3000"
    closable
    icon="✓"
    @close="showNotif = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsNotification } from '@vuesax-next-ru/components';

const showNotif = ref(false);
</script>
```

---

## VsModal

模态框组件，支持加载状态和自定义按钮。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 模态框是否显示 |
| `title` | `string` | - | 模态框标题 |
| `width` | `string \| number` | `520` | 模态框宽度 |
| `closable` | `boolean` | `true` | 是否可关闭 |
| `maskClosable` | `boolean` | `true` | 点击遮罩是否关闭 |
| `okText` | `string` | `'确定'` | 确定按钮文本 |
| `cancelText` | `string` | `'取消'` | 取消按钮文本 |
| `loading` | `boolean` | `false` | 是否加载中 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: boolean)` | 值更新事件 |
| `ok` | - | 确定按钮点击事件 |
| `cancel` | - | 取消按钮点击事件 |

### 示例

```vue
<template>
  <!-- 打开模态框 -->
  <VsButton @click="modalVisible = true">打开模态框</VsButton>

  <!-- 模态框 -->
  <VsModal
    v-model="modalVisible"
    title="确认操作"
    width="520"
    :loading="loading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <p>您确定要执行此操作吗？</p>
  </VsModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsModal } from '@vuesax-next-ru/components';

const modalVisible = ref(false);
const loading = ref(false);

const handleOk = async () => {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
  modalVisible.value = false;
};

const handleCancel = () => {
  modalVisible.value = false;
};
</script>
```

---

## VsDrawer

抽屉组件，支持四个方向和可关闭功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 抽屉是否显示 |
| `title` | `string` | - | 抽屉标题 |
| `placement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | 抽屉位置 |
| `width` | `string \| number` | `300` | 抽屉宽度 |
| `closable` | `boolean` | `true` | 是否可关闭 |
| `maskClosable` | `boolean` | `true` | 点击遮罩是否关闭 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(value: boolean)` | 值更新事件 |
| `close` | - | 关闭事件 |

### 示例

```vue
<template>
  <!-- 打开抽屉 -->
  <VsButton @click="drawerVisible = true">打开抽屉</VsButton>

  <!-- 抽屉 -->
  <VsDrawer
    v-model="drawerVisible"
    title="抽屉标题"
    placement="right"
    width="300"
    closable
  >
    <p>这是抽屉的内容区域。</p>
  </VsDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsDrawer } from '@vuesax-next-ru/components';

const drawerVisible = ref(false);
</script>
```

---

## VsPagination

分页组件，支持页码切换和页数选择。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number` | `1` | 当前页码 |
| `total` | `number` | - | 总数据条数 |
| `pageSize` | `number` | `10` | 每页显示条数 |
| `pageSizes` | `number[]` | `[10, 20, 50, 100]` | 可选的每页条数 |
| `showSizeChanger` | `boolean` | `false` | 是否显示页数选择器 |
| `showQuickJumper` | `boolean` | `false` | 是否显示快速跳转 |
| `disabled` | `boolean` | `false` | 是否禁用 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `update:modelValue` | `(page: number)` | 页码更新事件 |
| `change` | `(page: number, pageSize: number)` | 页码或页数变化事件 |

### 示例

```vue
<template>
  <!-- 基础分页 -->
  <VsPagination
    v-model="currentPage"
    :total="100"
    :page-size="10"
    @change="handlePageChange"
  />

  <!-- 带页数选择器 -->
  <VsPagination
    v-model="currentPage"
    :total="100"
    :page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    show-size-changer
    @change="handlePageChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsPagination } from '@vuesax-next-ru/components';

const currentPage = ref(1);
const pageSize = ref(10);

const handlePageChange = (page, size) => {
  console.log(`跳转到第 ${page} 页，每页 ${size} 条`);
};
</script>
```

---

## VsBreadcrumb

面包屑组件，支持自定义分隔符和点击事件。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `items` | `BreadcrumbItem[]` | - | 面包屑项目列表 |
| `separator` | `string` | `'/'` | 分隔符 |

### BreadcrumbItem 接口

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}
```

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `click` | `(item: BreadcrumbItem, index: number)` | 面包屑项点击事件 |

### 示例

```vue
<template>
  <!-- 基础面包屑 -->
  <VsBreadcrumb
    :items="breadcrumbItems"
    separator="/"
    @click="handleBreadcrumbClick"
  />

  <!-- 自定义分隔符 -->
  <VsBreadcrumb
    :items="breadcrumbItems"
    separator=">"
  />
</template>

<script setup lang="ts">
import { VsBreadcrumb } from '@vuesax-next-ru/components';

const breadcrumbItems = [
  { label: '首页', href: '/' },
  { label: '分类', href: '/category' },
  { label: '商品', href: '/product' },
  { label: '详情' },
];

const handleBreadcrumbClick = (item, index) => {
  console.log(`点击了第 ${index} 项: ${item.label}`);
};
</script>
```

---

## 色彩系统

所有组件都遵循汝窑美学色彩系统：

| 色彩名称 | 十六进制 | CSS 变量 | 寓意 |
|---------|---------|---------|------|
| 天青 | `#7BBFC3` | `--vs-primary` | Primary 主色 |
| 粉青 | `#90B44B` | `--vs-success` | Success 成功色 |
| 琥珀 | `#E08A5E` | `--vs-warn` | Warning 警告色 |
| 釉红 | `#CF4647` | `--vs-danger` | Danger 危险色 |
| 月白 | `#F5F7F8` | `--vs-bg` | Background 背景色 |

---

## 最佳实践

### 1. 表单验证

使用 VsInput 的验证系统进行实时验证：

```vue
<VsInput
  v-model="email"
  type="email"
  :validate="validateEmail"
  :error-message="emailError"
/>
```

### 2. 模态框异步操作

在 VsModal 中处理异步操作：

```vue
<VsModal
  v-model="visible"
  :loading="loading"
  @ok="handleAsync"
>
  确认删除？
</VsModal>
```

### 3. 响应式设计

所有组件都支持响应式设计，自动适配移动端。

### 4. 无障碍支持

所有组件都支持键盘导航和焦点管理。

---

## 常见问题

**Q: 如何自定义组件样式？**

A: 所有组件都使用 CSS 变量，可以通过修改根元素的 CSS 变量来自定义样式。

**Q: 组件是否支持深色模式？**

A: 是的，所有组件都自动支持深色模式。

**Q: 如何在 TypeScript 中使用组件？**

A: 所有组件都提供完整的 TypeScript 类型定义，可以直接导入使用。

---

## 更新日志

### v1.0.0 (2026-05-08)

- 🎉 发布首个版本
- ✨ 实现 12 个核心 UI 组件
- 🎨 融入汝窑美学设计
- 📱 完整的响应式支持
- ♿ 无障碍支持
- 📖 完整的 API 文档

---

## 许可证

MIT
