<template>
  <div class="component-showcase">
    <div class="showcase-header">
      <h2>组件库展示</h2>
      <p>所有核心 UI 组件的使用示例</p>
    </div>

    <div class="showcase-grid">
      <div
        v-for="(component, idx) in componentExamples"
        :key="idx"
        class="showcase-card"
      >
        <div class="showcase-card-header">
          <h3>{{ component.name }}</h3>
          <span class="showcase-category">{{ component.category }}</span>
        </div>

        <p class="showcase-description">{{ component.description }}</p>

        <button class="showcase-btn" @click="showCode(component)">
          查看代码
        </button>
      </div>
    </div>

    <!-- 代码预览模态框 -->
    <CodePreview
      :is-open="codePreviewOpen"
      :title="selectedComponent?.name"
      :code="selectedComponent?.code || ''"
      @close="codePreviewOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { componentExamples } from '../data/componentExamples';
import CodePreview from './CodePreview.vue';

const codePreviewOpen = ref(false);
const selectedComponent = ref<any>(null);

const showCode = (component: any) => {
  selectedComponent.value = component;
  codePreviewOpen.value = true;
};
</script>

<style scoped lang="scss">
.component-showcase {
  padding: 40px 20px;
}

.showcase-header {
  text-align: center;
  margin-bottom: 40px;

  h2 {
    margin: 0 0 12px 0;
    font-size: 32px;
    font-weight: 700;
    color: var(--vs-primary);
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #7F8C8D;
  }
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.showcase-card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-out;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
}

.showcase-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--vs-primary);
  }
}

.showcase-category {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(123, 191, 195, 0.1);
  color: var(--vs-primary);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.showcase-description {
  margin: 0;
  font-size: 14px;
  color: #7F8C8D;
  line-height: 1.6;
  flex: 1;
}

.showcase-btn {
  padding: 10px 20px;
  border-radius: 6px;
  border: 2px solid var(--vs-primary);
  background: transparent;
  color: var(--vs-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background: var(--vs-primary);
    color: white;
    box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
}

@media (max-width: 640px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .showcase-header h2 {
    font-size: 24px;
  }
}
</style>
