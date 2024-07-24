/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center : true,
      screens : {
       'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '650px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1080px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px', 
      }
    },
    extend: {},
  },
  plugins: [],
}

