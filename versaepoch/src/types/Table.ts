export type ColumnType =
  | 'text'
  | 'number'
  | 'date'
  | 'boolean'
  | 'select'
  | 'multi-select'
  | 'url';

export type FilterOperator =
  // Text operators
  | 'contains'
  | 'does_not_contain'
  | 'starts_with'
  | 'ends_with'
  | 'is_empty'
  | 'is_not_empty'
  | 'equals'
  | 'does_not_equal'
  // Number operators
  | 'greater_than'
  | 'less_than'
  | 'greater_than_or_equal'
  | 'less_than_or_equal'
  // Select operators
  | 'is'
  | 'is_not'
  // Boolean operators
  | 'is_checked'
  | 'is_not_checked'
  // Date operators
  | 'is_after'
  | 'is_before'
  | 'is_on';

export interface FilterRule {
  operator: FilterOperator;
  label: string;
  hasValue: boolean;
  inputType: 'text' | 'date' | 'number' | 'select' | 'multi-select' | 'url';
}
