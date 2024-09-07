import React from 'react'
import Image from "next/legacy/image"
import Link from 'next/link'
interface card{
    imagen:string,
    categoria:string,
    titulo:string,
    keyy:any,
    url:string
}
const Card = ({imagen,categoria,titulo,keyy,url}:card) => {
    
  return (
   
    <Link href={`/miblog/${url}`} className={`w-[328px] h-[365px] cursor-pointer md:w-[300px] md:h-auto rounded-[5px] bg-gray3 scale-95 transition-all duration-[500ms] hover:scale-100 shadow-shadow1`}>
        <div className={`relative w-[328px] h-[213px] md:w-[300px]`}>
            <Image className='rounded-tl-[5px] rounded-tr-[5px]' layout='fill' alt={titulo} src={imagen}/>
        </div>
        <div className='pr-[19px] pt-[8px] pb-[19px] pl-[19px] '>
            <h3 className='font-roboto font-medium text-azul2 text-[14px]'>{categoria}</h3>
            <h1 className='font-roboto font-semibold text-azul2 text-[24px]'>{titulo}</h1>
        </div>
    </Link>
  
  )
}

export default Card