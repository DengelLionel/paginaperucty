import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Beneficio from './Beneficio';
interface beneficio{
    beneficio:string
}
interface BenefitsComponentProps {
    beneficios:beneficio[];
  }
const SliderBeneficios = ({beneficios}:BenefitsComponentProps ) => {
  return (
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
    className="mySwiper  w-screen h-[300px] md:w-[400px] md:rounded-[15px]">
       
      
       {beneficios?.map((beneficio:any,index:any)=>(
 <SwiperSlide key={index}>
 <section  className={`bg-secundary2 w-full h-full md:w-[400px] text-white font-bold font-montserrat p-[16px] flex flex-row justify-center items-center`}>
    <p className='text-center w-[280px]'>{beneficio.beneficio}</p>
    <svg className='swiper-button-prev' width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 20.6253L3.81941 11.6857L10.0002 2.74615L8.09741 0L0.000244141 11.6857L8.09741 23.3715L10.0002 20.6253Z" fill="white" fill-opacity="0.65"/>
</svg>
<svg className='swiper-button-next' width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000244141 20.6253L6.18108 11.6857L0.000244141 2.74615L1.90308 0L10.0002 11.6857L1.90308 23.3715L0.000244141 20.6253Z" fill="white" fill-opacity="0.65"/>
</svg>


 </section>
</SwiperSlide>
       )

       )}
       
      
       
     
       
     
      </Swiper>
  )
}

export default SliderBeneficios