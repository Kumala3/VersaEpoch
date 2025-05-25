'use client';
import { useRef, useEffect, useState } from 'react';
import styles from '@/styles/timeline.module.scss';
import { TimelineCard } from '@/components/TimelineCard';
import { TimelineCardModal } from '@/components/TimelineCardModal';
import { TimelineCardData, timelineCards } from '@/data/chatgptTimeline';
import { TimelineNavigationPanel } from '@/components/TimelineNavigationPanel';
import { TimelineFilterDropdown } from './TimelineFilterDropdown';

interface TimelineProps {
  timelineCards: TimelineCardData[];
}

export function Timeline({ timelineCards }: TimelineProps) {
  const filterTypeInitialState = {
    milestone: false,
    update: false,
    feature: false,
    model: false,
    announcement: false,
    research: false,
    company: false,
    product: false,
  };

  const filterYearInitialState = {
    '2022': false,
    '2023': false,
    '2024': false,
    '2025': false,
  };

  const [filterTypeState, setFilterTypeState] = useState(
    filterTypeInitialState
  );

  const [filterYearState, setFilterYearState] = useState(
    filterYearInitialState
  );

  const [selectedCard, setSelectedCard] = useState<TimelineCardData | null>(
    null
  );
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [filteredCards, setFilteredCards] =
    useState<TimelineCardData[]>(timelineCards);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, timelineCards.length);
  }, [timelineCards.length]);

  const applyFilters = () => {
    // Get an array of all selected type names
    const selectedTypes = Object.keys(filterTypeState).filter(
      (key) => filterTypeState[key]
    );

    console.log(`Selected filter types: ${selectedTypes}`);

    // Get selected Years
    const selectedYears = Object.keys(filterYearState).filter(
      (key) => filterYearState[key]
    );

    console.log(`Selected filter years: ${selectedYears}`);

    // If no filters selected, show all cards
    if (selectedTypes.length === 0 && selectedYears.length === 0) {
      setFilteredCards(timelineCards);
      return;
    }

    const filteredCards = timelineCards.filter((card) => {
      let matchesType = true;
      let matchesYear = true;

      // If any type selected (> 0)
      if (selectedTypes.length > 0) {
        if (Array.isArray(card.type)) {
          matchesType = card.type.some((type) => selectedTypes.includes(type));
        } else if (typeof card.type === 'string') {
          matchesType = selectedTypes.includes(card.type);
        } else {
          matchesType = false;
        }
      }

      // Check year filter (if any year is selected)
      if (selectedYears.length > 0) {
        matchesYear = selectedYears.includes(card.year);
      }

      // Card must match Both Filters (Year & Type)
      return matchesType && matchesYear;
    });

    setFilteredCards(filteredCards);
  };

  const handleFilterTypeChange = (typeName: string, checked: boolean) => {
    // Update the filter state with new checkbox value
    setFilterTypeState((prev) => ({
      ...prev,
      [typeName]: checked,
    }));
  };

  const handleFilterYearChange = (year: string, checked: boolean) => {
    // Update the year filter state with new checkbox value (False/True)
    setFilterYearState((prev) => ({
      ...prev,
      [year]: checked,
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [filterTypeState, filterYearState]);

  const resetAllFilters = () => {
    setFilterTypeState(filterTypeInitialState);
    setFilterYearState(filterYearInitialState);
    setFilteredCards(timelineCards);
  };

  /* Handle Timeline Scroll for dynamic filling */
  useEffect(() => {
    const timelineRef = document.querySelector(`.${styles.timelineWrapper}`);

    const handleScroll = () => {
      if (timelineRef) {
        const scrollPosition = timelineRef.scrollLeft;

        cardRefs.current.forEach((card, index) => {
          if (!card) return;

          const cardPosition = card.offsetLeft;
          const cardWidth = card.offsetWidth;

          // Calculate how far this card is through the viewport
          const viewportStart = scrollPosition;

          // Ife the percentage of card that passed the left edge
          const percentage = Math.min(
            100,
            Math.max(
              0,
              ((viewportStart + timelineRef.clientWidth - cardPosition) /
                cardWidth) *
                100
            )
          );
          card.style.setProperty('--fill-percentage', `${percentage}%`);
        });
      }
    };

    timelineRef.addEventListener('scroll', handleScroll);

    // Rin this when component unmounts
    return () => timelineRef?.removeEventListener('scroll', handleScroll);
  }, []);

  const goToCard = (index: number) => {
    // Ensures index is within the boundaries
    const safeIndex = Math.max(0, Math.min(index, timelineCards.length - 1));
    setCurrentCardIndex(safeIndex);

    // Get referenced to elements
    const targetCard = cardRefs.current[safeIndex];

    // Scrolling functionality
    targetCard?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const goToNext = () => {
    goToCard(currentCardIndex + 1);
  };

  const goToPrev = () => {
    goToCard(currentCardIndex - 1);
  };

  const goToFirst = () => {
    goToCard(0);
  };

  const goToLast = () => {
    goToCard(timelineCards.length - 1);
  };

  const openCardModal = (cardData: TimelineCardData) => {
    setSelectedCard(cardData);
  };

  const closeCardModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.functionsContainer}>
        {/* Sort function here */}
        <TimelineFilterDropdown
          filterTypeState={filterTypeState}
          filterYearState={filterYearState}
          onFilterTypeChange={handleFilterTypeChange}
          onFilterYearChange={handleFilterYearChange}
          onFiltersReset={resetAllFilters}
        />
      </div>
      <ol className={styles.timelineWrapper}>
        {filteredCards.map((card, index) => (
          <li
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`${styles.cardWrapper}`}>
            <TimelineCard
              data={card}
              className={`${styles.timelineCard} ${
                index === currentCardIndex ? styles.timelineCardActive : ''
              }`}
              onClick={() => openCardModal(card)}
            />
          </li>
        ))}
        <li className={`${styles.cardWrapper} ${styles.timelineTail}`}></li>
      </ol>

      {/* CardModal */}
      {selectedCard && (
        <TimelineCardModal cardData={selectedCard} onClose={closeCardModal} />
      )}
      <TimelineNavigationPanel
        onNext={goToNext}
        onPrev={goToPrev}
        onFirst={goToFirst}
        onLast={goToLast}
        currentIndex={currentCardIndex}
        totalCards={filteredCards.length}
      />
    </div>
  );
}
