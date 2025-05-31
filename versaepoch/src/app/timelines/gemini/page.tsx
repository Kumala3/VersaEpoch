import styles from '@/styles/chatbotPageTimeline.module.scss';
import { createClient } from '@/utils/supabase/server';
import { Timeline } from '@/components/Timeline';
import { ChatbotFAQList } from '@/components/ui/ChatbotFAQList';

export default async function GeminiTimelinePage() {
  const supabase = await createClient();

  const { data: timelineCards, error: timelineCardsError } = await supabase
    .from('timeline_cards')
    .select('*')
    .eq('chatbot', 'gemini');

  const { data: faqData, error: faqDataError } = await supabase
    .from('faq_chatbots')
    .select('*')
    .eq('chatbot', 'gemini');

  if (timelineCardsError) {
    console.log(
      `There was an error fetching timelineCards data: ${timelineCardsError}`
    );
  } else if (faqDataError) {
    console.log(
      `There was an error fetching faq elements data: ${JSON.stringify(
        faqDataError,
        null,
        4
      )}`
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Gemini Evolution Timeline</h2>
      <p className={styles.introductionText}>
        Gemini (formerly Bard) is Google’s AI chatbot, with one of the largest
        context windows with up 2M token and 400 million monthly active users.
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
        chatbot="gemini"
        lastUpdatedOn="May 31, 2025"
        timelineCards={timelineCards || []}
      />

      <ChatbotFAQList elements={faqData || []} />
    </div>
  );
}
