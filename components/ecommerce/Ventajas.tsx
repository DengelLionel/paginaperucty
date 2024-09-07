import React from 'react'

const Ventajas = ({titulo,descripcion}:any) => {
  return (
   <div className='flex flex-col justify-center items-center gap-[10px] md:h-[204px] sm:w-[320px] md:w-[240px] lg:w-[300px]'>
    <span className='font-rowdies text-[24px] text-white2 text-center'>{titulo}</span>
    <article className='md:h-[140px] md:flex md:items-center'>
    <p className='font-roboto text-[16px] text-textPrimary text-center '>{descripcion}</p>
    </article>
 
   </div>
  )
}

export default Ventajas