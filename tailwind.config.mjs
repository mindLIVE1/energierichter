/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf8ea',
          100: '#faedc7',
          200: '#f4d889',
          300: '#edc257',
          400: '#e7b345',
          500: '#d49a25',
          600: '#b5791a',
          700: '#915819',
          800: '#79481c',
          900: '#683d1d',
          950: '#3c1f0c',
        },
        accent: {
          50:  '#f0f6f2',
          100: '#dceade',
          200: '#bad5c1',
          300: '#8eb899',
          400: '#70a37f',
          500: '#4f8461',
          600: '#3d694d',
          700: '#345440',
          800: '#2d4436',
          900: '#273a2f',
          950: '#122018',
        },
        dark: {
          800: '#232424',
          900: '#101112',
          950: '#080909',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Barlow Condensed', 'Manrope', 'system-ui', 'sans-serif'],
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
