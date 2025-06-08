'use client';

import { Table } from '@tanstack/react-table';
import { useState } from 'react';
import styles from '@/styles/ui/tableSortPanel.module.scss';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { capitalizeWord } from '@/utils/capitalizeWord';

interface TableSortPanelProps<TData> {
  table: Table<TData>;
  onAddSort: (columnId: string, direction: 'asc' | 'desc') => void;
  onRemoveSort: (columnId: string) => void;
  onClearAll: () => void;
  sortsCount: number;
}

export function TableSortPanel<TData>({
  table,
  onAddSort,
  onRemoveSort,
  onClearAll,
  sortsCount,
}: TableSortPanelProps<TData>) {
  const [showAddSort, setShowAddSort] = useState<boolean>(false);
  const sortingState = table.getState().sorting;
  const columns = table.getAllColumns().filter((col) => col.getCanSort());

  console.log(`sortingState: ${JSON.stringify(sortingState)}`);

  const getColumnDisplayName = (columnId: string) => {
    const column = table.getColumn(columnId);
    return column?.columnDef.header;
  };

  const availableColumns = columns.filter(
    (col) => !sortingState.find((sort) => sort.id === col.id)
  );

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
                  className={styles.removeButton}
                  onClick={() => onRemoveSort(sort.id)}>
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
          {!showAddSort ? (
            <button
              className={styles.addSortButton}
              onClick={() => setShowAddSort(true)}>
              <PlusIcon className={styles.addSortButton__icon} color="#000" />
              Add sort
            </button>
          ) : (
            {/* Dropdown should be placed here */}
            <div className={styles.addSortF}>
              <select
                className={styles.columnSelect}
                onChange={(e) => {
                  if (e.target.value) {
                    onAddSort(e.target.value, 'asc');
                    setShowAddSort(false);
                  }
                }}
                defaultValue="">
                <option value="" disabled>
                  Choose a column...
                </option>
                {availableColumns.map((column) => (
                  <option key={column.id} value={column.id}>
                    {getColumnDisplayName(column.id)}
                  </option>
                ))}
              </select>
              <button
                className={styles.cancelButton}
                onClick={() => setShowAddSort(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
      
      {sortingState.length > 0 && (
        <button className={styles.clearButton} onClick={onClearAll}>
          Clear all
        </button>
      )}
    </div>
  );
}
