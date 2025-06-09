'use client';
import styles from '@/styles/timelineSortDropdown.module.scss';
import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/UIIcons';

interface TimelineSortDropdownProps {
  opened: boolean;
  selectedSort: string;
  onOpen: () => void;
  onClose: () => void;
  onSortChange: (sortOrder: 'newest' | 'oldest') => void;
}

export function TimelineSortDropdown({
  opened,
  selectedSort,
  onOpen,
  onClose,
  onSortChange,
}: TimelineSortDropdownProps) {
  return (
    <div className={styles.container}>
      {!opened ? (
        <button onClick={onOpen} className={styles.closedContainer}>
          <p className={styles.closedContainer__text}>Sort</p>
          <ChevronDownIcon className={styles.closedContainer__icon} />
        </button>
      ) : (
        <button onClick={onClose} className={styles.closedContainer}>
          <p className={styles.closedContainer__text}>Sort</p>
          <ChevronUpIcon className={styles.closedContainer__icon} />
        </button>
      )}

      {opened && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContainer__radioGroup}>
            <label className={styles.customRadio}>
              <input
                type="radio"
                name="sortOrder"
                value="oldest"
                checked={selectedSort === 'oldest'}
                onChange={() => onSortChange('oldest')}
              />
              <span className={styles.radioCircle}></span>
              <span className={styles.dropdownContainer__radioLabel}>
                Oldest to Newest
              </span>
            </label>

            <label className={styles.customRadio}>
              <input
                type="radio"
                name="sortOrder"
                value="newest"
                checked={selectedSort === 'newest'}
                onChange={() => onSortChange('newest')}
              />
              <span className={styles.radioCircle}></span>
              <span className={styles.dropdownContainer__radioLabel}>
                Newest to Oldest
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
