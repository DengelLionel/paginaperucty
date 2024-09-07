import React from 'react'
import CarouselBlog from './Carousel'
import PubliPopular from './PubliPopular'
import Card from './Card'
import { publicaciones } from '../../user/PublicacionesBlog'
import { publicaciones_populares } from '../../user/PublicacionesBlog'
const MiBlogBody = () => {
  return (
    <div>
        <section className='w-full md:flex md:flex-row md:gap-[30px] lg:w-[800px] lg:justify-center lg:items-center'>
         
        <div className='md:w-[50%] md:h-[50%] md:bg-blackTransparent md:backdrop-blur'>
        <CarouselBlog/>
        </div>
        
        <div className=' md:w-[50%] md:h-[452px] md:bg-white2 lg:w-auto lg:h-auto '>
        
          <h3 className='bg-yellow2 text-center flex justify-center items-center text-azul2 md:text-center font-rowdies h-[35px] md:w-[218px] md:h-[55px] md:mb-[22px]'> Publicaciones más populares</h3>
       <div className='flex flex-col mt-[13px] gap-[10px]'>
       {publicaciones_populares?.map((publi:any,index:any)=>(
             <PubliPopular
             key={index}
             url={publi.url}
             titulo={publi.titulo}
             imagen={publi.imagen}
             />
          ))}
       </div>
          
         
        </div>
        </section>
        <div className='p-[16px] flex flex-wrap w-full justify-center items-center md:flex md:flex-wrap md:w-full md:gap-[20px] md:justify-center '>
          {publicaciones?.map((publicacion:any,index:any)=>(
                <Card 
                key={index}
                keyy={index}
                url={publicacion.url}
                imagen={publicacion.imagen}
                categoria={publicacion.categoria}
                titulo={publicacion.titulo}
                />
          ))}
      
        </div>
      
    </div>
  )
}

export default MiBlogBody