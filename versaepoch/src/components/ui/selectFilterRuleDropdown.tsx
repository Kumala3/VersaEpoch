'use client';

import { useState, useEffect, useRef } from 'react';

import styles from '@/styles/ui/selectFilterRuleDropdown.module.scss';
import { ColumnType, FilterOperator, FilterRule } from '@/types/Table';
import { Table } from '@tanstack/react-table';
import { getColumnType, getAvailableFilterRules } from '@/utils/tableFunctions';
import { capitalizeString } from '@/utils/helperFunctions';

interface SelectFilterRuleDropdownProps<TData> {
  selectedColumnId: string | null;
  table: Table<TData>;
  onClose: () => void;
  onSelect: (
    operator: FilterOperator,
    value: string | number | null
  ) => void;
}

export function SelectFilterRuleDropdown<TData>({
  selectedColumnId,
  table,
  onClose,
  onSelect,
}: SelectFilterRuleDropdownProps<TData>) {
  const [inputValue, setInputValue] = useState<string | number>('');

  const column = selectedColumnId ? table.getColumn(selectedColumnId) : null;
  const columnName = column ? capitalizeString(column.id, '_') : '';
  const columnType = column ? getColumnType(column) : 'text';
  const availableFilterRules = getAvailableFilterRules(columnType);

  const [selectedRule, setSelectedRule] = useState<FilterRule | null>(
    availableFilterRules?.[0] || null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClose]);

  const handleRuleSelect = (rule: FilterRule) => {
    setSelectedRule(rule);
    if (!rule.hasValue) {
      onSelect(rule.operator, null);
    }
  };

  const getInputType = () => {
    switch (columnType) {
      case 'text':
        return 'text';
      case 'number':
        return 'number';
      case 'select':
        return 'select';
      case 'multi-select':
        return 'multi-select';
      case 'date':
        return 'date';
      default:
        return 'text';
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleApplyFilter = () => {
    if (selectedRule) {
      if (!selectedRule.hasValue) {
        onSelect(selectedRule.operator, null);
      } else {
        const value =
          columnType === 'number'
            ? inputValue
              ? Number(inputValue)
              : null
            : inputValue;
        onSelect(selectedRule.operator, value);
      }
    }
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.topContainer}>
        <p className={styles.topContainer__title}>{columnName}</p>
        {getInputType() !== null && (
          <input
            title="Value Input"
            type={getInputType()}
            name="valueInput"
            className={styles.input}
            placeholder="Type a value..."
            onChange={handleInputChange}
            value={inputValue}></input>
        )}
      </div>
      {selectedRule?.hasValue && (
        <button
          className={styles.applyButton}
          onClick={handleApplyFilter}>
          Apply
        </button>
      )}

      <p className={styles.subHeadline}>Filter Rules:</p>
      <div className={styles.optionsContainer}>
        {availableFilterRules?.map((filterRule) => (
          <button
            key={filterRule.label}
            className={`${styles.option} ${
              selectedRule?.operator === filterRule.operator
                ? styles.option__selected
                : ''
            }`}
            onClick={() => handleRuleSelect(filterRule)}>
            {filterRule.label}
          </button>
        ))}
      </div>
    </div>
  );
}
