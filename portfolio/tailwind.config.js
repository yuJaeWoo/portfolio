/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    backgroundSize: {
      'cover': 'cover',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        // 'geometry3': "url('../public/images/paint1.png')",
        // 'header': "url('../public/images/paintB1.png')",
        // 'geometry3': "url('../public/images/paintB2.png')",
        // 'header': "url('../public/images/header.png')",
      })
    },
  },
  plugins: [],
}
