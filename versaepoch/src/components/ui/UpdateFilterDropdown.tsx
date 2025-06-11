'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/ui/updateFilterDropdown.module.scss';
import { FilterRule, FilterOperator } from '@/types/Table';
import { ColumnType } from '@/types/Table';
import { Table } from '@tanstack/react-table';
import { getColumnType, getColumnName } from '@/utils/tableFunctions';

interface UpdateFilterDropdownProps<TData> {
  table: Table<TData>;
  filter: {
    id: string;
    value: { operator: FilterOperator; value: string | number | null };
  };
  availableFilterRules: FilterRule[];
  onUpdateFilter: (
    columnId: string,
    operator: FilterOperator,
    value: string | Date | number,
    type: ColumnType
  ) => void;
}

export function UpdateFilterDropdown<TData>({
  table,
  filter,
  availableFilterRules,
  onUpdateFilter,
}: UpdateFilterDropdownProps<TData>) {
  const [showFilterRulesDropdown, setShowFilterRulesDropdown] =
    useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        handleCloseFilterRulesDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showFilterRulesDropdown]);

  const column = table.getColumn(filter.id);
  const columnName = column ? getColumnName(column.id) : '';

  const filterOperator = filter.value.operator;
  const filterValue = filter.value.value;

  const handleOpenFilterRulesDropdown = () => {
    setShowFilterRulesDropdown(true);
  };

  const handleCloseFilterRulesDropdown = () => {
    setShowFilterRulesDropdown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.currentFilter}>
        <span className={styles.columnName}>{columnName}</span>
        <button
          className={styles.filterOperator}
          onClick={handleOpenFilterRulesDropdown}>
          {filterOperator}
        </button>
      </div>

      {showFilterRulesDropdown && (
        <div className={styles.filterRulesContainer} ref={dropdownRef}>
          {availableFilterRules.map((filterRule) => (
            <div
              key={filterRule.label}
              className={`${styles.filterOption} ${
                filterOperator === filterRule.operator
              }`}>
              {filterRule.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
