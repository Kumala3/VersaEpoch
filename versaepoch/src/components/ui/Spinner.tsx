import styles from '@/styles/ui/spinner.module.scss';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  className?: string;
}

export function Spinner({
  size = 'md',
  color = 'primary',
  className = '',
}: SpinnerProps) {
  return (
    <div
      className={`${styles.spinner} ${styles[`spinner--${size}`]} ${
        styles[`spinner--${color}`]
      } ${className}`}
      role="status"
      aria-label="Loading">
      <span className={styles.spinnerText}>Loading...</span>
    </div>
  );
}
