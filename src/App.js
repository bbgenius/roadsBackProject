import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About .js';
import Services from './components/Services.js';
import Tours from './components/Tours.js';
import Footer from './components/Footer.js';
const App = function () {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
};

export default App;
