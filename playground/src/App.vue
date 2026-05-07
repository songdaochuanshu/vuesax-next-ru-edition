<template>
  <div class="app-container">
    <!-- 页面头部 -->
    <header class="app-header">
      <h1 class="app-title">Vuesax-Next (Ru Edition)</h1>
      <p class="app-subtitle">汝窑美学 UI 组件库 - VsCard Type 4 演示</p>
    </header>

    <!-- 主容器 -->
    <main class="app-main">
      <!-- 背景装饰 -->
      <div class="app-background"></div>

      <!-- 卡片网格 -->
      <div class="cards-grid">
        <!-- 卡片 1: 天青瓷器 -->
        <VsCard
          type="4"
          title="天青瓷韵"
          description="汝窑天青釉，宁静致远。这是汝窑最标志性的颜色，代表着东方审美的精妙之处。"
          image="https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-1-cyan-TKpZ3iHTfJmvTPcjC8q7V3.webp"
          :like-count="128"
          :comment-count="24"
          @like="handleLike"
          @comment="handleComment"
        />

        <!-- 卡片 2: 粉青生机 -->
        <VsCard
          type="4"
          title="粉青生机"
          description="粉青釉彩，自然生机。柔和温暖的色调，如春天的新芽，充满生命力。"
          image="https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-2-greenish-HZv6As9BufN7Xknw4LsUBj.webp"
          :like-count="256"
          :comment-count="42"
          @like="handleLike"
          @comment="handleComment"
        />

        <!-- 卡片 3: 琥珀岁月 -->
        <VsCard
          type="4"
          title="琥珀岁月"
          description="琥珀釉质，古韵厚重。时光沉淀的色彩，承载着历史的温度和文化的底蕴。"
          image="https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-3-amber-9wQeQhYdXgVAzx5YGgTWD3.webp"
          :like-count="189"
          :comment-count="35"
          @like="handleLike"
          @comment="handleComment"
        />
      </div>

      <!-- 特性说明 -->
      <section class="features-section">
        <h2 class="features-title">VsCard Type 4 特性</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <h3>汝窑美学</h3>
            <p>融入汝窑美学，低饱和度、高质感的东方审美体系</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <h3>磨砂玻璃</h3>
            <p>浮动图标采用 backdrop-filter 磨砂玻璃效果</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <h3>交互动画</h3>
            <p>悬停时平滑的缩放和阴影变化，提升用户体验</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📱</div>
            <h3>响应式设计</h3>
            <p>完美适配各种屏幕尺寸，移动端友好</p>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="app-footer">
      <p>&copy; 2026 Vuesax-Next (Ru Edition) - 汝窑美学 UI 组件库</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Card liked:', liked);
};

const handleComment = () => {
  console.log('Comment button clicked');
};
</script>

<style scoped lang="scss">
@import '@vuesax-next-ru/theme';

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, var(--vs-bg) 0%, #f0f2f5 100%);
}

/* 页面头部 */
.app-header {
  padding: 60px 20px 40px;
  text-align: center;
  background: linear-gradient(135deg, var(--vs-primary-light) 0%, var(--vs-primary) 100%);
  color: white;
  box-shadow: var(--vs-shadow-lg);
}

.app-title {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.app-subtitle {
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

/* 主容器 */
.app-main {
  flex: 1;
  position: relative;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* 背景装饰 */
.app-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(123, 191, 195, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(144, 180, 75, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* 卡片网格 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

/* 特性说明 */
.features-section {
  background: white;
  border-radius: var(--vs-radius-xl);
  padding: 40px;
  box-shadow: var(--vs-shadow-md);
  position: relative;
  z-index: 1;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
  }
}

.features-title {
  margin: 0 0 30px 0;
  font-size: 28px;
  font-weight: 600;
  color: var(--vs-text-primary);
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.feature-item {
  text-align: center;
  padding: 20px;
  border-radius: var(--vs-radius-lg);
  background: var(--vs-bg);
  transition: all var(--vs-transition-base);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--vs-shadow-md);
  }
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.feature-item h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vs-text-primary);
}

.feature-item p {
  margin: 0;
  font-size: 14px;
  color: var(--vs-text-secondary);
  line-height: 1.5;
}

/* 页脚 */
.app-footer {
  padding: 30px 20px;
  text-align: center;
  color: var(--vs-text-secondary);
  font-size: 14px;
  border-top: 1px solid var(--vs-border);
  background: var(--vs-bg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-title {
    font-size: 32px;
  }

  .app-subtitle {
    font-size: 16px;
  }

  .app-main {
    padding: 40px 16px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .features-section {
    padding: 24px;
  }

  .features-title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .feature-item {
    padding: 16px;
  }

  .feature-icon {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 40px 16px 30px;
  }

  .app-title {
    font-size: 24px;
  }

  .app-subtitle {
    font-size: 14px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
