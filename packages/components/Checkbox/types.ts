/**
 * VsCheckbox Component Types
 */

export interface VsCheckboxProps {
  modelValue?: boolean | string | number;
  value?: string | number;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
}

export interface VsCheckboxEmits {
  'update:modelValue': [value: boolean | string | number];
  'change': [value: boolean | string | number];
}
