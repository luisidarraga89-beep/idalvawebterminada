import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:   { DEFAULT: '#0A0909', 50: '#111010', 100: '#1A1919', 200: '#242222' },
        stone: { DEFAULT: '#2E2C2C', light: '#3D3B3B', mist: '#6B6868' },
        paper: { DEFAULT: '#F0EDE8', dim: '#B8B4AE', ghost: 'rgba(240,237,232,0.06)' },
        volt:  { DEFAULT: '#C8F04E', dim: '#8FA030', ghost: 'rgba(200,240,78,0.08)' },
      },
      fontFamily: {
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        display:['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
      },
      animation: {
        'fade-up':   'fade-up 0.8s ease forwards',
        'fade-in':   'fade-in 0.6s ease forwards',
        'marquee':   'marquee 35s linear infinite',
      },
      keyframes: {
        'fade-up':  { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'marquee':  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
export default config
