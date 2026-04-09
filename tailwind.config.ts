import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './constants/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pikachu:    '#FFDE00',
        greninja:   '#0056BF',
        infernape:  '#FF4500',
        'dark-ide': '#1E1E2E',
        chalkboard: '#2D5016',
      },
      fontFamily: {
        sans:  ['var(--font-kyobo)', 'system-ui', 'sans-serif'],
        chalk: ['var(--font-kyobo)', 'system-ui', 'sans-serif'],
        body:  ['var(--font-kyobo)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pb-spin':     'pb-spin 1s linear infinite',
        'float':       'float 3.2s ease-in-out infinite',
        'flame':       'flame 0.75s ease-in-out infinite',
        'shuriken':    'shuriken 1.8s linear infinite',
        'shuriken-r':  'shuriken 1.4s linear infinite reverse',
        'blink':       'blink 1s step-end infinite',
        'pulse-glow':  'pulse-glow 2s ease-in-out infinite',
        'pulse-blue':  'pulse-blue 2s ease-in-out infinite',
        'pulse-orange':'pulse-orange 2s ease-in-out infinite',
        'bounce-y':    'bounce-y 1.2s ease-in-out infinite',
        'updot':       'updot 2s ease infinite',
        'spark':       'spark 0.4s ease-in-out infinite',
        'poke-fly':    'poke-fly 0.85s ease-out forwards',
      },
      keyframes: {
        'pb-spin':    { to: { transform: 'rotate(360deg)' } },
        'float':      { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        'flame':      { '0%,100%': { transform: 'scale(1) rotate(-4deg)' }, '50%': { transform: 'scale(1.15) rotate(4deg)' } },
        'shuriken':   { to: { transform: 'rotate(360deg)' } },
        'blink':      { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        'pulse-glow': { '0%,100%': { boxShadow: '0 0 20px rgba(255,222,0,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(255,222,0,0.7)' } },
        'pulse-blue': { '0%,100%': { boxShadow: '0 0 20px rgba(0,86,191,0.4)' }, '50%': { boxShadow: '0 0 45px rgba(0,86,191,0.8)' } },
        'pulse-orange':{ '0%,100%': { boxShadow: '0 0 20px rgba(255,69,0,0.4)' }, '50%': { boxShadow: '0 0 45px rgba(255,69,0,0.8)' } },
        'bounce-y':   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
        'updot':      { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.6)' } },
        'spark':      { '0%,100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' }, '50%': { opacity: '1', transform: 'scale(1) rotate(20deg)' } },
        'poke-fly':   {
          '0%':   { opacity: '1', transform: 'translate(0,0) scale(1.2) rotate(0deg)' },
          '100%': { opacity: '0', transform: 'translate(var(--pdx,0px),var(--pdy,-60px)) scale(0.2) rotate(var(--rot,180deg))' },
        },
      },
    },
  },
  plugins: [],
}

export default config
