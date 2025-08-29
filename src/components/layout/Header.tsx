import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';

export const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-bg/80 backdrop-blur-lg shadow-lg shadow-cyber-primary/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-mono text-cyber-primary hover:text-cyber-accent transition-colors duration-300 animate-text-glow">
          A_D.
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-cyber-text-primary hover:text-cyber-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
