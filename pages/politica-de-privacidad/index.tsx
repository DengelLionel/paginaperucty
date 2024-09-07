import Head from 'next/head'
import Header from '../../components/layouts/Header'
import { useState } from 'react'
import "componentes-dengel/dist/style.css" 
import FooterContent from '../../components/FooterContent'

import Contenido_Politica from '../../components/Contenido_Politica'


export default function Home() {

  return (

    <div>
      <Head>
        <title>Politica de Privacidad</title>
        <meta name="description" content="Politica de privacidad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      <Header/>



      <main className='p-[16px] md:p-[20px] lg:p-[40px]'>
    
        <Contenido_Politica politica='politica_privacidad.md'/>
     
      </main>
   
      <FooterContent/>
 
    </div>
  )
}
