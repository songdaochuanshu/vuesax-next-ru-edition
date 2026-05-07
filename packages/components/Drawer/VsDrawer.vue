<template>
  <Teleport to="body">
    <div v-if="modelValue" class="vs-drawer-wrapper">
      <div class="vs-drawer-mask" @click="maskClosable && handleClose"></div>
      <div class="vs-drawer" :class="`vs-drawer-${placement}`" :style="drawerStyle">
        <div class="vs-drawer-header">
          <h2 class="vs-drawer-title">{{ title }}</h2>
          <button v-if="closable" class="vs-drawer-close" @click="handleClose">✕</button>
        </div>
        <div class="vs-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VsDrawerProps, VsDrawerEmits } from './types';

const props = withDefaults(defineProps<VsDrawerProps>(), {
  modelValue: false,
  placement: 'right',
  width: 300,
  closable: true,
  maskClosable: true,
});

const emit = defineEmits<VsDrawerEmits>();

const drawerStyle = computed(() => {
  const isHorizontal = props.placement === 'left' || props.placement === 'right';
  if (isHorizontal) {
    return { width: typeof props.width === 'number' ? `${props.width}px` : props.width };
  }
  return { height: typeof props.width === 'number' ? `${props.width}px` : props.width };
});

const handleClose = () => {
  emit('update:modelValue', false);
  emit('close');
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-drawer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
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

.vs-drawer-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.vs-drawer {
  position: fixed;
  background: white;
  box-shadow: var(--vs-shadow-xl);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  animation: slideIn 300ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.vs-drawer-left {
  left: 0;
  top: 0;
  bottom: 0;
  animation-name: slideInLeft;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.vs-drawer-right {
  right: 0;
  top: 0;
  bottom: 0;
  animation-name: slideInRight;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.vs-drawer-top {
  top: 0;
  left: 0;
  right: 0;
  animation-name: slideInTop;
}

@keyframes slideInTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.vs-drawer-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  animation-name: slideInBottom;
}

@keyframes slideInBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.vs-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--vs-border);
}

.vs-drawer-title {
  margin: 0;
  font-size: 18px;
  font-weight: var(--vs-font-weight-semibold);
  color: var(--vs-text-primary);
}

.vs-drawer-close {
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

.vs-drawer-body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  color: var(--vs-text-primary);
}
</style>
