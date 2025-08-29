import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseDown = () => setIsDown(true);
    const handleMouseUp = () => setIsDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  const size = isHovering ? 32 : 24;
  const rotation = isDown ? '45deg' : '0deg';

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
        <div 
            className="transition-all duration-200 ease-out"
            style={{ 
                width: `${size}px`, 
                height: `${size}px`, 
                transform: `translate(-50%, -50%) rotate(${rotation})`
            }}>
            <div className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-white transition-transform duration-200 ease-out ${isHovering ? 'scale-x-50' : 'scale-x-100'}`}></div>
            <div className={`absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 bg-white transition-transform duration-200 ease-out ${isHovering ? 'scale-y-50' : 'scale-y-100'}`}></div>
            <div className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-200 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>
    </div>
  );
};
