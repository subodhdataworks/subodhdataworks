/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2050 Distinctive Visual Identity
        'future-white': '#F7F9F7',
        'deep-space': '#101820',
        'quantum-teal': '#00B8A9',
        'future-blue': '#4C7DFF',
        'solar-gold': '#F4C95D',
        'emerald': {
          500: '#24B47E',
          600: '#1e9b6c',
        },
        'amber': {
          500: '#F2A93B',
          600: '#d9922b',
        },
        'signal-coral': '#F06A6A',

        // Laboratory Neutral Surfaces (Calm & Clean)
        lab: {
          50: '#F7F9F7',
          100: '#EEF2EE',
          200: '#DEE4DF',
          300: '#C2CCC4',
          400: '#8E9E92',
          500: '#5F6F64',
          600: '#3D4A41',
          700: '#242F28',
          800: '#18211C',
          900: '#101820', // Deep Space
          950: '#0B1015',
          border: 'rgba(16, 24, 32, 0.08)',
          'border-dark': 'rgba(255, 255, 255, 0.1)',
          card: '#FFFFFF',
          'card-dark': '#151F28',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 24, 32, 0.04)',
        'elevated': '0 8px 30px rgba(16, 24, 32, 0.08)',
        'teal-glow': '0 0 20px -3px rgba(0, 184, 169, 0.35)',
        'gold-glow': '0 0 20px -3px rgba(244, 201, 93, 0.4)',
      },
      animation: {
        'waveform': 'wave 1.2s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'ring-expand': 'ringExpand 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%': { height: '6px' },
          '100%': { height: '24px' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.04)', opacity: '1' },
        },
        ringExpand: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
