import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', yield: 4 },
  { name: 'Feb', yield: 5 },
  { name: 'Mar', yield: 7 },
  { name: 'Apr', yield: 8.5 },
  { name: 'May', yield: 10 },
  { name: 'Jun', yield: 12 },
];

const YieldChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full bg-gray-800/50 rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#9ca3af" />
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
            dataKey="yield"
            stroke="#9333ea"
            fillOpacity={1}
            fill="url(#yieldGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YieldChart;