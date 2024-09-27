/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{

        'red': '#F03328',
        'orange': '#FF9E0C',
        'orange-gradient': '#D58000',

        'black':{
          'simple':'#000000',
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
          'simple':'#FFFFFF',
          500:'#F5F5F5',
        }
      },
      fontFamily:{
        'nunito':['Nunito','sans-serif'],
      },

      fontSize: {
        'display-1': ['72px', { fontWeight: '700' }],
        'heading-1': ['56px', { fontWeight: '700' }],
        'heading-2': ['48px', { fontWeight: '700' }],
        'heading-3': ['32px', { fontWeight: '700' }],
        'heading-3-variant': ['32px', { fontWeight: '500' }],
        'heading-4': ['24px', { fontWeight: '700' }],
        'heading-4-uppercase': ['24px', { fontWeight: '700', textTransform: 'uppercase' }],
        'paragraph-1': ['18px', { fontWeight: '400' }],
        'paragraph-2': ['16px', { fontWeight: '400' }],
        'button': ['20px', { fontWeight: '700' }],
        'hyperlink': ['20px', { fontWeight: '600' }],
        'heading-medium': ['20px', {fontWeight: '500'}],
      },

      boxShadow:{
        'custom-shadow':' 0px 4px 8px rgba(0,0,0, 0.15) ',
      }
    },
  },
  plugins: [],
}

