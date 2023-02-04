/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  content: ["**/*.html"],
  theme: {
    screens: {
      sm: "360px",
      md: "760px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Sans: ["Open Sans", "sans-serif"],
      },

      colors: {
        "c.blue": "#484DFF",
        bluedark: "#1A3066",
        reddark: "#CC0000E6",
      },
    },
  },
  plugins: [],
}
