import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#F7F4F0',
          100: '#EDE8E1',
          200: '#E3DDD4',
          300: '#D8D2CB',
          400: '#C4BDB4',
        },
        charcoal: {
          DEFAULT: '#2C2825',
          light:   '#6B6560',
          muted:   '#9C9590',
        },
        sage: {
          DEFAULT: '#7C8C6E',
          dark:    '#6A7A5E',
          light:   '#C8D4C0',
        },
        sand: {
          DEFAULT: '#C4A882',
          light:   '#E0D4C8',
        },
        error: '#B85C5C',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'sub':     ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'card':    ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body':    ['1rem', { lineHeight: '1.6' }],
        'small':   ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'prose': '680px',
        'container': '1200px',
      },
      borderRadius: {
        DEFAULT: '8px',
        'card': '12px',
      },
      boxShadow: {
        'card-hover': '0 2px 8px rgba(44, 40, 37, 0.06)',
        'elevated':   '0 4px 16px rgba(44, 40, 37, 0.08)',
      },
      animation: {
        'mesh-float': 'mesh-float 20s ease-in-out infinite',
      },
      keyframes: {
        'mesh-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%':      { transform: 'translate(5%, -8%) scale(1.05)' },
          '50%':      { transform: 'translate(-3%, 5%) scale(0.95)' },
          '75%':      { transform: 'translate(8%, 3%) scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}

export default config