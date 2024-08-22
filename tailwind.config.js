/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        
        'red': '#F03328',
        'orange': '#FF9E0C',

        'black':{
          default:'#000000',
          100:'#1F1F1F',
          300:'#3D3D3D',
          500:'#5C5C5C',
        },

        'grey':{
          600:'#D6D6D6',
          700:'#7A7A7A',
          800:'#B8B8B8',
          900:'#999999',
        },

        'white':{
          default:'#FFFFFF',
          500:'#F5F5F5',
        },


      }
    },
  },
  plugins: [],
}

