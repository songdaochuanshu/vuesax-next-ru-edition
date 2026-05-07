/**
 * VsButton Component Types
 * 
 * 汝窑按钮组件类型定义
 */

export type ButtonType = 'flat' | 'relief' | 'border' | 'gradient';
export type ButtonColor = 'primary' | 'success' | 'warn' | 'danger' | 'dark' | 'light';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface VsButtonProps {
  /**
   * 按钮类型
   * @default 'flat'
   * @description flat: 扁平风格 | relief: 浮起风格 | border: 边框风格 | gradient: 渐变风格
   */
  type?: ButtonType;

  /**
   * 按钮颜色
   * @default 'primary'
   * @description primary: 天青 | success: 粉青 | warn: 琥珀 | danger: 釉红 | dark: 深灰 | light: 月白
   */
  color?: ButtonColor;

  /**
   * 按钮尺寸
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 是否为圆形按钮
   * @default false
   */
  circle?: boolean;

  /**
   * 是否为块级按钮（宽度100%）
   * @default false
   */
  block?: boolean;

  /**
   * 自定义类名
   */
  class?: string;

  /**
   * 原生 HTML 按钮类型
   * @default 'button'
   */
  nativeType?: 'button' | 'submit' | 'reset';
}

export interface VsButtonEmits {
  /**
   * 按钮点击事件
   */
  'click': [event: MouseEvent];
}
