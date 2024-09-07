import React from 'react'
import Head from 'next/head'
import Header from '../components/layouts/Header'
import StoryComponent from '../components/StoryComponent'
import BeneficioConocenos from '../components/BeneficioConocenos'
import Whatsapp from '../components/Whatsapp'
import FooterContent from '../components/FooterContent'
const conocenos= () => {
  const storyTitle = 'La historia detrás de cómo se fundó nuestra agencia de Desarrollo y diseño CREA TIENDA YA';
  const storyImageUrl = 'https://res.cloudinary.com/dh9etf988/image/upload/v1695181735/creatiendaya/datos-que-no-sabias-de-nosotros.png';
  return (
    <>
      <Head>
				<title>Conócenos - Crea Tienda Ya: Expertos en crear y potenciar tienda virtual</title>
        <meta property="og:image" content="https://res.cloudinary.com/dh9etf988/image/upload/v1705081869/creatiendaya/LOGO_CTY_VERDE_02_iauov1.png" />
				<meta name="description" content="Somos un equipo de expertos dedicados a ayudarte a crear y potenciar tu tienda virtual, sin importar el país en el que te encuentres. Conoce nuestra historia, nuestros valores y nuestra pasión por el ecommerce. Estamos aquí para hacer realidad tus espectativas."/>
				<meta name="keywords" content="Conócenos, crea tienda ya, crear tienda virtual, potenciar tienda online, ecommerce, emprendimiento, shopify,woocommerce,dropshipping"/>
    <meta name="robots" content="index, follow"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <main className='pb-[40px] ' >
      <StoryComponent title={storyTitle}  imageUrl={storyImageUrl} videoUrl='https://res.cloudinary.com/dh9etf988/video/upload/v1695174939/creatiendaya/conocenos_crea_tienda_ya_i7abca.mp4'/>
   <BeneficioConocenos/>
   <Whatsapp/>
   </main>
   <FooterContent/>
    </>
  )
}

export default conocenos