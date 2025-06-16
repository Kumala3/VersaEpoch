import styles from '@/styles/ui/featureVideo.module.scss';

interface FeatureVideoProps {
  videoPath: string;
  caption: string;
}

export function FeatureVideo({ videoPath, caption }: FeatureVideoProps) {
  return (
    <figure className={styles.container}>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        src={videoPath}
        poster="timeline-demo-poster.png"
        className={styles.video}></video>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
