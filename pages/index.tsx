import Head from 'next/head'
import "componentes-dengel/dist/style.css" 
import MisServicios from '../components/MisServicios'
import LoQueYoOfrezco from '../components/LoQueYoOfrezco'
import Preguntas from '../components/Preguntas'
import Formulario from '../components/Formulario'
import FooterContent from '../components/FooterContent'
import Header from '../components/layouts/Header'
import Action from '../components/Action'
import Sliders from '../components/Sliders'
import Beneficios from '../components/Beneficios'
import Whatsapp from '../components/Whatsapp'
export default function Home() {

  return (

    <div>
      <Head>
      <title>Diseñamos y rediseñamos tu tienda online shopify Perú</title>
      <meta property="og:image" content="https://res.cloudinary.com/dh9etf988/image/upload/v1705081869/creatiendaya/LOGO_CTY_VERDE_02_iauov1.png" />
<meta name="description" content="Creamos tu tienda online. Diseñamos tu tiendas online y estamos comprometidos en ayudarte a lanzar y hacer prosperar tu negocio  de manera efectiva y exitosa. Con diseño personalizado en tu tienda online" />
<meta name="keywords" content="ayuda en tienda online, tienda virtual para Perú, tiendas online Perú, tienda virtual precio economico, experto en tienda en línea, necesito ayuda en mi tienda online, negocio en línea, dropshipping en Perú, emprendimiento,emprendedor" />
<meta name="robots" content="index, follow" />
        <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      
     <Header/>
  


      <main className='pb-[40px] ' >
      <Sliders/>
      <Beneficios/>
     <MisServicios/>
     <LoQueYoOfrezco/>
     
  {/* <HechaVistasoProyectos/> */}
    {/*  <PlantillasWeb/> */}
     <Preguntas/>
     <Action link='https://wa.link/zqg997' titulo='Rediseña tu tienda online' description='Mejoramos tu tienda online con un rediseño espectacular. Escribenos para más información.' boton='QUIERO MEJORAR MI TIENDA' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1709345698/creatiendaya/tienda_online_peru_hhfxer.png'/>
   {/*   <Formulario/> */}
     <Whatsapp/>
      </main>
     <FooterContent/>
    </div>
  )
}
