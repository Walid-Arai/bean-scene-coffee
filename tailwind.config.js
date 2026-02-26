/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        clicker: ['"Clicker Script"', 'serif'],
      },
      colors: {
        primary: "#F9C06A",
        secondary: "#603809",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "10rem",
      },
    },
  },
  plugins: [],
}

