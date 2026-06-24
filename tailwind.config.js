/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens — change these to rebrand the whole site quickly.
        brand: {
          DEFAULT: '#8B1E1E', // deep maroon (hospitality)
          dark: '#6E1414',
          light: '#A83232',
        },
        terracotta: {
          DEFAULT: '#C8612D', // warm tea tone
          light: '#E07B3E',
        },
        gold: {
          DEFAULT: '#D4A017', // CTA / highlight
          light: '#E8B93A',
        },
        cream: '#FBF7F0',
        ink: '#2A2A2A',
      },
      fontFamily: {
        // Devanagari-quality stack for Marathi + clean Latin for English.
        deva: ['"Noto Sans Devanagari"', '"Mukta"', 'system-ui', 'sans-serif'],
        sans: ['"Mukta"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(42, 42, 42, 0.18)',
        card: '0 4px 20px -6px rgba(139, 30, 30, 0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
