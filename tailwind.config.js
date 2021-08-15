module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e2e6e3",
          dark: "#4b5548",
        },
        secondary: {
          light: "#f5f5f4",
          dark: "#d1d5d2",
        },
        
      },
      fontFamily:{
        heading: ['Crimson Text'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
