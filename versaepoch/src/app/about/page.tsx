import styles from '@/styles/aboutPage.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>About VersaEpoch</h1>
        <div className={styles.problemStatement}>
          We don't chase AI Trends, We Provide{' '}
          <span className={styles.highlightedText}>Real Solutions</span> to Real  
          Problems of scattered, overwhelming information across thousands of
          official docs, Wikipedia, blogs, and fragmented AI resources.
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <div className={styles.missionCard}>
          <h2 className={styles.cardTitle}>Our Mission</h2>
          <p className={styles.cardContent}>
            VersaEpoch is a centralized hub to explore the evolution of ChatGPT,
            Claude, and Gemini through interactive timelines, learn about LLMs,
            practical use cases, and advanced prompting techniques.
          </p>
        </div>

        <div className={styles.audienceCard}>
          <h2 className={styles.cardTitle}>Who We Serve</h2>
          <div className={styles.audienceList}>
            <div className={styles.audienceItem}>🎓 Students</div>
            <div className={styles.audienceItem}>👨‍🏫 Educators</div>
            <div className={styles.audienceItem}>🤖 AI Enthusiasts</div>
            <div className={styles.audienceItem}>💼 Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
}
