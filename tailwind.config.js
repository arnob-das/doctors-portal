/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['[data-mode="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },  
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
