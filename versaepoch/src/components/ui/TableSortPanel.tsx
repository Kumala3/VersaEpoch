'use client';

import { Table } from '@tanstack/react-table';
import styles from '@/styles/ui/tableSortPanel.module.scss';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';
import { capitalizeString } from '@/utils/helperFunctions';

interface TableSortPanelProps<TData> {
  table: Table<TData>;
  onOpenDropdown: () => void;
}

export function TableSortPanel<TData>({ table, onOpenDropdown }: TableSortPanelProps<TData>) {
  const sortingState = table.getState().sorting;
  const columns = table.getAllColumns().filter((col) => col.getCanSort());

  const getColumnDisplayName = (columnId: string) => {
    const columnName = capitalizeString(columnId, '_');
    return columnName;
  };

  // Retrieves ONLY columns that are not sorted already to display in a select dropdown
  const availableColumns = columns
    .filter((col) => !sortingState.find((sort) => sort.id === col.id))
    .map((col) => ({
      id: col.id,
      title: getColumnDisplayName(col.id),
    }));

  const handleToggleSort = (columnId: string) => {
    const currentSorting = table.getState().sorting;
    const sortIndex = currentSorting.findIndex((sort) => sort.id === columnId);

    // Updates sorting of exactly clicked sort
    if (sortIndex >= 0) {
      const newSorting = [...currentSorting];
      newSorting[sortIndex] = {
        ...newSorting[sortIndex],
        desc: !newSorting[sortIndex].desc, // Toggle order
      };
      table.setSorting(newSorting);
    }
  };

  const handleRemoveSort = (columnId: string) => {
    const currentSorting = table.getState().sorting;
    const newSorting = currentSorting.filter((sort) => sort.id != columnId);

    table.setSorting(newSorting);
  };

  const handleClearAllSorts = () => {
    table.setSorting([]);
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
                {getColumnDisplayName(sort.id)}
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
            onClick={onOpenDropdown}>
            <PlusIcon className={styles.addSortButton__icon} color="#000" />
            Add sort
          </button>
        </div>
      )}

      {sortingState.length > 0 && (
        <button
          onClick={handleClearAllSorts}
          className={styles.clearAllSortsButton}>
          Clear All
        </button>
      )}
    </div>
  );
}
