import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FantasyTeam } from '../types/fantasy';

interface PerformanceChartProps {
  data: FantasyTeam[];
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const chartData = data.map((team) => ({
    name: team.team_name,
    pointsFor: team.points_for,
    pointsAgainst: team.points_against,
    winPercentage: (team.wins / (team.wins + team.losses)) * 100,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={0}
          />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="pointsFor"
            stroke="#8884d8"
            name="Points For"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="pointsAgainst"
            stroke="#82ca9d"
            name="Points Against"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="winPercentage"
            stroke="#ffc658"
            name="Win %"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}