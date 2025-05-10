import Image from 'next/image';
import styles from '@/styles/homePage.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h2>Dive into exploring the evolution of ChatGPT, Claude, Gemini</h2>
        {/* CTA Button */}
      </div>
    </div>
  );
}
