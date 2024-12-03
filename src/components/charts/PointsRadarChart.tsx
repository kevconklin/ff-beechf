import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FantasyTeam } from '../../types/fantasy';

interface PointsRadarChartProps {
  data: FantasyTeam[];
}

export function PointsRadarChart({ data }: PointsRadarChartProps) {
  const chartData = data.map((team) => ({
    name: team.team_name,
    pointsFor: team.points_for,
    pointsAgainst: team.points_against,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar
            name="Points For"
            dataKey="pointsFor"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Points Against"
            dataKey="pointsAgainst"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}