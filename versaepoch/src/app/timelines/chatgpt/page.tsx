import styles from '@/styles/chatgptPageTimeline.module.scss';
import { Timeline } from '@/components/Timeline';
import { TimelineNavigationPanel } from '@/components/TimelineNavigationPanel';

export default function ChatGPTPageTimeline() {
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
        timeline of ChatGPT evolution on the market covering{' '}
        <span className={styles.highlightedText2}>product updates</span>,{' '}
        <span className={styles.highlightedText2}>model releases</span>,
        <span className={styles.highlightedText2}>features</span> & {' '}
        <span className={styles.highlightedText2}>milestones</span> collected
        from OpenAI&apos;s official release notes, Wikipedia and top-independent
        sources.
        <br></br>If you have any other questions, check out the ChatGPT FAQ
        below the timeline.
      </p>
      {/* TODO: Replace with fetching data when backend is implemented */}
      <Timeline />
    </div>
  );
}
