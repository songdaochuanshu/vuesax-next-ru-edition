/**
 * VsBreadcrumb Component Types
 */

export interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

export interface VsBreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}

export interface VsBreadcrumbEmits {
  'click': [item: BreadcrumbItem, index: number];
}
