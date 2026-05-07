<template>
  <Teleport to="body">
    <div v-if="modelValue" class="vs-modal-wrapper">
      <div class="vs-modal-mask" @click="maskClosable && handleCancel"></div>
      <div class="vs-modal" :style="{ width: typeof width === 'number' ? `${width}px` : width }">
        <div class="vs-modal-header">
          <h2 class="vs-modal-title">{{ title }}</h2>
          <button v-if="closable" class="vs-modal-close" @click="handleCancel">✕</button>
        </div>
        <div class="vs-modal-body">
          <slot></slot>
        </div>
        <div class="vs-modal-footer">
          <button class="vs-modal-btn vs-modal-btn-cancel" @click="handleCancel">
            {{ cancelText || '取消' }}
          </button>
          <button class="vs-modal-btn vs-modal-btn-ok" :disabled="loading" @click="handleOk">
            <span v-if="loading" class="vs-modal-loader"></span>
            {{ okText || '确定' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { VsModalProps, VsModalEmits } from './types';

const props = withDefaults(defineProps<VsModalProps>(), {
  modelValue: false,
  width: 520,
  closable: true,
  maskClosable: true,
  okText: '确定',
  cancelText: '取消',
  loading: false,
});

const emit = defineEmits<VsModalEmits>();

const handleOk = () => {
  emit('ok');
};

const handleCancel = () => {
  emit('update:modelValue', false);
  emit('cancel');
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 300ms ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.vs-modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.vs-modal {
  position: relative;
  z-index: 1001;
  background: white;
  border-radius: var(--vs-radius-lg);
  box-shadow: var(--vs-shadow-xl);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 300ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }

  @media (max-width: 640px) {
    width: 90vw !important;
    max-height: 80vh;
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

.vs-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--vs-border);
}

.vs-modal-title {
  margin: 0;
  font-size: 18px;
  font-weight: var(--vs-font-weight-semibold);
  color: var(--vs-text-primary);
}

.vs-modal-close {
  background: none;
  border: none;
  color: var(--vs-text-tertiary);
  cursor: pointer;
  font-size: 24px;
  padding: 0;
  transition: color var(--vs-transition-fast);

  &:hover {
    color: var(--vs-text-secondary);
  }
}

.vs-modal-body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  color: var(--vs-text-primary);
}

.vs-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--vs-border);
  background: var(--vs-bg);
}

.vs-modal-btn {
  padding: 8px 20px;
  border-radius: var(--vs-radius-md);
  border: 1px solid;
  font-size: var(--vs-font-size-base);
  font-weight: var(--vs-font-weight-medium);
  cursor: pointer;
  transition: all var(--vs-transition-base);
  display: flex;
  align-items: center;
  gap: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.vs-modal-btn-cancel {
  border-color: var(--vs-border);
  background: white;
  color: var(--vs-text-primary);

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }

  &:hover:not(:disabled) {
    border-color: var(--vs-primary);
    color: var(--vs-primary);
  }
}

.vs-modal-btn-ok {
  border-color: var(--vs-primary);
  background: var(--vs-primary);
  color: white;

  &:hover:not(:disabled) {
    box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
}

.vs-modal-loader {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
