module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["trajan-pro-3"],
      },
      textColor: {
        "logo-light": "#ffd700",
        "logo-dark": "ca9800",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
