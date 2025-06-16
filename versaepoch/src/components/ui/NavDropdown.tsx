'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/navDropdown.module.scss';
import {
  ChatgptIcon,
  ClaudeIcon,
  GeminiIcon,
  CircleArrowRightIcon,
} from '@/components/ui/UIIcons';

interface NavDropdownElement {
  title: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  elements: NavDropdownElement[];
}

export function NavDropdown({ title, elements }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('handleToggleDropdown func was called...');
    setIsOpen(!isOpen);
    console.log(`is dropdown open: ${isOpen}`);
  };

  const getChatbotIcon = (title: string) => {
    switch (title.toLocaleLowerCase()) {
      case 'chatgpt':
        return <ChatgptIcon className={styles.dropdownElement__icon} />;
      case 'claude':
        return <ClaudeIcon className={styles.dropdownElement__icon} />;
      case 'gemini':
        return <GeminiIcon className={styles.dropdownElement__icon} />;
      default:
        return;
    }
  };

  useEffect(() => {
    // Only add event listener when dropdown is opened
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        (dropdownRef.current &&
          !dropdownRef.current.contains(target) &&
          containerRef,
        !containerRef.current?.contains(target))
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onClick={handleToggleDropdown}>
      {title}

      {isOpen && (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
          {elements.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              prefetch={true}
              className={styles.dropdownElement}>
              <div className={styles.dropdownElement__leftContainer}>
                {getChatbotIcon(item.title)}
                {item.title}
              </div>
              <CircleArrowRightIcon
                className={styles.dropdownElement__arrowIcon}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
