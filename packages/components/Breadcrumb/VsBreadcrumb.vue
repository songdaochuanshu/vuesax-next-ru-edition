<template>
  <nav class="vs-breadcrumb">
    <ol class="vs-breadcrumb-list">
      <li v-for="(item, index) in items" :key="index" class="vs-breadcrumb-item">
        <a
          v-if="item.href && !item.disabled"
          :href="item.href"
          class="vs-breadcrumb-link"
          @click.prevent="handleClick(item, index)"
        >
          {{ item.label }}
        </a>
        <span v-else class="vs-breadcrumb-text" :class="{ disabled: item.disabled }">
          {{ item.label }}
        </span>
        <span v-if="index < items.length - 1" class="vs-breadcrumb-separator">
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { VsBreadcrumbProps, VsBreadcrumbEmits } from './types';

const props = withDefaults(defineProps<VsBreadcrumbProps>(), {
  separator: '/',
});

const emit = defineEmits<VsBreadcrumbEmits>();

const handleClick = (item: any, index: number) => {
  if (!item.disabled) {
    emit('click', item, index);
  }
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-breadcrumb {
  padding: 12px 0;
}

.vs-breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  gap: 4px;
}

.vs-breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.vs-breadcrumb-link {
  color: var(--vs-primary);
  text-decoration: none;
  transition: color var(--vs-transition-base);
  cursor: pointer;

  &:hover {
    color: var(--vs-primary-dark);
    text-decoration: underline;
  }
}

.vs-breadcrumb-text {
  color: var(--vs-text-primary);

  &.disabled {
    color: var(--vs-text-tertiary);
    cursor: not-allowed;
  }
}

.vs-breadcrumb-separator {
  color: var(--vs-text-tertiary);
  margin: 0 4px;
}

@media (max-width: 640px) {
  .vs-breadcrumb-list {
    font-size: var(--vs-font-size-sm);
  }

  .vs-breadcrumb-separator {
    margin: 0 2px;
  }
}
</style>
