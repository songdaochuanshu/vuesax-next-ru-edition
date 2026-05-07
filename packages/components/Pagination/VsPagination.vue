<template>
  <div class="vs-pagination">
    <button
      class="vs-pagination-btn"
      :disabled="modelValue === 1 || disabled"
      @click="goToPrevious"
    >
      ◀
    </button>

    <div class="vs-pagination-pages">
      <button
        v-for="page in pages"
        :key="page"
        class="vs-pagination-page"
        :class="{ active: page === modelValue }"
        :disabled="disabled"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="vs-pagination-btn"
      :disabled="modelValue === totalPages || disabled"
      @click="goToNext"
    >
      ▶
    </button>

    <div v-if="showSizeChanger" class="vs-pagination-size">
      <select v-model.number="currentPageSize" @change="handlePageSizeChange">
        <option v-for="size in pageSizes" :key="size" :value="size">
          {{ size }} / 页
        </option>
      </select>
    </div>

    <span class="vs-pagination-info">
      共 {{ total }} 条 / 第 {{ modelValue }} 页
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VsPaginationProps, VsPaginationEmits } from './types';

const props = withDefaults(defineProps<VsPaginationProps>(), {
  modelValue: 1,
  pageSize: 10,
  pageSizes: () => [10, 20, 50, 100],
  showSizeChanger: false,
  showQuickJumper: false,
  disabled: false,
});

const emit = defineEmits<VsPaginationEmits>();

const currentPageSize = ref(props.pageSize);

const totalPages = computed(() => Math.ceil(props.total / currentPageSize.value));

const pages = computed(() => {
  const pages: number[] = [];
  const maxPages = 7;
  let start = Math.max(1, props.modelValue - Math.floor(maxPages / 2));
  let end = Math.min(totalPages.value, start + maxPages - 1);

  if (end - start + 1 < maxPages) {
    start = Math.max(1, end - maxPages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const goToPrevious = () => {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1);
    emit('change', props.modelValue - 1, currentPageSize.value);
  }
};

const goToNext = () => {
  if (props.modelValue < totalPages.value) {
    emit('update:modelValue', props.modelValue + 1);
    emit('change', props.modelValue + 1, currentPageSize.value);
  }
};

const goToPage = (page: number) => {
  emit('update:modelValue', page);
  emit('change', page, currentPageSize.value);
};

const handlePageSizeChange = () => {
  emit('change', props.modelValue, currentPageSize.value);
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-pagination {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  flex-wrap: wrap;
}

.vs-pagination-btn,
.vs-pagination-page {
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--vs-border);
  border-radius: var(--vs-radius-md);
  background: white;
  color: var(--vs-text-primary);
  cursor: pointer;
  transition: all var(--vs-transition-base);
  font-size: var(--vs-font-size-sm);

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }

  &:hover:not(:disabled) {
    border-color: var(--vs-primary);
    color: var(--vs-primary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.vs-pagination-page.active {
  background: var(--vs-primary);
  border-color: var(--vs-primary);
  color: white;
  font-weight: var(--vs-font-weight-semibold);
}

.vs-pagination-pages {
  display: flex;
  gap: 4px;
}

.vs-pagination-size {
  select {
    padding: 6px 12px;
    border: 1px solid var(--vs-border);
    border-radius: var(--vs-radius-md);
    background: white;
    color: var(--vs-text-primary);
    cursor: pointer;
    font-size: var(--vs-font-size-sm);

    @media (prefers-color-scheme: dark) {
      background: #374151;
      border-color: #4B5563;
    }

    &:hover {
      border-color: var(--vs-primary);
    }
  }
}

.vs-pagination-info {
  font-size: var(--vs-font-size-sm);
  color: var(--vs-text-secondary);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .vs-pagination {
    gap: 8px;
  }

  .vs-pagination-pages {
    gap: 2px;
  }

  .vs-pagination-btn,
  .vs-pagination-page {
    min-width: 28px;
    height: 28px;
    font-size: 12px;
  }
}
</style>
