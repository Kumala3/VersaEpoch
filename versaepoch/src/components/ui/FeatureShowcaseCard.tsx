import styles from '@/styles/featureShowcaseCard.module.scss';
import Image from 'next/image';

interface FeatureShowcaseCardProps {
  title: string;
  demoImageMain: string;
  mainDescription: string;
  bgColor?: 'bisque' | 'greenyellow';
}

export function FeatureShowcaseCard({
  title,
  demoImageMain,
  bgColor = 'bisque',
  mainDescription,
}: FeatureShowcaseCardProps) {
  const containerClassname = `${styles.container} ${styles[`bg_${bgColor}`]}`;

  return (
    <div className={containerClassname}>
      <h4 className={styles.title}>{title}</h4>
      {/* TODO: Later once the features are implemented, change for a GIF  */}
      <Image
        width={600}
        height={200}
        src={demoImageMain}
        alt={'Feature Main Showcase'}
        className={styles.mainImage}
      />
      <p className={styles.description}>{mainDescription}</p>
    </div>
  );
}
