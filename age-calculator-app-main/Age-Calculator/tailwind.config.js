/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '770px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderRadius: {
      'xl': '10px',
      '2xl': '20px',
      '5xl': '200px',
      'full': '9999px'
    },
    extend: {
      colors: {
        'black': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#000000',
        },
        'purple': {
          '50': '#fcf3ff',
          '100': '#f7e3ff',
          '200': '#f0cdff',
          '300': '#e5a5ff',
          '400': '#d66cff',
          '500': '#c735ff',
          '600': '#b90fff',
          '700': '#b005ff',
          '800': '#8a06c3',
          '900': '#71079c',
          '950': '#4f0076',
      },
            
      },
    },
  },
  plugins: [],
}

