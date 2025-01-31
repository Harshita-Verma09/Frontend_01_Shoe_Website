/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media1200': '1200px',
        'media560': '560px',
        'media410': '410px'
      },
      backgroundImage: {
        'testimonial-section': "url('/images/testimonals_bk.png')",

      },
    },
    plugins: [
      plugin(function({addVarient}){
        addVarient("open-menu", "open-menu &");
      }),
      plugin(function({addVarient}){
        addVarient("active", "active&");
      })
    ],
  
  }

}