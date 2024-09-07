
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      
      colors:{
        "buttoncolor":"#F5BB19",
        "yellow2":"#F5BB19",
        "yellow3":"#FACC4B",
        "yellow4":"#dafa4b",
        "primary":"#300F9A",
        "secundary":"#3918A4",
        "textPrimary":"#BDC3FE",
        "textPrimary2":"#BDC3FD",
        "textPrimary3":"#E8EAFF",
        "textHover":"#fafafa",
        "whiteTransparent":"rgba(255,255,255,.9)",
        "whiteTransparent2":"rgba(155, 164, 231, 0.5)",
        "gray1":"#8E8E8E",
        "gray2":"#C7C6D3",
        "gray3":"#ABA7C0",
        "whiteTransparent3":"rgba(15, 14, 71, 0.3)",
        "yellow1":"#F5BB19",
        "blue1":"#000814",
        "blue2":"#0F0E47",
        "border1":"#5B59D3",
        "secundary2":"#71bb4c",
        "secundary3":"#40C64B",
        "white2":"#E6E6E6",
        "azulpalido":"#878BB1",
        "black2":"#54545B",
        "black3":"#76767F",
        "azul2":"#1E1357",
        "azul3":"#201F46",
        "azul4":"#3B3A5F",
        "white3":"#ABA7C0",
        "azulpalido2":"#8E7FE8",
        "white4":"#BFBBD6",
        "white5":"#CED0EB",
        "white6":"#dadadc",
        "focusInput":"#878BB1",
        "yellow5":"rgba(250, 204, 75, 0.82)",
        "linkHover":"rgba(155, 164, 231, 0.5)",
        "orangewhite":"#9D4BAF",
        "morado":"#EEB96D",
        "blackTransparent":"rgba(0,0,0,.5)",
        "azulblanco":"#DEECEB"
        
      },
      backgroundImage:{
        "blackDegradado":"linear-gradient(4.99deg, #03030E 1.67%, rgba(0, 0, 0, 0.03) 93.66%)",
        "presentacionDiseno":"url('https://res.cloudinary.com/dh9etf988/image/upload/v1704578788/creatiendaya/dise%C3%B1o_grafico_tienda_online_mobil_qojzx6.jpg')"
      },
      boxShadow:{
        "shadow1":" 0px 4px 4px rgba(1, 1, 55, 0.2) ",
        "shadow2":"0px 4px 4px #08080F",
        "shadow3":"0px 4px 4px rgba(0, 0, 0, 0.25)",
       
      },
      fontFamily:{
       roboto:'var(--font-roboto)',
       rowdies:'var(--font-rowdies)',
      righteous:'var(--font-righteous)',
      poppins:'var(--font-poppins)',
      montserrat:'var(--font-montserrat)',
      brunoacesc:'var(--font-brunoacesc)'
      },
      
    },
  },
  plugins: [

  ],
}
