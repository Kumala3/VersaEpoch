import styles from '@/styles/timelineCardFullPage.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSkeleton}>
          {/* Banner skeleton */}
          <div className={styles.skeletonBanner}></div>

          {/* Title skeleton */}
          <div className={styles.skeletonTitle}></div>

          {/* Metadata skeleton */}
          <div className={styles.skeletonMetadata}>
            <div className={styles.skeletonDate}></div>
            <div className={styles.skeletonTypes}></div>
          </div>

          {/* Content skeleton */}
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
