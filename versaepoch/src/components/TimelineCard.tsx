'use client';
import styles from '@/styles/timelineCard.module.scss';
import {
  ModelIcon,
  UpdateIcon,
  FeatureIcon,
  MilestoneIcon,
  ToolIcon,
} from '@/components/ui/ContentIcons';
import { GlobalIcon } from '@/components/ui/UIIcons';

interface TimelineCardProps {
  title: string;
  short_description: string;
  date: string;
  impact: 'tiny' | 'small' | 'medium' | 'big';
  type: 'model' | 'update' | 'milestone' | 'feature' | 'tool';
  className: string;
  onClick: () => void;
}

export function TimelineCard({
  title,
  short_description,
  date,
  type,
  className,
  onClick,
}: TimelineCardProps) {
  const CardIcon = (type: string, className: string) => {
    switch (type) {
      case 'model':
        return <ModelIcon className={className} />;
      case 'tool':
        return <ToolIcon className={className} />;
      case 'update':
        return <UpdateIcon className={className} />;
      case 'milestone':
        return <MilestoneIcon className={className} />;
      case 'feature':
        return <FeatureIcon className={className} />;
      default:
        return <GlobalIcon className={className} />;
    }
  };

  return (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      <div className={styles.topLayout}>
        {CardIcon(type, styles.iconType)}
        <h6 className={styles.headline}>{title}</h6>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.date}>
          <strong>Date: </strong> {date}
        </p>
        <p className={styles.description}>{short_description}</p>
      </div>
    </div>
  );
}
