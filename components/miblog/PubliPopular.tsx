import React from 'react'
import Image from 'next/legacy/image'
import Link from "next/link"
interface publi_popular{
  url:string,
  imagen:string,
  titulo:string
}
const PubliPopular = ({url,imagen,titulo}:publi_popular) => {
  return (
    <div  >
        <Link href={`/miblog/${url}`} className=' md:hidden'>
          <section className='bg-gray2 shadow-shadow1 cursor-pointer  w-full h-[85px] rounded-[5px] flex flex-row gap-[14px] '>
            <div className='relative w-[112px] h-full'>
            <Image className='rounded-tl-[5px] rounded-bl-[5px]' layout='fill' alt={titulo} src={imagen}/>
            </div>
            <article className='flex justify-center items-center text-azul2 text-left font-roboto font-normal'>
            {titulo}
            </article>
          </section>
          </Link>
        
          <Link href={`/miblog/${url}`} className='hidden md:flex md:flex-col md:gap-[15px]'>
          <section className='md:bg-gray2 md:shadow-shadow1 md:w-full md:cursor-pointer md:transition-all md:duration-[500ms] md:scale-95 md:hover:scale-100  md:h-[94px] md:rounded-[5px] md:flex md:flex-row md:gap-[16px] lg:w-[385px]'>
          <div className='relative w-[112px] h-full'>
            <Image className='rounded-tl-[5px] rounded-bl-[5px]' layout='fill' alt={titulo} src={imagen}/>
            </div>
            <article className='flex justify-center items-center text-azul2 text-left font-roboto font-normal'>
            {titulo}
            </article>
          </section>
          
          </Link>

    </div>
  )
}

export default PubliPopular