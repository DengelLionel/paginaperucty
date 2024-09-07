import Carousel from './Carousel';
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral';
const cards = [
    {
        img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/paginainfo_mwxf1a.png",
        title: 'Desarrollo de tiendas online Shopify',
        color:'bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500',
        titulobutton:'Conocer más',
        href:"https://wa.link/d22djw"
      },
    {
      img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/tienda_ylg91p.png",
      title: 'Diseño de tienda online Shopify',
      color:'bg-gradient-to-t from-green-300 via-blue-500 to-purple-600',
      titulobutton:'Conocer más',
      href:"/servicios/diseno-tienda-shopify"
    },
    {
      img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/aplicaciones_lsahv0.png",
      title: 'Diseño de banners, logos, posts, feeds',
      color:'bg-gradient-to-t from-gray-700 via-gray-900 to-black',
      titulobutton:'Ver más!',
      href:"/servicios/diseno-grafico-ecommerce"
    },
    {
        img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/asesoria_jwkyxb.png",
        title: 'Mantenimiento o soporte',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        titulobutton:'Elegir plan!',
        href:"/servicios/mantenimiento-soporte-tienda-online-shopify"
      },
      {
        img:"https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/sistemasw_oa0zye.png",
        title: 'Desarrollo tienda online dropshipping',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        titulobutton:'Cotizar ahora!',
        href:"https://wa.link/v1x9f7"
      }
     
  ];
const LoQueYoOfrezco = () => {
  return (
    <ContainerGeneral>
       <Titulo idd="ofrezco" titulo='Servicios ecommerce'/>

        <Carousel cards={cards}/>

    </ContainerGeneral>
  )
}

export default LoQueYoOfrezco