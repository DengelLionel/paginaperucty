import React from 'react'
import Head from 'next/head'
import Header from '../../components/layouts/Header'
import StoryComponent from '../../components/StoryComponent'
import BeneficioConocenos from '../../components/BeneficioConocenos'
import Whatsapp from '../../components/Whatsapp'
import FooterContent from '../../components/FooterContent'
import Preguntas from '../../components/Preguntas'
const conocenos= () => {
  const storyTitle = 'La historia detrás de cómo se fundó nuestra agencia de Desarrollo y diseño CREA TIENDA YA';
  const storyImageUrl = 'https://res.cloudinary.com/dh9etf988/image/upload/v1695181735/creatiendaya/datos-que-no-sabias-de-nosotros.png';
  return (
    <>
      <Head>
				<title>Preguntas frecuentes de tener una tienda online shopify</title>
        <meta property="og:image" content="https://res.cloudinary.com/dh9etf988/image/upload/v1705081869/creatiendaya/LOGO_CTY_VERDE_02_iauov1.png" />
				<meta name="description" content="Preguntas frecuentes a saber para tener tu tienda online shopify u otra plataforma"/>
				<meta name="keywords" content="Preguntas frecuentes, crear tienda virtual, potenciar tienda online, ecommerce, emprendimiento, shopify,woocommerce,dropshipping en Perú, dropshipping en México"/>
    <meta name="robots" content="index, follow"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <main className='pb-[40px] pt-[90px] ' >
    <Preguntas/>
   <Whatsapp/>
   </main>
   <FooterContent/>
    </>
  )
}

export default conocenos