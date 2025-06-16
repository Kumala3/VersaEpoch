import Link from 'next/link';
import styles from '@/styles/navElement.module.scss';

interface NavElementProps {
  name: string;
  href: string;
  onClick?: () => void;
}

export function NavElement({ name, href, onClick }: NavElementProps) {
  return (
    <Link href={href} className={styles.container} prefetch={true} onClick={onClick}>
      {name}
    </Link>
  );
}
