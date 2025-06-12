'use client';

import styles from '@/styles/llmsDirectoryColumns.module.scss';
import Link from 'next/link';
import { TableHeaderDropdown } from '@/components/ui/TableHeaderDropdown';
import { ColumnDef, Row } from '@tanstack/react-table';
import { ColumnType, FilterOperator } from '@/types/Table';
import {
  ChatgptIcon,
  ClaudeIcon,
  GeminiIcon,
  MetaIcon,
  XaiIcon,
  DeepseekIcon,
  MistralIcon,
  ModalityTextIcon,
  ModalityImageIcon,
  ModalityVideoIcon,
  ModalityAudioIcon,
  BestForCodingIcon,
  BestForWritingIcon,
  BestForBrainstormingIcon,
  BestForResearchAnalysisIcon,
  BestForProductivityIcon,
  BestForOrganizingIcon,
  BestForCookingIcon,
  BestForGeneralKnowledgeIcon,
  BestForLifestyleIcon,
  BestForImageGenerationIcon,
} from '@/components/ui/UIIcons';
import { capitalizeWord } from '@/utils/helperFunctions';

function filterColumnNumber<TData>(
  row: Row<TData>,
  columnId: string,
  filterValue: { operator: FilterOperator; value: number | null }
) {
  const cellValue = row.getValue(columnId);
  const { operator, value } = filterValue;

  switch (operator) {
    case 'equals':
      return Number(cellValue) === Number(value);
    case 'does_not_equal':
      return Number(cellValue) !== Number(value);
    case 'greater_than':
      return Number(cellValue) > Number(value);
    case 'greater_than_or_equal':
      return Number(cellValue) >= Number(value);
    case 'less_than':
      return Number(cellValue) < Number(value);
    case 'less_than_or_equal':
      return Number(cellValue) <= Number(value);
    case 'is_empty':
      return cellValue === null;
    case 'is_not_empty':
      return cellValue !== null;
    default:
      return true; // display all
  }
}

export interface LLMModel {
  id: string;
  company: string;
  modelName: string;
  description: string;
  contextWindow: string;
  maxOutput: string;
  modalities: string[];
  knowledgeCutoff: string;
  releaseDate: string;
  documentation: string;
  bestFor: string[];
}

const BEST_FOR_STYLES: Record<string, string> = {
  Coding: styles.bestForDefault__coding,
  Writing: styles.bestForDefault__writing,
  'Research & Analysis': styles.bestForDefault__researchAnalysis,
  Brainstorming: styles.bestForDefault__brainstorming,
  Productivity: styles.bestForDefault__productivity,
  Lifestyle: styles.bestForDefault__lifestyle,
  Cooking: styles.bestForDefault__cooking,
  'General Knowledge': styles.bestForDefault__generalKnowledge,
  Organizing: styles.bestForDefault__organizing,
  'Image Generation': styles.bestForDefault__imageGeneration,
};

const BEST_FOR_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Coding: BestForCodingIcon,
  Writing: BestForWritingIcon,
  'Research & Analysis': BestForResearchAnalysisIcon,
  Brainstorming: BestForBrainstormingIcon,
  Productivity: BestForProductivityIcon,
  Lifestyle: BestForLifestyleIcon,
  Cooking: BestForCookingIcon,
  'General Knowledge': BestForGeneralKnowledgeIcon,
  Organizing: BestForOrganizingIcon,
  'Image Generation': BestForImageGenerationIcon,
};

export const columns: ColumnDef<LLMModel>[] = [
  {
    accessorKey: 'company',
    header: ({ column }) => (
      <TableHeaderDropdown column={column} title={'Company'} />
    ),
    meta: { type: 'text' as ColumnType },
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

      return (
        <div className={`${styles.companyBadge} ${renderCompany(company)}`}>
          {company}
        </div>
      );
    },
  },
  {
    accessorKey: 'model_name',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Model" />;
    },
    meta: { type: 'text' as ColumnType },
    minSize: 230,
    cell: ({ getValue, row }) => {
      const modelName = getValue() as string;
      const company = row.getValue('company') as string;

      const modelIcon = (company: string, className: string) => {
        switch (company) {
          case 'OpenAI':
            return <ChatgptIcon className={className} />;
          case 'Anthropic':
            return <ClaudeIcon className={className} />;
          case 'Google':
            return <GeminiIcon className={className} />;
          case 'Meta':
            return <MetaIcon className={className} />;
          case 'xAI':
            return <XaiIcon className={className} />;
          case 'DeepSeek':
            return <DeepseekIcon className={className} />;
          case 'Mistral':
            return <MistralIcon className={className} />;
          default:
            return;
        }
      };

      return (
        <div className={styles.modelContainer}>
          {modelIcon(company, styles.modelContainer__icon)}
          <span>{modelName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Description" />;
    },
    meta: { type: 'text' as ColumnType },
    size: 450,
  },
  {
    accessorKey: 'context_window',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Context Window" />;
    },
    meta: { type: 'number' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnNumber(row, columnId, filterValue);
    },
    minSize: 230,
    cell: ({ getValue }) => {
      const contextWindow = getValue() as number;

      if (!contextWindow) return null;

      return <span>{contextWindow.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: 'max_output',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Max Output" />;
    },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnNumber(row, columnId, filterValue);
    },
    meta: { type: 'number' as ColumnType },
    minSize: 200,
    cell: ({ getValue }) => {
      const maxOutput = getValue() as number;

      if (!maxOutput) return null;

      return <span>{maxOutput.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: 'knowledge_cutoff',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Knowledge Cutoff" />;
    },
    meta: { type: 'date' as ColumnType },
    minSize: 230,
  },
  {
    accessorKey: 'release_date',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Release Date" />;
    },
    meta: { type: 'date' as ColumnType },
    minSize: 200,
  },
  {
    accessorKey: 'documentation',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Documentation" />;
    },
    meta: { type: 'url' as ColumnType },
    size: 300,
    cell: ({ getValue }) => {
      const url = getValue() as string;

      if (!url) return null;

      const displayText = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

      return (
        <Link
          href={url}
          className={styles.documentationLink}
          target="_blank"
          rel="noopener noreferrer">
          {displayText}
        </Link>
      );
    },
  },
  {
    accessorKey: 'modalities',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Modalities" />;
    },
    meta: { type: 'multi-select' as ColumnType },
    minSize: 250,
    cell: ({ getValue }) => {
      const modalities = getValue() as string[];

      const modalityIcon = (modality: string, className: string) => {
        switch (modality) {
          case 'audio':
            return <ModalityAudioIcon className={className} />;
          case 'text':
            return <ModalityTextIcon className={className} />;
          case 'video':
            return <ModalityVideoIcon className={className} />;
          case 'image':
            return <ModalityImageIcon className={className} />;
          default:
            return;
        }
      };

      const modalityStyle = (modality: string) => {
        switch (modality) {
          case 'audio':
            return styles.modalityAudio__audio;
          case 'text':
            return styles.modalityDefault__text;
          case 'image':
            return styles.modalityDefault__image;
          case 'video':
            return styles.modalityDefault__video;
          default:
            return styles.modalityDefault;
        }
      };

      return (
        <div className={styles.modalitiesContainer}>
          {modalities.map((modality) => (
            <div
              key={modality}
              className={`${styles.modalityDefault} ${modalityStyle(
                modality
              )}`}>
              {modalityIcon(modality, styles.modalityDefault__icon)}{' '}
              <span>{capitalizeWord(modality)}</span>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'best_for',
    header: ({ column }) => {
      return <TableHeaderDropdown column={column} title="Best For" />;
    },
    meta: { type: 'multi-select' as ColumnType },
    minSize: 250,
    cell: ({ getValue }) => {
      const bestFors = getValue() as string[];

      const bestForStyle = (bestFor: string) => {
        return BEST_FOR_STYLES[bestFor] || styles.bestForDefault;
      };

      const bestForIcon = (bestFor: string, className: string) => {
        const Icon = BEST_FOR_ICONS[bestFor];
        return Icon ? <Icon className={className} /> : null;
      };

      return (
        <div className={styles.bestForContainer}>
          {bestFors?.map((bestFor) => (
            <div
              key={bestFor}
              className={`${bestForStyle(bestFor)} ${styles.bestForDefault}`}>
              {bestForIcon(bestFor, styles.bestForDefault__icon)}
              <span>{capitalizeWord(bestFor)}</span>
            </div>
          ))}
        </div>
      );
    },
  },
];
