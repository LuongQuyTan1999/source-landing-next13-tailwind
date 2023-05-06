/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'pri': {
          50: '#EFF3EF',
          100: '#DFE7DF',
          200: '#B5C7B6',
          300: '#85A387',
          400: '#5C835E',
          500: '#336436',
          600: '#29502B',
          700: '#1F3C21',
          800: '#18301A',
          900: '#122413',
        },
        'sec': {
          100: '#E2E46F',
          200: "#5C97D6",
          300: "#1770D0"
        },
        'text': {
          50: "#FAFAFA",
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        'red': {
          50: "#FBF0F0",
          100: '#F7E2E0',
          200: '#EDBCB9',
          300: '#E1908B',
          400: '#D66A63',
          500: '#CC453C',
          600: '#A33730',
          700: '#7B2A24',
          800: '#62211D',
          900: '#4A1916',
        },
        'green': {
          50: "#ECFBF4",
          100: '#D9F6EA',
          200: '#A8EACE',
          300: '#6FDDAF',
          400: '#3DD193',
          500: '#0DC678',
          600: '#0A9E60',
          700: '#087848',
          800: '#065F39',
          900: '#05472B',
        }
      }
    },
  },
  plugins: [],
}