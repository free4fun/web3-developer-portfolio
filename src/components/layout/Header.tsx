import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useActiveSection(
    NAV_LINKS.map((link) => link.href.substring(1))
  );

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
        <div className='animate-subtle-glitch-3s'>
        <a href="#" className="font-title text-2xl font-bold tracking-widest text-cyber-secondary animate-text-glow-secondary hover:animate-text-glow-primary hover:text-cyber-primary transition-colors duration-300">
          free4fun
        </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
               className={`font-title text-xl font-bold tracking-widest transition-colors duration-300 relative group ${
                activeSection === link.href.substring(1)
                  ? 'text-cyber-primary'
                  : 'text-cyber-text-primary hover:text-cyber-primary'
              }`}
            >
              {link.name}
  <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyber-primary transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
