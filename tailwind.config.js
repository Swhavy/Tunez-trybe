/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bodyImage: "url(Images/npmunsplash_X4SM319VgFU.png)"
      },
      margin:{
        1.2: "1.2rem",
        3: "3vh"
      },
      colors: {
        porch: "#552424"
      },
      
      width: {
        96: "30rem",
        32: "28rem",
        35: "35rem",
        25: "25rem",
        42: "12rem",
      },
      scale: {
        8: "0.8",
        5: "0.5",
        85: "0.85",
        none: "1.9",
        0.65: "0.65",
        0.6: "0.6",
        1.8: "1.8",
        3: "0.48",
      },
      fontSize:{
        16:"1.5vw",
        1.2:"1.2vw",
        s2m: "1rem",
      },
      height:{
        70:"70vh",
        42: "12rem",
        3.5: "3.5rem",  
      },
      screens:{
        'h-800': {'raw': '(min-height: 800px)'}
      }
    },
  },
  plugins: [],
}

