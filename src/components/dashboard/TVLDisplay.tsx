import React from 'react';
import { DollarSign } from 'lucide-react';

const TVLDisplay: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-cyan-500/10 rounded-lg">
          <DollarSign className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-gray-400">Total Value Locked</h3>
          <p className="text-2xl font-bold text-white">$1,250,000</p>
        </div>
      </div>
    </div>
  );
};

export default TVLDisplay;