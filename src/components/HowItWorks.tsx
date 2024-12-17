import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, Coins, LineChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Connect Your Wallet",
      description: "Start by connecting your HashPack wallet to access the YieldHash platform"
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Choose Your Pool",
      description: "Select from our curated selection of sustainable yield farming pools"
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Earn Sustainable Yields",
      description: "Watch your investments grow while supporting green initiatives"
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            How YieldHash Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start earning sustainable yields in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="text-cyan-400 mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;