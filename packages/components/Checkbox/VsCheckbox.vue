<template>
  <label class="vs-checkbox">
    <input
      type="checkbox"
      class="vs-checkbox-input"
      :checked="isChecked"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="handleChange"
    />
    <span class="vs-checkbox-box" :class="{ indeterminate }"></span>
    <span v-if="label" class="vs-checkbox-label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VsCheckboxProps, VsCheckboxEmits } from './types';

const props = defineProps<VsCheckboxProps>();
const emit = defineEmits<VsCheckboxEmits>();

const isChecked = computed(() => {
  if (props.value !== undefined) {
    return Array.isArray(props.modelValue)
      ? props.modelValue.includes(props.value)
      : props.modelValue === props.value;
  }
  return props.modelValue === true;
});

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const newValue = props.value !== undefined ? props.value : target.checked;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.vs-checkbox-input {
  display: none;
}

.vs-checkbox-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--vs-border);
  border-radius: 4px;
  background: white;
  transition: all var(--vs-transition-base);
  position: relative;

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }

  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 10px;
    border: solid var(--vs-primary);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: transform var(--vs-transition-base);
  }

  &.indeterminate::after {
    content: '';
    width: 8px;
    height: 2px;
    border: none;
    background: var(--vs-primary);
    transform: scale(1);
  }
}

.vs-checkbox-input:checked + .vs-checkbox-box {
  background: var(--vs-primary);
  border-color: var(--vs-primary);

  &::after {
    transform: rotate(45deg) scale(1);
  }
}

.vs-checkbox-input:disabled + .vs-checkbox-box {
  opacity: 0.6;
  cursor: not-allowed;
}

.vs-checkbox-label {
  color: var(--vs-text-primary);
  font-size: var(--vs-font-size-base);
}

.vs-checkbox:hover .vs-checkbox-box {
  border-color: var(--vs-primary);
}
</style>
