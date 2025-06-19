import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import styles from '@/styles/timelineCardFullPage.module.scss';
import Link from 'next/link';
import { Source } from '@/types/Timeline';
import { GlobalIcon } from '@/components/ui/UIIcons';
import { AnnouncementIcon } from '@/components/ui/TimelineCardsIcons';
import { capitalizeWord } from '@/utils/helperFunctions';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    chatbot: string;
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function TimelineCardPage({ params }: PageProps) {
  const { slug } = await params;

  {
    /* IMPORTANT: Add chatbot bg based on chatbot, adding depth */
  }

  // Extract ID from the end of slug
  const lastDashIndex = (slug as string).lastIndexOf('-');
  const cardId = (slug as string).substring(lastDashIndex + 1); // +1 erases '-'

  const supabase = await createClient();

  const { data: card, error } = await supabase
    .from('timeline_cards')
    .select('*')
    .eq('id', cardId)
    .single();

  const typeIcon = (type: string) => {
    switch (type) {
      case 'announcement':
        return <AnnouncementIcon className={styles.typeIcon} />;
      default:
        return <GlobalIcon className={styles.typeIcon} />;
    }
  };

  if (error || !card) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image
          src={card.banner_image}
          alt="BannerImage"
          width={100}
          height={100}
          className={styles.bannerImage}
        />
        <h2 className={styles.heading}>{card.title}</h2>
      </div>

      <div className={styles.metadataContainer}>
        <span className={styles.date}>{formatDate(card.date)}</span>

        <div className={styles.typesContainer}>
          {card.type.map((type: string) => (
            <div key={type} className={styles.typesContainer__type}>
              {capitalizeWord(type)} {typeIcon(type)}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.shortDescriptionContainer}>
        <h5 className={styles.shortDescriptionContainer__heading}>
          Short Description:
        </h5>
        <p className={styles.shortDescriptionContainer__content}>
          {card.short_description}
        </p>
      </div>

      <div className={styles.fullDescriptionContainer}>
        <h5 className={styles.fullDescriptionContainer__heading}>
          Full Description:
        </h5>{' '}
        <p className={styles.fullDescriptionContainer__content}>
          {card.full_description}
        </p>
      </div>

      <div className={styles.sourcesContainer}>
        <h5 className={styles.sourcesContainer__heading}>Sources:</h5>

        <div className={styles.sourcesContainer__sources}>
          {card.sources.map((source: Source) => (
            <Link
              key={source.title}
              href={source.url}
              className={styles.source}>
              {source.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
