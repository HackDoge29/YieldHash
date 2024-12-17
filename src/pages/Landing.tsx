import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import EcoInitiative from '../components/EcoInitiative';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <HowItWorks />
      <Features />
      <EcoInitiative />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Landing;