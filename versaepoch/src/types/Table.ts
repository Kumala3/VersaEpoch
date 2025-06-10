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
  inputType?: 'text' | 'date' | 'number' | 'select' | 'multi-select' | 'url';
}

export const FILTER_RULES_BY_TYPE: Record<ColumnType, FilterRule[]> = {
  text: [
    { operator: 'contains', label: "Contains", hasValue: true, inputType: 'text' },
    { operator: 'does_not_contain', label: "Does not contain", hasValue: true, inputType: 'text' },
    { operator: 'equals', label: "Equals", hasValue: true, inputType: 'text' },
    { operator: 'does_not_equal', label: "Does not equal", hasValue: true, inputType: 'text' },
    { operator: 'starts_with', label: "Starts with", hasValue: true, inputType: 'text' },
    { operator: 'ends_with', label: "Ends with", hasValue: true, inputType: 'text' },
    { operator: 'is_empty', label: 'Is empty', hasValue: false },
    { operator: 'is_not_empty', label: 'Is not empty', hasValue: false },
  ],
  number: [
    { operator: 'equals', label: "Equals", hasValue: true, inputType: 'number' },
    { operator: 'does_not_equal', label: "Does not equal", hasValue: true, inputType: 'number' },
    { operator: 'greater_than', label: "Greater Than", hasValue: true, inputType: 'number' },
    { operator: 'greater_than_or_equal', label: "Greater than or equal", hasValue: true, inputType: 'number' },
    { operator: 'less_than', label: "Less than", hasValue: true, inputType: 'number' },
    { operator: 'less_than_or_equal', label: "Less than or equal", hasValue: true, inputType: 'number' },
    { operator: 'is_empty', label: "Is empty", hasValue: false },
    { operator: 'is_not_empty', label: "Is not empty", hasValue: false }
  ],
  date: [
    { operator: 'is_on', label: 'Is on', hasValue: true, inputType: 'date' },
    { operator: 'is_after', label: 'Is after', hasValue: true, inputType: 'date' },
    { operator: 'is_before', label: 'Is before', hasValue: true, inputType: 'date' },
    { operator: 'is_empty', label: 'Is empty', hasValue: false },
    { operator: 'is_not_empty', label: 'Is not empty', hasValue: false },
  ],
  boolean: [
    { operator: 'is_checked', label: 'Is checked', hasValue: false },
    { operator: 'is_not_checked', label: 'Is not checked', hasValue: false },
  ],
  select: [
    { operator: 'is', label: 'Is', hasValue: true, inputType: 'select' },
    { operator: 'is_not', label: 'Is not', hasValue: true, inputType: 'select' },
    { operator: 'is_empty', label: 'Is empty', hasValue: false },
    { operator: 'is_not_empty', label: 'Is not empty', hasValue: false },
  ],
  'multi-select': [
    { operator: 'contains', label: "Contains", hasValue: true, inputType: 'text' },
    { operator: 'does_not_contain', label: "does_not_contain", hasValue: true, inputType: 'text' },
    { operator: 'is_empty', label: "Is empty", hasValue: false },
    { operator: 'is_not_empty', label: "Is not empty", hasValue: false },
  ],
  url: [
    { operator: 'contains', label: "Contains", hasValue: true, inputType: "text" },
    { operator: 'does_not_contain', label: 'Does not contain', hasValue: true, inputType: 'text' },
    { operator: 'equals', label: 'Equals', hasValue: true, inputType: 'text' },
    { operator: 'does_not_equal', label: 'Does not equal', hasValue: true, inputType: 'text' },
    { operator: 'is_empty', label: 'Is empty', hasValue: false },
    { operator: 'is_not_empty', label: 'Is not empty', hasValue: false },
  ]
}
