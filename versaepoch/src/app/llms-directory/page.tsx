'use client';

import styles from '@/styles/llmsDirectoryPage.module.scss';
import { createClient } from '@/utils/supabase/client';
import { DataTable } from '@/components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';

interface LLMModel {
  id: string;
  company: string;
  modelName: string;
  description: string;
  contextWindow: string;
  maxOutput: string;
  modalities: string;
  knowledgeCutoff: string;
  releaseDate: string;
  documentation: string;
  bestFor: string[];
}

const columns: ColumnDef<LLMModel>[] = [
  {
    accessorKey: 'company',
    header: 'Company',
    cell: ({ getValue }) => {
      const company = getValue() as string;

      const renderCompany = (companyName: string) => {
        switch (companyName) {
          case 'OpenAI':
            return styles.companyBadge__openai;
          case 'Anthropic':
            return styles.companyBadge__anthropic;
          case 'Google':
            return styles.companyBadge__gemini;
          case 'Meta':
            return styles.companyBadge__meta;
          case 'xAI':
            return styles.companyBadge__xAI;
          case 'DeepSeek':
            return styles.companyBadge__deepseek;
          case 'Mistral':
            return styles.companyBadge__mistral;
          default:
            return styles.companyBadge;
        }
      };

      return <div className={`${styles.companyBadge} ${renderCompany(company)}`}>{company}</div>;
    },
  },
  {
    accessorKey: 'model_name',
    header: 'Model',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 450,
  },
  {
    accessorKey: 'context_window',
    header: 'Context Window',
    minSize: 180,
  },
  {
    accessorKey: 'max_output',
    header: 'Max Output',
    minSize: 180,
  },
  {
    accessorKey: 'knowledge_cutoff',
    header: 'Knowledge Cutoff',
    minSize: 200,
  },
  {
    accessorKey: 'release_date',
    header: 'Release Date',
    minSize: 180,
  },
  {
    accessorKey: 'documentation',
    header: 'Documentation',
    size: 250,
  },
  {
    accessorKey: 'modalities',
    header: 'Modalities',
    minSize: 250,
  },
  {
    accessorKey: 'best_for',
    header: 'Best For',
    minSize: 250,
  },
];

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
          Discover most Interesting LLMs
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
