import React from 'react'
import Carousel from "nuka-carousel"
import ImagenCarouselMostrar from './ImagenCarouselMostrar'
import { publicaciones } from '../../user/PublicacionesBlog'

const CarouselBlog = () => {
  return (
    <Carousel adaptiveHeightAnimation={true} adaptiveHeight={true} defaultControlsConfig={{prevButtonText:"<",nextButtonText:'>'}} wrapAround={true} autoplay={true}>
        {publicaciones.map((publi:any,index:any)=>(
                 <ImagenCarouselMostrar 
                 key={index}
                 url={publi.url}
                 imagen={publi.imagen}
                 titulo={publi.titulo}
                 />
        ))}
   
       
       
  </Carousel>
  )
}

export default CarouselBlog