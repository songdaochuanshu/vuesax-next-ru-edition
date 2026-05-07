/**
 * VsNotification Component Types
 */

export type NotificationType = 'success' | 'warn' | 'danger' | 'info';
export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface VsNotificationProps {
  type?: NotificationType;
  title?: string;
  message?: string;
  position?: NotificationPosition;
  duration?: number;
  closable?: boolean;
  icon?: string;
}

export interface VsNotificationEmits {
  'close': [];
}
