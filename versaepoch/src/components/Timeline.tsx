'use client';
import { useState } from 'react';
import styles from '@/styles/timeline.module.scss';
import { TimelineCard } from '@/components/TimelineCard';
import { TimelineCardModal } from '@/components/TimelineCardModal';
import { TimelineCardData, timelineCards } from '@/data/chatgptTimeline';
import {TimelineNavigationPanel} from "@/components/TimelineNavigationPanel";

export function Timeline() {
  const [selectedCard, setSelectedCard] = useState<TimelineCardData | null>(
    null
  );

  const openCardModal = (cardData: TimelineCardData) => {
    setSelectedCard(cardData);
  };

  const closeCardModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className={styles.container}>
      <ol className={styles.timelineWrapper}>
        {timelineCards.map((card, index) => (
          <li key={index} className={styles.cardWrapper}>
            <TimelineCard
              data={card}
              className={styles.timelineCard}
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
      <TimelineNavigationPanel />
    </div>
  );
}
