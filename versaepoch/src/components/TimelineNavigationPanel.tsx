import styles from '@/styles/timelineNavigationPanel.module.scss';
import {
  NextIcon,
  PreviousIcon,
  GoToEndIcon,
  GoToBeginningIcon,
} from '@/components/ui/UIIcons';

export function TimelineNavigationPanel() {
  return (
    <div className={styles.container}>
      <h4 className={styles.headline}>Navigation Panel</h4>
      <div className={styles.buttonsContainer}>
        <button aria-label="Previous" className={styles.navigationArrow}>
          <PreviousIcon />
        </button>
        <button aria-label="Go To The End" className={styles.navigationButton}>
          <GoToBeginningIcon className={styles.navigationButton__icon} />
          Go To The Beginning
        </button>
        <button className={styles.navigationButton}>
          Go To The End
          <GoToEndIcon className={styles.navigationButton__icon} />
        </button>
        <button aria-label="Next" className={styles.navigationArrow}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}
