import React, { ReactNode, useState } from 'react';

interface CardProps {
  children: ReactNode;
  key: string;
  className?: string;
  style?: React.CSSProperties;
}
export const Card = ({ children, key, className = '', style: propStyle }: CardProps) => {

  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    const rotateY = x * 20;
    const rotateX = -y * 20;
    setHoverStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
  };

  return (
    <div
      className={`bg-cyber-surface/70 backdrop-blur-sm border border-cyber-primary/20 rounded-lg p-6 shadow-lg transition-all duration-300 hover:border-cyber-primary/50 hover:shadow-cyber-primary/20 ${className}`}
      style={{ ...propStyle, ...hoverStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
