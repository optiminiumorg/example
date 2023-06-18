/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js,tsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        fira: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}