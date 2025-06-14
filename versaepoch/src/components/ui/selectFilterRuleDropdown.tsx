'use client';

import { useState, useEffect, useRef } from 'react';

import styles from '@/styles/ui/selectFilterRuleDropdown.module.scss';
import { FilterOperator, FilterRule } from '@/types/Table';
import { Table } from '@tanstack/react-table';
import { getColumnType, getAvailableFilterRules } from '@/utils/tableFunctions';
import { capitalizeString } from '@/utils/helperFunctions';
import {
  CircleCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@/components/ui/UIIcons';

interface SelectFilterRuleDropdownProps<TData> {
  selectedColumnId: string | null;
  table: Table<TData>;
  onClose: () => void;
  onSelect: (operator: FilterOperator, value: string | number | null) => void;
}

export function SelectFilterRuleDropdown<TData>({
  selectedColumnId,
  table,
  onClose,
  onSelect,
}: SelectFilterRuleDropdownProps<TData>) {
  const [inputValue, setInputValue] = useState<string | number>('');
  const [showFilterRulesDropdown, setShowFilterRulesDropdown] =
    useState<boolean>(false);

  const column = selectedColumnId ? table.getColumn(selectedColumnId) : null;
  const columnName = column ? capitalizeString(column.id, '_') : '';
  const columnType = column ? getColumnType(column) : 'text';
  const availableFilterRules = getAvailableFilterRules(columnType);

  const [selectedRule, setSelectedRule] = useState<FilterRule | null>(
    availableFilterRules?.[0] || null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRulesDropdown = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        filterRulesDropdown.current &&
        !filterRulesDropdown.current.contains(target)
      ) {
        handleCloseFilterRulesDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  });

  const handleRuleSelect = (rule: FilterRule) => {
    setSelectedRule(rule);
    if (!rule.hasValue) {
      onSelect(rule.operator, null);
    }
    handleCloseFilterRulesDropdown();
  };

  const handleToggleFilterRulesDropdown = () => {
    setShowFilterRulesDropdown(!showFilterRulesDropdown);
  };

  const handleCloseFilterRulesDropdown = () => {
    setShowFilterRulesDropdown(false);
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
    handleCloseFilterRulesDropdown();
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.topContainer}>
        <p className={styles.topContainer__title}>{columnName}</p>
        <button
          className={styles.filterOperator}
          onClick={handleToggleFilterRulesDropdown}>
          <span className={styles.filterOperator__label}>
            {capitalizeString(selectedRule?.label || '', '_')}
          </span>
          {!showFilterRulesDropdown ? (
            <ChevronDownIcon className={styles.filterOperator__icon} />
          ) : (
            <ChevronUpIcon className={styles.filterOperator__icon} />
          )}
        </button>
      </div>

      {/* Available Filter Rules Dropdown */}
      {showFilterRulesDropdown && (
        <div
          className={styles.availableFilterRulesDropdown}
          ref={filterRulesDropdown}>
          {availableFilterRules?.map((filterRule) => (
            <button
              key={filterRule.label}
              className={styles.filterRuleOption}
              onClick={() => handleRuleSelect(filterRule)}>
              {capitalizeString(filterRule.label, '_')}
              {selectedRule?.operator === filterRule.operator && (
                <CircleCheckIcon className={styles.filterRuleOption__icon} />
              )}
            </button>
          ))}
        </div>
      )}

      <div className={styles.actionsContainer}>
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

        {selectedRule?.hasValue && (
          <button className={styles.applyButton} onClick={handleApplyFilter}>
            Apply
          </button>
        )}
      </div>
    </div>
  );
}
