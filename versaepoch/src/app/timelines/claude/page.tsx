'use client';

import styles from '@/styles/chatbotPageTimeline.module.scss';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Timeline } from '@/components/Timeline';
import { ChatbotFAQList } from '@/components/ui/ChatbotFAQList';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';
import { Spinner } from '@/components/ui/Spinner';
import { TimelineCardType, FAQChatbotType } from '@/types/Timeline';

export default function ClaudeTimeline() {
  const [timelineData, setTimelineData] = useState<TimelineCardType[]>([]);
  const [faqData, setFaqData] = useState<FAQChatbotType[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient();

        const { data: timelineData, error: timelineError } = await supabase
          .from('timeline_cards')
          .select('*')
          .eq('chatbot', 'claude');
        const { data: faqData, error: faqDataError } = await supabase
          .from('faq_chatbots')
          .select('*')
          .eq('chatbot', 'claude');

        if (timelineError || faqDataError) {
          setError('Something went wrong. Please contact us to get everything to work 🙏');
          return;
        }

        setFaqData(faqData || []);
        setTimelineData(timelineData || []);
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
        signup_source="timelines/claude"
      />
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Claude Evolution Timeline</h2>
      <p className={styles.introductionText}>
        Claude, Anthropic’s AI chatbot, is one of the aggressive rival to
        ChatGPT thriving in developing best models for coding. What started as a
        general AI Assistant soon evolved into the best coding models in the
        world.
        <br></br>Below, you’ll find{' '}
        <span className={styles.highlightedText}>THE MOST Comprehensive</span>{' '}
        timeline of ChatGPT evolution on the market covering{' '}
        <span className={styles.highlightedText2}>product updates</span>,{' '}
        <span className={styles.highlightedText2}>model releases</span>,
        <span className={styles.highlightedText2}>features</span> &{' '}
        <span className={styles.highlightedText2}>milestones</span> collected
        from OpenAI&apos;s official release notes, Wikipedia and top-independent
        sources.
        <br></br>If you have any other questions, check out the Claude FAQ below
        the timeline.
      </p>

      <Timeline
        lastUpdatedOn="June 19, 2025"
        chatbot="claude"
        timelineCards={timelineData || []}
      />

      <ChatbotFAQList elements={faqData || []} />
    </div>
  );
}
