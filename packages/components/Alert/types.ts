/**
 * VsAlert Component Types
 */

export type AlertType = 'success' | 'warn' | 'danger' | 'info';

export interface VsAlertProps {
  type?: AlertType;
  title?: string;
  description?: string;
  closable?: boolean;
  icon?: string;
}

export interface VsAlertEmits {
  'close': [];
}
