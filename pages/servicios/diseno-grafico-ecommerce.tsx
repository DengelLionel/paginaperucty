import React from 'react'
import Head from 'next/head'
import Header from '../../components/layouts/Header'
import Whatsapp from '../../components/Whatsapp'
import ImagenCuadroAction from '../../components/ImagenCuadroAction'
const DisenoGraficoE = () => {
  return (
    <div>
         <Head>
       <title>Diseño gráfico para ecommerce</title>
       <meta property="og:image" content="https://res.cloudinary.com/dh9etf988/image/upload/v1705081869/creatiendaya/LOGO_CTY_VERDE_02_iauov1.png" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="description" content="Diseño gráfico para tu tienda online" />
        <meta name="keywords" content="diseño gráfico, diseño tienda, diseño Perú"/>
    <link rel="icon" href="/crea_tienda_ya_favicon.ico" />
			</Head>
      <Header/>
<ImagenCuadroAction activarboton={false} titulo='DISEÑO GRÁFICO PARA TU ECOMMERCE' subtitulo='BANNERS WEB, POSTS Y  BANNERS DE COLECCIÓN O CATEGORÍA' textoBoton='PEDIR COTIZACIÓN' link='#' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1704578788/creatiendaya/dise%C3%B1o_grafico_tienda_online_mobil_qojzx6.jpg'/>
<ImagenCuadroAction activarboton={true} titulo='DISEÑO DE BANNERS' subtitulo='Banners para tu tienda online' textoBoton='PEDIR COTIZACIÓN' link='https://wa.link/j8n81d' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1704312339/creatiendaya/Sin_t%C3%ADtulo-1_ajht3f.png'/>
<ImagenCuadroAction activarboton={true} titulo='DISEÑO DE BANNER DE COLECCIÓN' subtitulo='Haz que tu colección sea diferencia de tu competencia' textoBoton='PEDIR COTIZACIÓN' link='https://wa.link/pagm62' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1704596077/creatiendaya/4661893_2458913_1_ufrvso.jpg'/>
<ImagenCuadroAction activarboton={true} titulo='DISEÑO DE POSTS REDES SOCIALES' subtitulo='Posts y feeds para tus redes sociales' textoBoton='PEDIR COTIZACIÓN' link='https://wa.link/mmisxv' imagen='https://res.cloudinary.com/dh9etf988/image/upload/v1704596082/creatiendaya/WhatsApp_Image_2024-01-03_at_6.11.04_PM_htkogg.jpg'/>
<Whatsapp/>
    </div>
  )
}

export default DisenoGraficoE