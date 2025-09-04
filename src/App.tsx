import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CyberpunkBackground } from './components/layout/CyberpunkBackground';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Mission } from './components/sections/Mission';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Philosophy } from './components/sections/Philosophy';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { BackgroundImage } from './components/layout/BackgroundImage';


import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="text-cyber-text-primary font-sans">
      {loading && (
        <div id="loader">
          <div className="spinner" />
        </div>
      )}
      <BackgroundImage />
      <CustomCursor />
      <CyberpunkBackground/>
      <Header />
      <Hero loading={loading} />
      <div className="relative z-10">
        <main>
          <About />
          <Mission />
          <Philosophy />
          <Skills />
          <Projects />
        </main>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
