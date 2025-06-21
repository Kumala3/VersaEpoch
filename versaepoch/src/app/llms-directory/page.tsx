'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/llmsDirectoryPage.module.scss';
import { createClient } from '@/utils/supabase/client';
import { LLMsDataTable } from '@/components/LLMsDataTable';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileInDevelopmentNotice } from '@/components/MobileInDevelopmentNotice';
import { Spinner } from '@/components/ui/Spinner';
import { LLMModel } from '@/components/LlmsDirectoryColumns';

export default function LLMsDirectoryPage() {
  const [tableData, setTableData] = useState<LLMModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient();

        const { data, error } = await supabase
          .from('llms_directory')
          .select('*')
          .order('company', { ascending: false })
          .order('model_name', { ascending: false });

        if (error) {
          setError(error.message);
          return;
        }

        setTableData(data);
      } catch {
        setError('Something unexpected happened. Please contact us to troubleshoot issues');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <h1>
        Something unexpected happened. Please contact us to troubleshoot issues
      </h1>
    );
  }

  if (loading) {
    return (
      <div className={styles.containerLoading}>
        <Spinner className={styles.loadingSpinner} />
        <h4 className={styles.loadingTitle}>Loading LLMs Directory</h4>
      </div>
    );
  }

  if (isMobile) {
    return (
      <MobileInDevelopmentNotice
        groupId={'157650217563325771'}
        signup_source="llms_directory"
      />
    );
  }

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroSection__heading}>
          <span className={styles.heroSection__highlightedText}>Discover</span>{' '}
          most Interesting LLMs
        </h1>
        <p className={styles.heroSection__description}>
          LLMs Directory allows you to dive into exploration of LLMs (Large
          Language Models) to find the one that achieves your goal the best or
          just see what is available out there and experiment!
        </p>
      </section>
      {/* Explanation Section */}
      <LLMsDataTable data={tableData} />
    </div>
  );
}
