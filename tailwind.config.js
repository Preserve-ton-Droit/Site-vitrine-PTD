/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bleu': '#1568EA',
        'bordeaux': '#800020',
        'gris-fonce': '#333333',
        'gris-clair': '#666666',
        'noir': '#000000',
        'blanc': '#FFFFFF',
        'violet': '#B6BBED',
        'jaune': '#FBBB4D',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
