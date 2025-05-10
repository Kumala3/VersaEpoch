import Image from 'next/image';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import { NavElement } from '@/components/ui/NavElement';
import { NavDropdown } from '@/components/ui/NavDropdown';
import { GitHubButton } from '@/components/GitHubButton';

export function Header() {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logoContainer}>
        <Image
          width={200}
          height={200}
          src={'/header-logo.svg'}
          alt="Header Logo"
          className={styles.logo}
        />
      </Link>
      {/* Navigation Menu */}
      <nav className={styles.navMenu}>
        <NavDropdown
          title="Timelines"
          elements={[
            { title: 'ChatGPT', href: '/chatgpt' },
            { title: 'Claude', href: '/claude' },
            { title: 'Gemini', href: '/gemini' },
          ]}
        />
        <NavElement name="LLMs Directory" href="llms-directory" />
        <NavElement name="Prompts Directory" href="prompts-directory" />
      </nav>
      <div className={styles.rightSection}>
        <GitHubButton />
      </div>
    </div>
  );
}
