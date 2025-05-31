import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import styles from '@/styles/timelineCardPage.module.scss';
import { useParams } from 'next/navigation';

export default async function TimelineCardPage() {
  const supabase = createClient();
  // const params = useParams();
  // const { slug } = params;

  // Extract ID from the end of slug
  // const lastDashIndex = (slug as string).lastIndexOf('-');
  // const cardId = (slug as string).substring(lastDashIndex + 1); // +1 erases '-'

  const { data, error } = await supabase.from("").select("*");

  if (error) {
    console.log(`There was an error fetching the card Data: ${data}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image
          src={data.bannerImage}
          alt="BannerImage"
          width={100}
          height={100}
          className={styles.bannerImage}
        />
        <h2 className={styles.topContainer__heading}>{data.title}</h2>
      </div>
      <p className={styles.propertiesContainer}>
        <p>{data.date}</p>
        <div>
          {data.type.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </p>
    </div>
  );
}
