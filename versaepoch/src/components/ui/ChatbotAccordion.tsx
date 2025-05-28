"use client";
import { useState } from "react";
import styles from '@/styles/ui/chatbotAccordion.module.scss';
import { ExpandIcon, CollapseIcon } from "@/components/ui/UIIcons";

export interface ChatbotAccordionProps {
  title: string;
  content: string;
}

export function ChatbotAccordion({ title, content }: ChatbotAccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openContainer = () => {
    setIsOpen(true);
  }

  const closeContainer = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      {!isOpen ? (
        <div onClick={openContainer} className={styles.headerContainer}>
          <h6 className={styles.headerContainer__heading}>{title}</h6>
          <ExpandIcon className={styles.headerContainer__icon} />
        </div>
      ) : (
        <div onClick={closeContainer} className={styles.headerContainer}>
          <h6 className={styles.headerContainer__heading}>{title}</h6>
          <CollapseIcon className={styles.headerContainer__icon} />
        </div>
      )}

      {isOpen && (
        <section className={styles.openedContainer}>{content}</section>
      )}
    </div>
  );
}
