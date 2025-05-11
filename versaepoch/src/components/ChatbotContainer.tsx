import styles from '@/styles/chatbotContainer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { RightArrowIcon } from '@/components/ui/RightArrowIcon';

interface ChatbotContainerProps {
  title: string;
  description: string;
}

export function ChatbotContainer({
  title,
  description,
}: ChatbotContainerProps) {
  const altText = (title: string) => {
    switch (title) {
      case 'ChatGPT':
        return 'ChatGPT';
      case 'Claude':
        return 'Claude';
      case 'Gemini':
        return 'Gemini';
      default:
        return 'ChatGPT';
    }
  };

  const imageLink = (title: string) => {
    switch (title) {
      case 'ChatGPT':
        return '/chatgpt.jpg';
      case 'Claude':
        return '/claude.jpg';
      case 'Gemini':
        return '/gemini.jpg';
      default:
        return '/chatgpt.jpg';
    }
  };

  return (
    <Link
      href={`/timeline/${title.toLowerCase()}`}
      className={styles.container}>
      <Image
        width={100}
        height={100}
        src={imageLink(title)}
        alt={altText(title)}
        className={styles.featuredImage}
      />
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
      <button className={styles.exploreButton}>
        Explore <RightArrowIcon className={styles.buttonIcon}/>{' '}
      </button>
      </div>
    </Link>
  );
}
