'use client';
import { useState } from 'react';
import styles from '@/styles/timelineFilter.module.scss';
import { FilterIcon } from '@/components/ui/UIIcons';
import { CloseIcon } from './ui/CloseIcon';
import { TimelineFilterDropdownColumn } from '@/components/TimelineFilterDropdownColumn';

export function TimelineFilterDropdown() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [filterTypeState, setFilterTypeState] = useState({
    milestone: false,
    update: false,
    feature: false,
    model: false,
    announcement: false,
    research: false,
    company: false,
    product: false,
  });

  const [filterYearState, setFilterYearState] = useState({
    '2022': false,
    '2023': false,
    '2024': false,
    '2025': false,
  });

  const handleFilterTypeChange = (filterName: string, checked: boolean) => {
    setFilterTypeState((prev) => ({
      ...prev,
      [filterName]: checked,
    }));
  };

  const handleFilterYearChange = (year: string, checked: boolean) => {
    setFilterYearState((prev) => ({
      ...prev,
      [year]: checked,
    }));
  };

  const resetAllFilters = () => {
    setFilterTypeState((prev) => {
      
    })
  }

  const openDropdown = () => {
    console.log(`Filter Dropdown Opened!`);
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
                    handleFilterTypeChange(
                      'milestone',
                      !filterTypeState.milestone
                    ),
                },
                {
                  title: 'Update',
                  isChecked: filterTypeState.update,
                  onChange: () =>
                    handleFilterTypeChange('update', !filterTypeState.update),
                },
                {
                  title: 'Announcement',
                  isChecked: filterTypeState.announcement,
                  onChange: () =>
                    handleFilterTypeChange(
                      'announcement',
                      !filterTypeState.announcement
                    ),
                },
                {
                  title: 'Model',
                  isChecked: filterTypeState.model,
                  onChange: () =>
                    handleFilterTypeChange('model', !filterTypeState.model),
                },
                {
                  title: 'Company',
                  isChecked: filterTypeState.company,
                  onChange: () =>
                    handleFilterTypeChange('company', !filterTypeState.company),
                },
                {
                  title: 'Feature',
                  isChecked: filterTypeState.feature,
                  onChange: () =>
                    handleFilterTypeChange('feature', !filterTypeState.feature),
                },
                {
                  title: 'Research',
                  isChecked: filterTypeState.research,
                  onChange: () =>
                    handleFilterTypeChange(
                      'research',
                      !filterTypeState.research
                    ),
                },
                {
                  title: 'Product',
                  isChecked: filterTypeState.product,
                  onChange: () =>
                    handleFilterTypeChange('product', !filterTypeState.product),
                },
              ]}
            />
            <TimelineFilterDropdownColumn
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
            />
          </div>
            
          {/* TODO: Reset Button */}
          {/* Cancel text */}
          <p
            onClick={closeDropdown}
            className={styles.dropdownContainer__closeText}>
            Cancel
          </p>
        </div>
      )}
    </div>
  );
}
