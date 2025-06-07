import styles from '@/styles/llmsDirectoryPage.module.scss';
import { createClient } from '@/utils/supabase/client';
import { DataTable } from '@/components/ui/DataTable';
import { columns } from '@/components/LlmsDirectoryColumns';

export default async function LLMsDirectoryPage() {
  const supabase = await createClient();

  const { data: tableData, error } = await supabase
    .from('llms_directory')
    .select('*');

  if (error) {
    console.log(`Error while fetching directory table data: ${error.message}`);
    return (
      <h1>
        Something unexpected happened. Please contact us by opening an issue on
        GitHub
      </h1>
    );
  }

  return (
    <div className={styles.container}>
      {/* Replace with actual DB component */}
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
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}
