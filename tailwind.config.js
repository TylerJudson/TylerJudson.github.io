/* npx tailwindcss-cli@latest build ./css/styles.css -o ./css/tailwind.css */
// https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'softRed': '#e76f51',
        'sandy': '#f4a261',
        'orange': '#e9c46a',
        'cyan': '#2a9d8f',
        'teal': '#264653',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
