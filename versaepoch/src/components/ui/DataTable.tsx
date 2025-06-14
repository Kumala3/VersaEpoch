'use client';

import styles from '@/styles/ui/dataTable.module.scss';
import {
  flexRender,
  Table as TanStackTable,
} from '@tanstack/react-table';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@/components/ui/table';

interface DataTableProps<TData> {
  table: TanStackTable<TData>;
}

export function DataTable<TData>({ table }: DataTableProps<TData>) {
  const resetAllFilters = () => table.resetColumnFilters();

  return (
    <div className={styles.container}>
      <Table>
        <TableHeader className={styles.tableHeader}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={styles.tableHead}
                    style={{
                      width: header.getSize(),
                      minWidth: header.getSize(),
                      maxWidth: header.getSize(),
                    }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody className={styles.tableBody}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={styles.tableRow}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={styles.tableCell}
                    style={{
                      width: cell.column.getSize(),
                      minWidth: cell.column.getSize(),
                      maxWidth: cell.column.getSize(),
                    }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length} className={styles.nothingToDisplayCell}>
                <div className={styles.nothingToDisplayContainer}>
                  <h3 className={styles.nothingToDisplay}>
                    No filter results :(
                  </h3>
                  <button
                    className={styles.resetAllFiltersButton}
                    onClick={resetAllFilters}>
                    Reset all filters
                  </button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
