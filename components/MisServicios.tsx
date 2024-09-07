import Card from './Card'
import service from "../styles/CardServicios.module.css"
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
const MisServicios = () => {
  return (
   <ContainerGeneral>
    <Titulo titulo="Servicios más Solicitados en ecommerce shopify"/>
    <section className={service.container}>
    <Card url={"/servicios/diseno-tienda-shopify"}  titulo='Diseño de tienda online Shopify' image='https://res.cloudinary.com/dh9etf988/image/upload/v1704297219/creatiendaya/shopify_-servicio_exf90e.jpg'/>
    <Card url={"/servicios/mantenimiento-soporte-tienda-online-shopify"}  titulo='Mantenimiento de tiendas online shopify' image='https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/hombre-adulto-haciendo-compras-linea-dia-ocio-casa-joven-comprando-ropa-online_uuxpql.jpg'/>
    </section>
   </ContainerGeneral>
  )
}

export default MisServicios