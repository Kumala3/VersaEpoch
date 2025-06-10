import styles from '@/styles/ui/selectFilterDropdown.module.scss';
import { useEffect, useRef } from 'react';
import { FilterOperator } from '@/types/Table';

interface SelectFilterDropdownProps {
  elements: {id: string, title: string}[];
  onSelect: (columnId: string, operator: FilterOperator, value: string | number) => void;
  onClose: () => void;
}

export function SelectFilterDropdown({
  elements,
  onSelect,
  onClose,
}: SelectFilterDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // If there's click outside the dropdown, close it
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
      <p className={styles.title}>Select a column to sort:</p>
      <div className={styles.optionsContainer}>
        {elements.map((element) => (
          <button
            key={element.id}
            className={styles.option}
            onClick={() => onSelect(element.id)}>
            {element.title}
          </button>
        ))}
      </div>
      
    </div>
  );
}
