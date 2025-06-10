'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/ui/selectSortDropdown.module.scss';

interface TableSelectDropdownProps {
  elements: { id: string; title: string }[];
  onSelect: (columnId: string) => void;
  onClose: () => void;
}

export function SelectSortDropdown({
  elements,
  onSelect,
  onClose,
}: TableSelectDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event?.target as Node;

      if (dropdownRef.current && !dropdownRef?.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.headerContainer}>Add Sort</div>

      <div className={styles.optionsList}>
        {elements.map((element) => (
          <button
            key={element.id}
            className={styles.option}
            onClick={() => onSelect(element.id)}>
            <span className={styles.option__label}>{element.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
