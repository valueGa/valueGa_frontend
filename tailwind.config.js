/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow' : 'FFEF63',
        'tuatara-900': '#3B3B3B',

      },

    },
  },
  plugins: [],
}
