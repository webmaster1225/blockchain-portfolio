/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#2dd4bf",
      },
      screens: {
        xxsm: "340px",
        xsm: "444px",
        xssm: "520px",
        xmd: "880px",
        xmmd: "976px",
        xlg: "1440px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
