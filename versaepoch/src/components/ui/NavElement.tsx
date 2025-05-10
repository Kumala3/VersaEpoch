import Link from 'next/link';
import styles from '@/styles/navElement.module.scss';

interface NavElementProps {
  name: string;
  href: string;
}

export function NavElement({ name, href }: NavElementProps) {
  return (
    <Link href={href} className={styles.container}>
      {name}
    </Link>
  );
}
