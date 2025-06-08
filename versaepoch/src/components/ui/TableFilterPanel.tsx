'use client';

import { Table } from '@tanstack/react-table';
import { useState } from 'react';
import styles from '@/styles/ui/tableFilterPanel.module.scss';

interface TableFilterPanelProps<TData> {
  table: Table<TData>;
  onAddFilter: (columnId: string, value: string) => void;
  onRemoveFilter: (columnId: string) => void;
  onClearAll: () => void;
}

export function TableFilterPanel<TData>({ 
  table, 
  onAddFilter, 
  onRemoveFilter, 
  onClearAll 
}: TableFilterPanelProps<TData>) {
  const [showAddFilter, setShowAddFilter] = useState(false);
  const filterState = table.getState().columnFilters;
  const columns = table.getAllColumns().filter(col => col.getCanFilter());

  const getColumnDisplayName = (columnId: string) => {
    const column = table.getColumn(columnId);
    return column?.columnDef.header || columnId;
  };

  const availableColumns = columns.filter(
    col => !filterState.find(filter => filter.id === col.id)
  );

  return (
    <div className={styles.filterPanel}>
      <div className={styles.panelHeader}>
        <h3 className={styles.panelTitle}>Filter</h3>
        {filterState.length > 0 && (
          <button className={styles.clearButton} onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>

      {/* Active Filters */}
      <div className={styles.activeFilters}>
        {filterState.map((filter) => (
          <div key={filter.id} className={styles.filterItem}>
            <div className={styles.filterDetails}>
              <span className={styles.filterColumn}>
                {getColumnDisplayName(filter.id)}
              </span>
              <span className={styles.filterOperator}>contains</span>
              <input
                type="text"
                className={styles.filterValue}
                value={filter.value as string}
                onChange={(e) => onAddFilter(filter.id, e.target.value)}
                placeholder="Enter value..."
              />
            </div>
            
            <button
              className={styles.removeButton}
              onClick={() => onRemoveFilter(filter.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Add Filter Button */}
      {availableColumns.length > 0 && (
        <div className={styles.addFilterSection}>
          {!showAddFilter ? (
            <button
              className={styles.addFilterButton}
              onClick={() => setShowAddFilter(true)}
            >
              <span className={styles.addIcon}>+</span>
              Add a filter
            </button>
          ) : (
            <div className={styles.addFilterForm}>
              <select
                className={styles.columnSelect}
                onChange={(e) => {
                  if (e.target.value) {
                    onAddFilter(e.target.value, '');
                    setShowAddFilter(false);
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>Choose a column...</option>
                {availableColumns.map(column => (
                  <option key={column.id} value={column.id}>
                    {getColumnDisplayName(column.id)}
                  </option>
                ))}
              </select>
              <button
                className={styles.cancelButton}
                onClick={() => setShowAddFilter(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
