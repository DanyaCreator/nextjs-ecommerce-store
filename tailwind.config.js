// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3%',
        sm: '3%',
        md: '2rem',
        lg: '3rem',
        xl: '6rem',
      },
    },
    colors: {
      ...colors,
      white: '#FFF',
      'white-transparent': '#FFFFFFA5',
      accent: '#A18A68',
      'gray-light': '#EFEFEF',
      gray: '#D8D8D8',
      'gray-dark': '#707070',
      black: '#000000',
    },
    fontSize: {
      logo: ['35px', '40px'],
      underlineLink: ['16px', '32px'],
      medium: ['14px', '16px'],
      small: ['12px', '20px'],
      'body-large': ['16px', 'auto'],
    },
  },
  plugins: [],
};
