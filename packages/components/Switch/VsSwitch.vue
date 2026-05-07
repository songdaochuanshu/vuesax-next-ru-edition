<template>
  <label class="vs-switch" :class="[`vs-switch-${size}`, { active: modelValue, disabled }]">
    <input
      type="checkbox"
      class="vs-switch-input"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="vs-switch-track"></span>
    <span class="vs-switch-thumb"></span>
    <span v-if="activeText || inactiveText" class="vs-switch-text">
      {{ modelValue ? activeText : inactiveText }}
    </span>
  </label>
</template>

<script setup lang="ts">
import type { VsSwitchProps, VsSwitchEmits } from './types';

const props = withDefaults(defineProps<VsSwitchProps>(), {
  modelValue: false,
  disabled: false,
  size: 'md',
  activeColor: '#7BBFC3',
  inactiveColor: '#BDC3C7',
});

const emit = defineEmits<VsSwitchEmits>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
  emit('change', target.checked);
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.vs-switch-input {
  display: none;
}

.vs-switch-track {
  display: block;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: #BDC3C7;
  transition: background var(--vs-transition-base);
  position: relative;
}

.vs-switch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all var(--vs-transition-base);
}

.vs-switch-input:checked + .vs-switch-track {
  background: var(--vs-primary);
}

.vs-switch-input:checked ~ .vs-switch-thumb {
  transform: translateX(20px);
}

.vs-switch-input:disabled + .vs-switch-track {
  opacity: 0.5;
  cursor: not-allowed;
}

.vs-switch-text {
  font-size: var(--vs-font-size-sm);
  color: var(--vs-text-secondary);
  min-width: 30px;
}

/* 尺寸 */
.vs-switch-sm {
  .vs-switch-track {
    width: 36px;
    height: 20px;
  }

  .vs-switch-thumb {
    width: 16px;
    height: 16px;
  }

  .vs-switch-input:checked ~ .vs-switch-thumb {
    transform: translateX(16px);
  }
}

.vs-switch-lg {
  .vs-switch-track {
    width: 52px;
    height: 28px;
  }

  .vs-switch-thumb {
    width: 24px;
    height: 24px;
  }

  .vs-switch-input:checked ~ .vs-switch-thumb {
    transform: translateX(24px);
  }
}

.vs-switch:hover:not(.disabled) .vs-switch-track {
  box-shadow: 0 2px 8px rgba(123, 191, 195, 0.3);
}
</style>
