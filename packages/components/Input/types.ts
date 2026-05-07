/**
 * VsInput Component Types
 * 
 * 汝窑输入框组件类型定义
 */

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'success' | 'warn' | 'danger';

export interface VsInputProps {
  /**
   * 输入框类型
   * @default 'text'
   */
  type?: InputType;

  /**
   * 输入框大小
   * @default 'md'
   */
  size?: InputSize;

  /**
   * 输入框状态
   * @default 'default'
   */
  state?: InputState;

  /**
   * 输入框值
   */
  modelValue?: string | number;

  /**
   * 占位符
   */
  placeholder?: string;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;

  /**
   * 是否清空按钮
   * @default false
   */
  clearable?: boolean;

  /**
   * 前置图标
   */
  prefixIcon?: string;

  /**
   * 后置图标
   */
  suffixIcon?: string;

  /**
   * 前置文本
   */
  prefix?: string;

  /**
   * 后置文本
   */
  suffix?: string;

  /**
   * 最大长度
   */
  maxlength?: number;

  /**
   * 最小值（number 类型）
   */
  min?: number;

  /**
   * 最大值（number 类型）
   */
  max?: number;

  /**
   * 步长（number 类型）
   */
  step?: number;

  /**
   * 验证规则
   */
  validate?: (value: string | number) => boolean | string;

  /**
   * 错误提示信息
   */
  errorMessage?: string;

  /**
   * 成功提示信息
   */
  successMessage?: string;
}

export interface VsInputEmits {
  /**
   * 值更新事件
   */
  'update:modelValue': [value: string | number];

  /**
   * 输入事件
   */
  'input': [value: string | number];

  /**
   * 变化事件
   */
  'change': [value: string | number];

  /**
   * 焦点事件
   */
  'focus': [event: FocusEvent];

  /**
   * 失焦事件
   */
  'blur': [event: FocusEvent];

  /**
   * 清空事件
   */
  'clear': [];
}
