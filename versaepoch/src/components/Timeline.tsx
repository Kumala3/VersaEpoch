import styles from '@/styles/timeline.module.scss';
import { TimelineCard } from '@/components/TimelineCard';

export function Timeline() {
  return (
    <div className={styles.container}>
      <ol className={styles.timelineWrapper}>
        <li className={styles.cardWrapper}>
          <TimelineCard
            title="ChatGPT Release"
            description="ChatGPT has been officially release on November 30, 2022 and started blooming like a lightning. Hundred thousands people were amazed by the ability to answer a wide range of questions quickly."
            type="milestone"
            impact="big"
            date="November 30, 2022"
            className={styles.timelineCard}
          />
        </li>
        <li className={styles.cardWrapper}>
          <TimelineCard
            title="ChatGPT Release"
            description="ChatGPT has been officially release on November 30, 2022 and started blooming like a lightning. Hundred thousands people were amazed by the ability to answer a wide range of questions quickly."
            type="update"
            impact="tiny"
            date="December 12, 2022"
            className={styles.timelineCard}
          />
        </li>
        <li className={styles.cardWrapper}>
          <TimelineCard
            title="ChatGPT Release"
            description="ChatGPT has been officially release on November 30, 2022 and started blooming like a lightning. Hundred thousands people were amazed by the ability to answer a wide range of questions quickly."
            type="update"
            impact="tiny"
            date="December 12, 2022"
            className={styles.timelineCard}
          />
        </li>
        <li className={styles.cardWrapper}>
          <TimelineCard
            title="ChatGPT Release"
            description="ChatGPT has been officially release on November 30, 2022 and started blooming like a lightning. Hundred thousands people were amazed by the ability to answer a wide range of questions quickly."
            type="update"
            impact="tiny"
            date="December 12, 2022"
            className={styles.timelineCard}
          />
        </li>
        <li className={styles.cardWrapper}></li>
      </ol>
    </div>
  );
}
