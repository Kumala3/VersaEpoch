'use client';

import { useState } from 'react';
import styles from '@/styles/promptsDirectoryColumns.module.scss';
import { ColumnDef } from '@tanstack/react-table';
import { ColumnType } from '@/types/Table';
import { TableHeaderDropdown } from '@/components/ui/TableHeaderDropdown';
import {
  filterColumnText,
  filterColumnMultiSelect,
} from '@/components/LlmsDirectoryColumns';
import { capitalizeString } from '@/utils/helperFunctions';
import { CopyIcon } from '@/components/ui/UIIcons';

const PromptCell = ({ prompt }: { prompt: string }) => {
  // State to manage copied message
  const [isCopied, setIsCopied] = useState<boolean>(false);
  // State to manage notification visibility
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleCopyPrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setIsCopied(true);
      setShowNotification(true);
      // Remove 'Copied!' text after 2000ms = 2s
      setTimeout(() => setIsCopied(false), 2000);
      setTimeout(() => setShowNotification(false), 3000);
      console.log(`Prompt copied to clipboard: ${prompt}`);
    } catch (error) {
      console.log(`Failed to copy prompt: ${error}`);
    }
  };

  return (
    <div className={styles.promptContainer}>
      {prompt}
      <button
        className={styles.copyButton}
        onClick={() => handleCopyPrompt(prompt)}
        aria-label="Copy prompt to clipboard">
        <CopyIcon className={styles.copyButton__icon} />
        {isCopied ? 'Copied!' : 'Copy'}
      </button>

      {/* Notification */}
      {showNotification && (
        <div className={styles.notification}>Copied to the clipboard!</div>
      )}
    </div>
  );
};

export interface PromptData {
  id: string;
  title: string;
  description: string;
  prompt: string;
  tags: string[];
}

export const columns: ColumnDef<PromptData>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <TableHeaderDropdown column={column} title={'Title'} />
    ),
    meta: { type: 'text' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnText(row, columnId, filterValue);
    },
    cell: ({ getValue }) => {
      const title = getValue() as string;

      return <div className={styles.titleContainer}>{title}</div>;
    },
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <TableHeaderDropdown column={column} title={'Description'} />
    ),
    meta: { type: 'text' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnText(row, columnId, filterValue);
    },
    minSize: 180,
  },
  {
    accessorKey: 'prompt',
    header: ({ column }) => (
      <TableHeaderDropdown column={column} title={'Prompt'} />
    ),
    meta: { type: 'text' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnText(row, columnId, filterValue);
    },
    minSize: 250,
    cell: ({ getValue }) => {
      const prompt = getValue() as string;

      return <PromptCell prompt={prompt} />;
    },
  },
  {
    accessorKey: 'tags',
    header: ({ column }) => (
      <TableHeaderDropdown column={column} title={'Tags'} />
    ),
    meta: { type: 'multi-select' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnMultiSelect(row, columnId, filterValue);
    },
    cell: ({ getValue }) => {
      const tags = getValue() as string[];

      return (
        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tagElement}>
              {capitalizeString(tag, '_')}
            </div>
          ))}
        </div>
      );
    },
    minSize: 250,
  },
];
