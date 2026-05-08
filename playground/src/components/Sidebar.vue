<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-header">
      <h2>Vuesax-Next</h2>
      <button class="close-btn" @click="toggleSidebar" v-if="isOpen">✕</button>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section">
        <h3>导航</h3>
        <a href="#overview" class="nav-link" @click="toggleSidebar">项目愿景</a>
        <a href="#components" class="nav-link" @click="toggleSidebar">组件列表</a>
        <a href="#lab" class="nav-link" @click="toggleSidebar">色彩实验室</a>
      </div>

      <div class="nav-section">
        <h3>组件</h3>
        <a
          v-for="(comp, idx) in components"
          :key="idx"
          :href="`#component-${idx}`"
          class="nav-link"
          @click="toggleSidebar"
        >
          {{ comp.name }}
        </a>
      </div>

      <div class="nav-section">
        <h3>资源</h3>
        <a href="/components" class="nav-link" @click="toggleSidebar">🎨 组件演示</a>
        <a href="/docs" class="nav-link" @click="toggleSidebar">📚 文档中心</a>
        <a href="https://github.com/songdaochuanshu/vuesax-next-ru-edition" target="_blank" class="nav-link">
          GitHub
        </a>
      </div>
    </nav>

    <div class="sidebar-footer">
      <p>© 2026 Vuesax-Next</p>
    </div>
  </aside>

  <button v-if="!isOpen" class="sidebar-toggle" @click="toggleSidebar">
    ☰
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const components = [
  { name: 'VsCard Type 1', id: 'card-1' },
  { name: 'VsCard Type 2', id: 'card-2' },
  { name: 'VsCard Type 3', id: 'card-3' },
  { name: 'VsCard Type 4', id: 'card-4' },
  { name: 'VsCard Type 5', id: 'card-5' },
];

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background: white;
  border-right: 1px solid #E8EAED;
  overflow-y: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transition: transform 300ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-right-color: #374151;
  }

  @media (max-width: 768px) {
    transform: translateX(-100%);
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

    &.open {
      transform: translateX(0);
    }
  }
}

.sidebar-header {
  padding: 24px 20px;
  border-bottom: 1px solid #E8EAED;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--vs-primary);
  }
}

.close-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #7F8C8D;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
}

.nav-section {
  padding: 0 20px 20px;

  h3 {
    margin: 0 0 12px 0;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #7F8C8D;
  }
}

.nav-link {
  display: block;
  padding: 10px 12px;
  margin-bottom: 4px;
  border-radius: 6px;
  color: #2C3E50;
  text-decoration: none;
  font-size: 14px;
  transition: all 150ms;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    color: #E8EAED;

    &:hover {
      background: rgba(123, 191, 195, 0.1);
      color: var(--vs-primary);
    }
  }

  &:hover {
    background: rgba(123, 191, 195, 0.1);
    color: var(--vs-primary);
  }

  &:active {
    background: rgba(123, 191, 195, 0.2);
  }
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #E8EAED;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #7F8C8D;
  }
}

.sidebar-toggle {
  display: none;
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--vs-primary);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
  transition: all 150ms;
  z-index: 99;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(123, 191, 195, 0.4);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* 滚动条样式 */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #BDC3C7;
  border-radius: 3px;

  &:hover {
    background: #7F8C8D;
  }
}
</style>
