'use client';
import styles from '@/styles/timelineFilterDropdown.module.scss';
import { FilterIcon } from '@/components/ui/UIIcons';
import { CloseIcon } from './ui/CloseIcon';
import { TimelineFilterDropdownColumn } from '@/components/TimelineFilterDropdownColumn';

interface TimelineFilterDropdownProps {
  opened: boolean,
  onOpen: () => void;
  onClose: () => void;
  filterTypeState: {
    milestone: boolean;
    update: boolean;
    announcement: boolean;
    model: boolean;
    company: boolean;
    feature: boolean;
    research: boolean;
    product: boolean;
  };
  filterYearState: { [year: string]: boolean };
  onFilterTypeChange: (typeName: string, checked: boolean) => void;
  onFilterYearChange: (year: string, checked: boolean) => void;
  onFiltersReset: () => void;
}

export function TimelineFilterDropdown({
  opened,
  onOpen,
  onClose,
  filterTypeState,
  filterYearState,
  onFilterTypeChange,
  onFilterYearChange,
  onFiltersReset,
}: TimelineFilterDropdownProps) {
  const filterTypeOptions = [
    {
      title: 'Milestone',
      isChecked: filterTypeState.milestone,
      onChange: () =>
        onFilterTypeChange('milestone', !filterTypeState.milestone),
    },
    {
      title: 'Update',
      isChecked: filterTypeState.update,
      onChange: () => onFilterTypeChange('update', !filterTypeState.update),
    },
    {
      title: 'Announcement',
      isChecked: filterTypeState.announcement,
      onChange: () =>
        onFilterTypeChange('announcement', !filterTypeState.announcement),
    },
    {
      title: 'Model',
      isChecked: filterTypeState.model,
      onChange: () => onFilterTypeChange('model', !filterTypeState.model),
    },
    {
      title: 'Company',
      isChecked: filterTypeState.company,
      onChange: () => onFilterTypeChange('company', !filterTypeState.company),
    },
    {
      title: 'Feature',
      isChecked: filterTypeState.feature,
      onChange: () => onFilterTypeChange('feature', !filterTypeState.feature),
    },
    {
      title: 'Research',
      isChecked: filterTypeState.research,
      onChange: () => onFilterTypeChange('research', !filterTypeState.research),
    },
    {
      title: 'Product',
      isChecked: filterTypeState.product,
      onChange: () => onFilterTypeChange('product', !filterTypeState.product),
    },
  ];

  const filterYearOptions = [
    {
      title: '2022',
      isChecked: filterYearState['2022'],
      onChange: () => onFilterYearChange('2022', !filterYearState['2022']),
    },
    {
      title: '2023',
      isChecked: filterYearState['2023'],
      onChange: () => onFilterYearChange('2023', !filterYearState['2023']),
    },
    {
      title: '2024',
      isChecked: filterYearState['2024'],
      onChange: () => onFilterYearChange('2024', !filterYearState['2024']),
    },
    {
      title: '2025',
      isChecked: filterYearState['2025'],
      onChange: () => onFilterYearChange('2025', !filterYearState['2025']),
    },
  ];

  return (
    <div className={styles.container}>
      {!opened ? (
        <div onClick={onOpen} className={styles.closedContainer}>
          <p className={styles.closedContainer__text}>Filter</p>
          <FilterIcon className={styles.closedContainer__icon} />
        </div>
      ) : (
        <div onClick={onClose} className={styles.closedContainer}>
          <p className={styles.closedContainer__text}>Filter</p>
          <CloseIcon className={styles.closedContainer__icon} />
        </div>
      )}

      {opened && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContainer__grid}>
            <TimelineFilterDropdownColumn
              headline="Type"
              elements={filterTypeOptions}
            />
            <TimelineFilterDropdownColumn
              headline="Year"
              elements={filterYearOptions}
            />
          </div>

          <div className={styles.dropdownContainer__bottomButtons}>
            <button
              className={styles.dropdownContainer__bottomButtons__resetFilters}
              onClick={onFiltersReset}>
              Reset
            </button>
            <button
              onClick={onClose}
              className={styles.dropdownContainer__bottomButtons__close}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
