import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Coins } from 'lucide-react';
import type { FarmingPair } from '../../types/defi';

interface FarmingPairCardProps {
  pair: FarmingPair;
  onClaim: (pairId: string) => void;
}

const FarmingPairCard: React.FC<FarmingPairCardProps> = ({ pair, onClaim }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-lg p-6 border border-purple-500/20"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{pair.name}</h3>
          <p className="text-gray-400">TVL: {pair.tvl}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-400">{pair.apy}% APY</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4" />
            <span>Liquidity:</span>
          </div>
          <span>{pair.liquidityProvided}</span>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>Rewards:</span>
          </div>
          <span>{pair.rewardsEarned}</span>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Time Staked:</span>
          </div>
          <span>{pair.timeStaked}</span>
        </div>

        <button
          onClick={() => onClaim(pair.id)}
          className="w-full mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors"
        >
          Claim Rewards
        </button>
      </div>
    </motion.div>
  );
};

export default FarmingPairCard;