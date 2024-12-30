/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: {
        hero: "60vh",
      said : "70vh",
      phn: "80vh",
      graph: "30vh",
    },
    margin:{
      top:"10%",
      why: "15%",
      sm:"5%",
    },
   colors :{
    primary: "#E8F0FE",
    secondary: "#023047",
    buttons: "#005B61",
    head: "#01DC82",
    bgg: "#07405c",
   },
   fontSize :{
    lg: "20px",
    md: "18px",
    sm: "16px",
   },
   fontFamily :{
    heading : ["comorant"],
    paragraph : ["comorant"]
   }
  },
  },
  plugins: [],
}

