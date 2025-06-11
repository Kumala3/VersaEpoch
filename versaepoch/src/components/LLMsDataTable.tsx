'use client';

import { useState } from 'react';
import {
  ColumnFiltersState,
  ColumnOrderState,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DataTable } from '@/components/ui/DataTable';
import { columns, LLMModel } from '@/components/LlmsDirectoryColumns';
import { TableControlPanel } from '@/components/ui/TableControlPanel';

interface LLMsDataTableProps {
  data: LLMModel[];
}

export function LLMsDataTable({ data }: LLMsDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);

  const table = useReactTable({
    data,
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
    enableColumnFilters: true,
    enableSorting: true,
    enableColumnPinning: true,
  });

  return (
    <>
      <TableControlPanel table={table} />
      <DataTable table={table} />
    </>
  );
}
