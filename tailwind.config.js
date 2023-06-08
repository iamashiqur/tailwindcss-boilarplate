/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "{html,js}", './index.html', './aboutus.html'
  ], 
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'body': ['"Roboto"'],
    },



    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1110px',
    },


    extend: {

      colors: {
        //Primary colors
        blue: "#0078D2",
        main_dark: "#0B0140",
        main_light: "#F5F3FD",

        //Secondary Color
        secondary: "#4AF8E3",
        secondary_shade: "#FFF3EE",
        secondary_light: "#F3EADA",

        //Dark Color
        dark1: "#06021C",
        dark2: "#33313E",


      },

    },
  },
  plugins: [],
}
