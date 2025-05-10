'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/navDropdown.module.scss';

interface NavDropdownElement {
  title: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  elements: NavDropdownElement[];
}

export function NavDropdown({ title, elements }: NavDropdownProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {title}

      {isHovered && (
        <div className={styles.dropdownContainer}>
          {elements.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={styles.dropdownElement}>
              {/* Add Icon to each ChatBot */}
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
