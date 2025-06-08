'use client';

import styles from '@/styles/ui/tableControlPanel.module.scss';
import { Table } from '@tanstack/react-table';
import { useState, useRef, useEffect } from 'react';
import { SortTableIcon, FilterTableIcon } from '@/components/ui/UIIcons';
import { TableSortPanel } from '@/components/ui/TableSortPanel';
import { TableFilterPanel } from '@/components/ui/TableFilterPanel';

interface TableControlPanelProps<TData> {
  table: Table<TData>;
}

export function TableControlPanel<TData>({
  table,
}: TableControlPanelProps<TData>) {
  const [showSortPanel, setShowSortPanel] = useState<boolean>(false);
  const [showFilterPanel, setShowFilterPanel] = useState<boolean>(false);

  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // Check if click is outside sort dropdown
      if (
        showSortPanel &&
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(target)
      ) {
        setShowSortPanel(false);
      }

      // Check if click is outside filter dropdown
      if (
        showFilterPanel &&
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(target)
      ) {
        setShowFilterPanel(false);
      }
    };

    // only add listener if at least one dropdown is open
    if (showSortPanel || showFilterPanel) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // cleans event listeners on render
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showSortPanel, showFilterPanel]);

  const sortingState = table.getState().sorting;
  const filterState = table.getState().columnFilters;

  const activeSortsCount = sortingState.length;
  const activeFiltersCount = filterState.length;

  const toggleSortPanel = () => {
    setShowSortPanel(!showSortPanel);
  };

  const toggleFilterPanel = () => {
    setShowFilterPanel(!showFilterPanel);
    setShowSortPanel(false);
  };

  const clearAllSorts = () => {
    table.resetSorting();
  };

  const clearAllFilters = () => {
    table.resetColumnFilters();
  };

  const clearAll = () => {
    clearAllSorts();
    clearAllFilters();
  };

  const addFilter = (columnId: string, value: string) => {
    const column = table.getColumn(columnId);
    if (column) {
      column.setFilterValue(value);
    }
  };

  const removeFilter = (columnId: string) => {
    const column = table.getColumn(columnId);
    if (column) {
      column.setFilterValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.actionsContainer}>
          {(activeSortsCount > 0 || activeFiltersCount > 0) && (
            <button className={styles.clearAllButton} onClick={clearAll}>
              Clear all
            </button>
          )}
        </div>

        {/* Functions Container */}
        <div className={styles.functionsContainer}>
          <div className={styles.dropdownWrapper}>
            <button className={styles.functionButton} onClick={toggleSortPanel}>
              <SortTableIcon className={styles.functionButton__icon} />
              Sort
            </button>

            {/* Sort Dropdown Panel */}
            {showSortPanel && (
              <div className={styles.dropdownPanel} ref={sortDropdownRef}>
                <TableSortPanel
                  table={table}
                  sortsCount={activeSortsCount}
                />
              </div>
            )}
          </div>

          <div className={styles.dropdownWrapper}>
            <button
              className={styles.functionButton}
              onClick={toggleFilterPanel}>
              <FilterTableIcon className={styles.functionButton__icon} />
              Filter
            </button>

            {/* Filter Dropdown Panel */}
            {showFilterPanel && (
              <div className={styles.dropdownPanel} ref={filterDropdownRef}>
                <TableFilterPanel
                  table={table}
                  onAddFilter={addFilter}
                  onRemoveFilter={removeFilter}
                  onClearAll={clearAllFilters}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
