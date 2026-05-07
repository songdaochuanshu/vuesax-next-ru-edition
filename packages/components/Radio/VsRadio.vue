<template>
  <label class="vs-radio">
    <input
      type="radio"
      class="vs-radio-input"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="vs-radio-circle"></span>
    <span v-if="label" class="vs-radio-label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { VsRadioProps, VsRadioEmits } from './types';

const props = defineProps<VsRadioProps>();
const emit = defineEmits<VsRadioEmits>();

const handleChange = () => {
  emit('update:modelValue', props.value);
  emit('change', props.value);
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-radio {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.vs-radio-input {
  display: none;
}

.vs-radio-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--vs-border);
  border-radius: 50%;
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
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--vs-primary);
    transform: scale(0);
    transition: transform var(--vs-transition-base);
  }
}

.vs-radio-input:checked + .vs-radio-circle {
  border-color: var(--vs-primary);

  &::after {
    transform: scale(1);
  }
}

.vs-radio-input:disabled + .vs-radio-circle {
  opacity: 0.6;
  cursor: not-allowed;
}

.vs-radio-label {
  color: var(--vs-text-primary);
  font-size: var(--vs-font-size-base);
}

.vs-radio:hover .vs-radio-circle {
  border-color: var(--vs-primary);
}
</style>
