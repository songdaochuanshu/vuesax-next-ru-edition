<template>
  <div class="vs-select-wrapper">
    <div class="vs-select-container" :class="`vs-select-${size}`" @click="toggleOpen">
      <div class="vs-select-value">
        {{ selectedLabel || placeholder || '请选择' }}
      </div>
      <span class="vs-select-arrow" :class="{ open: isOpen }">▼</span>
    </div>
    <div v-if="isOpen" class="vs-select-dropdown">
      <input
        v-if="searchable"
        v-model="searchText"
        type="text"
        class="vs-select-search"
        placeholder="搜索..."
      />
      <div class="vs-select-options">
        <div
          v-for="option in filteredOptions"
          :key="option.value"
          class="vs-select-option"
          :class="{ selected: isSelected(option.value), disabled: option.disabled }"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VsSelectProps, VsSelectEmits } from './types';

const props = withDefaults(defineProps<VsSelectProps>(), {
  placeholder: '请选择',
  disabled: false,
  size: 'md',
  multiple: false,
  clearable: false,
  searchable: false,
  maxHeight: 300,
});

const emit = defineEmits<VsSelectEmits>();

const isOpen = ref(false);
const searchText = ref('');

const filteredOptions = computed(() => {
  if (!searchText.value) return props.options;
  return props.options.filter(opt =>
    opt.label.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const selectedLabel = computed(() => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue
      .map(v => props.options.find(o => o.value === v)?.label)
      .filter(Boolean)
      .join(', ');
  }
  return props.options.find(o => o.value === props.modelValue)?.label;
});

const isSelected = (value: string | number) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

const selectOption = (option: any) => {
  if (option.disabled) return;
  
  if (props.multiple) {
    const arr = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const idx = arr.indexOf(option.value);
    if (idx > -1) {
      arr.splice(idx, 1);
    } else {
      arr.push(option.value);
    }
    emit('update:modelValue', arr);
    emit('change', arr);
  } else {
    emit('update:modelValue', option.value);
    emit('change', option.value);
    isOpen.value = false;
  }
};

const toggleOpen = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.vs-select-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--vs-spacing-md);
  border: 1px solid var(--vs-border);
  border-radius: var(--vs-radius-md);
  background: white;
  cursor: pointer;
  transition: all var(--vs-transition-base);

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }

  &:hover:not(.disabled) {
    border-color: var(--vs-primary);
  }

  &.vs-select-sm {
    height: 32px;
    font-size: var(--vs-font-size-sm);
  }

  &.vs-select-md {
    height: 40px;
    font-size: var(--vs-font-size-base);
  }

  &.vs-select-lg {
    height: 48px;
    font-size: var(--vs-font-size-lg);
  }
}

.vs-select-value {
  flex: 1;
  color: var(--vs-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vs-select-arrow {
  color: var(--vs-text-secondary);
  transition: transform var(--vs-transition-base);
  margin-left: 8px;

  &.open {
    transform: rotate(180deg);
  }
}

.vs-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background: white;
  border: 1px solid var(--vs-border);
  border-radius: var(--vs-radius-md);
  box-shadow: var(--vs-shadow-lg);
  z-index: 1000;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }
}

.vs-select-search {
  width: 100%;
  padding: var(--vs-spacing-md);
  border: none;
  border-bottom: 1px solid var(--vs-border);
  background: transparent;
  color: var(--vs-text-primary);
  font-size: var(--vs-font-size-sm);

  &:focus {
    outline: none;
    border-bottom-color: var(--vs-primary);
  }
}

.vs-select-options {
  max-height: 300px;
  overflow-y: auto;
}

.vs-select-option {
  padding: var(--vs-spacing-md) var(--vs-spacing-lg);
  color: var(--vs-text-primary);
  cursor: pointer;
  transition: background var(--vs-transition-fast);

  &:hover:not(.disabled) {
    background: rgba(123, 191, 195, 0.1);
  }

  &.selected {
    background: rgba(123, 191, 195, 0.2);
    color: var(--vs-primary);
    font-weight: var(--vs-font-weight-semibold);
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
