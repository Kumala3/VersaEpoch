'use client';

import styles from '@/styles/chatbotPageTimeline.module.scss';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Timeline } from '@/components/Timeline';
import { ChatbotFAQList } from '@/components/ui/ChatbotFAQList';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';
import { Spinner } from '@/components/ui/Spinner';
import { TimelineCardType, FAQChatbotType } from '@/types/Timeline';

export default function ChatgptPageTimeline() {
  const [timelineData, setTimelineData] = useState<TimelineCardType[]>([]);
  const [faqData, setFaqData] = useState<FAQChatbotType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient();

        const { data: timelineData, error: timelineError } = await supabase
          .from('timeline_cards')
          .select('*')
          .eq('chatbot', 'chatgpt');

        const { data: faqData, error: faqDataError } = await supabase
          .from('faq_chatbots')
          .select('*')
          .eq('chatbot', 'chatgpt');

        if (timelineError || faqDataError) {
          setError(
            'Something went wrong. Please contact us to get everything to work 🙏'
          );
          return;
        }

        setFaqData(faqData);
        setTimelineData(timelineData);
      } catch {
        setError('Something went wrong. Please contact us to get everything to work 🙏')
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h3>{error}</h3>;
  }

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
        <Spinner />
      </div>
    );
  }

  if (isMobile) {
    return (
      <MobileInDevelopmentNotice
        groupId="157650217563325771"
        signup_source="timelines/chatgpt"
      />
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>ChatGPT Evolution Timeline</h2>
      <p className={styles.introductionText}>
        ChatGPT, OpenAI’s AI chatbot, has taken the world by storm since its
        launch in November 2022. What started as a tool to supercharge
        productivity through writing essays & code with short text prompts has
        evolved into a behemoth with 500 million weekly active users as of April
        2025. These years were absolutely insane for OpenAI, from its
        partnership with Apple for its generative AI offering, Apple
        Intelligence, the release of GPT-4o with voice capabilities, and the
        highly-anticipated launch of its text-to-video model Sora.
        <br></br>Below, you’ll find{' '}
        <span className={styles.highlightedText}>THE MOST Comprehensive</span>{' '}
        timeline of ChatGPT evolution covering{' '}
        <span className={styles.highlightedText2}>product updates</span>,{' '}
        <span className={styles.highlightedText2}>model releases</span>,
        <span className={styles.highlightedText2}>features</span>{' '}
        <span className={styles.highlightedText2}>features</span>{' '}
        <span className={styles.highlightedText2}>milestones</span> collected
        from OpenAI&apos;s official release notes, Wikipedia and top-independent
        sources.
        <br></br>If you have any other questions, check out the ChatGPT FAQ
        below the timeline.
      </p>

      {/* TODO: Pull last updated on stat from Supabase
        based on last table activity
      */}
      <Timeline
        chatbot="chatgpt"
        lastUpdatedOn={'June 19, 2025'}
        timelineCards={timelineData || []}
      />

      <ChatbotFAQList elements={faqData || []} />
    </div>
  );
}
