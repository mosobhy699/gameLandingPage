/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark_Gray': "#2E2E2E",
        'Dark_black':'#121212'
      },
      gradientColorStop: {
        33: '33%'
      },
      translate: {
        '4.25': '-50%',
      },
      border_Drak_Gray: {
        'darkgray': "#2E2E2E"
      }
    },
    plugins: [],
  }
}
