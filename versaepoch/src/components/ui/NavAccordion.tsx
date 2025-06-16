'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/navAccordion.module.scss';
import { ExpandIcon, CollapseIcon } from '@/components/ui/UIIcons';

interface NavAccordionElemProps {
  title: string;
  href: string;
}

interface NavAccordionProps {
  title: string;
  elements: NavAccordionElemProps[];
  onClick: () => void;
}

export function NavAccordion({ title, elements, onClick }: NavAccordionProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleAccordion = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container} onClick={handleToggleAccordion}>
        <p className={styles.title}>{title}</p>
        {!isOpened ? (
          <ExpandIcon className={styles.icon} />
        ) : (
          <CollapseIcon className={styles.icon} />
        )}
      </div>

      {/* Dropdown List */}
      {isOpened && (
        <div className={styles.dropdownList}>
          {elements.map((element, index) => (
            <Link
              key={index}
              href={element.href}
              className={styles.dropdownElement}
              prefetch={true}
              onClick={onClick}>
              {/* TODO: Add icon for each chatbot  */}
              {element.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
