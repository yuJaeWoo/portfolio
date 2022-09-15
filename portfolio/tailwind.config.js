/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundSize: {
      'cover': 'cover',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        'geometry': "url('../public/images/geometry.png')",
        'header': "url('../public/images/header.png')",
      })
    },
  },
  plugins: [],
}
