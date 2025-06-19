'use client';

import { UnderDevelopment } from '@/components/UnderDevelopment';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';

export default function Contact() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileInDevelopmentNotice
        groupId="157650217563325771"
        signup_source="contact"
      />
    );
  }

  return (
    <div>
      <UnderDevelopment />
    </div>
  );
}
