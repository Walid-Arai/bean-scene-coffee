/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        clicker: ['"Clicker Script"', 'serif'],
      },
    },
  },
  plugins: [],
}

