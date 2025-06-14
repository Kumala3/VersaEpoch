'use client';

import { useState, useEffect, useRef } from 'react';
import { Table } from '@tanstack/react-table';
import styles from '@/styles/ui/tableFilterPanel.module.scss';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { FilterOperator } from '@/types/Table';
import {
  getColumnName,
} from '@/utils/tableFunctions';
import { UpdateFilterDropdown } from '@/components/ui/UpdateFilterDropdown';
import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/UIIcons';

interface TableFilterPanelProps<TData> {
  table: Table<TData>;
  onOpenDropdown: () => void;
  onRemoveFilter: (columnId: string) => void;
  onUpdateFilter: (
    columnId: string,
    operator: FilterOperator,
    value: string | Date | number | null
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
  const [showUpdateFilterDropdown, setShowUpdateFilterDropdown] =
    useState<boolean>(false);

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

  const handleToggleUpdateFilterDropdown = () => {
    setShowUpdateFilterDropdown(!showUpdateFilterDropdown);
  };

  const handleCloseUpdateFilterDropdown = () => {
    setShowUpdateFilterDropdown(false);
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
                  <button
                    className={styles.filterDropdownButton}
                    onClick={handleToggleUpdateFilterDropdown}>
                    <span className={styles.filterDropdownButton__columnName}>
                      {getColumnName(filter.id)}
                    </span>
                    {/* <span>{filter.value.operator}</span> */}
                    <span className={styles.filterDropdownButton__filterValue}>
                      {filter.value.value}
                    </span>
                    {/* Chevron Icon */}
                    {!showUpdateFilterDropdown ? (
                      <ChevronDownIcon
                        className={styles.filterDropdownButton__icon}
                      />
                    ) : (
                      <ChevronUpIcon
                        className={styles.filterDropdownButton__icon}
                      />
                    )}
                  </button>

                  {showUpdateFilterDropdown && (
                    <div className={styles.updateFilterDropdownContainer}>
                      <UpdateFilterDropdown
                        table={table}
                        filter={filter}
                        onUpdateFilter={onUpdateFilter}
                        onClose={handleCloseUpdateFilterDropdown}
                      />
                    </div>
                  )}

                  {/* Remove Filter Button */}
                  <button
                    aria-label={`Remove ${getColumnName(filter.id)} filter`}
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

          <div className={styles.actionsContainer}>
            {availableColumns.length > 0 && (
              <div className={styles.addFilterSection}>
                <button
                  className={styles.addFilterButton}
                  onClick={onOpenDropdown}>
                  <PlusIcon
                    className={styles.addFilterButton__icon}
                    color='#000'
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
          </div>
        </>
      ) : (
        <p className={styles.comingSoonTitle}>Coming soon 🦝</p>
      )}
    </div>
  );
}
