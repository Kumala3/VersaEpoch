import styles from '@/styles/timelineCardModal.module.scss';
import Link from 'next/link';
import {
  ModelIcon,
  UpdateIcon,
  FeatureIcon,
  MilestoneIcon,
  AnnouncementIcon,
  CompanyIcon,
  ResearchIcon,
} from '@/components/ui/TimelineCardsIcons';
import { CloseIcon } from '@/components/ui/CloseIcon';
import { GlobalIcon } from '@/components/ui/UIIcons';
import { TimelineCard, NonEmptyCardTypeArray } from '@/data/chatgptData';
import { SourceElem } from './SourceElem';

interface TimelineCardModalProps {
  chatbot: string;
  cardData: TimelineCard;
  onClose: () => void;
}

function generatePageURL(chatbot: string, card: TimelineCard) {
  const slug = card.title
    .toLowerCase()
    .replace(/[.\s,;:!?'"()[\]{}\/\\]+/g, '-') // first replace
    .replace(/-+/g, '-'); // multiple dashes become one
  return `/${chatbot}/${slug}-${card.id}`;
}

export function TimelineCardModal({
  chatbot,
  cardData,
  onClose,
}: TimelineCardModalProps) {
  const CardIcon = (type: NonEmptyCardTypeArray, className: string) => {
    switch (cardData.type[0]) {
      case 'model':
        return <ModelIcon className={className} />;
      case 'announcement':
        return <AnnouncementIcon className={className} />;
      case 'update':
        return <UpdateIcon className={className} />;
      case 'milestone':
        return <MilestoneIcon className={className} />;
      case 'feature':
        return <FeatureIcon className={className} />;
      case 'product':
        return <FeatureIcon className={className} />;
      case 'company':
        return <CompanyIcon className={className} />;
      case 'research':
        return <ResearchIcon className={className} />;
      default:
        return <GlobalIcon className={className} />;
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        {/* TODO: Add banner image */}
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
              {CardIcon(cardData.type, styles.iconType)}
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

        <Link
          href={generatePageURL(chatbot, cardData)}
          className={styles.viewFullButton}>
          View Full Page
        </Link>
      </div>
    </div>
  );
}
