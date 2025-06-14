'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '@/styles/ui/updateFilterDropdown.module.scss';
import { FilterRule, FilterOperator } from '@/types/Table';
import { Table } from '@tanstack/react-table';
import {
  getColumnType,
  getColumnName,
  getAvailableFilterRules,
} from '@/utils/tableFunctions';
import { capitalizeString } from '@/utils/helperFunctions';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CircleCheckIcon,
} from '@/components/ui/UIIcons';

interface UpdateFilterDropdownProps<TData> {
  table: Table<TData>;
  filter: {
    id: string;
    value: { operator: FilterOperator; value: string | Date | number | null };
  };
  onUpdateFilter: (
    columnId: string,
    operator: FilterOperator,
    value: string | Date | number | null
  ) => void;
  onClose: () => void;
}

export function UpdateFilterDropdown<TData>({
  table,
  filter,
  onUpdateFilter,
  onClose,
}: UpdateFilterDropdownProps<TData>) {
  const [
    showAvailableFilterOperatorsDropdown,
    setShowAvailableFilterOperatorsDropdown,
  ] = useState<boolean>(false);

  const filterOperator = filter.value.operator;
  const filterValue = filter.value.value;
  const [inputValue, setInputValue] = useState<string | number | Date | null>(
    filterValue
  );

  const [selectedOperator, setSelectedOperator] = useState<FilterOperator | ''>(
    filterOperator
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const showAvailableFilterOperatorsDropdownRef = useRef<HTMLDivElement>(null);

  const column = table.getColumn(filter.id);
  const columnName = column ? getColumnName(column.id) : '';
  const columnType = column ? getColumnType(column) : 'text';

  const availableFilterRules = getAvailableFilterRules(columnType);

  const handleToggleAvailableFilterOperatorsDropdown = () => {
    setShowAvailableFilterOperatorsDropdown(
      !showAvailableFilterOperatorsDropdown
    );
  };

  const handleCloseAvailableFilterOperatorsDropdown = useCallback(() => {
    setShowAvailableFilterOperatorsDropdown(false);
  }, []);

  const handleSelectFilterOperator = (operator: FilterOperator) => {
    // Handle is empty, not empty cases to reset inputValues
    if (operator === 'is_empty') {
      setInputValue(null);
    }
    if (operator == 'is_not_empty') {
      setInputValue('');
    }
    setSelectedOperator(operator);
    handleCloseAvailableFilterOperatorsDropdown();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getInputType = (columnType: string) => {
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

  const handleUpdateFilter = () => {
    if (selectedOperator !== '') {
      onUpdateFilter(filter.id, selectedOperator, inputValue);
      onClose();
    }
  };

  // update filter dropdown click outside -> close logic
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

  // show available filter rules dropdown click outside -> close logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        showAvailableFilterOperatorsDropdownRef.current &&
        !showAvailableFilterOperatorsDropdownRef.current.contains(target)
      ) {
        handleCloseAvailableFilterOperatorsDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleCloseAvailableFilterOperatorsDropdown]);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.topContainer}>
        <span className={styles.columnName}>{columnName}</span>
        <button
          className={styles.filterOperator}
          onClick={handleToggleAvailableFilterOperatorsDropdown}>
          {capitalizeString(selectedOperator, '_')}
          {!showAvailableFilterOperatorsDropdown ? (
            <ChevronDownIcon className={styles.filterOperator__icon} />
          ) : (
            <ChevronUpIcon className={styles.filterOperator__icon} />
          )}
        </button>
      </div>

      {/* Operators Dropdown */}
      {showAvailableFilterOperatorsDropdown && (
        <div
          className={styles.availableFilterOperatorsContainer}
          ref={showAvailableFilterOperatorsDropdownRef}>
          {availableFilterRules?.map((filterRule: FilterRule) => (
            <button
              key={filterRule.label}
              className={`${styles.filterOperatorOption}`}
              onClick={() => handleSelectFilterOperator(filterRule.operator)}>
              {capitalizeString(filterRule.operator, '_')}
              {selectedOperator === filterRule.operator ? (
                <span>
                  <CircleCheckIcon
                    className={styles.filterOperatorOption__icon}
                    color="#159e84"
                  />
                </span>
              ) : (
                ''
              )}
            </button>
          ))}
        </div>
      )}

      {/* Input HTML Tag to enter or select new value/s */}
      <input
        title="Value Input"
        type={getInputType(columnType)}
        name="valueInput"
        className={styles.input}
        placeholder="Type a value"
        value={
          inputValue instanceof Date
            ? inputValue.toISOString().split('T')[0]
            : inputValue ?? ''
        }
        onChange={handleInputChange}></input>

      <button className={styles.applyButton} onClick={handleUpdateFilter}>
        Apply
      </button>
    </div>
  );
}
