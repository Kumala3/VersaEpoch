'use client';

import styles from '@/styles/mobileInDevelopmentNotice.module.scss';
import { useState } from 'react';
import { useMailerLiteSubscription } from '@/hooks/useMailerLiteSubscription';

interface MobileInDevelopmentNoticeProps {
  groupId?: string;
  signup_source?: string;
}

export function MobileInDevelopmentNotice({
  groupId,
  signup_source,
}: MobileInDevelopmentNoticeProps) {
  const [email, setEmail] = useState('');
  const { status, message, isLoading, errorType, subscribe } =
    useMailerLiteSubscription({
      groupId: groupId,
      signup_source: signup_source || 'mobile_development_notice',
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await subscribe(email);
    if (success) {
      setEmail('');
    }
  };

  const getErrorMessage = (message: string, errorType?: string) => {
    switch (errorType) {
      case 'EMAIL_ALREADY_EXISTS':
        return 'You are already subscribed! Check your inbox for exciting updates 🔥';
      case 'VALIDATION_ERROR':
        return 'There seems to be an issue with the group ID. Please contact support 👥';
      case 'NETWORK_ERROR':
        return 'Connection issue 📶 Please check your internet and try again 🙏';
      case 'MAILERLITE_ERROR':
        return 'MailerLite service is temporarily unavailable 😵‍💫 Please try again later 🙏';
      default:
        return message;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  if (status === 'success') {
    // Success content
    return (
      <div className={styles.successContainer}>
        <h4 className={styles.successTitle}>You’re In!</h4>
        <p className={styles.successText}>
          Thanks for signing up. You will be the first to hear from us!
        </p>
        <p>Keep an eye on your inbox – something exciting is coming 🚀</p>
        <p className={styles.successHighlightedText}>
          <strong>🤫 Pro Tip:</strong> Visit the desktop version of the website
          for the full experience.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {status === 'error' ? (
        <h5 className={styles.errorText}>
          {getErrorMessage(message, errorType)}
        </h5>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formInnerContainer}>
            <h2 className={styles.title}>
              🚀 Be the First to Know When We Launch!
            </h2>
            <p>
              Join our waitlist and be the first to access exclusive content,
              updates, and special offers.{' '}
            </p>
            <p>
              📬 No spam - only exciting news and new perks you&apos;ll love!
            </p>
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              className={styles.emailInput}
              disabled={isLoading}
              required></input>

            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className={styles.submitButton}>
              Get Early Access
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
