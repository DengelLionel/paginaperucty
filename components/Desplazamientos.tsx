import React from 'react'
import { Marquee } from '@devnomic/marquee'
import "@devnomic/marquee/dist/index.css";
const Desplazamientos = () => {
  return (
    <Marquee fade={true} pauseOnHover={true} reverse={true} direction='left' className=" w-full h-[90px] bg-secundary2 flex flex-row align-center p-[15px]">
  
      {/* Repite las palabras según sea necesario */}
      <span className="text-2xl font-montserrat font-bold w-full  text-white pl-[20px] tracking-wider">EXPERIENCIA COMPROBADA</span>
      <span className="text-2xl font-montserrat font-bold w-full  text-white pl-[20px] tracking-wider">ENFOQUE PERSONALIZADO</span>
      <span className="text-2xl font-montserrat font-bold w-full text-white pl-[20px] tracking-wider">COMPROMISO CON CALIDAD</span>
      {/* Agrega más palabras según sea necesario */}
  
  </Marquee>
  )
}

export default Desplazamientos