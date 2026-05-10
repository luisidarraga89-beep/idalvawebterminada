import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        grafito: { DEFAULT: '#0A0A0B', mid: '#1C1C1E', light: '#2A2A2C' },
        carbono:  '#3A3A3C',
        marfil:  { DEFAULT: '#F5F4F0', dim: '#C8C6C0' },
        volt:    { DEFAULT: '#C8F04E', dim: '#8FA030' },
        surface:  '#0F1011',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'marquee':    'marquee 30s linear infinite',
        'pulse-volt': 'pulse-volt 2.5s ease-in-out infinite',
      },
      keyframes: {
        marquee:      { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'pulse-volt': { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.7', transform: 'scale(0.94)' } },
      },
    },
  },
  plugins: [],
}
export default config
