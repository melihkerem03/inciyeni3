import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'flaroper': ['Flaroper', 'sans-serif'],
        'typeultimate': ['TypeUltimate', 'serif'],
        'butler': 'var(--font-butler), serif',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'pulse-slower': 'pulse 6s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
export default config 