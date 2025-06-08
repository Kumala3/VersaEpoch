'use client';

import styles from '@/styles/ui/tableHeaderDropdown.module.scss';
import { Column } from '@tanstack/react-table';
import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@/components/ui/UIIcons';

interface TableHeaderDropdownProps<T> {
  column: Column<T, unknown>;
  title: string;
}

export function TableHeaderDropdown<T>({
  column,
  title,
}: TableHeaderDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPinned, setIsPinned] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePin = () => {
    setIsPinned(!isPinned);
    column.pin(isPinned ? false : 'left');
    setIsOpen(false);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    column.toggleSorting(order === 'desc');
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.headerButton} ${isPinned ? styles.pinned : ''}`}
        onClick={toggleDropdown}>
        <span className={styles.headerTitle}>{title}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownTitle}>{title}</div>
          <div className={styles.dropdownSection}>
            <button
              className={styles.dropdownItem}
              onClick={() => handleSort('asc')}>
              <ArrowUpIcon color="#000" className={styles.dropdownItem__icon} />
              <span className={styles.dropdownItem__text}>Sort ascending</span>
            </button>
            <button
              className={styles.dropdownItem}
              onClick={() => handleSort('desc')}>
              <ArrowDownIcon
                color="#000"
                className={styles.dropdownItem__icon}
              />
              <span className={styles.dropdownItem__text}>Sort descending</span>
            </button>
          </div>

          <div className={styles.dropdownSection}>
            <button className={styles.dropdownItem} onClick={handlePin}>
              <span>{isPinned ? '📌' : '📍'}</span>
              <span className={styles.dropdownItem__text}>
                {isPinned ? 'Unpin Column' : 'Pin Column'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
