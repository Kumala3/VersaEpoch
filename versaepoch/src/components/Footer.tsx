import styles from '@/styles/footer.module.scss';
import { NavElement } from '@/components/ui/NavElement';
import { NavDropdown } from '@/components/ui/NavDropdown';
import { GitHubButton } from './GitHubButton';

export function Footer() {
  return (
    <div className={styles.container}>
      {/* Navigation Section */}
      <div className={styles.sections}>
        {/* Other Section */}
        <div className={styles.otherSection}>
          <div className={styles.sectionElements}>
            <span className={styles.slogan}>
              The only wealth that expands when shared is{' '}
              <strong>KNOWLEDGE</strong>
            </span>
            <GitHubButton />
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionLabel}>Navigation</h4>
          <div className={styles.sectionElements}>
            <NavDropdown
              title="Timelines"
              elements={[
                { title: 'ChatGPT', href: '/chatgpt' },
                { title: 'Claude', href: '/claude' },
                { title: 'Gemini', href: '/gemini' },
              ]}
            />
            <NavElement name="LLMs Directory" href="llms-directory" />
            <NavElement name="Prompts Directory" href="prompts-directory" />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © All Rights Reserved 2025
      </div>
    </div>
  );
}
