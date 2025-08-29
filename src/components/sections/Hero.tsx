import React, { useState, useEffect } from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export const Hero = () => {

    const [title, setTitle] = useState<React.ReactNode[]>([]);
    const name = "Alex Doe";
    
    useEffect(() => {
        const chars = name.split('').map((char, index) => (
            <span
                key={index}
                className="decode-char"
                style={{ animationDelay: `${500 + index * 80}ms` }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
        setTitle(chars);
    }, []);

    const fullSubtitle = "Web3 Fullstack Alchemist";
    const typedSubtitle = useTypingEffect(fullSubtitle, 75, 1500);

    const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        const rotateY = x * 15;
        const rotateX = -y * 15;
        setHoverStyle({
            transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'none',
        });
    };
    const handleMouseLeave = () => {
        setHoverStyle({
            transform: 'perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
            transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        });
    };

    const HudCorner: React.FC<{position: string, delay: string}> = ({position, delay}) => (
        <div className={`absolute ${position} w-10 h-10 md:w-16 md:h-16 opacity-0 animate-fade-in`} style={{animationDelay: delay}}>
            {position.includes('top') && <div className={`w-full h-0.5 bg-cyber-primary/50`}></div>}
            {position.includes('left') && <div className={`h-full w-0.5 bg-cyber-primary/50`}></div>}
            {position.includes('bottom') && <div className={`absolute bottom-0 w-full h-0.5 bg-cyber-primary/50`}></div>}
            {position.includes('right') && <div className={`absolute right-0 top-0 h-full w-0.5 bg-cyber-primary/50`}></div>}
        </div>
    );

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center p-4 relative overflow-hidden">
            <div 
                className="relative z-10 w-full max-w-4xl"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={hoverStyle}
            >
                <div className="relative border border-cyber-primary/10 bg-cyber-bg/20 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl shadow-cyber-primary/10">
                    <HudCorner position="top-0 left-0" delay="0s" />
                    <HudCorner position="top-0 right-0" delay="0.2s" />
                    <HudCorner position="bottom-0 left-0" delay="0.4s" />
                    <HudCorner position="bottom-0 right-0" delay="0.6s" />
                
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cyber-text-primary leading-tight font-mono tracking-tighter">
                        {title}
                    </h1>

                    <p className={`mt-4 text-xl md:text-2xl font-mono text-cyber-primary animate-text-glow h-8`}>
                        {typedSubtitle}
                        {typedSubtitle.length > 0 && <span className="typing-cursor"></span>}
                    </p>

                    <p className={`mt-6 max-w-2xl mx-auto text-lg text-cyber-text-secondary transition-opacity duration-1000 ${typedSubtitle.length === fullSubtitle.length ? 'opacity-100' : 'opacity-0'}`}>
                        Crafting the decentralized future, one block at a time. Specializing in robust smart contracts, scalable backends, and immersive user experiences.
                    </p>
                    
                    <div className={`mt-10 transition-opacity duration-1000 ${typedSubtitle.length === fullSubtitle.length ? 'opacity-100' : 'opacity-0'}`}>
                        <a
                            href="#projects"
                            className="inline-block px-8 py-4 font-bold text-cyber-bg bg-cyber-primary rounded-md
                                       transition-all duration-300 ease-in-out
                                       hover:bg-cyber-accent hover:shadow-lg hover:shadow-cyber-accent/30
                                       transform hover:-translate-y-1 group relative overflow-hidden"
                        >
                             <span className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                            <span className="relative">Explore My Work</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};