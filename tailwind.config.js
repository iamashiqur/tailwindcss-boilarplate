/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/output.css',
    './index.html',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        "themeBlack": "#334155",
        "lightBlue": "#10B981",
        "gary": "#e2e8f0",
        "lightGary": "#F1F5F9",
        "green": "#10B981",
        "greenLight": "#D1FAE5",
        "greenDeep": "#047857",
        "grayLight": "#CBD5E1",
        "yellow": "#FEF3C7",
        "yellowLight": "#F59E0B",
        "yellowDeep": "#B45309",
        "light": "#F1F5F9",
        "lightLight": "#64748B",
        "lightDeep": "#334155",
        "redLight": "#FEE2E2",
        "red": "#EF4444",
        "redDeep": "#B91C1C",

        // dark color
        "dark": "#1E293B",
        "lightDark": "#6c7a87",
        "lightBlack": "#e8eaec",
        "lightWhite": "#F8FAFC",
        "lightGreen": "#E7F8F2",
      },
      fontSize: {
        'base': '16px',
        'md': '18px',
        'lg': '20px',
        'xl': '24px',
        'xxl': '30px',
        'xxxl': '50px',
      },
    },
  },
  plugins: [],
}