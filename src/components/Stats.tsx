import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Building } from 'lucide-react';
import { Stats } from '../types';

const stats: Stats = {
  totalLiquidity: '$245M+',
  farmersCount: '12,000+',
  assetsTokenized: '150+'
};

const StatsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400">Total Liquidity Locked</p>
                <h3 className="text-2xl font-bold text-white">{stats.totalLiquidity}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl border border-cyan-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Farmers Worldwide</p>
                <h3 className="text-2xl font-bold text-white">{stats.farmersCount}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Building className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400">Assets Tokenized</p>
                <h3 className="text-2xl font-bold text-white">{stats.assetsTokenized}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;