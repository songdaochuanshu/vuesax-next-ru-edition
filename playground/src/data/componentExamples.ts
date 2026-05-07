/**
 * 所有组件的示例数据和代码
 */

export interface ComponentExample {
  name: string;
  category: string;
  description: string;
  code: string;
}

export const componentExamples: ComponentExample[] = [
  {
    name: 'VsButton',
    category: '基础组件',
    description: '按钮组件 - 支持 4 种类型、6 种颜色、5 种尺寸',
    code: `<template>
  <div class="component-demo">
    <!-- 扁平风格 -->
    <VsButton type="flat" color="primary">主按钮</VsButton>
    <VsButton type="flat" color="success">成功</VsButton>
    <VsButton type="flat" color="warn">警告</VsButton>
    <VsButton type="flat" color="danger">危险</VsButton>

    <!-- 浮起风格 -->
    <VsButton type="relief" color="primary">浮起按钮</VsButton>

    <!-- 边框风格 -->
    <VsButton type="border" color="primary">边框按钮</VsButton>

    <!-- 渐变风格 -->
    <VsButton type="gradient" color="primary">渐变按钮</VsButton>

    <!-- 尺寸 -->
    <VsButton size="sm">小</VsButton>
    <VsButton size="md">中</VsButton>
    <VsButton size="lg">大</VsButton>

    <!-- 特殊状态 -->
    <VsButton :loading="isLoading">加载中...</VsButton>
    <VsButton disabled>禁用</VsButton>
    <VsButton circle>✓</VsButton>
    <VsButton block>块级按钮</VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton } from '@vuesax-next-ru/components';

const isLoading = ref(false);
</script>`,
  },
  {
    name: 'VsInput',
    category: '表单组件',
    description: '输入框组件 - 支持 8 种类型、验证系统、前后缀',
    code: `<template>
  <div class="component-demo">
    <!-- 基础输入 -->
    <VsInput
      v-model="text"
      type="text"
      placeholder="输入文本"
      clearable
    />

    <!-- 密码输入 -->
    <VsInput
      v-model="password"
      type="password"
      placeholder="输入密码"
      prefix="🔒"
    />

    <!-- 邮箱验证 -->
    <VsInput
      v-model="email"
      type="email"
      placeholder="输入邮箱"
      :validate="validateEmail"
      :error-message="emailError"
    />

    <!-- 数字输入 -->
    <VsInput
      v-model.number="age"
      type="number"
      placeholder="输入年龄"
      :min="0"
      :max="120"
    />

    <!-- 搜索框 -->
    <VsInput
      v-model="search"
      type="search"
      placeholder="搜索..."
      suffix-icon="🔍"
    />

    <!-- 日期选择 -->
    <VsInput
      v-model="date"
      type="date"
    />

    <!-- 不同尺寸 -->
    <VsInput size="sm" placeholder="小尺寸" />
    <VsInput size="md" placeholder="中尺寸" />
    <VsInput size="lg" placeholder="大尺寸" />

    <!-- 不同状态 -->
    <VsInput state="success" value="成功状态" />
    <VsInput state="warn" value="警告状态" />
    <VsInput state="danger" value="错误状态" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsInput } from '@vuesax-next-ru/components';

const text = ref('');
const password = ref('');
const email = ref('');
const age = ref(0);
const search = ref('');
const date = ref('');

const emailError = ref('');

const validateEmail = (value: string) => {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) || '请输入有效的邮箱';
};
</script>`,
  },
  {
    name: 'VsSelect',
    category: '表单组件',
    description: '下拉选择组件 - 支持单选、多选、搜索',
    code: `<template>
  <div class="component-demo">
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

    <!-- 禁用选项 -->
    <VsSelect
      v-model="selected"
      :options="optionsWithDisabled"
      placeholder="包含禁用选项"
    />
  </div>
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
  { label: '选项 4', value: 4 },
];

const optionsWithDisabled = [
  { label: '选项 1', value: 1 },
  { label: '选项 2（禁用）', value: 2, disabled: true },
  { label: '选项 3', value: 3 },
];
</script>`,
  },
  {
    name: 'VsCheckbox',
    category: '表单组件',
    description: '复选框组件 - 支持单个、分组、不确定状态',
    code: `<template>
  <div class="component-demo">
    <!-- 单个复选框 -->
    <VsCheckbox
      v-model="checked"
      label="同意条款"
    />

    <!-- 复选框组 -->
    <div class="checkbox-group">
      <VsCheckbox
        v-for="item in items"
        :key="item.value"
        v-model="selectedItems"
        :value="item.value"
        :label="item.label"
      />
    </div>

    <!-- 不确定状态 -->
    <VsCheckbox
      :model-value="isIndeterminate"
      :indeterminate="isIndeterminate"
      label="不确定状态"
    />

    <!-- 禁用 -->
    <VsCheckbox
      disabled
      label="禁用复选框"
    />
  </div>
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
</script>`,
  },
  {
    name: 'VsRadio',
    category: '表单组件',
    description: '单选框组件 - 支持单选、分组',
    code: `<template>
  <div class="component-demo">
    <!-- 单选框组 -->
    <div class="radio-group">
      <VsRadio
        v-for="item in options"
        :key="item.value"
        v-model="selected"
        :value="item.value"
        :label="item.label"
      />
    </div>

    <!-- 禁用 -->
    <VsRadio
      disabled
      value="disabled"
      label="禁用选项"
    />

    <!-- 选中值 -->
    <p>当前选择: {{ selected }}</p>
  </div>
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
</script>`,
  },
  {
    name: 'VsSwitch',
    category: '表单组件',
    description: '开关切换组件 - 支持 3 种尺寸、自定义文本',
    code: `<template>
  <div class="component-demo">
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
    <VsSwitch v-model="enabled" size="md" />
    <VsSwitch v-model="enabled" size="lg" />

    <!-- 禁用 -->
    <VsSwitch disabled />

    <!-- 状态显示 -->
    <p>开关状态: {{ enabled ? '开启' : '关闭' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsSwitch } from '@vuesax-next-ru/components';

const enabled = ref(false);
</script>`,
  },
  {
    name: 'VsAlert',
    category: '提示组件',
    description: '警告提示组件 - 支持 4 种类型、可关闭',
    code: `<template>
  <div class="component-demo">
    <!-- 成功提示 -->
    <VsAlert
      type="success"
      title="成功"
      description="操作成功完成"
      closable
      icon="✓"
    />

    <!-- 警告提示 -->
    <VsAlert
      type="warn"
      title="警告"
      description="请注意这个警告信息"
      closable
      icon="⚠"
    />

    <!-- 错误提示 -->
    <VsAlert
      type="danger"
      title="错误"
      description="发生了一个错误"
      closable
      icon="✕"
    />

    <!-- 信息提示 -->
    <VsAlert
      type="info"
      title="信息"
      description="这是一条信息提示"
      closable
      icon="ℹ"
    />
  </div>
</template>

<script setup lang="ts">
import { VsAlert } from '@vuesax-next-ru/components';
</script>`,
  },
  {
    name: 'VsNotification',
    category: '提示组件',
    description: '通知提示组件 - 支持 6 种位置、自动关闭',
    code: `<template>
  <div class="component-demo">
    <!-- 触发通知 -->
    <VsButton @click="showNotification('top-right')">
      右上角通知
    </VsButton>
    <VsButton @click="showNotification('top-left')">
      左上角通知
    </VsButton>
    <VsButton @click="showNotification('bottom-right')">
      右下角通知
    </VsButton>
    <VsButton @click="showNotification('bottom-left')">
      左下角通知
    </VsButton>

    <!-- 通知组件 -->
    <VsNotification
      v-if="showNotif"
      type="success"
      title="成功"
      message="操作成功完成"
      :position="position"
      :duration="3000"
      closable
      icon="✓"
      @close="showNotif = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsNotification } from '@vuesax-next-ru/components';

const showNotif = ref(false);
const position = ref('top-right');

const showNotification = (pos) => {
  position.value = pos;
  showNotif.value = true;
};
</script>`,
  },
  {
    name: 'VsModal',
    category: '对话框组件',
    description: '模态框组件 - 支持加载状态、自定义按钮',
    code: `<template>
  <div class="component-demo">
    <!-- 打开模态框按钮 -->
    <VsButton @click="modalVisible = true">
      打开模态框
    </VsButton>

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
      <p>这个操作无法撤销。</p>
    </VsModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsModal } from '@vuesax-next-ru/components';

const modalVisible = ref(false);
const loading = ref(false);

const handleOk = async () => {
  loading.value = true;
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
  modalVisible.value = false;
};

const handleCancel = () => {
  modalVisible.value = false;
};
</script>`,
  },
  {
    name: 'VsDrawer',
    category: '对话框组件',
    description: '抽屉组件 - 支持 4 个方向、可关闭',
    code: `<template>
  <div class="component-demo">
    <!-- 打开抽屉按钮 -->
    <VsButton @click="drawerVisible = true">
      打开抽屉（右侧）
    </VsButton>
    <VsButton @click="drawerPlacement = 'left'; drawerVisible = true">
      打开抽屉（左侧）
    </VsButton>
    <VsButton @click="drawerPlacement = 'top'; drawerVisible = true">
      打开抽屉（顶部）
    </VsButton>
    <VsButton @click="drawerPlacement = 'bottom'; drawerVisible = true">
      打开抽屉（底部）
    </VsButton>

    <!-- 抽屉 -->
    <VsDrawer
      v-model="drawerVisible"
      title="抽屉标题"
      :placement="drawerPlacement"
      width="300"
      closable
    >
      <p>这是抽屉的内容区域。</p>
      <p>您可以在这里放置任何内容。</p>
    </VsDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsDrawer } from '@vuesax-next-ru/components';

const drawerVisible = ref(false);
const drawerPlacement = ref('right');
</script>`,
  },
  {
    name: 'VsPagination',
    category: '导航组件',
    description: '分页组件 - 支持页码切换、页数选择',
    code: `<template>
  <div class="component-demo">
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

    <!-- 当前页码: {{ currentPage }} -->
    <!-- 每页显示: {{ pageSize }} -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsPagination } from '@vuesax-next-ru/components';

const currentPage = ref(1);
const pageSize = ref(10);

const handlePageChange = (page, size) => {
  console.log(\`跳转到第 \${page} 页，每页 \${size} 条\`);
};
</script>`,
  },
  {
    name: 'VsBreadcrumb',
    category: '导航组件',
    description: '面包屑组件 - 支持自定义分隔符、点击事件',
    code: `<template>
  <div class="component-demo">
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

    <!-- 当前位置: {{ currentPath }} -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsBreadcrumb } from '@vuesax-next-ru/components';

const currentPath = ref('首页');

const breadcrumbItems = [
  { label: '首页', href: '/' },
  { label: '分类', href: '/category' },
  { label: '商品', href: '/product' },
  { label: '详情' },
];

const handleBreadcrumbClick = (item, index) => {
  currentPath.value = item.label;
  console.log(\`点击了第 \${index} 项: \${item.label}\`);
};
</script>`,
  },
];
