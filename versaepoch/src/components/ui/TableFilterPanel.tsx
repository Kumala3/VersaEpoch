'use client';

import { Table } from '@tanstack/react-table';
import styles from '@/styles/ui/tableFilterPanel.module.scss';
import { capitalizeString } from '@/utils/helperFunctions';
import { PlusIcon, CrossIcon } from '@/components/ui/UIIcons';

interface TableFilterPanelProps<TData> {
  table: Table<TData>;
  onOpenDropdown: () => void;
}

export function TableFilterPanel<TData>({
  table,
  onOpenDropdown,
}: TableFilterPanelProps<TData>) {
  const filterState = table.getState().columnFilters;
  const columns = table.getAllColumns().filter((col) => col.getCanFilter());
  const isFilterEnabled = false;

  const getColumnDisplayName = (columnId: string) => {
    const columnName = capitalizeString(columnId, '_');
    return columnName;
  };

  const availableColumns = columns.filter(
    (col) => !filterState.find((filter) => filter.id === col.id)
  );

  const handleClearAllFilters = () => {
    table.setColumnFilters([]);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.panelTitle}>Filter</h3>

      {isFilterEnabled ? (
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

                  <button
                    className={styles.filterItem__removeButton}
                    onClick={() => {}}>
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
              onClick={handleClearAllFilters}>
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
