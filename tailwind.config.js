/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '419px'},
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'textwhite':'white',
        'text1':'#ffffffb3',
        'mainblack1' : 'black',
        'mainblack2' : '#181818',
        'mainblack3' : '#242424',
        'mainblack4' : '#2a2a2a',
        'mainblack5' : '#2c2e31',
        'mainpurple' : '#6c47ff'
      },
      display: ["group-hover"],
      keyframes: {
        fade: {
          'from': { bottom:'-8px' },
          'to': { bottom: '8px' },
        },
        showForm: {
          'from': { top:'30%' },
          'to': { top: '50%' },
        },
        fadeInfo:{
          'from': { opacity:'0' },
          'to': { opacity: '1' },
        },
        fadeNav:{
          'from': { width: '0' },
          'to': { width: '300px' },
        }
      },
      animation: {
        'move': 'fade 0.3s linear',
        'showLogin':'showForm 0.3s ease-out',
        'fadeinfo': 'fadeInfo 0.3s linear',
        'fadenav': 'fadeNav 0.3s ease-out'
      },
    },
  },
  plugins: [],
  
}
