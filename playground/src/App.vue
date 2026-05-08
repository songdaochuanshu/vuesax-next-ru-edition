<template>
  <div class="app">
    <!-- 侧边栏 -->
    <Sidebar />

    <!-- 主容器 -->
    <main class="main-content">
      <!-- Hero 部分 - 极简艺术风格 -->
      <section class="hero-section">
        <div class="hero-container">
          <div class="hero-grid">
            <!-- 左侧：大胆排版 -->
            <div class="hero-left">
              <div class="hero-label">
                <span class="label-text">Vuesax-Next</span>
                <span class="label-dot"></span>
              </div>

              <h1 class="hero-title">
                <span class="title-word">Crafted</span>
                <span class="title-word">for</span>
                <span class="title-word">clarity</span>
              </h1>

              <div class="hero-divider"></div>

              <p class="hero-subtitle">
                A premium component library inspired by Ru porcelain aesthetics. 
                <span class="highlight">Minimalist design</span> meets 
                <span class="highlight">bold creativity</span>.
              </p>

              <div class="hero-actions">
                <a href="/components" class="btn btn-bold">Explore</a>
                <a href="/docs" class="btn btn-outline">Docs</a>
              </div>
            </div>

            <!-- 右侧：创意视觉元素 -->
            <div class="hero-right">
              <div class="hero-visual">
                <div class="visual-circle circle-1"></div>
                <div class="visual-circle circle-2"></div>
                <div class="visual-text">12</div>
                <div class="visual-label">Components</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 装饰元素 -->
        <div class="hero-decoration">
          <div class="deco-line deco-1"></div>
          <div class="deco-line deco-2"></div>
        </div>
      </section>

      <!-- 特性部分 - 不对称布局 -->
      <section class="features-section">
        <div class="features-container">
          <div class="section-header">
            <h2>Why Choose</h2>
            <h2 class="header-highlight">Vuesax-Next?</h2>
          </div>

          <div class="features-grid">
            <!-- 特性 1 - 大 -->
            <div class="feature-card feature-large">
              <div class="feature-number">01</div>
              <h3>Ru Porcelain<br/>Aesthetics</h3>
              <p>Inspired by ancient ceramics with low-saturation, high-quality design.</p>
            </div>

            <!-- 特性 2 -->
            <div class="feature-card">
              <div class="feature-number">02</div>
              <h3>Modern Tech</h3>
              <p>Vue 3.5, TypeScript, Vite</p>
            </div>

            <!-- 特性 3 -->
            <div class="feature-card">
              <div class="feature-number">03</div>
              <h3>Developer<br/>Friendly</h3>
              <p>Complete types & docs</p>
            </div>

            <!-- 特性 4 - 大 -->
            <div class="feature-card feature-large feature-alt">
              <div class="feature-number">04</div>
              <h3>Fully<br/>Responsive</h3>
              <p>Perfect adaptation across all devices and screen sizes.</p>
            </div>

            <!-- 特性 5 -->
            <div class="feature-card">
              <div class="feature-number">05</div>
              <h3>Dark Mode</h3>
              <p>System detection</p>
            </div>

            <!-- 特性 6 -->
            <div class="feature-card">
              <div class="feature-number">06</div>
              <h3>Accessible</h3>
              <p>WCAG AA compliant</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 色彩系统 - 创意排版 -->
      <section class="colors-section">
        <div class="colors-container">
          <div class="colors-header">
            <h2>Color<br/><span class="header-rotate">System</span></h2>
            <p class="colors-description">
              Five carefully crafted colors inspired by Ru porcelain ceramics
            </p>
          </div>

          <div class="colors-grid">
            <div v-for="(color, idx) in ruColors" :key="idx" class="color-card" :style="{ '--delay': idx * 0.1 + 's' }">
              <div class="color-swatch" :style="{ backgroundColor: color.hex }"></div>
              <div class="color-details">
                <h4>{{ color.name }}</h4>
                <p class="color-meaning">{{ color.meaning }}</p>
                <code class="color-code">{{ color.hex }}</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 组件展示 - 网格打破 -->
      <section class="components-section">
        <div class="components-container">
          <div class="components-header">
            <h2>12 Components</h2>
            <div class="header-underline"></div>
          </div>

          <div class="components-masonry">
            <div v-for="(comp, idx) in componentsPreview" :key="idx" class="component-item" :class="`item-${(idx % 4) + 1}`">
              <div class="component-icon">{{ comp.icon }}</div>
              <h4>{{ comp.name }}</h4>
              <p>{{ comp.description }}</p>
            </div>
          </div>

          <div class="components-cta">
            <a href="/components" class="btn btn-bold btn-large">
              View All Components →
            </a>
          </div>
        </div>
      </section>

      <!-- CTA 部分 - 大胆设计 -->
      <section class="cta-section">
        <div class="cta-container">
          <div class="cta-content">
            <h2>Ready to elevate<br/><span class="cta-highlight">your UI?</span></h2>
            <p>Start building beautiful interfaces with Vuesax-Next today</p>
            <a href="/components" class="btn btn-cta">Get Started</a>
          </div>
          <div class="cta-decoration">
            <div class="cta-shape shape-1"></div>
            <div class="cta-shape shape-2"></div>
          </div>
        </div>
      </section>

      <!-- 页脚 -->
      <footer class="app-footer">
        <div class="footer-container">
          <div class="footer-main">
            <div class="footer-brand">
              <h4>Vuesax-Next</h4>
              <p>Premium UI components inspired by Ru porcelain aesthetics</p>
            </div>
            <div class="footer-links">
              <div class="footer-column">
                <h5>Resources</h5>
                <ul>
                  <li><a href="/components">Components</a></li>
                  <li><a href="/docs">Documentation</a></li>
                  <li><a href="https://github.com/songdaochuanshu/vuesax-next-ru-edition" target="_blank">GitHub</a></li>
                </ul>
              </div>
              <div class="footer-column">
                <h5>Design</h5>
                <ul>
                  <li><a href="/docs#design">Design System</a></li>
                  <li><a href="/docs#design">Color Palette</a></li>
                  <li><a href="/docs#design">Typography</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Vuesax-Next • Crafted with elegance</p>
          </div>
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

const ruColors = [
  { name: 'Sky Blue', meaning: '天青', hex: '#7BBFC3' },
  { name: 'Powder Green', meaning: '粉青', hex: '#90B44B' },
  { name: 'Amber', meaning: '琥珀', hex: '#E08A5E' },
  { name: 'Glaze Red', meaning: '釉红', hex: '#CF4647' },
  { name: 'Moon White', meaning: '月白', hex: '#F5F7F8' }
];

const componentsPreview = [
  { icon: '🔘', name: 'Button', description: 'Multiple styles' },
  { icon: '📝', name: 'Input', description: 'Rich types' },
  { icon: '📋', name: 'Select', description: 'Multi-select' },
  { icon: '☑️', name: 'Checkbox', description: 'Flexible' },
  { icon: '⭕', name: 'Radio', description: 'Single choice' },
  { icon: '🔘', name: 'Switch', description: 'Toggle' },
  { icon: '⚠️', name: 'Alert', description: 'Status' },
  { icon: '🔔', name: 'Notification', description: 'Notify' },
  { icon: '📦', name: 'Modal', description: 'Dialog' },
  { icon: '🎯', name: 'Drawer', description: 'Panels' },
  { icon: '◀▶', name: 'Pagination', description: 'Navigate' },
  { icon: '🔗', name: 'Breadcrumb', description: 'Path' }
];
</script>

<style scoped lang="scss">
@import '@vuesax-next-ru/theme';

.app {
  display: flex;
  min-height: 100vh;
  background: #FAFBFC;
}

.main-content {
  flex: 1;
  margin-left: 280px;
  transition: margin-left 300ms ease-out;

  @media (max-width: 768px) {
    margin-left: 0;
  }
}

/* ============ Hero Section ============ */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  background: white;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 20px;
    min-height: auto;
  }
}

.hero-container {
  max-width: 1200px;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.hero-left {
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--vs-primary);

  .label-dot {
    width: 8px;
    height: 8px;
    background: var(--vs-primary);
    border-radius: 50%;
  }
}

.hero-title {
  margin: 0 0 24px 0;
  font-size: 72px;
  font-weight: 900;
  line-height: 1.1;
  color: #1a1a1a;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  .title-word {
    display: block;
    animation: slideInLeft 0.8s ease-out;
    animation-fill-mode: both;

    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
  }
}

.hero-divider {
  width: 60px;
  height: 4px;
  background: var(--vs-primary);
  margin: 24px 0;
  animation: slideInLeft 0.8s ease-out 0.4s both;
}

.hero-subtitle {
  margin: 0 0 32px 0;
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  max-width: 500px;

  .highlight {
    color: var(--vs-primary);
    font-weight: 600;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  animation: slideInLeft 0.8s ease-out 0.5s both;
}

.hero-right {
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-visual {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-circle {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;

  &.circle-1 {
    width: 200px;
    height: 200px;
    background: rgba(123, 191, 195, 0.1);
    animation-delay: 0s;
  }

  &.circle-2 {
    width: 120px;
    height: 120px;
    background: rgba(144, 180, 75, 0.15);
    animation-delay: 1s;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.visual-text {
  position: relative;
  z-index: 10;
  font-size: 64px;
  font-weight: 900;
  color: var(--vs-primary);
  animation: scaleIn 0.8s ease-out 0.6s both;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.visual-label {
  position: absolute;
  bottom: 0;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  animation: slideInLeft 0.8s ease-out 0.7s both;
}

.hero-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.deco-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, var(--vs-primary), transparent);

  &.deco-1 {
    width: 300px;
    height: 2px;
    top: 30%;
    right: 10%;
    animation: slideInRight 1s ease-out;
  }

  &.deco-2 {
    width: 200px;
    height: 1px;
    bottom: 20%;
    left: 10%;
    animation: slideInLeft 1s ease-out;
  }
}

/* ============ Buttons ============ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 0;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 300ms ease-out;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.btn-bold {
  background: #1a1a1a;
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
}

.btn-outline {
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;

  &:hover {
    background: #1a1a1a;
    color: white;
  }
}

.btn-large {
  padding: 16px 48px;
  font-size: 16px;
}

.btn-cta {
  background: var(--vs-primary);
  color: white;
  box-shadow: 0 8px 24px rgba(123, 191, 195, 0.3);

  &:hover {
    box-shadow: 0 12px 32px rgba(123, 191, 195, 0.4);
  }
}

/* ============ Features Section ============ */
.features-section {
  padding: 100px 40px;
  background: #FAFBFC;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 60px;

  h2 {
    margin: 0;
    font-size: 48px;
    font-weight: 900;
    line-height: 1.2;
    color: #1a1a1a;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .header-highlight {
    background: linear-gradient(135deg, #7BBFC3, #90B44B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  grid-auto-flow: dense;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  padding: 32px;
  background: white;
  border-radius: 0;
  border: 1px solid #E8EAED;
  transition: all 300ms ease-out;
  animation: fadeInUp 0.6s ease-out;

  &:hover {
    transform: translateY(-8px);
    border-color: var(--vs-primary);
    box-shadow: 0 12px 32px rgba(123, 191, 195, 0.15);
  }

  &.feature-large {
    grid-column: span 2;
    grid-row: span 2;
    padding: 48px;

    @media (max-width: 1024px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  &.feature-alt {
    background: linear-gradient(135deg, rgba(123, 191, 195, 0.05), rgba(144, 180, 75, 0.05));
  }

  .feature-number {
    font-size: 48px;
    font-weight: 900;
    color: var(--vs-primary);
    margin-bottom: 16px;
    opacity: 0.3;
  }

  h3 {
    margin: 0 0 12px 0;
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
}

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

/* ============ Colors Section ============ */
.colors-section {
  padding: 100px 40px;
  background: white;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.colors-container {
  max-width: 1200px;
  margin: 0 auto;
}

.colors-header {
  margin-bottom: 60px;

  h2 {
    margin: 0 0 16px 0;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.1;
    color: #1a1a1a;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  .header-rotate {
    display: inline-block;
    transform: rotate(-3deg);
    color: var(--vs-primary);
  }

  .colors-description {
    margin: 0;
    font-size: 16px;
    color: #666;
    max-width: 500px;
  }
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
}

.color-card {
  animation: fadeInUp 0.6s ease-out;
  animation-delay: var(--delay);

  .color-swatch {
    width: 100%;
    height: 160px;
    border-radius: 0;
    margin-bottom: 16px;
    transition: all 300ms ease-out;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }

  .color-details {
    h4 {
      margin: 0 0 4px 0;
      font-size: 16px;
      font-weight: 700;
      color: #1a1a1a;
    }

    .color-meaning {
      margin: 0 0 8px 0;
      font-size: 12px;
      color: #999;
    }

    .color-code {
      display: block;
      font-size: 12px;
      font-family: 'Menlo', monospace;
      color: var(--vs-primary);
      font-weight: 600;
    }
  }
}

/* ============ Components Section ============ */
.components-section {
  padding: 100px 40px;
  background: #FAFBFC;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.components-container {
  max-width: 1200px;
  margin: 0 auto;
}

.components-header {
  margin-bottom: 60px;
  position: relative;

  h2 {
    margin: 0;
    font-size: 56px;
    font-weight: 900;
    color: #1a1a1a;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  .header-underline {
    width: 80px;
    height: 6px;
    background: var(--vs-primary);
    margin-top: 12px;
    animation: slideInLeft 0.8s ease-out;
  }
}

.components-masonry {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.component-item {
  padding: 24px;
  background: white;
  border-radius: 0;
  border: 1px solid #E8EAED;
  text-align: center;
  transition: all 300ms ease-out;
  animation: fadeInUp 0.6s ease-out;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--vs-primary);
    box-shadow: 0 8px 20px rgba(123, 191, 195, 0.15);
  }

  /* 网格打破效果 */
  &.item-1 {
    grid-column: span 1;
    grid-row: span 1;
  }

  &.item-2 {
    grid-column: span 1;
    grid-row: span 1;
  }

  &.item-3 {
    grid-column: span 1;
    grid-row: span 1;
  }

  &.item-4 {
    grid-column: span 1;
    grid-row: span 1;
  }

  .component-icon {
    font-size: 40px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0 0 6px 0;
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
}

.components-cta {
  text-align: center;
}

/* ============ CTA Section ============ */
.cta-section {
  padding: 100px 40px;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.cta-content {
  h2 {
    margin: 0 0 16px 0;
    font-size: 48px;
    font-weight: 900;
    line-height: 1.2;
    color: #1a1a1a;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .cta-highlight {
    color: var(--vs-primary);
  }

  p {
    margin: 0 0 32px 0;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
  }
}

.cta-decoration {
  position: relative;
  height: 300px;
}

.cta-shape {
  position: absolute;
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;

  &.shape-1 {
    width: 200px;
    height: 200px;
    background: rgba(123, 191, 195, 0.1);
    top: 0;
    right: 0;
    animation-delay: 0s;
  }

  &.shape-2 {
    width: 120px;
    height: 120px;
    background: rgba(144, 180, 75, 0.15);
    bottom: 0;
    left: 0;
    animation-delay: 1s;
  }
}

/* ============ Footer ============ */
.app-footer {
  padding: 60px 40px 20px;
  background: #1a1a1a;
  color: white;

  @media (max-width: 768px) {
    padding: 40px 20px 16px;
  }
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.footer-brand {
  h4 {
    margin: 0 0 12px 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--vs-primary);
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #999;
    line-height: 1.6;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.footer-column {
  h5 {
    margin: 0 0 12px 0;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #999;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 8px 0;

      a {
        color: #999;
        text-decoration: none;
        font-size: 14px;
        transition: color 300ms;

        &:hover {
          color: var(--vs-primary);
        }
      }
    }
  }
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid #333;
  text-align: center;

  p {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
}
</style>
