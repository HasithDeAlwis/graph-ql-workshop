/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
        primary: "#FFFCEF",
        secondary: "#F3F2DC",
        queenBlue: "#3B6E99",
        moonStone: "#6CC1C3",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Ledger', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
