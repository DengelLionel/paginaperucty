import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
interface imagenCarousel{
    url:string,
    imagen:string,
    titulo:string
}
const ImagenCarouselMostrar = ({url,imagen,titulo}:imagenCarousel) => {
  return (
        <Link href={`/miblog/${url}`}>
         <section className='relative w-full h-[300px]  '>
        <Image layout='fill' src={imagen}/>
        <div className='w-full h-auto p-[16px] bg-blackTransparent backdrop-blur z-[20] relative '>
        <h1 className='text-white font-roboto font-medium text-center md:text-[20px]'>{titulo}</h1>
        </div>
        
        </section>
        </Link>
  )
}

export default ImagenCarouselMostrar