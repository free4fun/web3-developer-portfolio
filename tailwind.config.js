/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0D0F18',
        'cyber-surface': '#151823',
        'cyber-primary': '#00F5FF',    // Neon Cyan
        'cyber-secondary': '#FF00E5',  // Neon Magenta
        'cyber-accent': '#7FFF00',     // Neon Lime
        'cyber-text-primary': '#EAEAEA',
        'cyber-text-secondary': '#A0A0A0',
      },
      fontFamily: {
        txt: ['Orbitron', 'sans-serif'],
        title: ['Chakra Petch', 'ui-monospace', 'monospace'],
      },
      animation: {
        'text-glow-primary': 'text-glow-primary 1.5s ease-in-out infinite alternate',
        'text-glow-secondary': 'text-glow-secondary 1.5s ease-in-out infinite alternate',
        'border-pulse': 'border-pulse 2s infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in': 'slide-in 2s ease-out forwards',
        'chat-pulse': 'chat-pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'glitch': 'glitch 0.5s linear infinite',
        'decode-char': 'decode-char 0.8s ease-out forwards',
        'blinks': 'blinks 1s step-end infinite',
        'subtle-glitch': 'subtle-glitch 1s step-end infinite',
        'subtle-glitch-3s': 'subtle-glitch 3s step-end infinite',
        'spin': 'spin 2s linear infinite',
        'glow-primary': 'glow-primary 1.5s ease-in-out infinite alternate',
        'glow-secondary': 'glow-secondary 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'text-glow-primary': {
          '0%': { textShadow: '0 0 5px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 245, 255, 0.5)' },
          '100%': { textShadow: '0 0 10px rgba(0, 245, 255, 1), 0 0 20px rgba(0, 245, 255, 1)' },
        },
        'text-glow-secondary': {
          '0%': { textShadow: '0 0 5px rgba(255, 0, 229, 0.5), 0 0 10px rgba(255, 0, 229, 0.5)' },
          '100%': { textShadow: '0 0 10px rgba(255, 0, 229, 1), 0 0 20px rgba(255, 0, 229, 1)' },
        },
        'border-pulse': {
          '0%': { borderColor: 'rgba(0, 245, 255, 0.3)' },
          '50%': { borderColor: 'rgba(0, 245, 255, 0.8)' },
          '100%': { borderColor: 'rgba(0, 245, 255, 0.3)' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'slide-in': {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        'chat-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(255, 0, 229, 0.7)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 10px 15px rgba(255, 0, 229, 0)',
          },
        },
        'glitch': {
          '2%, 64%': { transform: 'translate(2px, 0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px, 0) skew(0deg)' },
          '62%': { transform: 'translate(0, 0) skew(5deg)' },
        },
        'decode-char': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'blinks': {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'subtle-glitch': {
          '0%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '10.0%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '10.1%': { transform: 'translate(1px, -1px)', clipPath: 'polygon(0 25%, 100% 25%, 100% 26%, 0 26%)' },
          '10.2%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '20.0%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '20.1%': { transform: 'translate(-1px, 1px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 61%, 0 61%)' },
          '20.2%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '40.0%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '40.1%': { transform: 'translate(1px, -1px)', clipPath: 'polygon(0 25%, 100% 25%, 100% 26%, 0 26%)' },
          '40.2%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '50.0%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '50.1%': { transform: 'translate(-1px, 1px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 61%, 0 61%)' },
          '50.2%': { transform: 'translate(0, 0)', clipPath: 'none' },
          '100%': { transform: 'translate(0, 0)', clipPath: 'none' },
        },
        'spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'glow-primary': {
          from: {
            boxShadow: '0 0 8px #00F5FF, 0 0 16px rgba(0, 245, 255, 0.7), 0 0 32px rgba(0, 245, 255, 0.4)',
          },
          to: {
            boxShadow: '0 0 16px #00F5FF, 0 0 32px rgba(0, 245, 255, 0.9), 0 0 64px rgba(0, 245, 255, 0.6)',
          },
        },
        'glow-secondary': {
          from: {
            boxShadow: '0 0 8px #FF00B3, 0 0 16px rgba(255, 0, 179, 0.7), 0 0 32px rgba(255, 0, 179, 0.4)',
          },
          to: {
            boxShadow: '0 0 16px #FF00B3, 0 0 32px rgba(255, 0, 179, 0.9), 0 0 64px rgba(255, 0, 179, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}