import { Column } from '@tanstack/react-table';
import { ColumnType } from '@/types/Table';
import { FILTER_RULES_BY_TYPE } from '@/types/Table';
import { capitalizeString } from '@/utils/helperFunctions';

export function getColumnType<TData>(
  column: Column<TData, unknown>
): ColumnType {
  const meta = column.columnDef.meta as { type?: ColumnType };

  if (meta?.type) {
    return meta.type;
  }

  // Default fallback if no type is specified
  return 'text';
}

export function getColumnTypeLabel(type: ColumnType): string {
  const labels: Record<ColumnType, string> = {
    text: 'Text',
    number: 'Number',
    date: 'Date',
    boolean: 'Checkbox',
    select: 'Select',
    'multi-select': 'Multi-select',
    url: 'URL',
  };

  return labels[type];
}

export function getColumnName(columnId: string) {
  return capitalizeString(columnId, "_");
}

export function getAvailableFilterRules(columnType: ColumnType) {
  if (!columnType) return;

  return FILTER_RULES_BY_TYPE[columnType];
}
