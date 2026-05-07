/**
 * VsRadio Component Types
 */

export interface VsRadioProps {
  modelValue?: string | number | boolean;
  value: string | number | boolean;
  disabled?: boolean;
  label?: string;
}

export interface VsRadioEmits {
  'update:modelValue': [value: string | number | boolean];
  'change': [value: string | number | boolean];
}
