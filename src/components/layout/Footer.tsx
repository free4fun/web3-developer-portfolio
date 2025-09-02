import React from 'react';

export const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-cyber-primary/10">
      <div className="container mx-auto px-6 text-center text-cyber-text-secondary font-mono">
        <p>&copy; {currentYear} All rights reserved.</p>
        <p className="mt-2 text-xs">System Online // All Circuits Operational</p>
      </div>
    </footer>
  );
};
