/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,md}",
    "./static/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "tg-primary": "#d32f2f", // Example primary red similar to TheGamer
        "tg-dark": "#121212",
        "tg-card": "#1e1e1e",
        "tg-text": "#e0e0e0",
        "tg-accent": "#ff5252",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
        display: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
