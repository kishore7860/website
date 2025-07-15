import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
