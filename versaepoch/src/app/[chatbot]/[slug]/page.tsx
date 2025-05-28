'use client';

import Image from 'next/image';
import styles from '@/styles/timelineCardPage.module.scss';
import { useParams } from 'next/navigation';
import { timelineCards } from '@/data/chatgptData';

export default function TimelineCardPage() {
  const params = useParams();
  const { slug } = params;

  // Extract ID from the end of slug
  const lastDashIndex = (slug as string).lastIndexOf('-');
  const cardId = (slug as string).substring(lastDashIndex + 1); // +1 erases '-'

  const card = timelineCards.find((card) => card.id === cardId);

  {/* TODO: Supabase implementation!!! */}

  if (!card) {
    return <h2>Card not Found :(</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        {/* <Image
          src={bannerImage}
          alt="BannerImage"
          width={100}
          height={100}
          className={styles.bannerImage}
        />*/}
        <h2 className={styles.topContainer__heading}>{card.title}</h2>
      </div>
      <p className={styles.propertiesContainer}>
        <p>{card.date}</p>
        <div>
          {card.type.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </p>
    </div>
  );
}
