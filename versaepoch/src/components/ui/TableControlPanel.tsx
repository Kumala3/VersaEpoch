'use client';

import styles from '@/styles/ui/tableControlPanel.module.scss';
import { Table } from '@tanstack/react-table';
import { useState, useRef, useEffect } from 'react';
import { SortTableIcon, FilterTableIcon } from '@/components/ui/UIIcons';
import { TableSortPanel } from '@/components/ui/TableSortPanel';
import { SelectSortDropdown } from '@/components/ui/SelectSortDropdown';
import { TableFilterPanel } from '@/components/ui/TableFilterPanel';
import { SelectFilterDropdown } from '@/components/ui/SelectFilterDropdown';
import { capitalizeString } from '@/utils/helperFunctions';

interface TableControlPanelProps<TData> {
  table: Table<TData>;
}

function getAvailableSortableColumns<TData>(table: Table<TData>) {
  const sortingState = table.getState().sorting;
  // Get all sortable columns
  const columns = table.getAllColumns().filter((col) => col.getCanSort());

  return columns
    .filter((col) => !sortingState.find((sort) => col.id === sort.id))
    .map((col) => ({
      id: col.id,
      title: capitalizeString(col.id, '_'),
    }));
}

export function TableControlPanel<TData>({
  table,
}: TableControlPanelProps<TData>) {
  const [showSortPanel, setShowSortPanel] = useState<boolean>(false);
  const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false);
  const [showFilterPanel, setShowFilterPanel] = useState<boolean>(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);

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

  const activeSortsCount = table.getState().sorting.length;
  const activeFiltersCount = table.getState().columnFilters.length;

  const handleClearAll = () => {
    table.setSorting([]);
    table.setColumnFilters([]);
  };

  const handleOpenFilterPanel = () => {
    setShowFilterPanel(true);
    setShowSortPanel(false);
  };

  const handleOpenFilterDropdown = () => {
    setShowFilterDropdown(true);
    setShowFilterPanel(false);
  };

  const handleCloseFilterDropdown = () => {
    setShowFilterDropdown(false);
    setShowFilterPanel(true);
  };

  const handleFilterSelect = (columnId: string) => {
    // TODO: implement filter logic based on column type
    return `Prepare for awesomeness! ${columnId} is cooking!`;
  };

  const handleOpenSortPanel = () => {
    setShowSortPanel(true);
    setShowFilterPanel(false);
  };

  const handleSortDropdownOpen = () => {
    // Closes panel, opens dropdown
    setShowSortPanel(false);
    setShowSortDropdown(true);
  };

  const handleSortDropdownClose = () => {
    // Closes dropdown, opens panel
    setShowSortPanel(true);
    setShowSortDropdown(false);
  };

  const handleSortSelect = (columnId: string) => {
    const currentSorting = table.getState().sorting;
    const newSorting = [...currentSorting, { id: columnId, desc: false }];
    table.setSorting(newSorting);

    handleSortDropdownClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.actionsContainer}>
          {(activeSortsCount > 0 || activeFiltersCount > 0) && (
            <button className={styles.clearAllButton} onClick={handleClearAll}>
              Clear all
            </button>
          )}
        </div>

        {/* Functions Container */}
        <div className={styles.functionsContainer}>
          <div className={styles.dropdownWrapper}>
            <button
              className={styles.functionButton}
              onClick={handleOpenSortPanel}>
              <SortTableIcon className={styles.functionButton__icon} />
              Sort
            </button>

            {/* Sort Dropdown Panel */}
            {showSortPanel && (
              <div className={styles.dropdownPanel} ref={sortDropdownRef}>
                <TableSortPanel
                  table={table}
                  onOpenDropdown={handleSortDropdownOpen}
                />
              </div>
            )}

            {showSortDropdown && (
              <div className={styles.selectDropdownContainer}>
                <SelectSortDropdown
                  elements={getAvailableSortableColumns(table)}
                  onSelect={handleSortSelect}
                  onClose={handleSortDropdownClose}
                />
              </div>
            )}
          </div>

          <div className={styles.dropdownWrapper}>
            <button
              className={styles.functionButton}
              onClick={handleOpenFilterPanel}>
              <FilterTableIcon className={styles.functionButton__icon} />
              Filter
            </button>

            {/* Filter Dropdown Panel */}
            {showFilterPanel && (
              <div className={styles.dropdownPanel} ref={filterDropdownRef}>
                <TableFilterPanel
                  table={table}
                  onOpenDropdown={handleOpenFilterDropdown}
                />
              </div>
            )}

            {showFilterDropdown && (
              <div className={styles.selectDropdownContainer}>
                <SelectFilterDropdown
                  elements={getAvailableSortableColumns(table)}
                  onSelect={handleFilterSelect}
                  onClose={handleCloseFilterDropdown}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
