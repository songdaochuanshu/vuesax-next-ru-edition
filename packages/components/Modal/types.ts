/**
 * VsModal Component Types
 */

export interface VsModalProps {
  modelValue?: boolean;
  title?: string;
  width?: string | number;
  closable?: boolean;
  maskClosable?: boolean;
  okText?: string;
  cancelText?: string;
  loading?: boolean;
}

export interface VsModalEmits {
  'update:modelValue': [value: boolean];
  'ok': [];
  'cancel': [];
}
