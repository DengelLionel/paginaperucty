import React from 'react'
import service from "../styles/CardServicios.module.css"
import CardProyect from './CardProyect'
const Proyectos = () => {
  return (
    <>
     <section className={service.container}>
    <CardProyect usuarioc='bawdra' url={"https://ropalimaperu.myshopify.com/?_ab=0&_fd=0&_sc=1"} titulo='Diseño de tienda de ropa' image='https://res.cloudinary.com/dh9etf988/image/upload/v1704304231/creatiendaya/screenshot-ropalimaperu.myshopify.com-2024.01.03-12_50_12_iedb6s.png'/>
   
    </section>
  </>
  )
}

export default Proyectos