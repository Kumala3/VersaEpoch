import styles from '@/styles/chatbotPageTimeline.module.scss';
import { createClient } from '@/utils/supabase/server';
import { Timeline } from '@/components/Timeline';
import { ChatbotFAQList } from '@/components/ui/ChatbotFAQList';

export default async function ClaudeTimeline() {
  const supabase = await createClient();

  const { data: timelineCards, error: timelineDataError } = await supabase
    .from('timeline_cards')
    .select('*')
    .eq('chatbot', 'claude');

  const { data: faqData, error: faqDataError } = await supabase
    .from('faq_chatbots')
    .select('*')
    .eq('chatbot', 'claude');

  if (timelineDataError) {
    return (
      <h1>
        Something unexpected happened. Please contact us by opening an issue on
        GitHub
      </h1>
    );
  } else if (faqDataError) {
    return (
      <h1>
        Something unexpected happened. Please contact us by opening an issue on
        GitHub
      </h1>
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
        lastUpdatedOn="May 31, 2025"
        chatbot="claude"
        timelineCards={timelineCards || []}
      />

      <ChatbotFAQList elements={faqData || []} />
    </div>
  );
}
