import React from 'react'
import Head from 'next/head'
import Header from '../../components/layouts/Header'
import HeroHeader from '../../components/HeroHeader'
import YourIdea from '../../components/YourIdea'
import ContainerGeneral from '../../components/ContainerGeneral'
import Titulo from '../../components/Titulo'
import Procesos from '../../components/Procesos'
import Desplazamientos from '../../components/Desplazamientos'
import Image from 'next/image'
import EmpresasColabore from '../../components/ecommerce/EmpresasColabore'
import Proyectos from '../../components/Proyectos'
import FooterContent from '../../components/FooterContent'
import Whatsapp from '../../components/Whatsapp'
import Action from '../../components/Action'
const DisenoTiendashopify = () => {
  const procesos=[
    {
      titulo:"Consulta Inicial",
      descripcion:"Nos reunimos contigo para comprender tus objetivos y necesidades específicas."
    },
    {
      titulo:"Diseño y Desarrollo",
      descripcion:"Creamos y personalizamos tu tienda, incorporando tu visión y garantizando la funcionalidad."
    },
    {
      titulo:"Pruebas y Optimización",
      descripcion:"Probamos exhaustivamente tu tienda para garantizar un funcionamiento perfecto y la máxima eficiencia."
    }
  ]
  return (
    <div>
       <Head>
       <title>Un diseño que atrae a más clientes y aumenta tus ventas</title>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:image" content="https://res.cloudinary.com/dh9etf988/image/upload/v1705081869/creatiendaya/LOGO_CTY_VERDE_02_iauov1.png" />
        <meta name="description" content="Nuestro equipo crea tiendas Shopify personalizadas que no solo se ven increíbles, sino que también están diseñadas para maximizar tus ventas y crecimiento." />
        <meta name="keywords" content="mejor diseño de tienda Shopify, servicios profesionales Shopify, crear tienda Shopify desde cero, experto en Shopify, diseño personalizado para Shopify"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <section className="flex flex-col justify-center">
  <HeroHeader palabra="TRANSFORMA" titulo=" TU VISIÓN EN UNA TIENDA DE EXITO" contenido="Somos expertos diseñando tiendas online, somos" />
  <YourIdea titulo="Diseño de tienda online shopify para aumentar tus ventas" />
<div className='flex flex-col justify-center items-center'>
<Titulo titulo='PROCESO DE TRABAJO'/>
<Procesos procesos={procesos}/>
<Titulo titulo='¿POR QUÉ ELEGIRNOS?'/>
 <Desplazamientos/> 
 <Titulo titulo='NUESTRAS HERRAMIENTAS'/>
 <ContainerGeneral>
  <Image  width={200} height={84} alt='LIQUID' src={'https://res.cloudinary.com/dh9etf988/image/upload/v1704229937/creatiendaya/An-overview-of-Liquid-2016_q37cqq.jpg'}/>
  <Image width={200} height={84} alt='HYDROGEN' src={'https://res.cloudinary.com/dh9etf988/image/upload/v1704229937/creatiendaya/1_ZJtr7nGBHWXJXKjF4r474g_ttclbs.webp'}/>
 </ContainerGeneral>
 <Titulo titulo='NUESTROS CLIENTES'/>
 <EmpresasColabore/>
 <Titulo titulo='NUESTROS PROYECTOS'/>
 <Proyectos/>
 <Action link='https://wa.link/zqg997' titulo='Descubre cómo podemos transformar tu tienda Shopify.' description='¡Obtén tu presupuesto gratis ahora!' boton='Pide tu presupuesto ahora' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1709345698/creatiendaya/tienda_online_peru_hhfxer.png'/>
 <Whatsapp/>
 <FooterContent/>
</div>
 
  
</section>

    </div>
  )
}

export default DisenoTiendashopify