'use client';
import { useRef, useEffect, useState } from 'react';
import styles from '@/styles/timeline.module.scss';
import { TimelineCard } from '@/components/TimelineCard';
import { TimelineCardModal } from '@/components/TimelineCardModal';
import { TimelineCardData, timelineCards } from '@/data/chatgptTimeline';
import { TimelineNavigationPanel } from '@/components/TimelineNavigationPanel';
import { TimelineFilterDropdown } from './TimelineFilterDropdown';

export function Timeline() {
  const [selectedCard, setSelectedCard] = useState<TimelineCardData | null>(
    null
  );
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, timelineCards.length);
  }, []);

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
      behavior: 'smooth', block: 'nearest', inline: 'center'
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
        {/* Filter + Sort functions here */}
        <TimelineFilterDropdown />
      </div>
      <ol className={styles.timelineWrapper}>
        {timelineCards.map((card, index) => (
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
        totalCards={timelineCards.length}
      />
    </div>
  );
}
