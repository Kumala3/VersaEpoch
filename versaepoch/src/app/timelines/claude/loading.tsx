import styles from '@/styles/chatbotPageTimeline.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loadingSkeleton}>
        {/* Title skeleton */}
        <div className={styles.skeletonTitle}></div>

        {/* Introduction text */}
        <div className={styles.skeletonIntroductionText}></div>

        {/* Skeleton Timeline */}
        <div className={styles.skeletonTimeline}>
          <div className={styles.skeletonTopContainer}>
            <div className={styles.skeletonLastUpdatedOn}></div>
            <div className={styles.skeletonFunctionsContainer}>
              <div className={styles.skeletonFunction}></div>
              <div className={styles.skeletonFunction}></div>
            </div>
          </div>

          <div className={styles.skeletonHorizontalTimeline}>
            <div className={styles.skeletonTimelineCard}></div>
            <div className={styles.skeletonTimelineCard}></div>
            <div className={styles.skeletonTimelineCard}></div>
            <div className={styles.skeletonTimelineCard}></div>
            <div className={styles.skeletonTimelineCard}></div>
            <div className={styles.skeletonTimelineCard}></div>
            <div className={styles.skeletonTimelineCard}></div>
          </div>

          <div className={styles.skeletonNavigation}></div>
        </div>

        {/* FAQ Section */}
        <div className={styles.skeletonFAQTitle}></div>
        <div className={styles.skeletonFAQList}>
          <div className={styles.skeletonFAQItem}></div>
          <div className={styles.skeletonFAQItem}></div>
          <div className={styles.skeletonFAQItem}></div>
          <div className={styles.skeletonFAQItem}></div>
          <div className={styles.skeletonFAQItem}></div>
        </div>
      </div>
    </div>
  );
}
