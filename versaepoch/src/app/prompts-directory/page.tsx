'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/promptsDirectoryPage.module.scss';
import { PromptsDirectoryTable } from '@/components/PromptsDirectoryTable';
import { PromptData } from '@/components/PromptsDirectoryColumns';
import { createClient } from '@/utils/supabase/client';
import { Spinner } from '@/components/ui/Spinner';

export default function PromptsDirectoryPage() {
  const [tableData, setTableData] = useState<PromptData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient();

        const { data, error } = await supabase
          .from('prompts_directory')
          .select('id, title, description, prompt, tags');

        console.log(`Data: ${JSON.stringify(data)}`);

        if (error) {
          setError(error.message);
          return;
        }

        setTableData(data);
      } catch {
        setError(
          'Something unexpected happened. Please contact us to troubleshoot issues'
        );
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

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroSection__heading}>Prompts Directory</h1>
        <p className={styles.heroSection__description}>
          A top-notch best AI prompts for ChatGPT, Claude, Gemini. 100+ curated
          prompts to get the most out of AI and revolutionize your life with
          focus and productivity like never before.
        </p>
      </section>
      <PromptsDirectoryTable data={tableData} />
      {/* List of prompts, not only table */}
    </div>
  );
}
