/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        robot: {
          bg: '#050608',
          panel: '#0d1017',
          border: 'rgba(34, 211, 238, 0.15)',
          cyan: '#22d3ee',
          'cyan-dim': '#164e63',
          'cyan-bright': '#67e8f9',
          slate: '#64748b',
          rose: '#f43f5e',
          green: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'floatY 5s ease-in-out infinite',
        'blink': 'blink 1s step-start infinite',
        'glitch': 'glitch 3s infinite step-start',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'node-glow': 'nodeGlow 2s ease-in-out infinite',
        'hologram': 'hologram 4s step-start infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
      backgroundImage: {
        'circuit': "linear-gradient(rgba(34, 211, 238, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'circuit': '40px 40px',
      }
    },
  },
  plugins: [],
}
