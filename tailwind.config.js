module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'body': ['Poppins'],
      },
      backgroundImage: {
        'banner1': "url('/src/image/banner1.jpg')",
        'banner2': "url('/src/image/banner2.jpeg')",
        'banner3': "url('/src/image/banner3.jpg')",
        'banner4': "url('/src/image/banner4.png')",
      },
      colors:{
        'overlay':"rgba(255, 255, 255, 0.8)",
        'overlay2':"rgba(0, 0, 0, 0.4)",
      },
      animation:{
        spin:'spin 6s linear infinite',
        wiggle:'wiggle 1s ease-in-out infinite',
        beat:'beat 1s ease-out infinite'
      },
      keyframes:{
        wiggle:{
          '0% , 100%' : {transform:'rotate(-6deg)'},
          '50%' : {transform:'rotate(6deg)'},
        },
        beat:{
          '0% , 100%' : {transform:'scale(1)'},
          '25%' : {transform : 'scale(1.2)'},
        },

      }
    },
  },
  plugins: [],
}
