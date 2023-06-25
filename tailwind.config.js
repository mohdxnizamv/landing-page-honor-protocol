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
  darkMode: "class",
  theme: {
    screens: {
      sm: "360px",
      md: "760px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        green: "#353B17",
        softGreen: "#4F5727",
        blue: "#484DFF",
      },
      backgroundImage: {
        "hero-pattern": "url('../image/wallpaper-honor.jpg')",
        "footer-texture": "url('../image/')",
      },
    },
  },
  plugins: [],
}
