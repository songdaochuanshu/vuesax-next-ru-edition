<template>
  <Teleport to="body">
    <div v-if="!closed" class="vs-notification" :class="[`vs-notification-${type}`, `vs-notification-${position}`]">
      <div class="vs-notification-icon">{{ icon }}</div>
      <div class="vs-notification-content">
        <div v-if="title" class="vs-notification-title">{{ title }}</div>
        <div v-if="message" class="vs-notification-message">{{ message }}</div>
      </div>
      <button v-if="closable" class="vs-notification-close" @click="handleClose">✕</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { VsNotificationProps, VsNotificationEmits } from './types';

const props = withDefaults(defineProps<VsNotificationProps>(), {
  type: 'info',
  position: 'top-right',
  duration: 3000,
  closable: true,
  icon: 'ℹ️',
});

const emit = defineEmits<VsNotificationEmits>();
const closed = ref(false);

const handleClose = () => {
  closed.value = true;
  emit('close');
};

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(handleClose, props.duration);
  }
});
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-notification {
  position: fixed;
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-radius: var(--vs-radius-md);
  background: white;
  box-shadow: var(--vs-shadow-lg);
  z-index: 9999;
  min-width: 300px;
  max-width: 400px;
  animation: slideIn 300ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }

  @media (max-width: 640px) {
    min-width: 280px;
    max-width: 90vw;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.vs-notification-icon {
  flex-shrink: 0;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.vs-notification-content {
  flex: 1;
}

.vs-notification-title {
  font-weight: var(--vs-font-weight-semibold);
  margin-bottom: 4px;
  color: var(--vs-text-primary);
}

.vs-notification-message {
  font-size: var(--vs-font-size-sm);
  color: var(--vs-text-secondary);
  line-height: 1.5;
}

.vs-notification-close {
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

/* 位置 */
.vs-notification-top-right {
  top: 20px;
  right: 20px;
}

.vs-notification-top-left {
  top: 20px;
  left: 20px;
}

.vs-notification-bottom-right {
  bottom: 20px;
  right: 20px;
}

.vs-notification-bottom-left {
  bottom: 20px;
  left: 20px;
}

.vs-notification-top-center {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.vs-notification-bottom-center {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

/* 类型 */
.vs-notification-success {
  border-left: 4px solid var(--vs-success);
  color: var(--vs-success);
}

.vs-notification-warn {
  border-left: 4px solid var(--vs-warn);
  color: var(--vs-warn);
}

.vs-notification-danger {
  border-left: 4px solid var(--vs-danger);
  color: var(--vs-danger);
}

.vs-notification-info {
  border-left: 4px solid var(--vs-primary);
  color: var(--vs-primary);
}
</style>
