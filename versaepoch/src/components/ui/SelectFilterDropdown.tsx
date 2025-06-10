import styles from '@/styles/ui/selectFilterDropdown.module.scss';
import { useEffect, useRef } from 'react';

interface SelectFilterDropdownProps {
  elements: { id: string; title: string }[];
  onSelect: (columnId: string) => void;
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
      {elements.map((element) => (
        <button
          key={element.id}
          className={styles.option}
          onClick={() => onSelect(element.id)}>
          {element.title}
        </button>
      ))}
    </div>
  );
}
