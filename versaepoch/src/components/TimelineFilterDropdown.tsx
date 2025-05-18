'use client';
import { useState } from 'react';
import styles from '@/styles/timelineFilter.module.scss';
import { FilterIcon } from '@/components/ui/UIIcons';
import { CloseIcon } from './ui/CloseIcon';
import { TimelineFilterDropdownColumn } from '@/components/TimelineFilterDropdownColumn';

interface TimelineFilterDropdownProps {
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
  onFiltersReset: () => void;
}

export function TimelineFilterDropdown({
  filterTypeState,
  filterYearState,
  onFilterTypeChange,
  onFiltersReset,
}: TimelineFilterDropdownProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpened(true);
  };

  const closeDropdown = () => {
    setIsOpened(false);
  };

  return (
    <div className={styles.container}>
      {!isOpened ? (
        <div onClick={openDropdown} className={styles.closedContainer}>
          <p className={styles.closedContainer__text}>Filter</p>
          <FilterIcon className={styles.closedContainer__icon} />
        </div>
      ) : (
        <div onClick={closeDropdown} className={styles.closedContainer}>
          <p className={styles.closedContainer__text}>Filter</p>
          <CloseIcon className={styles.closedContainer__icon} />
        </div>
      )}

      {isOpened && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContainer__grid}>
            <TimelineFilterDropdownColumn
              headline="Type"
              elements={[
                {
                  title: 'Milestone',
                  isChecked: filterTypeState.milestone,
                  onChange: () =>
                    onFilterTypeChange(
                      'milestone',
                      !filterTypeState.milestone
                    ),
                },
                {
                  title: 'Update',
                  isChecked: filterTypeState.update,
                  onChange: () =>
                    onFilterTypeChange('update', !filterTypeState.update),
                },
                {
                  title: 'Announcement',
                  isChecked: filterTypeState.announcement,
                  onChange: () =>
                    onFilterTypeChange(
                      'announcement',
                      !filterTypeState.announcement
                    ),
                },
                {
                  title: 'Model',
                  isChecked: filterTypeState.model,
                  onChange: () =>
                    onFilterTypeChange('model', !filterTypeState.model),
                },
                {
                  title: 'Company',
                  isChecked: filterTypeState.company,
                  onChange: () =>
                    onFilterTypeChange('company', !filterTypeState.company),
                },
                {
                  title: 'Feature',
                  isChecked: filterTypeState.feature,
                  onChange: () =>
                    onFilterTypeChange('feature', !filterTypeState.feature),
                },
                {
                  title: 'Research',
                  isChecked: filterTypeState.research,
                  onChange: () =>
                    onFilterTypeChange(
                      'research',
                      !filterTypeState.research
                    ),
                },
                {
                  title: 'Product',
                  isChecked: filterTypeState.product,
                  onChange: () =>
                    onFilterTypeChange('product', !filterTypeState.product),
                },
              ]}
            />
            {/* <TimelineFilterDropdownColumn
              headline="Year"
              elements={[
                {
                  title: '2022',
                  isChecked: filterYearState['2022'],
                  onChange: () =>
                    handleFilterYearChange('2022', !filterYearState['2022']),
                },
                {
                  title: '2023',
                  isChecked: filterYearState['2023'],
                  onChange: () =>
                    handleFilterYearChange('2023', !filterYearState['2023']),
                },
                {
                  title: '2024',
                  isChecked: filterYearState['2024'],
                  onChange: () =>
                    handleFilterYearChange('2024', !filterYearState['2024']),
                },
                {
                  title: '2025',
                  isChecked: filterYearState['2025'],
                  onChange: () =>
                    handleFilterYearChange('2025', !filterYearState['2025']),
                },
              ]}
            /> */}
          </div>

          <div className={styles.dropdownContainer__bottomButtons}>
            <button
              className={styles.dropdownContainer__bottomButtons__resetFilters}
              onClick={onFiltersReset}>
              Reset
            </button>
            <button
              onClick={closeDropdown}
              className={styles.dropdownContainer__bottomButtons__close}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
