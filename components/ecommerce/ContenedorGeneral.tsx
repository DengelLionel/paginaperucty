import React from 'react'

const ContenedorGenearal = ({children}:any) => {
  return (
    <div className='pl-[16px] pr-[16px] pb-[34px] flex  flex-col gap-[30px] justify-center items-center sm:flex sm:justify-center sm:items-center sm:gap-[30px] sm:flex-row md:gap-[30px] lg:gap-[50px] lg:justify-center lg:items-center lg:h-auto'>
        {children}
        </div>
  )
}

export default ContenedorGenearal