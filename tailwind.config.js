/* npx tailwindcss-cli@latest build ./css/styles.css -o ./css/tailwind.css */

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
