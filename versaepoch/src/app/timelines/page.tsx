'use client';

import styles from '@/styles/timelinesPage.module.scss';
import { ChatbotContainer } from '@/components/ChatbotContainer';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';

export default function TimelinesPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileInDevelopmentNotice groupId='157650217563325771' signup_source="timelines" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h3 className={styles.heroSection__headline}>
          Explore the Evolution of ChatGPT, Claude, Gemini
        </h3>
        {/* TODO: DEMO Video of ChatGPT/Claude/Gemini Timelines
            box-shadow to be more prominent
        */}
      </div>

      <div className={styles.chatbotsContainer}>
        <h4 className={styles.chatbotsContainer__headline}>
          Choose the chatbot you want to dive in first:
        </h4>
        <div className={styles.chatbotsContainer__grid}>
          <ChatbotContainer
            title="ChatGPT"
            description="ChatGPT is the most popular chatbot used by over 500+ million
                  users week to week."
          />
          <ChatbotContainer
            title="Claude"
            description="Claude is the most popular chatbot for coding, creative
                  writing, brainstorming by over 15+ million users week to week."
          />
          <ChatbotContainer
            title="Gemini"
            description="Gemini is closely integrated into Google Products, offers many
                  free models, staggering context window of over 1M tokens and
                  is used by over 100 million users week to week."
          />
        </div>
      </div>
    </div>
  );
}
