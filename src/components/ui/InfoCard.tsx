import React from 'react';
import { Card } from './Card';
import { CoreValueItem } from '../../types';

interface InfoCardProps {
  item: CoreValueItem;
  animationDelay: string;
  className?: string;
}

export const InfoCard = ({ item, animationDelay, className = '' } : InfoCardProps) => {
  return (
    <div className={`transition-transform duration-300 hover:-translate-y-2 h-full ${className}`}>
      <Card
        key={item.title}
        className="text-center flex flex-col items-center animate-slide-in h-full"
        style={{ animationDelay }}
      >
        <div className="inline-flex items-center justify-center mx-auto w-16 h-16 p-4 bg-cyber-primary/10 rounded-full mb-4 text-cyber-secondary">
          {React.cloneElement(item.icon, { className: "w-16 h-16" })}
        </div>
        <h3 className="text-xl font-bold font-title tracking-widest text-cyber-primary mb-2">{item.title}</h3>
        <p className="text-lg font-txt tracking-widest text-white">{item.description}</p>
      </Card>
    </div>
  );
};