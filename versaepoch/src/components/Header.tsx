'use client';

import Image from 'next/image';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavElement } from '@/components/ui/NavElement';
import { NavDropdown } from '@/components/ui/NavDropdown';
import { GitHubButton } from '@/components/GitHubButton';
import { NavAccordion } from '@/components/ui/NavAccordion';

export function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpened]);

  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logoContainer}>
        <Image
          width={200}
          height={200}
          src={'/horizontal_logo.png'}
          alt="Header Logo"
          className={styles.logo}
        />
      </Link>

      {/* Navigation Menu */}
      <nav className={styles.navMenuContainer}>
        <NavDropdown
          title="Timelines"
          elements={[
            { title: 'ChatGPT', href: '/timelines/chatgpt' },
            { title: 'Claude', href: '/timelines/claude' },
            { title: 'Gemini', href: '/timelines/gemini' },
          ]}
        />
        <NavElement name="LLMs Directory" href="/llms-directory" />
        <NavElement name="Prompts Directory" href="/prompts-directory" />
      </nav>

      {!isMenuOpened && (
        <Image
          width={42}
          height={42}
          src={'/menu-icon.svg'}
          alt="Menu Icon"
          className={styles.menuIcon}
          onClick={openMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpened && (
        <div className={styles.navContainerMobile}>
          {/* Close Menu Button */}
          <Image
            width={100}
            height={100}
            src={'/close-icon.svg'}
            alt="Close Icon"
            onClick={() => closeMenu()}
            className={styles.closeButton}
          />
          <nav className={styles.navMenuMobile}>
            <NavAccordion
              title="Timelines"
              onClick={closeMenu}
              elements={[
                { title: 'ChatGPT', href: '/timelines/chatgpt' },
                { title: 'Claude', href: '/timelines/claude' },
                { title: 'Gemini', href: '/timelines/gemini' },
              ]}
            />
            <NavElement
              name="LLMs Directory"
              href="llms-directory"
              onClick={closeMenu}
            />
            <NavElement
              name="Prompts Directory"
              href="prompts-directory"
              onClick={closeMenu}
            />
          </nav>
          <GitHubButton />
        </div>
      )}

      <div className={styles.rightSection}>
        <GitHubButton />
      </div>
    </div>
  );
}
