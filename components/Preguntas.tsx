import {useState} from 'react'
import Link from 'next/link'
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
import { useRouter } from 'next/router';
import Faq from './Faq'
import Image from 'next/image'
const questions=[
  { id:1,
     question:"¿Necesito tener habilidades técnicas para tener una tienda online?", 
     state:false, 
     answer:"No, en 'Crea Tienda Ya' manejamos todos los aspectos técnicos de la configuración y mantenimiento de tu tienda online. Tenemos planes para mantenimiento al mes y anual." },
      { id:2,
         question:"¿Qué es CREA TIENDA YA?",
          state:false,
           answer:"Somos una agencia de desarrollo y diseño en ecommerce. Hacemos tiendas online optimizados, personalizados. Somos expertos en programación web,diseño web, diseño gráfico." },
        { id:3,
        question:" ¿Pueden personalizar mi tienda online a mi gusto?",
        state:false,
         answer:"Absolutamente, trabajamos contigo para asegurarnos de que tu tienda online refleje la personalidad de tu marca y satisfaga tus necesidades comerciales." },
         { id:4,
          question:" ¿Para qué paises hacen tiendas online?",
          state:false,
           answer:"Para todos los paises. Trabajamos segun sus requerimientos. Investigamos, analizamos. Tenemos clientes de Perú, Chile, Colombia, Ecuador, España, México, Andorra, Alemania y Estados Unidos." },
           { id:5,
            question:" ¿Qué servicios online ecommerce hacen?",
            state:false,
             answer:"Hacemos: Desarrollo de tiendas online, diseño web de tiendas online, rediseño de tienda online, diseño gráfico de tiendas online, aplicaciones shopify para tu tienda online y mantenimiento para tu tienda online" } ] 
const Preguntas = () => {
  const [idd,setIdd]=useState<any|undefined>({id:0,state:false});
  const router = useRouter();
  const excludedPaths = ['/preguntas-frecuentes'];
  return (
    <ContainerGeneral>
        <Titulo titulo='Preguntas frecuentes para tu tienda online shopify'/>
        <section className='flex flex-wrap items-center'>
        {!excludedPaths.includes(router.pathname) && (
         <Link href='#'>
        
         <Image className='static top-0 max-h-[300px]' alt='Preguntas frecuentes de crea tienda ya' width={340} height={300} src={'https://res.cloudinary.com/dh9etf988/image/upload/v1697059311/creatiendaya/faqss_ggvif0.png'}/>
  
         </Link>
               )}
       
      
        <section className='font-montserrat not-italic font-normal text-[20px] leading-[26px] tracking-[0.012em] text-white2 sm:p-[24px] md:text-[20px] md:leading-[33px] lg:pl-[60px] lg:pr-[60px] lg:pt-[30px] lg:pb-[30px] lg:text-[20px] lg:leading-[33px] lg:w-[600px]'>
       
        <Faq faqs={questions} />
        </section>
        </section>
       
      {/*   colorTextAnswer="text-azulpalido2" colorIconActive="#F5BB19" colorIconDefault="#4B4A78" colorTextoActive="text-yellow2" colorTextoDefault="text-black3" questions={questions} idd={idd} setIdd={setIdd} */}
    </ContainerGeneral>
  )
}

export default Preguntas