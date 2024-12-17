import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Wind, Sun } from 'lucide-react';

const EcoInitiative: React.FC = () => {
  const projects = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Farm Funding",
      description: "Supporting large-scale solar installations across developing nations",
      impact: "50,000 tons CO₂ offset annually",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop&q=60"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Wind Energy Projects",
      description: "Investing in offshore wind farms for clean energy production",
      impact: "100,000 homes powered",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1600&auto=format&fit=crop&q=60"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Reforestation Initiative",
      description: "Planting millions of trees to combat deforestation",
      impact: "1M+ trees planted",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&auto=format&fit=crop&q=60"
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
            Supporting Green Initiatives
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our yield farming strategies directly support sustainable projects worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-cyan-400 mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="bg-cyan-500/10 rounded-lg p-3">
                  <p className="text-cyan-400 font-semibold">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoInitiative;