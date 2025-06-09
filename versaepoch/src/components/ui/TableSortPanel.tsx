'use client';

import { Table } from '@tanstack/react-table';
import { useState } from 'react';
import styles from '@/styles/ui/tableSortPanel.module.scss';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { capitalizeString } from '@/utils/capitalizeWord';
import { TableSelectDropdown } from '@/components/ui/TableSelectSortDropdown';

interface TableSortPanelProps<TData> {
  table: Table<TData>;
}

export function TableSortPanel<TData>({
  table,
}: TableSortPanelProps<TData>) {
  const [showSelectDropdown, setShowSelectDropdown] = useState<boolean>(false);
  const sortingState = table.getState().sorting;
  const columns = table.getAllColumns().filter((col) => col.getCanSort());

  const getDisplayColumnName = (columnId: string) => {
    const columnName = capitalizeString(columnId, '_');
    return columnName;
  };

  // Retrieves ONLY columns that are not sorted already to display in a select dropdown
  const availableColumns = columns
    .filter((col) => !sortingState.find((sort) => sort.id === col.id))
    .map((col) => ({
      id: col.id,
      title: getDisplayColumnName(col.id),
    }));

  const handleAddSort = (columnId: string) => {
    const column = table.getColumn(columnId);
    if (column?.getCanSort()) {
      // false - ascending
      column.toggleSorting(false);
    }
    setShowSelectDropdown(false); // close after selection
  };

  const handleToggleSort = (columnId: string) => {
    const column = table.getColumn(columnId);

    if (column?.getCanSort()) {
      const currentSort = sortingState.find(sort => sort.id === column.id);

      // If sort is applied applied
      if (currentSort) {
        // If currently ascending (desc: false), switch to descending (desc: true)
        // If currently descending (desc: true), switch to ascending (desc: false)
        column.toggleSorting(!currentSort.desc);
      } else {
        // by default, ascending order is applied
        column.toggleSorting(false);
      }
    }
  };

  const handleRemoveSort = (columnId: string) => {
    const column = table.getColumn(columnId);
    if (column) {
      column.clearSorting();
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.panelTitle}>Sort</h3>

      {/* Active Sorts */}
      {sortingState.length > 0 && (
        <div className={styles.activeSortsContainer}>
          {sortingState.map((sort) => (
            <div key={sort.id} className={styles.sortItem}>
              <p className={styles.sortColumnName}>
                {getDisplayColumnName(sort.id)}
              </p>

              <div className={styles.sortActions}>
                <button
                  onClick={() => handleToggleSort(sort.id)}
                  className={styles.sortItem__toggleButton}>
                  {sort.desc ? '↑' : '↓'}
                </button>
                <button
                  className={styles.sortItem__removeButton}
                  onClick={() => handleRemoveSort(sort.id)}>
                  <CrossIcon className={styles.sortItem__icon} color="#000" />
                  {''}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {availableColumns.length > 0 && (
        <div className={styles.addSortSection}>
          <button
            className={styles.addSortButton}
            onClick={() => setShowSelectDropdown(true)}>
            <PlusIcon className={styles.addSortButton__icon} color="#000" />
            Add sort
          </button>
          {showSelectDropdown && (
            <div className={styles.selectDropdownContainer}>
              <TableSelectDropdown
                elements={availableColumns}
                onSelect={handleAddSort}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
