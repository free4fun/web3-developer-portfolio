import React, { useState, useEffect } from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Scanlines } from '../ui/Scanlines';

export const Hero = () => {
    const [title, setTitle] = useState<React.ReactNode[]>([]);
    const [visible, setVisible] = useState(false);
    const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});
    const name = "free4fun";
    const fullSubtitle = "Whitebelt Blockchain Developer";
    const typedSubtitle = useTypingEffect(fullSubtitle, 75, 1500);

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

    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        const rotateY = x * 15;
        const rotateX = -y * 15;
        setHoverStyle({
            transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'transform 0.3s',
        });
    };
    const handleMouseLeave = () => {
        setHoverStyle({
            transform: 'perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
            transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        });
    };

    const HudCorner = ({ position }: { position: string; }) => (
        <div className={`absolute ${position} w-10 h-10 md:w-16 md:h-16`}>
            {position.includes('top') && <div className={`w-full h-0.5 bg-cyber-primary/50`}></div>}
            {position.includes('left') && <div className={`h-full w-0.5 bg-cyber-primary/50`}></div>}
            {position.includes('bottom') && <div className={`absolute bottom-0 w-full h-0.5 bg-cyber-primary/50`}></div>}
            {position.includes('right') && <div className={`absolute right-0 top-0 h-full w-0.5 bg-cyber-primary/50`}></div>}
        </div>
    );

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center p-4 relative overflow-hidden">
            <div className="relative z-10 w-full max-w-4xl" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={hoverStyle}>
                <Scanlines />
                <div className="relative border border-cyber-primary/10 bg-cyber-bg/20 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl shadow-cyber-primary/10">
                    <HudCorner position="top-0 left-0"/>
                    <HudCorner position="top-0 right-0"/>
                    <HudCorner position="bottom-0 left-0"/>
                    <HudCorner position="bottom-0 right-0"/>
                    <h1 className={`font-title text-5xl font-bold tracking-widest animate-subtle-glitch text-white md:text-7xl lg:text-8xl transition-opacisty duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>{title}</h1>
                    <p className={`mt-4 font-title text-2xl font-bold tracking-widest text-cyber-secondary md:text-3xl animate-text-glow-secondary h-8`}>{typedSubtitle}{typedSubtitle.length > 0 && <span className="typing-cursor-secondary duration-1000 animate-blinks"></span>}</p>
                    <p className={`mt-6 font-txt text-lg text-white tracking-widest transition-opacity duration-1000 ${typedSubtitle.length === fullSubtitle.length ? 'opacity-100' : 'opacity-0'}`}>Eternal rover on data streams, seeking signal in noise and beauty in the glitch. I drive futures of open code and free networks to build new realities.</p>
                    <div className={`mt-10 transition-opacity duration-1000 ${typedSubtitle.length === fullSubtitle.length ? 'opacity-100' : 'opacity-0'}`}
                         style={{ transitionDelay: typedSubtitle.length === fullSubtitle.length ? '0.5s' : '0s' }}>
                        <a href="#projects" className="animate-glow-primary font-txt tracking-widest text-lg inline-block px-8 py-4 font-bold text-cyber-bg bg-cyber-primary rounded-md ease-in-out hover:bg-cyber-secondary hover:animate-glow-secondary hover:shadow-lg hover:shadow-cyber-secondary/30 transform hover:-translate-y-1 group relative overflow-hidden">
                            <span className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity "></span>
                            <span className="relative">Explore My Work</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};