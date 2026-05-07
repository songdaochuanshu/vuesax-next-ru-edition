<template>
  <button
    class="vs-button"
    :class="[
      `vs-button-${type}`,
      `vs-button-${color}`,
      `vs-button-${size}`,
      {
        'vs-button-disabled': disabled,
        'vs-button-loading': loading,
        'vs-button-circle': circle,
        'vs-button-block': block,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <span v-if="loading" class="vs-button-loader"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { VsButtonProps, VsButtonEmits } from './types';

const props = withDefaults(defineProps<VsButtonProps>(), {
  type: 'flat',
  color: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  circle: false,
  block: false,
  nativeType: 'button',
});

const emit = defineEmits<VsButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--vs-font-family-base);
  font-weight: var(--vs-font-weight-medium);
  border: none;
  border-radius: var(--vs-radius-md);
  cursor: pointer;
  transition: all var(--vs-transition-base);
  outline: none;
  position: relative;
  overflow: hidden;

  &:focus-visible {
    outline: 2px solid var(--vs-primary);
    outline-offset: 2px;
  }

  &:disabled,
  &.vs-button-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

/* 尺寸 */
.vs-button-xs {
  padding: 4px 12px;
  font-size: var(--vs-font-size-xs);
  height: 24px;
}

.vs-button-sm {
  padding: 6px 14px;
  font-size: var(--vs-font-size-sm);
  height: 32px;
}

.vs-button-md {
  padding: 10px 20px;
  font-size: var(--vs-font-size-base);
  height: 40px;
}

.vs-button-lg {
  padding: 12px 24px;
  font-size: var(--vs-font-size-lg);
  height: 48px;
}

.vs-button-xl {
  padding: 14px 32px;
  font-size: var(--vs-font-size-xl);
  height: 56px;
}

/* 圆形按钮 */
.vs-button-circle {
  border-radius: 50%;
  padding: 0;
  width: 40px;
  height: 40px;

  &.vs-button-xs {
    width: 24px;
    height: 24px;
  }

  &.vs-button-sm {
    width: 32px;
    height: 32px;
  }

  &.vs-button-lg {
    width: 48px;
    height: 48px;
  }

  &.vs-button-xl {
    width: 56px;
    height: 56px;
  }
}

/* 块级按钮 */
.vs-button-block {
  width: 100%;
}

/* 扁平风格 */
.vs-button-flat {
  &.vs-button-primary {
    background: var(--vs-primary);
    color: white;

    &:hover:not(:disabled) {
      background: var(--vs-primary-dark);
      box-shadow: var(--vs-shadow-md);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }

  &.vs-button-success {
    background: var(--vs-success);
    color: white;

    &:hover:not(:disabled) {
      background: var(--vs-success-dark);
      box-shadow: var(--vs-shadow-md);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }

  &.vs-button-warn {
    background: var(--vs-warn);
    color: white;

    &:hover:not(:disabled) {
      background: var(--vs-warn-dark);
      box-shadow: var(--vs-shadow-md);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }

  &.vs-button-danger {
    background: var(--vs-danger);
    color: white;

    &:hover:not(:disabled) {
      background: var(--vs-danger-dark);
      box-shadow: var(--vs-shadow-md);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }

  &.vs-button-dark {
    background: var(--vs-text-primary);
    color: white;

    &:hover:not(:disabled) {
      background: #1a2332;
      box-shadow: var(--vs-shadow-md);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }

  &.vs-button-light {
    background: var(--vs-bg);
    color: var(--vs-text-primary);
    border: 1px solid var(--vs-border);

    &:hover:not(:disabled) {
      background: #f0f2f5;
      border-color: var(--vs-primary);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }
  }
}

/* 浮起风格 */
.vs-button-relief {
  &.vs-button-primary {
    background: var(--vs-primary-light);
    color: var(--vs-primary-dark);
    box-shadow: 0 4px 8px rgba(123, 191, 195, 0.2);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(123, 191, 195, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(123, 191, 195, 0.2);
    }
  }

  &.vs-button-success {
    background: var(--vs-success-light);
    color: var(--vs-success-dark);
    box-shadow: 0 4px 8px rgba(144, 180, 75, 0.2);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(144, 180, 75, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(144, 180, 75, 0.2);
    }
  }

  &.vs-button-warn {
    background: var(--vs-warn-light);
    color: var(--vs-warn-dark);
    box-shadow: 0 4px 8px rgba(224, 138, 94, 0.2);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(224, 138, 94, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(224, 138, 94, 0.2);
    }
  }

  &.vs-button-danger {
    background: var(--vs-danger-light);
    color: var(--vs-danger-dark);
    box-shadow: 0 4px 8px rgba(207, 70, 71, 0.2);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(207, 70, 71, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(207, 70, 71, 0.2);
    }
  }
}

/* 边框风格 */
.vs-button-border {
  background: transparent;
  border: 2px solid;

  &.vs-button-primary {
    border-color: var(--vs-primary);
    color: var(--vs-primary);

    &:hover:not(:disabled) {
      background: rgba(123, 191, 195, 0.1);
    }

    &:active:not(:disabled) {
      background: rgba(123, 191, 195, 0.2);
    }
  }

  &.vs-button-success {
    border-color: var(--vs-success);
    color: var(--vs-success);

    &:hover:not(:disabled) {
      background: rgba(144, 180, 75, 0.1);
    }

    &:active:not(:disabled) {
      background: rgba(144, 180, 75, 0.2);
    }
  }

  &.vs-button-warn {
    border-color: var(--vs-warn);
    color: var(--vs-warn);

    &:hover:not(:disabled) {
      background: rgba(224, 138, 94, 0.1);
    }

    &:active:not(:disabled) {
      background: rgba(224, 138, 94, 0.2);
    }
  }

  &.vs-button-danger {
    border-color: var(--vs-danger);
    color: var(--vs-danger);

    &:hover:not(:disabled) {
      background: rgba(207, 70, 71, 0.1);
    }

    &:active:not(:disabled) {
      background: rgba(207, 70, 71, 0.2);
    }
  }
}

/* 渐变风格 */
.vs-button-gradient {
  background: linear-gradient(135deg, var(--vs-primary) 0%, var(--vs-primary-dark) 100%);
  color: white;
  position: relative;

  &.vs-button-primary {
    background: linear-gradient(135deg, var(--vs-primary) 0%, var(--vs-primary-dark) 100%);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(123, 191, 195, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  &.vs-button-success {
    background: linear-gradient(135deg, var(--vs-success) 0%, var(--vs-success-dark) 100%);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(144, 180, 75, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  &.vs-button-warn {
    background: linear-gradient(135deg, var(--vs-warn) 0%, var(--vs-warn-dark) 100%);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(224, 138, 94, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  &.vs-button-danger {
    background: linear-gradient(135deg, var(--vs-danger) 0%, var(--vs-danger-dark) 100%);

    &:hover:not(:disabled) {
      box-shadow: 0 8px 16px rgba(207, 70, 71, 0.3);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }
}

/* 加载状态 */
.vs-button-loading {
  pointer-events: none;
}

.vs-button-loader {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: vs-button-spin 0.8s linear infinite;
}

@keyframes vs-button-spin {
  to {
    transform: rotate(360deg);
  }
}

/* 响应式 */
@media (max-width: 640px) {
  .vs-button-md {
    padding: 8px 16px;
    height: 36px;
  }

  .vs-button-lg {
    padding: 10px 20px;
    height: 44px;
  }
}
</style>
