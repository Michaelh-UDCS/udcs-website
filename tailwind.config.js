/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0a0a',
        },
        cream: {
          DEFAULT: '#e0e0e0',
        },
        gold: {
          DEFAULT: '#c5a572',
          muted: 'rgba(197, 165, 114, 0.85)',
        },
        navy: {
          DEFAULT: '#141e26',
        },
        steel: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0a0a0a',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490', // Added darker cyan for better contrast if needed
        }
      },
      fontFamily: {
        sans: ['Inter', 'Inter-Fallback', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'CormorantGaramond-Fallback', 'serif'],
      },
      // All UI weights collapse to Inter 400; display medium uses Cormorant 500
      fontWeight: {
        light: '400',
        normal: '400',
        medium: '500',
        semibold: '400',
        bold: '400',
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #1f2937 0%, #0a0a0a 100%)',
        'metal-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
        'cyan-glow': 'radial-gradient(circle at center, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}