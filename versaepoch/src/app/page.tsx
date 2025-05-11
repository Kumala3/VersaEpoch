'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/homePage.module.scss';
import { CTAButton } from '@/components/ui/CTAButton';
import { CloseIcon } from '@/components/ui/CloseIcon';
import { ChatbotContainer } from '@/components/ChatbotContainer';

export default function Home() {
  const [isChatbotExploreModalOpened, setIsChatbotExploreModalOpened] =
    useState<boolean>(false);

  const openChatbotExploreModal = () => {
    console.log('chatbotExploreModal opened!');
    setIsChatbotExploreModalOpened(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h2 className={styles.heroHeading}>
          Dive into exploring the evolution of{' '}
          <div className={styles.animatedText}>
            <span className={styles.boldText}>ChatGPT</span>
            ↓
            <span className={styles.boldText}>Claude</span>
            ↓
            <span className={styles.boldText}>Gemini</span>
          </div>
        </h2>
        {/* CTA Button */}
        <CTAButton
          title="Start Exploration"
          onClick={openChatbotExploreModal}
        />
      </div>

      {/* Modal */}
      {isChatbotExploreModalOpened && (
        <div className={styles.modalBackdrop}>
          <div className={styles.chatbotExploreModalContainer}>
            <button
              className={styles.closeButton}
              onClick={() => setIsChatbotExploreModalOpened(false)}
              aria-label="Close">
              <CloseIcon />
            </button>
            <div className={styles.headingText}>
              <h4 className={styles.chatbotModalTitle}>
                Choose Chatbot&#39;s Evolution you would like to explore:
              </h4>
              <h5 className={styles.chatbotModalSubtitle}>
                Only 0.01% know their evolution & thrive in the AI Era.
              </h5>
              <h2 className={styles.prominentText}>Be 0.01%</h2>
            </div>
            <div className={styles.chatbotExploreGrid}>
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
      )}

      {/* ChatGPT Timeline with main features overview Section */}
      <div className={styles.timelineOverviewContainer}></div>

      {/* Chatbots Timeline Grid 3x1 */}
      <div className={styles.chatbotTimelinesContainer}></div>

      {/* LLMs Directory Section */}
      <div className={styles.llmsDirectoryContainer}></div>

      {/* GenAI UseCases Section */}
      <div className={styles.genAIUseCasesContainer}></div>
    </div>
  );
}
