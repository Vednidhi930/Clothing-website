/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}