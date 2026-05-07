/**
 * VsPagination Component Types
 */

export interface VsPaginationProps {
  modelValue?: number;
  total: number;
  pageSize?: number;
  pageSizes?: number[];
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  disabled?: boolean;
}

export interface VsPaginationEmits {
  'update:modelValue': [value: number];
  'change': [page: number, pageSize: number];
}
