'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/navAccordion.module.scss';

interface NavAccordionElemProps {
  title: string;
  href: string;
}

interface NavAccordionProps {
  title: string;
  elements: NavAccordionElemProps[];
}

export function NavAccordion({ title, elements }: NavAccordionProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openAccordion = () => {
    setIsOpened(true);
  };
  const closeAccordion = () => {
    setIsOpened(false);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {!isOpened ? (
          <Image
            width={100}
            height={100}
            src={'/expand-icon.svg'}
            alt="Expand Icon"
            onClick={() => openAccordion()}
            className={styles.expandIcon}
          />
        ) : (
          <Image
            width={100}
            height={100}
            src={'/collapse-icon.svg'}
            alt="Collapse Icon"
            onClick={() => closeAccordion()}
            className={styles.collapseIcon}
          />
        )}
      </div>

      {/* Dropdown List */}
      {isOpened && (
        <div className={styles.dropdownList}>
          {elements.map((element, index) => (
            <Link key={index} href={element.href} className={styles.dropdownElement}>
              {/* TODO: Icon for each chatbot here */}
              {element.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
