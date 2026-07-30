/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8069BF',
          secondary: '#7C7296',
          tertiary: '#C9A74D',
          neutral: '#79767D',
          dark: '#121118',
          panel: '#1A1823',
          card: '#23202E',
          border: 'rgba(128, 105, 191, 0.2)',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 50px -10px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.35)',
        'glass-vox': '0 12px 40px 0 rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
