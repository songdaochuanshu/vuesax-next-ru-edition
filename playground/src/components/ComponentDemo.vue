<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>{{ componentName }}</h1>
      <p class="demo-description">{{ description }}</p>
    </div>

    <div class="demo-container">
      <!-- 演示区域 -->
      <div class="demo-preview">
        <div class="preview-header">
          <h3>演示</h3>
        </div>
        <div class="preview-content">
          <slot></slot>
        </div>
      </div>

      <!-- 代码区域 -->
      <div class="demo-code">
        <div class="code-header">
          <h3>代码</h3>
          <button class="copy-btn" @click="copyCode">
            {{ copied ? '已复制' : '复制' }}
          </button>
        </div>
        <pre class="code-content"><code>{{ code }}</code></pre>
      </div>
    </div>

    <!-- Props 文档 -->
    <div v-if="props && props.length > 0" class="demo-props">
      <h3>Props</h3>
      <table class="props-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>类型</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prop in props" :key="prop.name">
            <td><code>{{ prop.name }}</code></td>
            <td><code>{{ prop.type }}</code></td>
            <td><code>{{ prop.default }}</code></td>
            <td>{{ prop.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Events 文档 -->
    <div v-if="events && events.length > 0" class="demo-events">
      <h3>Events</h3>
      <table class="events-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>参数</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.name">
            <td><code>{{ event.name }}</code></td>
            <td><code>{{ event.params }}</code></td>
            <td>{{ event.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Prop {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface Event {
  name: string;
  params: string;
  description: string;
}

interface Props {
  componentName: string;
  description: string;
  code: string;
  props?: Prop[];
  events?: Event[];
}

const props = defineProps<Props>();
const copied = ref(false);

const copyCode = () => {
  navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<style scoped lang="scss">
.component-demo {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-header {
  margin-bottom: 40px;

  h1 {
    margin: 0 0 12px 0;
    font-size: 32px;
    font-weight: 700;
    color: var(--vs-primary);
  }
}

.demo-description {
  margin: 0;
  font-size: 16px;
  color: #7F8C8D;
}

.demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.demo-preview,
.demo-code {
  border: 1px solid #E8EAED;
  border-radius: 8px;
  overflow: hidden;
  background: white;

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }
}

.preview-header,
.code-header {
  padding: 16px;
  border-bottom: 1px solid #E8EAED;
  background: #F5F7F8;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-bottom-color: #4B5563;
  }

  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--vs-text-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-btn {
  padding: 6px 12px;
  background: var(--vs-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
}

.preview-content {
  padding: 24px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.code-content {
  margin: 0;
  padding: 16px;
  background: #2C3E50;
  color: #E8EAED;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;

  code {
    color: inherit;
  }
}

.demo-props,
.demo-events {
  margin-bottom: 40px;

  h3 {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 600;
    color: var(--vs-text-primary);
  }
}

.props-table,
.events-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #E8EAED;
  border-radius: 8px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    border-color: #4B5563;
  }

  thead {
    background: #F5F7F8;

    @media (prefers-color-scheme: dark) {
      background: #2D3748;
    }

    th {
      padding: 12px 16px;
      font-weight: 600;
      text-align: left;
      border-bottom: 1px solid #E8EAED;
      color: var(--vs-text-primary);

      @media (prefers-color-scheme: dark) {
        border-bottom-color: #4B5563;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #E8EAED;

      @media (prefers-color-scheme: dark) {
        border-bottom-color: #4B5563;
      }

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: rgba(123, 191, 195, 0.05);
      }
    }

    td {
      padding: 12px 16px;
      color: var(--vs-text-primary);

      code {
        padding: 2px 6px;
        background: #F5F7F8;
        border-radius: 4px;
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 12px;
        color: #CF4647;

        @media (prefers-color-scheme: dark) {
          background: #2D3748;
          color: #E08A5E;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .component-demo {
    padding: 16px;
  }

  .demo-header h1 {
    font-size: 24px;
  }

  .demo-container {
    gap: 16px;
  }

  .preview-content {
    min-height: 150px;
  }

  .code-content {
    font-size: 11px;
  }

  .props-table,
  .events-table {
    font-size: 12px;

    td,
    th {
      padding: 8px 12px;
    }
  }
}
</style>
