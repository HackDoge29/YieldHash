import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Leaf, Coins, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Real-World Asset Integration",
      description: "Access tokenized real estate and sustainable infrastructure investments"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Green Yield Strategies",
      description: "Earn yields while supporting renewable energy and conservation projects"
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Optimized Returns",
      description: "Smart allocation algorithms maximize sustainable yields"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics Dashboard",
      description: "Track performance with detailed analytics and reporting"
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Powerful Features for Modern Yield Farming
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
            >
              <div className="text-cyan-400 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;