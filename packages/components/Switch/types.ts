/**
 * VsSwitch Component Types
 */

export interface VsSwitchProps {
  modelValue?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  activeColor?: string;
  inactiveColor?: string;
  activeText?: string;
  inactiveText?: string;
}

export interface VsSwitchEmits {
  'update:modelValue': [value: boolean];
  'change': [value: boolean];
}
