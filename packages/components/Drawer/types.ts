/**
 * VsDrawer Component Types
 */

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

export interface VsDrawerProps {
  modelValue?: boolean;
  title?: string;
  placement?: DrawerPlacement;
  width?: string | number;
  closable?: boolean;
  maskClosable?: boolean;
}

export interface VsDrawerEmits {
  'update:modelValue': [value: boolean];
  'close': [];
}
