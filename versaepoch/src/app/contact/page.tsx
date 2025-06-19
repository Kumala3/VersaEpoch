'use client';

import { UnderDevelopment } from '@/components/UnderDevelopment';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';

export default function Contact() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileInDevelopmentNotice />;
  }

  return (
    <div>
      <UnderDevelopment />
    </div>
  );
}
