import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import ImagenCuadroAction from './ImagenCuadroAction';

// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';

const Sliders = () => {

  return (
    <>
    <div className='flex lg:hidden'>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev',enabled:true}}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper mt-[80px] w-full h-full ml-auto mr-auto"
      >
        <svg className='swiper-button-prev' width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 20.6253L3.81941 11.6857L10.0002 2.74615L8.09741 0L0.000244141 11.6857L8.09741 23.3715L10.0002 20.6253Z" fill="white" fill-opacity="0.65"/>
</svg>
<svg className='swiper-button-next' width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000244141 20.6253L6.18108 11.6857L0.000244141 2.74615L1.90308 0L10.0002 11.6857L1.90308 23.3715L0.000244141 20.6253Z" fill="white" fill-opacity="0.65"/>
</svg>
        <SwiperSlide>
            <Image src={'https://res.cloudinary.com/dh9etf988/image/upload/v1697671489/creatiendaya/pantalla_celular_h2em8g.png'} width={400} height={500} alt='slide'/>
        </SwiperSlide>
        <SwiperSlide>
        <ImagenCuadroAction activarboton={true} titulo='' subtitulo='' textoBoton='PEDIR SERVICIO' link='/servicios/diseno-tienda-shopify' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1697256601/creatiendaya/creamos_tu_tienda_online_shopify_1_y68yj6.png'/>
        </SwiperSlide>
      </Swiper>


      </div>
      <div className='hidden lg:flex'>
      <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev',enabled:true}}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper mt-[80px]"
   
      >
       <svg className='swiper-button-prev' width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 20.6253L3.81941 11.6857L10.0002 2.74615L8.09741 0L0.000244141 11.6857L8.09741 23.3715L10.0002 20.6253Z" fill="white" fill-opacity="0.65"/>
</svg>
<svg className='swiper-button-next' width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000244141 20.6253L6.18108 11.6857L0.000244141 2.74615L1.90308 0L10.0002 11.6857L1.90308 23.3715L0.000244141 20.6253Z" fill="white" fill-opacity="0.65"/>
</svg>
      
       
        <SwiperSlide>
        <ImagenCuadroAction activarboton={true} titulo='' subtitulo='' textoBoton='PEDIR SERVICIO' link='/servicios/diseno-tienda-shopify' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1697246592/creatiendaya/dise%C3%B1amos_y_creamos_tu_tienda_online_shopify_ex5hrc.png'/>
    
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'https://res.cloudinary.com/dh9etf988/image/upload/v1697247776/creatiendaya/tienda_ii_1_msx4fv.png'} width={900} height={400} alt='slide'/>
        </SwiperSlide>
       
     
       
     
      </Swiper>
      </div>
      </>
  )
}

export default Sliders