'use client';

import { Table } from '@tanstack/react-table';
import { useState } from 'react';
import styles from '@/styles/ui/tableSortPanel.module.scss';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { capitalizeWord } from '@/utils/capitalizeWord';
import { TableSelectDropdown } from '@/components/ui/TableSelectSortDropdown';

interface TableSortPanelProps<TData> {
  table: Table<TData>;
  sortsCount: number;
}

export function TableSortPanel<TData>({
  table,
  sortsCount,
}: TableSortPanelProps<TData>) {
  const [showSelectDropdown, setShowSelectDropdown] = useState<boolean>(false);
  const sortingState = table.getState().sorting;
  const columns = table.getAllColumns().filter((col) => col.getCanSort());

  const availableColumns = columns
    .filter((col) => !sortingState.find((sort) => sort.id === col.id))
    .map((col) => ({
      id: col.id,
      label: capitalizeWord(col.id),
    }));

  const handleAddSort = (columnId: string) => {
    const column = table.getColumn(columnId);
    if (column?.getCanSort()) {
      // false - ascending
      column.toggleSorting(false);
    }
    setShowSelectDropdown(false); // close after selection
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
      {sortsCount > 0 && (
        <div className={styles.activeSortsContainer}>
          {sortingState.map((sort) => (
            <div key={sort.id} className={styles.sortItem}>
              <p className={styles.sortColumnName}>{capitalizeWord(sort.id)}</p>

              <div className={styles.sortActions}>
                {/* Replace with dropdown to select ASC/DESC order */}

                <button
                  className={styles.removeSortButton}
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

      {/* {sortingState.length > 0 && (
        <button className={styles.clearButton} onClick={onClearAll}>
          Clear all
        </button>
      )} */}
    </div>
  );
}
