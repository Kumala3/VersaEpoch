'use client';

import { useState } from 'react';
import {
  ColumnFiltersState,
  ColumnOrderState,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DataTable } from '@/components/ui/DataTable';
import { columns, LLMModel } from '@/components/LlmsDirectoryColumns';
import { TableControlPanel } from '@/components/ui/TableControlPanel';

interface LLMsDataTableProps {
  data: LLMModel[] | null;
}

export function LLMsDataTable({ data }: LLMsDataTableProps) {
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
    return (
      <div>
        <h2>No LLMs Data available at the moment...</h2>
      </div>
    )
  }

  return (
    <>
      {data && (
        <>
          <TableControlPanel table={table} />
          <DataTable table={table} />
        </>
      )}
    </>
  );
}
