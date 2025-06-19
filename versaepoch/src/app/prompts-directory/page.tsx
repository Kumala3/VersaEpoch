'use client';

import styles from '@/styles/promptsDirectoryPage.module.scss';
import { UnderDevelopment } from '@/components/UnderDevelopment';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';

export default function PromptsDirectoryPage() {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <MobileInDevelopmentNotice />
    )
  }

  return (
    <div className={styles.container}>
      <UnderDevelopment />
    </div>
  );
}
