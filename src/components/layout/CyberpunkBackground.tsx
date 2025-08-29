import React, { useRef, useEffect, useCallback } from 'react';

// --- Configuration ---
const RAIN_CHARACTERS =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const FONT_SIZE = 16;
const RAIN_SPEED_MIN = 1;
const RAIN_SPEED_MAX = 4;
const STREAM_LENGTH_MIN = 10;
const STREAM_LENGTH_MAX = 40;

const CHAR_POOL = Array.from(RAIN_CHARACTERS);
const pickChar = () => CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];

class Glyph {
  character: string;
  x: number;
  y: number;
  fontSize: number;
  isFirst: boolean;

  constructor(x: number, y: number, fontSize: number, isFirst: boolean) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.isFirst = isFirst;
    this.character = pickChar();
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.isFirst) {
      ctx.fillStyle = '#b3f5ff'; // leader
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00F5FF';
    } else {
      ctx.fillStyle = `rgba(0, 245, 255, ${Math.random() * 0.5 + 0.2})`;
      ctx.shadowBlur = 0;
    }
    ctx.fillText(this.character, this.x, this.y);
  }
}

class Stream {
  symbols: Glyph[] = [];
  totalSymbols: number;
  speed: number;
  x: number;
  y: number;
  fontSize: number;
  canvasHeight: number;

  constructor(x: number, canvasHeight: number, fontSize: number) {
    this.x = x;
    this.y = Math.random() * canvasHeight * 2 - canvasHeight;
    this.canvasHeight = canvasHeight;
    this.fontSize = fontSize;
    this.totalSymbols =
      Math.floor(Math.random() * (STREAM_LENGTH_MAX - STREAM_LENGTH_MIN)) +
      STREAM_LENGTH_MIN;
    this.speed =
      Math.random() * (RAIN_SPEED_MAX - RAIN_SPEED_MIN) + RAIN_SPEED_MIN;
    this.generateSymbols();
  }

  private generateSymbols() {
    this.symbols = [];
    for (let i = 0; i < this.totalSymbols; i++) {
      const isFirst = i === 0;
      this.symbols.push(
        new Glyph(this.x, this.y - i * this.fontSize, this.fontSize, isFirst),
      );
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.symbols.forEach((symbol) => {
      if (Math.random() > 0.99) symbol.character = pickChar();
      symbol.draw(ctx);
    });
    this.update();
  }

  private update() {
    this.y += this.speed;
    if (this.y - this.totalSymbols * this.fontSize > this.canvasHeight) {
      this.y = Math.random() * -this.canvasHeight * 0.5; // Reset to top
    }
    for (let i = 0; i < this.totalSymbols; i++) {
      this.symbols[i].y = this.y - i * this.fontSize;
    }
  }
}

export const CyberpunkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  const setupStreams = useCallback((width: number, height: number): Stream[] => {
    const streams: Stream[] = [];
    const columns = Math.floor(width / FONT_SIZE);
    for (let i = 0; i < columns; i++) {
      if (Math.random() > 0.5) { // Randomly create streams to vary density
        streams.push(new Stream(i * FONT_SIZE, height, FONT_SIZE));
      }
    }
    return streams;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let streams: Stream[] = [];

    const resize = () => {
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      const cssWidth = window.innerWidth;
      const cssHeight = window.innerHeight;

      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      
      ctx.scale(dpr, dpr);

      ctx.font = `${FONT_SIZE}px "Roboto Mono", ui-monospace, monospace`;
      ctx.textBaseline = 'top';

      streams = setupStreams(cssWidth, cssHeight);
    };

    let resizeTimer: number | null = null;
    const handleResize = () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 100);
    };

    resize();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.fillStyle = 'rgba(13, 15, 24, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      streams.forEach((stream) => stream.render(ctx));
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [setupStreams]);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} />
      <div className="glitch-overlay" />
    </div>
  );
};