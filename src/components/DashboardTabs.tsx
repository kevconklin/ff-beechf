import React from 'react';
import { FantasyTeam } from '../types/fantasy';
import { StandingsTable } from './StandingsTable';
import { PerformanceChart } from './PerformanceChart';
import { WinLossBarChart } from './charts/WinLossBarChart';
import { PointsRadarChart } from './charts/PointsRadarChart';
import { TeamStatsTable } from './tables/TeamStatsTable';

interface DashboardTabsProps {
  data: FantasyTeam[];
}

export function DashboardTabs({ data }: DashboardTabsProps) {
  const [activeTab, setActiveTab] = React.useState('standings');

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {[
            { id: 'standings', name: 'Standings' },
            { id: 'performance', name: 'Performance' },
            { id: 'winloss', name: 'Win/Loss' },
            { id: 'points', name: 'Points Analysis' },
            { id: 'stats', name: 'Team Stats' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'standings' && <StandingsTable data={data} />}
        {activeTab === 'performance' && <PerformanceChart data={data} />}
        {activeTab === 'winloss' && <WinLossBarChart data={data} />}
        {activeTab === 'points' && <PointsRadarChart data={data} />}
        {activeTab === 'stats' && <TeamStatsTable data={data} />}
      </div>
    </div>
  );
}