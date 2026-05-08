<template>
  <div class="components-page">
    <!-- 顶部导航 -->
    <div class="components-nav">
      <div class="nav-container">
        <h2>组件库</h2>
        <div class="nav-items">
          <a
            v-for="component in componentList"
            :key="component.id"
            :href="`#${component.id}`"
            class="nav-item"
            :class="{ active: activeComponent === component.id }"
            @click="activeComponent = component.id"
          >
            {{ component.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- 组件演示区域 -->
    <div class="components-content">
      <!-- VsButton 演示 -->
      <section id="vsbutton" class="component-section">
        <ComponentDemo
          component-name="VsButton"
          description="按钮组件 - 支持 4 种类型、6 种颜色、5 种尺寸"
          :code="buttonCode"
          :props="buttonProps"
          :events="buttonEvents"
        >
          <div class="demo-group">
            <h4>基础按钮</h4>
            <div class="button-group">
              <VsButton type="flat" color="primary">主按钮</VsButton>
              <VsButton type="flat" color="success">成功</VsButton>
              <VsButton type="flat" color="warn">警告</VsButton>
              <VsButton type="flat" color="danger">危险</VsButton>
            </div>
          </div>

          <div class="demo-group">
            <h4>不同类型</h4>
            <div class="button-group">
              <VsButton type="flat">扁平</VsButton>
              <VsButton type="relief">浮起</VsButton>
              <VsButton type="border">边框</VsButton>
              <VsButton type="gradient">渐变</VsButton>
            </div>
          </div>

          <div class="demo-group">
            <h4>不同尺寸</h4>
            <div class="button-group">
              <VsButton size="sm">小</VsButton>
              <VsButton size="md">中</VsButton>
              <VsButton size="lg">大</VsButton>
            </div>
          </div>

          <div class="demo-group">
            <h4>特殊状态</h4>
            <div class="button-group">
              <VsButton :loading="isLoading" @click="toggleLoading">
                {{ isLoading ? '加载中' : '点击加载' }}
              </VsButton>
              <VsButton disabled>禁用</VsButton>
              <VsButton circle>✓</VsButton>
            </div>
          </div>
        </ComponentDemo>
      </section>

      <!-- VsInput 演示 -->
      <section id="vsinput" class="component-section">
        <ComponentDemo
          component-name="VsInput"
          description="输入框组件 - 支持 8 种类型、验证系统、前后缀"
          :code="inputCode"
          :props="inputProps"
          :events="inputEvents"
        >
          <div class="demo-group">
            <h4>基础输入</h4>
            <VsInput
              v-model="inputValue"
              placeholder="输入文本"
              clearable
            />
          </div>

          <div class="demo-group">
            <h4>密码输入</h4>
            <VsInput
              v-model="passwordValue"
              type="password"
              placeholder="输入密码"
              prefix="🔒"
            />
          </div>

          <div class="demo-group">
            <h4>邮箱验证</h4>
            <VsInput
              v-model="emailValue"
              type="email"
              placeholder="输入邮箱"
              :validate="validateEmail"
              :error-message="emailError"
            />
          </div>

          <div class="demo-group">
            <h4>不同尺寸</h4>
            <VsInput size="sm" placeholder="小尺寸" />
            <VsInput size="md" placeholder="中尺寸" />
            <VsInput size="lg" placeholder="大尺寸" />
          </div>

          <div class="demo-group">
            <h4>不同状态</h4>
            <VsInput state="success" value="成功状态" />
            <VsInput state="warn" value="警告状态" />
            <VsInput state="danger" value="错误状态" />
          </div>
        </ComponentDemo>
      </section>

      <!-- VsSelect 演示 -->
      <section id="vsselect" class="component-section">
        <ComponentDemo
          component-name="VsSelect"
          description="下拉选择组件 - 支持单选、多选、搜索"
          :code="selectCode"
          :props="selectProps"
          :events="selectEvents"
        >
          <div class="demo-group">
            <h4>单选</h4>
            <VsSelect
              v-model="selectedOption"
              :options="options"
              placeholder="选择一个选项"
              searchable
              clearable
            />
          </div>

          <div class="demo-group">
            <h4>多选</h4>
            <VsSelect
              v-model="multiSelected"
              :options="options"
              multiple
              placeholder="选择多个选项"
            />
          </div>
        </ComponentDemo>
      </section>

      <!-- VsCheckbox 演示 -->
      <section id="vscheckbox" class="component-section">
        <ComponentDemo
          component-name="VsCheckbox"
          description="复选框组件 - 支持单个、分组、不确定状态"
          :code="checkboxCode"
          :props="checkboxProps"
          :events="checkboxEvents"
        >
          <div class="demo-group">
            <h4>单个复选框</h4>
            <VsCheckbox v-model="checked" label="同意条款" />
          </div>

          <div class="demo-group">
            <h4>复选框组</h4>
            <div class="checkbox-group">
              <VsCheckbox
                v-for="item in checkboxItems"
                :key="item.value"
                v-model="selectedCheckboxes"
                :value="item.value"
                :label="item.label"
              />
            </div>
          </div>
        </ComponentDemo>
      </section>

      <!-- VsRadio 演示 -->
      <section id="vsradio" class="component-section">
        <ComponentDemo
          component-name="VsRadio"
          description="单选框组件 - 支持单选、分组"
          :code="radioCode"
          :props="radioProps"
          :events="radioEvents"
        >
          <div class="demo-group">
            <h4>单选框组</h4>
            <div class="radio-group">
              <VsRadio
                v-for="item in radioItems"
                :key="item.value"
                v-model="selectedRadio"
                :value="item.value"
                :label="item.label"
              />
            </div>
            <p>当前选择: {{ selectedRadio }}</p>
          </div>
        </ComponentDemo>
      </section>

      <!-- VsSwitch 演示 -->
      <section id="vsswitch" class="component-section">
        <ComponentDemo
          component-name="VsSwitch"
          description="开关切换组件 - 支持 3 种尺寸、自定义文本"
          :code="switchCode"
          :props="switchProps"
          :events="switchEvents"
        >
          <div class="demo-group">
            <h4>基础开关</h4>
            <VsSwitch v-model="switchEnabled" />
          </div>

          <div class="demo-group">
            <h4>带文本的开关</h4>
            <VsSwitch
              v-model="switchEnabled"
              active-text="开启"
              inactive-text="关闭"
            />
          </div>

          <div class="demo-group">
            <h4>不同尺寸</h4>
            <VsSwitch v-model="switchEnabled" size="sm" />
            <VsSwitch v-model="switchEnabled" size="md" />
            <VsSwitch v-model="switchEnabled" size="lg" />
          </div>
        </ComponentDemo>
      </section>

      <!-- VsAlert 演示 -->
      <section id="vsalert" class="component-section">
        <ComponentDemo
          component-name="VsAlert"
          description="警告提示组件 - 支持 4 种类型、可关闭"
          :code="alertCode"
          :props="alertProps"
          :events="alertEvents"
        >
          <VsAlert
            type="success"
            title="成功"
            description="操作成功完成"
            closable
            icon="✓"
          />

          <VsAlert
            type="warn"
            title="警告"
            description="请注意这个警告信息"
            closable
            icon="⚠"
          />

          <VsAlert
            type="danger"
            title="错误"
            description="发生了一个错误"
            closable
            icon="✕"
          />

          <VsAlert
            type="info"
            title="信息"
            description="这是一条信息提示"
            closable
            icon="ℹ"
          />
        </ComponentDemo>
      </section>

      <!-- VsModal 演示 -->
      <section id="vsmodal" class="component-section">
        <ComponentDemo
          component-name="VsModal"
          description="模态框组件 - 支持加载状态、自定义按钮"
          :code="modalCode"
          :props="modalProps"
          :events="modalEvents"
        >
          <VsButton @click="modalVisible = true">打开模态框</VsButton>

          <VsModal
            v-model="modalVisible"
            title="确认操作"
            width="520"
            :loading="modalLoading"
            @ok="handleModalOk"
            @cancel="handleModalCancel"
          >
            <p>您确定要执行此操作吗？</p>
            <p>这个操作无法撤销。</p>
          </VsModal>
        </ComponentDemo>
      </section>

      <!-- VsPagination 演示 -->
      <section id="vspagination" class="component-section">
        <ComponentDemo
          component-name="VsPagination"
          description="分页组件 - 支持页码切换、页数选择"
          :code="paginationCode"
          :props="paginationProps"
          :events="paginationEvents"
        >
          <div class="demo-group">
            <h4>基础分页</h4>
            <VsPagination
              v-model="currentPage"
              :total="100"
              :page-size="10"
              @change="handlePageChange"
            />
          </div>

          <div class="demo-group">
            <h4>带页数选择器</h4>
            <VsPagination
              v-model="currentPage"
              :total="100"
              :page-size="pageSize"
              :page-sizes="[10, 20, 50, 100]"
              show-size-changer
              @change="handlePageChange"
            />
          </div>
        </ComponentDemo>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  VsButton,
  VsInput,
  VsSelect,
  VsCheckbox,
  VsRadio,
  VsSwitch,
  VsAlert,
  VsModal,
  VsPagination,
} from '@vuesax-next-ru/components';
import ComponentDemo from '../components/ComponentDemo.vue';

const activeComponent = ref('vsbutton');
const isLoading = ref(false);

// 表单值
const inputValue = ref('');
const passwordValue = ref('');
const emailValue = ref('');
const emailError = ref('');
const selectedOption = ref('');
const multiSelected = ref([]);
const checked = ref(false);
const selectedCheckboxes = ref([]);
const selectedRadio = ref('option1');
const switchEnabled = ref(false);
const modalVisible = ref(false);
const modalLoading = ref(false);
const currentPage = ref(1);
const pageSize = ref(10);

// 组件列表
const componentList = [
  { id: 'vsbutton', name: 'VsButton' },
  { id: 'vsinput', name: 'VsInput' },
  { id: 'vsselect', name: 'VsSelect' },
  { id: 'vscheckbox', name: 'VsCheckbox' },
  { id: 'vsradio', name: 'VsRadio' },
  { id: 'vsswitch', name: 'VsSwitch' },
  { id: 'vsalert', name: 'VsAlert' },
  { id: 'vsmodal', name: 'VsModal' },
  { id: 'vspagination', name: 'VsPagination' },
];

// 选项数据
const options = [
  { label: '选项 1', value: 1 },
  { label: '选项 2', value: 2 },
  { label: '选项 3', value: 3 },
  { label: '选项 4', value: 4 },
];

const checkboxItems = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
];

const radioItems = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
];

// 验证函数
const validateEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || '请输入有效的邮箱';
};

// 事件处理
const toggleLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

const handleModalOk = async () => {
  modalLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  modalLoading.value = false;
  modalVisible.value = false;
};

const handleModalCancel = () => {
  modalVisible.value = false;
};

const handlePageChange = (page: number, size: number) => {
  console.log(`跳转到第 ${page} 页，每页 ${size} 条`);
};

// 代码示例
const buttonCode = `<template>
  <div>
    <VsButton type="flat" color="primary">主按钮</VsButton>
    <VsButton type="relief" color="success">浮起按钮</VsButton>
    <VsButton type="border" color="warn">边框按钮</VsButton>
    <VsButton type="gradient" color="danger">渐变按钮</VsButton>
    <VsButton size="lg" :loading="isLoading">加载中</VsButton>
    <VsButton disabled>禁用</VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton } from '@vuesax-next-ru/components';

const isLoading = ref(false);
</script>`;

const inputCode = `<template>
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
</script>`;

const selectCode = `<template>
  <div>
    <VsSelect
      v-model="selected"
      :options="options"
      placeholder="选择一个选项"
      searchable
      clearable
    />
    
    <VsSelect
      v-model="multiSelected"
      :options="options"
      multiple
      placeholder="选择多个选项"
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
];
</script>`;

const checkboxCode = `<template>
  <div>
    <VsCheckbox v-model="checked" label="同意条款" />
    
    <VsCheckbox
      v-for="item in items"
      :key="item.value"
      v-model="selectedItems"
      :value="item.value"
      :label="item.label"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsCheckbox } from '@vuesax-next-ru/components';

const checked = ref(false);
const selectedItems = ref([]);

const items = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
];
</script>`;

const radioCode = `<template>
  <div>
    <VsRadio
      v-for="item in options"
      :key="item.value"
      v-model="selected"
      :value="item.value"
      :label="item.label"
    />
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
</script>`;

const switchCode = `<template>
  <div>
    <VsSwitch v-model="enabled" />
    
    <VsSwitch
      v-model="enabled"
      active-text="开启"
      inactive-text="关闭"
    />
    
    <VsSwitch v-model="enabled" size="lg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsSwitch } from '@vuesax-next-ru/components';

const enabled = ref(false);
</script>`;

const alertCode = `<template>
  <div>
    <VsAlert
      type="success"
      title="成功"
      description="操作成功完成"
      closable
      icon="✓"
    />
    
    <VsAlert
      type="danger"
      title="错误"
      description="发生了一个错误"
      closable
      icon="✕"
    />
  </div>
</template>

<script setup lang="ts">
import { VsAlert } from '@vuesax-next-ru/components';
</script>`;

const modalCode = `<template>
  <div>
    <VsButton @click="visible = true">打开模态框</VsButton>
    
    <VsModal
      v-model="visible"
      title="确认操作"
      :loading="loading"
      @ok="handleOk"
    >
      <p>您确定要执行此操作吗？</p>
    </VsModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsButton, VsModal } from '@vuesax-next-ru/components';

const visible = ref(false);
const loading = ref(false);

const handleOk = async () => {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
  visible.value = false;
};
</script>`;

const paginationCode = `<template>
  <div>
    <VsPagination
      v-model="currentPage"
      :total="100"
      :page-size="10"
      @change="handlePageChange"
    />
    
    <VsPagination
      v-model="currentPage"
      :total="100"
      :page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      show-size-changer
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VsPagination } from '@vuesax-next-ru/components';

const currentPage = ref(1);
const pageSize = ref(10);

const handlePageChange = (page, size) => {
  console.log(\`第 \${page} 页，每页 \${size} 条\`);
};
</script>`;

// Props 定义
const buttonProps = [
  { name: 'type', type: "'flat' | 'relief' | 'border' | 'gradient'", default: "'flat'", description: '按钮类型' },
  { name: 'color', type: "'primary' | 'success' | 'warn' | 'danger'", default: "'primary'", description: '按钮颜色' },
  { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: '按钮尺寸' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'loading', type: 'boolean', default: 'false', description: '是否加载中' },
];

const inputProps = [
  { name: 'type', type: 'string', default: "'text'", description: '输入框类型' },
  { name: 'modelValue', type: 'string | number', default: "''", description: '输入框值' },
  { name: 'placeholder', type: 'string', default: '-', description: '占位符' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '是否显示清空按钮' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
];

const selectProps = [
  { name: 'modelValue', type: 'string | number | array', default: '-', description: '选择的值' },
  { name: 'options', type: 'SelectOption[]', default: '-', description: '选项列表' },
  { name: 'multiple', type: 'boolean', default: 'false', description: '是否多选' },
  { name: 'searchable', type: 'boolean', default: 'false', description: '是否可搜索' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '是否显示清空按钮' },
];

const checkboxProps = [
  { name: 'modelValue', type: 'boolean | string | number', default: '-', description: '复选框值' },
  { name: 'value', type: 'string | number', default: '-', description: '复选框的值' },
  { name: 'label', type: 'string', default: '-', description: '复选框标签' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
];

const radioProps = [
  { name: 'modelValue', type: 'string | number | boolean', default: '-', description: '单选框值' },
  { name: 'value', type: 'string | number | boolean', default: '-', description: '单选框的值' },
  { name: 'label', type: 'string', default: '-', description: '单选框标签' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
];

const switchProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '开关状态' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '开关尺寸' },
  { name: 'activeText', type: 'string', default: '-', description: '激活时的文本' },
  { name: 'inactiveText', type: 'string', default: '-', description: '未激活时的文本' },
];

const alertProps = [
  { name: 'type', type: "'success' | 'warn' | 'danger' | 'info'", default: "'info'", description: '提示类型' },
  { name: 'title', type: 'string', default: '-', description: '提示标题' },
  { name: 'description', type: 'string', default: '-', description: '提示描述' },
  { name: 'closable', type: 'boolean', default: 'true', description: '是否可关闭' },
];

const modalProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '模态框是否显示' },
  { name: 'title', type: 'string', default: '-', description: '模态框标题' },
  { name: 'width', type: 'string | number', default: '520', description: '模态框宽度' },
  { name: 'loading', type: 'boolean', default: 'false', description: '是否加载中' },
  { name: 'closable', type: 'boolean', default: 'true', description: '是否可关闭' },
];

const paginationProps = [
  { name: 'modelValue', type: 'number', default: '1', description: '当前页码' },
  { name: 'total', type: 'number', default: '-', description: '总数据条数' },
  { name: 'pageSize', type: 'number', default: '10', description: '每页显示条数' },
  { name: 'showSizeChanger', type: 'boolean', default: 'false', description: '是否显示页数选择器' },
];

// Events 定义
const buttonEvents = [
  { name: 'click', params: '(event: MouseEvent)', description: '按钮点击事件' },
];

const inputEvents = [
  { name: 'update:modelValue', params: '(value: string | number)', description: '值更新事件' },
  { name: 'change', params: '(value: string | number)', description: '变化事件' },
];

const selectEvents = [
  { name: 'update:modelValue', params: '(value: any)', description: '值更新事件' },
  { name: 'change', params: '(value: any)', description: '变化事件' },
];

const checkboxEvents = [
  { name: 'update:modelValue', params: '(value: boolean | string | number)', description: '值更新事件' },
  { name: 'change', params: '(value: boolean | string | number)', description: '变化事件' },
];

const radioEvents = [
  { name: 'update:modelValue', params: '(value: string | number | boolean)', description: '值更新事件' },
  { name: 'change', params: '(value: string | number | boolean)', description: '变化事件' },
];

const switchEvents = [
  { name: 'update:modelValue', params: '(value: boolean)', description: '值更新事件' },
  { name: 'change', params: '(value: boolean)', description: '变化事件' },
];

const alertEvents = [
  { name: 'close', params: '-', description: '关闭事件' },
];

const modalEvents = [
  { name: 'update:modelValue', params: '(value: boolean)', description: '值更新事件' },
  { name: 'ok', params: '-', description: '确定按钮点击事件' },
  { name: 'cancel', params: '-', description: '取消按钮点击事件' },
];

const paginationEvents = [
  { name: 'update:modelValue', params: '(page: number)', description: '页码更新事件' },
  { name: 'change', params: '(page: number, pageSize: number)', description: '页码或页数变化事件' },
];
</script>

<style scoped lang="scss">
.components-page {
  min-height: 100vh;
  background: #F5F7F8;

  @media (prefers-color-scheme: dark) {
    background: #1F2937;
  }
}

.components-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  border-bottom: 1px solid #E8EAED;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-bottom-color: #4B5563;
  }
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--vs-primary);
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    padding: 0 24px;
    gap: 24px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 16px;
  }
}

.nav-items {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 8px;

  @media (max-width: 640px) {
    gap: 12px;
    width: 100%;
  }
}

.nav-item {
  padding: 12px 0;
  color: #7F8C8D;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    color: var(--vs-primary);
  }

  &.active {
    color: var(--vs-primary);
    border-bottom-color: var(--vs-primary);
  }
}

.components-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 24px;
  }

  @media (max-width: 640px) {
    padding: 16px;
  }
}

.component-section {
  margin-bottom: 60px;
  scroll-margin-top: 80px;

  &:last-child {
    margin-bottom: 0;
  }
}

.demo-group {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    margin: 0 0 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--vs-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.checkbox-group,
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

p {
  margin: 12px 0 0 0;
  font-size: 14px;
  color: var(--vs-text-secondary);
}
</style>
