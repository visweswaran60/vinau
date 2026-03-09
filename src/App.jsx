import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeviceShowcase from './components/DeviceShowcase';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <DeviceShowcase />
        <Products />
        <Solutions />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
