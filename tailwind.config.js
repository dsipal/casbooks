// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        merriweather: ["merriweather", "serif"],
        roboto: ["roboto", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
}