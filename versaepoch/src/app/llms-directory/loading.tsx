import styles from '@/styles/llmsDirectoryLoading.module.scss';
import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className={styles.container}>
      <h1 className={styles.spinnerText}>Loading...</h1>
      <Spinner size='lg' />
    </div>
  );
}
