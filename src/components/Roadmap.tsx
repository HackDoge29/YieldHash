import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      quarter: "Q4 2024",
      title: "Platform Launch",
      items: ["Initial DApp release", "First green energy pools", "Community governance setup"],
      completed: true
    },
    {
      quarter: "Q1 2025",
      title: "Expansion Phase",
      items: ["Real estate token integration", "Advanced analytics dashboard", "Mobile app beta"],
      completed: false
    },
    {
      quarter: "Q2 2025",
      title: "Ecosystem Growth",
      items: ["Cross-chain bridges", "Institutional partnerships", "Enhanced yield strategies"],
      completed: false
    },
    {
      quarter: "Q3 2025",
      title: "Global Scale",
      items: ["Global expansion", "Advanced governance", "New asset classes"],
      completed: false
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
            Platform Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize sustainable yield farming
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl border border-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="text-purple-400">
                  {milestone.completed ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-cyan-400 font-semibold">{milestone.quarter}</span>
                    <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {milestone.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;