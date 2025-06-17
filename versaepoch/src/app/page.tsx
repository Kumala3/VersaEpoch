'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/homePage.module.scss';
import { CTAButton } from '@/components/ui/CTAButton';
import { CloseIcon } from '@/components/ui/CloseIcon';
import { ChatbotContainer } from '@/components/ChatbotContainer';
import Image from 'next/image';
import Link from 'next/link';
import { FeatureShowcaseVideo } from '@/components/ui/FeatureShowcaseVideo';

export default function HomePage() {
  const [isChatbotExploreModalOpened, setIsChatbotExploreModalOpened] =
    useState<boolean>(false);
  const router = useRouter();

  const openChatbotExploreModal = () => {
    setIsChatbotExploreModalOpened(true);
  };

  const redirectTo = (href: string) => {
    router.push(href);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        {/* Problem statement */}
        <div className={styles.problemStatement}>
          <h1 className={styles.problemStatement__headline}>
            Stop Wasting Hours Searching for
          </h1>
          <span className={styles.problemStatement__highlight}>
            Scattered AI Information
          </span>
          <p className={styles.problemStatement__description}>
            Tired of jumping between countless docs, forums, blogs to understand
            ChatGPT, Claude, Gemini?
            <span>
              {' '}
              <strong>We centralize all important</strong> so You can focus on
              what matters
            </span>
          </p>
        </div>

        {/* Solution Preview */}
        <div className={styles.solutionPreview}>
          <h2 className={styles.solutionPreview__headline}>Get Complete Chatbot Evolution Timelines in One Place</h2>
          <div className={styles.solutionPreview__features}>
            <Link href={"/timelines"} prefetch={true} className={styles.featureItem}>
              <span className={styles.featureItem__icon}>📈</span>
              <span className={styles.featureItem__text}>
                Explore evolution of ChatGPT, Claude, Gemini through{' '}
                <strong>Detailed, Interactive Timelines</strong>
              </span>
            </Link>
            <Link href={"/llms-directory"} prefetch={true} className={styles.featureItem}>
              <span className={styles.featureItem__icon}>🤖</span>
              <span className={styles.featureItem__text}>
                Find exact AI Model you need with{' '}
                <strong>LLMs Directory</strong>
              </span>
            </Link>
            <Link href={"/prompts-directory"} prefetch={true} className={styles.featureItem}>
              <span className={styles.featureItem__icon}>💡</span>
              <span className={styles.featureItem__text}>
                Explore full possibilities of LLMs with{' '}
                <strong>Prompts Directory</strong> (300+ ready-to-use prompts)
              </span>
            </Link>
          </div>
        </div>
        {/* CTA Button */}
        <CTAButton
          title="Start Your AI Exploration Now"
          onClick={openChatbotExploreModal}
          className={styles.heroSection__ctaButton}
        />
      </div>

      {/* Chatbot Timelines Modal */}
      {isChatbotExploreModalOpened && (
        <div className={styles.modalBackdrop}>
          <div className={styles.chatbotExploreModalContainer}>
            <button
              className={styles.chatbotExploreModalContainer__closeButton}
              onClick={() => setIsChatbotExploreModalOpened(false)}
              aria-label="Close">
              <CloseIcon />
            </button>
            <div className={styles.chatbotExploreModalContainer__textContainer}>
              <h4 className={styles.chatbotExploreModalContainer__title}>
                Choose Chatbot&#39;s Evolution you would like to explore:
              </h4>
              <h5 className={styles.chatbotExploreModalContainer__subtitle}>
                Only 0.01% know their evolution & thrive in the AI Era.
              </h5>
              <h2
                className={styles.chatbotExploreModalContainer__prominentText}>
                Be 0.01%
              </h2>
            </div>
            <div className={styles.chatbotExploreModalContainer__grid}>
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
      <div className={styles.timelineOverviewContainer}>
        <h2 className={styles.timelineOverviewContainer__headline}>
          Detailed, Interactive, Rich Timelines
        </h2>
        <div
          className={styles.timelineOverviewContainer__mainFeaturesContainer}>
          <FeatureShowcaseVideo
            videoPath="/chatbot_timeline_overview.mp4"
            caption="Explore the evolution by viewing interactive elements ranging from models, features, releases up to new products. Learn more about a specific. View sources. Dig Deeper"
            posterImage=""
          />

          <div className={styles.timelineOverviewContainer__grid}>
            <FeatureShowcaseVideo
              title="Advanced Filtering"
              videoPath="/chatbot_timeline_filter_overview.mp4"
              caption="Filter the timeline to display exactly what you need: models, releases, updates, all is up to you!"
              posterImage=""
            />
            <FeatureShowcaseVideo
              title="Sorting"
              videoPath="/chatbot_timeline_sort_overview.mp4"
              caption="Sort the timeline cards by date to see exactly what you need in a few clicks!"
              posterImage=""
            />
          </div>
        </div>

        <div>
          <div className={styles.timelineOverviewContainer__ctaContainer}>
            <CTAButton
              title="Explore [NOW]"
              className={styles.timelineOverviewContainer__ctaButton}
              onClick={() => redirectTo('/timelines')}
            />
          </div>
        </div>
      </div>

      {/* LLMs Directory Section */}
      <div className={styles.llmsDirectoryContainer}>
        <FeatureShowcaseVideo
          title="LLMs Directory"
          videoPath="/llms_directory_overview.mp4"
          caption="Discover 30+ LLMs from OpenAI, Anthropic, Google. Make fast,
            informal decision of what LLMs is best suited for your use case"
          posterImage=""
        />

        <div className={styles.llmsDirectoryContainer__ctaContainer}>
          <CTAButton
            title="Explore"
            className={styles.llmsDirectoryContainer__ctaButton}
            onClick={() => redirectTo('/llms-directory')}
          />
        </div>
      </div>

      {/* GenAI UseCases Section */}
      {/*
      <div className={styles.genAIUseCasesDirectoryContainer}>
        <h3 className={styles.genAIUseCasesDirectoryContainer__headline}>
          GenAI UseCases Directory
        </h3>
        <div
          className={styles.genAIUseCasesDirectoryContainer__showcaseContainer}>
          <p className={styles.genAIUseCasesDirectoryContainer__description}>
            Discover 50+ GenAI Use Cases & Learn how to use them
          </p>
          <Image
            width={200}
            height={200}
            src={'/placeholderImage.png'}
            // src={'/genAIUseCasesDirectoryFeaturedImage.png'}
            alt="GenAI UseCases Directory Featured Image"
            className={styles.genAIUseCasesDirectoryContainer__featuredImage}
          />
        </div>
        <div className={styles.genAIUseCasesDirectoryContainer__ctaContainer}>
          <CTAButton
            title="Explore"
            className={styles.genAIUseCasesDirectoryContainer__ctaButton}
            onClick={() => redirectTo('/genai-use-cases-directory')}
          />
        </div>
      </div>
      */}

      <div className={styles.promptsDirectoryContainer}>
        <h3 className={styles.promptsDirectoryContainer__headline}>
          Prompts Directory
        </h3>
        <div className={styles.promptsDirectoryContainer__showcaseContainer}>
          <p className={styles.promptsDirectoryContainer__description}>
            Discover 100+ Best Prompts across 15+ industries
          </p>
          <Image
            width={200}
            height={200}
            src={'/under_development.png'}
            // src={'/promptsDirectoryFeaturedImage.png'} /* Replace when feature is ready */
            alt="Prompts Directory Featured Image"
            className={styles.promptsDirectoryContainer__featuredImage}
          />
        </div>
        <div className={styles.promptsDirectoryContainer__ctaContainer}>
          <CTAButton
            title="Explore"
            className={styles.promptsDirectoryContainer__ctaButton}
            onClick={() => redirectTo('/prompts-directory')}
          />
        </div>
      </div>
    </div>
  );
}
