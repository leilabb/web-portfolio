// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your file structure
    "./src/app.css", // Add this if it's not under ./src
  ],
  theme: {
    extend: {
      colors: {
        // background:"#191919",
        background: "#111111",
        card: "#262626",
        link: "#000000",
      },
      // Add other theme extensions here (spacing, fonts, etc.)
    },
  },

  plugins: [],
};
