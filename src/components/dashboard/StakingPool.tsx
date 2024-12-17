import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Timer, TrendingUp } from 'lucide-react';
import type { StakingPool as StakingPoolType } from '../../types/defi';

interface StakingPoolProps {
  pool: StakingPoolType;
  onStake: (poolId: string, amount: number) => void;
}

const StakingPool: React.FC<StakingPoolProps> = ({ pool, onStake }) => {
  const [stakeAmount, setStakeAmount] = useState('');

  const handleStake = () => {
    const amount = parseFloat(stakeAmount);
    if (!isNaN(amount) && amount >= pool.minStake) {
      onStake(pool.id, amount);
      setStakeAmount('');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-lg p-6 border border-cyan-500/20"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{pool.token} Staking</h3>
          <p className="text-gray-400">{pool.lockPeriod} Days Lock</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">{pool.apy}% APY</div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Min Stake:</span>
          </div>
          <span>{pool.minStake} {pool.token}</span>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4" />
            <span>Lock Period:</span>
          </div>
          <span>{pool.lockPeriod} Days</span>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>Your Stake:</span>
          </div>
          <span>{pool.userStaked}</span>
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="number"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          placeholder={`Min ${pool.minStake} ${pool.token}`}
          className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={handleStake}
          className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors"
        >
          Stake {pool.token}
        </button>
      </div>
    </motion.div>
  );
};

export default StakingPool;