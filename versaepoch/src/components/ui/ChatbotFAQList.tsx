import {
  ChatbotAccordion,
  ChatbotAccordionProps,
} from '@/components/ui/ChatbotAccordion';
import styles from '@/styles/ui/chatbotFAQList.module.scss';

interface ChatbotFAQListProps {
  elements: ChatbotAccordionProps[];
}

export function ChatbotFAQList({ elements }: ChatbotFAQListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h4 className={styles.headline}>FAQ (Frequently Asked Questions)</h4>
        <h6 className={styles.subHeadline}>
          Find answers on your questions right below:
        </h6>
      </div>

      <div className={styles.faqList}>
        {elements?.map((item) => (
          <div key={item.title}>
            <ChatbotAccordion title={item.title} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
