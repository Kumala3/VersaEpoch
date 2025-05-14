import styles from '@/styles/timelineCardModal.module.scss';
import Link from 'next/link';
import {
  ModelIcon,
  UpdateIcon,
  FeatureIcon,
  MilestoneIcon,
  ToolIcon,
} from '@/components/ui/ContentIcons';
import { CloseIcon } from '@/components/ui/CloseIcon';
import { GlobalIcon } from '@/components/ui/UIIcons';
import { TimelineCardData } from './Timeline';
import { SourceElem } from './SourceElem';

interface TimelineCardModalProps {
  cardData: TimelineCardData;
  onClose: () => void;
}

export function TimelineCardModal({
  cardData,
  onClose,
}: TimelineCardModalProps) {
  const CardIcon = (type: string) => {
    switch (type) {
      case 'model':
        return <ModelIcon />;
      case 'tool':
        return <ToolIcon />;
      case 'update':
        return <UpdateIcon />;
      case 'milestone':
        return <MilestoneIcon />;
      case 'feature':
        return <FeatureIcon />;
      default:
        return <GlobalIcon />;
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContainer__mainContent}>
          <div className={styles.modalContainer__topBar}>
            <button
              onClick={() => onClose()}
              className={styles.closeButton}
              aria-label="Close">
              <CloseIcon />
            </button>
          </div>

          <div className={styles.modalContainer__topLayout}>
            <div className={styles.modalContainer__icon}>
              {CardIcon(cardData.type)}
            </div>
            <h4 className={styles.modalContainer__headline}>
              {cardData.title}
            </h4>
          </div>

          {/* Metadata */}
          <div className={styles.metadata}>
            <div className={styles.date}>
              <strong>Date:</strong> {cardData.date}
            </div>
            <div className={styles.impact}>
              {/* Add capitalize utility function */}
              <strong>Impact: </strong> {cardData.impact}
            </div>
            <h6 className={styles.metadata__headline}>Description:</h6>
            <p className={styles.fullDescription}>
              {cardData.full_description}
            </p>
          </div>

          <div className={styles.sourcesList}>
            <h6 className={styles.sourcesList__headline}>Sources: </h6>
            {cardData.sources.map((source, index) => (
              <SourceElem key={index} title={source.title} url={source.url} />
            ))}
          </div>
        </div>

        {/* TODO: Think about what ID/name use to fetch data about specific model/feature/tool/update */}
        <Link
          href={`/chatgpt/${cardData.type}/`}
          className={styles.viewFullButton}>
          View Full Page
        </Link>
      </div>
    </div>
  );
}
