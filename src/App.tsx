import React from 'react';
import { Filter } from 'lucide-react';
import { DashboardTabs } from './components/DashboardTabs';
import { sampleData } from './data/sampleData';
import { FantasyTeam } from './types/fantasy';

function App() {
  const [filterDivision, setFilterDivision] = React.useState<string>('all');

  const divisions = Array.from(
    new Set(sampleData.map((team) => team.division_name))
  );

  const filteredData = sampleData.filter(
    (team) => filterDivision === 'all' || team.division_name === filterDivision
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Fantasy Football Analytics
                </h1>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  <select
                    className="form-select rounded-md border-gray-300"
                    value={filterDivision}
                    onChange={(e) => setFilterDivision(e.target.value)}
                  >
                    <option value="all">All Divisions</option>
                    {divisions.map((division) => (
                      <option key={division} value={division}>
                        {division}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <DashboardTabs data={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;