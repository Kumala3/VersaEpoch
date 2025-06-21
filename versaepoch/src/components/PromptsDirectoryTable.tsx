'use client';

import { columns, PromptData } from '@/components/PromptsDirectoryColumns';
import { useState } from 'react';
import {
  SortingState,
  ColumnOrderState,
  ColumnFiltersState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { DataTable } from '@/components/ui/DataTable';
import { TableControlPanel } from '@/components/ui/TableControlPanel';

interface PromptsDirectoryTableProps {
  data: PromptData[] | null;
}

export function PromptsDirectoryTable({ data }: PromptsDirectoryTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);

  const tableData = data || [];

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
      columnFilters,
      columnOrder,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableColumnFilters: true,
    enableSorting: true,
    enableColumnPinning: true,
  });

  if (!data || data.length === 0) {
    return <h2>No Prompts Data available at the moment...</h2>;
  }

  return (
    <>
      {tableData && (
        <>
          <TableControlPanel table={table} />
          <DataTable table={table} />
        </>
      )}
    </>
  );
}
