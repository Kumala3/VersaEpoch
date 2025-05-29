import Link from 'next/link';
import styles from '@/styles/sourceElem.module.scss';
import { Source } from '@/data/chatgptData';

export function SourceElem({ title, url }: Source) {
  return (
    <Link href={url} className={styles.container}>
      {title}
    </Link>
  );
}
