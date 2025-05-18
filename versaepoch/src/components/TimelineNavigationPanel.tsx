import styles from '@/styles/timelineNavigationPanel.module.scss';
import {
  NextIcon,
  PreviousIcon,
  GoToEndIcon,
  GoToBeginningIcon,
} from '@/components/ui/UIIcons';

interface TimelineNavigationPanel {
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  currentIndex: number;
  totalCards: number;
}

export function TimelineNavigationPanel({
  onNext,
  onPrev,
  onFirst,
  onLast,
  currentIndex,
  totalCards,
}: TimelineNavigationPanel) {
  return (
    <div className={styles.container}>
      <h4 className={styles.headline}>Navigation Panel</h4>
      <div className={styles.totalCards}>
        <p className={styles.totalCards__stepMetric}>{currentIndex+1}/{totalCards}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          aria-label="Previous"
          onClick={onPrev}
          className={styles.navigationArrow}>
          <PreviousIcon />
        </button>
        <button onClick={onFirst} className={styles.navigationButton}>
          <GoToBeginningIcon className={styles.navigationButton__icon} />
          Go To The Beginning
        </button>
        <button onClick={onLast} className={styles.navigationButton}>
          Go To The End
          <GoToEndIcon className={styles.navigationButton__icon} />
        </button>
        <button
          aria-label="Next"
          onClick={onNext}
          className={styles.navigationArrow}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}
