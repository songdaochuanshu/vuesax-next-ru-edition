<template>
  <div class="vs-input-wrapper" :class="{ 'vs-input-has-error': hasError }">
    <div class="vs-input-container" :class="`vs-input-${size}`">
      <span v-if="prefix" class="vs-input-prefix">{{ prefix }}</span>
      <input
        ref="inputRef"
        class="vs-input"
        :class="[`vs-input-${state}`, { 'vs-input-with-prefix': prefix, 'vs-input-with-suffix': suffix || clearable || suffixIcon }]"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :min="type === 'number' ? min : undefined"
        :max="type === 'number' ? max : undefined"
        :step="type === 'number' ? step : undefined"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span v-if="suffix" class="vs-input-suffix">{{ suffix }}</span>
      <button
        v-if="clearable && modelValue"
        type="button"
        class="vs-input-clear"
        @click="handleClear"
      >
        ✕
      </button>
      <span v-if="suffixIcon" class="vs-input-suffix-icon">{{ suffixIcon }}</span>
    </div>
    <div v-if="errorMessage && hasError" class="vs-input-error">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage && state === 'success'" class="vs-input-success">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VsInputProps, VsInputEmits } from './types';

const props = withDefaults(defineProps<VsInputProps>(), {
  type: 'text',
  size: 'md',
  state: 'default',
  modelValue: '',
  disabled: false,
  readonly: false,
  clearable: false,
});

const emit = defineEmits<VsInputEmits>();

const inputRef = ref<HTMLInputElement>();
const isFocused = ref(false);

const hasError = computed(() => {
  if (props.validate && props.modelValue !== undefined && props.modelValue !== '') {
    const result = props.validate(props.modelValue);
    return result !== true;
  }
  return props.state === 'danger';
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? parseFloat(target.value) || '' : target.value;
  emit('update:modelValue', value);
  emit('input', value);
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? parseFloat(target.value) || '' : target.value;
  emit('change', value);
};

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true;
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false;
  emit('blur', event);
};

const handleClear = () => {
  emit('update:modelValue', '');
  emit('clear');
  inputRef.value?.focus();
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vs-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 var(--vs-spacing-md);
  border: 1px solid var(--vs-border);
  border-radius: var(--vs-radius-md);
  background: white;
  transition: all var(--vs-transition-base);
  position: relative;

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }

  &:focus-within {
    border-color: var(--vs-primary);
    box-shadow: 0 0 0 3px rgba(123, 191, 195, 0.1);
  }
}

/* 尺寸 */
.vs-input-sm {
  height: 32px;
  font-size: var(--vs-font-size-sm);
}

.vs-input-md {
  height: 40px;
  font-size: var(--vs-font-size-base);
}

.vs-input-lg {
  height: 48px;
  font-size: var(--vs-font-size-lg);
}

.vs-input {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--vs-text-primary);
  outline: none;
  font-family: inherit;
  font-size: inherit;

  &::placeholder {
    color: var(--vs-text-tertiary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
}

.vs-input-with-prefix {
  margin-left: 0;
}

.vs-input-with-suffix {
  margin-right: 0;
}

/* 前后缀 */
.vs-input-prefix,
.vs-input-suffix {
  color: var(--vs-text-secondary);
  font-size: 0.9em;
  white-space: nowrap;
}

.vs-input-suffix-icon {
  color: var(--vs-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 清空按钮 */
.vs-input-clear {
  background: none;
  border: none;
  color: var(--vs-text-tertiary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--vs-transition-fast);
  font-size: 16px;

  &:hover {
    color: var(--vs-text-secondary);
  }
}

/* 状态 */
.vs-input-default {
  &:focus {
    border-color: var(--vs-primary);
  }
}

.vs-input-success {
  border-color: var(--vs-success);

  &:focus {
    border-color: var(--vs-success);
    box-shadow: 0 0 0 3px rgba(144, 180, 75, 0.1);
  }
}

.vs-input-warn {
  border-color: var(--vs-warn);

  &:focus {
    border-color: var(--vs-warn);
    box-shadow: 0 0 0 3px rgba(224, 138, 94, 0.1);
  }
}

.vs-input-danger {
  border-color: var(--vs-danger);

  &:focus {
    border-color: var(--vs-danger);
    box-shadow: 0 0 0 3px rgba(207, 70, 71, 0.1);
  }
}

.vs-input-has-error {
  .vs-input-container {
    border-color: var(--vs-danger);

    &:focus-within {
      box-shadow: 0 0 0 3px rgba(207, 70, 71, 0.1);
    }
  }
}

/* 提示信息 */
.vs-input-error {
  font-size: var(--vs-font-size-xs);
  color: var(--vs-danger);
  line-height: 1.4;
}

.vs-input-success {
  font-size: var(--vs-font-size-xs);
  color: var(--vs-success);
  line-height: 1.4;
}

@media (max-width: 640px) {
  .vs-input-container {
    padding: 0 var(--vs-spacing-sm);
  }

  .vs-input-md {
    height: 36px;
  }

  .vs-input-lg {
    height: 44px;
  }
}
</style>
