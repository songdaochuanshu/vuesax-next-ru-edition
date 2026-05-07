<template>
  <div class="code-preview" v-if="isOpen">
    <div class="code-overlay" @click="close"></div>
    <div class="code-modal">
      <div class="code-header">
        <h3>{{ title }}</h3>
        <button class="close-btn" @click="close">✕</button>
      </div>
      <div class="code-body">
        <pre><code>{{ code }}</code></pre>
      </div>
      <div class="code-footer">
        <button class="copy-btn" @click="copyCode">
          {{ copied ? '已复制!' : '复制代码' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  isOpen: boolean;
  title: string;
  code: string;
}

interface Emits {
  close: [];
}

defineProps<Props>();
defineEmits<Emits>();

const emit = defineEmits<Emits>();
const copied = ref(false);

const close = () => {
  emit('close');
};

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.code-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 250ms ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.code-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  cursor: pointer;
}

.code-modal {
  position: relative;
  z-index: 1001;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 250ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #E8EAED;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #7F8C8D;
  cursor: pointer;
  transition: color 150ms;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }
}

.code-body {
  flex: 1;
  overflow: auto;
  padding: 20px;
  background: #F5F7F8;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;

  @media (prefers-color-scheme: dark) {
    background: #1A1F2E;
  }

  pre {
    margin: 0;
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }

  code {
    word-break: break-word;
    white-space: pre-wrap;
  }
}

.code-footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px;
  border-top: 1px solid #E8EAED;
  gap: 12px;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
}

.copy-btn {
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid var(--vs-primary);
  background: var(--vs-primary);
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
}

@media (max-width: 640px) {
  .code-modal {
    max-width: 95vw;
    max-height: 90vh;
  }

  .code-header,
  .code-body,
  .code-footer {
    padding: 16px;
  }

  .code-body {
    font-size: 12px;
  }
}
</style>
