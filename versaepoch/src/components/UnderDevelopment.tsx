import styles from '@/styles/underDevelopment.module.scss';
import Image from 'next/image';

export function UnderDevelopment() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Something great is building and it&apos;ll be here soon!
      </h2>
      <Image
        src={'/under_development.png'}
        alt="Under Development Page"
        width={100}
        height={100}
        className={styles.image}
      />
      {/* TODO: Add Let Me know once its done Email Form  */}
    </div>
  );
}
