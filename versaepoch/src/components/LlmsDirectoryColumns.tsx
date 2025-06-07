"use client";

import styles from "@/styles/llmsDirectoryColumns.module.scss";
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
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
} from '@/components/ui/UIIcons';
import { capitalizeWord } from '@/utils/capitalizeWord';

interface LLMModel {
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

export const columns: ColumnDef<LLMModel>[] = [
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

      return (
        <div className={`${styles.companyBadge} ${renderCompany(company)}`}>
          {company}
        </div>
      );
    },
  },
  {
    accessorKey: 'model_name',
    header: 'Model',
    minSize: 200,
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
    header: 'Description',
    size: 450,
  },
  {
    accessorKey: 'context_window',
    header: 'Context Window',
    minSize: 180,
    cell: ({ getValue }) => {
      const contextWindow = getValue() as number;

      if (!contextWindow) return null;

      return <span>{contextWindow.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: 'max_output',
    header: 'Max Output',
    minSize: 180,
    cell: ({ getValue }) => {
      const maxOutput = getValue() as number;

      if (!maxOutput) return null;

      return <span>{maxOutput.toLocaleString()}</span>;
    },
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
    header: 'Modalities',
    size: 250,
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
    header: 'Best For',
    minSize: 250,
  },
];
