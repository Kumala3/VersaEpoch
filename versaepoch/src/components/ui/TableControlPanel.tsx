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
import { ColumnType, FilterOperator } from '@/types/Table';
import { SelectFilterRuleDropdown } from '@/components/ui/SelectFilterRuleDropdown';

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

function getAvailableFilterableColumns<TData>(table: Table<TData>) {
  const filtersState = table.getState().columnFilters;

  const excludedColumns = ['knowledge_cutoff'];

  const columns = table
    .getAllColumns()
    .filter((col) => col.getCanFilter() && !excludedColumns.includes(col.id));

  return columns
    .filter((col) => !filtersState.find((filter) => col.id === filter.id))
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
  const [showFilterRuleDropdown, setShowFilterRuleDropdown] =
    useState<boolean>(false);
  const [selectedColumnForFilter, setSelectedColumnForFilter] = useState<
    string | null
  >(null);

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

  const handleOpenFilterRuleDropdown = () => {
    setShowFilterRuleDropdown(true);
    setShowFilterDropdown(false);
    setShowFilterPanel(false);
  };

  const handleCloseFilterRuleDropdown = () => {
    setShowFilterRuleDropdown(false);
    setSelectedColumnForFilter(null);
    setShowFilterPanel(true);
  };

  const handleSelectFilter = (columnId: string) => {
    setSelectedColumnForFilter(columnId);
    handleOpenFilterRuleDropdown();
  };

  const handleAddFilter = (
    columnId: string,
    operator: FilterOperator,
    value: string | number | Date | null
  ) => {
    const currentFilters = table.getState().columnFilters;
    const newFilters = [
      ...currentFilters,
      { id: columnId, value: { operator: operator, value: value } },
    ];
    table.setColumnFilters(newFilters);
  };

  const handleFilterRuleSelect = (
    operator: FilterOperator,
    value: string | number | Date | null
  ) => {
    if (selectedColumnForFilter) {
      handleAddFilter(selectedColumnForFilter, operator, value);
      handleCloseFilterRuleDropdown();
    }
  };

  const handleUpdateFilter = (
    columnId: string,
    operator: FilterOperator,
    value: string | Date | number | null
  ) => {
    const currentFilters = table.getState().columnFilters;
    // Only update operator, value of the selected filter
    const updatedFilters = currentFilters.map((filter) =>
      filter.id === columnId
        ? { ...filter, value: { operator, value } }
        : filter
    );
    table.setColumnFilters(updatedFilters);
  };

  const handleRemoveFilter = (columnId: string) => {
    const currentFilters = table.getState().columnFilters;
    // include all filters expect for the one provided -> remove from filters
    const existingFilters = currentFilters.filter(
      (filter) => filter.id !== columnId
    );
    table.setColumnFilters(existingFilters);
  };

  const handleClearAllFilters = () => {
    table.resetColumnFilters();
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
                  onClearAllFilters={handleClearAllFilters}
                  onRemoveFilter={handleRemoveFilter}
                  onUpdateFilter={handleUpdateFilter}
                  onOpenDropdown={handleOpenFilterDropdown}
                  onClose={handleCloseFilterDropdown}
                />
              </div>
            )}

            {showFilterDropdown && (
              <div className={styles.selectDropdownContainer}>
                <SelectFilterDropdown
                  elements={getAvailableFilterableColumns(table)}
                  onClose={handleCloseFilterDropdown}
                  onSelect={handleSelectFilter}
                />
              </div>
            )}

            {showFilterRuleDropdown && (
              <div className={styles.selectFilterRuleDropdownContainer}>
                <SelectFilterRuleDropdown
                  table={table}
                  selectedColumnId={selectedColumnForFilter}
                  onClose={handleCloseFilterRuleDropdown}
                  onSelect={handleFilterRuleSelect}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
