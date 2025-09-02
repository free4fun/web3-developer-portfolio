import React from 'react';
import { Card } from './Card';
import { CoreValueItem } from '../../types'; // Can be used for PhilosophyItem too

interface InfoCardProps {
    item: CoreValueItem; // This type is compatible with PhilosophyItem due to structural typing
    animationDelay: string;
}

export const InfoCard = ({ item, animationDelay } : InfoCardProps) => {
  return (
    <Card
      key={item.title}
      className="text-center flex flex-col items-center animate-slide-in"
      style={{ animationDelay }}
    >
      <div className="p-4 bg-cyber-primary/10 rounded-full mb-4 text-cyber-secondary">
        {React.cloneElement(item.icon, { className: "h-10 w-10" })}
      </div>
      <h3 className="text-xl font-bold text-cyber-primary mb-2">{item.title}</h3>
      <p className="flex-grow">{item.description}</p>
    </Card>
  );
};