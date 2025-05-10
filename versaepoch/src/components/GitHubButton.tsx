import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/githubButton.module.scss';

export function GitHubButton() {
  return (
    <Link
      href={'https://github.com/Kumala3/VersaEpoch'}
      className={styles.container}>
      GitHub
      <Image
        width={64}
        height={64}
        src={'/github-icon.svg'}
        alt="GitHub"
        className={styles.logo}
      />
    </Link>
  );
}
