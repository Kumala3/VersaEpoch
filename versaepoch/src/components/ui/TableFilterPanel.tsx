'use client';

import { useState, useEffect, useRef } from 'react';
import { Table } from '@tanstack/react-table';
import styles from '@/styles/ui/tableFilterPanel.module.scss';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { FilterOperator } from '@/types/Table';
import { getColumnName, getColumnType, getAvailableFilterRules } from '@/utils/tableFunctions';
import { UpdateFilterDropdown } from '@/components/ui/UpdateFilterDropdown';
import { ColumnType } from '@/types/Table';

interface TableFilterPanelProps<TData> {
  table: Table<TData>;
  onOpenDropdown: () => void;
  onRemoveFilter: (columnId: string) => void;
  onUpdateFilter: (
    columnId: string,
    operator: FilterOperator,
    value: string | Date | number,
    type: ColumnType,
  ) => void;
  onClearAllFilters: () => void;
  onClose: () => void;
}

export function TableFilterPanel<TData>({
  table,
  onOpenDropdown,
  onRemoveFilter,
  onUpdateFilter,
  onClearAllFilters,
  onClose,
}: TableFilterPanelProps<TData>) {
  const filterState = table.getState().columnFilters;
  const columns = table.getAllColumns().filter((col) => col.getCanFilter());
  const isFilterEnabled = false;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdownOperator, setShowDropdownOperator] =
    useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleOpenDropdownOperator = () => {
    setShowDropdownOperator(true);
  };

  const handleCloseDropdownOperator = () => {
    setShowDropdownOperator(false);
  };

  const getFilterValue = (filter: {
    id: string;
    value: { operator: FilterOperator; value: string | number | null };
  }) => {
    if (filter.value.value === null) {
      return '';
    }
    return filter.value.value;
  };

  const getFilterOperator = (filter: {
    id: string;
    value: { operator: FilterOperator; value: string | number | null };
  }) => {
    return filter.value.operator;
  };

  const availableColumns = columns.filter(
    (col) => !filterState.find((filter) => filter.id === col.id)
  );

  console.log(`Current filterState ${JSON.stringify(filterState)}`);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <h3 className={styles.panelTitle}>Filter</h3>

      {!isFilterEnabled ? (
        <>
          {filterState.length > 0 && (
            <div className={styles.activeFiltersContainer}>
              {filterState.map((filter) => (
                <div key={filter.id} className={styles.filterItem}>
                  <div className={styles.filterDetails}>
                    <span className={styles.filterItem__label}>
                      {getColumnName(filter.id)}
                    </span>
                    {/* Dropdown to select another operator and enter value */}
                    <div className={styles.dropdownOperator}>
                      <p>{filter.id}</p>
                      {/* <UpdateFilterDropdown
                        column={null}
                        columnName={getColumnName(filter.id)}
                        filterRule={filter.value.operator}
                        value={filter.value.value}
                        availableFilterRules={getAvailableFilterRules(getColumnType(filter.id))}
                        onUpdateFilter={onUpdateFilter}
                      /> */}
                    </div>
                  </div>
                  {/* TODO: Dropdown to select a filter operator
                    pass onUpdateFilter function to the dropdown
                  */}
                  <button
                    className={styles.filterItem__removeButton}
                    onClick={() => onRemoveFilter(filter.id)}>
                    <CrossIcon
                      className={styles.filterItem__removeButton__icon}
                      color="#000"
                    />
                    {''}
                  </button>
                </div>
              ))}
            </div>
          )}

          {availableColumns.length > 0 && (
            <div className={styles.addFilterSection}>
              <button
                className={styles.addFilterButton}
                onClick={onOpenDropdown}>
                <PlusIcon
                  className={styles.addFilterButton__icon}
                  color="#000"
                />
                Add filter
              </button>
            </div>
          )}

          {filterState.length > 0 && (
            <button
              className={styles.clearAllFiltersButton}
              onClick={onClearAllFilters}>
              Clear all
            </button>
          )}
        </>
      ) : (
        <p className={styles.comingSoonTitle}>Coming soon 🦝</p>
      )}
    </div>
  );
}
