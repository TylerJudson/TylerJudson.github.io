/* npx tailwindcss-cli@latest build ./css/styles.css -o ./css/tailwind.css */
// https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'softRed': '#e76f51',
        'softRed-100': '#F3B5A5',
        'softRed-200': '#F0A693',
        'softRed-300': '#EE9781',
        'softRed-400': '#f4a261',
        'softRed-500': '#e76f51',
        'softRed-600': '#E76A4B',
        'softRed-700': '#E45C3A',
        'softRed-800': '#E24D28',
        'softRed-900': '#D7431D',

        'sandy': '#f4a261',
        'sandy-100': '#FAD3B3',
        'sandy-200': '#F8C8A0',
        'sandy-300': '#F7BC8D',
        'sandy-400': '#F6B179',
        'sandy-500': '#f4a261',
        'sandy-600': '#F39B53',
        'sandy-700': '#F29040',
        'sandy-800': '#F0852D',
        'sandy-900': '#EF7A1A',

        'orange': '#e9c46a',
        'orange-100': '#F4E3B8',
        'orange-200': '#F2DCA6',
        'orange-300': '#EFD595',
        'orange-400': '#ECCE83',
        'orange-500': '#e9c46a',
        'orange-600': '#E7C15F',
        'orange-700': '#E4BA4E',
        'orange-800': '#E2B33C',
        'orange-900': '#DFAC2A',

        'cyan': '#2a9d8f',
        'cyan-100': '#4ED0C1',
        'cyan-200': '#3ECCBB',
        'cyan-300': '#33C1B1',
        'cyan-400': '#2FB1A2',
        'cyan-500': '#2a9d8f',
        'cyan-600': '#279185',
        'cyan-700': '#228176',
        'cyan-800': '#1e7167',
        'cyan-900': '#1A6158',

        'teal': '#264653',
        'teal-100': '#40768C',
        'teal-200': '#3A6B7E',
        'teal-300': '#335F70',
        'teal-400': '#2d5362',
        'teal-500': '#264653',
        'teal-600': '#203B46',
        'teal-700': '#1A2F38',
        'teal-800': '#13242A',
        'teal-900': '#0D181C',
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
