/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fffbeb',
          100: '#fff4c8',
          200: '#fde78a',
          300: '#fbd552',
          400: '#f5c542',
          500: '#dda21c',
          600: '#bd7d15',
          700: '#985c16',
          800: '#7d4819',
          900: '#6b3b19',
          950: '#3e1f0b',
        },
        accent: {
          50:  '#f6f4ef',
          100: '#ece8df',
          200: '#d9d2c3',
          300: '#c0b5a2',
          400: '#9d927f',
          500: '#7f7464',
          600: '#635a4e',
          700: '#4e463d',
          800: '#34373c',
          900: '#1c222a',
          950: '#0b0f14',
        },
        dark: {
          700: '#575d66',
          800: '#1c222a',
          900: '#0b0f14',
          950: '#06080b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
