// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import JobSection from './components/Jobs';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <JobSection />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
