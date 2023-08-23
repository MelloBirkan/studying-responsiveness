/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "*.js"],
  theme: {
    extend: {
      colors: {
        "white-bg": "#ece9fd",
        indigoc: "#7158ef",
        title: "#090039",
        section: "rgba(10, 0, 57, 0.64)",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
