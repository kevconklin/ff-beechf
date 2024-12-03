import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FantasyTeam } from '../../types/fantasy';

const columnHelper = createColumnHelper<FantasyTeam>();

const columns = [
  columnHelper.accessor('team_name', {
    header: 'Team',
  }),
  columnHelper.accessor('acquisitions', {
    header: 'Acquisitions',
  }),
  columnHelper.accessor('trades', {
    header: 'Trades',
  }),
  columnHelper.accessor('waiver_rank', {
    header: 'Waiver Rank',
  }),
  columnHelper.accessor('streak_type', {
    header: 'Streak',
    cell: (info) => `${info.row.original.streak_length} ${info.getValue()}`,
  }),
];

interface TeamStatsTableProps {
  data: FantasyTeam[];
}

export function TeamStatsTable({ data }: TeamStatsTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}