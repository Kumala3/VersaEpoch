'use client';

import styles from '@/styles/llmDetailsPage.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Spinner } from '@/components/ui/Spinner';
import Link from 'next/link';
import { CircleArrowRightIcon } from '@/components/ui/UIIcons';

interface ModelData {
  id: string;
  model_name: string;
  company: string;
  shortDescription: string;
}

export default function LLMDetailsPage() {
  const [modelData, setModelData] = useState<ModelData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const params = useParams();

  useEffect(() => {
    const storedData = sessionStorage.getItem('modelData');

    if (storedData) {
      setModelData(JSON.parse(storedData));
      sessionStorage.removeItem('modelData');
      setLoading(false);
    } else {
      fetchModelBySlug(params.slug as string);
    }
  }, [params.slug]);

  const fetchModelBySlug = async (slug: string) => {
    console.log(`Received slug in fetchModelBySlug func: ${slug}`);
    try {
      const response = await fetch('/api/llm-by-slug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modelName: slug }),
      });

      const data = await response.json();
      console.log(`Data in fetchModelBySlug func: ${JSON.stringify(data)}`);

      if (data.success) {
        setModelData(data.modelData);
      } else {
        console.log(`Setting error because data not successful`);
        setError(data.errorMessage);
        setLoading(false);
        return;
      }
    } catch {
      setError('Failed to fetch model by slug');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h3>{error}</h3>
        <div className={styles.navigationPanel}>
          <Link href={'/llms-directory'} className={styles.navigateButton}>
            LLMs Directory
            <CircleArrowRightIcon
              className={styles.navigateButton__icon}
              color="#fff"
            />
          </Link>
          <Link href={'/llms'} className={styles.navigateButton}>
            LLMs Space
            <CircleArrowRightIcon
              className={styles.navigateButton__icon}
              color="#fff"
            />
          </Link>
        </div>
        <div>
          <p className={styles.errorContainerNoticeText}>
            Please make sure you meant correct model.
          </p>
          <p>
            If not, click on one of the buttons above to view the LLMs you are
            looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.metadataContainer}>
        <h2>{modelData?.model_name}</h2>
        <p>{modelData?.company}</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
