/**
 * VsSelect Component Types
 */

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface VsSelectProps {
  modelValue?: string | number | (string | number)[];
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  size?: SelectSize;
  multiple?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  maxHeight?: number;
}

export interface VsSelectEmits {
  'update:modelValue': [value: string | number | (string | number)[]];
  'change': [value: string | number | (string | number)[]];
}
