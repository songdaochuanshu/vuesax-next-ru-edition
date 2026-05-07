<template>
  <div class="app">
    <!-- 侧边栏 -->
    <Sidebar />

    <!-- 主容器 -->
    <main class="main-content">
      <!-- 顶部导航栏 -->
      <header class="app-header">
        <div class="header-content">
          <div class="header-left">
            <h1>Vuesax-Next (Ru Edition)</h1>
            <p>汝窑美学 UI 组件库 - 所见即所得的官方展示</p>
          </div>
          <div class="header-right">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <!-- 概览部分 -->
      <section id="overview" class="section overview-section">
        <div class="section-content">
          <h2>项目愿景</h2>
          <p>
            Vuesax-Next (Ru Edition) 是一个融入汝窑美学的现代 Vue 3.5+ UI 组件库。
            我们将高饱和度的现代设计转化为低饱和度、高质感的东方审美体系，
            为开发者提供优雅、高效的组件解决方案。
          </p>
          <div class="vision-grid">
            <div class="vision-card">
              <div class="vision-icon">🎨</div>
              <h3>汝窑美学</h3>
              <p>融入东方审美，低饱和度、高质感</p>
            </div>
            <div class="vision-card">
              <div class="vision-icon">⚡</div>
              <h3>现代技术</h3>
              <p>Vue 3.5 + TypeScript + Vite</p>
            </div>
            <div class="vision-card">
              <div class="vision-icon">🎯</div>
              <h3>开发友好</h3>
              <p>完整的类型系统和文档支持</p>
            </div>
            <div class="vision-card">
              <div class="vision-icon">📱</div>
              <h3>响应式设计</h3>
              <p>完美适配各种屏幕尺寸</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 色彩实验室 -->
      <section id="lab" class="section lab-section">
        <div class="section-content">
          <h2>色彩实验室</h2>
          <p>实时调整主题色，预览组件效果</p>
          <ColorPicker />
        </div>
      </section>

      <!-- 组件展示 -->
      <section id="components" class="section components-section">
        <div class="section-content">
          <h2>组件列表</h2>
          <p>VsCard 组件 - 汝窑美学卡片展示</p>

          <div class="components-grid">
            <div
              v-for="(card, idx) in cardExamples"
              :key="idx"
              class="component-item"
              :id="`component-${idx}`"
            >
              <div class="component-preview">
                <VsCard
                  :type="card.type"
                  :title="card.title"
                  :description="card.description"
                  :image="card.image"
                  :like-count="card.likeCount"
                  :comment-count="card.commentCount"
                  @like="handleLike"
                  @comment="handleComment"
                />
              </div>
              <button class="view-code-btn" @click="showCodePreview(card)">
                查看代码
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 页脚 -->
      <footer class="app-footer">
        <div class="footer-content">
          <p>&copy; 2026 Vuesax-Next (Ru Edition) - 汝窑美学 UI 组件库</p>
          <p>
            <a href="https://github.com/songdaochuanshu/vuesax-next-ru-edition" target="_blank">
              GitHub Repository
            </a>
          </p>
        </div>
      </footer>
    </main>

    <!-- 代码预览模态框 -->
    <CodePreview
      :is-open="codePreviewOpen"
      :title="`VsCard Type ${selectedCard?.type}`"
      :code="selectedCard?.code || ''"
      @close="codePreviewOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VsCard } from '@vuesax-next-ru/components';
import Sidebar from './components/Sidebar.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import ColorPicker from './components/ColorPicker.vue';
import CodePreview from './components/CodePreview.vue';
import { useTheme } from './composables/useTheme';
import { cardExamples } from './data/cardExamples';

const { initTheme } = useTheme();

const codePreviewOpen = ref(false);
const selectedCard = ref<(typeof cardExamples)[0] | null>(null);

onMounted(() => {
  initTheme();
});

const handleLike = (liked: boolean) => {
  console.log('Card liked:', liked);
};

const handleComment = () => {
  console.log('Comment button clicked');
};

const showCodePreview = (card: (typeof cardExamples)[0]) => {
  selectedCard.value = card;
  codePreviewOpen.value = true;
};
</script>

<style scoped lang="scss">
@import '@vuesax-next-ru/theme';

.app {
  display: flex;
  min-height: 100vh;
  background: var(--vs-bg);
}

.main-content {
  flex: 1;
  margin-left: 280px;
  transition: margin-left 300ms ease-out;

  @media (max-width: 768px) {
    margin-left: 0;
  }
}

/* 顶部导航栏 */
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: white;
  border-bottom: 1px solid #E8EAED;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-bottom-color: #374151;
    background-color: rgba(45, 55, 72, 0.95);
  }
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.header-left h1 {
  margin: 0 0 4px 0;
  font-size: 24px;
  font-weight: 700;
  color: var(--vs-primary);
  letter-spacing: -0.5px;
}

.header-left p {
  margin: 0;
  font-size: 14px;
  color: #7F8C8D;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* 区域样式 */
.section {
  padding: 60px 20px;
  border-bottom: 1px solid #E8EAED;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  margin: 0 0 12px 0;
  font-size: 32px;
  font-weight: 700;
  color: var(--vs-primary);
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.section > .section-content > p {
  margin: 0 0 30px 0;
  font-size: 16px;
  color: #7F8C8D;
  line-height: 1.6;
}

/* 概览部分 */
.overview-section {
  background: linear-gradient(135deg, rgba(123, 191, 195, 0.05) 0%, rgba(144, 180, 75, 0.05) 100%);
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.vision-card {
  padding: 24px;
  background: white;
  border-radius: var(--vs-radius-lg);
  text-align: center;
  transition: all var(--vs-transition-base);
  box-shadow: var(--vs-shadow-sm);

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--vs-shadow-md);
  }
}

.vision-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.vision-card h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #2C3E50;

  @media (prefers-color-scheme: dark) {
    color: #E8EAED;
  }
}

.vision-card p {
  margin: 0;
  font-size: 14px;
  color: #7F8C8D;
  line-height: 1.5;
}

/* 色彩实验室 */
.lab-section {
  background: linear-gradient(135deg, rgba(144, 180, 75, 0.05) 0%, rgba(224, 138, 94, 0.05) 100%);
}

/* 组件展示 */
.components-section {
  background: linear-gradient(135deg, rgba(224, 138, 94, 0.05) 0%, rgba(207, 70, 71, 0.05) 100%);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 30px;
}

.component-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.component-preview {
  flex: 1;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: var(--vs-radius-lg);
  padding: 20px;
  box-shadow: var(--vs-shadow-md);

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }
}

.view-code-btn {
  padding: 12px 20px;
  border-radius: var(--vs-radius-md);
  border: 2px solid var(--vs-primary);
  background: transparent;
  color: var(--vs-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--vs-transition-base);

  &:hover {
    background: var(--vs-primary);
    color: white;
    box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
}

/* 页脚 */
.app-footer {
  padding: 40px 20px;
  background: white;
  border-top: 1px solid #E8EAED;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-top-color: #374151;
  }
}

.footer-content p {
  margin: 8px 0;
  font-size: 14px;
  color: #7F8C8D;

  a {
    color: var(--vs-primary);
    text-decoration: none;
    transition: color var(--vs-transition-base);

    &:hover {
      color: var(--vs-primary-dark);
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .component-preview {
    min-height: 350px;
  }
}
</style>
