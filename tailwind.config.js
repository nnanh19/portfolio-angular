module.exports = {
  mode: 'jit',
  darkMode: 'class', 
  purge: ['./src/**/*.{ts,html}'],
  theme: {
    extend: {
     fontFamily: {
       heebo : ['Heebo']
     },
     spacing : {
       '150' : '500px'
     }
    },
  },
  plugins: [],
}