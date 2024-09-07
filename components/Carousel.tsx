import {memo } from 'react';
import Image from 'next/image';
import Link from "next/link"
const Carousel = ({cards}:any) => {

  return (
    
    <div  className="scrollx">
      {cards.map((card:any,index:any)=>(
         <div key={index}
         className={`transition-transform gap-[20px] duration-300 ${card.color} rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px] flex justify-center items-center flex-col p-[20px] rounded-tl-[20px] w-[200px] h-[340px] lg:w-[279px] lg:h-[394px] lg:flex lg:flex-col lg:gap-[20px] `}
       >
       
      <Image className="w-[160px] h-[140px] " width={160} height={140} src={card.img} alt={card.title} />
      
       
          <article className='flex flex-col justify-center'>
         <p className='font-montserrat not-italic font-bold h-[100px] text-[18px] leading-[28px] text-center tracking-[0.015em] text-white2 lg:text-[23px] lg:leading-[38px] lg:h-[130px]'>{card.title}</p>
         <Link href={card.href} target='_blank' className='bg-white2 rounded-tl-[7px] rounded-tr-[7px] rounded-br-[7px] rounded-bl-[7px] font-roboto not-italic font-bold text-[16px] leading-[19px] text-center tracking-[0.015em] flex justify-center items-center text-azul3 h-[50px] lg:text-[24px] lg:transition-all lg:leading-[30px] lg:w-full lg:h-[60px] lg:duration-[500ms] lg:hover:bg-secundary2 lg:hover:text-white2 lg:hover:shadow-shadow3'>{card.titulobutton}</Link>
         </article>
       
        
       </div>
      ))}
     
     
    </div>

  )
}

export default memo(Carousel)