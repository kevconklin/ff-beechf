import React, { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FantasyTeam } from '../types/fantasy';
import { Trophy } from 'lucide-react';

const columnHelper = createColumnHelper<FantasyTeam>();

const columns = [
  columnHelper.accessor('team_name', {
    header: 'Team',
    cell: (info) => (
      <div className="flex items-center gap-2">
        {info.row.original.champion && (
          <Trophy className="w-4 h-4 text-yellow-500" />
        )}
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor('wins', {
    header: 'W',
  }),
  columnHelper.accessor('losses', {
    header: 'L',
  }),
  columnHelper.accessor('points_for', {
    header: 'PF',
    cell: (info) => info.getValue().toFixed(1),
  }),
  columnHelper.accessor('points_against', {
    header: 'PA',
    cell: (info) => info.getValue().toFixed(1),
  }),
];

interface StandingsTableProps {
  data: FantasyTeam[];
}

export function StandingsTable({ data }: StandingsTableProps) {
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