import { ChatbotAccordion } from '@/components/ui/ChatbotAccordion';
import styles from '@/styles/ui/chatbotFAQList.module.scss';
import { FAQChatbotType } from '@/types/Timeline';

interface ChatbotFAQListProps {
  elements: FAQChatbotType[] | [];
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

      {elements.length > 0 ? (
        <div className={styles.faqList}>
          {elements?.map((item) => (
            <div key={item.title}>
              <ChatbotAccordion title={item.title} answer={item.answer} />
            </div>
          ))}
        </div>
      ) : (
        <div>No elements to display...</div>
      )}
    </div>
  );
}
