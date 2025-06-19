'use client';

import styles from '@/styles/promptsDirectoryPage.module.scss';
import { UnderDevelopment } from '@/components/UnderDevelopment';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';

export default function PromptsDirectoryPage() {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <MobileInDevelopmentNotice groupId='157650217563325771' signup_source="prompts-directory" />
    )
  }

  return (
    <div className={styles.container}>
      <UnderDevelopment />
    </div>
  );
}
