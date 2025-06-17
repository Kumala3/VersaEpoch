'use client';

import styles from '@/styles/notFoundPage.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <Image width={100} height={100} alt="Not Found" src={"/not_found.png"} className={styles.image} />
      <button onClick={handleReturnHome} className={styles.returnHomeButton}>
        Return Home
      </button>
      </div>
      
    </div>
  );
}
