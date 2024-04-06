/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors:{
      'purple':'#7258DB',
      'yellow':'#F9B029',
    }
  },
  plugins: [require("daisyui")],
}

