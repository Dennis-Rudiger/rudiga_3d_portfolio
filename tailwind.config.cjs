/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#111144",
          secondary: "#223382",
          tertiary: "#dad1c8",
          "black-100": "#100co8",
          "black-200": "#27221f",
          "white-100": "#f3f4f5",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };