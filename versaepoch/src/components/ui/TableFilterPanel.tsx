'use client';

import { useEffect, useRef } from 'react';
import { Table } from '@tanstack/react-table';
import styles from '@/styles/ui/tableFilterPanel.module.scss';
import { capitalizeString } from '@/utils/helperFunctions';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { FilterOperator } from '@/types/Table';

interface TableFilterPanelProps<TData> {
  table: Table<TData>;
  onOpenDropdown: () => void;
  onRemoveFilter: (columnId: string) => void;
  onUpdateFilter: (
    columnId: string,
    operator: FilterOperator,
    value: string | Date | number
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

  const getColumnDisplayName = (columnId: string) => {
    const columnName = capitalizeString(columnId, '_');
    return columnName;
  };

  const availableColumns = columns.filter(
    (col) => !filterState.find((filter) => filter.id === col.id)
  );

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
                    <span className={styles.filterColumn}>
                      {getColumnDisplayName(filter.id)}
                    </span>
                  </div>

                  {/* TODO: Dropdown to select a filter operator
                    pass onUpdateFilter function to the dropdown,
                    gather available filter rules
                  */}
                  <button
                    className={styles.filterItem__removeButton}
                    onClick={() => onRemoveFilter(filter.id)}>
                    <CrossIcon
                      className={styles.filterItem__removeButton__icon}
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
