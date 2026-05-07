/**
 * VsCard 组件示例数据
 * 包含 Type 1-5 的完整示例
 */

export interface CardExample {
  type: number;
  title: string;
  description: string;
  image: string;
  likeCount: number;
  commentCount: number;
  code: string;
}

export const cardExamples: CardExample[] = [
  {
    type: 1,
    title: '天青瓷韵',
    description: '汝窑天青釉，宁静致远。这是汝窑最标志性的颜色，代表着东方审美的精妙之处。',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-1-cyan-TKpZ3iHTfJmvTPcjC8q7V3.webp',
    likeCount: 128,
    commentCount: 24,
    code: `<template>
  <VsCard
    type="1"
    title="天青瓷韵"
    description="汝窑天青釉，宁静致远。"
    image="https://example.com/image.jpg"
    :like-count="128"
    :comment-count="24"
    @like="handleLike"
    @comment="handleComment"
  />
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Liked:', liked);
};

const handleComment = () => {
  console.log('Comment clicked');
};
</script>`,
  },
  {
    type: 2,
    title: '粉青生机',
    description: '粉青釉彩，自然生机。柔和温暖的色调，如春天的新芽，充满生命力。',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-2-greenish-HZv6As9BufN7Xknw4LsUBj.webp',
    likeCount: 256,
    commentCount: 42,
    code: `<template>
  <VsCard
    type="2"
    title="粉青生机"
    description="粉青釉彩，自然生机。"
    image="https://example.com/image.jpg"
    :like-count="256"
    :comment-count="42"
    @like="handleLike"
    @comment="handleComment"
  />
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Liked:', liked);
};

const handleComment = () => {
  console.log('Comment clicked');
};
</script>`,
  },
  {
    type: 3,
    title: '琥珀岁月',
    description: '琥珀釉质，古韵厚重。时光沉淀的色彩，承载着历史的温度和文化的底蕴。',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-3-amber-9wQeQhYdXgVAzx5YGgTWD3.webp',
    likeCount: 189,
    commentCount: 35,
    code: `<template>
  <VsCard
    type="3"
    title="琥珀岁月"
    description="琥珀釉质，古韵厚重。"
    image="https://example.com/image.jpg"
    :like-count="189"
    :comment-count="35"
    @like="handleLike"
    @comment="handleComment"
  />
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Liked:', liked);
};

const handleComment = () => {
  console.log('Comment clicked');
};
</script>`,
  },
  {
    type: 4,
    title: '釉红精致',
    description: '釉红色彩，精致典雅。点缀生动，为设计增添灵动的气息。',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-1-cyan-TKpZ3iHTfJmvTPcjC8q7V3.webp',
    likeCount: 342,
    commentCount: 58,
    code: `<template>
  <VsCard
    type="4"
    title="釉红精致"
    description="釉红色彩，精致典雅。"
    image="https://example.com/image.jpg"
    :like-count="342"
    :comment-count="58"
    @like="handleLike"
    @comment="handleComment"
  />
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Liked:', liked);
};

const handleComment = () => {
  console.log('Comment clicked');
};
</script>`,
  },
  {
    type: 5,
    title: '月白纯净',
    description: '月白釉彩，纯净高级。如月光般柔和，是汝窑美学的终极表达。',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/ARQQHpFqs3bq4XrBNNZKYj/ru-porcelain-card-2-greenish-HZv6As9BufN7Xknw4LsUBj.webp',
    likeCount: 267,
    commentCount: 45,
    code: `<template>
  <VsCard
    type="5"
    title="月白纯净"
    description="月白釉彩，纯净高级。"
    image="https://example.com/image.jpg"
    :like-count="267"
    :comment-count="45"
    @like="handleLike"
    @comment="handleComment"
  />
</template>

<script setup lang="ts">
import { VsCard } from '@vuesax-next-ru/components';

const handleLike = (liked: boolean) => {
  console.log('Liked:', liked);
};

const handleComment = () => {
  console.log('Comment clicked');
};
</script>`,
  },
];
