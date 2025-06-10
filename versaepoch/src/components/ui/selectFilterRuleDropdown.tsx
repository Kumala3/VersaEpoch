'use client';

import { useState } from 'react';

import styles from '@/styles/ui/selectFilterRuleDropdown.module.scss';
import { FilterOperator, FilterRule } from '@/types/Table';
import { Table } from '@tanstack/react-table';
import {
  getColumnType,
  getColumnTypeLabel,
  getAvailableFilterRules,
} from '@/utils/tableFunctions';

interface SelectFilterRuleDropdownProps<TData> {
  selectedColumnId: string;
  table: Table<TData>;
  onClose: () => void;
  onSelect: (operator: FilterOperator, value: string | number | null) => void;
}

export function SelectFilterRuleDropdown({
  selectedColumnId,
  table,
  onClose,
  onSelect,
}: SelectFilterRuleDropdownProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const column = table.getColumn(selectedColumnId);
  const columnType = getColumnType(column);
  const columnTypeLabel = getColumnTypeLabel(columnType);
  const availableFilterRules = getAvailableFilterRules(columnType);

  const [selectedRule, setSelectedRule] = useState<FilterRule | null>(
    availableFilterRules[0]
  );

  const handleRuleSelect = (rule: FilterRule) => {
    setSelectedRule(rule);
    if (!rule.hasValue) {
      onSelect(rule.operator, null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <p className={styles.topContainer__title}>{columnTypeLabel}</p>
        <input
          title="Value Input"
          type="text"
          name="valueInput"
          className={styles.input}
          placeholder="Type a value..."></input>
      </div>

      <p className={styles.subHeadline}>Filter Rules:</p>
      <div className={styles.optionsContainer}>
        {availableFilterRules?.map((filterRule) => (
          <button
            key={filterRule.label}
            className={`${styles.option} ${selectedRule?.operator === filterRule.operator ? styles.option__selected : ''}`}
            onClick={() => handleRuleSelect(filterRule)}>
            {filterRule.label}
          </button>
        ))}
      </div>
    </div>
  );
}
