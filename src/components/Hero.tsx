import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf } from 'lucide-react';
// import YieldChart from './YieldChart';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-60 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Reimagine Yield Farming with Sustainability and Speed!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Sustainable yields through real-world asset integration on Hedera
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold flex items-center gap-2 transition-all">
              <TrendingUp className="w-5 h-5" />
              Start Farming
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold flex items-center gap-2 transition-all">
              <Leaf className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </motion.div>
        
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12"
        >
          <YieldChart />
        </motion.div> */}
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero;