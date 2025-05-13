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
import { useState } from 'react';
import { CloseIcon } from '@/components/ui/CloseIcon';
import Link from 'next/link';

interface TimelineCardProps {
  title: string;
  description: string;
  date: string;
  impact: 'tiny' | 'small' | 'medium' | 'big';
  type: 'model' | 'update' | 'milestone' | 'feature' | 'tool';
  className: string;
}

export function TimelineCard({
  title,
  description,
  date,
  impact,
  type,
  className,
}: TimelineCardProps) {
  const [isCardOpened, setIsCardOpened] = useState<boolean>(false);

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

  const openCard = () => {
    console.log(`Card is opened!`);
    setIsCardOpened(true);
  };

  const closeCard = () => {
    setIsCardOpened(false);
  };

  return (
    <div className={`${styles.container} ${className}`} onClick={() => openCard()}>
      <div className={styles.topLayout}>
        <div>{CardIcon(type)}</div>
        <h5 className={styles.headline}>{title}</h5>
      </div>
      <p className={styles.description}>{description}</p>

      {isCardOpened && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContainer}>
            <button
              onClick={() => closeCard()}
              className={styles.modalContainer__closeButton}
              aria-label="Close">
              <CloseIcon />
            </button>
            <div className={styles.modalContainer__topLayout}>
              <div className={styles.modalContainer__icon}>
                {CardIcon(type)}
              </div>
              <h4 className={styles.modalContainer__headline}>{title}</h4>
            </div>
            <div className={styles.modalContainer__metadata}>
              <span className={styles.modalContainer__date}>Date: {date}</span>
              <span className={styles.modalContainer__impact}>
                Impact: {impact}
              </span>
            </div>
            <p className={styles.modalBackdrop__description}>{description}</p>
            {/* TODO: Think about what ID/name use to fetch data about specific model/feature/tool/update */}
            <Link
              href={`/chatgpt/${type}/`}
              className={styles.modalContainer__viewFullButton}>
              View Full Page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
