import styles from '@/styles/llmsDirectoryPage.module.scss';
import { createClient } from '@/utils/supabase/server';
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
  },
  {
    accessorKey: 'model_name',
    header: 'Model',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'context_window',
    header: 'Context Window',
  },
  {
    accessorKey: 'max_output',
    header: 'Max Output',
  },
  {
    accessorKey: 'knowledge_cutoff',
    header: 'Knowledge Cutoff',
  },
  {
    accessorKey: 'release_date',
    header: 'Release Date',
  },
  {
    accessorKey: 'documentation',
    header: 'Documentation',
  },
  {
    accessorKey: 'modalities',
    header: 'Modalities',
  },
  {
    accessorKey: 'best_for',
    header: 'Best For',
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
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}
