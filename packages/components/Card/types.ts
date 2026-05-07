/**
 * VsCard Component Types
 * 
 * 汝窑卡片组件类型定义
 * 支持多种卡片样式，Type 4 为主要实现
 */

export interface VsCardProps {
  /**
   * 卡片类型
   * @default 4
   * @description 决定卡片的视觉样式和布局
   */
  type?: string | number;

  /**
   * 自定义颜色
   * @default 'var(--vs-primary)'
   * @description 允许用户覆盖主题色，支持 CSS 颜色值
   */
  color?: string;

  /**
   * 是否开启交互动画
   * @default true
   * @description 鼠标悬停时是否显示缩放和阴影动画
   */
  interactive?: boolean;

  /**
   * 卡片标题
   * @description 卡片顶部的标题文本
   */
  title?: string;

  /**
   * 卡片描述
   * @description 卡片的描述文本
   */
  description?: string;

  /**
   * 卡片图片 URL
   * @description 卡片顶部显示的背景图片
   */
  image?: string;

  /**
   * 是否显示收藏图标
   * @default true
   * @description 右上角收藏（心形）图标
   */
  showLike?: boolean;

  /**
   * 是否显示评论图标
   * @default true
   * @description 右上角评论图标
   */
  showComment?: boolean;

  /**
   * 收藏数量
   * @default 0
   * @description 显示在心形图标旁的数字
   */
  likeCount?: number;

  /**
   * 评论数量
   * @default 0
   * @description 显示在评论图标旁的数字
   */
  commentCount?: number;

  /**
   * 是否已收藏
   * @default false
   * @description 控制心形图标的填充状态
   */
  liked?: boolean;
}

/**
 * VsCard 事件类型
 */
export interface VsCardEmits {
  /**
   * 收藏按钮点击事件
   */
  'like': [liked: boolean];

  /**
   * 评论按钮点击事件
   */
  'comment': [];

  /**
   * 卡片点击事件
   */
  'click': [event: MouseEvent];
}
