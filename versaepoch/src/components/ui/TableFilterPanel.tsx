'use client';

import { Table } from '@tanstack/react-table';
import { useState } from 'react';
import styles from '@/styles/ui/tableFilterPanel.module.scss';
import { capitalizeString } from '@/utils/capitalizeWord';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { SelectFilterDropdown } from '@/components/ui/SelectFilterDropdown';

interface TableFilterPanelProps<TData> {
  table: Table<TData>;
}

export function TableFilterPanel<TData>({
  table,
}: TableFilterPanelProps<TData>) {
  const [showSelectFilterDropdown, setShowSelectFilterDropdown] =
    useState(false);
  const filterState = table.getState().columnFilters;
  const columns = table.getAllColumns().filter((col) => col.getCanFilter());

  const getColumnDisplayName = (columnId: string) => {
    const columnName = capitalizeString(columnId, '_');
    return columnName;
  };

  const availableColumns = columns.filter(
    (col) => !filterState.find((filter) => filter.id === col.id)
  );

  const handleAddFilter = (columnId: string) => {
    const currentFilters = table.getState().columnFilters;

    const newFilters = [...currentFilters, { id: columnId }];
    table.setColumnFilters(newFilters);
    setShowSelectFilterDropdown(false);
  };

  const handleClearAllFilters = () => {
    table.setColumnFilters([]);
  };

  return (
    <div className={styles.filterPanel}>
      <div className={styles.panelHeader}>
        <h3 className={styles.panelTitle}>Filter</h3>
        {filterState.length > 0 && (
          <button
            className={styles.clearAllFiltersButton}
            onClick={handleClearAllFilters}>
            Clear all
          </button>
        )}
      </div>

      {/* Active Filters */}
      <div className={styles.activeFiltersContainer}>
        {filterState.map((filter) => (
          <div key={filter.id} className={styles.filterItem}>
            <div className={styles.filterDetails}>
              <span className={styles.filterColumn}>
                {getColumnDisplayName(filter.id)}
              </span>
            </div>

            <button
              className={styles.filterItem__removeButton}
              onClick={() => handleAddFilter(filter.id)}>
              {/* Remove  */}
              <CrossIcon className={styles.filterItem__removeButton__icon} />
            </button>
          </div>
        ))}
      </div>

      {/* Add Filter Button */}
      {availableColumns.length > 0 && (
        <div className={styles.addFilterSection}>
          <button
            className={styles.addFilterButton}
            onClick={() => setShowSelectFilterDropdown(true)}>
            <PlusIcon className={styles.addFilterButton__icon} />
            Add filter
          </button>
          {showSelectFilterDropdown && (
            <div className={styles.selectDropdownContainer}>
              <SelectFilterDropdown elements={availableColumns} onSelect={handleAddFilter} onClose={() => setShowSelectFilterDropdown(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
