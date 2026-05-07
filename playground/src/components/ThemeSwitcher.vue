<template>
  <div class="theme-switcher">
    <button
      v-for="(theme, key) in themes"
      :key="key"
      class="theme-btn"
      :class="{ active: currentTheme === key }"
      :style="{ '--theme-color': theme.primary }"
      @click="setTheme(key as any)"
      :title="`切换到${theme.label}主题`"
    >
      <span class="theme-dot"></span>
      <span class="theme-label">{{ theme.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme';

const { currentTheme, setTheme, themes } = useTheme();
</script>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  gap: 12px;
  align-items: center;
}

.theme-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  background: white;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 500;
  color: #2C3E50;

  &:hover {
    border-color: var(--theme-color);
    background: rgba(123, 191, 195, 0.1);
  }

  &.active {
    border-color: var(--theme-color);
    background: var(--theme-color);
    color: white;
    box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
  }
}

.theme-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--theme-color);
  display: block;
}

@media (max-width: 640px) {
  .theme-switcher {
    gap: 8px;
  }

  .theme-btn {
    padding: 6px 12px;
    font-size: 12px;
  }

  .theme-label {
    display: none;
  }
}
</style>
