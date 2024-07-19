/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // tremor path
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

