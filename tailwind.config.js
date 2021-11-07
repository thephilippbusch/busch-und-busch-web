module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["trajan-pro-3"],
      },
      textColor: {
        "logo-light": "#ffd700",
        "logo-dark": "#9c7500",
      },
      borderColor: {
        "logo-light": "#ffd700",
        "logo-dark": "#9c7500",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
