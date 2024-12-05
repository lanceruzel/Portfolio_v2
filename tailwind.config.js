/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#061A40',
        'secondary': '#0353A4',
        'tartiary': '#B9D6F2',
      },
      container: {
        padding: '1rem', // Add padding to mimic Bootstrap's behavior
      },
    },
    screens: {
      sm: '576px',   // Small screens and up
      md: '768px',   // Medium screens and up
      lg: '992px',   // Large screens and up
      xl: '1200px',  // Extra large screens and up
      xxl: '1400px', // 2XL screens and up
    },
  },
  plugins: [],
}

