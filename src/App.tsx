import  React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="text-cyber-text-primary font-sans">
      <CustomCursor />
      <CyberpunkBackground />
      <Header />
      <main>
        <Hero />
        <div className="relative z-10">
          <About />
          <Mission />
          <Skills />
          <Projects />
          <Philosophy />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
