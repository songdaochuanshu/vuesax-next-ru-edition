<template>
  <div class="app">
    <!-- 侧边栏 -->
    <Sidebar />

    <!-- 主容器 -->
    <main class="main-content">
      <!-- Hero 部分 -->
      <section class="hero-section">
        <div class="hero-background">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/hero-background-artistic-JzQ7s5sRb8wtPHABjAZdN5.webp" 
            alt="Hero Background"
            class="hero-image"
          />
        </div>
        
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-label">
              <span class="label-icon">✦</span>
              <span>Vuesax-Next (Ru Edition)</span>
            </div>
            
            <h1 class="hero-title">
              <span class="title-line">Crafted for clarity.</span>
              <span class="title-line highlight">Inspired by timeless elegance.</span>
            </h1>
            
            <p class="hero-description">
              A premium component library that brings harmony, consistency, and beauty to every interface. 
              Rooted in Ru porcelain aesthetics, designed for modern developers.
            </p>
            
            <div class="hero-actions">
              <a href="/components" class="btn btn-primary">
                <span>Explore Components</span>
                <span class="btn-arrow">→</span>
              </a>
              <a href="/docs" class="btn btn-secondary">
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 特性部分 -->
      <section class="features-section">
        <div class="section-header">
          <h2>Why Vuesax-Next?</h2>
          <p>Elegance meets functionality</p>
        </div>

        <div class="features-grid">
          <div class="feature-card" v-for="(feature, idx) in features" :key="idx">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- 色彩系统部分 -->
      <section class="colors-section">
        <div class="section-header">
          <h2>Ru Porcelain Color System</h2>
          <p>Inspired by ancient ceramics, refined for modern design</p>
        </div>

        <div class="colors-showcase">
          <div v-for="(color, idx) in ruColors" :key="idx" class="color-item">
            <div class="color-swatch" :style="{ backgroundColor: color.hex }"></div>
            <div class="color-info">
              <h4>{{ color.name }}</h4>
              <p class="color-meaning">{{ color.meaning }}</p>
              <p class="color-hex">{{ color.hex }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 组件预览部分 -->
      <section class="components-preview-section">
        <div class="section-header">
          <h2>Component Library</h2>
          <p>12 carefully crafted components</p>
        </div>

        <div class="components-preview-grid">
          <div v-for="(comp, idx) in componentsPreview" :key="idx" class="component-preview-card">
            <div class="component-icon">{{ comp.icon }}</div>
            <h4>{{ comp.name }}</h4>
            <p>{{ comp.description }}</p>
          </div>
        </div>

        <div class="preview-cta">
          <a href="/components" class="btn btn-primary-outline">
            View All Components →
          </a>
        </div>
      </section>

      <!-- CTA 部分 -->
      <section class="cta-section">
        <div class="cta-content">
          <h2>Ready to elevate your UI?</h2>
          <p>Start building beautiful interfaces with Vuesax-Next</p>
          <a href="/components" class="btn btn-primary btn-large">
            Get Started
          </a>
        </div>
      </section>

      <!-- 页脚 -->
      <footer class="app-footer">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Vuesax-Next</h4>
            <p>A premium UI component library inspired by Ru porcelain aesthetics.</p>
          </div>
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/components">Components</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="https://github.com/songdaochuanshu/vuesax-next-ru-edition" target="_blank">GitHub</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Design</h4>
            <ul>
              <li><a href="/docs#design">Design System</a></li>
              <li><a href="/docs#design">Color Palette</a></li>
              <li><a href="/docs#design">Typography</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Vuesax-Next (Ru Edition) - Crafted with elegance</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import { useTheme } from './composables/useTheme';

const { initTheme } = useTheme();

initTheme();

const features = [
  {
    icon: '🎨',
    title: 'Ru Porcelain Aesthetics',
    description: 'Inspired by ancient ceramics with low-saturation, high-quality design system'
  },
  {
    icon: '⚡',
    title: 'Modern Technology',
    description: 'Built with Vue 3.5, TypeScript, and Vite for optimal performance'
  },
  {
    icon: '🎯',
    title: 'Developer Friendly',
    description: 'Complete type system, comprehensive documentation, and intuitive API'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Perfect adaptation across all screen sizes and devices'
  },
  {
    icon: '🌙',
    title: 'Dark Mode Ready',
    description: 'Seamless dark mode support with automatic system detection'
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'WCAG AA compliant with full keyboard navigation support'
  }
];

const ruColors = [
  {
    name: 'Sky Blue',
    meaning: '天青 - Serenity and tranquility',
    hex: '#7BBFC3'
  },
  {
    name: 'Powder Green',
    meaning: '粉青 - Vitality and growth',
    hex: '#90B44B'
  },
  {
    name: 'Amber',
    meaning: '琥珀 - Warmth and stability',
    hex: '#E08A5E'
  },
  {
    name: 'Glaze Red',
    meaning: '釉红 - Energy and attention',
    hex: '#CF4647'
  },
  {
    name: 'Moon White',
    meaning: '月白 - Purity and clarity',
    hex: '#F5F7F8'
  }
];

const componentsPreview = [
  { icon: '🔘', name: 'VsButton', description: 'Multiple styles and states' },
  { icon: '📝', name: 'VsInput', description: 'Rich input types' },
  { icon: '📋', name: 'VsSelect', description: 'Single and multi-select' },
  { icon: '☑️', name: 'VsCheckbox', description: 'Flexible selection' },
  { icon: '⭕', name: 'VsRadio', description: 'Single choice' },
  { icon: '🔘', name: 'VsSwitch', description: 'Toggle control' },
  { icon: '⚠️', name: 'VsAlert', description: 'Status messaging' },
  { icon: '🔔', name: 'VsNotification', description: 'Notifications' },
  { icon: '📦', name: 'VsModal', description: 'Dialog boxes' },
  { icon: '🎯', name: 'VsDrawer', description: 'Side panels' },
  { icon: '◀▶', name: 'VsPagination', description: 'Page navigation' },
  { icon: '🔗', name: 'VsBreadcrumb', description: 'Navigation path' }
];
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

/* Hero 部分 */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--vs-bg);

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 40px 20px;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomIn 0.8s ease-out;
}

@keyframes zoomIn {
  from {
    transform: scale(1.05);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: center;
    text-align: center;
  }
}

.hero-text {
  max-width: 600px;
  animation: slideUp 0.8s ease-out 0.2s both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(123, 191, 195, 0.1);
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vs-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}

.label-icon {
  font-size: 14px;
}

.hero-title {
  margin: 0 0 24px 0;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  color: #2C3E50;
  letter-spacing: -1px;

  @media (prefers-color-scheme: dark) {
    color: #E8EAED;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.title-line {
  display: block;
}

.title-line.highlight {
  background: linear-gradient(135deg, #7BBFC3, #90B44B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  margin: 0 0 32px 0;
  font-size: 18px;
  line-height: 1.6;
  color: #7F8C8D;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 300ms ease-out;
  cursor: pointer;
  border: none;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.btn-primary {
  background: linear-gradient(135deg, #7BBFC3, #7BBFC3);
  color: white;
  box-shadow: 0 8px 24px rgba(123, 191, 195, 0.3);

  &:hover {
    box-shadow: 0 12px 32px rgba(123, 191, 195, 0.4);
  }
}

.btn-secondary {
  background: transparent;
  color: var(--vs-primary);
  border: 2px solid var(--vs-primary);

  &:hover {
    background: rgba(123, 191, 195, 0.05);
  }
}

.btn-primary-outline {
  background: transparent;
  color: var(--vs-primary);
  border: 2px solid var(--vs-primary);
  padding: 12px 28px;
  font-size: 14px;

  &:hover {
    background: rgba(123, 191, 195, 0.05);
  }
}

.btn-large {
  padding: 16px 48px;
  font-size: 16px;
}

.btn-arrow {
  transition: transform 300ms ease-out;
}

.btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* 特性部分 */
.features-section {
  padding: 80px 40px;
  background: white;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;

  h2 {
    margin: 0 0 12px 0;
    font-size: 40px;
    font-weight: 700;
    color: #2C3E50;
    letter-spacing: -0.5px;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #7F8C8D;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 32px 24px;
  background: #F5F7F8;
  border-radius: 12px;
  text-align: center;
  transition: all 300ms ease-out;
  border: 1px solid transparent;

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: var(--vs-primary);
    box-shadow: 0 12px 32px rgba(123, 191, 195, 0.15);
  }

  .feature-icon {
    font-size: 40px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0 0 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #7F8C8D;
    line-height: 1.6;
  }
}

/* 色彩系统部分 */
.colors-section {
  padding: 80px 40px;
  background: linear-gradient(135deg, rgba(123, 191, 195, 0.05) 0%, rgba(144, 180, 75, 0.05) 100%);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.colors-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.color-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: fadeInUp 0.6s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.color-swatch {
  width: 100%;
  height: 120px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
}

.color-info {
  h4 {
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }

  .color-meaning {
    margin: 0 0 4px 0;
    font-size: 13px;
    color: #7F8C8D;
  }

  .color-hex {
    margin: 0;
    font-size: 12px;
    font-family: 'Menlo', 'Monaco', monospace;
    color: var(--vs-primary);
    font-weight: 600;
  }
}

/* 组件预览部分 */
.components-preview-section {
  padding: 80px 40px;
  background: white;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.components-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.component-preview-card {
  padding: 24px 16px;
  background: #F5F7F8;
  border-radius: 8px;
  text-align: center;
  transition: all 300ms ease-out;

  @media (prefers-color-scheme: dark) {
    background: #374151;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(123, 191, 195, 0.1);
  }

  .component-icon {
    font-size: 32px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0 0 6px 0;
    font-size: 14px;
    font-weight: 600;
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #7F8C8D;
  }
}

.preview-cta {
  text-align: center;
}

/* CTA 部分 */
.cta-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #7BBFC3 0%, #90B44B 100%);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;

  h2 {
    margin: 0 0 16px 0;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    margin: 0 0 32px 0;
    font-size: 18px;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}

.cta-section .btn-primary {
  background: white;
  color: #7BBFC3;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
}

/* 页脚 */
.app-footer {
  padding: 60px 40px 20px;
  background: white;
  border-top: 1px solid #E8EAED;

  @media (prefers-color-scheme: dark) {
    background: #1F2937;
    border-top-color: #374151;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 16px;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.footer-section {
  h4 {
    margin: 0 0 12px 0;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #2C3E50;

    @media (prefers-color-scheme: dark) {
      color: #E8EAED;
    }
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #7F8C8D;
    line-height: 1.6;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 8px 0;

      a {
        color: #7F8C8D;
        text-decoration: none;
        font-size: 13px;
        transition: color 300ms;

        &:hover {
          color: var(--vs-primary);
        }
      }
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #E8EAED;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #7F8C8D;
  }
}

@media (max-width: 768px) {
  .features-grid,
  .colors-showcase,
  .components-preview-grid {
    gap: 16px;
  }
}
</style>
