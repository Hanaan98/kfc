/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cart':"url(\public\bucket-empty.png')",
        'cartImage':"url(\public\Untitled (68 × 68 px).png')"
      }
    },

  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
],
}