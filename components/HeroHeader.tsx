import React from 'react'
import Image from "next/image";
import BlackFriday from "/public/images/diseno_tienda_online.png";
import Partners from "/public/images/partners.svg";
interface hero{
    titulo:string,
    contenido:string,
    palabra:string
}
const HeroHeader = ({ titulo, contenido,palabra }:hero) => {
  return (
    <div className="bg-secundary2 mt-[80px] flex justify-center flex-wrap  sm:gap-[46px] xl:gap-[128px]  p-6 mb-6 pt-20 pb-20">
      <div className="flex justify-center flex-col gap-[28px] md:w-[300px] xl:w-[528px]">
        <h1 className=" uppercase md:w-auto sm:w-[300px]   font-bold  text-[#000208] text-center lg:text-left">
        <span className='font-montserrat text-[40px] lg:text-[60px]'>{palabra}</span> <span className='titulo-diseno'>{titulo}</span> 
        </h1>

        <p className="font-montserrat  text-base font-medium text-white text-center md:text-left md:col-span-2 md:row-start-2 lg:text-[22px]">
          {contenido}
        </p>

        <Image
          className="w-80 h-20 md:w-96 md:h-28"
          src={Partners}
          alt="Partner shopify en latinoamerica"
        />
        </div>
        <Image
          className="w-64 h-64 md:w-80 md:h-96"
          src={BlackFriday}
          alt="Diseño de tienda online"
        />
      
    </div>
  )
}

export default HeroHeader
