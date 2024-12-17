import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '1 Week', apy: 12 },
  { date: '2 Weeks', apy: 15 },
  { date: '3 Weeks', apy: 13 },
  { date: '1 Month', apy: 14 },
  { date: '2 Months', apy: 16 },
  { date: '3 Months', apy: 15 },
];

const APYChart: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/20">
      <h3 className="text-xl font-semibold text-white mb-4">Historical APY</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="apyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="apy"
              stroke="#9333ea"
              fill="url(#apyGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default APYChart;