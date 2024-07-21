/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "transparent": 'transparent',
      "dark-dark": "#101012",
      "dark-light": "#17181a",
      "light-light": "#cacacc",
      "light-dark": "#b1b1b3", 
      "dark-btn-color": "#282829",
      "dark-btn-color-hover": "#373738",
      "light-btn-color": "#9d9d9e",
      "light-btn-color-hover": "#a7a7a8",
      "orange-border-color": "#e84505"
    },
    extend: {},
  },
  plugins: [],
};

