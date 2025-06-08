/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      colors: {

      "bordeaux": "#A9215A",
      "gris-fonce": "#5C5C5C",
      "noir": "#252525",
      "bleu" : "#1568EA",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
