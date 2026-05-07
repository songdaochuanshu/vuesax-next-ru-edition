<template>
  <div v-if="!closed" class="vs-alert" :class="`vs-alert-${type}`">
    <div class="vs-alert-icon">{{ icon }}</div>
    <div class="vs-alert-content">
      <div v-if="title" class="vs-alert-title">{{ title }}</div>
      <div v-if="description" class="vs-alert-description">{{ description }}</div>
      <slot></slot>
    </div>
    <button v-if="closable" class="vs-alert-close" @click="handleClose">✕</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { VsAlertProps, VsAlertEmits } from './types';

const props = withDefaults(defineProps<VsAlertProps>(), {
  type: 'info',
  closable: true,
  icon: 'ℹ️',
});

const emit = defineEmits<VsAlertEmits>();
const closed = ref(false);

const handleClose = () => {
  closed.value = true;
  emit('close');
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-alert {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: var(--vs-radius-md);
  border-left: 4px solid;
  background: white;
  animation: slideDown 300ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.vs-alert-icon {
  flex-shrink: 0;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.vs-alert-content {
  flex: 1;
}

.vs-alert-title {
  font-weight: var(--vs-font-weight-semibold);
  margin-bottom: 4px;
  color: var(--vs-text-primary);
}

.vs-alert-description {
  font-size: var(--vs-font-size-sm);
  color: var(--vs-text-secondary);
  line-height: 1.5;
}

.vs-alert-close {
  flex-shrink: 0;
  background: none;
  border: none;
  color: var(--vs-text-tertiary);
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  transition: color var(--vs-transition-fast);

  &:hover {
    color: var(--vs-text-secondary);
  }
}

/* 类型 */
.vs-alert-success {
  border-left-color: var(--vs-success);
  background: rgba(144, 180, 75, 0.1);
  color: var(--vs-success);
}

.vs-alert-warn {
  border-left-color: var(--vs-warn);
  background: rgba(224, 138, 94, 0.1);
  color: var(--vs-warn);
}

.vs-alert-danger {
  border-left-color: var(--vs-danger);
  background: rgba(207, 70, 71, 0.1);
  color: var(--vs-danger);
}

.vs-alert-info {
  border-left-color: var(--vs-primary);
  background: rgba(123, 191, 195, 0.1);
  color: var(--vs-primary);
}
</style>
