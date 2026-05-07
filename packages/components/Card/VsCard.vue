<template>
  <div
    class="vs-card"
    :class="[`vs-card-type-${type}`, { 'vs-card-interactive': interactive }]"
    :style="{ '--vs-card-color': color }"
    @click="handleCardClick"
  >
    <!-- 图片区域 -->
    <div class="vs-card-image-wrapper">
      <img
        v-if="image"
        :src="image"
        :alt="title || 'Card image'"
        class="vs-card-image"
      />
      <div v-else class="vs-card-image-placeholder"></div>

      <!-- 浮动图标组 -->
      <div class="vs-card-actions">
        <!-- 收藏按钮 -->
        <button
          v-if="showLike"
          class="vs-card-action-btn vs-card-like-btn"
          :class="{ 'vs-card-liked': liked }"
          @click.stop="handleLike"
          :title="liked ? '取消收藏' : '收藏'"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span v-if="likeCount > 0" class="vs-card-action-count">{{ likeCount }}</span>
        </button>

        <!-- 评论按钮 -->
        <button
          v-if="showComment"
          class="vs-card-action-btn vs-card-comment-btn"
          @click.stop="handleComment"
          title="评论"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
          <span v-if="commentCount > 0" class="vs-card-action-count">{{ commentCount }}</span>
        </button>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="vs-card-content">
      <h3 v-if="title" class="vs-card-title">{{ title }}</h3>
      <p v-if="description" class="vs-card-description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VsCardProps, VsCardEmits } from './types';

/**
 * VsCard Type 4 Component
 * 
 * 汝窑卡片组件 - Type 4 实现
 * 特点：
 * - 大圆角图片区（18px+）
 * - 浮动磨砂玻璃图标组
 * - 平滑的内容区衔接
 * - 悬停提升动画
 */

const props = withDefaults(defineProps<VsCardProps>(), {
  type: 4,
  color: 'var(--vs-primary)',
  interactive: true,
  showLike: true,
  showComment: true,
  likeCount: 0,
  commentCount: 0,
  liked: false,
});

const emit = defineEmits<VsCardEmits>();

// 本地状态
const isLiked = ref(props.liked);

// 计算属性
const computedLikeCount = computed(() => {
  return isLiked.value && !props.liked ? props.likeCount + 1 : props.likeCount;
});

// 事件处理
const handleLike = () => {
  isLiked.value = !isLiked.value;
  emit('like', isLiked.value);
};

const handleComment = () => {
  emit('comment');
};

const handleCardClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped lang="scss">
@import '../../theme/_tokens.scss';

.vs-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--vs-radius-lg);
  overflow: hidden;
  background-color: white;
  transition: all var(--vs-transition-base);
  box-shadow: var(--vs-shadow-md);

  @media (prefers-color-scheme: dark) {
    background-color: #2D3748;
  }
}

.vs-card-interactive {
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--vs-shadow-hover);
  }
}

/* 图片区域 */
.vs-card-image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 66.67%; /* 3:2 宽高比 */
  overflow: hidden;
  background: linear-gradient(135deg, var(--vs-primary-light), var(--vs-primary));

  .vs-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--vs-transition-base);
  }

  .vs-card-image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--vs-primary-light), var(--vs-primary));
  }

  &:hover .vs-card-image {
    transform: scale(1.05);
  }
}

/* 浮动图标组 - 磨砂玻璃效果 */
.vs-card-actions {
  position: absolute;
  top: var(--vs-spacing-lg);
  right: var(--vs-spacing-lg);
  display: flex;
  gap: var(--vs-spacing-md);
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: var(--vs-radius-xl);
  padding: var(--vs-spacing-md) var(--vs-spacing-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(26, 31, 46, 0.85);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.vs-card-action-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--vs-spacing-xs);
  color: var(--vs-text-secondary);
  font-size: var(--vs-font-size-sm);
  font-weight: var(--vs-font-weight-medium);
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: all var(--vs-transition-fast);

  svg {
    width: 20px;
    height: 20px;
    transition: transform var(--vs-transition-fast);
  }

  &:hover {
    color: var(--vs-primary);
    transform: scale(1.1);

    svg {
      transform: scale(1.2);
    }
  }
}

.vs-card-like-btn {
  &.vs-card-liked {
    color: var(--vs-danger);

    svg {
      animation: vs-card-like-pop 0.3s ease-out;
    }
  }
}

@keyframes vs-card-like-pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

.vs-card-action-count {
  min-width: 20px;
  text-align: center;
  font-size: var(--vs-font-size-xs);
}

/* 内容区域 */
.vs-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--vs-spacing-lg);
  gap: var(--vs-spacing-md);
}

.vs-card-title {
  margin: 0;
  font-size: var(--vs-font-size-lg);
  font-weight: var(--vs-font-weight-semibold);
  color: var(--vs-text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.vs-card-description {
  margin: 0;
  font-size: var(--vs-font-size-sm);
  color: var(--vs-text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Type 4 特定样式 */
.vs-card-type-4 {
  /* Type 4 是默认样式 */
  .vs-card-image-wrapper {
    border-radius: var(--vs-radius-2xl) var(--vs-radius-2xl) 0 0;
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .vs-card-actions {
    top: var(--vs-spacing-md);
    right: var(--vs-spacing-md);
    padding: var(--vs-spacing-sm) var(--vs-spacing-md);
  }

  .vs-card-content {
    padding: var(--vs-spacing-md);
  }

  .vs-card-title {
    font-size: var(--vs-font-size-base);
  }
}
</style>
