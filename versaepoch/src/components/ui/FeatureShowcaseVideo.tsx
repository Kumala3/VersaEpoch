import styles from '@/styles/ui/featureShowcaseVideo.module.scss';

interface FeatureShowcaseVideoProps {
  title?: string;
  videoPath: string;
  caption: string;
  posterImage: string;
}

export function FeatureShowcaseVideo({
  title,
  videoPath,
  caption,
  posterImage,
}: FeatureShowcaseVideoProps) {
  return (
    <figure className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        src={videoPath}
        poster={posterImage}
        className={styles.video}></video>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
