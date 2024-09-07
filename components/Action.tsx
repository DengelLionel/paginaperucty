import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
interface action{
    titulo:string,
    description:string,
    boton:string,
    imagen:string,
    link:string
}
const Action = ({titulo,description,boton,imagen,link}:action) => {
    
  return (
    <section className={`flex flex-col justify-center object-contain items-center mb-[50px] sm:pt-[100px] lg:pb-[32px] flex-row w-full cuadroaction`}  style={{backgroundImage:`url(${imagen})`,height:600}}>
    <section className='lg:w-full lg:flex lg:flex-row 2xl:justify-center 2xl:items-center'>
     <section>

    <h2 className='text-[36px] font-righteous font-normal text-center text-white p-[16px] leading-[45px] tracking-[0.015em] mb-[12px] sm:text-[40px] sm:w-[500px] md:text-[48px] md:w-[610px] md:p-[20px] md:leading-[60px] lg:ml-[20px] lg:mb-[12px] lg:text-left xl:text-[55px] xl:w-[710px] xl:p-[32px] xl:leading-[60px]'>{titulo}</h2>
   

    
    <article className='p-[16px] font-montserrat text-center font-medium text-[24px] leading-[35px] tracking-[0.015em] text-whiteTransparent sm:text-[26px] md:flex md:justify-center md:items-center md:leading-[50px] md:p-[20px] lg:items-center lg:leading-[40px] lg:font-bold xl:ml-[32px] xl:mb-[32px]'>
     <p className=' lg:w-[560px]'>{description}</p>
    </article>
    <article className='flex justify-center items-center p-[16px] mt-[21px] mb-[21px] lg:ml-[20px] xl:ml-[32px] xl:mt-0 '>
    <Link href={`${link}`} className='font-montserrat  font-bold text-[20px] text-center bg-yellow1 text-azul3 w-[280px] pl-[10px] pr-[10px] pt-[10px] pb-[10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] sm:text-[26px] sm:w-[70%] lg:transition-all lg:duration-[500ms] lg:hover:bg-yellow3 lg:hover:text-azul4'>{boton}</Link>
    </article>
   
    </section>
    </section>

    

    </section> 
  )
}

export default Action
