import React from 'react'
import ContenedorGenearal from "./ContenedorGeneral"
import Titulo from '../Titulo'
import Image from 'next/legacy/image'
import {serviciosEcommerce, serviciosSitioWeb} from "../../user/User"
import Link from "next/link"
import Ventajas from './Ventajas' 
import EmpresasColabore from './EmpresasColabore'
const Contenido = () => {
  return (
    <ContenedorGenearal >
    <Titulo titulo='Mis servicios'/>
    
    
  
    {serviciosEcommerce?.map((servicio:any,index:any)=>(
         <section  key={index}  className={`sm:w-[317px] flex flex-wrap items-center justify-center lg:w-full ${index % 2 === 0 ? 'lg:flex lg:flex-row lg:gap-[100px]' : 'lg:flex lg:flex-row-reverse lg:gap-[100px]'} `} >
         

         <section className=' flex flex-col items-center justify-center gap-[30px] lg:w-[400px]'>
         
         <h2 className='font-rowdies text-[26px] leading-[39.74px] text-center tracking-[0.015em] not-italic font-normal text-white2 md:text-textPrimary  md:leading-[40px] lg:w-[400px]'>{servicio.titulo}</h2>
         <article className='relative w-[235px] h-[206px] md:w-[317px] md:h-[293px] mb-[30px] xl:w-[400px] xl:h-[400px]'>
         <Image className={`rounded-[10px] ${index % 2===0?'lg:rounded-bl-[200px]':'lg:rounded-br-[200px]'}`} alt='imagen contenido' layout='fill' src={servicio.imagen}/>
         </article>
         </section>  

         <article className=' md:w-[407px] lg:w-[400px]'>
          <p className='text-textPrimary text-[16px] font-roboto tracking-[0.015em] font-normal'>{servicio.descripcion}</p>
         
         <Link href={servicio.cotizar} className='bg-yellow1 mt-[30px] flex items-center justify-center text-blue1 font-roboto font-extrabold rounded-[15px] w-[327px] h-[50px] shadow-shadow3 md:w-[424px] lg:w-full  lg:w-[280px] lg:transition-all lg:duration-[500ms] lg:hover:bg-yellow3 lg:hover:text-azul4'>COTIZAR</Link>
         </article>

       
         </section>
    ))}
     <Titulo titulo='Empresas con las que colaboré'/>
      <EmpresasColabore/>
   <Titulo titulo='¿Para quién es este servicio?'/>
   <section className='flex flex-wrap gap-[30px] items-center justify-center lg:flex-row lg:gap-[69px]'>
   <article className='relative w-[190px] h-[190px] lg:w-[400px] lg:h-[400px]'>
    <Image alt="¿Para quién es este servicio?" className='rounded-full' layout='fill'  src="https://res.cloudinary.com/darps1cta/image/upload/v1679434686/sitioweb/Lionel_RC_landing_page_de_venta_de_cursos_25712732-179e-4475-8c8d-464096c86ae3_uuw6fx.png"/>
    </article>
    <p className='font-roboto text-[16px] font-normal tracking-[0.015em] text-textPrimary sm:w-[420px] md:w-[463px] lg:w-[397px] text-center '>¿Quieres vender más y atraer clientes a tu negocio en línea? Ofrecemos diseño web, desarrollo web y ayuda o desarrollo Shopify para crear una presencia en línea profesional y efectiva. Creamos páginas de ventas y otras páginas para aumentar tus ventas y llevar clientes a tu negocio. Contáctanos hoy mismo para llevar tu negocio al siguiente nivel en línea.</p>
</section>
<Titulo titulo='¿Cuáles son las ventajas?'/>
<section className='flex flex-col gap-[16px] md:flex-row md:gap-[20px]'>
 <Ventajas titulo="Diseño personalizado" descripcion="Diseño profesional, responsive (compatible con dispositivos móviles) y personalizado, dando protagonismo a tu página y aumentando el rendimiento."/>
<Ventajas titulo="Optimizado" descripcion="Infraestructura con optimización de caché, reducción de tamaño de imágen e integración de CDN. Para aumentar el rendimiento de la página y las conversiones."/>
<Ventajas titulo="Estructura Profesional " descripcion="Diseño y codificación con buenas practicas para tu satisfacción."/>     
</section>

    </ContenedorGenearal>
  )
}

export default Contenido