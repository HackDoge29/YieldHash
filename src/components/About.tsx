import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
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
            Sustainable Yield Farming for the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            YieldHash integrates real-world assets and green initiatives for yield farming,
            providing sustainable returns while supporting eco-friendly projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sprout className="w-8 h-8" />,
              title: "Eco-Friendly",
              description: "Support green initiatives while earning competitive yields"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Secure Assets",
              description: "Real-world asset backing provides stability and security"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast",
              description: "Powered by Hedera's lightning-fast consensus"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl border border-purple-500/20"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;