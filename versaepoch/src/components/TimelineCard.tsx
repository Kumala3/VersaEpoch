'use client';
import styles from '@/styles/timelineCard.module.scss';
import {
  ModelIcon,
  UpdateIcon,
  FeatureIcon,
  MilestoneIcon,
  AnnouncementIcon,
  CompanyIcon,
  ResearchIcon,
  ProductIcon
} from '@/components/ui/TimelineCardsIcons';
import { TimelineCardType, NonEmptyCardTypeArray } from '@/types/Timeline';
import { GlobalIcon } from '@/components/ui/UIIcons';

interface TimelineCardProps {
  data: TimelineCardType;
  className: string;
  onClick: () => void;
}

export function TimelineCard({
  data,
  className,
  onClick,
}: TimelineCardProps) {
  const CardIcon = (type: NonEmptyCardTypeArray, className: string) => {
    switch (data.type[0]) {
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
        return <ProductIcon className={className} />;
      case 'company':
        return <CompanyIcon className={className} />;
      case 'research':
        return <ResearchIcon className={className} />;
      default:
        return <GlobalIcon className={className} />;
    }
  };

  return (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      <div className={styles.topLayout}>
        {CardIcon(data.type, styles.iconType)}
        <h6 className={styles.headline}>{data.title}</h6>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.date}>
          <strong>Date: </strong> {data.date}
        </p>
        <p className={styles.description}>{data.short_description}</p>
      </div>
    </div>
  );
}
