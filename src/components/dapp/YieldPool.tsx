import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Lock } from 'lucide-react';
import type { YieldPool as YieldPoolType } from '../../types';

interface YieldPoolProps {
  pool: YieldPoolType;
  onStake: (poolId: string) => void;
}

const YieldPool: React.FC<YieldPoolProps> = ({ pool, onStake }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 p-6 rounded-xl border border-cyan-500/20"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{pool.name}</h3>
          <p className="text-gray-400">{pool.asset}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">{pool.apy}% APY</div>
          <div className="flex items-center gap-2 text-gray-400">
            <Lock className="w-4 h-4" />
            <span>{pool.totalLocked}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => onStake(pool.id)}
        className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
      >
        <TrendingUp className="w-5 h-5" />
        Stake Now
      </button>
    </motion.div>
  );
};

export default YieldPool;