module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#000",
      secondary: "#fff",
      third: "#3e6ae1",
      fourth: "#a1a1aa",
    },
    fontFamily: {
      ddin: ["ddin", "serif"],
      ddinbold: ["ddinbold", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
