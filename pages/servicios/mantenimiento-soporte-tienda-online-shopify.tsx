import React from 'react'
import Head from 'next/head'
import Header from '../../components/layouts/Header'
import Prices from '../../components/Prices'
import Whatsapp from '../../components/Whatsapp'
import FooterContent from '../../components/FooterContent'
const Mantenimiento = () => {
  return (
    <div>
       <Head>
       <title>Mantenimiento o soporte de tienda online shopify</title>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:image" content="https://res.cloudinary.com/dh9etf988/image/upload/v1705081869/creatiendaya/LOGO_CTY_VERDE_02_iauov1.png" />
        <meta name="description" content="Mantenimiento y/o soporte para tu tienda online shopify" />
        <meta name="keywords" content="soporte tienda online shopify, mantenimiento shopify, mantenimiento tienda online"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
      <Prices/>
      <Whatsapp/>
      <FooterContent/>
    </div>
  )
}

export default Mantenimiento
