import styles from '@/styles/ui/headerNavElement.module.scss';
import Link from 'next/link';

interface HeaderNavElementProps {
  title: string;
  href: string;
  onClick?: () => void;
}

export function HeaderNavElement({ title, href, onClick }: HeaderNavElementProps) {
  return (
    <Link href={href} className={styles.container} onClick={onClick}>
      {title}
    </Link>
  );
}
