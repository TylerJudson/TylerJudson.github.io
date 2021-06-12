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
        'cyan-400': '#2FB1A2',
        'cyan-500': '#2a9d8f',
        'cyan-600': '#279185',
        'teal': '#264653',
        'teal-400': '#2d5362',
        'teal-500': '#264653',
        'teal-600': '#203B46',
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
