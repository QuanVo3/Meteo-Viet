import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',    // For Pages Router
    './app/**/*.{js,ts,jsx,tsx}',      // For App Router
    "./app/globals.css",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", 'sans-serif'],    // Custom Raleway Light font
      },

    },
  },
  plugins: [],
};

export default config;