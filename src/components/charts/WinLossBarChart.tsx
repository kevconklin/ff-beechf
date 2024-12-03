import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FantasyTeam } from '../../types/fantasy';

interface WinLossBarChartProps {
  data: FantasyTeam[];
}

export function WinLossBarChart({ data }: WinLossBarChartProps) {
  const chartData = data.map((team) => ({
    name: team.team_name,
    wins: team.wins,
    losses: team.losses,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wins" fill="#4CAF50" name="Wins" />
          <Bar dataKey="losses" fill="#f44336" name="Losses" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}