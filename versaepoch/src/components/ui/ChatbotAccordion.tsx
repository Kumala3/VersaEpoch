'use client';
import { useState } from 'react';
import styles from '@/styles/ui/chatbotAccordion.module.scss';
import { ExpandIcon, CollapseIcon } from '@/components/ui/UIIcons';
import { motion, AnimatePresence } from 'motion/react';
import { FAQChatbot } from '@/data/chatgptData';

export function ChatbotAccordion({ title, answer }: FAQChatbot) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      overflow: 'hidden',
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className={styles.container}>
      <div onClick={toggleAccordion} className={styles.headerContainer}>
        <h6 className={styles.headerContainer__heading}>{title}</h6>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}>
          {isOpen ? (
            <ExpandIcon className={styles.headerContainer__icon} />
          ) : (
            <CollapseIcon className={styles.headerContainer__icon} />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            className={styles.openedContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            >
            {answer}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
