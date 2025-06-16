'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/navDropdown.module.scss';
import {
  ChatgptIcon,
  ClaudeIcon,
  GeminiIcon,
  CircleArrowRightIcon,
} from '@/components/ui/UIIcons';
import { ChevronDownIcon } from '@/components/ui/UIIcons';
import { motion } from 'motion/react';

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

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
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

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={handleToggleDropdown}>
      <p className={styles.title}>{title}</p>
      <motion.div
        animate={{
          y: isOpen ? 4 : 0,
          scale: isOpen ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        <ChevronDownIcon className={styles.chevronIcon} />
      </motion.div>

      {/* Animated Dropdown */}
      {isOpen && (
        <motion.div
          className={styles.dropdownContainer}
          initial={{ opacity: 0, y: -10, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}>
          {elements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.35,
                type: 'spring',
                stiffness: 500,
                damping: 20,
              }}>
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
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
