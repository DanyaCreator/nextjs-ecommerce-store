import type { Config } from 'tailwindcss';

const config: Config = {
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
      white: '#FFF',
      accent: '#A18A68',
      gray: '#D8D8D8',
      'gray-dark': '#707070',
      black: '#000000',
    },
    fontSize: {
      logo: ['35px', '40px'],
      underlineLink: ['16px', '32px']
    },
  },
  plugins: [],
};
export default config;
