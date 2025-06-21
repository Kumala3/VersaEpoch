import { ColumnDef } from '@tanstack/react-table';
import { ColumnType } from '@/types/Table';
import { TableHeaderDropdown } from '@/components/ui/TableHeaderDropdown';
import { filterColumnText, filterColumnMultiSelect } from '@/components/LlmsDirectoryColumns';

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
    // header: ({ column }) => {
    //   <TableHeaderDropdown column={column} title={'Title'} />;
    // },
    meta: { type: 'text' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnText(row, columnId, filterValue);
    },
    cell: ({getValue}) => {
      const title = getValue() as string;

      return (
        <div>
          {title}
        </div>
      )
    }
  },
  {
    accessorKey: 'description',
    // header: ({ column }) => {
    //   <TableHeaderDropdown column={column} title={'Description'} />;
    // },
    meta: { type: 'text' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnText(row, columnId, filterValue);
    }
  },
  {
    accessorKey: 'prompt',
    // header: ({ column }) => {
    //   <TableHeaderDropdown column={column} title={'Prompt'} />;
    // },
    meta: { type: 'text' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnText(row, columnId, filterValue);
    }
  },
  {
    accessorKey: 'tags',
    // header: ({ column }) => {
    //   <TableHeaderDropdown column={column} title={'Tags'} />;
    // },
    meta: { type: 'multi-select' as ColumnType },
    filterFn: (row, columnId, filterValue) => {
      return filterColumnMultiSelect(row, columnId, filterValue);
    }
  },
];
