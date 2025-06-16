import styles from '@/styles/footer.module.scss';
import { NavElement } from '@/components/ui/NavElement';
import { GitHubIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        {/* Features Section */}
        <div className={styles.section}>
          <h4 className={styles.section__label}>Features</h4>
          <div className={styles.sectionElements}>
            <NavElement name="Chatbots Evolution" href="/timelines" />
            <NavElement name="LLMs Directory" href="/llms-directory" />
            <NavElement name="Prompts Directory" href="/prompts-directory" />
          </div>
        </div>

        {/* Support Section */}
        <div className={styles.section}>
          <h4 className={styles.section__label}>Support</h4>
          <div className={styles.sectionElements}>
            <NavElement name="Contact VersaEpoch" href="/contact" />
          </div>
        </div>

        {/* Company Section */}
        <div className={styles.section}>
          <h4 className={styles.section__label}>About Us</h4>
          <div className={styles.sectionElements}>
            <NavElement name="About" href="/about" />
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className={styles.bottomContainer}>
        <div className={styles.infoContainer}>
          © VersaEpoch 2025
          <p className={styles.builtBySection}>
            Built by Kostiantyn Sytnyk with{' '}
            <span className={styles.passionWord}>passion</span> for technology
          </p>
        </div>
        <nav className={styles.socialMediaLinks}>
          <ul>
            <li>
              <GitHubIcon
                link="https://github.com/Kumala3/VersaEpoch"
                className={styles.socialMediaIcon}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
